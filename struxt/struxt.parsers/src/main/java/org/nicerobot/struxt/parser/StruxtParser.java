// $ANTLR 3.3 Nov 30, 2010 12:45:30 /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g 2011-04-04 13:31:56

package org.nicerobot.struxt.parser;
import java.io.IOException;


import org.antlr.runtime.*;
import java.util.Stack;
import java.util.List;
import java.util.ArrayList;

public class StruxtParser extends Parser {
    public static final String[] tokenNames = new String[] {
        "<invalid>", "<EOR>", "<DOWN>", "<UP>", "DOC", "XML", "STR", "ID", "INT", "FLOAT", "CHAR", "COMMENT", "WS", "EXPONENT", "HEX_DIGIT", "'.'", "'@'", "'/'", "'{'", "'}'", "'['", "']'", "'('", "')'", "':'", "'='", "'|'", "'||'", "'>'", "'->'", "'-->'", "'<'", "'<-'", "'<--'", "'<>'", "'<->'", "';'", "'!'", "'#'", "','"
    };
    public static final int EOF=-1;
    public static final int T__15=15;
    public static final int T__16=16;
    public static final int T__17=17;
    public static final int T__18=18;
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
    public static final int T__29=29;
    public static final int T__30=30;
    public static final int T__31=31;
    public static final int T__32=32;
    public static final int T__33=33;
    public static final int T__34=34;
    public static final int T__35=35;
    public static final int T__36=36;
    public static final int T__37=37;
    public static final int T__38=38;
    public static final int T__39=39;
    public static final int DOC=4;
    public static final int XML=5;
    public static final int STR=6;
    public static final int ID=7;
    public static final int INT=8;
    public static final int FLOAT=9;
    public static final int CHAR=10;
    public static final int COMMENT=11;
    public static final int WS=12;
    public static final int EXPONENT=13;
    public static final int HEX_DIGIT=14;

    // delegates
    // delegators


        public StruxtParser(TokenStream input) {
            this(input, new RecognizerSharedState());
        }
        public StruxtParser(TokenStream input, RecognizerSharedState state) {
            super(input, state);
             
        }
        

    public String[] getTokenNames() { return StruxtParser.tokenNames; }
    public String getGrammarFileName() { return "/Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g"; }


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
          _out(String.format("<%s",tag));
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
        
        public static void attr(Token ns, Token name, Token value) {
          String v = unquote(singleline(null!=value?value.getText():"true"));
          // TODO: Make "value" configurable (per namespace?)
          _out(String.format(" %s%s=\"%s\"",(null!=ns?ns.getText()+":":""),(null!=name?name.getText():"id"),v));
        }
        



    // $ANTLR start "struxt"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:64:1: struxt : (xml= xmldecl )? (doctype= DOC )? node EOF ;
    public final void struxt() throws RecognitionException {
        Token doctype=null;
        String xml = null;


        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:65:5: ( (xml= xmldecl )? (doctype= DOC )? node EOF )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:65:7: (xml= xmldecl )? (doctype= DOC )? node EOF
            {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:65:10: (xml= xmldecl )?
            int alt1=2;
            int LA1_0 = input.LA(1);

            if ( (LA1_0==XML) ) {
                alt1=1;
            }
            switch (alt1) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:65:10: xml= xmldecl
                    {
                    pushFollow(FOLLOW_xmldecl_in_struxt49);
                    xml=xmldecl();

                    state._fsp--;


                    }
                    break;

            }

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:66:14: (doctype= DOC )?
            int alt2=2;
            int LA2_0 = input.LA(1);

            if ( (LA2_0==DOC) ) {
                alt2=1;
            }
            switch (alt2) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:66:14: doctype= DOC
                    {
                    doctype=(Token)match(input,DOC,FOLLOW_DOC_in_struxt60); 

                    }
                    break;

            }

             if (null!=doctype)_out(String.format("<!DOCTYPE %s>\n",unquote((doctype!=null?doctype.getText():null)))); 
            pushFollow(FOLLOW_node_in_struxt71);
            node();

            state._fsp--;

            match(input,EOF,FOLLOW_EOF_in_struxt73); 

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
    // $ANTLR end "struxt"


    // $ANTLR start "xmldecl"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:70:1: xmldecl returns [String attrs] : XML attributes '.' ;
    public final String xmldecl() throws RecognitionException {
        String attrs = null;

        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:71:5: ( XML attributes '.' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:71:7: XML attributes '.'
            {
            match(input,XML,FOLLOW_XML_in_xmldecl94); 
             _out("<?xml"); 
            pushFollow(FOLLOW_attributes_in_xmldecl98);
            attributes();

            state._fsp--;

            match(input,15,FOLLOW_15_in_xmldecl100); 
             _out(" ?>\n"); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return attrs;
    }
    // $ANTLR end "xmldecl"


    // $ANTLR start "node"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:74:1: node : (tagname= tag children | text= STR );
    public final void node() throws RecognitionException {
        Token text=null;
        String tagname = null;


        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:75:5: (tagname= tag children | text= STR )
            int alt3=2;
            int LA3_0 = input.LA(1);

            if ( (LA3_0==ID) ) {
                alt3=1;
            }
            else if ( (LA3_0==STR) ) {
                alt3=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 3, 0, input);

                throw nvae;
            }
            switch (alt3) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:75:7: tagname= tag children
                    {
                    pushFollow(FOLLOW_tag_in_node121);
                    tagname=tag();

                    state._fsp--;

                     _out(">"); 
                    pushFollow(FOLLOW_children_in_node139);
                    children();

                    state._fsp--;

                     _out(String.format("</%s>",tagname)); 

                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:78:7: text= STR
                    {
                    text=(Token)match(input,STR,FOLLOW_STR_in_node151); 
                     _out(String.format("%s",unquote((text!=null?text.getText():null)))); 

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
    // $ANTLR end "node"


    // $ANTLR start "tag"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:82:1: tag returns [String tagname] : nodename= ID ( ( '@' | '/' ) ns= ID )? ( attributes )? ;
    public final String tag() throws RecognitionException {
        String tagname = null;

        Token nodename=null;
        Token ns=null;

        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:83:5: (nodename= ID ( ( '@' | '/' ) ns= ID )? ( attributes )? )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:83:7: nodename= ID ( ( '@' | '/' ) ns= ID )? ( attributes )?
            {
            nodename=(Token)match(input,ID,FOLLOW_ID_in_tag182); 
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:83:19: ( ( '@' | '/' ) ns= ID )?
            int alt4=2;
            int LA4_0 = input.LA(1);

            if ( ((LA4_0>=16 && LA4_0<=17)) ) {
                alt4=1;
            }
            switch (alt4) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:83:20: ( '@' | '/' ) ns= ID
                    {
                    if ( (input.LA(1)>=16 && input.LA(1)<=17) ) {
                        input.consume();
                        state.errorRecovery=false;
                    }
                    else {
                        MismatchedSetException mse = new MismatchedSetException(null,input);
                        throw mse;
                    }

                    ns=(Token)match(input,ID,FOLLOW_ID_in_tag193); 

                    }
                    break;

            }

             tagname =open(ns,nodename); 
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:83:72: ( attributes )?
            int alt5=2;
            int LA5_0 = input.LA(1);

            if ( ((LA5_0>=STR && LA5_0<=CHAR)) ) {
                alt5=1;
            }
            switch (alt5) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:83:72: attributes
                    {
                    pushFollow(FOLLOW_attributes_in_tag199);
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
        return tagname;
    }
    // $ANTLR end "tag"


    // $ANTLR start "children"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:86:10: fragment children : ( '{' childs '}' | '[' childs ']' | '(' childs ')' | ( ( ':' | '=' | '|' | '||' | '>' | '->' | '-->' | '<' | '<-' | '<--' | '<>' | '<->' ) ( node )* )? ( '.' | ';' ) );
    public final void children() throws RecognitionException {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:87:5: ( '{' childs '}' | '[' childs ']' | '(' childs ')' | ( ( ':' | '=' | '|' | '||' | '>' | '->' | '-->' | '<' | '<-' | '<--' | '<>' | '<->' ) ( node )* )? ( '.' | ';' ) )
            int alt8=4;
            switch ( input.LA(1) ) {
            case 18:
                {
                alt8=1;
                }
                break;
            case 20:
                {
                alt8=2;
                }
                break;
            case 22:
                {
                alt8=3;
                }
                break;
            case 15:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:
            case 35:
            case 36:
                {
                alt8=4;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 8, 0, input);

                throw nvae;
            }

            switch (alt8) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:87:7: '{' childs '}'
                    {
                    match(input,18,FOLLOW_18_in_children218); 
                    pushFollow(FOLLOW_childs_in_children220);
                    childs();

                    state._fsp--;

                    match(input,19,FOLLOW_19_in_children222); 

                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:88:7: '[' childs ']'
                    {
                    match(input,20,FOLLOW_20_in_children230); 
                    pushFollow(FOLLOW_childs_in_children232);
                    childs();

                    state._fsp--;

                    match(input,21,FOLLOW_21_in_children234); 

                    }
                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:89:7: '(' childs ')'
                    {
                    match(input,22,FOLLOW_22_in_children242); 
                    pushFollow(FOLLOW_childs_in_children244);
                    childs();

                    state._fsp--;

                    match(input,23,FOLLOW_23_in_children246); 

                    }
                    break;
                case 4 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:90:7: ( ( ':' | '=' | '|' | '||' | '>' | '->' | '-->' | '<' | '<-' | '<--' | '<>' | '<->' ) ( node )* )? ( '.' | ';' )
                    {
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:90:7: ( ( ':' | '=' | '|' | '||' | '>' | '->' | '-->' | '<' | '<-' | '<--' | '<>' | '<->' ) ( node )* )?
                    int alt7=2;
                    int LA7_0 = input.LA(1);

                    if ( ((LA7_0>=24 && LA7_0<=35)) ) {
                        alt7=1;
                    }
                    switch (alt7) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:90:8: ( ':' | '=' | '|' | '||' | '>' | '->' | '-->' | '<' | '<-' | '<--' | '<>' | '<->' ) ( node )*
                            {
                            if ( (input.LA(1)>=24 && input.LA(1)<=35) ) {
                                input.consume();
                                state.errorRecovery=false;
                            }
                            else {
                                MismatchedSetException mse = new MismatchedSetException(null,input);
                                throw mse;
                            }

                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:90:68: ( node )*
                            loop6:
                            do {
                                int alt6=2;
                                int LA6_0 = input.LA(1);

                                if ( ((LA6_0>=STR && LA6_0<=ID)) ) {
                                    alt6=1;
                                }


                                switch (alt6) {
                            	case 1 :
                            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:90:68: node
                            	    {
                            	    pushFollow(FOLLOW_node_in_children281);
                            	    node();

                            	    state._fsp--;


                            	    }
                            	    break;

                            	default :
                            	    break loop6;
                                }
                            } while (true);


                            }
                            break;

                    }

                    if ( input.LA(1)==15||input.LA(1)==36 ) {
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
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:93:10: fragment childs : ( node )* (nodename= tag )? ;
    public final void childs() throws RecognitionException {
        String nodename = null;


        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:94:5: ( ( node )* (nodename= tag )? )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:94:7: ( node )* (nodename= tag )?
            {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:94:7: ( node )*
            loop9:
            do {
                int alt9=2;
                alt9 = dfa9.predict(input);
                switch (alt9) {
            	case 1 :
            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:94:7: node
            	    {
            	    pushFollow(FOLLOW_node_in_childs309);
            	    node();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop9;
                }
            } while (true);

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:94:21: (nodename= tag )?
            int alt10=2;
            int LA10_0 = input.LA(1);

            if ( (LA10_0==ID) ) {
                alt10=1;
            }
            switch (alt10) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:94:21: nodename= tag
                    {
                    pushFollow(FOLLOW_tag_in_childs314);
                    nodename=tag();

                    state._fsp--;


                    }
                    break;

            }

             if (null!=nodename) System.out.format("/>"); 

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
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:97:10: fragment attribute : ( (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '/' ) ns= ID )? ) (value= ( STR | INT | FLOAT | CHAR ) )? | value= ( STR | INT | FLOAT | CHAR ) (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '/' ) ns= ID )? )? );
    public final void attribute() throws RecognitionException {
        Token ns=null;
        Token name=null;
        Token value=null;

        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:98:5: ( (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '/' ) ns= ID )? ) (value= ( STR | INT | FLOAT | CHAR ) )? | value= ( STR | INT | FLOAT | CHAR ) (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '/' ) ns= ID )? )? )
            int alt16=2;
            int LA16_0 = input.LA(1);

            if ( (LA16_0==ID) ) {
                alt16=1;
            }
            else if ( (LA16_0==STR||(LA16_0>=INT && LA16_0<=CHAR)) ) {
                alt16=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 16, 0, input);

                throw nvae;
            }
            switch (alt16) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:98:7: (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '/' ) ns= ID )? ) (value= ( STR | INT | FLOAT | CHAR ) )?
                    {
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:98:7: (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '/' ) ns= ID )? )
                    int alt12=2;
                    int LA12_0 = input.LA(1);

                    if ( (LA12_0==ID) ) {
                        int LA12_1 = input.LA(2);

                        if ( ((LA12_1>=37 && LA12_1<=38)) ) {
                            alt12=1;
                        }
                        else if ( (LA12_1==STR||(LA12_1>=INT && LA12_1<=CHAR)||(LA12_1>=15 && LA12_1<=36)||LA12_1==39) ) {
                            alt12=2;
                        }
                        else {
                            NoViableAltException nvae =
                                new NoViableAltException("", 12, 1, input);

                            throw nvae;
                        }
                    }
                    else {
                        NoViableAltException nvae =
                            new NoViableAltException("", 12, 0, input);

                        throw nvae;
                    }
                    switch (alt12) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:98:8: ns= ID ( '!' | '#' ) name= ID
                            {
                            ns=(Token)match(input,ID,FOLLOW_ID_in_attribute339); 
                            if ( (input.LA(1)>=37 && input.LA(1)<=38) ) {
                                input.consume();
                                state.errorRecovery=false;
                            }
                            else {
                                MismatchedSetException mse = new MismatchedSetException(null,input);
                                throw mse;
                            }

                            name=(Token)match(input,ID,FOLLOW_ID_in_attribute349); 

                            }
                            break;
                        case 2 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:98:34: name= ID ( ( '@' | '/' ) ns= ID )?
                            {
                            name=(Token)match(input,ID,FOLLOW_ID_in_attribute355); 
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:98:42: ( ( '@' | '/' ) ns= ID )?
                            int alt11=2;
                            int LA11_0 = input.LA(1);

                            if ( ((LA11_0>=16 && LA11_0<=17)) ) {
                                alt11=1;
                            }
                            switch (alt11) {
                                case 1 :
                                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:98:44: ( '@' | '/' ) ns= ID
                                    {
                                    if ( (input.LA(1)>=16 && input.LA(1)<=17) ) {
                                        input.consume();
                                        state.errorRecovery=false;
                                    }
                                    else {
                                        MismatchedSetException mse = new MismatchedSetException(null,input);
                                        throw mse;
                                    }

                                    ns=(Token)match(input,ID,FOLLOW_ID_in_attribute367); 

                                    }
                                    break;

                            }


                            }
                            break;

                    }

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:98:68: (value= ( STR | INT | FLOAT | CHAR ) )?
                    int alt13=2;
                    int LA13_0 = input.LA(1);

                    if ( (LA13_0==STR||(LA13_0>=INT && LA13_0<=CHAR)) ) {
                        alt13=1;
                    }
                    switch (alt13) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:98:68: value= ( STR | INT | FLOAT | CHAR )
                            {
                            value=(Token)input.LT(1);
                            if ( input.LA(1)==STR||(input.LA(1)>=INT && input.LA(1)<=CHAR) ) {
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

                     attr(ns,name,value); 

                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:99:7: value= ( STR | INT | FLOAT | CHAR ) (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '/' ) ns= ID )? )?
                    {
                    value=(Token)input.LT(1);
                    if ( input.LA(1)==STR||(input.LA(1)>=INT && input.LA(1)<=CHAR) ) {
                        input.consume();
                        state.errorRecovery=false;
                    }
                    else {
                        MismatchedSetException mse = new MismatchedSetException(null,input);
                        throw mse;
                    }

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:99:40: (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '/' ) ns= ID )? )?
                    int alt15=3;
                    int LA15_0 = input.LA(1);

                    if ( (LA15_0==ID) ) {
                        int LA15_1 = input.LA(2);

                        if ( ((LA15_1>=37 && LA15_1<=38)) ) {
                            alt15=1;
                        }
                        else if ( ((LA15_1>=15 && LA15_1<=36)||LA15_1==39) ) {
                            alt15=2;
                        }
                    }
                    switch (alt15) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:99:41: ns= ID ( '!' | '#' ) name= ID
                            {
                            ns=(Token)match(input,ID,FOLLOW_ID_in_attribute420); 
                            if ( (input.LA(1)>=37 && input.LA(1)<=38) ) {
                                input.consume();
                                state.errorRecovery=false;
                            }
                            else {
                                MismatchedSetException mse = new MismatchedSetException(null,input);
                                throw mse;
                            }

                            name=(Token)match(input,ID,FOLLOW_ID_in_attribute431); 

                            }
                            break;
                        case 2 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:99:68: name= ID ( ( '@' | '/' ) ns= ID )?
                            {
                            name=(Token)match(input,ID,FOLLOW_ID_in_attribute437); 
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:99:76: ( ( '@' | '/' ) ns= ID )?
                            int alt14=2;
                            int LA14_0 = input.LA(1);

                            if ( ((LA14_0>=16 && LA14_0<=17)) ) {
                                alt14=1;
                            }
                            switch (alt14) {
                                case 1 :
                                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:99:77: ( '@' | '/' ) ns= ID
                                    {
                                    if ( (input.LA(1)>=16 && input.LA(1)<=17) ) {
                                        input.consume();
                                        state.errorRecovery=false;
                                    }
                                    else {
                                        MismatchedSetException mse = new MismatchedSetException(null,input);
                                        throw mse;
                                    }

                                    ns=(Token)match(input,ID,FOLLOW_ID_in_attribute448); 

                                    }
                                    break;

                            }


                            }
                            break;

                    }

                     attr(ns,name,value); 

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


    // $ANTLR start "attributes"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:102:10: fragment attributes : attribute ( ',' attribute )* ;
    public final void attributes() throws RecognitionException {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:103:5: ( attribute ( ',' attribute )* )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:103:7: attribute ( ',' attribute )*
            {
            pushFollow(FOLLOW_attribute_in_attributes473);
            attribute();

            state._fsp--;

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:103:17: ( ',' attribute )*
            loop17:
            do {
                int alt17=2;
                int LA17_0 = input.LA(1);

                if ( (LA17_0==39) ) {
                    alt17=1;
                }


                switch (alt17) {
            	case 1 :
            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:103:19: ',' attribute
            	    {
            	    match(input,39,FOLLOW_39_in_attributes477); 
            	    pushFollow(FOLLOW_attribute_in_attributes479);
            	    attribute();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop17;
                }
            } while (true);


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


    protected DFA9 dfa9 = new DFA9(this);
    static final String DFA9_eotS =
        "\37\uffff";
    static final String DFA9_eofS =
        "\37\uffff";
    static final String DFA9_minS =
        "\2\6\2\uffff\1\7\1\6\1\7\1\6\2\7\1\17\1\6\1\17\3\6\5\7\4\17\2\6"+
        "\2\7\2\17";
    static final String DFA9_maxS =
        "\1\27\1\44\2\uffff\1\7\2\47\1\44\2\7\1\47\1\12\5\47\4\7\6\47\2\7"+
        "\2\47";
    static final String DFA9_acceptS =
        "\2\uffff\1\2\1\1\33\uffff";
    static final String DFA9_specialS =
        "\37\uffff}>";
    static final String[] DFA9_transitionS = {
            "\1\3\1\1\13\uffff\1\2\1\uffff\1\2\1\uffff\1\2",
            "\1\6\1\5\3\6\4\uffff\1\3\2\4\1\3\1\2\1\3\1\2\1\3\1\2\15\3",
            "",
            "",
            "\1\7",
            "\1\12\1\uffff\3\12\4\uffff\1\3\2\11\1\3\1\2\1\3\1\2\1\3\1\2"+
            "\15\3\2\10\1\13",
            "\1\14\7\uffff\1\3\2\uffff\1\3\1\2\1\3\1\2\1\3\1\2\15\3\2\uffff"+
            "\1\13",
            "\1\6\1\5\3\6\4\uffff\1\3\2\uffff\1\3\1\2\1\3\1\2\1\3\1\2\15"+
            "\3",
            "\1\15",
            "\1\16",
            "\1\3\2\uffff\1\3\1\2\1\3\1\2\1\3\1\2\15\3\2\uffff\1\13",
            "\1\20\1\17\3\20",
            "\1\3\2\22\1\3\1\2\1\3\1\2\1\3\1\2\15\3\2\21\1\13",
            "\1\12\1\uffff\3\12\4\uffff\1\3\2\uffff\1\3\1\2\1\3\1\2\1\3"+
            "\1\2\15\3\2\uffff\1\13",
            "\1\12\1\uffff\3\12\4\uffff\1\3\2\uffff\1\3\1\2\1\3\1\2\1\3"+
            "\1\2\15\3\2\uffff\1\13",
            "\1\25\1\uffff\3\25\4\uffff\1\3\2\24\1\3\1\2\1\3\1\2\1\3\1\2"+
            "\15\3\2\23\1\13",
            "\1\26\7\uffff\1\3\2\uffff\1\3\1\2\1\3\1\2\1\3\1\2\15\3\2\uffff"+
            "\1\13",
            "\1\27",
            "\1\30",
            "\1\31",
            "\1\32",
            "\1\3\2\uffff\1\3\1\2\1\3\1\2\1\3\1\2\15\3\2\uffff\1\13",
            "\1\3\2\34\1\3\1\2\1\3\1\2\1\3\1\2\15\3\2\33\1\13",
            "\1\3\2\uffff\1\3\1\2\1\3\1\2\1\3\1\2\15\3\2\uffff\1\13",
            "\1\3\2\uffff\1\3\1\2\1\3\1\2\1\3\1\2\15\3\2\uffff\1\13",
            "\1\25\1\uffff\3\25\4\uffff\1\3\2\uffff\1\3\1\2\1\3\1\2\1\3"+
            "\1\2\15\3\2\uffff\1\13",
            "\1\25\1\uffff\3\25\4\uffff\1\3\2\uffff\1\3\1\2\1\3\1\2\1\3"+
            "\1\2\15\3\2\uffff\1\13",
            "\1\35",
            "\1\36",
            "\1\3\2\uffff\1\3\1\2\1\3\1\2\1\3\1\2\15\3\2\uffff\1\13",
            "\1\3\2\uffff\1\3\1\2\1\3\1\2\1\3\1\2\15\3\2\uffff\1\13"
    };

    static final short[] DFA9_eot = DFA.unpackEncodedString(DFA9_eotS);
    static final short[] DFA9_eof = DFA.unpackEncodedString(DFA9_eofS);
    static final char[] DFA9_min = DFA.unpackEncodedStringToUnsignedChars(DFA9_minS);
    static final char[] DFA9_max = DFA.unpackEncodedStringToUnsignedChars(DFA9_maxS);
    static final short[] DFA9_accept = DFA.unpackEncodedString(DFA9_acceptS);
    static final short[] DFA9_special = DFA.unpackEncodedString(DFA9_specialS);
    static final short[][] DFA9_transition;

    static {
        int numStates = DFA9_transitionS.length;
        DFA9_transition = new short[numStates][];
        for (int i=0; i<numStates; i++) {
            DFA9_transition[i] = DFA.unpackEncodedString(DFA9_transitionS[i]);
        }
    }

    class DFA9 extends DFA {

        public DFA9(BaseRecognizer recognizer) {
            this.recognizer = recognizer;
            this.decisionNumber = 9;
            this.eot = DFA9_eot;
            this.eof = DFA9_eof;
            this.min = DFA9_min;
            this.max = DFA9_max;
            this.accept = DFA9_accept;
            this.special = DFA9_special;
            this.transition = DFA9_transition;
        }
        public String getDescription() {
            return "()* loopback of 94:7: ( node )*";
        }
    }
 

    public static final BitSet FOLLOW_xmldecl_in_struxt49 = new BitSet(new long[]{0x00000000000000D0L});
    public static final BitSet FOLLOW_DOC_in_struxt60 = new BitSet(new long[]{0x00000000000000D0L});
    public static final BitSet FOLLOW_node_in_struxt71 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_struxt73 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_XML_in_xmldecl94 = new BitSet(new long[]{0x00000000000007C0L});
    public static final BitSet FOLLOW_attributes_in_xmldecl98 = new BitSet(new long[]{0x0000000000008000L});
    public static final BitSet FOLLOW_15_in_xmldecl100 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_tag_in_node121 = new BitSet(new long[]{0x0000001FFF548000L});
    public static final BitSet FOLLOW_children_in_node139 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_STR_in_node151 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ID_in_tag182 = new BitSet(new long[]{0x00000000000307C2L});
    public static final BitSet FOLLOW_set_in_tag185 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_ID_in_tag193 = new BitSet(new long[]{0x00000000000007C2L});
    public static final BitSet FOLLOW_attributes_in_tag199 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_18_in_children218 = new BitSet(new long[]{0x00000000000800D0L});
    public static final BitSet FOLLOW_childs_in_children220 = new BitSet(new long[]{0x0000000000080000L});
    public static final BitSet FOLLOW_19_in_children222 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_20_in_children230 = new BitSet(new long[]{0x00000000002000D0L});
    public static final BitSet FOLLOW_childs_in_children232 = new BitSet(new long[]{0x0000000000200000L});
    public static final BitSet FOLLOW_21_in_children234 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_22_in_children242 = new BitSet(new long[]{0x00000000008000D0L});
    public static final BitSet FOLLOW_childs_in_children244 = new BitSet(new long[]{0x0000000000800000L});
    public static final BitSet FOLLOW_23_in_children246 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_set_in_children255 = new BitSet(new long[]{0x00000010000080D0L});
    public static final BitSet FOLLOW_node_in_children281 = new BitSet(new long[]{0x00000010000080D0L});
    public static final BitSet FOLLOW_set_in_children286 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_node_in_childs309 = new BitSet(new long[]{0x00000000000000D2L});
    public static final BitSet FOLLOW_tag_in_childs314 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ID_in_attribute339 = new BitSet(new long[]{0x0000006000000000L});
    public static final BitSet FOLLOW_set_in_attribute341 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_ID_in_attribute349 = new BitSet(new long[]{0x0000000000000742L});
    public static final BitSet FOLLOW_ID_in_attribute355 = new BitSet(new long[]{0x0000000000030742L});
    public static final BitSet FOLLOW_set_in_attribute359 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_ID_in_attribute367 = new BitSet(new long[]{0x0000000000000742L});
    public static final BitSet FOLLOW_set_in_attribute374 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_set_in_attribute401 = new BitSet(new long[]{0x0000000000000082L});
    public static final BitSet FOLLOW_ID_in_attribute420 = new BitSet(new long[]{0x0000006000000000L});
    public static final BitSet FOLLOW_set_in_attribute423 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_ID_in_attribute431 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ID_in_attribute437 = new BitSet(new long[]{0x0000000000030002L});
    public static final BitSet FOLLOW_set_in_attribute440 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_ID_in_attribute448 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_attribute_in_attributes473 = new BitSet(new long[]{0x0000008000000002L});
    public static final BitSet FOLLOW_39_in_attributes477 = new BitSet(new long[]{0x00000000000007C0L});
    public static final BitSet FOLLOW_attribute_in_attributes479 = new BitSet(new long[]{0x0000008000000002L});

}