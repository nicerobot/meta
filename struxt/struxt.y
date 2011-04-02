%{
#define YYSTYPE double
#include <math.h>
#include <stdio.h>
int yylex (void);
void yyerror (char const *);
%}

/* Bison declarations.  */
%token ID
%token STR
%token INT
%token FLOAT
%token CHAR

%% /* The grammar follows.  */
struxt
    :
    | node
    ;

node
    : tag children
    | STR
    ;

nodes
    : 
    | node
    | node nodes

etag
    :
    | tag
    ;

tag
    : ID 
    | ID attributes
	  ;

children
    :  '{' nodes etag '}'
    |  '(' nodes etag ')'
    |  '[' nodes etag ']'
    |  ':' nodes      '.'
    ;

attribute
    : ID STR
    | ID INT
    | ID FLOAT
    | ID CHAR
    | STR ID
    | INT ID
    | FLOAT ID
    | CHAR ID
    ;

attributes
    : attribute
    | attribute ',' attributes
    ;
%%
