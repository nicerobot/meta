// 
//  MText.m
//  metatext
//
//  Created by Robert Nix on 2010.07.07.
//  Copyright 2010 nicerobot.org. All rights reserved.
//

#import "MText.h"
#import "MTItem.h"

@implementation MText

- (NSString*) description {
  return [NSString stringWithFormat:@"%@ %@",
          self.index,
          self.owner];
}

@dynamic index;
@dynamic owner;

@end
