/* scanner for a toy Pascal-like language */

DIGIT    [0-9]
HEX      [0-9a-fA-F]
ID       [a-zA-Z_][a-zA-Z0-9_]*
STR      ["][^"]*["]
CHAR     ['][^'][']
EXPONENT [eE][+-]?[0-9]+

%%

{STR}      {
            printf( "A string: %s (%s)\n", yytext,
                    yytext );
            }

{DIGIT}+    {
            printf( "An integer: %s (%d)\n", yytext,
                    atoi( yytext ) );
            }

{DIGIT}+"."{DIGIT}*{EXPONENT}?|"."{DIGIT}+{EXPONENT}?|{DIGIT}+{EXPONENT} {
            printf( "A float: %s (%g)\n", yytext,
                    atof( yytext ) );
            }

{ID}        printf( "An identifier: %s\n", yytext );

[\{\}\[\]\(\):.]  printf( "A token: %s\n", yytext );

[/][/][^\n\r]*[\r]?\n

[/][*](.|[\n])*?[*][/]

[ \t\r\n]+

.           printf( "Unrecognized character: %s\n", yytext );

%%

main( argc, argv )
int argc;
char **argv;
{
  ++argv, --argc;  /* skip over program name */
  if ( argc > 0 )
    yyin = fopen( argv[0], "r" );
  else
    yyin = stdin;

  yylex();
}
