// $ANTLR 3.3 Nov 30, 2010 12:45:30 /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g 2011-04-19 00:16:36
package {
    import org.antlr.runtime.*;
        

    public class StruxtASLexer extends Lexer {
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

        public function StruxtASLexer(input:CharStream = null, state:RecognizerSharedState = null) {
            super(input, state);

            dfa2 = new DFA(this, 2,
                        "70:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )",
                        DFA2_eot, DFA2_eof, DFA2_min,
                        DFA2_max, DFA2_accept, DFA2_special,
                        DFA2_transition);

            dfa21 = new DFA(this, 21,
                        "112:1: FLOAT : ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT );",
                        DFA21_eot, DFA21_eof, DFA21_min,
                        DFA21_max, DFA21_accept, DFA21_special,
                        DFA21_transition);

            dfa25 = new DFA(this, 25,
                        "1:1: Tokens : ( T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | PRENS | POSTNS | OP | ID | XML | DOC | CDATA | STR | COMMENT | WS | INT | FLOAT | CHAR );",
                        DFA25_eot, DFA25_eof, DFA25_min,
                        DFA25_max, DFA25_accept, DFA25_special,
                        DFA25_transition, DFA25_specialStateTransition);


        }
        public override function get grammarFileName():String { return "/Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g"; }

        // $ANTLR start T__19
        public final function mT__19():void {
            try {
                var _type:int = T__19;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:7:7: ( '.' )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:7:9: '.'
                {
                match(46); 

                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end T__19

        // $ANTLR start T__20
        public final function mT__20():void {
            try {
                var _type:int = T__20;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:8:7: ( '{' )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:8:9: '{'
                {
                match(123); 

                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end T__20

        // $ANTLR start T__21
        public final function mT__21():void {
            try {
                var _type:int = T__21;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:9:7: ( '}' )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:9:9: '}'
                {
                match(125); 

                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end T__21

        // $ANTLR start T__22
        public final function mT__22():void {
            try {
                var _type:int = T__22;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:10:7: ( ':' )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:10:9: ':'
                {
                match(58); 

                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end T__22

        // $ANTLR start T__23
        public final function mT__23():void {
            try {
                var _type:int = T__23;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:11:7: ( ';' )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:11:9: ';'
                {
                match(59); 

                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end T__23

        // $ANTLR start T__24
        public final function mT__24():void {
            try {
                var _type:int = T__24;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:12:7: ( ',' )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:12:9: ','
                {
                match(44); 

                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end T__24

        // $ANTLR start T__25
        public final function mT__25():void {
            try {
                var _type:int = T__25;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:13:7: ( '(' )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:13:9: '('
                {
                match(40); 

                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end T__25

        // $ANTLR start T__26
        public final function mT__26():void {
            try {
                var _type:int = T__26;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:14:7: ( ')' )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:14:9: ')'
                {
                match(41); 

                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end T__26

        // $ANTLR start T__27
        public final function mT__27():void {
            try {
                var _type:int = T__27;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:15:7: ( '[' )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:15:9: '['
                {
                match(91); 

                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end T__27

        // $ANTLR start T__28
        public final function mT__28():void {
            try {
                var _type:int = T__28;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:16:7: ( ']' )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:16:9: ']'
                {
                match(93); 

                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end T__28

        // $ANTLR start PRENS
        public final function mPRENS():void {
            try {
                var _type:int = PRENS;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:62:5: ( ( '!' | '#' | '::' ) )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:62:7: ( '!' | '#' | '::' )
                {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:62:7: ( '!' | '#' | '::' )
                var alt1:int=3;
                switch ( input.LA(1) ) {
                case 33:
                    {
                    alt1=1;
                    }
                    break;
                case 35:
                    {
                    alt1=2;
                    }
                    break;
                case 58:
                    {
                    alt1=3;
                    }
                    break;
                default:
                    throw new NoViableAltException("", 1, 0, input);

                }

                switch (alt1) {
                    case 1 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:62:8: '!'
                        {
                        match(33); 

                        }
                        break;
                    case 2 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:62:12: '#'
                        {
                        match(35); 

                        }
                        break;
                    case 3 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:62:16: '::'
                        {
                        matchString("::"); 


                        }
                        break;

                }


                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end PRENS

        // $ANTLR start POSTNS
        public final function mPOSTNS():void {
            try {
                var _type:int = POSTNS;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:66:5: ( ( '@' | '\\\\' ) )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:66:7: ( '@' | '\\\\' )
                {
                if ( input.LA(1)==64||input.LA(1)==92 ) {
                    input.consume();

                }
                else {
                    throw recover(new MismatchedSetException(null,input));
                }


                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end POSTNS

        // $ANTLR start OP
        public final function mOP():void {
            try {
                var _type:int = OP;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:70:5: ( ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' ) )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:70:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )
                {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:70:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )
                var alt2:int=22;
                alt2 = dfa2.predict(input);
                switch (alt2) {
                    case 1 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:70:8: '<'
                        {
                        match(60); 

                        }
                        break;
                    case 2 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:70:14: '<<'
                        {
                        matchString("<<"); 


                        }
                        break;
                    case 3 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:70:21: '<-'
                        {
                        matchString("<-"); 


                        }
                        break;
                    case 4 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:70:28: '<->'
                        {
                        matchString("<->"); 


                        }
                        break;
                    case 5 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:70:36: '->'
                        {
                        matchString("->"); 


                        }
                        break;
                    case 6 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:70:43: '>>'
                        {
                        matchString(">>"); 


                        }
                        break;
                    case 7 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:70:50: '>'
                        {
                        match(62); 

                        }
                        break;
                    case 8 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:70:56: '~'
                        {
                        match(126); 

                        }
                        break;
                    case 9 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:70:62: '$'
                        {
                        match(36); 

                        }
                        break;
                    case 10 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:70:68: '%'
                        {
                        match(37); 

                        }
                        break;
                    case 11 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:70:74: '^'
                        {
                        match(94); 

                        }
                        break;
                    case 12 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:70:80: '&'
                        {
                        match(38); 

                        }
                        break;
                    case 13 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:70:86: '&&'
                        {
                        matchString("&&"); 


                        }
                        break;
                    case 14 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:71:7: '*'
                        {
                        match(42); 

                        }
                        break;
                    case 15 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:71:13: '**'
                        {
                        matchString("**"); 


                        }
                        break;
                    case 16 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:71:20: '-'
                        {
                        match(45); 

                        }
                        break;
                    case 17 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:71:26: '+'
                        {
                        match(43); 

                        }
                        break;
                    case 18 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:71:32: '='
                        {
                        match(61); 

                        }
                        break;
                    case 19 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:71:38: '|'
                        {
                        match(124); 

                        }
                        break;
                    case 20 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:71:44: '||'
                        {
                        matchString("||"); 


                        }
                        break;
                    case 21 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:71:51: '/'
                        {
                        match(47); 

                        }
                        break;
                    case 22 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:71:57: '?'
                        {
                        match(63); 

                        }
                        break;

                }


                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end OP

        // $ANTLR start ID
        public final function mID():void {
            try {
                var _type:int = ID;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:75:5: ( ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )* )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:75:7: ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )*
                {
                if ( (input.LA(1)>=65 && input.LA(1)<=90)||input.LA(1)==95||(input.LA(1)>=97 && input.LA(1)<=122) ) {
                    input.consume();

                }
                else {
                    throw recover(new MismatchedSetException(null,input));
                }

                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:75:31: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )*
                loop3:
                do {
                    var alt3:int=2;
                    var LA3_0:int = input.LA(1);

                    if ( (LA3_0==45||(LA3_0>=48 && LA3_0<=57)||(LA3_0>=65 && LA3_0<=90)||LA3_0==95||(LA3_0>=97 && LA3_0<=122)) ) {
                        alt3=1;
                    }


                    switch (alt3) {
                	case 1 :
                	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:
                	    {
                	    if ( input.LA(1)==45||(input.LA(1)>=48 && input.LA(1)<=57)||(input.LA(1)>=65 && input.LA(1)<=90)||input.LA(1)==95||(input.LA(1)>=97 && input.LA(1)<=122) ) {
                	        input.consume();

                	    }
                	    else {
                	        throw recover(new MismatchedSetException(null,input));
                	    }


                	    }
                	    break;

                	default :
                	    break loop3;
                    }
                } while (true);


                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end ID

        // $ANTLR start XML
        public final function mXML():void {
            try {
                var _type:int = XML;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:79:5: ( '?xml' )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:79:7: '?xml'
                {
                matchString("?xml"); 


                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end XML

        // $ANTLR start DOC
        public final function mDOC():void {
            try {
                var _type:int = DOC;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:83:5: ( '!!!' ( options {greedy=false; } : . )+ '!!!' )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:83:7: '!!!' ( options {greedy=false; } : . )+ '!!!'
                {
                matchString("!!!"); 

                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:83:13: ( options {greedy=false; } : . )+
                var cnt4:int=0;
                loop4:
                do {
                    var alt4:int=2;
                    var LA4_0:int = input.LA(1);

                    if ( (LA4_0==33) ) {
                        var LA4_1:int = input.LA(2);

                        if ( (LA4_1==33) ) {
                            var LA4_3:int = input.LA(3);

                            if ( (LA4_3==33) ) {
                                alt4=2;
                            }
                            else if ( ((LA4_3>=0 && LA4_3<=32)||(LA4_3>=34 && LA4_3<=65535)) ) {
                                alt4=1;
                            }


                        }
                        else if ( ((LA4_1>=0 && LA4_1<=32)||(LA4_1>=34 && LA4_1<=65535)) ) {
                            alt4=1;
                        }


                    }
                    else if ( ((LA4_0>=0 && LA4_0<=32)||(LA4_0>=34 && LA4_0<=65535)) ) {
                        alt4=1;
                    }


                    switch (alt4) {
                	case 1 :
                	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:83:38: .
                	    {
                	    matchAny(); 

                	    }
                	    break;

                	default :
                	    if ( cnt4 >= 1 ) break loop4;
                            throw new EarlyExitException(4, input);

                    }
                    cnt4++;
                } while (true);

                matchString("!!!"); 


                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end DOC

        // $ANTLR start CDATA
        public final function mCDATA():void {
            try {
                var _type:int = CDATA;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:87:5: ( '[[\"' ( options {greedy=false; } : . )+ '\"]]' )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:87:7: '[[\"' ( options {greedy=false; } : . )+ '\"]]'
                {
                matchString("[[\""); 

                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:87:13: ( options {greedy=false; } : . )+
                var cnt5:int=0;
                loop5:
                do {
                    var alt5:int=2;
                    var LA5_0:int = input.LA(1);

                    if ( (LA5_0==34) ) {
                        var LA5_1:int = input.LA(2);

                        if ( (LA5_1==93) ) {
                            var LA5_3:int = input.LA(3);

                            if ( (LA5_3==93) ) {
                                alt5=2;
                            }
                            else if ( ((LA5_3>=0 && LA5_3<=92)||(LA5_3>=94 && LA5_3<=65535)) ) {
                                alt5=1;
                            }


                        }
                        else if ( ((LA5_1>=0 && LA5_1<=92)||(LA5_1>=94 && LA5_1<=65535)) ) {
                            alt5=1;
                        }


                    }
                    else if ( ((LA5_0>=0 && LA5_0<=33)||(LA5_0>=35 && LA5_0<=65535)) ) {
                        alt5=1;
                    }


                    switch (alt5) {
                	case 1 :
                	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:87:38: .
                	    {
                	    matchAny(); 

                	    }
                	    break;

                	default :
                	    if ( cnt5 >= 1 ) break loop5;
                            throw new EarlyExitException(5, input);

                    }
                    cnt5++;
                } while (true);

                matchString("\"]]"); 


                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end CDATA

        // $ANTLR start STR
        public final function mSTR():void {
            try {
                var _type:int = STR;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:91:5: ( '\"\"\"' ( options {greedy=false; } : . )* '\"\"\"' | '\\'\\'\\'' ( options {greedy=false; } : . )* '\\'\\'\\'' | '\"' (~ ( '\"' ) )* '\"' )
                var alt9:int=3;
                var LA9_0:int = input.LA(1);

                if ( (LA9_0==34) ) {
                    var LA9_1:int = input.LA(2);

                    if ( (LA9_1==34) ) {
                        var LA9_3:int = input.LA(3);

                        if ( (LA9_3==34) ) {
                            alt9=1;
                        }
                        else {
                            alt9=3;}
                    }
                    else if ( ((LA9_1>=0 && LA9_1<=33)||(LA9_1>=35 && LA9_1<=65535)) ) {
                        alt9=3;
                    }
                    else {
                        throw new NoViableAltException("", 9, 1, input);

                    }
                }
                else if ( (LA9_0==39) ) {
                    alt9=2;
                }
                else {
                    throw new NoViableAltException("", 9, 0, input);

                }
                switch (alt9) {
                    case 1 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:91:7: '\"\"\"' ( options {greedy=false; } : . )* '\"\"\"'
                        {
                        matchString("\"\"\""); 

                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:91:13: ( options {greedy=false; } : . )*
                        loop6:
                        do {
                            var alt6:int=2;
                            var LA6_0:int = input.LA(1);

                            if ( (LA6_0==34) ) {
                                var LA6_1:int = input.LA(2);

                                if ( (LA6_1==34) ) {
                                    var LA6_3:int = input.LA(3);

                                    if ( (LA6_3==34) ) {
                                        alt6=2;
                                    }
                                    else if ( ((LA6_3>=0 && LA6_3<=33)||(LA6_3>=35 && LA6_3<=65535)) ) {
                                        alt6=1;
                                    }


                                }
                                else if ( ((LA6_1>=0 && LA6_1<=33)||(LA6_1>=35 && LA6_1<=65535)) ) {
                                    alt6=1;
                                }


                            }
                            else if ( ((LA6_0>=0 && LA6_0<=33)||(LA6_0>=35 && LA6_0<=65535)) ) {
                                alt6=1;
                            }


                            switch (alt6) {
                        	case 1 :
                        	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:91:38: .
                        	    {
                        	    matchAny(); 

                        	    }
                        	    break;

                        	default :
                        	    break loop6;
                            }
                        } while (true);

                        matchString("\"\"\""); 


                        }
                        break;
                    case 2 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:92:7: '\\'\\'\\'' ( options {greedy=false; } : . )* '\\'\\'\\''
                        {
                        matchString("'''"); 

                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:92:16: ( options {greedy=false; } : . )*
                        loop7:
                        do {
                            var alt7:int=2;
                            var LA7_0:int = input.LA(1);

                            if ( (LA7_0==39) ) {
                                var LA7_1:int = input.LA(2);

                                if ( (LA7_1==39) ) {
                                    var LA7_3:int = input.LA(3);

                                    if ( (LA7_3==39) ) {
                                        alt7=2;
                                    }
                                    else if ( ((LA7_3>=0 && LA7_3<=38)||(LA7_3>=40 && LA7_3<=65535)) ) {
                                        alt7=1;
                                    }


                                }
                                else if ( ((LA7_1>=0 && LA7_1<=38)||(LA7_1>=40 && LA7_1<=65535)) ) {
                                    alt7=1;
                                }


                            }
                            else if ( ((LA7_0>=0 && LA7_0<=38)||(LA7_0>=40 && LA7_0<=65535)) ) {
                                alt7=1;
                            }


                            switch (alt7) {
                        	case 1 :
                        	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:92:41: .
                        	    {
                        	    matchAny(); 

                        	    }
                        	    break;

                        	default :
                        	    break loop7;
                            }
                        } while (true);

                        matchString("'''"); 


                        }
                        break;
                    case 3 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:93:6: '\"' (~ ( '\"' ) )* '\"'
                        {
                        match(34); 
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:93:10: (~ ( '\"' ) )*
                        loop8:
                        do {
                            var alt8:int=2;
                            var LA8_0:int = input.LA(1);

                            if ( ((LA8_0>=0 && LA8_0<=33)||(LA8_0>=35 && LA8_0<=65535)) ) {
                                alt8=1;
                            }


                            switch (alt8) {
                        	case 1 :
                        	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:93:10: ~ ( '\"' )
                        	    {
                        	    if ( (input.LA(1)>=0 && input.LA(1)<=33)||(input.LA(1)>=35 && input.LA(1)<=65535) ) {
                        	        input.consume();

                        	    }
                        	    else {
                        	        throw recover(new MismatchedSetException(null,input));
                        	    }


                        	    }
                        	    break;

                        	default :
                        	    break loop8;
                            }
                        } while (true);

                        match(34); 

                        }
                        break;

                }
                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end STR

        // $ANTLR start COMMENT
        public final function mCOMMENT():void {
            try {
                var _type:int = COMMENT;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:97:5: ( '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n' | '/*' ( options {greedy=false; } : . )* '*/' )
                var alt13:int=2;
                var LA13_0:int = input.LA(1);

                if ( (LA13_0==47) ) {
                    var LA13_1:int = input.LA(2);

                    if ( (LA13_1==47) ) {
                        alt13=1;
                    }
                    else if ( (LA13_1==42) ) {
                        alt13=2;
                    }
                    else {
                        throw new NoViableAltException("", 13, 1, input);

                    }
                }
                else {
                    throw new NoViableAltException("", 13, 0, input);

                }
                switch (alt13) {
                    case 1 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:97:9: '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n'
                        {
                        matchString("//"); 

                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:97:14: (~ ( '\\n' | '\\r' ) )*
                        loop10:
                        do {
                            var alt10:int=2;
                            var LA10_0:int = input.LA(1);

                            if ( ((LA10_0>=0 && LA10_0<=9)||(LA10_0>=11 && LA10_0<=12)||(LA10_0>=14 && LA10_0<=65535)) ) {
                                alt10=1;
                            }


                            switch (alt10) {
                        	case 1 :
                        	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:97:14: ~ ( '\\n' | '\\r' )
                        	    {
                        	    if ( (input.LA(1)>=0 && input.LA(1)<=9)||(input.LA(1)>=11 && input.LA(1)<=12)||(input.LA(1)>=14 && input.LA(1)<=65535) ) {
                        	        input.consume();

                        	    }
                        	    else {
                        	        throw recover(new MismatchedSetException(null,input));
                        	    }


                        	    }
                        	    break;

                        	default :
                        	    break loop10;
                            }
                        } while (true);

                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:97:28: ( '\\r' )?
                        var alt11:int=2;
                        var LA11_0:int = input.LA(1);

                        if ( (LA11_0==13) ) {
                            alt11=1;
                        }
                        switch (alt11) {
                            case 1 :
                                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:97:28: '\\r'
                                {
                                match(13); 

                                }
                                break;

                        }

                        match(10); 
                        _channel=HIDDEN;

                        }
                        break;
                    case 2 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:98:9: '/*' ( options {greedy=false; } : . )* '*/'
                        {
                        matchString("/*"); 

                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:98:14: ( options {greedy=false; } : . )*
                        loop12:
                        do {
                            var alt12:int=2;
                            var LA12_0:int = input.LA(1);

                            if ( (LA12_0==42) ) {
                                var LA12_1:int = input.LA(2);

                                if ( (LA12_1==47) ) {
                                    alt12=2;
                                }
                                else if ( ((LA12_1>=0 && LA12_1<=46)||(LA12_1>=48 && LA12_1<=65535)) ) {
                                    alt12=1;
                                }


                            }
                            else if ( ((LA12_0>=0 && LA12_0<=41)||(LA12_0>=43 && LA12_0<=65535)) ) {
                                alt12=1;
                            }


                            switch (alt12) {
                        	case 1 :
                        	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:98:42: .
                        	    {
                        	    matchAny(); 

                        	    }
                        	    break;

                        	default :
                        	    break loop12;
                            }
                        } while (true);

                        matchString("*/"); 

                        _channel=HIDDEN;

                        }
                        break;

                }
                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end COMMENT

        // $ANTLR start WS
        public final function mWS():void {
            try {
                var _type:int = WS;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:102:5: ( ( ' ' | '\\t' | '\\r' | '\\n' ) )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:102:9: ( ' ' | '\\t' | '\\r' | '\\n' )
                {
                if ( (input.LA(1)>=9 && input.LA(1)<=10)||input.LA(1)==13||input.LA(1)==32 ) {
                    input.consume();

                }
                else {
                    throw recover(new MismatchedSetException(null,input));
                }

                _channel=HIDDEN;

                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end WS

        // $ANTLR start INT
        public final function mINT():void {
            try {
                var _type:int = INT;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:109:5: ( ( '0' .. '9' )+ )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:109:7: ( '0' .. '9' )+
                {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:109:7: ( '0' .. '9' )+
                var cnt14:int=0;
                loop14:
                do {
                    var alt14:int=2;
                    var LA14_0:int = input.LA(1);

                    if ( ((LA14_0>=48 && LA14_0<=57)) ) {
                        alt14=1;
                    }


                    switch (alt14) {
                	case 1 :
                	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:109:7: '0' .. '9'
                	    {
                	    matchRange(48,57); 

                	    }
                	    break;

                	default :
                	    if ( cnt14 >= 1 ) break loop14;
                            throw new EarlyExitException(14, input);

                    }
                    cnt14++;
                } while (true);


                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end INT

        // $ANTLR start FLOAT
        public final function mFLOAT():void {
            try {
                var _type:int = FLOAT;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:113:5: ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT )
                var alt21:int=3;
                alt21 = dfa21.predict(input);
                switch (alt21) {
                    case 1 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:113:9: ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )?
                        {
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:113:9: ( '0' .. '9' )+
                        var cnt15:int=0;
                        loop15:
                        do {
                            var alt15:int=2;
                            var LA15_0:int = input.LA(1);

                            if ( ((LA15_0>=48 && LA15_0<=57)) ) {
                                alt15=1;
                            }


                            switch (alt15) {
                        	case 1 :
                        	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:113:10: '0' .. '9'
                        	    {
                        	    matchRange(48,57); 

                        	    }
                        	    break;

                        	default :
                        	    if ( cnt15 >= 1 ) break loop15;
                                    throw new EarlyExitException(15, input);

                            }
                            cnt15++;
                        } while (true);

                        match(46); 
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:113:25: ( '0' .. '9' )*
                        loop16:
                        do {
                            var alt16:int=2;
                            var LA16_0:int = input.LA(1);

                            if ( ((LA16_0>=48 && LA16_0<=57)) ) {
                                alt16=1;
                            }


                            switch (alt16) {
                        	case 1 :
                        	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:113:26: '0' .. '9'
                        	    {
                        	    matchRange(48,57); 

                        	    }
                        	    break;

                        	default :
                        	    break loop16;
                            }
                        } while (true);

                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:113:37: ( EXPONENT )?
                        var alt17:int=2;
                        var LA17_0:int = input.LA(1);

                        if ( (LA17_0==69||LA17_0==101) ) {
                            alt17=1;
                        }
                        switch (alt17) {
                            case 1 :
                                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:113:37: EXPONENT
                                {
                                mEXPONENT(); 

                                }
                                break;

                        }


                        }
                        break;
                    case 2 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:114:9: '.' ( '0' .. '9' )+ ( EXPONENT )?
                        {
                        match(46); 
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:114:13: ( '0' .. '9' )+
                        var cnt18:int=0;
                        loop18:
                        do {
                            var alt18:int=2;
                            var LA18_0:int = input.LA(1);

                            if ( ((LA18_0>=48 && LA18_0<=57)) ) {
                                alt18=1;
                            }


                            switch (alt18) {
                        	case 1 :
                        	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:114:14: '0' .. '9'
                        	    {
                        	    matchRange(48,57); 

                        	    }
                        	    break;

                        	default :
                        	    if ( cnt18 >= 1 ) break loop18;
                                    throw new EarlyExitException(18, input);

                            }
                            cnt18++;
                        } while (true);

                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:114:25: ( EXPONENT )?
                        var alt19:int=2;
                        var LA19_0:int = input.LA(1);

                        if ( (LA19_0==69||LA19_0==101) ) {
                            alt19=1;
                        }
                        switch (alt19) {
                            case 1 :
                                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:114:25: EXPONENT
                                {
                                mEXPONENT(); 

                                }
                                break;

                        }


                        }
                        break;
                    case 3 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:115:9: ( '0' .. '9' )+ EXPONENT
                        {
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:115:9: ( '0' .. '9' )+
                        var cnt20:int=0;
                        loop20:
                        do {
                            var alt20:int=2;
                            var LA20_0:int = input.LA(1);

                            if ( ((LA20_0>=48 && LA20_0<=57)) ) {
                                alt20=1;
                            }


                            switch (alt20) {
                        	case 1 :
                        	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:115:10: '0' .. '9'
                        	    {
                        	    matchRange(48,57); 

                        	    }
                        	    break;

                        	default :
                        	    if ( cnt20 >= 1 ) break loop20;
                                    throw new EarlyExitException(20, input);

                            }
                            cnt20++;
                        } while (true);

                        mEXPONENT(); 

                        }
                        break;

                }
                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end FLOAT

        // $ANTLR start CHAR
        public final function mCHAR():void {
            try {
                var _type:int = CHAR;
                var _channel:int = DEFAULT_TOKEN_CHANNEL;
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:119:5: ( '\\'' (~ ( '\\'' ) )+ '\\'' )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:119:8: '\\'' (~ ( '\\'' ) )+ '\\''
                {
                match(39); 
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:119:13: (~ ( '\\'' ) )+
                var cnt22:int=0;
                loop22:
                do {
                    var alt22:int=2;
                    var LA22_0:int = input.LA(1);

                    if ( ((LA22_0>=0 && LA22_0<=38)||(LA22_0>=40 && LA22_0<=65535)) ) {
                        alt22=1;
                    }


                    switch (alt22) {
                	case 1 :
                	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:119:13: ~ ( '\\'' )
                	    {
                	    if ( (input.LA(1)>=0 && input.LA(1)<=38)||(input.LA(1)>=40 && input.LA(1)<=65535) ) {
                	        input.consume();

                	    }
                	    else {
                	        throw recover(new MismatchedSetException(null,input));
                	    }


                	    }
                	    break;

                	default :
                	    if ( cnt22 >= 1 ) break loop22;
                            throw new EarlyExitException(22, input);

                    }
                    cnt22++;
                } while (true);

                match(39); 

                }

                this.state.type = _type;
                this.state.channel = _channel;
            }
            finally {
            }
        }
        // $ANTLR end CHAR

        // $ANTLR start EXPONENT
        public final function mEXPONENT():void {
            try {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:124:5: ( ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+ )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:124:7: ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+
                {
                if ( input.LA(1)==69||input.LA(1)==101 ) {
                    input.consume();

                }
                else {
                    throw recover(new MismatchedSetException(null,input));
                }

                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:124:17: ( '+' | '-' )?
                var alt23:int=2;
                var LA23_0:int = input.LA(1);

                if ( (LA23_0==43||LA23_0==45) ) {
                    alt23=1;
                }
                switch (alt23) {
                    case 1 :
                        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:
                        {
                        if ( input.LA(1)==43||input.LA(1)==45 ) {
                            input.consume();

                        }
                        else {
                            throw recover(new MismatchedSetException(null,input));
                        }


                        }
                        break;

                }

                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:124:28: ( '0' .. '9' )+
                var cnt24:int=0;
                loop24:
                do {
                    var alt24:int=2;
                    var LA24_0:int = input.LA(1);

                    if ( ((LA24_0>=48 && LA24_0<=57)) ) {
                        alt24=1;
                    }


                    switch (alt24) {
                	case 1 :
                	    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:124:29: '0' .. '9'
                	    {
                	    matchRange(48,57); 

                	    }
                	    break;

                	default :
                	    if ( cnt24 >= 1 ) break loop24;
                            throw new EarlyExitException(24, input);

                    }
                    cnt24++;
                } while (true);


                }

            }
            finally {
            }
        }
        // $ANTLR end EXPONENT

        // $ANTLR start HEX_DIGIT
        public final function mHEX_DIGIT():void {
            try {
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:129:5: ( ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' ) )
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:129:7: ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' )
                {
                if ( (input.LA(1)>=48 && input.LA(1)<=57)||(input.LA(1)>=65 && input.LA(1)<=70)||(input.LA(1)>=97 && input.LA(1)<=102) ) {
                    input.consume();

                }
                else {
                    throw recover(new MismatchedSetException(null,input));
                }


                }

            }
            finally {
            }
        }
        // $ANTLR end HEX_DIGIT

        public override function mTokens():void {
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:8: ( T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | PRENS | POSTNS | OP | ID | XML | DOC | CDATA | STR | COMMENT | WS | INT | FLOAT | CHAR )
            var alt25:int=23;
            alt25 = dfa25.predict(input);
            switch (alt25) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:10: T__19
                    {
                    mT__19(); 

                    }
                    break;
                case 2 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:16: T__20
                    {
                    mT__20(); 

                    }
                    break;
                case 3 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:22: T__21
                    {
                    mT__21(); 

                    }
                    break;
                case 4 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:28: T__22
                    {
                    mT__22(); 

                    }
                    break;
                case 5 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:34: T__23
                    {
                    mT__23(); 

                    }
                    break;
                case 6 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:40: T__24
                    {
                    mT__24(); 

                    }
                    break;
                case 7 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:46: T__25
                    {
                    mT__25(); 

                    }
                    break;
                case 8 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:52: T__26
                    {
                    mT__26(); 

                    }
                    break;
                case 9 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:58: T__27
                    {
                    mT__27(); 

                    }
                    break;
                case 10 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:64: T__28
                    {
                    mT__28(); 

                    }
                    break;
                case 11 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:70: PRENS
                    {
                    mPRENS(); 

                    }
                    break;
                case 12 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:76: POSTNS
                    {
                    mPOSTNS(); 

                    }
                    break;
                case 13 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:83: OP
                    {
                    mOP(); 

                    }
                    break;
                case 14 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:86: ID
                    {
                    mID(); 

                    }
                    break;
                case 15 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:89: XML
                    {
                    mXML(); 

                    }
                    break;
                case 16 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:93: DOC
                    {
                    mDOC(); 

                    }
                    break;
                case 17 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:97: CDATA
                    {
                    mCDATA(); 

                    }
                    break;
                case 18 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:103: STR
                    {
                    mSTR(); 

                    }
                    break;
                case 19 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:107: COMMENT
                    {
                    mCOMMENT(); 

                    }
                    break;
                case 20 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:115: WS
                    {
                    mWS(); 

                    }
                    break;
                case 21 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:118: INT
                    {
                    mINT(); 

                    }
                    break;
                case 22 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:122: FLOAT
                    {
                    mFLOAT(); 

                    }
                    break;
                case 23 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtAS.g:1:128: CHAR
                    {
                    mCHAR(); 

                    }
                    break;

            }

        }



        private const DFA2_eot:Array =
            DFA.unpackEncodedString("\x01\u80ff\xff\x01\x11\x01\x13\x01\x15"+
            "\x04\u80ff\xff\x01\x17\x01\x19\x02\u80ff\xff\x01\x1b\x03\u80ff\xff"+
            "\x01\x1d\x0d\u80ff\xff");
        private const DFA2_eof:Array =
            DFA.unpackEncodedString("\x1e\u80ff\xff");
        private const DFA2_min:Array =
            DFA.unpackEncodedString("\x01\x24\x01\x2d\x02\x3e\x04\u80ff\xff"+
            "\x01\x26\x01\x2a\x02\u80ff\xff\x01\x7c\x03\u80ff\xff\x01\x3e"+
            "\x0d\u80ff\xff", true);
        private const DFA2_max:Array =
            DFA.unpackEncodedString("\x01\x7e\x01\x3c\x02\x3e\x04\u80ff\xff"+
            "\x01\x26\x01\x2a\x02\u80ff\xff\x01\x7c\x03\u80ff\xff\x01\x3e"+
            "\x0d\u80ff\xff", true);
        private const DFA2_accept:Array =
            DFA.unpackEncodedString("\x04\u80ff\xff\x01\x08\x01\x09\x01\x0a"+
            "\x01\x0b\x02\u80ff\xff\x01\x11\x01\x12\x01\u80ff\xff\x01\x15"+
            "\x01\x16\x01\x02\x01\u80ff\xff\x01\x01\x01\x05\x01\x10\x01\x06"+
            "\x01\x07\x01\x0d\x01\x0c\x01\x0f\x01\x0e\x01\x14\x01\x13\x01"+
            "\x04\x01\x03");
        private const DFA2_special:Array =
            DFA.unpackEncodedString("\x1e\u80ff\xff");
        private const DFA2_transition:Array = [
                DFA.unpackEncodedString("\x01\x05\x01\x06\x01\x08\x03\u80ff\xff"+
                "\x01\x09\x01\x0a\x01\u80ff\xff\x01\x02\x01\u80ff\xff\x01"+
                "\x0d\x0c\u80ff\xff\x01\x01\x01\x0b\x01\x03\x01\x0e\x1e\u80ff\xff"+
                "\x01\x07\x1d\u80ff\xff\x01\x0c\x01\u80ff\xff\x01\x04"),
                DFA.unpackEncodedString("\x01\x10\x0e\u80ff\xff\x01\x0f"),
                DFA.unpackEncodedString("\x01\x12"),
                DFA.unpackEncodedString("\x01\x14"),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString("\x01\x16"),
                DFA.unpackEncodedString("\x01\x18"),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString("\x01\x1a"),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString("\x01\x1c"),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString("")
        ];
        protected var dfa2:DFA;  // initialized in constructor

        private const DFA21_eot:Array =
            DFA.unpackEncodedString("\x05\u80ff\xff");
        private const DFA21_eof:Array =
            DFA.unpackEncodedString("\x05\u80ff\xff");
        private const DFA21_min:Array =
            DFA.unpackEncodedString("\x02\x2e\x03\u80ff\xff", true);
        private const DFA21_max:Array =
            DFA.unpackEncodedString("\x01\x39\x01\x65\x03\u80ff\xff", true);
        private const DFA21_accept:Array =
            DFA.unpackEncodedString("\x02\u80ff\xff\x01\x02\x01\x01\x01\x03");
        private const DFA21_special:Array =
            DFA.unpackEncodedString("\x05\u80ff\xff");
        private const DFA21_transition:Array = [
                DFA.unpackEncodedString("\x01\x02\x01\u80ff\xff\x0a\x01"),
                DFA.unpackEncodedString("\x01\x03\x01\u80ff\xff\x0a\x01"+
                "\x0b\u80ff\xff\x01\x04\x1f\u80ff\xff\x01\x04"),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString("")
        ];
        protected var dfa21:DFA;  // initialized in constructor

        private const DFA25_eot:Array =
            DFA.unpackEncodedString("\x01\u80ff\xff\x01\x16\x02\u80ff\xff"+
            "\x01\x18\x04\u80ff\xff\x01\x1a\x01\u80ff\xff\x01\x0c\x03\u80ff\xff"+
            "\x02\x0e\x04\u80ff\xff\x01\x1f\x0a\u80ff\xff");
        private const DFA25_eof:Array =
            DFA.unpackEncodedString("\x20\u80ff\xff");
        private const DFA25_min:Array =
            DFA.unpackEncodedString("\x01\x09\x01\x30\x02\u80ff\xff\x01\x3a"+
            "\x04\u80ff\xff\x01\x5b\x01\u80ff\xff\x01\x21\x03\u80ff\xff\x01"+
            "\x2a\x01\x78\x02\u80ff\xff\x01\x00\x01\u80ff\xff\x01\x2e\x0a"+
            "\u80ff\xff", true);
        private const DFA25_max:Array =
            DFA.unpackEncodedString("\x01\x7e\x01\x39\x02\u80ff\xff\x01\x3a"+
            "\x04\u80ff\xff\x01\x5b\x01\u80ff\xff\x01\x21\x03\u80ff\xff\x01"+
            "\x2f\x01\x78\x02\u80ff\xff\x01\u80ff\xff\x01\u80ff\xff\x01\x65"+
            "\x0a\u80ff\xff", true);
        private const DFA25_accept:Array =
            DFA.unpackEncodedString("\x02\u80ff\xff\x01\x02\x01\x03\x01\u80ff\xff"+
            "\x01\x05\x01\x06\x01\x07\x01\x08\x01\u80ff\xff\x01\x0a\x01\u80ff\xff"+
            "\x01\x0b\x01\x0c\x01\x0d\x02\u80ff\xff\x01\x0e\x01\x12\x01\u80ff\xff"+
            "\x01\x14\x01\u80ff\xff\x01\x01\x01\x16\x01\x04\x01\x11\x01\x09"+
            "\x01\x10\x01\x13\x01\x0f\x01\x17\x01\x15");
        private const DFA25_special:Array =
            DFA.unpackEncodedString("\x13\u80ff\xff\x01\x00\x0c\u80ff\xff");
        private const DFA25_transition:Array = [
                DFA.unpackEncodedString("\x02\x14\x02\u80ff\xff\x01\x14\x12"+
                "\u80ff\xff\x01\x14\x01\x0b\x01\x12\x01\x0c\x03\x0e\x01\x13"+
                "\x01\x07\x01\x08\x02\x0e\x01\x06\x01\x0e\x01\x01\x01\x0f"+
                "\x0a\x15\x01\x04\x01\x05\x03\x0e\x01\x10\x01\x0d\x1a\x11"+
                "\x01\x09\x01\x0d\x01\x0a\x01\x0e\x01\x11\x01\u80ff\xff\x1a"+
                "\x11\x01\x02\x01\x0e\x01\x03\x01\x0e"),
                DFA.unpackEncodedString("\x0a\x17"),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString("\x01\x0c"),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString("\x01\x19"),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString("\x01\x1b"),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString("\x01\x1c\x04\u80ff\xff\x01\x1c"),
                DFA.unpackEncodedString("\x01\x1d"),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString("\x27\x1e\x01\x12\u80ff\xd8\x1e"),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString("\x01\x17\x01\u80ff\xff\x0a\x15"+
                "\x0b\u80ff\xff\x01\x17\x1f\u80ff\xff\x01\x17"),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString(""),
                DFA.unpackEncodedString("")
        ];
            private function DFA25_specialStateTransition(dfa:DFA, s:int, _input:IntStream):int {
                var input:IntStream = _input;
            	var _s:int = s;
                switch ( s ) {
                        case 0 : 
                            var LA25_19:int = input.LA(1);

                            s = -1;
                            if ( (LA25_19==39) ) {s = 18;}

                            else if ( ((LA25_19>=0 && LA25_19<=38)||(LA25_19>=40 && LA25_19<=65535)) ) {s = 30;}

                            if ( s>=0 ) return s;
                            break;
                }
                throw dfa.error(new NoViableAltException(dfa.description, 25, _s, input));
            }

        protected var dfa25:DFA;  // initialized in constructor
     

    }
}