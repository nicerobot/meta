//
//  Item_.h
//  metatext
//
//  Created by Robert Nix on 2010.07.07.
//  Copyright 2010 nicerobot.org. All rights reserved.
//

#import <CoreData/CoreData.h>
#import "MetaText_.h"

@class Calendar_;
@class Contact_;
@class Duration_;
@class ItemPriority_;
@class ItemTag_;
@class Link_;
@class Location_;
@class Repetition_;

@interface Item_ :  MetaText_  
{
}

@property (nonatomic, retain) NSString * item;
@property (nonatomic, retain) NSString * text;
@property (nonatomic, retain) NSString * name;
@property (nonatomic, retain) NSSet* calendars;
@property (nonatomic, retain) NSSet* tags;
@property (nonatomic, retain) NSSet* children;
@property (nonatomic, retain) NSSet* repetitions;
@property (nonatomic, retain) NSSet* contacts;
@property (nonatomic, retain) NSSet* locations;
@property (nonatomic, retain) ItemPriority_ * priority;
@property (nonatomic, retain) NSSet* durations;

@end


@interface Item_ (CoreDataGeneratedAccessors)
- (void)addCalendarsObject:(Calendar_ *)value;
- (void)removeCalendarsObject:(Calendar_ *)value;
- (void)addCalendars:(NSSet *)value;
- (void)removeCalendars:(NSSet *)value;

- (void)addTagsObject:(ItemTag_ *)value;
- (void)removeTagsObject:(ItemTag_ *)value;
- (void)addTags:(NSSet *)value;
- (void)removeTags:(NSSet *)value;

- (void)addChildrenObject:(Link_ *)value;
- (void)removeChildrenObject:(Link_ *)value;
- (void)addChildren:(NSSet *)value;
- (void)removeChildren:(NSSet *)value;

- (void)addRepetitionsObject:(Repetition_ *)value;
- (void)removeRepetitionsObject:(Repetition_ *)value;
- (void)addRepetitions:(NSSet *)value;
- (void)removeRepetitions:(NSSet *)value;

- (void)addContactsObject:(Contact_ *)value;
- (void)removeContactsObject:(Contact_ *)value;
- (void)addContacts:(NSSet *)value;
- (void)removeContacts:(NSSet *)value;

- (void)addLocationsObject:(Location_ *)value;
- (void)removeLocationsObject:(Location_ *)value;
- (void)addLocations:(NSSet *)value;
- (void)removeLocations:(NSSet *)value;

- (void)addDurationsObject:(Duration_ *)value;
- (void)removeDurationsObject:(Duration_ *)value;
- (void)addDurations:(NSSet *)value;
- (void)removeDurations:(NSSet *)value;

@end

