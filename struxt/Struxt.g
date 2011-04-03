grammar Struxt;

options {
  language=Java;
}

@header {
package org.nicerobot.struxt.parser;
}

@lexer::header {
package org.nicerobot.struxt.parser;
}

struxt
    : node EOF
    ;

node
    : tagname=tag {System.out.format(">");} children {System.out.format("</\%s>",tagname);} 
    | text=STR {System.out.format("\%s ",$text.text);} 
    ;

tag returns [String tagname]
    : nodename=ID {System.out.format("<\%s",$tagname=$nodename.text);} attributes?
	  ;

fragment children
    : '{' childs '}'
    | '[' childs ']'
    | '(' childs ')'
    | (':' node*)? ('.'|';')
    ;

fragment childs
    : node* nodename=tag? {if (null!=nodename) System.out.format("/>");}
    ;

fragment attribute
    : name=ID value=(STR | INT | FLOAT | CHAR)? {System.out.format(" \%s=\%s",(null!=$name?$name.text:"name"),$value.text);}
    | value=(STR | INT | FLOAT | CHAR) name=ID? {System.out.format(" \%s=\%s",(null!=$name?$name.text:"name"),$value.text);}
    ;

fragment attributes
    : attribute ( ',' attribute)*
    ;

ID
    : ('a'..'z'|'A'..'Z'|'_') ('a'..'z'|'A'..'Z'|'0'..'9'|'_')*
    ;

STR
    :  '"' ~('"')* '"'
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

CHAR
    :  '\'' ( ESC_SEQ | ~('\''|'\\') ) '\''
    ;

fragment
EXPONENT
    : ('e'|'E') ('+'|'-')? ('0'..'9')+
    ;

fragment
HEX_DIGIT
    : ('0'..'9'|'a'..'f'|'A'..'F')
    ;

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
