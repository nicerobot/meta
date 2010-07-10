//
//  Location_.h
//  metatext
//
//  Created by Robert Nix on 2010.07.07.
//  Copyright 2010 nicerobot.org. All rights reserved.
//

#import <CoreData/CoreData.h>
#import "MetaText_.h"


@interface Location_ :  MetaText_  
{
}

@property (nonatomic, retain) NSString * name;
@property (nonatomic, retain) NSNumber * longitude;
@property (nonatomic, retain) NSNumber * latitude;

@end



