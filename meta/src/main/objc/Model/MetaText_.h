//
//  MetaText_.h
//  metatext
//
//  Created by Robert Nix on 2010.07.07.
//  Copyright 2010 nicerobot.org. All rights reserved.
//

#import <CoreData/CoreData.h>

@class Item_;

@interface MetaText_ :  NSManagedObject  
{
}

@property (nonatomic, retain) NSNumber * index;
@property (nonatomic, retain) Item_ * owner;

@end



