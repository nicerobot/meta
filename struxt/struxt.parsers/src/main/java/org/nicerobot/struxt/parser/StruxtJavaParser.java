// $ANTLR 3.3 Nov 30, 2010 12:46:29 /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g 2011-04-19 00:09:41

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


import org.antlr.runtime.*;
import java.util.Stack;
import java.util.List;
import java.util.ArrayList;

public class StruxtJavaParser extends Parser {
    public static final String[] tokenNames = new String[] {
        "<invalid>", "<EOR>", "<DOWN>", "<UP>", "DOC", "XML", "CDATA", "OP", "PRENS", "ID", "POSTNS", "STR", "INT", "FLOAT", "CHAR", "COMMENT", "WS", "EXPONENT", "HEX_DIGIT", "'.'", "'{'", "'}'", "':'", "';'", "','", "'('", "')'", "'['", "']'"
    };
    public static final int EOF=-1;
    public static final int T__19=19;
    public static final int T__20=20;
    public static final int T__21=21;
    public static final int T__22=22;
    public static final int T__23=23;
    public static final int T__24=24;
    public static final int T__25=25;
    public static final int T__26=26;
    public static final int T__27=27;
    public static final int T__28=28;
    public static final int DOC=4;
    public static final int XML=5;
    public static final int CDATA=6;
    public static final int OP=7;
    public static final int PRENS=8;
    public static final int ID=9;
    public static final int POSTNS=10;
    public static final int STR=11;
    public static final int INT=12;
    public static final int FLOAT=13;
    public static final int CHAR=14;
    public static final int COMMENT=15;
    public static final int WS=16;
    public static final int EXPONENT=17;
    public static final int HEX_DIGIT=18;

    // delegates
    // delegators


        public StruxtJavaParser(TokenStream input) {
            this(input, new RecognizerSharedState());
        }
        public StruxtJavaParser(TokenStream input, RecognizerSharedState state) {
            super(input, state);
             
        }
        

    public String[] getTokenNames() { return StruxtJavaParser.tokenNames; }
    public String getGrammarFileName() { return "/Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g"; }



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
      



    // $ANTLR start "struxt"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:230:1: struxt returns [StruxtJavaParser self] : (xml= xmldecl )? (doctype= DOC )? node EOF ;
    public final StruxtJavaParser struxt() throws RecognitionException {
        StruxtJavaParser self = null;

        Token doctype=null;

        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:231:5: ( (xml= xmldecl )? (doctype= DOC )? node EOF )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:231:7: (xml= xmldecl )? (doctype= DOC )? node EOF
            {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:231:10: (xml= xmldecl )?
            int alt1=2;
            int LA1_0 = input.LA(1);

            if ( (LA1_0==XML) ) {
                alt1=1;
            }
            switch (alt1) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:231:10: xml= xmldecl
                    {
                    pushFollow(FOLLOW_xmldecl_in_struxt53);
                    xmldecl();

                    state._fsp--;


                    }
                    break;

            }

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:232:14: (doctype= DOC )?
            int alt2=2;
            int LA2_0 = input.LA(1);

            if ( (LA2_0==DOC) ) {
                alt2=1;
            }
            switch (alt2) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:232:14: doctype= DOC
                    {
                    doctype=(Token)match(input,DOC,FOLLOW_DOC_in_struxt64); 

                    }
                    break;

            }

            pushFollow(FOLLOW_node_in_struxt73);
            node();

            state._fsp--;

            match(input,EOF,FOLLOW_EOF_in_struxt75); 
            self=this;

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return self;
    }
    // $ANTLR end "struxt"


    // $ANTLR start "xmldecl"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:236:1: xmldecl : XML attributes '.' ;
    public final void xmldecl() throws RecognitionException {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:237:5: ( XML attributes '.' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:237:7: XML attributes '.'
            {
            match(input,XML,FOLLOW_XML_in_xmldecl94); 
            addPI("xml");
            pushFollow(FOLLOW_attributes_in_xmldecl98);
            attributes();

            state._fsp--;

            match(input,19,FOLLOW_19_in_xmldecl100); 
            closeNode();

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "xmldecl"

    public static class node_return extends ParserRuleReturnScope {
    };

    // $ANTLR start "node"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:240:1: node : ( tag children | text= value | cdata= CDATA );
    public final StruxtJavaParser.node_return node() throws RecognitionException {
        StruxtJavaParser.node_return retval = new StruxtJavaParser.node_return();
        retval.start = input.LT(1);

        Token cdata=null;
        String text = null;


        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:241:5: ( tag children | text= value | cdata= CDATA )
            int alt3=3;
            switch ( input.LA(1) ) {
            case ID:
                {
                alt3=1;
                }
                break;
            case STR:
            case INT:
            case FLOAT:
            case CHAR:
                {
                alt3=2;
                }
                break;
            case CDATA:
                {
                alt3=3;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 3, 0, input);

                throw nvae;
            }

            switch (alt3) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:241:7: tag children
                    {
                    pushFollow(FOLLOW_tag_in_node119);
                    tag();

                    state._fsp--;

                    pushFollow(FOLLOW_children_in_node121);
                    children();

                    state._fsp--;

                    closeNode();

                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:242:7: text= value
                    {
                    pushFollow(FOLLOW_value_in_node133);
                    text=value();

                    state._fsp--;

                    addText(input.toString(retval.start,input.LT(-1)));

                    }
                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:243:7: cdata= CDATA
                    {
                    cdata=(Token)match(input,CDATA,FOLLOW_CDATA_in_node145); 
                    addCDATA((cdata!=null?cdata.getText():null));

                    }
                    break;

            }
            retval.stop = input.LT(-1);

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return retval;
    }
    // $ANTLR end "node"


    // $ANTLR start "tag"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:246:1: tag : n= name ( attributes )? ;
    public final void tag() throws RecognitionException {
        StruxtJavaParser.name_return n = null;


        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:247:5: (n= name ( attributes )? )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:247:7: n= name ( attributes )?
            {
            pushFollow(FOLLOW_name_in_tag166);
            n=name();

            state._fsp--;

            addNode(n.namespace, n.nodename);
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:247:50: ( attributes )?
            int alt4=2;
            int LA4_0 = input.LA(1);

            if ( (LA4_0==OP||LA4_0==ID||(LA4_0>=STR && LA4_0<=CHAR)||LA4_0==25||LA4_0==27) ) {
                alt4=1;
            }
            switch (alt4) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:247:50: attributes
                    {
                    pushFollow(FOLLOW_attributes_in_tag170);
                    attributes();

                    state._fsp--;


                    }
                    break;

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "tag"


    // $ANTLR start "children"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:250:10: fragment children : ( '{' childs '}' | ( ':' ( node )* )? ( '.' | ';' | EOF ) );
    public final void children() throws RecognitionException {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:251:5: ( '{' childs '}' | ( ':' ( node )* )? ( '.' | ';' | EOF ) )
            int alt7=2;
            int LA7_0 = input.LA(1);

            if ( (LA7_0==20) ) {
                alt7=1;
            }
            else if ( (LA7_0==EOF||LA7_0==19||(LA7_0>=22 && LA7_0<=23)) ) {
                alt7=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 7, 0, input);

                throw nvae;
            }
            switch (alt7) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:251:7: '{' childs '}'
                    {
                    match(input,20,FOLLOW_20_in_children189); 
                    pushFollow(FOLLOW_childs_in_children191);
                    childs();

                    state._fsp--;

                    match(input,21,FOLLOW_21_in_children193); 

                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:252:7: ( ':' ( node )* )? ( '.' | ';' | EOF )
                    {
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:252:7: ( ':' ( node )* )?
                    int alt6=2;
                    int LA6_0 = input.LA(1);

                    if ( (LA6_0==22) ) {
                        alt6=1;
                    }
                    switch (alt6) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:252:8: ':' ( node )*
                            {
                            match(input,22,FOLLOW_22_in_children202); 
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:252:12: ( node )*
                            loop5:
                            do {
                                int alt5=2;
                                int LA5_0 = input.LA(1);

                                if ( (LA5_0==CDATA||LA5_0==ID||(LA5_0>=STR && LA5_0<=CHAR)) ) {
                                    alt5=1;
                                }


                                switch (alt5) {
                            	case 1 :
                            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:252:12: node
                            	    {
                            	    pushFollow(FOLLOW_node_in_children204);
                            	    node();

                            	    state._fsp--;


                            	    }
                            	    break;

                            	default :
                            	    break loop5;
                                }
                            } while (true);


                            }
                            break;

                    }

                    if ( input.LA(1)==EOF||input.LA(1)==19||input.LA(1)==23 ) {
                        input.consume();
                        state.errorRecovery=false;
                    }
                    else {
                        MismatchedSetException mse = new MismatchedSetException(null,input);
                        throw mse;
                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "children"


    // $ANTLR start "childs"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:255:10: fragment childs : ( node )* (nodename= tag )? ;
    public final void childs() throws RecognitionException {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:256:5: ( ( node )* (nodename= tag )? )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:256:7: ( node )* (nodename= tag )?
            {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:256:7: ( node )*
            loop8:
            do {
                int alt8=2;
                alt8 = dfa8.predict(input);
                switch (alt8) {
            	case 1 :
            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:256:7: node
            	    {
            	    pushFollow(FOLLOW_node_in_childs234);
            	    node();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop8;
                }
            } while (true);

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:256:21: (nodename= tag )?
            int alt9=2;
            int LA9_0 = input.LA(1);

            if ( (LA9_0==ID) ) {
                alt9=1;
            }
            switch (alt9) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:256:21: nodename= tag
                    {
                    pushFollow(FOLLOW_tag_in_childs239);
                    tag();

                    state._fsp--;


                    }
                    break;

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "childs"


    // $ANTLR start "attribute"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:259:10: fragment attribute : (n= name (o= OP )? (v= value )? | v= value (o= OP )? (n= name )? | n= name o= OP n1= name | o= OP (n= name | v= value ) );
    public final void attribute() throws RecognitionException {
        Token o=null;
        StruxtJavaParser.name_return n = null;

        String v = null;

        StruxtJavaParser.name_return n1 = null;


        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:260:5: (n= name (o= OP )? (v= value )? | v= value (o= OP )? (n= name )? | n= name o= OP n1= name | o= OP (n= name | v= value ) )
            int alt15=4;
            alt15 = dfa15.predict(input);
            switch (alt15) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:260:7: n= name (o= OP )? (v= value )?
                    {
                    pushFollow(FOLLOW_name_in_attribute261);
                    n=name();

                    state._fsp--;

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:260:15: (o= OP )?
                    int alt10=2;
                    int LA10_0 = input.LA(1);

                    if ( (LA10_0==OP) ) {
                        alt10=1;
                    }
                    switch (alt10) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:260:15: o= OP
                            {
                            o=(Token)match(input,OP,FOLLOW_OP_in_attribute265); 

                            }
                            break;

                    }

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:260:21: (v= value )?
                    int alt11=2;
                    int LA11_0 = input.LA(1);

                    if ( ((LA11_0>=STR && LA11_0<=CHAR)) ) {
                        alt11=1;
                    }
                    switch (alt11) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:260:21: v= value
                            {
                            pushFollow(FOLLOW_value_in_attribute270);
                            v=value();

                            state._fsp--;


                            }
                            break;

                    }

                    addAttribute(n,v);

                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:261:7: v= value (o= OP )? (n= name )?
                    {
                    pushFollow(FOLLOW_value_in_attribute283);
                    v=value();

                    state._fsp--;

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:261:16: (o= OP )?
                    int alt12=2;
                    int LA12_0 = input.LA(1);

                    if ( (LA12_0==OP) ) {
                        alt12=1;
                    }
                    switch (alt12) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:261:16: o= OP
                            {
                            o=(Token)match(input,OP,FOLLOW_OP_in_attribute287); 

                            }
                            break;

                    }

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:261:22: (n= name )?
                    int alt13=2;
                    int LA13_0 = input.LA(1);

                    if ( (LA13_0==ID) ) {
                        alt13=1;
                    }
                    switch (alt13) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:261:22: n= name
                            {
                            pushFollow(FOLLOW_name_in_attribute292);
                            n=name();

                            state._fsp--;


                            }
                            break;

                    }

                    addAttribute(n,v);

                    }
                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:262:7: n= name o= OP n1= name
                    {
                    pushFollow(FOLLOW_name_in_attribute305);
                    n=name();

                    state._fsp--;

                    o=(Token)match(input,OP,FOLLOW_OP_in_attribute309); 
                    pushFollow(FOLLOW_name_in_attribute313);
                    n1=name();

                    state._fsp--;

                    addAttribute(n, n1);

                    }
                    break;
                case 4 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:263:7: o= OP (n= name | v= value )
                    {
                    o=(Token)match(input,OP,FOLLOW_OP_in_attribute325); 
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:263:12: (n= name | v= value )
                    int alt14=2;
                    int LA14_0 = input.LA(1);

                    if ( (LA14_0==ID) ) {
                        alt14=1;
                    }
                    else if ( ((LA14_0>=STR && LA14_0<=CHAR)) ) {
                        alt14=2;
                    }
                    else {
                        NoViableAltException nvae =
                            new NoViableAltException("", 14, 0, input);

                        throw nvae;
                    }
                    switch (alt14) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:263:13: n= name
                            {
                            pushFollow(FOLLOW_name_in_attribute330);
                            n=name();

                            state._fsp--;


                            }
                            break;
                        case 2 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:263:20: v= value
                            {
                            pushFollow(FOLLOW_value_in_attribute334);
                            v=value();

                            state._fsp--;


                            }
                            break;

                    }

                    addAttribute(n,v);

                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "attribute"

    public static class name_return extends ParserRuleReturnScope {
        public Token namespace;
        public Token nodename;
    };

    // $ANTLR start "name"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:266:10: fragment name returns [Token namespace, Token nodename] : (s= ns PRENS n= ID | n= ID ( POSTNS s= ns )? ) ;
    public final StruxtJavaParser.name_return name() throws RecognitionException {
        StruxtJavaParser.name_return retval = new StruxtJavaParser.name_return();
        retval.start = input.LT(1);

        Token n=null;
        Token s = null;


        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:267:5: ( (s= ns PRENS n= ID | n= ID ( POSTNS s= ns )? ) )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:267:7: (s= ns PRENS n= ID | n= ID ( POSTNS s= ns )? )
            {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:267:7: (s= ns PRENS n= ID | n= ID ( POSTNS s= ns )? )
            int alt17=2;
            int LA17_0 = input.LA(1);

            if ( (LA17_0==ID) ) {
                int LA17_1 = input.LA(2);

                if ( (LA17_1==PRENS) ) {
                    alt17=1;
                }
                else if ( (LA17_1==OP||(LA17_1>=ID && LA17_1<=CHAR)||(LA17_1>=19 && LA17_1<=28)) ) {
                    alt17=2;
                }
                else {
                    NoViableAltException nvae =
                        new NoViableAltException("", 17, 1, input);

                    throw nvae;
                }
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 17, 0, input);

                throw nvae;
            }
            switch (alt17) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:267:8: s= ns PRENS n= ID
                    {
                    pushFollow(FOLLOW_ns_in_name363);
                    s=ns();

                    state._fsp--;

                    match(input,PRENS,FOLLOW_PRENS_in_name365); 
                    n=(Token)match(input,ID,FOLLOW_ID_in_name369); 

                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:267:26: n= ID ( POSTNS s= ns )?
                    {
                    n=(Token)match(input,ID,FOLLOW_ID_in_name375); 
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:267:31: ( POSTNS s= ns )?
                    int alt16=2;
                    int LA16_0 = input.LA(1);

                    if ( (LA16_0==POSTNS) ) {
                        alt16=1;
                    }
                    switch (alt16) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:267:33: POSTNS s= ns
                            {
                            match(input,POSTNS,FOLLOW_POSTNS_in_name379); 
                            pushFollow(FOLLOW_ns_in_name383);
                            s=ns();

                            state._fsp--;


                            }
                            break;

                    }


                    }
                    break;

            }

            retval.namespace =s; retval.nodename =n;

            }

            retval.stop = input.LT(-1);

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return retval;
    }
    // $ANTLR end "name"


    // $ANTLR start "ns"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:270:10: fragment ns returns [Token namespace] : s= ID ;
    public final Token ns() throws RecognitionException {
        Token namespace = null;

        Token s=null;

        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:271:5: (s= ID )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:271:7: s= ID
            {
            s=(Token)match(input,ID,FOLLOW_ID_in_ns413); 
            namespace =s;

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return namespace;
    }
    // $ANTLR end "ns"


    // $ANTLR start "value"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:274:10: fragment value returns [String s] : v= ( STR | INT | FLOAT | CHAR ) ;
    public final String value() throws RecognitionException {
        String s = null;

        Token v=null;

        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:275:5: (v= ( STR | INT | FLOAT | CHAR ) )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:275:7: v= ( STR | INT | FLOAT | CHAR )
            {
            v=(Token)input.LT(1);
            if ( (input.LA(1)>=STR && input.LA(1)<=CHAR) ) {
                input.consume();
                state.errorRecovery=false;
            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                throw mse;
            }

            s=(v!=null?v.getText():null);

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return s;
    }
    // $ANTLR end "value"


    // $ANTLR start "attributes"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:278:10: fragment attributes : ( attribute ( ',' attribute )* | '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')' | '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']' );
    public final void attributes() throws RecognitionException {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:279:5: ( attribute ( ',' attribute )* | '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')' | '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']' )
            int alt21=3;
            switch ( input.LA(1) ) {
            case OP:
            case ID:
            case STR:
            case INT:
            case FLOAT:
            case CHAR:
                {
                alt21=1;
                }
                break;
            case 25:
                {
                alt21=2;
                }
                break;
            case 27:
                {
                alt21=3;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 21, 0, input);

                throw nvae;
            }

            switch (alt21) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:279:7: attribute ( ',' attribute )*
                    {
                    pushFollow(FOLLOW_attribute_in_attributes475);
                    attribute();

                    state._fsp--;

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:279:17: ( ',' attribute )*
                    loop18:
                    do {
                        int alt18=2;
                        int LA18_0 = input.LA(1);

                        if ( (LA18_0==24) ) {
                            alt18=1;
                        }


                        switch (alt18) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:279:19: ',' attribute
                    	    {
                    	    match(input,24,FOLLOW_24_in_attributes479); 
                    	    pushFollow(FOLLOW_attribute_in_attributes481);
                    	    attribute();

                    	    state._fsp--;


                    	    }
                    	    break;

                    	default :
                    	    break loop18;
                        }
                    } while (true);


                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:280:7: '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')'
                    {
                    match(input,25,FOLLOW_25_in_attributes491); 
                    pushFollow(FOLLOW_attribute_in_attributes493);
                    attribute();

                    state._fsp--;

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:280:21: ( ( ',' | ';' | '.' ) attribute )*
                    loop19:
                    do {
                        int alt19=2;
                        int LA19_0 = input.LA(1);

                        if ( (LA19_0==19||(LA19_0>=23 && LA19_0<=24)) ) {
                            alt19=1;
                        }


                        switch (alt19) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:280:23: ( ',' | ';' | '.' ) attribute
                    	    {
                    	    if ( input.LA(1)==19||(input.LA(1)>=23 && input.LA(1)<=24) ) {
                    	        input.consume();
                    	        state.errorRecovery=false;
                    	    }
                    	    else {
                    	        MismatchedSetException mse = new MismatchedSetException(null,input);
                    	        throw mse;
                    	    }

                    	    pushFollow(FOLLOW_attribute_in_attributes505);
                    	    attribute();

                    	    state._fsp--;


                    	    }
                    	    break;

                    	default :
                    	    break loop19;
                        }
                    } while (true);

                    match(input,26,FOLLOW_26_in_attributes509); 

                    }
                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:281:7: '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']'
                    {
                    match(input,27,FOLLOW_27_in_attributes517); 
                    pushFollow(FOLLOW_attribute_in_attributes519);
                    attribute();

                    state._fsp--;

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:281:21: ( ( ',' | ';' | '.' ) attribute )*
                    loop20:
                    do {
                        int alt20=2;
                        int LA20_0 = input.LA(1);

                        if ( (LA20_0==19||(LA20_0>=23 && LA20_0<=24)) ) {
                            alt20=1;
                        }


                        switch (alt20) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJava.g:281:23: ( ',' | ';' | '.' ) attribute
                    	    {
                    	    if ( input.LA(1)==19||(input.LA(1)>=23 && input.LA(1)<=24) ) {
                    	        input.consume();
                    	        state.errorRecovery=false;
                    	    }
                    	    else {
                    	        MismatchedSetException mse = new MismatchedSetException(null,input);
                    	        throw mse;
                    	    }

                    	    pushFollow(FOLLOW_attribute_in_attributes531);
                    	    attribute();

                    	    state._fsp--;


                    	    }
                    	    break;

                    	default :
                    	    break loop20;
                        }
                    } while (true);

                    match(input,28,FOLLOW_28_in_attributes535); 

                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "attributes"

    // Delegated rules


    protected DFA8 dfa8 = new DFA8(this);
    protected DFA15 dfa15 = new DFA15(this);
    static final String DFA8_eotS =
        "\u00ab\uffff";
    static final String DFA8_eofS =
        "\1\uffff\1\3\4\uffff\2\3\3\uffff\2\3\2\uffff\2\3\1\uffff\4\3\6\uffff"+
        "\5\3\12\uffff\1\3\11\uffff\1\3\10\uffff\12\3\24\uffff\5\3\42\uffff"+
        "\4\3\22\uffff\2\3\20\uffff";
    static final String DFA8_minS =
        "\1\6\1\7\2\uffff\2\11\2\7\1\11\4\7\3\11\1\23\1\7\1\11\2\10\1\23"+
        "\2\7\1\11\2\7\1\11\2\7\1\10\2\7\10\11\1\23\1\7\1\23\1\11\2\10\1"+
        "\23\3\11\1\23\1\7\1\23\1\11\2\10\1\23\5\11\1\23\1\11\2\10\5\23\2"+
        "\7\1\10\2\7\5\11\2\7\1\10\2\7\5\11\2\23\2\7\1\10\11\11\1\23\1\11"+
        "\2\10\5\23\5\11\1\23\1\11\2\10\5\23\2\11\6\23\2\7\1\10\4\11\2\23"+
        "\2\7\1\10\4\11\2\23\2\11\4\23\2\11\10\23";
    static final String DFA8_maxS =
        "\1\25\1\33\2\uffff\2\11\2\30\3\16\2\33\2\11\2\30\1\16\4\30\2\32"+
        "\1\16\2\34\1\16\5\30\1\16\6\11\2\32\1\16\1\27\4\32\2\11\2\34\1\16"+
        "\1\27\4\34\4\11\12\30\5\32\1\16\4\11\5\34\1\16\4\11\5\30\10\11\12"+
        "\32\4\11\12\34\2\11\4\30\5\32\4\11\5\34\4\11\2\30\2\11\4\32\2\11"+
        "\4\34\2\32\2\34";
    static final String DFA8_acceptS =
        "\2\uffff\1\2\1\1\u00a7\uffff";
    static final String DFA8_specialS =
        "\u00ab\uffff}>";
    static final String[] DFA8_transitionS = {
            "\1\3\2\uffff\1\1\1\uffff\4\3\6\uffff\1\2",
            "\1\10\1\4\1\6\1\5\4\7\4\uffff\2\3\1\2\2\3\1\uffff\1\11\1\uffff"+
            "\1\12",
            "",
            "",
            "\1\13",
            "\1\14",
            "\1\17\1\15\1\uffff\1\16\4\20\4\uffff\2\3\1\2\2\3\1\21",
            "\1\22\1\uffff\1\23\11\uffff\2\3\1\2\2\3\1\21",
            "\1\24\1\uffff\4\25",
            "\1\30\1\uffff\1\26\1\uffff\4\27",
            "\1\33\1\uffff\1\31\1\uffff\4\32",
            "\1\10\1\uffff\1\6\1\uffff\4\7\4\uffff\2\3\1\2\2\3\1\uffff\1"+
            "\11\1\uffff\1\12",
            "\1\10\1\uffff\1\6\1\uffff\4\7\4\uffff\2\3\1\2\2\3\1\uffff\1"+
            "\11\1\uffff\1\12",
            "\1\34",
            "\1\35",
            "\1\36\1\uffff\4\20\4\uffff\2\3\1\2\2\3\1\21",
            "\2\3\1\2\2\3\1\21",
            "\1\41\1\uffff\1\37\1\uffff\4\40",
            "\1\23\11\uffff\2\3\1\2\2\3\1\21",
            "\1\42\1\uffff\1\43\10\uffff\2\3\1\2\2\3\1\21",
            "\1\44\1\uffff\1\45\10\uffff\2\3\1\2\2\3\1\21",
            "\2\3\1\2\2\3\1\21",
            "\1\50\1\46\1\uffff\1\47\4\51\4\uffff\1\52\3\uffff\2\52\1\uffff"+
            "\1\53",
            "\1\54\1\uffff\1\55\11\uffff\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\56\1\uffff\4\57",
            "\1\62\1\60\1\uffff\1\61\4\63\4\uffff\1\64\3\uffff\2\64\3\uffff"+
            "\1\65",
            "\1\66\1\uffff\1\67\11\uffff\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\70\1\uffff\4\71",
            "\1\17\3\uffff\4\20\4\uffff\2\3\1\2\2\3\1\21",
            "\1\17\3\uffff\4\20\4\uffff\2\3\1\2\2\3\1\21",
            "\1\72\1\uffff\1\73\10\uffff\2\3\1\2\2\3\1\21",
            "\1\76\1\74\1\uffff\1\75\4\77\4\uffff\2\3\1\2\2\3\1\21",
            "\1\100\1\uffff\1\101\11\uffff\2\3\1\2\2\3\1\21",
            "\1\102\1\uffff\4\103",
            "\1\104",
            "\1\105",
            "\1\106",
            "\1\107",
            "\1\110",
            "\1\111",
            "\1\112\1\uffff\4\51\4\uffff\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\115\1\uffff\1\113\1\uffff\4\114",
            "\2\3\1\2\2\3",
            "\1\55\11\uffff\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\116\1\uffff\1\117\10\uffff\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\120\1\uffff\1\121\10\uffff\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\122",
            "\1\123",
            "\1\124\1\uffff\4\63\4\uffff\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\127\1\uffff\1\125\1\uffff\4\126",
            "\2\3\1\2\2\3",
            "\1\67\11\uffff\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\130\1\uffff\1\131\10\uffff\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\132\1\uffff\1\133\10\uffff\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\134",
            "\1\135",
            "\1\136",
            "\1\137",
            "\1\140\1\uffff\4\77\4\uffff\2\3\1\2\2\3\1\21",
            "\2\3\1\2\2\3\1\21",
            "\1\101\11\uffff\2\3\1\2\2\3\1\21",
            "\1\141\1\uffff\1\142\10\uffff\2\3\1\2\2\3\1\21",
            "\1\143\1\uffff\1\144\10\uffff\2\3\1\2\2\3\1\21",
            "\2\3\1\2\2\3\1\21",
            "\2\3\1\2\2\3\1\21",
            "\2\3\1\2\2\3\1\21",
            "\2\3\1\2\2\3\1\21",
            "\2\3\1\2\2\3\1\21",
            "\1\50\3\uffff\4\51\4\uffff\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\50\3\uffff\4\51\4\uffff\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\145\1\uffff\1\146\10\uffff\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\151\1\147\1\uffff\1\150\4\152\4\uffff\1\52\3\uffff\2\52"+
            "\1\uffff\1\53",
            "\1\153\1\uffff\1\154\11\uffff\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\155\1\uffff\4\156",
            "\1\157",
            "\1\160",
            "\1\161",
            "\1\162",
            "\1\62\3\uffff\4\63\4\uffff\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\62\3\uffff\4\63\4\uffff\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\163\1\uffff\1\164\10\uffff\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\167\1\165\1\uffff\1\166\4\170\4\uffff\1\64\3\uffff\2\64"+
            "\3\uffff\1\65",
            "\1\171\1\uffff\1\172\11\uffff\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\173\1\uffff\4\174",
            "\1\175",
            "\1\176",
            "\1\177",
            "\1\u0080",
            "\2\3\1\2\2\3\1\21",
            "\2\3\1\2\2\3\1\21",
            "\1\76\3\uffff\4\77\4\uffff\2\3\1\2\2\3\1\21",
            "\1\76\3\uffff\4\77\4\uffff\2\3\1\2\2\3\1\21",
            "\1\u0081\1\uffff\1\u0082\10\uffff\2\3\1\2\2\3\1\21",
            "\1\u0083",
            "\1\u0084",
            "\1\u0085",
            "\1\u0086",
            "\1\u0087",
            "\1\u0088",
            "\1\u0089",
            "\1\u008a",
            "\1\u008b\1\uffff\4\152\4\uffff\1\52\3\uffff\2\52\1\uffff\1"+
            "\53",
            "\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\154\11\uffff\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\u008c\1\uffff\1\u008d\10\uffff\1\52\3\uffff\2\52\1\uffff"+
            "\1\53",
            "\1\u008e\1\uffff\1\u008f\10\uffff\1\52\3\uffff\2\52\1\uffff"+
            "\1\53",
            "\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\u0090",
            "\1\u0091",
            "\1\u0092",
            "\1\u0093",
            "\1\u0094\1\uffff\4\170\4\uffff\1\64\3\uffff\2\64\3\uffff\1"+
            "\65",
            "\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\172\11\uffff\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\u0095\1\uffff\1\u0096\10\uffff\1\64\3\uffff\2\64\3\uffff"+
            "\1\65",
            "\1\u0097\1\uffff\1\u0098\10\uffff\1\64\3\uffff\2\64\3\uffff"+
            "\1\65",
            "\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\u0099",
            "\1\u009a",
            "\2\3\1\2\2\3\1\21",
            "\2\3\1\2\2\3\1\21",
            "\2\3\1\2\2\3\1\21",
            "\2\3\1\2\2\3\1\21",
            "\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\151\3\uffff\4\152\4\uffff\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\151\3\uffff\4\152\4\uffff\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\u009b\1\uffff\1\u009c\10\uffff\1\52\3\uffff\2\52\1\uffff"+
            "\1\53",
            "\1\u009d",
            "\1\u009e",
            "\1\u009f",
            "\1\u00a0",
            "\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\167\3\uffff\4\170\4\uffff\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\167\3\uffff\4\170\4\uffff\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\u00a1\1\uffff\1\u00a2\10\uffff\1\64\3\uffff\2\64\3\uffff"+
            "\1\65",
            "\1\u00a3",
            "\1\u00a4",
            "\1\u00a5",
            "\1\u00a6",
            "\2\3\1\2\2\3\1\21",
            "\2\3\1\2\2\3\1\21",
            "\1\u00a7",
            "\1\u00a8",
            "\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\u00a9",
            "\1\u00aa",
            "\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\52\3\uffff\2\52\1\uffff\1\53",
            "\1\64\3\uffff\2\64\3\uffff\1\65",
            "\1\64\3\uffff\2\64\3\uffff\1\65"
    };

    static final short[] DFA8_eot = DFA.unpackEncodedString(DFA8_eotS);
    static final short[] DFA8_eof = DFA.unpackEncodedString(DFA8_eofS);
    static final char[] DFA8_min = DFA.unpackEncodedStringToUnsignedChars(DFA8_minS);
    static final char[] DFA8_max = DFA.unpackEncodedStringToUnsignedChars(DFA8_maxS);
    static final short[] DFA8_accept = DFA.unpackEncodedString(DFA8_acceptS);
    static final short[] DFA8_special = DFA.unpackEncodedString(DFA8_specialS);
    static final short[][] DFA8_transition;

    static {
        int numStates = DFA8_transitionS.length;
        DFA8_transition = new short[numStates][];
        for (int i=0; i<numStates; i++) {
            DFA8_transition[i] = DFA.unpackEncodedString(DFA8_transitionS[i]);
        }
    }

    class DFA8 extends DFA {

        public DFA8(BaseRecognizer recognizer) {
            this.recognizer = recognizer;
            this.decisionNumber = 8;
            this.eot = DFA8_eot;
            this.eof = DFA8_eof;
            this.min = DFA8_min;
            this.max = DFA8_max;
            this.accept = DFA8_accept;
            this.special = DFA8_special;
            this.transition = DFA8_transition;
        }
        public String getDescription() {
            return "()* loopback of 256:7: ( node )*";
        }
    }
    static final String DFA15_eotS =
        "\13\uffff";
    static final String DFA15_eofS =
        "\13\uffff";
    static final String DFA15_minS =
        "\2\7\2\uffff\3\11\1\uffff\2\7\1\uffff";
    static final String DFA15_maxS =
        "\1\16\1\34\2\uffff\2\11\1\34\1\uffff\2\34\1\uffff";
    static final String DFA15_acceptS =
        "\2\uffff\1\2\1\4\3\uffff\1\1\2\uffff\1\3";
    static final String DFA15_specialS =
        "\13\uffff}>";
    static final String[] DFA15_transitionS = {
            "\1\3\1\uffff\1\1\1\uffff\4\2",
            "\1\6\1\4\1\uffff\1\5\4\7\4\uffff\6\7\1\uffff\1\7\1\uffff\1"+
            "\7",
            "",
            "",
            "\1\10",
            "\1\11",
            "\1\12\1\uffff\4\7\4\uffff\6\7\1\uffff\1\7\1\uffff\1\7",
            "",
            "\1\6\3\uffff\4\7\4\uffff\6\7\1\uffff\1\7\1\uffff\1\7",
            "\1\6\3\uffff\4\7\4\uffff\6\7\1\uffff\1\7\1\uffff\1\7",
            ""
    };

    static final short[] DFA15_eot = DFA.unpackEncodedString(DFA15_eotS);
    static final short[] DFA15_eof = DFA.unpackEncodedString(DFA15_eofS);
    static final char[] DFA15_min = DFA.unpackEncodedStringToUnsignedChars(DFA15_minS);
    static final char[] DFA15_max = DFA.unpackEncodedStringToUnsignedChars(DFA15_maxS);
    static final short[] DFA15_accept = DFA.unpackEncodedString(DFA15_acceptS);
    static final short[] DFA15_special = DFA.unpackEncodedString(DFA15_specialS);
    static final short[][] DFA15_transition;

    static {
        int numStates = DFA15_transitionS.length;
        DFA15_transition = new short[numStates][];
        for (int i=0; i<numStates; i++) {
            DFA15_transition[i] = DFA.unpackEncodedString(DFA15_transitionS[i]);
        }
    }

    class DFA15 extends DFA {

        public DFA15(BaseRecognizer recognizer) {
            this.recognizer = recognizer;
            this.decisionNumber = 15;
            this.eot = DFA15_eot;
            this.eof = DFA15_eof;
            this.min = DFA15_min;
            this.max = DFA15_max;
            this.accept = DFA15_accept;
            this.special = DFA15_special;
            this.transition = DFA15_transition;
        }
        public String getDescription() {
            return "259:10: fragment attribute : (n= name (o= OP )? (v= value )? | v= value (o= OP )? (n= name )? | n= name o= OP n1= name | o= OP (n= name | v= value ) );";
        }
    }
 

    public static final BitSet FOLLOW_xmldecl_in_struxt53 = new BitSet(new long[]{0x0000000000007A50L});
    public static final BitSet FOLLOW_DOC_in_struxt64 = new BitSet(new long[]{0x0000000000007A50L});
    public static final BitSet FOLLOW_node_in_struxt73 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_struxt75 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_XML_in_xmldecl94 = new BitSet(new long[]{0x000000000A007A80L});
    public static final BitSet FOLLOW_attributes_in_xmldecl98 = new BitSet(new long[]{0x0000000000080000L});
    public static final BitSet FOLLOW_19_in_xmldecl100 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_tag_in_node119 = new BitSet(new long[]{0x0000000000D80000L});
    public static final BitSet FOLLOW_children_in_node121 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_value_in_node133 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_CDATA_in_node145 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_name_in_tag166 = new BitSet(new long[]{0x000000000A007A82L});
    public static final BitSet FOLLOW_attributes_in_tag170 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_20_in_children189 = new BitSet(new long[]{0x0000000000207A50L});
    public static final BitSet FOLLOW_childs_in_children191 = new BitSet(new long[]{0x0000000000200000L});
    public static final BitSet FOLLOW_21_in_children193 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_22_in_children202 = new BitSet(new long[]{0x0000000000887A50L});
    public static final BitSet FOLLOW_node_in_children204 = new BitSet(new long[]{0x0000000000887A50L});
    public static final BitSet FOLLOW_set_in_children209 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_node_in_childs234 = new BitSet(new long[]{0x0000000000007A52L});
    public static final BitSet FOLLOW_tag_in_childs239 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_name_in_attribute261 = new BitSet(new long[]{0x0000000000007882L});
    public static final BitSet FOLLOW_OP_in_attribute265 = new BitSet(new long[]{0x0000000000007802L});
    public static final BitSet FOLLOW_value_in_attribute270 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_value_in_attribute283 = new BitSet(new long[]{0x0000000000000282L});
    public static final BitSet FOLLOW_OP_in_attribute287 = new BitSet(new long[]{0x0000000000000202L});
    public static final BitSet FOLLOW_name_in_attribute292 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_name_in_attribute305 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_OP_in_attribute309 = new BitSet(new long[]{0x0000000000000200L});
    public static final BitSet FOLLOW_name_in_attribute313 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_OP_in_attribute325 = new BitSet(new long[]{0x0000000000007A00L});
    public static final BitSet FOLLOW_name_in_attribute330 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_value_in_attribute334 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ns_in_name363 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_PRENS_in_name365 = new BitSet(new long[]{0x0000000000000200L});
    public static final BitSet FOLLOW_ID_in_name369 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ID_in_name375 = new BitSet(new long[]{0x0000000000000402L});
    public static final BitSet FOLLOW_POSTNS_in_name379 = new BitSet(new long[]{0x0000000000000200L});
    public static final BitSet FOLLOW_ns_in_name383 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ID_in_ns413 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_set_in_value440 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_attribute_in_attributes475 = new BitSet(new long[]{0x0000000001000002L});
    public static final BitSet FOLLOW_24_in_attributes479 = new BitSet(new long[]{0x0000000000007A80L});
    public static final BitSet FOLLOW_attribute_in_attributes481 = new BitSet(new long[]{0x0000000001000002L});
    public static final BitSet FOLLOW_25_in_attributes491 = new BitSet(new long[]{0x0000000000007A80L});
    public static final BitSet FOLLOW_attribute_in_attributes493 = new BitSet(new long[]{0x0000000005880000L});
    public static final BitSet FOLLOW_set_in_attributes497 = new BitSet(new long[]{0x0000000000007A80L});
    public static final BitSet FOLLOW_attribute_in_attributes505 = new BitSet(new long[]{0x0000000005880000L});
    public static final BitSet FOLLOW_26_in_attributes509 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_27_in_attributes517 = new BitSet(new long[]{0x0000000000007A80L});
    public static final BitSet FOLLOW_attribute_in_attributes519 = new BitSet(new long[]{0x0000000011880000L});
    public static final BitSet FOLLOW_set_in_attributes523 = new BitSet(new long[]{0x0000000000007A80L});
    public static final BitSet FOLLOW_attribute_in_attributes531 = new BitSet(new long[]{0x0000000011880000L});
    public static final BitSet FOLLOW_28_in_attributes535 = new BitSet(new long[]{0x0000000000000002L});

}