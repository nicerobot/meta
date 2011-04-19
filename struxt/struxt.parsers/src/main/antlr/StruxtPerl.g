grammar StruxtPerl;

options {
  language=Perl;
}

struxt returns [StruxtPerlParser self]
    : xml=xmldecl?
      doctype=DOC?
      node EOF
    ;

xmldecl
    : XML attributes '.'
    ;

node
    : tag children
    | text=value
    | cdata=CDATA
    ;

tag
    : n=name attributes?
	  ;

fragment children
    : '{' childs '}'
    | (':' node*)? ('.'|';'|EOF)
    ;

fragment childs
    : node* nodename=tag?
    ;

fragment attribute
    : n=name o=OP? v=value?
    | v=value o=OP? n=name?
    | n=name o=OP n1=name
    | o=OP (n=name|v=value)
    ;

fragment name returns [Token namespace, Token nodename]
    : (s=ns PRENS n=ID | n=ID ( POSTNS s=ns)?)
    ;

fragment ns returns [Token namespace]
    : s=ID
    ;

fragment value returns [String s]
    : v=(STR | INT | FLOAT | CHAR)
    ;

fragment attributes
    : attribute ( ',' attribute)*
    | '(' attribute ( (','|';'|'.') attribute)* ')'
    | '[' attribute ( (','|';'|'.') attribute)* ']'
    ;

PRENS
    : ('!'|'#'|'::')
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

CDATA
    : '[["' (options {greedy=false;}:.)+ '"]]'
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
