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
  return [NSString stringWithFormat:@"%@ %@ %@ %@=%@",
          self.did,
          self.item,
          [super description],
          self.name,
          self.text];
}

- (void)setText:(NSString *)metaText
{
  NSMutableString *expanded = [NSMutableString stringWithCapacity:[metaText length]];

  // TODO
  // Parse metaText into components and assign context. This may
  // modify the metaText value.
  for (NSString *word in [metaText componentsSeparatedByString: @" "]) {
    if (0 != [expanded length]) {
      [expanded appendFormat:@" "];
    }
    [expanded appendFormat:@"%@",word];

    /*

     !  priority.                !(number|name)
     ^  calendar | relatives.    ^(now|today|tomorrow|...|date)
     #  tags.                    #tags,list
     @  contact.                 @name
     =  location.                =(log,lat|name)
     ~  duration estimate.       ~NyNtNwNdNhNmNsNi(^date)
     *  repeating.               *TBD
     [  link.                    [(name=)link
     -- multiline markdown
     :: context
     
     */
    switch ([word characterAtIndex:0]) {
      case '!' : // Priority
        break;
      case '^' : // Calendar
        break;
      case '#' : // Tag
        break;
      case '@' : // Contact
        break;
      case '=' : // Location
        [expanded appendFormat:@"=48.858845,2.294351"];
        break;
      case '~' : // Duration
        [expanded appendFormat:@"=1265000033"];
        break;
      case '*' : // Repetition
        [expanded appendFormat:@"=1265000033"];
        break;
      case '[' : // Link
        break;
      case '-' : // Markdown
        break;
      case ':' : // Context
        break;
      default :
        break;
    }
  }
  
  [self willChangeValueForKey:@"text"];
  [self setPrimitiveValue:expanded forKey:@"text"];
  [self didChangeValueForKey:@"text"];
  self.item = (NSString*) CFUUIDCreateString(kCFAllocatorDefault,
                                             CFUUIDCreate(kCFAllocatorDefault));
}

@dynamic did;
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
