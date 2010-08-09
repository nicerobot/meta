// 
//  MTItem.m
//  metatext
//
//  Created by Robert Nix on 2010.07.07.
//  Copyright 2010 nicerobot.org. All rights reserved.
//

#import "MTItem.h"

#import "MTCalendar.h"
#import "MTContact.h"
#import "MTDuration.h"
#import "MTItemPriority.h"
#import "MTItemTag.h"
#import "MTLink.h"
#import "MTLocation.h"
#import "MTRepetition.h"

@implementation MTItem 

- (NSString*) description {
  return [NSString stringWithFormat:@"%@ %@ %@=%@",
          self.item,
          [super description],
          self.name,
          self.text];
}

- (void)setText:(NSString *)metaText
{
  // TODO
  // Parse metaText into components and assign context. This may
  // modify the metaText value.

  [self willChangeValueForKey:@"text"];
  [self setPrimitiveValue:metaText forKey:@"text"];
  [self didChangeValueForKey:@"text"];
  self.item = (NSString*) CFUUIDCreateString(kCFAllocatorDefault,
                                             CFUUIDCreate(kCFAllocatorDefault));
}

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
