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

@members {
    public static void main(String... args) throws IOException {
      ANTLRStringStream st = null;
      if (0 == args.length) {
        st = new ANTLRInputStream(System.in);
      } else {
        st = new ANTLRFileStream(args[0]);
      }
      try {
        new StruxtParser(new CommonTokenStream(new StruxtLexer(st))).struxt();
      } catch (RecognitionException e)  {
        e.printStackTrace();
      }
      System.out.println();
    }

    public static void _out(String s) {
      System.out.print(s);
    }

    public static String open(Token ns, Token nodename) {
      String tag=(null!=ns?ns.getText()+":":"")+nodename.getText();
      _out(String.format("<\%s",tag));
      return tag;
    }

    public static String singleline(String s) {
      return s.replaceAll("\\r?\\n","");
    }

    public static String unquote(String s) {
      int q=0;
      if (s.startsWith("'''")) q+=3;
      if (s.startsWith("!!!")) q+=3;
      if (s.startsWith("\"\"\"")) q+=2;
      if (s.startsWith("\"")) q+=1;
      if (0==q) return s;
      return s.substring(q,s.length()-q);
    }

    public static void attr(Token ns, Token name, Token op, Token value) {
      String v = unquote(singleline(null!=value?value.getText():"true"));
      // TODO: Make "value" configurable (per namespace?)
      _out(String.format(" \%s\%s=\"\%s\%s\"",
        (null!=ns?ns.getText()+":":""),
        (null!=name?name.getText():"id"),
        (null!=op?op.getText():""),
        v));
    }
    
}

struxt
    : xml=xmldecl?
      doctype=DOC? { if (null!=$doctype)_out(String.format("<!DOCTYPE \%s>\n",unquote($doctype.text))); }
      node EOF
    ;

xmldecl returns [String attrs]
    : XML { _out("<?xml"); } attributes '.' { _out(" ?>\n"); }
    ;

node
    : tagname=tag { _out(">"); }
      /* TODO: If there are no children, close the open tag. */
      children { _out(String.format("</\%s>",tagname)); }
    | text=STR
      { _out(String.format("\%s",unquote($text.text))); }
    ;

tag returns [String tagname]
    : nodename=ID (('@'|'\\') ns=ID)? { $tagname=open($ns,$nodename); } attributes?
	  ;

fragment children
    : '{' childs '}'
    | (':' node*)? ('.'|';')
    ;

fragment childs
    : node* nodename=tag? { if (null!=nodename) System.out.format("/>"); }
    ;

fragment attribute
    : (ns=ID ('!'|'#') name=ID | name=ID ( ('@'|'\\') ns=ID)?) o=OP? v=value? { attr($ns,$name,$o,v); }
    | v=value o=OP? (ns=ID  ('!'|'#') name=ID | name=ID (('@'|'\\') ns=ID)?)? { attr($ns,$name,$o,v); }
    ;

fragment value returns [Token value]
    : (STR | INT | FLOAT | CHAR)
    ;

fragment attributes
    : attribute ( ',' attribute)*
    | '(' attribute ( (','|';'|'.') attribute)* ')'
    | '[' attribute ( (','|';'|'.') attribute)* ']'
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
