// $ANTLR 3.3 Nov 30, 2010 12:46:29 /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g 2011-04-05 10:37:36

package org.nicerobot.struxt.parser;
import java.io.IOException;


import org.antlr.runtime.*;
import java.util.Stack;
import java.util.List;
import java.util.ArrayList;

public class StruxtParser extends Parser {
    public static final String[] tokenNames = new String[] {
        "<invalid>", "<EOR>", "<DOWN>", "<UP>", "DOC", "XML", "STR", "ID", "OP", "INT", "FLOAT", "CHAR", "COMMENT", "WS", "EXPONENT", "HEX_DIGIT", "'.'", "'@'", "'\\\\'", "'{'", "'}'", "':'", "';'", "'!'", "'#'", "','", "'('", "')'", "'['", "']'"
    };
    public static final int EOF=-1;
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
    public static final int DOC=4;
    public static final int XML=5;
    public static final int STR=6;
    public static final int ID=7;
    public static final int OP=8;
    public static final int INT=9;
    public static final int FLOAT=10;
    public static final int CHAR=11;
    public static final int COMMENT=12;
    public static final int WS=13;
    public static final int EXPONENT=14;
    public static final int HEX_DIGIT=15;

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

        public static void attr(Token ns, Token name, Token op, Token value) {
          String v = unquote(singleline(null!=value?value.getText():"true"));
          // TODO: Make "value" configurable (per namespace?)
          _out(String.format(" %s%s=\"%s%s\"",
            (null!=ns?ns.getText()+":":""),
            (null!=name?name.getText():"id"),
            (null!=op?op.getText():""),
            v));
        }
        



    // $ANTLR start "struxt"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:68:1: struxt : (xml= xmldecl )? (doctype= DOC )? node EOF ;
    public final void struxt() throws RecognitionException {
        Token doctype=null;
        String xml = null;


        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:69:5: ( (xml= xmldecl )? (doctype= DOC )? node EOF )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:69:7: (xml= xmldecl )? (doctype= DOC )? node EOF
            {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:69:10: (xml= xmldecl )?
            int alt1=2;
            int LA1_0 = input.LA(1);

            if ( (LA1_0==XML) ) {
                alt1=1;
            }
            switch (alt1) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:69:10: xml= xmldecl
                    {
                    pushFollow(FOLLOW_xmldecl_in_struxt49);
                    xml=xmldecl();

                    state._fsp--;


                    }
                    break;

            }

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:70:14: (doctype= DOC )?
            int alt2=2;
            int LA2_0 = input.LA(1);

            if ( (LA2_0==DOC) ) {
                alt2=1;
            }
            switch (alt2) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:70:14: doctype= DOC
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
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:74:1: xmldecl returns [String attrs] : XML attributes '.' ;
    public final String xmldecl() throws RecognitionException {
        String attrs = null;

        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:75:5: ( XML attributes '.' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:75:7: XML attributes '.'
            {
            match(input,XML,FOLLOW_XML_in_xmldecl94); 
             _out("<?xml"); 
            pushFollow(FOLLOW_attributes_in_xmldecl98);
            attributes();

            state._fsp--;

            match(input,16,FOLLOW_16_in_xmldecl100); 
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
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:78:1: node : (tagname= tag children | text= STR );
    public final void node() throws RecognitionException {
        Token text=null;
        String tagname = null;


        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:79:5: (tagname= tag children | text= STR )
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
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:79:7: tagname= tag children
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
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:82:7: text= STR
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
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:86:1: tag returns [String tagname] : nodename= ID ( ( '@' | '\\\\' ) ns= ID )? ( attributes )? ;
    public final String tag() throws RecognitionException {
        String tagname = null;

        Token nodename=null;
        Token ns=null;

        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:87:5: (nodename= ID ( ( '@' | '\\\\' ) ns= ID )? ( attributes )? )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:87:7: nodename= ID ( ( '@' | '\\\\' ) ns= ID )? ( attributes )?
            {
            nodename=(Token)match(input,ID,FOLLOW_ID_in_tag182); 
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:87:19: ( ( '@' | '\\\\' ) ns= ID )?
            int alt4=2;
            int LA4_0 = input.LA(1);

            if ( ((LA4_0>=17 && LA4_0<=18)) ) {
                alt4=1;
            }
            switch (alt4) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:87:20: ( '@' | '\\\\' ) ns= ID
                    {
                    if ( (input.LA(1)>=17 && input.LA(1)<=18) ) {
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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:87:73: ( attributes )?
            int alt5=2;
            int LA5_0 = input.LA(1);

            if ( ((LA5_0>=STR && LA5_0<=ID)||(LA5_0>=INT && LA5_0<=CHAR)||LA5_0==26||LA5_0==28) ) {
                alt5=1;
            }
            switch (alt5) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:87:73: attributes
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
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:90:10: fragment children : ( '{' childs '}' | ( ':' ( node )* )? ( '.' | ';' ) );
    public final void children() throws RecognitionException {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:91:5: ( '{' childs '}' | ( ':' ( node )* )? ( '.' | ';' ) )
            int alt8=2;
            int LA8_0 = input.LA(1);

            if ( (LA8_0==19) ) {
                alt8=1;
            }
            else if ( (LA8_0==16||(LA8_0>=21 && LA8_0<=22)) ) {
                alt8=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 8, 0, input);

                throw nvae;
            }
            switch (alt8) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:91:7: '{' childs '}'
                    {
                    match(input,19,FOLLOW_19_in_children218); 
                    pushFollow(FOLLOW_childs_in_children220);
                    childs();

                    state._fsp--;

                    match(input,20,FOLLOW_20_in_children222); 

                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:92:7: ( ':' ( node )* )? ( '.' | ';' )
                    {
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:92:7: ( ':' ( node )* )?
                    int alt7=2;
                    int LA7_0 = input.LA(1);

                    if ( (LA7_0==21) ) {
                        alt7=1;
                    }
                    switch (alt7) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:92:8: ':' ( node )*
                            {
                            match(input,21,FOLLOW_21_in_children231); 
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:92:12: ( node )*
                            loop6:
                            do {
                                int alt6=2;
                                int LA6_0 = input.LA(1);

                                if ( ((LA6_0>=STR && LA6_0<=ID)) ) {
                                    alt6=1;
                                }


                                switch (alt6) {
                            	case 1 :
                            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:92:12: node
                            	    {
                            	    pushFollow(FOLLOW_node_in_children233);
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

                    if ( input.LA(1)==16||input.LA(1)==22 ) {
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
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:95:10: fragment childs : ( node )* (nodename= tag )? ;
    public final void childs() throws RecognitionException {
        String nodename = null;


        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:96:5: ( ( node )* (nodename= tag )? )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:96:7: ( node )* (nodename= tag )?
            {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:96:7: ( node )*
            loop9:
            do {
                int alt9=2;
                alt9 = dfa9.predict(input);
                switch (alt9) {
            	case 1 :
            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:96:7: node
            	    {
            	    pushFollow(FOLLOW_node_in_childs261);
            	    node();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop9;
                }
            } while (true);

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:96:21: (nodename= tag )?
            int alt10=2;
            int LA10_0 = input.LA(1);

            if ( (LA10_0==ID) ) {
                alt10=1;
            }
            switch (alt10) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:96:21: nodename= tag
                    {
                    pushFollow(FOLLOW_tag_in_childs266);
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
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:99:10: fragment attribute : ( (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? ) (o= OP )? (v= value )? | v= value (o= OP )? (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? )? );
    public final void attribute() throws RecognitionException {
        Token ns=null;
        Token name=null;
        Token o=null;
        Token v = null;


        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:100:5: ( (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? ) (o= OP )? (v= value )? | v= value (o= OP )? (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? )? )
            int alt18=2;
            int LA18_0 = input.LA(1);

            if ( (LA18_0==ID) ) {
                alt18=1;
            }
            else if ( (LA18_0==STR||(LA18_0>=INT && LA18_0<=CHAR)) ) {
                alt18=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 18, 0, input);

                throw nvae;
            }
            switch (alt18) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:100:7: (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? ) (o= OP )? (v= value )?
                    {
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:100:7: (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? )
                    int alt12=2;
                    int LA12_0 = input.LA(1);

                    if ( (LA12_0==ID) ) {
                        int LA12_1 = input.LA(2);

                        if ( ((LA12_1>=23 && LA12_1<=24)) ) {
                            alt12=1;
                        }
                        else if ( (LA12_1==STR||(LA12_1>=OP && LA12_1<=CHAR)||(LA12_1>=16 && LA12_1<=22)||LA12_1==25||LA12_1==27||LA12_1==29) ) {
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
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:100:8: ns= ID ( '!' | '#' ) name= ID
                            {
                            ns=(Token)match(input,ID,FOLLOW_ID_in_attribute291); 
                            if ( (input.LA(1)>=23 && input.LA(1)<=24) ) {
                                input.consume();
                                state.errorRecovery=false;
                            }
                            else {
                                MismatchedSetException mse = new MismatchedSetException(null,input);
                                throw mse;
                            }

                            name=(Token)match(input,ID,FOLLOW_ID_in_attribute301); 

                            }
                            break;
                        case 2 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:100:34: name= ID ( ( '@' | '\\\\' ) ns= ID )?
                            {
                            name=(Token)match(input,ID,FOLLOW_ID_in_attribute307); 
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:100:42: ( ( '@' | '\\\\' ) ns= ID )?
                            int alt11=2;
                            int LA11_0 = input.LA(1);

                            if ( ((LA11_0>=17 && LA11_0<=18)) ) {
                                alt11=1;
                            }
                            switch (alt11) {
                                case 1 :
                                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:100:44: ( '@' | '\\\\' ) ns= ID
                                    {
                                    if ( (input.LA(1)>=17 && input.LA(1)<=18) ) {
                                        input.consume();
                                        state.errorRecovery=false;
                                    }
                                    else {
                                        MismatchedSetException mse = new MismatchedSetException(null,input);
                                        throw mse;
                                    }

                                    ns=(Token)match(input,ID,FOLLOW_ID_in_attribute319); 

                                    }
                                    break;

                            }


                            }
                            break;

                    }

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:100:65: (o= OP )?
                    int alt13=2;
                    int LA13_0 = input.LA(1);

                    if ( (LA13_0==OP) ) {
                        alt13=1;
                    }
                    switch (alt13) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:100:65: o= OP
                            {
                            o=(Token)match(input,OP,FOLLOW_OP_in_attribute326); 

                            }
                            break;

                    }

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:100:71: (v= value )?
                    int alt14=2;
                    int LA14_0 = input.LA(1);

                    if ( (LA14_0==STR||(LA14_0>=INT && LA14_0<=CHAR)) ) {
                        alt14=1;
                    }
                    switch (alt14) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:100:71: v= value
                            {
                            pushFollow(FOLLOW_value_in_attribute331);
                            v=value();

                            state._fsp--;


                            }
                            break;

                    }

                     attr(ns,name,o,v); 

                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:101:7: v= value (o= OP )? (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? )?
                    {
                    pushFollow(FOLLOW_value_in_attribute344);
                    v=value();

                    state._fsp--;

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:101:16: (o= OP )?
                    int alt15=2;
                    int LA15_0 = input.LA(1);

                    if ( (LA15_0==OP) ) {
                        alt15=1;
                    }
                    switch (alt15) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:101:16: o= OP
                            {
                            o=(Token)match(input,OP,FOLLOW_OP_in_attribute348); 

                            }
                            break;

                    }

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:101:21: (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? )?
                    int alt17=3;
                    int LA17_0 = input.LA(1);

                    if ( (LA17_0==ID) ) {
                        int LA17_1 = input.LA(2);

                        if ( ((LA17_1>=23 && LA17_1<=24)) ) {
                            alt17=1;
                        }
                        else if ( ((LA17_1>=16 && LA17_1<=22)||LA17_1==25||LA17_1==27||LA17_1==29) ) {
                            alt17=2;
                        }
                    }
                    switch (alt17) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:101:22: ns= ID ( '!' | '#' ) name= ID
                            {
                            ns=(Token)match(input,ID,FOLLOW_ID_in_attribute354); 
                            if ( (input.LA(1)>=23 && input.LA(1)<=24) ) {
                                input.consume();
                                state.errorRecovery=false;
                            }
                            else {
                                MismatchedSetException mse = new MismatchedSetException(null,input);
                                throw mse;
                            }

                            name=(Token)match(input,ID,FOLLOW_ID_in_attribute365); 

                            }
                            break;
                        case 2 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:101:49: name= ID ( ( '@' | '\\\\' ) ns= ID )?
                            {
                            name=(Token)match(input,ID,FOLLOW_ID_in_attribute371); 
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:101:57: ( ( '@' | '\\\\' ) ns= ID )?
                            int alt16=2;
                            int LA16_0 = input.LA(1);

                            if ( ((LA16_0>=17 && LA16_0<=18)) ) {
                                alt16=1;
                            }
                            switch (alt16) {
                                case 1 :
                                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:101:58: ( '@' | '\\\\' ) ns= ID
                                    {
                                    if ( (input.LA(1)>=17 && input.LA(1)<=18) ) {
                                        input.consume();
                                        state.errorRecovery=false;
                                    }
                                    else {
                                        MismatchedSetException mse = new MismatchedSetException(null,input);
                                        throw mse;
                                    }

                                    ns=(Token)match(input,ID,FOLLOW_ID_in_attribute382); 

                                    }
                                    break;

                            }


                            }
                            break;

                    }

                     attr(ns,name,o,v); 

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


    // $ANTLR start "value"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:104:10: fragment value returns [Token value] : ( STR | INT | FLOAT | CHAR ) ;
    public final Token value() throws RecognitionException {
        Token value = null;

        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:105:5: ( ( STR | INT | FLOAT | CHAR ) )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:105:7: ( STR | INT | FLOAT | CHAR )
            {
            if ( input.LA(1)==STR||(input.LA(1)>=INT && input.LA(1)<=CHAR) ) {
                input.consume();
                state.errorRecovery=false;
            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                throw mse;
            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return value;
    }
    // $ANTLR end "value"


    // $ANTLR start "attributes"
    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:108:10: fragment attributes : ( attribute ( ',' attribute )* | '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')' | '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']' );
    public final void attributes() throws RecognitionException {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:109:5: ( attribute ( ',' attribute )* | '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')' | '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']' )
            int alt22=3;
            switch ( input.LA(1) ) {
            case STR:
            case ID:
            case INT:
            case FLOAT:
            case CHAR:
                {
                alt22=1;
                }
                break;
            case 26:
                {
                alt22=2;
                }
                break;
            case 28:
                {
                alt22=3;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 22, 0, input);

                throw nvae;
            }

            switch (alt22) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:109:7: attribute ( ',' attribute )*
                    {
                    pushFollow(FOLLOW_attribute_in_attributes444);
                    attribute();

                    state._fsp--;

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:109:17: ( ',' attribute )*
                    loop19:
                    do {
                        int alt19=2;
                        int LA19_0 = input.LA(1);

                        if ( (LA19_0==25) ) {
                            alt19=1;
                        }


                        switch (alt19) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:109:19: ',' attribute
                    	    {
                    	    match(input,25,FOLLOW_25_in_attributes448); 
                    	    pushFollow(FOLLOW_attribute_in_attributes450);
                    	    attribute();

                    	    state._fsp--;


                    	    }
                    	    break;

                    	default :
                    	    break loop19;
                        }
                    } while (true);


                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:110:7: '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')'
                    {
                    match(input,26,FOLLOW_26_in_attributes460); 
                    pushFollow(FOLLOW_attribute_in_attributes462);
                    attribute();

                    state._fsp--;

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:110:21: ( ( ',' | ';' | '.' ) attribute )*
                    loop20:
                    do {
                        int alt20=2;
                        int LA20_0 = input.LA(1);

                        if ( (LA20_0==16||LA20_0==22||LA20_0==25) ) {
                            alt20=1;
                        }


                        switch (alt20) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:110:23: ( ',' | ';' | '.' ) attribute
                    	    {
                    	    if ( input.LA(1)==16||input.LA(1)==22||input.LA(1)==25 ) {
                    	        input.consume();
                    	        state.errorRecovery=false;
                    	    }
                    	    else {
                    	        MismatchedSetException mse = new MismatchedSetException(null,input);
                    	        throw mse;
                    	    }

                    	    pushFollow(FOLLOW_attribute_in_attributes474);
                    	    attribute();

                    	    state._fsp--;


                    	    }
                    	    break;

                    	default :
                    	    break loop20;
                        }
                    } while (true);

                    match(input,27,FOLLOW_27_in_attributes478); 

                    }
                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:111:7: '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']'
                    {
                    match(input,28,FOLLOW_28_in_attributes486); 
                    pushFollow(FOLLOW_attribute_in_attributes488);
                    attribute();

                    state._fsp--;

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:111:21: ( ( ',' | ';' | '.' ) attribute )*
                    loop21:
                    do {
                        int alt21=2;
                        int LA21_0 = input.LA(1);

                        if ( (LA21_0==16||LA21_0==22||LA21_0==25) ) {
                            alt21=1;
                        }


                        switch (alt21) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:111:23: ( ',' | ';' | '.' ) attribute
                    	    {
                    	    if ( input.LA(1)==16||input.LA(1)==22||input.LA(1)==25 ) {
                    	        input.consume();
                    	        state.errorRecovery=false;
                    	    }
                    	    else {
                    	        MismatchedSetException mse = new MismatchedSetException(null,input);
                    	        throw mse;
                    	    }

                    	    pushFollow(FOLLOW_attribute_in_attributes500);
                    	    attribute();

                    	    state._fsp--;


                    	    }
                    	    break;

                    	default :
                    	    break loop21;
                        }
                    } while (true);

                    match(input,29,FOLLOW_29_in_attributes504); 

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


    protected DFA9 dfa9 = new DFA9(this);
    static final String DFA9_eotS =
        "\141\uffff";
    static final String DFA9_eofS =
        "\141\uffff";
    static final String DFA9_minS =
        "\2\6\2\uffff\1\7\1\6\1\7\3\6\2\7\1\6\1\20\1\6\1\7\1\20\1\6\1\7\1"+
        "\6\1\7\3\6\5\7\1\6\1\20\1\6\1\20\1\7\1\20\2\7\1\6\1\20\1\6\1\20"+
        "\1\7\1\20\2\7\1\6\1\20\1\7\3\20\3\6\3\7\3\6\3\7\2\6\4\7\1\6\1\20"+
        "\1\7\3\20\2\7\1\6\1\20\1\7\5\20\2\6\2\7\2\6\2\7\4\20";
    static final String DFA9_maxS =
        "\1\24\1\34\2\uffff\1\7\2\31\2\13\1\34\2\7\2\31\1\13\2\31\2\33\2"+
        "\35\4\31\4\7\2\33\1\13\1\26\2\33\2\7\2\35\1\13\1\26\2\35\2\7\6\31"+
        "\4\33\2\7\4\35\2\7\2\31\4\7\6\33\2\7\6\35\2\31\2\33\2\7\2\35\2\7"+
        "\2\33\2\35";
    static final String DFA9_acceptS =
        "\2\uffff\1\2\1\1\135\uffff";
    static final String DFA9_specialS =
        "\141\uffff}>";
    static final String[] DFA9_transitionS = {
            "\1\3\1\1\14\uffff\1\2",
            "\1\6\1\5\1\uffff\3\6\4\uffff\1\3\2\4\1\3\1\2\2\3\3\uffff\1"+
            "\7\1\uffff\1\10",
            "",
            "",
            "\1\11",
            "\1\15\1\uffff\1\14\3\15\4\uffff\1\3\2\13\1\3\1\2\2\3\2\12\1"+
            "\16",
            "\1\20\1\17\7\uffff\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16",
            "\1\22\1\21\1\uffff\3\22",
            "\1\24\1\23\1\uffff\3\24",
            "\1\6\1\5\1\uffff\3\6\4\uffff\1\3\2\uffff\1\3\1\2\2\3\3\uffff"+
            "\1\7\1\uffff\1\10",
            "\1\25",
            "\1\26",
            "\1\15\2\uffff\3\15\4\uffff\1\3\2\uffff\1\3\1\2\2\3\2\uffff"+
            "\1\16",
            "\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16",
            "\1\30\1\27\1\uffff\3\30",
            "\1\20\10\uffff\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16",
            "\1\3\2\32\1\3\1\2\2\3\2\31\1\16",
            "\1\36\1\uffff\1\35\3\36\4\uffff\1\37\2\34\3\uffff\1\37\2\33"+
            "\1\37\1\uffff\1\40",
            "\1\42\1\41\7\uffff\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff\1"+
            "\40",
            "\1\46\1\uffff\1\45\3\46\4\uffff\1\47\2\44\3\uffff\1\47\2\43"+
            "\1\47\3\uffff\1\50",
            "\1\52\1\51\7\uffff\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff\1"+
            "\50",
            "\1\15\1\uffff\1\14\3\15\4\uffff\1\3\2\uffff\1\3\1\2\2\3\2\uffff"+
            "\1\16",
            "\1\15\1\uffff\1\14\3\15\4\uffff\1\3\2\uffff\1\3\1\2\2\3\2\uffff"+
            "\1\16",
            "\1\56\1\uffff\1\55\3\56\4\uffff\1\3\2\54\1\3\1\2\2\3\2\53\1"+
            "\16",
            "\1\60\1\57\7\uffff\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16",
            "\1\61",
            "\1\62",
            "\1\63",
            "\1\64",
            "\1\36\2\uffff\3\36\4\uffff\1\37\5\uffff\1\37\2\uffff\1\37\1"+
            "\uffff\1\40",
            "\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff\1\40",
            "\1\66\1\65\1\uffff\3\66",
            "\1\3\2\uffff\1\3\1\2\2\3",
            "\1\42\10\uffff\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff\1\40",
            "\1\37\2\70\3\uffff\1\37\2\67\1\37\1\uffff\1\40",
            "\1\71",
            "\1\72",
            "\1\46\2\uffff\3\46\4\uffff\1\47\5\uffff\1\47\2\uffff\1\47\3"+
            "\uffff\1\50",
            "\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff\1\50",
            "\1\74\1\73\1\uffff\3\74",
            "\1\3\2\uffff\1\3\1\2\2\3",
            "\1\52\10\uffff\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff\1\50",
            "\1\47\2\76\3\uffff\1\47\2\75\1\47\3\uffff\1\50",
            "\1\77",
            "\1\100",
            "\1\56\2\uffff\3\56\4\uffff\1\3\2\uffff\1\3\1\2\2\3\2\uffff"+
            "\1\16",
            "\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16",
            "\1\60\10\uffff\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16",
            "\1\3\2\102\1\3\1\2\2\3\2\101\1\16",
            "\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16",
            "\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16",
            "\1\36\1\uffff\1\35\3\36\4\uffff\1\37\5\uffff\1\37\2\uffff\1"+
            "\37\1\uffff\1\40",
            "\1\36\1\uffff\1\35\3\36\4\uffff\1\37\5\uffff\1\37\2\uffff\1"+
            "\37\1\uffff\1\40",
            "\1\106\1\uffff\1\105\3\106\4\uffff\1\37\2\104\3\uffff\1\37"+
            "\2\103\1\37\1\uffff\1\40",
            "\1\110\1\107\7\uffff\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff"+
            "\1\40",
            "\1\111",
            "\1\112",
            "\1\46\1\uffff\1\45\3\46\4\uffff\1\47\5\uffff\1\47\2\uffff\1"+
            "\47\3\uffff\1\50",
            "\1\46\1\uffff\1\45\3\46\4\uffff\1\47\5\uffff\1\47\2\uffff\1"+
            "\47\3\uffff\1\50",
            "\1\116\1\uffff\1\115\3\116\4\uffff\1\47\2\114\3\uffff\1\47"+
            "\2\113\1\47\3\uffff\1\50",
            "\1\120\1\117\7\uffff\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff"+
            "\1\50",
            "\1\121",
            "\1\122",
            "\1\56\1\uffff\1\55\3\56\4\uffff\1\3\2\uffff\1\3\1\2\2\3\2\uffff"+
            "\1\16",
            "\1\56\1\uffff\1\55\3\56\4\uffff\1\3\2\uffff\1\3\1\2\2\3\2\uffff"+
            "\1\16",
            "\1\123",
            "\1\124",
            "\1\125",
            "\1\126",
            "\1\106\2\uffff\3\106\4\uffff\1\37\5\uffff\1\37\2\uffff\1\37"+
            "\1\uffff\1\40",
            "\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff\1\40",
            "\1\110\10\uffff\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff\1\40",
            "\1\37\2\130\3\uffff\1\37\2\127\1\37\1\uffff\1\40",
            "\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff\1\40",
            "\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff\1\40",
            "\1\131",
            "\1\132",
            "\1\116\2\uffff\3\116\4\uffff\1\47\5\uffff\1\47\2\uffff\1\47"+
            "\3\uffff\1\50",
            "\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff\1\50",
            "\1\120\10\uffff\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff\1\50",
            "\1\47\2\134\3\uffff\1\47\2\133\1\47\3\uffff\1\50",
            "\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff\1\50",
            "\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff\1\50",
            "\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16",
            "\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16",
            "\1\106\1\uffff\1\105\3\106\4\uffff\1\37\5\uffff\1\37\2\uffff"+
            "\1\37\1\uffff\1\40",
            "\1\106\1\uffff\1\105\3\106\4\uffff\1\37\5\uffff\1\37\2\uffff"+
            "\1\37\1\uffff\1\40",
            "\1\135",
            "\1\136",
            "\1\116\1\uffff\1\115\3\116\4\uffff\1\47\5\uffff\1\47\2\uffff"+
            "\1\47\3\uffff\1\50",
            "\1\116\1\uffff\1\115\3\116\4\uffff\1\47\5\uffff\1\47\2\uffff"+
            "\1\47\3\uffff\1\50",
            "\1\137",
            "\1\140",
            "\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff\1\40",
            "\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff\1\40",
            "\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff\1\50",
            "\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff\1\50"
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
            return "()* loopback of 96:7: ( node )*";
        }
    }
 

    public static final BitSet FOLLOW_xmldecl_in_struxt49 = new BitSet(new long[]{0x00000000000000D0L});
    public static final BitSet FOLLOW_DOC_in_struxt60 = new BitSet(new long[]{0x00000000000000D0L});
    public static final BitSet FOLLOW_node_in_struxt71 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_struxt73 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_XML_in_xmldecl94 = new BitSet(new long[]{0x0000000014000EC0L});
    public static final BitSet FOLLOW_attributes_in_xmldecl98 = new BitSet(new long[]{0x0000000000010000L});
    public static final BitSet FOLLOW_16_in_xmldecl100 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_tag_in_node121 = new BitSet(new long[]{0x0000000000690000L});
    public static final BitSet FOLLOW_children_in_node139 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_STR_in_node151 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ID_in_tag182 = new BitSet(new long[]{0x0000000014060EC2L});
    public static final BitSet FOLLOW_set_in_tag185 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_ID_in_tag193 = new BitSet(new long[]{0x0000000014000EC2L});
    public static final BitSet FOLLOW_attributes_in_tag199 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_19_in_children218 = new BitSet(new long[]{0x00000000001000D0L});
    public static final BitSet FOLLOW_childs_in_children220 = new BitSet(new long[]{0x0000000000100000L});
    public static final BitSet FOLLOW_20_in_children222 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_21_in_children231 = new BitSet(new long[]{0x00000000004100D0L});
    public static final BitSet FOLLOW_node_in_children233 = new BitSet(new long[]{0x00000000004100D0L});
    public static final BitSet FOLLOW_set_in_children238 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_node_in_childs261 = new BitSet(new long[]{0x00000000000000D2L});
    public static final BitSet FOLLOW_tag_in_childs266 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ID_in_attribute291 = new BitSet(new long[]{0x0000000001800000L});
    public static final BitSet FOLLOW_set_in_attribute293 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_ID_in_attribute301 = new BitSet(new long[]{0x0000000000000FC2L});
    public static final BitSet FOLLOW_ID_in_attribute307 = new BitSet(new long[]{0x0000000000060FC2L});
    public static final BitSet FOLLOW_set_in_attribute311 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_ID_in_attribute319 = new BitSet(new long[]{0x0000000000000FC2L});
    public static final BitSet FOLLOW_OP_in_attribute326 = new BitSet(new long[]{0x0000000000000EC2L});
    public static final BitSet FOLLOW_value_in_attribute331 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_value_in_attribute344 = new BitSet(new long[]{0x0000000000000182L});
    public static final BitSet FOLLOW_OP_in_attribute348 = new BitSet(new long[]{0x0000000000000082L});
    public static final BitSet FOLLOW_ID_in_attribute354 = new BitSet(new long[]{0x0000000001800000L});
    public static final BitSet FOLLOW_set_in_attribute357 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_ID_in_attribute365 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ID_in_attribute371 = new BitSet(new long[]{0x0000000000060002L});
    public static final BitSet FOLLOW_set_in_attribute374 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_ID_in_attribute382 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_set_in_value411 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_attribute_in_attributes444 = new BitSet(new long[]{0x0000000002000002L});
    public static final BitSet FOLLOW_25_in_attributes448 = new BitSet(new long[]{0x0000000000000EC0L});
    public static final BitSet FOLLOW_attribute_in_attributes450 = new BitSet(new long[]{0x0000000002000002L});
    public static final BitSet FOLLOW_26_in_attributes460 = new BitSet(new long[]{0x0000000000000EC0L});
    public static final BitSet FOLLOW_attribute_in_attributes462 = new BitSet(new long[]{0x000000000A410000L});
    public static final BitSet FOLLOW_set_in_attributes466 = new BitSet(new long[]{0x0000000000000EC0L});
    public static final BitSet FOLLOW_attribute_in_attributes474 = new BitSet(new long[]{0x000000000A410000L});
    public static final BitSet FOLLOW_27_in_attributes478 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_28_in_attributes486 = new BitSet(new long[]{0x0000000000000EC0L});
    public static final BitSet FOLLOW_attribute_in_attributes488 = new BitSet(new long[]{0x0000000022410000L});
    public static final BitSet FOLLOW_set_in_attributes492 = new BitSet(new long[]{0x0000000000000EC0L});
    public static final BitSet FOLLOW_attribute_in_attributes500 = new BitSet(new long[]{0x0000000022410000L});
    public static final BitSet FOLLOW_29_in_attributes504 = new BitSet(new long[]{0x0000000000000002L});

}