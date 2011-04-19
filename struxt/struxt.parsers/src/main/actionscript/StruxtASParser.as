// $ANTLR 3.3 Nov 30, 2010 12:45:30 /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g 2011-04-19 00:16:36
package {
    import org.antlr.runtime.*;
        

    public class StruxtASParser extends Parser {
        public static const tokenNames:Array = [
            "<invalid>", "<EOR>", "<DOWN>", "<UP>", "DOC", "XML", "CDATA", "OP", "PRENS", "ID", "POSTNS", "STR", "INT", "FLOAT", "CHAR", "COMMENT", "WS", "EXPONENT", "HEX_DIGIT", "'.'", "'{'", "'}'", "':'", "';'", "','", "'('", "')'", "'['", "']'"
        ];
        public static const EOF:int=-1;
        public static const T__19:int=19;
        public static const T__20:int=20;
        public static const T__21:int=21;
        public static const T__22:int=22;
        public static const T__23:int=23;
        public static const T__24:int=24;
        public static const T__25:int=25;
        public static const T__26:int=26;
        public static const T__27:int=27;
        public static const T__28:int=28;
        public static const DOC:int=4;
        public static const XML:int=5;
        public static const CDATA:int=6;
        public static const OP:int=7;
        public static const PRENS:int=8;
        public static const ID:int=9;
        public static const POSTNS:int=10;
        public static const STR:int=11;
        public static const INT:int=12;
        public static const FLOAT:int=13;
        public static const CHAR:int=14;
        public static const COMMENT:int=15;
        public static const WS:int=16;
        public static const EXPONENT:int=17;
        public static const HEX_DIGIT:int=18;

        // delegates
        // delegators


            public function StruxtASParser(input:TokenStream, state:RecognizerSharedState = null) {
                super(input, state);

                dfa8 = new DFA(this, 8,
                            "()* loopback of 33:7: ( node )*",
                            DFA8_eot, DFA8_eof, DFA8_min,
                            DFA8_max, DFA8_accept, DFA8_special,
                            DFA8_transition);

                dfa15 = new DFA(this, 15,
                            "36:10: fragment attribute : (n= name (o= OP )? (v= value )? | v= value (o= OP )? (n= name )? | n= name o= OP n1= name | o= OP (n= name | v= value ) );",
                            DFA15_eot, DFA15_eof, DFA15_min,
                            DFA15_max, DFA15_accept, DFA15_special,
                            DFA15_transition);

            }
            

        public override function get tokenNames():Array { return StruxtASParser.tokenNames; }
        public override function get grammarFileName():String { return "/Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g"; }


        // $ANTLR start struxt
        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:7:1: struxt returns [StruxtASParser self] : (xml= xmldecl )? (doctype= DOC )? node EOF ;
        public final function struxt():StruxtASParser {
            var self:StruxtASParser = null;

            var doctype:Token=null;

            try {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:8:5: ( (xml= xmldecl )? (doctype= DOC )? node EOF )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:8:7: (xml= xmldecl )? (doctype= DOC )? node EOF
                {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:8:10: (xml= xmldecl )?
                var alt1:int=2;
                var LA1_0:int = input.LA(1);

                if ( (LA1_0==5) ) {
                    alt1=1;
                }
                switch (alt1) {
                    case 1 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:8:10: xml= xmldecl
                        {
                        pushFollow(FOLLOW_xmldecl_in_struxt32);
                        xmldecl();

                        state._fsp = state._fsp - 1;


                        }
                        break;

                }

                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:9:14: (doctype= DOC )?
                var alt2:int=2;
                var LA2_0:int = input.LA(1);

                if ( (LA2_0==4) ) {
                    alt2=1;
                }
                switch (alt2) {
                    case 1 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:9:14: doctype= DOC
                        {
                        doctype=Token(matchStream(input,DOC,FOLLOW_DOC_in_struxt43)); 

                        }
                        break;

                }

                pushFollow(FOLLOW_node_in_struxt52);
                node();

                state._fsp = state._fsp - 1;

                matchStream(input,EOF,FOLLOW_EOF_in_struxt54); 

                }

            }
            catch (re:RecognitionException) {
                reportError(re);
                recoverStream(input,re);
            }
            finally {
            }
            return self;
        }
        // $ANTLR end struxt

        // $ANTLR start xmldecl
        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:13:1: xmldecl : XML attributes '.' ;
        public final function xmldecl():void {
            try {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:14:5: ( XML attributes '.' )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:14:7: XML attributes '.'
                {
                matchStream(input,XML,FOLLOW_XML_in_xmldecl71); 
                pushFollow(FOLLOW_attributes_in_xmldecl73);
                attributes();

                state._fsp = state._fsp - 1;

                matchStream(input,19,FOLLOW_19_in_xmldecl75); 

                }

            }
            catch (re:RecognitionException) {
                reportError(re);
                recoverStream(input,re);
            }
            finally {
            }
            return ;
        }
        // $ANTLR end xmldecl

        // $ANTLR start node
        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:17:1: node : ( tag children | text= value | cdata= CDATA );
        public final function node():void {
            var cdata:Token=null;
            var text:String = null;


            try {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:18:5: ( tag children | text= value | cdata= CDATA )
                var alt3:int=3;
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
                    throw new NoViableAltException("", 3, 0, input);

                }

                switch (alt3) {
                    case 1 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:18:7: tag children
                        {
                        pushFollow(FOLLOW_tag_in_node92);
                        tag();

                        state._fsp = state._fsp - 1;

                        pushFollow(FOLLOW_children_in_node94);
                        children();

                        state._fsp = state._fsp - 1;


                        }
                        break;
                    case 2 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:19:7: text= value
                        {
                        pushFollow(FOLLOW_value_in_node104);
                        text=value();

                        state._fsp = state._fsp - 1;


                        }
                        break;
                    case 3 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:20:7: cdata= CDATA
                        {
                        cdata=Token(matchStream(input,CDATA,FOLLOW_CDATA_in_node114)); 

                        }
                        break;

                }
            }
            catch (re:RecognitionException) {
                reportError(re);
                recoverStream(input,re);
            }
            finally {
            }
            return ;
        }
        // $ANTLR end node

        // $ANTLR start tag
        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:23:1: tag : n= name ( attributes )? ;
        public final function tag():void {
            var n:ParserRuleReturnScope = null;


            try {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:24:5: (n= name ( attributes )? )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:24:7: n= name ( attributes )?
                {
                pushFollow(FOLLOW_name_in_tag133);
                n=name();

                state._fsp = state._fsp - 1;

                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:24:14: ( attributes )?
                var alt4:int=2;
                var LA4_0:int = input.LA(1);

                if ( (LA4_0==7||LA4_0==9||(LA4_0>=11 && LA4_0<=14)||LA4_0==25||LA4_0==27) ) {
                    alt4=1;
                }
                switch (alt4) {
                    case 1 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:24:14: attributes
                        {
                        pushFollow(FOLLOW_attributes_in_tag135);
                        attributes();

                        state._fsp = state._fsp - 1;


                        }
                        break;

                }


                }

            }
            catch (re:RecognitionException) {
                reportError(re);
                recoverStream(input,re);
            }
            finally {
            }
            return ;
        }
        // $ANTLR end tag

        // $ANTLR start children
        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:27:10: fragment children : ( '{' childs '}' | ( ':' ( node )* )? ( '.' | ';' | EOF ) );
        public final function children():void {
            try {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:28:5: ( '{' childs '}' | ( ':' ( node )* )? ( '.' | ';' | EOF ) )
                var alt7:int=2;
                var LA7_0:int = input.LA(1);

                if ( (LA7_0==20) ) {
                    alt7=1;
                }
                else if ( (LA7_0==-1||LA7_0==19||(LA7_0>=22 && LA7_0<=23)) ) {
                    alt7=2;
                }
                else {
                    throw new NoViableAltException("", 7, 0, input);

                }
                switch (alt7) {
                    case 1 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:28:7: '{' childs '}'
                        {
                        matchStream(input,20,FOLLOW_20_in_children154); 
                        pushFollow(FOLLOW_childs_in_children156);
                        childs();

                        state._fsp = state._fsp - 1;

                        matchStream(input,21,FOLLOW_21_in_children158); 

                        }
                        break;
                    case 2 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:29:7: ( ':' ( node )* )? ( '.' | ';' | EOF )
                        {
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:29:7: ( ':' ( node )* )?
                        var alt6:int=2;
                        var LA6_0:int = input.LA(1);

                        if ( (LA6_0==22) ) {
                            alt6=1;
                        }
                        switch (alt6) {
                            case 1 :
                                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:29:8: ':' ( node )*
                                {
                                matchStream(input,22,FOLLOW_22_in_children167); 
                                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:29:12: ( node )*
                                loop5:
                                do {
                                    var alt5:int=2;
                                    var LA5_0:int = input.LA(1);

                                    if ( (LA5_0==6||LA5_0==9||(LA5_0>=11 && LA5_0<=14)) ) {
                                        alt5=1;
                                    }


                                    switch (alt5) {
                                	case 1 :
                                	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:29:12: node
                                	    {
                                	    pushFollow(FOLLOW_node_in_children169);
                                	    node();

                                	    state._fsp = state._fsp - 1;


                                	    }
                                	    break;

                                	default :
                                	    break loop5;
                                    }
                                } while (true);


                                }
                                break;

                        }

                        if ( input.LA(1)==-1||input.LA(1)==19||input.LA(1)==23 ) {
                            input.consume();
                            this.state.errorRecovery=false;
                        }
                        else {
                            throw new MismatchedSetException(null,input);
                        }


                        }
                        break;

                }
            }
            catch (re:RecognitionException) {
                reportError(re);
                recoverStream(input,re);
            }
            finally {
            }
            return ;
        }
        // $ANTLR end children

        // $ANTLR start childs
        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:32:10: fragment childs : ( node )* (nodename= tag )? ;
        public final function childs():void {
            try {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:33:5: ( ( node )* (nodename= tag )? )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:33:7: ( node )* (nodename= tag )?
                {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:33:7: ( node )*
                loop8:
                do {
                    var alt8:int=2;
                    alt8 = dfa8.predict(input);
                    switch (alt8) {
                	case 1 :
                	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:33:7: node
                	    {
                	    pushFollow(FOLLOW_node_in_childs199);
                	    node();

                	    state._fsp = state._fsp - 1;


                	    }
                	    break;

                	default :
                	    break loop8;
                    }
                } while (true);

                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:33:21: (nodename= tag )?
                var alt9:int=2;
                var LA9_0:int = input.LA(1);

                if ( (LA9_0==9) ) {
                    alt9=1;
                }
                switch (alt9) {
                    case 1 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:33:21: nodename= tag
                        {
                        pushFollow(FOLLOW_tag_in_childs204);
                        tag();

                        state._fsp = state._fsp - 1;


                        }
                        break;

                }


                }

            }
            catch (re:RecognitionException) {
                reportError(re);
                recoverStream(input,re);
            }
            finally {
            }
            return ;
        }
        // $ANTLR end childs

        // $ANTLR start attribute
        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:36:10: fragment attribute : (n= name (o= OP )? (v= value )? | v= value (o= OP )? (n= name )? | n= name o= OP n1= name | o= OP (n= name | v= value ) );
        public final function attribute():void {
            var o:Token=null;
            var n:ParserRuleReturnScope = null;

            var v:String = null;

            var n1:ParserRuleReturnScope = null;


            try {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:37:5: (n= name (o= OP )? (v= value )? | v= value (o= OP )? (n= name )? | n= name o= OP n1= name | o= OP (n= name | v= value ) )
                var alt15:int=4;
                alt15 = dfa15.predict(input);
                switch (alt15) {
                    case 1 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:37:7: n= name (o= OP )? (v= value )?
                        {
                        pushFollow(FOLLOW_name_in_attribute226);
                        n=name();

                        state._fsp = state._fsp - 1;

                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:37:15: (o= OP )?
                        var alt10:int=2;
                        var LA10_0:int = input.LA(1);

                        if ( (LA10_0==7) ) {
                            alt10=1;
                        }
                        switch (alt10) {
                            case 1 :
                                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:37:15: o= OP
                                {
                                o=Token(matchStream(input,OP,FOLLOW_OP_in_attribute230)); 

                                }
                                break;

                        }

                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:37:21: (v= value )?
                        var alt11:int=2;
                        var LA11_0:int = input.LA(1);

                        if ( ((LA11_0>=11 && LA11_0<=14)) ) {
                            alt11=1;
                        }
                        switch (alt11) {
                            case 1 :
                                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:37:21: v= value
                                {
                                pushFollow(FOLLOW_value_in_attribute235);
                                v=value();

                                state._fsp = state._fsp - 1;


                                }
                                break;

                        }


                        }
                        break;
                    case 2 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:38:7: v= value (o= OP )? (n= name )?
                        {
                        pushFollow(FOLLOW_value_in_attribute246);
                        v=value();

                        state._fsp = state._fsp - 1;

                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:38:16: (o= OP )?
                        var alt12:int=2;
                        var LA12_0:int = input.LA(1);

                        if ( (LA12_0==7) ) {
                            alt12=1;
                        }
                        switch (alt12) {
                            case 1 :
                                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:38:16: o= OP
                                {
                                o=Token(matchStream(input,OP,FOLLOW_OP_in_attribute250)); 

                                }
                                break;

                        }

                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:38:22: (n= name )?
                        var alt13:int=2;
                        var LA13_0:int = input.LA(1);

                        if ( (LA13_0==9) ) {
                            alt13=1;
                        }
                        switch (alt13) {
                            case 1 :
                                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:38:22: n= name
                                {
                                pushFollow(FOLLOW_name_in_attribute255);
                                n=name();

                                state._fsp = state._fsp - 1;


                                }
                                break;

                        }


                        }
                        break;
                    case 3 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:39:7: n= name o= OP n1= name
                        {
                        pushFollow(FOLLOW_name_in_attribute266);
                        n=name();

                        state._fsp = state._fsp - 1;

                        o=Token(matchStream(input,OP,FOLLOW_OP_in_attribute270)); 
                        pushFollow(FOLLOW_name_in_attribute274);
                        n1=name();

                        state._fsp = state._fsp - 1;


                        }
                        break;
                    case 4 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:40:7: o= OP (n= name | v= value )
                        {
                        o=Token(matchStream(input,OP,FOLLOW_OP_in_attribute284)); 
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:40:12: (n= name | v= value )
                        var alt14:int=2;
                        var LA14_0:int = input.LA(1);

                        if ( (LA14_0==9) ) {
                            alt14=1;
                        }
                        else if ( ((LA14_0>=11 && LA14_0<=14)) ) {
                            alt14=2;
                        }
                        else {
                            throw new NoViableAltException("", 14, 0, input);

                        }
                        switch (alt14) {
                            case 1 :
                                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:40:13: n= name
                                {
                                pushFollow(FOLLOW_name_in_attribute289);
                                n=name();

                                state._fsp = state._fsp - 1;


                                }
                                break;
                            case 2 :
                                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:40:20: v= value
                                {
                                pushFollow(FOLLOW_value_in_attribute293);
                                v=value();

                                state._fsp = state._fsp - 1;


                                }
                                break;

                        }


                        }
                        break;

                }
            }
            catch (re:RecognitionException) {
                reportError(re);
                recoverStream(input,re);
            }
            finally {
            }
            return ;
        }
        // $ANTLR end attribute

        // $ANTLR start name
        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:43:10: fragment name returns [Token namespace, Token nodename] : (s= ns PRENS n= ID | n= ID ( POSTNS s= ns )? ) ;
        public final function name():ParserRuleReturnScope {
            var retval:ParserRuleReturnScope = new ParserRuleReturnScope();
            retval.start = input.LT(1);

            var n:Token=null;
            var s:Token = null;


            try {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:44:5: ( (s= ns PRENS n= ID | n= ID ( POSTNS s= ns )? ) )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:44:7: (s= ns PRENS n= ID | n= ID ( POSTNS s= ns )? )
                {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:44:7: (s= ns PRENS n= ID | n= ID ( POSTNS s= ns )? )
                var alt17:int=2;
                var LA17_0:int = input.LA(1);

                if ( (LA17_0==9) ) {
                    var LA17_1:int = input.LA(2);

                    if ( (LA17_1==8) ) {
                        alt17=1;
                    }
                    else if ( (LA17_1==7||(LA17_1>=9 && LA17_1<=14)||(LA17_1>=19 && LA17_1<=28)) ) {
                        alt17=2;
                    }
                    else {
                        throw new NoViableAltException("", 17, 1, input);

                    }
                }
                else {
                    throw new NoViableAltException("", 17, 0, input);

                }
                switch (alt17) {
                    case 1 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:44:8: s= ns PRENS n= ID
                        {
                        pushFollow(FOLLOW_ns_in_name320);
                        s=ns();

                        state._fsp = state._fsp - 1;

                        matchStream(input,PRENS,FOLLOW_PRENS_in_name322); 
                        n=Token(matchStream(input,ID,FOLLOW_ID_in_name326)); 

                        }
                        break;
                    case 2 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:44:26: n= ID ( POSTNS s= ns )?
                        {
                        n=Token(matchStream(input,ID,FOLLOW_ID_in_name332)); 
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:44:31: ( POSTNS s= ns )?
                        var alt16:int=2;
                        var LA16_0:int = input.LA(1);

                        if ( (LA16_0==10) ) {
                            alt16=1;
                        }
                        switch (alt16) {
                            case 1 :
                                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:44:33: POSTNS s= ns
                                {
                                matchStream(input,POSTNS,FOLLOW_POSTNS_in_name336); 
                                pushFollow(FOLLOW_ns_in_name340);
                                s=ns();

                                state._fsp = state._fsp - 1;


                                }
                                break;

                        }


                        }
                        break;

                }


                }

                retval.stop = input.LT(-1);

            }
            catch (re:RecognitionException) {
                reportError(re);
                recoverStream(input,re);
            }
            finally {
            }
            return retval;
        }
        // $ANTLR end name

        // $ANTLR start ns
        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:47:10: fragment ns returns [Token namespace] : s= ID ;
        public final function ns():Token {
            var namespace:Token = null;

            var s:Token=null;

            try {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:48:5: (s= ID )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:48:7: s= ID
                {
                s=Token(matchStream(input,ID,FOLLOW_ID_in_ns368)); 

                }

            }
            catch (re:RecognitionException) {
                reportError(re);
                recoverStream(input,re);
            }
            finally {
            }
            return namespace;
        }
        // $ANTLR end ns

        // $ANTLR start value
        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:51:10: fragment value returns [String s] : v= ( STR | INT | FLOAT | CHAR ) ;
        public final function value():String {
            var s:String = null;

            var v:Token=null;

            try {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:52:5: (v= ( STR | INT | FLOAT | CHAR ) )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:52:7: v= ( STR | INT | FLOAT | CHAR )
                {
                v=Token(input.LT(1));
                if ( (input.LA(1)>=11 && input.LA(1)<=14) ) {
                    input.consume();
                    this.state.errorRecovery=false;
                }
                else {
                    throw new MismatchedSetException(null,input);
                }


                }

            }
            catch (re:RecognitionException) {
                reportError(re);
                recoverStream(input,re);
            }
            finally {
            }
            return s;
        }
        // $ANTLR end value

        // $ANTLR start attributes
        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:55:10: fragment attributes : ( attribute ( ',' attribute )* | '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')' | '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']' );
        public final function attributes():void {
            try {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:56:5: ( attribute ( ',' attribute )* | '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')' | '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']' )
                var alt21:int=3;
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
                    throw new NoViableAltException("", 21, 0, input);

                }

                switch (alt21) {
                    case 1 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:56:7: attribute ( ',' attribute )*
                        {
                        pushFollow(FOLLOW_attribute_in_attributes426);
                        attribute();

                        state._fsp = state._fsp - 1;

                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:56:17: ( ',' attribute )*
                        loop18:
                        do {
                            var alt18:int=2;
                            var LA18_0:int = input.LA(1);

                            if ( (LA18_0==24) ) {
                                alt18=1;
                            }


                            switch (alt18) {
                        	case 1 :
                        	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:56:19: ',' attribute
                        	    {
                        	    matchStream(input,24,FOLLOW_24_in_attributes430); 
                        	    pushFollow(FOLLOW_attribute_in_attributes432);
                        	    attribute();

                        	    state._fsp = state._fsp - 1;


                        	    }
                        	    break;

                        	default :
                        	    break loop18;
                            }
                        } while (true);


                        }
                        break;
                    case 2 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:57:7: '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')'
                        {
                        matchStream(input,25,FOLLOW_25_in_attributes442); 
                        pushFollow(FOLLOW_attribute_in_attributes444);
                        attribute();

                        state._fsp = state._fsp - 1;

                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:57:21: ( ( ',' | ';' | '.' ) attribute )*
                        loop19:
                        do {
                            var alt19:int=2;
                            var LA19_0:int = input.LA(1);

                            if ( (LA19_0==19||(LA19_0>=23 && LA19_0<=24)) ) {
                                alt19=1;
                            }


                            switch (alt19) {
                        	case 1 :
                        	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:57:23: ( ',' | ';' | '.' ) attribute
                        	    {
                        	    if ( input.LA(1)==19||(input.LA(1)>=23 && input.LA(1)<=24) ) {
                        	        input.consume();
                        	        this.state.errorRecovery=false;
                        	    }
                        	    else {
                        	        throw new MismatchedSetException(null,input);
                        	    }

                        	    pushFollow(FOLLOW_attribute_in_attributes456);
                        	    attribute();

                        	    state._fsp = state._fsp - 1;


                        	    }
                        	    break;

                        	default :
                        	    break loop19;
                            }
                        } while (true);

                        matchStream(input,26,FOLLOW_26_in_attributes460); 

                        }
                        break;
                    case 3 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:58:7: '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']'
                        {
                        matchStream(input,27,FOLLOW_27_in_attributes468); 
                        pushFollow(FOLLOW_attribute_in_attributes470);
                        attribute();

                        state._fsp = state._fsp - 1;

                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:58:21: ( ( ',' | ';' | '.' ) attribute )*
                        loop20:
                        do {
                            var alt20:int=2;
                            var LA20_0:int = input.LA(1);

                            if ( (LA20_0==19||(LA20_0>=23 && LA20_0<=24)) ) {
                                alt20=1;
                            }


                            switch (alt20) {
                        	case 1 :
                        	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:58:23: ( ',' | ';' | '.' ) attribute
                        	    {
                        	    if ( input.LA(1)==19||(input.LA(1)>=23 && input.LA(1)<=24) ) {
                        	        input.consume();
                        	        this.state.errorRecovery=false;
                        	    }
                        	    else {
                        	        throw new MismatchedSetException(null,input);
                        	    }

                        	    pushFollow(FOLLOW_attribute_in_attributes482);
                        	    attribute();

                        	    state._fsp = state._fsp - 1;


                        	    }
                        	    break;

                        	default :
                        	    break loop20;
                            }
                        } while (true);

                        matchStream(input,28,FOLLOW_28_in_attributes486); 

                        }
                        break;

                }
            }
            catch (re:RecognitionException) {
                reportError(re);
                recoverStream(input,re);
            }
            finally {
            }
            return ;
        }
        // $ANTLR end attributes


           // Delegated rules



        private const DFA8_eot:Array =
            DFA.unpackEncodedString("\xab\u80ff\xff");
        private const DFA8_eof:Array =
            DFA.unpackEncodedString("\x01\u80ff\xff\x01\x03\x04\u80ff\xff"+
            "\x02\x03\x03\u80ff\xff\x02\x03\x02\u80ff\xff\x02\x03\x01\u80ff\xff"+
            "\x04\x03\x06\u80ff\xff\x05\x03\x0a\u80ff\xff\x01\x03\x09\u80ff\xff"+
            "\x01\x03\x08\u80ff\xff\x0a\x03\x14\u80ff\xff\x05\x03\x22\u80ff\xff"+
            "\x04\x03\x12\u80ff\xff\x02\x03\x10\u80ff\xff");
        private const DFA8_min:Array =
            DFA.unpackEncodedString("\x01\x06\x01\x07\x02\u80ff\xff\x02\x09"+
            "\x02\x07\x01\x09\x04\x07\x03\x09\x01\x13\x01\x07\x01\x09\x02"+
            "\x08\x01\x13\x02\x07\x01\x09\x02\x07\x01\x09\x02\x07\x01\x08"+
            "\x02\x07\x08\x09\x01\x13\x01\x07\x01\x13\x01\x09\x02\x08\x01"+
            "\x13\x03\x09\x01\x13\x01\x07\x01\x13\x01\x09\x02\x08\x01\x13"+
            "\x05\x09\x01\x13\x01\x09\x02\x08\x05\x13\x02\x07\x01\x08\x02"+
            "\x07\x05\x09\x02\x07\x01\x08\x02\x07\x05\x09\x02\x13\x02\x07"+
            "\x01\x08\x09\x09\x01\x13\x01\x09\x02\x08\x05\x13\x05\x09\x01"+
            "\x13\x01\x09\x02\x08\x05\x13\x02\x09\x06\x13\x02\x07\x01\x08"+
            "\x04\x09\x02\x13\x02\x07\x01\x08\x04\x09\x02\x13\x02\x09\x04"+
            "\x13\x02\x09\x08\x13", true);
        private const DFA8_max:Array =
            DFA.unpackEncodedString("\x01\x15\x01\x1b\x02\u80ff\xff\x02\x09"+
            "\x02\x18\x03\x0e\x02\x1b\x02\x09\x02\x18\x01\x0e\x04\x18\x02"+
            "\x1a\x01\x0e\x02\x1c\x01\x0e\x05\x18\x01\x0e\x06\x09\x02\x1a"+
            "\x01\x0e\x01\x17\x04\x1a\x02\x09\x02\x1c\x01\x0e\x01\x17\x04"+
            "\x1c\x04\x09\x0a\x18\x05\x1a\x01\x0e\x04\x09\x05\x1c\x01\x0e"+
            "\x04\x09\x05\x18\x08\x09\x0a\x1a\x04\x09\x0a\x1c\x02\x09\x04"+
            "\x18\x05\x1a\x04\x09\x05\x1c\x04\x09\x02\x18\x02\x09\x04\x1a"+
            "\x02\x09\x04\x1c\x02\x1a\x02\x1c", true);
        private const DFA8_accept:Array =
            DFA.unpackEncodedString("\x02\u80ff\xff\x01\x02\x01\x01\xa7\u80ff\xff");
        private const DFA8_special:Array =
            DFA.unpackEncodedString("\xab\u80ff\xff");
        private const DFA8_transition:Array = [
                DFA.unpackEncodedString("\x01\x03\x02\u80ff\xff\x01\x01\x01"+
                "\u80ff\xff\x04\x03\x06\u80ff\xff\x01\x02"),
                DFA.unpackEncodedString("\x01\x08\x01\x04\x01\x06\x01\x05"+
                "\x04\x07\x04\u80ff\xff\x02\x03\x01\x02\x02\x03\x01\u80ff\xff"+
                "\x01\x09\x01\u80ff\xff\x01\x0a"),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString("\x01\x0b"),
                DFA.unpackEncodedString("\x01\x0c"),
                DFA.unpackEncodedString("\x01\x0f\x01\x0d\x01\u80ff\xff"+
                "\x01\x0e\x04\x10\x04\u80ff\xff\x02\x03\x01\x02\x02\x03\x01"+
                "\x11"),
                DFA.unpackEncodedString("\x01\x12\x01\u80ff\xff\x01\x13"+
                "\x09\u80ff\xff\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x14\x01\u80ff\xff\x04\x15"),
                DFA.unpackEncodedString("\x01\x18\x01\u80ff\xff\x01\x16"+
                "\x01\u80ff\xff\x04\x17"),
                DFA.unpackEncodedString("\x01\x1b\x01\u80ff\xff\x01\x19"+
                "\x01\u80ff\xff\x04\x1a"),
                DFA.unpackEncodedString("\x01\x08\x01\u80ff\xff\x01\x06"+
                "\x01\u80ff\xff\x04\x07\x04\u80ff\xff\x02\x03\x01\x02\x02"+
                "\x03\x01\u80ff\xff\x01\x09\x01\u80ff\xff\x01\x0a"),
                DFA.unpackEncodedString("\x01\x08\x01\u80ff\xff\x01\x06"+
                "\x01\u80ff\xff\x04\x07\x04\u80ff\xff\x02\x03\x01\x02\x02"+
                "\x03\x01\u80ff\xff\x01\x09\x01\u80ff\xff\x01\x0a"),
                DFA.unpackEncodedString("\x01\x1c"),
                DFA.unpackEncodedString("\x01\x1d"),
                DFA.unpackEncodedString("\x01\x1e\x01\u80ff\xff\x04\x10"+
                "\x04\u80ff\xff\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x21\x01\u80ff\xff\x01\x1f"+
                "\x01\u80ff\xff\x04\x20"),
                DFA.unpackEncodedString("\x01\x13\x09\u80ff\xff\x02\x03"+
                "\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x22\x01\u80ff\xff\x01\x23"+
                "\x08\u80ff\xff\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x24\x01\u80ff\xff\x01\x25"+
                "\x08\u80ff\xff\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x28\x01\x26\x01\u80ff\xff"+
                "\x01\x27\x04\x29\x04\u80ff\xff\x01\x2a\x03\u80ff\xff\x02"+
                "\x2a\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x2c\x01\u80ff\xff\x01\x2d"+
                "\x09\u80ff\xff\x01\x2a\x03\u80ff\xff\x02\x2a\x01\u80ff\xff"+
                "\x01\x2b"),
                DFA.unpackEncodedString("\x01\x2e\x01\u80ff\xff\x04\x2f"),
                DFA.unpackEncodedString("\x01\x32\x01\x30\x01\u80ff\xff"+
                "\x01\x31\x04\x33\x04\u80ff\xff\x01\x34\x03\u80ff\xff\x02"+
                "\x34\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x36\x01\u80ff\xff\x01\x37"+
                "\x09\u80ff\xff\x01\x34\x03\u80ff\xff\x02\x34\x03\u80ff\xff"+
                "\x01\x35"),
                DFA.unpackEncodedString("\x01\x38\x01\u80ff\xff\x04\x39"),
                DFA.unpackEncodedString("\x01\x0f\x03\u80ff\xff\x04\x10"+
                "\x04\u80ff\xff\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x0f\x03\u80ff\xff\x04\x10"+
                "\x04\u80ff\xff\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x3a\x01\u80ff\xff\x01\x3b"+
                "\x08\u80ff\xff\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x3e\x01\x3c\x01\u80ff\xff"+
                "\x01\x3d\x04\x3f\x04\u80ff\xff\x02\x03\x01\x02\x02\x03\x01"+
                "\x11"),
                DFA.unpackEncodedString("\x01\x40\x01\u80ff\xff\x01\x41"+
                "\x09\u80ff\xff\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x42\x01\u80ff\xff\x04\x43"),
                DFA.unpackEncodedString("\x01\x44"),
                DFA.unpackEncodedString("\x01\x45"),
                DFA.unpackEncodedString("\x01\x46"),
                DFA.unpackEncodedString("\x01\x47"),
                DFA.unpackEncodedString("\x01\x48"),
                DFA.unpackEncodedString("\x01\x49"),
                DFA.unpackEncodedString("\x01\x4a\x01\u80ff\xff\x04\x29"+
                "\x04\u80ff\xff\x01\x2a\x03\u80ff\xff\x02\x2a\x01\u80ff\xff"+
                "\x01\x2b"),
                DFA.unpackEncodedString("\x01\x2a\x03\u80ff\xff\x02\x2a"+
                "\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x4d\x01\u80ff\xff\x01\x4b"+
                "\x01\u80ff\xff\x04\x4c"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03"),
                DFA.unpackEncodedString("\x01\x2d\x09\u80ff\xff\x01\x2a"+
                "\x03\u80ff\xff\x02\x2a\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x4e\x01\u80ff\xff\x01\x4f"+
                "\x08\u80ff\xff\x01\x2a\x03\u80ff\xff\x02\x2a\x01\u80ff\xff"+
                "\x01\x2b"),
                DFA.unpackEncodedString("\x01\x50\x01\u80ff\xff\x01\x51"+
                "\x08\u80ff\xff\x01\x2a\x03\u80ff\xff\x02\x2a\x01\u80ff\xff"+
                "\x01\x2b"),
                DFA.unpackEncodedString("\x01\x2a\x03\u80ff\xff\x02\x2a"+
                "\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x52"),
                DFA.unpackEncodedString("\x01\x53"),
                DFA.unpackEncodedString("\x01\x54\x01\u80ff\xff\x04\x33"+
                "\x04\u80ff\xff\x01\x34\x03\u80ff\xff\x02\x34\x03\u80ff\xff"+
                "\x01\x35"),
                DFA.unpackEncodedString("\x01\x34\x03\u80ff\xff\x02\x34"+
                "\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x57\x01\u80ff\xff\x01\x55"+
                "\x01\u80ff\xff\x04\x56"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03"),
                DFA.unpackEncodedString("\x01\x37\x09\u80ff\xff\x01\x34"+
                "\x03\u80ff\xff\x02\x34\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x58\x01\u80ff\xff\x01\x59"+
                "\x08\u80ff\xff\x01\x34\x03\u80ff\xff\x02\x34\x03\u80ff\xff"+
                "\x01\x35"),
                DFA.unpackEncodedString("\x01\x5a\x01\u80ff\xff\x01\x5b"+
                "\x08\u80ff\xff\x01\x34\x03\u80ff\xff\x02\x34\x03\u80ff\xff"+
                "\x01\x35"),
                DFA.unpackEncodedString("\x01\x34\x03\u80ff\xff\x02\x34"+
                "\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x5c"),
                DFA.unpackEncodedString("\x01\x5d"),
                DFA.unpackEncodedString("\x01\x5e"),
                DFA.unpackEncodedString("\x01\x5f"),
                DFA.unpackEncodedString("\x01\x60\x01\u80ff\xff\x04\x3f"+
                "\x04\u80ff\xff\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x41\x09\u80ff\xff\x02\x03"+
                "\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x61\x01\u80ff\xff\x01\x62"+
                "\x08\u80ff\xff\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x63\x01\u80ff\xff\x01\x64"+
                "\x08\u80ff\xff\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x28\x03\u80ff\xff\x04\x29"+
                "\x04\u80ff\xff\x01\x2a\x03\u80ff\xff\x02\x2a\x01\u80ff\xff"+
                "\x01\x2b"),
                DFA.unpackEncodedString("\x01\x28\x03\u80ff\xff\x04\x29"+
                "\x04\u80ff\xff\x01\x2a\x03\u80ff\xff\x02\x2a\x01\u80ff\xff"+
                "\x01\x2b"),
                DFA.unpackEncodedString("\x01\x65\x01\u80ff\xff\x01\x66"+
                "\x08\u80ff\xff\x01\x2a\x03\u80ff\xff\x02\x2a\x01\u80ff\xff"+
                "\x01\x2b"),
                DFA.unpackEncodedString("\x01\x69\x01\x67\x01\u80ff\xff"+
                "\x01\x68\x04\x6a\x04\u80ff\xff\x01\x2a\x03\u80ff\xff\x02"+
                "\x2a\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x6b\x01\u80ff\xff\x01\x6c"+
                "\x09\u80ff\xff\x01\x2a\x03\u80ff\xff\x02\x2a\x01\u80ff\xff"+
                "\x01\x2b"),
                DFA.unpackEncodedString("\x01\x6d\x01\u80ff\xff\x04\x6e"),
                DFA.unpackEncodedString("\x01\x6f"),
                DFA.unpackEncodedString("\x01\x70"),
                DFA.unpackEncodedString("\x01\x71"),
                DFA.unpackEncodedString("\x01\x72"),
                DFA.unpackEncodedString("\x01\x32\x03\u80ff\xff\x04\x33"+
                "\x04\u80ff\xff\x01\x34\x03\u80ff\xff\x02\x34\x03\u80ff\xff"+
                "\x01\x35"),
                DFA.unpackEncodedString("\x01\x32\x03\u80ff\xff\x04\x33"+
                "\x04\u80ff\xff\x01\x34\x03\u80ff\xff\x02\x34\x03\u80ff\xff"+
                "\x01\x35"),
                DFA.unpackEncodedString("\x01\x73\x01\u80ff\xff\x01\x74"+
                "\x08\u80ff\xff\x01\x34\x03\u80ff\xff\x02\x34\x03\u80ff\xff"+
                "\x01\x35"),
                DFA.unpackEncodedString("\x01\x77\x01\x75\x01\u80ff\xff"+
                "\x01\x76\x04\x78\x04\u80ff\xff\x01\x34\x03\u80ff\xff\x02"+
                "\x34\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x79\x01\u80ff\xff\x01\x7a"+
                "\x09\u80ff\xff\x01\x34\x03\u80ff\xff\x02\x34\x03\u80ff\xff"+
                "\x01\x35"),
                DFA.unpackEncodedString("\x01\x7b\x01\u80ff\xff\x04\x7c"),
                DFA.unpackEncodedString("\x01\x7d"),
                DFA.unpackEncodedString("\x01\x7e"),
                DFA.unpackEncodedString("\x01\x7f"),
                DFA.unpackEncodedString("\x01\x80"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x3e\x03\u80ff\xff\x04\x3f"+
                "\x04\u80ff\xff\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x3e\x03\u80ff\xff\x04\x3f"+
                "\x04\u80ff\xff\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x81\x01\u80ff\xff\x01\x82"+
                "\x08\u80ff\xff\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x83"),
                DFA.unpackEncodedString("\x01\x84"),
                DFA.unpackEncodedString("\x01\x85"),
                DFA.unpackEncodedString("\x01\x86"),
                DFA.unpackEncodedString("\x01\x87"),
                DFA.unpackEncodedString("\x01\x88"),
                DFA.unpackEncodedString("\x01\x89"),
                DFA.unpackEncodedString("\x01\x8a"),
                DFA.unpackEncodedString("\x01\x8b\x01\u80ff\xff\x04\x6a"+
                "\x04\u80ff\xff\x01\x2a\x03\u80ff\xff\x02\x2a\x01\u80ff\xff"+
                "\x01\x2b"),
                DFA.unpackEncodedString("\x01\x2a\x03\u80ff\xff\x02\x2a"+
                "\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x6c\x09\u80ff\xff\x01\x2a"+
                "\x03\u80ff\xff\x02\x2a\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x8c\x01\u80ff\xff\x01\x8d"+
                "\x08\u80ff\xff\x01\x2a\x03\u80ff\xff\x02\x2a\x01\u80ff\xff"+
                "\x01\x2b"),
                DFA.unpackEncodedString("\x01\x8e\x01\u80ff\xff\x01\x8f"+
                "\x08\u80ff\xff\x01\x2a\x03\u80ff\xff\x02\x2a\x01\u80ff\xff"+
                "\x01\x2b"),
                DFA.unpackEncodedString("\x01\x2a\x03\u80ff\xff\x02\x2a"+
                "\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x2a\x03\u80ff\xff\x02\x2a"+
                "\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x2a\x03\u80ff\xff\x02\x2a"+
                "\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x2a\x03\u80ff\xff\x02\x2a"+
                "\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x2a\x03\u80ff\xff\x02\x2a"+
                "\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x90"),
                DFA.unpackEncodedString("\x01\x91"),
                DFA.unpackEncodedString("\x01\x92"),
                DFA.unpackEncodedString("\x01\x93"),
                DFA.unpackEncodedString("\x01\x94\x01\u80ff\xff\x04\x78"+
                "\x04\u80ff\xff\x01\x34\x03\u80ff\xff\x02\x34\x03\u80ff\xff"+
                "\x01\x35"),
                DFA.unpackEncodedString("\x01\x34\x03\u80ff\xff\x02\x34"+
                "\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x7a\x09\u80ff\xff\x01\x34"+
                "\x03\u80ff\xff\x02\x34\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x95\x01\u80ff\xff\x01\x96"+
                "\x08\u80ff\xff\x01\x34\x03\u80ff\xff\x02\x34\x03\u80ff\xff"+
                "\x01\x35"),
                DFA.unpackEncodedString("\x01\x97\x01\u80ff\xff\x01\x98"+
                "\x08\u80ff\xff\x01\x34\x03\u80ff\xff\x02\x34\x03\u80ff\xff"+
                "\x01\x35"),
                DFA.unpackEncodedString("\x01\x34\x03\u80ff\xff\x02\x34"+
                "\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x34\x03\u80ff\xff\x02\x34"+
                "\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x34\x03\u80ff\xff\x02\x34"+
                "\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x34\x03\u80ff\xff\x02\x34"+
                "\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x34\x03\u80ff\xff\x02\x34"+
                "\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x99"),
                DFA.unpackEncodedString("\x01\x9a"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\x2a\x03\u80ff\xff\x02\x2a"+
                "\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x2a\x03\u80ff\xff\x02\x2a"+
                "\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x69\x03\u80ff\xff\x04\x6a"+
                "\x04\u80ff\xff\x01\x2a\x03\u80ff\xff\x02\x2a\x01\u80ff\xff"+
                "\x01\x2b"),
                DFA.unpackEncodedString("\x01\x69\x03\u80ff\xff\x04\x6a"+
                "\x04\u80ff\xff\x01\x2a\x03\u80ff\xff\x02\x2a\x01\u80ff\xff"+
                "\x01\x2b"),
                DFA.unpackEncodedString("\x01\x9b\x01\u80ff\xff\x01\x9c"+
                "\x08\u80ff\xff\x01\x2a\x03\u80ff\xff\x02\x2a\x01\u80ff\xff"+
                "\x01\x2b"),
                DFA.unpackEncodedString("\x01\x9d"),
                DFA.unpackEncodedString("\x01\x9e"),
                DFA.unpackEncodedString("\x01\x9f"),
                DFA.unpackEncodedString("\x01\xa0"),
                DFA.unpackEncodedString("\x01\x34\x03\u80ff\xff\x02\x34"+
                "\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x34\x03\u80ff\xff\x02\x34"+
                "\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x77\x03\u80ff\xff\x04\x78"+
                "\x04\u80ff\xff\x01\x34\x03\u80ff\xff\x02\x34\x03\u80ff\xff"+
                "\x01\x35"),
                DFA.unpackEncodedString("\x01\x77\x03\u80ff\xff\x04\x78"+
                "\x04\u80ff\xff\x01\x34\x03\u80ff\xff\x02\x34\x03\u80ff\xff"+
                "\x01\x35"),
                DFA.unpackEncodedString("\x01\xa1\x01\u80ff\xff\x01\xa2"+
                "\x08\u80ff\xff\x01\x34\x03\u80ff\xff\x02\x34\x03\u80ff\xff"+
                "\x01\x35"),
                DFA.unpackEncodedString("\x01\xa3"),
                DFA.unpackEncodedString("\x01\xa4"),
                DFA.unpackEncodedString("\x01\xa5"),
                DFA.unpackEncodedString("\x01\xa6"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x02\x03\x01\x02\x02\x03\x01\x11"),
                DFA.unpackEncodedString("\x01\xa7"),
                DFA.unpackEncodedString("\x01\xa8"),
                DFA.unpackEncodedString("\x01\x2a\x03\u80ff\xff\x02\x2a"+
                "\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x2a\x03\u80ff\xff\x02\x2a"+
                "\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x2a\x03\u80ff\xff\x02\x2a"+
                "\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x2a\x03\u80ff\xff\x02\x2a"+
                "\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\xa9"),
                DFA.unpackEncodedString("\x01\xaa"),
                DFA.unpackEncodedString("\x01\x34\x03\u80ff\xff\x02\x34"+
                "\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x34\x03\u80ff\xff\x02\x34"+
                "\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x34\x03\u80ff\xff\x02\x34"+
                "\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x34\x03\u80ff\xff\x02\x34"+
                "\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x2a\x03\u80ff\xff\x02\x2a"+
                "\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x2a\x03\u80ff\xff\x02\x2a"+
                "\x01\u80ff\xff\x01\x2b"),
                DFA.unpackEncodedString("\x01\x34\x03\u80ff\xff\x02\x34"+
                "\x03\u80ff\xff\x01\x35"),
                DFA.unpackEncodedString("\x01\x34\x03\u80ff\xff\x02\x34"+
                "\x03\u80ff\xff\x01\x35")
        ];
        protected var dfa8:DFA;  // initialized in constructor

        private const DFA15_eot:Array =
            DFA.unpackEncodedString("\x0b\u80ff\xff");
        private const DFA15_eof:Array =
            DFA.unpackEncodedString("\x0b\u80ff\xff");
        private const DFA15_min:Array =
            DFA.unpackEncodedString("\x02\x07\x02\u80ff\xff\x03\x09\x01\u80ff\xff"+
            "\x02\x07\x01\u80ff\xff", true);
        private const DFA15_max:Array =
            DFA.unpackEncodedString("\x01\x0e\x01\x1c\x02\u80ff\xff\x02\x09"+
            "\x01\x1c\x01\u80ff\xff\x02\x1c\x01\u80ff\xff", true);
        private const DFA15_accept:Array =
            DFA.unpackEncodedString("\x02\u80ff\xff\x01\x02\x01\x04\x03\u80ff\xff"+
            "\x01\x01\x02\u80ff\xff\x01\x03");
        private const DFA15_special:Array =
            DFA.unpackEncodedString("\x0b\u80ff\xff");
        private const DFA15_transition:Array = [
                DFA.unpackEncodedString("\x01\x03\x01\u80ff\xff\x01\x01\x01"+
                "\u80ff\xff\x04\x02"),
                DFA.unpackEncodedString("\x01\x06\x01\x04\x01\u80ff\xff"+
                "\x01\x05\x04\x07\x04\u80ff\xff\x06\x07\x01\u80ff\xff\x01"+
                "\x07\x01\u80ff\xff\x01\x07"),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString("\x01\x08"),
                DFA.unpackEncodedString("\x01\x09"),
                DFA.unpackEncodedString("\x01\x0a\x01\u80ff\xff\x04\x07"+
                "\x04\u80ff\xff\x06\x07\x01\u80ff\xff\x01\x07\x01\u80ff\xff"+
                "\x01\x07"),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString("\x01\x06\x03\u80ff\xff\x04\x07"+
                "\x04\u80ff\xff\x06\x07\x01\u80ff\xff\x01\x07\x01\u80ff\xff"+
                "\x01\x07"),
                DFA.unpackEncodedString("\x01\x06\x03\u80ff\xff\x04\x07"+
                "\x04\u80ff\xff\x06\x07\x01\u80ff\xff\x01\x07\x01\u80ff\xff"+
                "\x01\x07"),
                DFA.unpackEncodedString("")
        ];
        protected var dfa15:DFA;  // initialized in constructor
     

        public static const FOLLOW_xmldecl_in_struxt32:BitSet = new BitSet([0x00007A50, 0x00000000]);
        public static const FOLLOW_DOC_in_struxt43:BitSet = new BitSet([0x00007A50, 0x00000000]);
        public static const FOLLOW_node_in_struxt52:BitSet = new BitSet([0x00000000, 0x00000000]);
        public static const FOLLOW_EOF_in_struxt54:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_XML_in_xmldecl71:BitSet = new BitSet([0x0A007A80, 0x00000000]);
        public static const FOLLOW_attributes_in_xmldecl73:BitSet = new BitSet([0x00080000, 0x00000000]);
        public static const FOLLOW_19_in_xmldecl75:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_tag_in_node92:BitSet = new BitSet([0x00D80000, 0x00000000]);
        public static const FOLLOW_children_in_node94:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_value_in_node104:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_CDATA_in_node114:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_name_in_tag133:BitSet = new BitSet([0x0A007A82, 0x00000000]);
        public static const FOLLOW_attributes_in_tag135:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_20_in_children154:BitSet = new BitSet([0x00207A50, 0x00000000]);
        public static const FOLLOW_childs_in_children156:BitSet = new BitSet([0x00200000, 0x00000000]);
        public static const FOLLOW_21_in_children158:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_22_in_children167:BitSet = new BitSet([0x00887A50, 0x00000000]);
        public static const FOLLOW_node_in_children169:BitSet = new BitSet([0x00887A50, 0x00000000]);
        public static const FOLLOW_set_in_children174:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_node_in_childs199:BitSet = new BitSet([0x00007A52, 0x00000000]);
        public static const FOLLOW_tag_in_childs204:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_name_in_attribute226:BitSet = new BitSet([0x00007882, 0x00000000]);
        public static const FOLLOW_OP_in_attribute230:BitSet = new BitSet([0x00007802, 0x00000000]);
        public static const FOLLOW_value_in_attribute235:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_value_in_attribute246:BitSet = new BitSet([0x00000282, 0x00000000]);
        public static const FOLLOW_OP_in_attribute250:BitSet = new BitSet([0x00000202, 0x00000000]);
        public static const FOLLOW_name_in_attribute255:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_name_in_attribute266:BitSet = new BitSet([0x00000080, 0x00000000]);
        public static const FOLLOW_OP_in_attribute270:BitSet = new BitSet([0x00000200, 0x00000000]);
        public static const FOLLOW_name_in_attribute274:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_OP_in_attribute284:BitSet = new BitSet([0x00007A00, 0x00000000]);
        public static const FOLLOW_name_in_attribute289:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_value_in_attribute293:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_ns_in_name320:BitSet = new BitSet([0x00000100, 0x00000000]);
        public static const FOLLOW_PRENS_in_name322:BitSet = new BitSet([0x00000200, 0x00000000]);
        public static const FOLLOW_ID_in_name326:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_ID_in_name332:BitSet = new BitSet([0x00000402, 0x00000000]);
        public static const FOLLOW_POSTNS_in_name336:BitSet = new BitSet([0x00000200, 0x00000000]);
        public static const FOLLOW_ns_in_name340:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_ID_in_ns368:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_set_in_value393:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_attribute_in_attributes426:BitSet = new BitSet([0x01000002, 0x00000000]);
        public static const FOLLOW_24_in_attributes430:BitSet = new BitSet([0x00007A80, 0x00000000]);
        public static const FOLLOW_attribute_in_attributes432:BitSet = new BitSet([0x01000002, 0x00000000]);
        public static const FOLLOW_25_in_attributes442:BitSet = new BitSet([0x00007A80, 0x00000000]);
        public static const FOLLOW_attribute_in_attributes444:BitSet = new BitSet([0x05880000, 0x00000000]);
        public static const FOLLOW_set_in_attributes448:BitSet = new BitSet([0x00007A80, 0x00000000]);
        public static const FOLLOW_attribute_in_attributes456:BitSet = new BitSet([0x05880000, 0x00000000]);
        public static const FOLLOW_26_in_attributes460:BitSet = new BitSet([0x00000002, 0x00000000]);
        public static const FOLLOW_27_in_attributes468:BitSet = new BitSet([0x00007A80, 0x00000000]);
        public static const FOLLOW_attribute_in_attributes470:BitSet = new BitSet([0x11880000, 0x00000000]);
        public static const FOLLOW_set_in_attributes474:BitSet = new BitSet([0x00007A80, 0x00000000]);
        public static const FOLLOW_attribute_in_attributes482:BitSet = new BitSet([0x11880000, 0x00000000]);
        public static const FOLLOW_28_in_attributes486:BitSet = new BitSet([0x00000002, 0x00000000]);

    }
}