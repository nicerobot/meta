//
//  Metatext.h
//  Metatext
//
//  Created by Robert Nix on 2010.07.07.
//  Copyright 2010 nicerobot.org. All rights reserved.
//

#import <Cocoa/Cocoa.h>

@interface Metatext : NSObject {
  NSPersistentStoreCoordinator *persistentStoreCoordinator;
  NSManagedObjectModel *managedObjectModel;
  NSManagedObjectContext *managedObjectContext;
}

@property (nonatomic, retain, readonly) NSPersistentStoreCoordinator *persistentStoreCoordinator;
@property (nonatomic, retain, readonly) NSManagedObjectModel *managedObjectModel;
@property (nonatomic, retain, readonly) NSManagedObjectContext *managedObjectContext;

- (IBAction)saveAction:sender;

@end

int ShellApplicationMain(int argc, const char * argv[]);
