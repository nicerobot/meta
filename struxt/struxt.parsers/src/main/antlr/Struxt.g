grammar Struxt;

options {
  language=Java;
}

@header {
package org.nicerobot.struxt.parser;
import java.io.IOException;
}

@lexer::header {
package org.nicerobot.struxt.parser;
}

struxt
    : xml=xmldecl?
      doctype=DOC?
      node EOF
    ;

xmldecl
    : XML attributes '.'
    ;

node
    : tagname=tag
      /* TODO: If there are no children, close the open tag. */
      children
    | text=STR
    ;

tag
    : name attributes?
	  ;

fragment children
    : '{' childs '}'
    | (':' node*)? ('.'|';')
    ;

fragment childs
    : node* nodename=tag?
    ;

fragment attribute
    : n=name o=OP? v=value?
    | v=value o=OP? n=name?
    | n=name o=OP v=name
    ;

fragment name
    : (ns PRENS ID | ID ( POSTNS ns)?)
    ;

fragment ns
    : ID
    ;

fragment value
    : (STR | INT | FLOAT | CHAR)
    ;

fragment attributes
    : attribute ( ',' attribute)*
    | '(' attribute ( (','|';'|'.') attribute)* ')'
    | '[' attribute ( (','|';'|'.') attribute)* ']'
    ;

PRENS
    : ('!'|'#')
    ;

POSTNS
    : ('@'|'\\')
    ;

OP
    : ('<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&'
    | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?')
    ;

ID
    : ('a'..'z'|'A'..'Z'|'_') ('a'..'z'|'A'..'Z'|'0'..'9'|'_'|'-')*
    ;

XML
    : '?xml'
    ;

DOC
    : '!!!' (options {greedy=false;}:.)+ '!!!'
    ;

STR
    : '"""' (options {greedy=false;}:.)* '"""'
    | '\'\'\'' (options {greedy=false;}:.)* '\'\'\''
    |'"' ~('"')* '"'
    ;

COMMENT
    :   '//' ~('\n'|'\r')* '\r'? '\n' {$channel=HIDDEN;}
    |   '/*' ( options {greedy=false;} : . )* '*/' {$channel=HIDDEN;}
    ;

WS
    :   ( ' '
        | '\t'
        | '\r'
        | '\n'
        ) {$channel=HIDDEN;}
    ;

INT :	'0'..'9'+
    ;

FLOAT
    :   ('0'..'9')+ '.' ('0'..'9')* EXPONENT? 
    |   '.' ('0'..'9')+ EXPONENT?
    |   ('0'..'9')+ EXPONENT
    ;

CHAR
    :  '\'' ~('\'')+ '\''
    ;

fragment
EXPONENT
    : ('e'|'E') ('+'|'-')? ('0'..'9')+
    ;

fragment
HEX_DIGIT
    : ('0'..'9'|'a'..'f'|'A'..'F')
    ;
