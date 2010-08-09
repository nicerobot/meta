//
//  MTDuration.h
//  metatext
//
//  Created by Robert Nix on 2010.07.07.
//  Copyright 2010 nicerobot.org. All rights reserved.
//

#import <CoreData/CoreData.h>
#import "MText.h"


@interface MTDuration :  MText  
{
}

@property (nonatomic, retain) NSNumber * milliseconds;

@end



