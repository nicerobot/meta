// $ANTLR 3.3 Nov 30, 2010 12:45:30 /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g 2011-04-19 00:14:15

var StruxtJSLexer = function(input, state) {
// alternate constructor @todo
// public StruxtJSLexer(CharStream input)
// public StruxtJSLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    this.dfa2 = new StruxtJSLexer.DFA2(this);
    this.dfa21 = new StruxtJSLexer.DFA21(this);
    this.dfa25 = new StruxtJSLexer.DFA25(this);
    StruxtJSLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(StruxtJSLexer, {
    EOF: -1,
    T__19: 19,
    T__20: 20,
    T__21: 21,
    T__22: 22,
    T__23: 23,
    T__24: 24,
    T__25: 25,
    T__26: 26,
    T__27: 27,
    T__28: 28,
    DOC: 4,
    XML: 5,
    CDATA: 6,
    OP: 7,
    PRENS: 8,
    ID: 9,
    POSTNS: 10,
    STR: 11,
    INT: 12,
    FLOAT: 13,
    CHAR: 14,
    COMMENT: 15,
    WS: 16,
    EXPONENT: 17,
    HEX_DIGIT: 18
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(StruxtJSLexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    T__19 : 19,
    T__20 : 20,
    T__21 : 21,
    T__22 : 22,
    T__23 : 23,
    T__24 : 24,
    T__25 : 25,
    T__26 : 26,
    T__27 : 27,
    T__28 : 28,
    DOC : 4,
    XML : 5,
    CDATA : 6,
    OP : 7,
    PRENS : 8,
    ID : 9,
    POSTNS : 10,
    STR : 11,
    INT : 12,
    FLOAT : 13,
    CHAR : 14,
    COMMENT : 15,
    WS : 16,
    EXPONENT : 17,
    HEX_DIGIT : 18,
    getGrammarFileName: function() { return "/Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g"; }
});
org.antlr.lang.augmentObject(StruxtJSLexer.prototype, {
    // $ANTLR start T__19
    mT__19: function()  {
        try {
            var _type = this.T__19;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:7:7: ( '.' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:7:9: '.'
            this.match('.'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__19",

    // $ANTLR start T__20
    mT__20: function()  {
        try {
            var _type = this.T__20;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:8:7: ( '{' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:8:9: '{'
            this.match('{'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__20",

    // $ANTLR start T__21
    mT__21: function()  {
        try {
            var _type = this.T__21;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:9:7: ( '}' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:9:9: '}'
            this.match('}'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__21",

    // $ANTLR start T__22
    mT__22: function()  {
        try {
            var _type = this.T__22;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:10:7: ( ':' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:10:9: ':'
            this.match(':'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__22",

    // $ANTLR start T__23
    mT__23: function()  {
        try {
            var _type = this.T__23;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:11:7: ( ';' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:11:9: ';'
            this.match(';'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__23",

    // $ANTLR start T__24
    mT__24: function()  {
        try {
            var _type = this.T__24;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:12:7: ( ',' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:12:9: ','
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__24",

    // $ANTLR start T__25
    mT__25: function()  {
        try {
            var _type = this.T__25;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:13:7: ( '(' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:13:9: '('
            this.match('('); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__25",

    // $ANTLR start T__26
    mT__26: function()  {
        try {
            var _type = this.T__26;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:14:7: ( ')' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:14:9: ')'
            this.match(')'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__26",

    // $ANTLR start T__27
    mT__27: function()  {
        try {
            var _type = this.T__27;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:15:7: ( '[' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:15:9: '['
            this.match('['); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__27",

    // $ANTLR start T__28
    mT__28: function()  {
        try {
            var _type = this.T__28;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:16:7: ( ']' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:16:9: ']'
            this.match(']'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__28",

    // $ANTLR start PRENS
    mPRENS: function()  {
        try {
            var _type = this.PRENS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:62:5: ( ( '!' | '#' | '::' ) )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:62:7: ( '!' | '#' | '::' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:62:7: ( '!' | '#' | '::' )
            var alt1=3;
            switch ( this.input.LA(1) ) {
            case '!':
                alt1=1;
                break;
            case '#':
                alt1=2;
                break;
            case ':':
                alt1=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 1, 0, this.input);

                throw nvae;
            }

            switch (alt1) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:62:8: '!'
                    this.match('!'); 


                    break;
                case 2 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:62:12: '#'
                    this.match('#'); 


                    break;
                case 3 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:62:16: '::'
                    this.match("::"); 



                    break;

            }




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PRENS",

    // $ANTLR start POSTNS
    mPOSTNS: function()  {
        try {
            var _type = this.POSTNS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:66:5: ( ( '@' | '\\\\' ) )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:66:7: ( '@' | '\\\\' )
            if ( this.input.LA(1)=='@'||this.input.LA(1)=='\\' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "POSTNS",

    // $ANTLR start OP
    mOP: function()  {
        try {
            var _type = this.OP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:5: ( ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' ) )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )
            var alt2=22;
            alt2 = this.dfa2.predict(this.input);
            switch (alt2) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:8: '<'
                    this.match('<'); 


                    break;
                case 2 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:14: '<<'
                    this.match("<<"); 



                    break;
                case 3 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:21: '<-'
                    this.match("<-"); 



                    break;
                case 4 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:28: '<->'
                    this.match("<->"); 



                    break;
                case 5 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:36: '->'
                    this.match("->"); 



                    break;
                case 6 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:43: '>>'
                    this.match(">>"); 



                    break;
                case 7 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:50: '>'
                    this.match('>'); 


                    break;
                case 8 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:56: '~'
                    this.match('~'); 


                    break;
                case 9 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:62: '$'
                    this.match('$'); 


                    break;
                case 10 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:68: '%'
                    this.match('%'); 


                    break;
                case 11 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:74: '^'
                    this.match('^'); 


                    break;
                case 12 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:80: '&'
                    this.match('&'); 


                    break;
                case 13 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:86: '&&'
                    this.match("&&"); 



                    break;
                case 14 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:71:7: '*'
                    this.match('*'); 


                    break;
                case 15 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:71:13: '**'
                    this.match("**"); 



                    break;
                case 16 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:71:20: '-'
                    this.match('-'); 


                    break;
                case 17 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:71:26: '+'
                    this.match('+'); 


                    break;
                case 18 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:71:32: '='
                    this.match('='); 


                    break;
                case 19 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:71:38: '|'
                    this.match('|'); 


                    break;
                case 20 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:71:44: '||'
                    this.match("||"); 



                    break;
                case 21 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:71:51: '/'
                    this.match('/'); 


                    break;
                case 22 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:71:57: '?'
                    this.match('?'); 


                    break;

            }




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "OP",

    // $ANTLR start ID
    mID: function()  {
        try {
            var _type = this.ID;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:75:5: ( ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )* )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:75:7: ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )*
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:75:31: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )*
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( (LA3_0=='-'||(LA3_0>='0' && LA3_0<='9')||(LA3_0>='A' && LA3_0<='Z')||LA3_0=='_'||(LA3_0>='a' && LA3_0<='z')) ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:
                    if ( this.input.LA(1)=='-'||(this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop3;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ID",

    // $ANTLR start XML
    mXML: function()  {
        try {
            var _type = this.XML;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:79:5: ( '?xml' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:79:7: '?xml'
            this.match("?xml"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "XML",

    // $ANTLR start DOC
    mDOC: function()  {
        try {
            var _type = this.DOC;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:83:5: ( '!!!' ( options {greedy=false; } : . )+ '!!!' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:83:7: '!!!' ( options {greedy=false; } : . )+ '!!!'
            this.match("!!!"); 

            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:83:13: ( options {greedy=false; } : . )+
            var cnt4=0;
            loop4:
            do {
                var alt4=2;
                var LA4_0 = this.input.LA(1);

                if ( (LA4_0=='!') ) {
                    var LA4_1 = this.input.LA(2);

                    if ( (LA4_1=='!') ) {
                        var LA4_3 = this.input.LA(3);

                        if ( (LA4_3=='!') ) {
                            alt4=2;
                        }
                        else if ( ((LA4_3>='\u0000' && LA4_3<=' ')||(LA4_3>='\"' && LA4_3<='\uFFFF')) ) {
                            alt4=1;
                        }


                    }
                    else if ( ((LA4_1>='\u0000' && LA4_1<=' ')||(LA4_1>='\"' && LA4_1<='\uFFFF')) ) {
                        alt4=1;
                    }


                }
                else if ( ((LA4_0>='\u0000' && LA4_0<=' ')||(LA4_0>='\"' && LA4_0<='\uFFFF')) ) {
                    alt4=1;
                }


                switch (alt4) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:83:38: .
                    this.matchAny(); 


                    break;

                default :
                    if ( cnt4 >= 1 ) {
                        break loop4;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(4, this.input);
                        throw eee;
                }
                cnt4++;
            } while (true);

            this.match("!!!"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DOC",

    // $ANTLR start CDATA
    mCDATA: function()  {
        try {
            var _type = this.CDATA;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:87:5: ( '[[\"' ( options {greedy=false; } : . )+ '\"]]' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:87:7: '[[\"' ( options {greedy=false; } : . )+ '\"]]'
            this.match("[[\""); 

            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:87:13: ( options {greedy=false; } : . )+
            var cnt5=0;
            loop5:
            do {
                var alt5=2;
                var LA5_0 = this.input.LA(1);

                if ( (LA5_0=='\"') ) {
                    var LA5_1 = this.input.LA(2);

                    if ( (LA5_1==']') ) {
                        var LA5_3 = this.input.LA(3);

                        if ( (LA5_3==']') ) {
                            alt5=2;
                        }
                        else if ( ((LA5_3>='\u0000' && LA5_3<='\\')||(LA5_3>='^' && LA5_3<='\uFFFF')) ) {
                            alt5=1;
                        }


                    }
                    else if ( ((LA5_1>='\u0000' && LA5_1<='\\')||(LA5_1>='^' && LA5_1<='\uFFFF')) ) {
                        alt5=1;
                    }


                }
                else if ( ((LA5_0>='\u0000' && LA5_0<='!')||(LA5_0>='#' && LA5_0<='\uFFFF')) ) {
                    alt5=1;
                }


                switch (alt5) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:87:38: .
                    this.matchAny(); 


                    break;

                default :
                    if ( cnt5 >= 1 ) {
                        break loop5;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(5, this.input);
                        throw eee;
                }
                cnt5++;
            } while (true);

            this.match("\"]]"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CDATA",

    // $ANTLR start STR
    mSTR: function()  {
        try {
            var _type = this.STR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:91:5: ( '\"\"\"' ( options {greedy=false; } : . )* '\"\"\"' | '\\'\\'\\'' ( options {greedy=false; } : . )* '\\'\\'\\'' | '\"' (~ ( '\"' ) )* '\"' )
            var alt9=3;
            var LA9_0 = this.input.LA(1);

            if ( (LA9_0=='\"') ) {
                var LA9_1 = this.input.LA(2);

                if ( (LA9_1=='\"') ) {
                    var LA9_3 = this.input.LA(3);

                    if ( (LA9_3=='\"') ) {
                        alt9=1;
                    }
                    else {
                        alt9=3;}
                }
                else if ( ((LA9_1>='\u0000' && LA9_1<='!')||(LA9_1>='#' && LA9_1<='\uFFFF')) ) {
                    alt9=3;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 9, 1, this.input);

                    throw nvae;
                }
            }
            else if ( (LA9_0=='\'') ) {
                alt9=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 9, 0, this.input);

                throw nvae;
            }
            switch (alt9) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:91:7: '\"\"\"' ( options {greedy=false; } : . )* '\"\"\"'
                    this.match("\"\"\""); 

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:91:13: ( options {greedy=false; } : . )*
                    loop6:
                    do {
                        var alt6=2;
                        var LA6_0 = this.input.LA(1);

                        if ( (LA6_0=='\"') ) {
                            var LA6_1 = this.input.LA(2);

                            if ( (LA6_1=='\"') ) {
                                var LA6_3 = this.input.LA(3);

                                if ( (LA6_3=='\"') ) {
                                    alt6=2;
                                }
                                else if ( ((LA6_3>='\u0000' && LA6_3<='!')||(LA6_3>='#' && LA6_3<='\uFFFF')) ) {
                                    alt6=1;
                                }


                            }
                            else if ( ((LA6_1>='\u0000' && LA6_1<='!')||(LA6_1>='#' && LA6_1<='\uFFFF')) ) {
                                alt6=1;
                            }


                        }
                        else if ( ((LA6_0>='\u0000' && LA6_0<='!')||(LA6_0>='#' && LA6_0<='\uFFFF')) ) {
                            alt6=1;
                        }


                        switch (alt6) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:91:38: .
                            this.matchAny(); 


                            break;

                        default :
                            break loop6;
                        }
                    } while (true);

                    this.match("\"\"\""); 



                    break;
                case 2 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:92:7: '\\'\\'\\'' ( options {greedy=false; } : . )* '\\'\\'\\''
                    this.match("'''"); 

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:92:16: ( options {greedy=false; } : . )*
                    loop7:
                    do {
                        var alt7=2;
                        var LA7_0 = this.input.LA(1);

                        if ( (LA7_0=='\'') ) {
                            var LA7_1 = this.input.LA(2);

                            if ( (LA7_1=='\'') ) {
                                var LA7_3 = this.input.LA(3);

                                if ( (LA7_3=='\'') ) {
                                    alt7=2;
                                }
                                else if ( ((LA7_3>='\u0000' && LA7_3<='&')||(LA7_3>='(' && LA7_3<='\uFFFF')) ) {
                                    alt7=1;
                                }


                            }
                            else if ( ((LA7_1>='\u0000' && LA7_1<='&')||(LA7_1>='(' && LA7_1<='\uFFFF')) ) {
                                alt7=1;
                            }


                        }
                        else if ( ((LA7_0>='\u0000' && LA7_0<='&')||(LA7_0>='(' && LA7_0<='\uFFFF')) ) {
                            alt7=1;
                        }


                        switch (alt7) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:92:41: .
                            this.matchAny(); 


                            break;

                        default :
                            break loop7;
                        }
                    } while (true);

                    this.match("'''"); 



                    break;
                case 3 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:93:6: '\"' (~ ( '\"' ) )* '\"'
                    this.match('\"'); 
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:93:10: (~ ( '\"' ) )*
                    loop8:
                    do {
                        var alt8=2;
                        var LA8_0 = this.input.LA(1);

                        if ( ((LA8_0>='\u0000' && LA8_0<='!')||(LA8_0>='#' && LA8_0<='\uFFFF')) ) {
                            alt8=1;
                        }


                        switch (alt8) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:93:10: ~ ( '\"' )
                            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='\uFFFF') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop8;
                        }
                    } while (true);

                    this.match('\"'); 


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STR",

    // $ANTLR start COMMENT
    mCOMMENT: function()  {
        try {
            var _type = this.COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:97:5: ( '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n' | '/*' ( options {greedy=false; } : . )* '*/' )
            var alt13=2;
            var LA13_0 = this.input.LA(1);

            if ( (LA13_0=='/') ) {
                var LA13_1 = this.input.LA(2);

                if ( (LA13_1=='/') ) {
                    alt13=1;
                }
                else if ( (LA13_1=='*') ) {
                    alt13=2;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 13, 1, this.input);

                    throw nvae;
                }
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 13, 0, this.input);

                throw nvae;
            }
            switch (alt13) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:97:9: '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n'
                    this.match("//"); 

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:97:14: (~ ( '\\n' | '\\r' ) )*
                    loop10:
                    do {
                        var alt10=2;
                        var LA10_0 = this.input.LA(1);

                        if ( ((LA10_0>='\u0000' && LA10_0<='\t')||(LA10_0>='\u000B' && LA10_0<='\f')||(LA10_0>='\u000E' && LA10_0<='\uFFFF')) ) {
                            alt10=1;
                        }


                        switch (alt10) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:97:14: ~ ( '\\n' | '\\r' )
                            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='\uFFFF') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop10;
                        }
                    } while (true);

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:97:28: ( '\\r' )?
                    var alt11=2;
                    var LA11_0 = this.input.LA(1);

                    if ( (LA11_0=='\r') ) {
                        alt11=1;
                    }
                    switch (alt11) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:97:28: '\\r'
                            this.match('\r'); 


                            break;

                    }

                    this.match('\n'); 
                    _channel=HIDDEN;


                    break;
                case 2 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:98:9: '/*' ( options {greedy=false; } : . )* '*/'
                    this.match("/*"); 

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:98:14: ( options {greedy=false; } : . )*
                    loop12:
                    do {
                        var alt12=2;
                        var LA12_0 = this.input.LA(1);

                        if ( (LA12_0=='*') ) {
                            var LA12_1 = this.input.LA(2);

                            if ( (LA12_1=='/') ) {
                                alt12=2;
                            }
                            else if ( ((LA12_1>='\u0000' && LA12_1<='.')||(LA12_1>='0' && LA12_1<='\uFFFF')) ) {
                                alt12=1;
                            }


                        }
                        else if ( ((LA12_0>='\u0000' && LA12_0<=')')||(LA12_0>='+' && LA12_0<='\uFFFF')) ) {
                            alt12=1;
                        }


                        switch (alt12) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:98:42: .
                            this.matchAny(); 


                            break;

                        default :
                            break loop12;
                        }
                    } while (true);

                    this.match("*/"); 

                    _channel=HIDDEN;


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMENT",

    // $ANTLR start WS
    mWS: function()  {
        try {
            var _type = this.WS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:102:5: ( ( ' ' | '\\t' | '\\r' | '\\n' ) )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:102:9: ( ' ' | '\\t' | '\\r' | '\\n' )
            if ( (this.input.LA(1)>='\t' && this.input.LA(1)<='\n')||this.input.LA(1)=='\r'||this.input.LA(1)==' ' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WS",

    // $ANTLR start INT
    mINT: function()  {
        try {
            var _type = this.INT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:109:5: ( ( '0' .. '9' )+ )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:109:7: ( '0' .. '9' )+
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:109:7: ( '0' .. '9' )+
            var cnt14=0;
            loop14:
            do {
                var alt14=2;
                var LA14_0 = this.input.LA(1);

                if ( ((LA14_0>='0' && LA14_0<='9')) ) {
                    alt14=1;
                }


                switch (alt14) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:109:7: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt14 >= 1 ) {
                        break loop14;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(14, this.input);
                        throw eee;
                }
                cnt14++;
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INT",

    // $ANTLR start FLOAT
    mFLOAT: function()  {
        try {
            var _type = this.FLOAT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:113:5: ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT )
            var alt21=3;
            alt21 = this.dfa21.predict(this.input);
            switch (alt21) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:113:9: ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )?
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:113:9: ( '0' .. '9' )+
                    var cnt15=0;
                    loop15:
                    do {
                        var alt15=2;
                        var LA15_0 = this.input.LA(1);

                        if ( ((LA15_0>='0' && LA15_0<='9')) ) {
                            alt15=1;
                        }


                        switch (alt15) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:113:10: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt15 >= 1 ) {
                                break loop15;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(15, this.input);
                                throw eee;
                        }
                        cnt15++;
                    } while (true);

                    this.match('.'); 
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:113:25: ( '0' .. '9' )*
                    loop16:
                    do {
                        var alt16=2;
                        var LA16_0 = this.input.LA(1);

                        if ( ((LA16_0>='0' && LA16_0<='9')) ) {
                            alt16=1;
                        }


                        switch (alt16) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:113:26: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            break loop16;
                        }
                    } while (true);

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:113:37: ( EXPONENT )?
                    var alt17=2;
                    var LA17_0 = this.input.LA(1);

                    if ( (LA17_0=='E'||LA17_0=='e') ) {
                        alt17=1;
                    }
                    switch (alt17) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:113:37: EXPONENT
                            this.mEXPONENT(); 


                            break;

                    }



                    break;
                case 2 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:114:9: '.' ( '0' .. '9' )+ ( EXPONENT )?
                    this.match('.'); 
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:114:13: ( '0' .. '9' )+
                    var cnt18=0;
                    loop18:
                    do {
                        var alt18=2;
                        var LA18_0 = this.input.LA(1);

                        if ( ((LA18_0>='0' && LA18_0<='9')) ) {
                            alt18=1;
                        }


                        switch (alt18) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:114:14: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt18 >= 1 ) {
                                break loop18;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(18, this.input);
                                throw eee;
                        }
                        cnt18++;
                    } while (true);

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:114:25: ( EXPONENT )?
                    var alt19=2;
                    var LA19_0 = this.input.LA(1);

                    if ( (LA19_0=='E'||LA19_0=='e') ) {
                        alt19=1;
                    }
                    switch (alt19) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:114:25: EXPONENT
                            this.mEXPONENT(); 


                            break;

                    }



                    break;
                case 3 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:115:9: ( '0' .. '9' )+ EXPONENT
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:115:9: ( '0' .. '9' )+
                    var cnt20=0;
                    loop20:
                    do {
                        var alt20=2;
                        var LA20_0 = this.input.LA(1);

                        if ( ((LA20_0>='0' && LA20_0<='9')) ) {
                            alt20=1;
                        }


                        switch (alt20) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:115:10: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt20 >= 1 ) {
                                break loop20;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(20, this.input);
                                throw eee;
                        }
                        cnt20++;
                    } while (true);

                    this.mEXPONENT(); 


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FLOAT",

    // $ANTLR start CHAR
    mCHAR: function()  {
        try {
            var _type = this.CHAR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:119:5: ( '\\'' (~ ( '\\'' ) )+ '\\'' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:119:8: '\\'' (~ ( '\\'' ) )+ '\\''
            this.match('\''); 
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:119:13: (~ ( '\\'' ) )+
            var cnt22=0;
            loop22:
            do {
                var alt22=2;
                var LA22_0 = this.input.LA(1);

                if ( ((LA22_0>='\u0000' && LA22_0<='&')||(LA22_0>='(' && LA22_0<='\uFFFF')) ) {
                    alt22=1;
                }


                switch (alt22) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:119:13: ~ ( '\\'' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='&')||(this.input.LA(1)>='(' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    if ( cnt22 >= 1 ) {
                        break loop22;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(22, this.input);
                        throw eee;
                }
                cnt22++;
            } while (true);

            this.match('\''); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CHAR",

    // $ANTLR start EXPONENT
    mEXPONENT: function()  {
        try {
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:124:5: ( ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+ )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:124:7: ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+
            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:124:17: ( '+' | '-' )?
            var alt23=2;
            var LA23_0 = this.input.LA(1);

            if ( (LA23_0=='+'||LA23_0=='-') ) {
                alt23=1;
            }
            switch (alt23) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:124:28: ( '0' .. '9' )+
            var cnt24=0;
            loop24:
            do {
                var alt24=2;
                var LA24_0 = this.input.LA(1);

                if ( ((LA24_0>='0' && LA24_0<='9')) ) {
                    alt24=1;
                }


                switch (alt24) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:124:29: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt24 >= 1 ) {
                        break loop24;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(24, this.input);
                        throw eee;
                }
                cnt24++;
            } while (true);




        }
        finally {
        }
    },
    // $ANTLR end "EXPONENT",

    // $ANTLR start HEX_DIGIT
    mHEX_DIGIT: function()  {
        try {
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:129:5: ( ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' ) )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:129:7: ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' )
            if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='F')||(this.input.LA(1)>='a' && this.input.LA(1)<='f') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "HEX_DIGIT",

    mTokens: function() {
        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:8: ( T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | PRENS | POSTNS | OP | ID | XML | DOC | CDATA | STR | COMMENT | WS | INT | FLOAT | CHAR )
        var alt25=23;
        alt25 = this.dfa25.predict(this.input);
        switch (alt25) {
            case 1 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:10: T__19
                this.mT__19(); 


                break;
            case 2 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:16: T__20
                this.mT__20(); 


                break;
            case 3 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:22: T__21
                this.mT__21(); 


                break;
            case 4 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:28: T__22
                this.mT__22(); 


                break;
            case 5 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:34: T__23
                this.mT__23(); 


                break;
            case 6 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:40: T__24
                this.mT__24(); 


                break;
            case 7 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:46: T__25
                this.mT__25(); 


                break;
            case 8 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:52: T__26
                this.mT__26(); 


                break;
            case 9 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:58: T__27
                this.mT__27(); 


                break;
            case 10 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:64: T__28
                this.mT__28(); 


                break;
            case 11 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:70: PRENS
                this.mPRENS(); 


                break;
            case 12 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:76: POSTNS
                this.mPOSTNS(); 


                break;
            case 13 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:83: OP
                this.mOP(); 


                break;
            case 14 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:86: ID
                this.mID(); 


                break;
            case 15 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:89: XML
                this.mXML(); 


                break;
            case 16 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:93: DOC
                this.mDOC(); 


                break;
            case 17 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:97: CDATA
                this.mCDATA(); 


                break;
            case 18 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:103: STR
                this.mSTR(); 


                break;
            case 19 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:107: COMMENT
                this.mCOMMENT(); 


                break;
            case 20 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:115: WS
                this.mWS(); 


                break;
            case 21 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:118: INT
                this.mINT(); 


                break;
            case 22 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:122: FLOAT
                this.mFLOAT(); 


                break;
            case 23 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:128: CHAR
                this.mCHAR(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(StruxtJSLexer, {
    DFA2_eotS:
        "\u0001\uffff\u0001\u0011\u0001\u0013\u0001\u0015\u0004\uffff\u0001"+
    "\u0017\u0001\u0019\u0002\uffff\u0001\u001b\u0003\uffff\u0001\u001d\u000d"+
    "\uffff",
    DFA2_eofS:
        "\u001e\uffff",
    DFA2_minS:
        "\u0001\u0024\u0001\u002d\u0002\u003e\u0004\uffff\u0001\u0026\u0001"+
    "\u002a\u0002\uffff\u0001\u007c\u0003\uffff\u0001\u003e\u000d\uffff",
    DFA2_maxS:
        "\u0001\u007e\u0001\u003c\u0002\u003e\u0004\uffff\u0001\u0026\u0001"+
    "\u002a\u0002\uffff\u0001\u007c\u0003\uffff\u0001\u003e\u000d\uffff",
    DFA2_acceptS:
        "\u0004\uffff\u0001\u0008\u0001\u0009\u0001\u000a\u0001\u000b\u0002"+
    "\uffff\u0001\u0011\u0001\u0012\u0001\uffff\u0001\u0015\u0001\u0016\u0001"+
    "\u0002\u0001\uffff\u0001\u0001\u0001\u0005\u0001\u0010\u0001\u0006\u0001"+
    "\u0007\u0001\u000d\u0001\u000c\u0001\u000f\u0001\u000e\u0001\u0014\u0001"+
    "\u0013\u0001\u0004\u0001\u0003",
    DFA2_specialS:
        "\u001e\uffff}>",
    DFA2_transitionS: [
            "\u0001\u0005\u0001\u0006\u0001\u0008\u0003\uffff\u0001\u0009"+
            "\u0001\u000a\u0001\uffff\u0001\u0002\u0001\uffff\u0001\u000d"+
            "\u000c\uffff\u0001\u0001\u0001\u000b\u0001\u0003\u0001\u000e"+
            "\u001e\uffff\u0001\u0007\u001d\uffff\u0001\u000c\u0001\uffff"+
            "\u0001\u0004",
            "\u0001\u0010\u000e\uffff\u0001\u000f",
            "\u0001\u0012",
            "\u0001\u0014",
            "",
            "",
            "",
            "",
            "\u0001\u0016",
            "\u0001\u0018",
            "",
            "",
            "\u0001\u001a",
            "",
            "",
            "",
            "\u0001\u001c",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(StruxtJSLexer, {
    DFA2_eot:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA2_eotS),
    DFA2_eof:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA2_eofS),
    DFA2_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSLexer.DFA2_minS),
    DFA2_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSLexer.DFA2_maxS),
    DFA2_accept:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA2_acceptS),
    DFA2_special:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA2_specialS),
    DFA2_transition: (function() {
        var a = [],
            i,
            numStates = StruxtJSLexer.DFA2_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA2_transitionS[i]));
        }
        return a;
    })()
});

StruxtJSLexer.DFA2 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 2;
    this.eot = StruxtJSLexer.DFA2_eot;
    this.eof = StruxtJSLexer.DFA2_eof;
    this.min = StruxtJSLexer.DFA2_min;
    this.max = StruxtJSLexer.DFA2_max;
    this.accept = StruxtJSLexer.DFA2_accept;
    this.special = StruxtJSLexer.DFA2_special;
    this.transition = StruxtJSLexer.DFA2_transition;
};

org.antlr.lang.extend(StruxtJSLexer.DFA2, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "70:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )";
    },
    dummy: null
});
org.antlr.lang.augmentObject(StruxtJSLexer, {
    DFA21_eotS:
        "\u0005\uffff",
    DFA21_eofS:
        "\u0005\uffff",
    DFA21_minS:
        "\u0002\u002e\u0003\uffff",
    DFA21_maxS:
        "\u0001\u0039\u0001\u0065\u0003\uffff",
    DFA21_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0001\u0003",
    DFA21_specialS:
        "\u0005\uffff}>",
    DFA21_transitionS: [
            "\u0001\u0002\u0001\uffff\u000a\u0001",
            "\u0001\u0003\u0001\uffff\u000a\u0001\u000b\uffff\u0001\u0004"+
            "\u001f\uffff\u0001\u0004",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(StruxtJSLexer, {
    DFA21_eot:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA21_eotS),
    DFA21_eof:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA21_eofS),
    DFA21_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSLexer.DFA21_minS),
    DFA21_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSLexer.DFA21_maxS),
    DFA21_accept:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA21_acceptS),
    DFA21_special:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA21_specialS),
    DFA21_transition: (function() {
        var a = [],
            i,
            numStates = StruxtJSLexer.DFA21_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA21_transitionS[i]));
        }
        return a;
    })()
});

StruxtJSLexer.DFA21 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 21;
    this.eot = StruxtJSLexer.DFA21_eot;
    this.eof = StruxtJSLexer.DFA21_eof;
    this.min = StruxtJSLexer.DFA21_min;
    this.max = StruxtJSLexer.DFA21_max;
    this.accept = StruxtJSLexer.DFA21_accept;
    this.special = StruxtJSLexer.DFA21_special;
    this.transition = StruxtJSLexer.DFA21_transition;
};

org.antlr.lang.extend(StruxtJSLexer.DFA21, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "112:1: FLOAT : ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT );";
    },
    dummy: null
});
org.antlr.lang.augmentObject(StruxtJSLexer, {
    DFA25_eotS:
        "\u0001\uffff\u0001\u0016\u0002\uffff\u0001\u0018\u0004\uffff\u0001"+
    "\u001a\u0001\uffff\u0001\u000c\u0003\uffff\u0002\u000e\u0004\uffff\u0001"+
    "\u001f\u000a\uffff",
    DFA25_eofS:
        "\u0020\uffff",
    DFA25_minS:
        "\u0001\u0009\u0001\u0030\u0002\uffff\u0001\u003a\u0004\uffff\u0001"+
    "\u005b\u0001\uffff\u0001\u0021\u0003\uffff\u0001\u002a\u0001\u0078\u0002"+
    "\uffff\u0001\u0000\u0001\uffff\u0001\u002e\u000a\uffff",
    DFA25_maxS:
        "\u0001\u007e\u0001\u0039\u0002\uffff\u0001\u003a\u0004\uffff\u0001"+
    "\u005b\u0001\uffff\u0001\u0021\u0003\uffff\u0001\u002f\u0001\u0078\u0002"+
    "\uffff\u0001\uffff\u0001\uffff\u0001\u0065\u000a\uffff",
    DFA25_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0003\u0001\uffff\u0001\u0005\u0001"+
    "\u0006\u0001\u0007\u0001\u0008\u0001\uffff\u0001\u000a\u0001\uffff\u0001"+
    "\u000b\u0001\u000c\u0001\u000d\u0002\uffff\u0001\u000e\u0001\u0012\u0001"+
    "\uffff\u0001\u0014\u0001\uffff\u0001\u0001\u0001\u0016\u0001\u0004\u0001"+
    "\u0011\u0001\u0009\u0001\u0010\u0001\u0013\u0001\u000f\u0001\u0017\u0001"+
    "\u0015",
    DFA25_specialS:
        "\u0013\uffff\u0001\u0000\u000c\uffff}>",
    DFA25_transitionS: [
            "\u0002\u0014\u0002\uffff\u0001\u0014\u0012\uffff\u0001\u0014"+
            "\u0001\u000b\u0001\u0012\u0001\u000c\u0003\u000e\u0001\u0013"+
            "\u0001\u0007\u0001\u0008\u0002\u000e\u0001\u0006\u0001\u000e"+
            "\u0001\u0001\u0001\u000f\u000a\u0015\u0001\u0004\u0001\u0005"+
            "\u0003\u000e\u0001\u0010\u0001\u000d\u001a\u0011\u0001\u0009"+
            "\u0001\u000d\u0001\u000a\u0001\u000e\u0001\u0011\u0001\uffff"+
            "\u001a\u0011\u0001\u0002\u0001\u000e\u0001\u0003\u0001\u000e",
            "\u000a\u0017",
            "",
            "",
            "\u0001\u000c",
            "",
            "",
            "",
            "",
            "\u0001\u0019",
            "",
            "\u0001\u001b",
            "",
            "",
            "",
            "\u0001\u001c\u0004\uffff\u0001\u001c",
            "\u0001\u001d",
            "",
            "",
            "\u0027\u001e\u0001\u0012\uffd8\u001e",
            "",
            "\u0001\u0017\u0001\uffff\u000a\u0015\u000b\uffff\u0001\u0017"+
            "\u001f\uffff\u0001\u0017",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(StruxtJSLexer, {
    DFA25_eot:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA25_eotS),
    DFA25_eof:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA25_eofS),
    DFA25_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSLexer.DFA25_minS),
    DFA25_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSLexer.DFA25_maxS),
    DFA25_accept:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA25_acceptS),
    DFA25_special:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA25_specialS),
    DFA25_transition: (function() {
        var a = [],
            i,
            numStates = StruxtJSLexer.DFA25_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA25_transitionS[i]));
        }
        return a;
    })()
});

StruxtJSLexer.DFA25 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 25;
    this.eot = StruxtJSLexer.DFA25_eot;
    this.eof = StruxtJSLexer.DFA25_eof;
    this.min = StruxtJSLexer.DFA25_min;
    this.max = StruxtJSLexer.DFA25_max;
    this.accept = StruxtJSLexer.DFA25_accept;
    this.special = StruxtJSLexer.DFA25_special;
    this.transition = StruxtJSLexer.DFA25_transition;
};

org.antlr.lang.extend(StruxtJSLexer.DFA25, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | PRENS | POSTNS | OP | ID | XML | DOC | CDATA | STR | COMMENT | WS | INT | FLOAT | CHAR );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA25_19 = input.LA(1);

                            s = -1;
                            if ( (LA25_19=='\'') ) {s = 18;}

                            else if ( ((LA25_19>='\u0000' && LA25_19<='&')||(LA25_19>='(' && LA25_19<='\uFFFF')) ) {s = 30;}

                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 25, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 
})();