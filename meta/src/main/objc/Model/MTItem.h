//
//  MTItem.h
//  metatext
//
//  Created by Robert Nix on 2010.07.07.
//  Copyright 2010 nicerobot.org. All rights reserved.
//

#import <CoreData/CoreData.h>
#import "MText.h"

@class MTCalendar;
@class MTContact;
@class MTDuration;
@class MTItemPriority;
@class MTItemTag;
@class MTLink;
@class MTLocation;
@class MTRepetition;

@interface MTItem :  MText  
{
}

- (void)setText:(NSString *)aString;

@property (nonatomic, retain) NSString * item;
@property (nonatomic, retain) NSString * text;
@property (nonatomic, retain) NSString * name;
@property (nonatomic, retain) NSSet* calendars;
@property (nonatomic, retain) NSSet* tags;
@property (nonatomic, retain) NSSet* children;
@property (nonatomic, retain) NSSet* repetitions;
@property (nonatomic, retain) NSSet* contacts;
@property (nonatomic, retain) NSSet* locations;
@property (nonatomic, retain) MTItemPriority * priority;
@property (nonatomic, retain) NSSet* durations;

@end


@interface MTItem (CoreDataGeneratedAccessors)
- (void)addCalendarsObject:(MTCalendar *)value;
- (void)removeCalendarsObject:(MTCalendar *)value;
- (void)addCalendars:(NSSet *)value;
- (void)removeCalendars:(NSSet *)value;

- (void)addTagsObject:(MTItemTag *)value;
- (void)removeTagsObject:(MTItemTag *)value;
- (void)addTags:(NSSet *)value;
- (void)removeTags:(NSSet *)value;

- (void)addChildrenObject:(MTLink *)value;
- (void)removeChildrenObject:(MTLink *)value;
- (void)addChildren:(NSSet *)value;
- (void)removeChildren:(NSSet *)value;

- (void)addRepetitionsObject:(MTRepetition *)value;
- (void)removeRepetitionsObject:(MTRepetition *)value;
- (void)addRepetitions:(NSSet *)value;
- (void)removeRepetitions:(NSSet *)value;

- (void)addContactsObject:(MTContact *)value;
- (void)removeContactsObject:(MTContact *)value;
- (void)addContacts:(NSSet *)value;
- (void)removeContacts:(NSSet *)value;

- (void)addLocationsObject:(MTLocation *)value;
- (void)removeLocationsObject:(MTLocation *)value;
- (void)addLocations:(NSSet *)value;
- (void)removeLocations:(NSSet *)value;

- (void)addDurationsObject:(MTDuration *)value;
- (void)removeDurationsObject:(MTDuration *)value;
- (void)addDurations:(NSSet *)value;
- (void)removeDurations:(NSSet *)value;

@end

