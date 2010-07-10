/*
 *  main.c
 *  Desktop
 *
 *  Created by Robert Nix on 2010.07.07.
 *  Copyright 2010 nicerobot.org. All rights reserved.
 *
 */
#import "Metatext.h"

int main (int argc, const char * argv[]) {
  NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
  int retVal = ShellApplicationMain(argc, argv);
  [pool release];  
  return retVal;
}
