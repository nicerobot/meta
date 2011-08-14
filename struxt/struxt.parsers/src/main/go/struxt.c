#include <stdio.h>
#include <stdlib.h>

int stack[1024];
int stackp= -1;

int push(int n)	{ return stack[++stackp]= n; }
int pop(void)	{ return stack[stackp--]; }

#include "struxt.c.c"

int main()
{
  while (yyparse());

  return 0;
}
