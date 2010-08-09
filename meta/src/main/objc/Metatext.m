//
//  Metatext.m
//  Metatext
//
//  Created by Robert Nix on 2010.07.07.
//  Copyright 2010 nicerobot.org. All rights reserved.
//

#import "Metatext.h"
#import "MTItem.h"

@implementation Metatext 

/**
 Returns the support directory for the application, used to store the Core Data
 store file.  This code uses a directory named "Desktop" for
 the content, either in the NSApplicationSupportDirectory location or (if the
 former cannot be found), the system's temporary directory.
 */

- (NSString *)applicationSupportDirectory {

  NSArray *paths = NSSearchPathForDirectoriesInDomains(NSApplicationSupportDirectory,
                                                       NSUserDomainMask,
                                                       YES);
  NSString *basePath
  = ([paths count] > 0)
  ? [paths objectAtIndex:0]
  : NSTemporaryDirectory();

  return [basePath stringByAppendingPathComponent:@"Metatext"];
}


/**
 Creates, retains, and returns the managed object model for the application 
 by merging all of the models found in the application bundle.
 */

- (NSManagedObjectModel *)managedObjectModel {
  
  if (managedObjectModel) return managedObjectModel;
	
  managedObjectModel = [[NSManagedObjectModel mergedModelFromBundles:nil] retain];
  //NSLog(@"%@",managedObjectModel);
  return managedObjectModel;
}


/**
 Returns the persistent store coordinator for the application.  This 
 implementation will create and return a coordinator, having added the 
 store for the application to it.  (The directory for the store is created, 
 if necessary.)
 */

- (NSPersistentStoreCoordinator *) persistentStoreCoordinator {
  
  if (persistentStoreCoordinator) return persistentStoreCoordinator;
  
  NSManagedObjectModel *mom = [self managedObjectModel];
  if (!mom) {
    NSAssert(NO, @"Managed object model is nil");
    NSLog(@"%@:%s No model to generate a store from", [self class], _cmd);
    return nil;
  }
  
  NSFileManager *fileManager = [NSFileManager defaultManager];
  NSString *applicationSupportDirectory = [self applicationSupportDirectory];
  NSError *error = nil;
  
  if ( ![fileManager fileExistsAtPath:applicationSupportDirectory
                          isDirectory:NULL] ) {
		if (![fileManager createDirectoryAtPath:applicationSupportDirectory
                withIntermediateDirectories:NO
                                 attributes:nil
                                      error:&error]) {
      NSAssert(NO, ([NSString stringWithFormat:@"Failed to create App Support directory %@ : %@",
                     applicationSupportDirectory,error]));
      NSLog(@"Error creating application support directory at %@ : %@",
            applicationSupportDirectory,error);
      return nil;
		}
  }
  
  NSURL *url = [NSURL fileURLWithPath: [applicationSupportDirectory
                                        stringByAppendingPathComponent:@"metatext.sqlite"]];
  persistentStoreCoordinator = [[NSPersistentStoreCoordinator alloc] initWithManagedObjectModel: mom];
  if (![persistentStoreCoordinator addPersistentStoreWithType:NSXMLStoreType 
                                                configuration:nil 
                                                          URL:url 
                                                      options:nil 
                                                        error:&error]){
    NSLog(@"%@",error);
    [persistentStoreCoordinator release], persistentStoreCoordinator = nil;
    return nil;
  }    
  
  return persistentStoreCoordinator;
}

/**
 Returns the managed object context for the application (which is already
 bound to the persistent store coordinator for the application.) 
 */

- (NSManagedObjectContext *) managedObjectContext {
  
  if (managedObjectContext) return managedObjectContext;
  
  NSPersistentStoreCoordinator *coordinator = [self persistentStoreCoordinator];
  if (!coordinator) {
    NSMutableDictionary *dict = [NSMutableDictionary dictionary];
    [dict setValue:@"Failed to initialize the store"
            forKey:NSLocalizedDescriptionKey];
    [dict setValue:@"There was an error building up the data file."
            forKey:NSLocalizedFailureReasonErrorKey];
    NSError *error = [NSError errorWithDomain:@"nicerobot.org"
                                         code:9999
                                     userInfo:dict];
    NSLog(@"%@",error);
    return nil;
  }
  managedObjectContext = [[NSManagedObjectContext alloc] init];
  [managedObjectContext setPersistentStoreCoordinator: coordinator];
  
  return managedObjectContext;
}

/**
 Performs the save action for the application, which is to send the save:
 message to the application's managed object context.  Any encountered errors
 are presented to the user.
 */

- (void)save {
  
  NSError *error = nil;
  
  if (![[self managedObjectContext] commitEditing]) {
    NSLog(@"%@:%s unable to commit editing before saving", [self class], _cmd);
  }
  
  if (![[self managedObjectContext] save:&error]) {
    NSLog(@"%@:%@ unable to save", [self class], error);
  }
}

/**
 Implementation of dealloc, to release the retained variables.
 */

- (void)dealloc {
  
  [managedObjectContext release];
  [persistentStoreCoordinator release];
  [managedObjectModel release];
	
  [super dealloc];
}

@end

/**
 *
 */
int ShellApplicationMain(int argc, const char * argv[]) {

  Metatext *m = [[Metatext alloc] init];

  NSManagedObjectContext *moc = [m managedObjectContext];

  if (moc) {
    for (int a=1; a<argc; a++) {
      MTItem *item = [NSEntityDescription insertNewObjectForEntityForName:@"Item"
                                                   inManagedObjectContext:moc];
      item.text = [NSString stringWithUTF8String:argv[a]];
      NSLog(@"%@", item);
    }  
    
    [m save];
  }
  [m release];

  return EXIT_SUCCESS;
}
