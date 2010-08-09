//
//  MTRepetition.h
//  metatext
//
//  Created by Robert Nix on 2010.07.07.
//  Copyright 2010 nicerobot.org. All rights reserved.
//

#import <CoreData/CoreData.h>
#import "MText.h"


@interface MTRepetition :  MText  
{
}

@property (nonatomic, retain) NSString * field;
@property (nonatomic, retain) NSNumber * repeat;

@end



