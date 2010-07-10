// 
//  Item_.m
//  metatext
//
//  Created by Robert Nix on 2010.07.07.
//  Copyright 2010 nicerobot.org. All rights reserved.
//

#import "Item_.h"

#import "Calendar_.h"
#import "Contact_.h"
#import "Duration_.h"
#import "ItemPriority_.h"
#import "ItemTag_.h"
#import "Link_.h"
#import "Location_.h"
#import "Repetition_.h"

@implementation Item_ 

@dynamic item;
@dynamic text;
@dynamic name;
@dynamic calendars;
@dynamic tags;
@dynamic children;
@dynamic repetitions;
@dynamic contacts;
@dynamic locations;
@dynamic priority;
@dynamic durations;

@end
