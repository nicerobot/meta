grammar struxt;

options {
  language=Java;
  output=AST;
  ASTLabelType=CommonTree;
}

@header {
package org.nicerobot.struxt.parser;
}

@lexer::header {
package org.nicerobot.struxt.parser;
}

struxt
    : root=node EOF
    ;

node
    : tag children
    | STR
    ;

tag
    : nodename=ID attrs=attributes?
	  ;

fragment children
    : '{' node* tag? '}'
    | '[' node* tag? ']'
    | '(' node* tag? ')'
    | (':' node*)? ('.'|';')
    ;

fragment attribute
    : name=ID value=(STR | INT | FLOAT | CHAR)
    | value=(STR | INT | FLOAT | CHAR) name=ID
    ;

fragment attributes
    : attribute ( ',' attribute)*
    ;

ID  :	('a'..'z'|'A'..'Z'|'_') ('a'..'z'|'A'..'Z'|'0'..'9'|'_')*
    ;

STR
    :  '"' ~('"')* '"'
    ;

COMMENT
    :   '//' ~('\n'|'\r')* '\r'? '\n' {$channel=HIDDEN;}
    |   '/*' ( options {greedy=false;} : . )* '*/' {$channel=HIDDEN;}
    ;

WS  :   ( ' '
        | '\t'
        | '\r'
        | '\n'
        ) {$channel=HIDDEN;}
    ;

STRING
    :  '"' ( ESC_SEQ | ~('\\'|'"') )* '"'
    ;

INT :	'0'..'9'+
    ;

FLOAT
    :   ('0'..'9')+ '.' ('0'..'9')* EXPONENT?
    |   '.' ('0'..'9')+ EXPONENT?
    |   ('0'..'9')+ EXPONENT
    ;

CHAR:  '\'' ( ESC_SEQ | ~('\''|'\\') ) '\''
    ;

fragment
EXPONENT : ('e'|'E') ('+'|'-')? ('0'..'9')+ ;

fragment
HEX_DIGIT : ('0'..'9'|'a'..'f'|'A'..'F') ;

fragment
ESC_SEQ
    :   '\\' ('b'|'t'|'n'|'f'|'r'|'\"'|'\''|'\\')
    |   UNICODE_ESC
    |   OCTAL_ESC
    ;

fragment
OCTAL_ESC
    :   '\\' ('0'..'3') ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7')
    ;

fragment
UNICODE_ESC
    :   '\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT
    ;

BOPEN
    : '{'
    ;

BCLOSE
    : '}'
    ;

COPEN
    : ':'
    ;

CCLOSE
    : '.'
    ;

DOPEN
    : '('
    ;

DCLOSE
    : ')'
    ;

EOPEN
    : '['
    ;

ECLOSE
    : ']'
    ;
