grammar StruxtJava;

options {
  language=Java;
}

@header {
package org.nicerobot.struxt.parser;

import java.io.IOException;
import java.util.HashMap;
import java.util.Stack;

import org.antlr.runtime.ANTLRFileStream;
import org.antlr.runtime.ANTLRInputStream;
import org.antlr.runtime.ANTLRStringStream;
import org.antlr.runtime.BaseRecognizer;
import org.antlr.runtime.BitSet;
import org.antlr.runtime.CommonTokenStream;
import org.antlr.runtime.DFA;
import org.antlr.runtime.MismatchedSetException;
import org.antlr.runtime.NoViableAltException;
import org.antlr.runtime.Parser;
import org.antlr.runtime.ParserRuleReturnScope;
import org.antlr.runtime.RecognitionException;
import org.antlr.runtime.RecognizerSharedState;
import org.antlr.runtime.Token;
import org.antlr.runtime.TokenStream;
import org.jdom.Comment;
import org.jdom.Content;
import org.jdom.Document;
import org.jdom.Element;
import org.jdom.CDATA;
import org.jdom.Namespace;
import org.jdom.ProcessingInstruction;
import org.jdom.Text;
import org.jdom.output.Format;
import org.jdom.output.XMLOutputter;
}

@members {

  public static final Document document = new Document();

  private static final Stack<Content> stack = new Stack<Content>();
  private static final HashMap<String,Namespace> namespaces = new HashMap<String,Namespace>();

  public static Content getCurrent () {
    if (!stack.empty()) {
      return stack.peek();
    }
    return null;
  }

  public static Namespace getNS (String name) {
    Namespace ns = null;
    if (null != name) {
      ns = namespaces.get(name);
      if (null == ns) {
        ns = Namespace.getNamespace(name,name);
      }
    }
    return ns;
  }

  public Content addPI (String name) {
    // TODO: Handle PIs
    final Content child = new Element(name);
    stack.push(child);
    return child;
  }

  public Content addText (String text) {
    final Content node = getCurrent();
    ((Element)node).addContent(new Text(unquote(text)));
    return node;
  }

  public Content addCDATA (String text) {
    final Content node = getCurrent();
    ((Element)node).addContent(new CDATA(unquote(text)));
    return node;
  }

  public Content addNode (Token ns, Token name) {
    final String s = null!=ns?ns.getText():"";
    final String n = name.getText();
    Content child = new Element(n,getNS(s));
    final Element parent = (Element) getCurrent();
    if (null != parent) {
      parent.addContent(child);
    } else {
      document.addContent(child);
    }
    stack.push(child);
    return child;
  }

  public Content closeNode () {
    return stack.pop();
  }

  public Content addAttribute (StruxtJavaParser.name_return name, StruxtJavaParser.name_return name1) {
    String v = null;
    if (null != name1) {
      String n1 = null!=name1.nodename?name1.nodename.getText():"id";
      v = null!=name1.namespace?name1.namespace.getText()+":"+n1:n1;
    }
    return addAttribute(name,v);
  }

  public Content addAttribute (StruxtJavaParser.name_return name, String value) {
    final Content node = getCurrent();
    String s = (null!=name && null!=name.namespace)?name.namespace.getText():null;

    String n = null;
    if (null!=name && null!=name.nodename) {
      n = name.nodename.getText();
    } else {
      if (null == node) {
        n = "id";
      } else {
        Element ne = (Element)node;
        String ns = ne.getNamespaceURI();
        String na = ne.getName();
        // TODO: Implement struxt-config support to make these defaults
        // user-customizable and namespace sensitive.
        if ("a".equals(na)) {
          n = "href";
        } else if ("control".equals(na)
          || "input".equals(na)
          || "param".equals(na)) {
          n = "name";
        } else if ("img".equals(na)
          || "frame".equals(na)
          || "iframe".equals(na)
          || "script".equals(na)) {
          n = "src";
        } else if ("option".equals(na)) {
          n = "value";
        } else if ("form".equals(na)) {
          n = "action";
        } else if ("value-of".equals(na)) {
          n = "select";
        } else {
          // TODO: provide support to add multiple unqualified values.
          // That is, a "b", "c", "d". => <a id="b" id1="c" id2="d"/>
          n = "id";
        }
      }
    }
    final String v = unquote(singleline(null!=value?value:"true"));
    Element el = ((Element)node);

    Namespace jns = null;
    Namespace ens = null;
    
    if ("xmlns".equals(n) || "xmlns".equals(s)) {
      ens = el.getNamespace();
      
      String ns = "xmlns".equals(n) ? "" : n;
      jns = Namespace.getNamespace(ns,v);
      namespaces.put(ns,jns);

      if (ns.equals(ens.getPrefix())) {
        if (!v.equals(ens.getURI())) {
           el.setNamespace(jns);
         }
      } else {
        el.addNamespaceDeclaration(jns);
      }
      return node;
    }
    
    if (null == s) {
      jns=Namespace.NO_NAMESPACE;
    } else {
      jns=getNS(s);
    }
    el.setAttribute(n,v,jns);
    return node;
  }

  public Content addComment (String comment) {
    final Content node = getCurrent();
    ((Element)node).addContent(new Comment(comment));
    return node;
  }

  @Override
  public String toString () {
    return new XMLOutputter(Format.getPrettyFormat()).outputString(document);
  }
  
  public static void main(String... args) throws IOException {
    ANTLRStringStream st = null;
    if (0 == args.length) {
      st = new ANTLRInputStream(System.in);
    } else {
      st = new ANTLRFileStream(args[0]);
    }
    try {
      System.out.print(new StruxtJavaParser(new CommonTokenStream(new StruxtJavaLexer(st))).struxt());
    } catch (RecognitionException e)  {
      e.printStackTrace();
    }
  }

  public static String singleline(String s) {
    return s.replaceAll("\\r?\\n","");
  }

  public static String unquote(String s) {
    int q=0;
    if (s.startsWith("'''")) q+=3;
    else if (s.startsWith("[[\"")) q+=3;
    else if (s.startsWith("!!!")) q+=3;
    else if (s.startsWith("\"\"\"")) q+=2;
    if (s.startsWith("\"")) q+=1;
    if (0==q) return s;
    return s.substring(q,s.length()-q);
  }
  
}

@lexer::header {
package org.nicerobot.struxt.parser;
}

struxt returns [StruxtJavaParser self]
    : xml=xmldecl?
      doctype=DOC?
      node EOF {self=this;}
    ;

xmldecl
    : XML {addPI("xml");} attributes '.' {closeNode();}
    ;

node
    : tag children {closeNode();}
    | text=value {addText($text);}
    | cdata=CDATA {addCDATA($cdata.text);}
    ;

tag
    : n=name {addNode(n.namespace, n.nodename);} attributes?
	  ;

fragment children
    : '{' childs '}'
    | (':' node*)? ('.'|';'|EOF)
    ;

fragment childs
    : node* nodename=tag?
    ;

fragment attribute
    : n=name o=OP? v=value? {addAttribute(n,v);}
    | v=value o=OP? n=name? {addAttribute(n,v);}
    | n=name o=OP n1=name {addAttribute(n, n1);}
    | o=OP (n=name|v=value) {addAttribute(n,v);}
    ;

fragment name returns [Token namespace, Token nodename]
    : (s=ns PRENS n=ID | n=ID ( POSTNS s=ns)?) {$namespace=s; $nodename=n;}
    ;

fragment ns returns [Token namespace]
    : s=ID {$namespace=$s;}
    ;

fragment value returns [String s]
    : v=(STR | INT | FLOAT | CHAR) {s=$v.text;}
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
