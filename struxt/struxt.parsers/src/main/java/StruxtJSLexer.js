// $ANTLR 3.3 Nov 30, 2010 12:45:30 /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g 2011-04-04 13:32:03

var StruxtJSLexer = function(input, state) {
// alternate constructor @todo
// public StruxtJSLexer(CharStream input)
// public StruxtJSLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    this.dfa15 = new StruxtJSLexer.DFA15(this);
    this.dfa21 = new StruxtJSLexer.DFA21(this);
    StruxtJSLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(StruxtJSLexer, {
    EOF: -1,
    T__17: 17,
    T__18: 18,
    T__19: 19,
    T__20: 20,
    T__21: 21,
    T__22: 22,
    T__23: 23,
    T__24: 24,
    T__25: 25,
    T__26: 26,
    STR: 4,
    ID: 5,
    INT: 6,
    FLOAT: 7,
    CHAR: 8,
    COMMENT: 9,
    WS: 10,
    ESC_SEQ: 11,
    STRING: 12,
    EXPONENT: 13,
    HEX_DIGIT: 14,
    UNICODE_ESC: 15,
    OCTAL_ESC: 16
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(StruxtJSLexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    T__17 : 17,
    T__18 : 18,
    T__19 : 19,
    T__20 : 20,
    T__21 : 21,
    T__22 : 22,
    T__23 : 23,
    T__24 : 24,
    T__25 : 25,
    T__26 : 26,
    STR : 4,
    ID : 5,
    INT : 6,
    FLOAT : 7,
    CHAR : 8,
    COMMENT : 9,
    WS : 10,
    ESC_SEQ : 11,
    STRING : 12,
    EXPONENT : 13,
    HEX_DIGIT : 14,
    UNICODE_ESC : 15,
    OCTAL_ESC : 16,
    getGrammarFileName: function() { return "/Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g"; }
});
org.antlr.lang.augmentObject(StruxtJSLexer.prototype, {
    // $ANTLR start T__17
    mT__17: function()  {
        try {
            var _type = this.T__17;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:7:7: ( '{' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:7:9: '{'
            this.match('{'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__17",

    // $ANTLR start T__18
    mT__18: function()  {
        try {
            var _type = this.T__18;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:8:7: ( '}' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:8:9: '}'
            this.match('}'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__18",

    // $ANTLR start T__19
    mT__19: function()  {
        try {
            var _type = this.T__19;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:9:7: ( '[' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:9:9: '['
            this.match('['); 



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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:10:7: ( ']' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:10:9: ']'
            this.match(']'); 



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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:11:7: ( '(' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:11:9: '('
            this.match('('); 



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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:12:7: ( ')' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:12:9: ')'
            this.match(')'); 



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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:13:7: ( ':' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:13:9: ':'
            this.match(':'); 



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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:14:7: ( '.' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:14:9: '.'
            this.match('.'); 



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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:15:7: ( ';' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:15:9: ';'
            this.match(';'); 



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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:16:7: ( ',' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:16:9: ','
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__26",

    // $ANTLR start ID
    mID: function()  {
        try {
            var _type = this.ID;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:41:5: ( ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )* )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:41:7: ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:41:31: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( ((LA1_0>='0' && LA1_0<='9')||(LA1_0>='A' && LA1_0<='Z')||LA1_0=='_'||(LA1_0>='a' && LA1_0<='z')) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:
                    if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop1;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ID",

    // $ANTLR start STR
    mSTR: function()  {
        try {
            var _type = this.STR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:45:5: ( '\"' (~ ( '\"' ) )* '\"' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:45:8: '\"' (~ ( '\"' ) )* '\"'
            this.match('\"'); 
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:45:12: (~ ( '\"' ) )*
            loop2:
            do {
                var alt2=2;
                var LA2_0 = this.input.LA(1);

                if ( ((LA2_0>='\u0000' && LA2_0<='!')||(LA2_0>='#' && LA2_0<='\uFFFF')) ) {
                    alt2=1;
                }


                switch (alt2) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:45:12: ~ ( '\"' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop2;
                }
            } while (true);

            this.match('\"'); 



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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:49:5: ( '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n' | '/*' ( options {greedy=false; } : . )* '*/' )
            var alt6=2;
            var LA6_0 = this.input.LA(1);

            if ( (LA6_0=='/') ) {
                var LA6_1 = this.input.LA(2);

                if ( (LA6_1=='/') ) {
                    alt6=1;
                }
                else if ( (LA6_1=='*') ) {
                    alt6=2;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 6, 1, this.input);

                    throw nvae;
                }
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 6, 0, this.input);

                throw nvae;
            }
            switch (alt6) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:49:9: '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n'
                    this.match("//"); 

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:49:14: (~ ( '\\n' | '\\r' ) )*
                    loop3:
                    do {
                        var alt3=2;
                        var LA3_0 = this.input.LA(1);

                        if ( ((LA3_0>='\u0000' && LA3_0<='\t')||(LA3_0>='\u000B' && LA3_0<='\f')||(LA3_0>='\u000E' && LA3_0<='\uFFFF')) ) {
                            alt3=1;
                        }


                        switch (alt3) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:49:14: ~ ( '\\n' | '\\r' )
                            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='\uFFFF') ) {
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

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:49:28: ( '\\r' )?
                    var alt4=2;
                    var LA4_0 = this.input.LA(1);

                    if ( (LA4_0=='\r') ) {
                        alt4=1;
                    }
                    switch (alt4) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:49:28: '\\r'
                            this.match('\r'); 


                            break;

                    }

                    this.match('\n'); 
                    _channel=HIDDEN;


                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:50:9: '/*' ( options {greedy=false; } : . )* '*/'
                    this.match("/*"); 

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:50:14: ( options {greedy=false; } : . )*
                    loop5:
                    do {
                        var alt5=2;
                        var LA5_0 = this.input.LA(1);

                        if ( (LA5_0=='*') ) {
                            var LA5_1 = this.input.LA(2);

                            if ( (LA5_1=='/') ) {
                                alt5=2;
                            }
                            else if ( ((LA5_1>='\u0000' && LA5_1<='.')||(LA5_1>='0' && LA5_1<='\uFFFF')) ) {
                                alt5=1;
                            }


                        }
                        else if ( ((LA5_0>='\u0000' && LA5_0<=')')||(LA5_0>='+' && LA5_0<='\uFFFF')) ) {
                            alt5=1;
                        }


                        switch (alt5) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:50:42: .
                            this.matchAny(); 


                            break;

                        default :
                            break loop5;
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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:5: ( ( ' ' | '\\t' | '\\r' | '\\n' ) )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:9: ( ' ' | '\\t' | '\\r' | '\\n' )
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

    // $ANTLR start STRING
    mSTRING: function()  {
        try {
            var _type = this.STRING;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:62:5: ( '\"' ( ESC_SEQ | ~ ( '\\\\' | '\"' ) )* '\"' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:62:8: '\"' ( ESC_SEQ | ~ ( '\\\\' | '\"' ) )* '\"'
            this.match('\"'); 
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:62:12: ( ESC_SEQ | ~ ( '\\\\' | '\"' ) )*
            loop7:
            do {
                var alt7=3;
                var LA7_0 = this.input.LA(1);

                if ( (LA7_0=='\\') ) {
                    alt7=1;
                }
                else if ( ((LA7_0>='\u0000' && LA7_0<='!')||(LA7_0>='#' && LA7_0<='[')||(LA7_0>=']' && LA7_0<='\uFFFF')) ) {
                    alt7=2;
                }


                switch (alt7) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:62:14: ESC_SEQ
                    this.mESC_SEQ(); 


                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:62:24: ~ ( '\\\\' | '\"' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop7;
                }
            } while (true);

            this.match('\"'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STRING",

    // $ANTLR start INT
    mINT: function()  {
        try {
            var _type = this.INT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:65:5: ( ( '0' .. '9' )+ )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:65:7: ( '0' .. '9' )+
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:65:7: ( '0' .. '9' )+
            var cnt8=0;
            loop8:
            do {
                var alt8=2;
                var LA8_0 = this.input.LA(1);

                if ( ((LA8_0>='0' && LA8_0<='9')) ) {
                    alt8=1;
                }


                switch (alt8) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:65:7: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt8 >= 1 ) {
                        break loop8;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(8, this.input);
                        throw eee;
                }
                cnt8++;
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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:69:5: ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT )
            var alt15=3;
            alt15 = this.dfa15.predict(this.input);
            switch (alt15) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:69:9: ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )?
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:69:9: ( '0' .. '9' )+
                    var cnt9=0;
                    loop9:
                    do {
                        var alt9=2;
                        var LA9_0 = this.input.LA(1);

                        if ( ((LA9_0>='0' && LA9_0<='9')) ) {
                            alt9=1;
                        }


                        switch (alt9) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:69:10: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt9 >= 1 ) {
                                break loop9;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(9, this.input);
                                throw eee;
                        }
                        cnt9++;
                    } while (true);

                    this.match('.'); 
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:69:25: ( '0' .. '9' )*
                    loop10:
                    do {
                        var alt10=2;
                        var LA10_0 = this.input.LA(1);

                        if ( ((LA10_0>='0' && LA10_0<='9')) ) {
                            alt10=1;
                        }


                        switch (alt10) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:69:26: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            break loop10;
                        }
                    } while (true);

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:69:37: ( EXPONENT )?
                    var alt11=2;
                    var LA11_0 = this.input.LA(1);

                    if ( (LA11_0=='E'||LA11_0=='e') ) {
                        alt11=1;
                    }
                    switch (alt11) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:69:37: EXPONENT
                            this.mEXPONENT(); 


                            break;

                    }



                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:9: '.' ( '0' .. '9' )+ ( EXPONENT )?
                    this.match('.'); 
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:13: ( '0' .. '9' )+
                    var cnt12=0;
                    loop12:
                    do {
                        var alt12=2;
                        var LA12_0 = this.input.LA(1);

                        if ( ((LA12_0>='0' && LA12_0<='9')) ) {
                            alt12=1;
                        }


                        switch (alt12) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:14: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt12 >= 1 ) {
                                break loop12;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(12, this.input);
                                throw eee;
                        }
                        cnt12++;
                    } while (true);

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:25: ( EXPONENT )?
                    var alt13=2;
                    var LA13_0 = this.input.LA(1);

                    if ( (LA13_0=='E'||LA13_0=='e') ) {
                        alt13=1;
                    }
                    switch (alt13) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:70:25: EXPONENT
                            this.mEXPONENT(); 


                            break;

                    }



                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:71:9: ( '0' .. '9' )+ EXPONENT
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:71:9: ( '0' .. '9' )+
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
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:71:10: '0' .. '9'
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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:75:5: ( '\\'' ( ESC_SEQ | ~ ( '\\'' | '\\\\' ) ) '\\'' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:75:8: '\\'' ( ESC_SEQ | ~ ( '\\'' | '\\\\' ) ) '\\''
            this.match('\''); 
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:75:13: ( ESC_SEQ | ~ ( '\\'' | '\\\\' ) )
            var alt16=2;
            var LA16_0 = this.input.LA(1);

            if ( (LA16_0=='\\') ) {
                alt16=1;
            }
            else if ( ((LA16_0>='\u0000' && LA16_0<='&')||(LA16_0>='(' && LA16_0<='[')||(LA16_0>=']' && LA16_0<='\uFFFF')) ) {
                alt16=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 16, 0, this.input);

                throw nvae;
            }
            switch (alt16) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:75:15: ESC_SEQ
                    this.mESC_SEQ(); 


                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:75:25: ~ ( '\\'' | '\\\\' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='&')||(this.input.LA(1)>='(' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:80:5: ( ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+ )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:80:7: ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+
            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:80:17: ( '+' | '-' )?
            var alt17=2;
            var LA17_0 = this.input.LA(1);

            if ( (LA17_0=='+'||LA17_0=='-') ) {
                alt17=1;
            }
            switch (alt17) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:80:28: ( '0' .. '9' )+
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
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:80:29: '0' .. '9'
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




        }
        finally {
        }
    },
    // $ANTLR end "EXPONENT",

    // $ANTLR start HEX_DIGIT
    mHEX_DIGIT: function()  {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:85:5: ( ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' ) )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:85:7: ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' )
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

    // $ANTLR start ESC_SEQ
    mESC_SEQ: function()  {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:90:5: ( '\\\\' ( 'b' | 't' | 'n' | 'f' | 'r' | '\\\"' | '\\'' | '\\\\' ) | UNICODE_ESC | OCTAL_ESC )
            var alt19=3;
            var LA19_0 = this.input.LA(1);

            if ( (LA19_0=='\\') ) {
                switch ( this.input.LA(2) ) {
                case '\"':
                case '\'':
                case '\\':
                case 'b':
                case 'f':
                case 'n':
                case 'r':
                case 't':
                    alt19=1;
                    break;
                case 'u':
                    alt19=2;
                    break;
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                    alt19=3;
                    break;
                default:
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 19, 1, this.input);

                    throw nvae;
                }

            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 19, 0, this.input);

                throw nvae;
            }
            switch (alt19) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:90:9: '\\\\' ( 'b' | 't' | 'n' | 'f' | 'r' | '\\\"' | '\\'' | '\\\\' )
                    this.match('\\'); 
                    if ( this.input.LA(1)=='\"'||this.input.LA(1)=='\''||this.input.LA(1)=='\\'||this.input.LA(1)=='b'||this.input.LA(1)=='f'||this.input.LA(1)=='n'||this.input.LA(1)=='r'||this.input.LA(1)=='t' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:91:9: UNICODE_ESC
                    this.mUNICODE_ESC(); 


                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:92:9: OCTAL_ESC
                    this.mOCTAL_ESC(); 


                    break;

            }
        }
        finally {
        }
    },
    // $ANTLR end "ESC_SEQ",

    // $ANTLR start OCTAL_ESC
    mOCTAL_ESC: function()  {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:97:5: ( '\\\\' ( '0' .. '3' ) ( '0' .. '7' ) ( '0' .. '7' ) | '\\\\' ( '0' .. '7' ) ( '0' .. '7' ) | '\\\\' ( '0' .. '7' ) )
            var alt20=3;
            var LA20_0 = this.input.LA(1);

            if ( (LA20_0=='\\') ) {
                var LA20_1 = this.input.LA(2);

                if ( ((LA20_1>='0' && LA20_1<='3')) ) {
                    var LA20_2 = this.input.LA(3);

                    if ( ((LA20_2>='0' && LA20_2<='7')) ) {
                        var LA20_4 = this.input.LA(4);

                        if ( ((LA20_4>='0' && LA20_4<='7')) ) {
                            alt20=1;
                        }
                        else {
                            alt20=2;}
                    }
                    else {
                        alt20=3;}
                }
                else if ( ((LA20_1>='4' && LA20_1<='7')) ) {
                    var LA20_3 = this.input.LA(3);

                    if ( ((LA20_3>='0' && LA20_3<='7')) ) {
                        alt20=2;
                    }
                    else {
                        alt20=3;}
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 20, 1, this.input);

                    throw nvae;
                }
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 20, 0, this.input);

                throw nvae;
            }
            switch (alt20) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:97:9: '\\\\' ( '0' .. '3' ) ( '0' .. '7' ) ( '0' .. '7' )
                    this.match('\\'); 
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:97:14: ( '0' .. '3' )
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:97:15: '0' .. '3'
                    this.matchRange('0','3'); 



                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:97:25: ( '0' .. '7' )
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:97:26: '0' .. '7'
                    this.matchRange('0','7'); 



                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:97:36: ( '0' .. '7' )
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:97:37: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:98:9: '\\\\' ( '0' .. '7' ) ( '0' .. '7' )
                    this.match('\\'); 
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:98:14: ( '0' .. '7' )
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:98:15: '0' .. '7'
                    this.matchRange('0','7'); 



                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:98:25: ( '0' .. '7' )
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:98:26: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:99:9: '\\\\' ( '0' .. '7' )
                    this.match('\\'); 
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:99:14: ( '0' .. '7' )
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:99:15: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;

            }
        }
        finally {
        }
    },
    // $ANTLR end "OCTAL_ESC",

    // $ANTLR start UNICODE_ESC
    mUNICODE_ESC: function()  {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:104:5: ( '\\\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:104:9: '\\\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT
            this.match('\\'); 
            this.match('u'); 
            this.mHEX_DIGIT(); 
            this.mHEX_DIGIT(); 
            this.mHEX_DIGIT(); 
            this.mHEX_DIGIT(); 



        }
        finally {
        }
    },
    // $ANTLR end "UNICODE_ESC",

    mTokens: function() {
        // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:8: ( T__17 | T__18 | T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | ID | STR | COMMENT | WS | STRING | INT | FLOAT | CHAR )
        var alt21=18;
        alt21 = this.dfa21.predict(this.input);
        switch (alt21) {
            case 1 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:10: T__17
                this.mT__17(); 


                break;
            case 2 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:16: T__18
                this.mT__18(); 


                break;
            case 3 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:22: T__19
                this.mT__19(); 


                break;
            case 4 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:28: T__20
                this.mT__20(); 


                break;
            case 5 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:34: T__21
                this.mT__21(); 


                break;
            case 6 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:40: T__22
                this.mT__22(); 


                break;
            case 7 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:46: T__23
                this.mT__23(); 


                break;
            case 8 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:52: T__24
                this.mT__24(); 


                break;
            case 9 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:58: T__25
                this.mT__25(); 


                break;
            case 10 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:64: T__26
                this.mT__26(); 


                break;
            case 11 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:70: ID
                this.mID(); 


                break;
            case 12 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:73: STR
                this.mSTR(); 


                break;
            case 13 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:77: COMMENT
                this.mCOMMENT(); 


                break;
            case 14 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:85: WS
                this.mWS(); 


                break;
            case 15 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:88: STRING
                this.mSTRING(); 


                break;
            case 16 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:95: INT
                this.mINT(); 


                break;
            case 17 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:99: FLOAT
                this.mFLOAT(); 


                break;
            case 18 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:105: CHAR
                this.mCHAR(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(StruxtJSLexer, {
    DFA15_eotS:
        "\u0005\uffff",
    DFA15_eofS:
        "\u0005\uffff",
    DFA15_minS:
        "\u0002\u002e\u0003\uffff",
    DFA15_maxS:
        "\u0001\u0039\u0001\u0065\u0003\uffff",
    DFA15_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0001\u0003",
    DFA15_specialS:
        "\u0005\uffff}>",
    DFA15_transitionS: [
            "\u0001\u0002\u0001\uffff\u000a\u0001",
            "\u0001\u0003\u0001\uffff\u000a\u0001\u000b\uffff\u0001\u0004"+
            "\u001f\uffff\u0001\u0004",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(StruxtJSLexer, {
    DFA15_eot:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA15_eotS),
    DFA15_eof:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA15_eofS),
    DFA15_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSLexer.DFA15_minS),
    DFA15_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSLexer.DFA15_maxS),
    DFA15_accept:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA15_acceptS),
    DFA15_special:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA15_specialS),
    DFA15_transition: (function() {
        var a = [],
            i,
            numStates = StruxtJSLexer.DFA15_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA15_transitionS[i]));
        }
        return a;
    })()
});

StruxtJSLexer.DFA15 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 15;
    this.eot = StruxtJSLexer.DFA15_eot;
    this.eof = StruxtJSLexer.DFA15_eof;
    this.min = StruxtJSLexer.DFA15_min;
    this.max = StruxtJSLexer.DFA15_max;
    this.accept = StruxtJSLexer.DFA15_accept;
    this.special = StruxtJSLexer.DFA15_special;
    this.transition = StruxtJSLexer.DFA15_transition;
};

org.antlr.lang.extend(StruxtJSLexer.DFA15, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "68:1: FLOAT : ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT );";
    },
    dummy: null
});
org.antlr.lang.augmentObject(StruxtJSLexer, {
    DFA21_eotS:
        "\u0008\uffff\u0001\u0011\u0006\uffff\u0001\u0016\u0007\uffff\u0001"+
    "\u001c\u000d\uffff",
    DFA21_eofS:
        "\u0025\uffff",
    DFA21_minS:
        "\u0001\u0009\u0007\uffff\u0001\u0030\u0003\uffff\u0001\u0000\u0002"+
    "\uffff\u0001\u002e\u0003\uffff\u0001\u0000\u0001\uffff\u0001\u0000\u0001"+
    "\uffff\u0005\u0000\u0002\uffff\u0007\u0000",
    DFA21_maxS:
        "\u0001\u007d\u0007\uffff\u0001\u0039\u0003\uffff\u0001\uffff\u0002"+
    "\uffff\u0001\u0065\u0003\uffff\u0001\uffff\u0001\uffff\u0001\uffff\u0001"+
    "\uffff\u0005\uffff\u0002\uffff\u0007\uffff",
    DFA21_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\u0002\u0001\u0003\u0001\u0004\u0001"+
    "\u0005\u0001\u0006\u0001\u0007\u0001\uffff\u0001\u0009\u0001\u000a\u0001"+
    "\u000b\u0001\uffff\u0001\u000d\u0001\u000e\u0001\uffff\u0001\u0012\u0001"+
    "\u0008\u0001\u0011\u0001\uffff\u0001\u000c\u0001\uffff\u0001\u0010\u0005"+
    "\uffff\u0001\u000c\u0001\u000f\u0007\uffff",
    DFA21_specialS:
        "\u000c\uffff\u0001\u000a\u0006\uffff\u0001\u0001\u0001\uffff\u0001"+
    "\u000d\u0001\uffff\u0001\u0008\u0001\u000e\u0001\u000b\u0001\u0009\u0001"+
    "\u000c\u0002\uffff\u0001\u0004\u0001\u0000\u0001\u0007\u0001\u0003\u0001"+
    "\u0006\u0001\u0002\u0001\u0005}>",
    DFA21_transitionS: [
            "\u0002\u000e\u0002\uffff\u0001\u000e\u0012\uffff\u0001\u000e"+
            "\u0001\uffff\u0001\u000c\u0004\uffff\u0001\u0010\u0001\u0005"+
            "\u0001\u0006\u0002\uffff\u0001\u000a\u0001\uffff\u0001\u0008"+
            "\u0001\u000d\u000a\u000f\u0001\u0007\u0001\u0009\u0005\uffff"+
            "\u001a\u000b\u0001\u0003\u0001\uffff\u0001\u0004\u0001\uffff"+
            "\u0001\u000b\u0001\uffff\u001a\u000b\u0001\u0001\u0001\uffff"+
            "\u0001\u0002",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u000a\u0012",
            "",
            "",
            "",
            "\u0022\u0015\u0001\u0014\u0039\u0015\u0001\u0013\uffa3\u0015",
            "",
            "",
            "\u0001\u0012\u0001\uffff\u000a\u000f\u000b\uffff\u0001\u0012"+
            "\u001f\uffff\u0001\u0012",
            "",
            "",
            "",
            "\u0022\u001c\u0001\u0017\u0004\u001c\u0001\u0019\u0008\u001c"+
            "\u0004\u001a\u0004\u001b\u0024\u001c\u0001\u0019\u0005\u001c"+
            "\u0001\u0019\u0003\u001c\u0001\u0019\u0007\u001c\u0001\u0019"+
            "\u0003\u001c\u0001\u0019\u0001\u001c\u0001\u0019\u0001\u0018"+
            "\uff8a\u001c",
            "",
            "\u0022\u0015\u0001\u0014\u0039\u0015\u0001\u0013\uffa3\u0015",
            "",
            "\u0000\u001d",
            "\u0030\u001c\u000a\u001e\u0007\u001c\u0006\u001e\u001a\u001c"+
            "\u0006\u001e\uff99\u001c",
            "\u0022\u0015\u0001\u0014\u0039\u0015\u0001\u0013\uffa3\u0015",
            "\u0022\u0015\u0001\u0014\u000d\u0015\u0008\u001f\u0024\u0015"+
            "\u0001\u0013\uffa3\u0015",
            "\u0022\u0015\u0001\u0014\u000d\u0015\u0008\u0020\u0024\u0015"+
            "\u0001\u0013\uffa3\u0015",
            "",
            "",
            "\u0030\u001c\u000a\u0021\u0007\u001c\u0006\u0021\u001a\u001c"+
            "\u0006\u0021\uff99\u001c",
            "\u0022\u0015\u0001\u0014\u000d\u0015\u0008\u0022\u0024\u0015"+
            "\u0001\u0013\uffa3\u0015",
            "\u0022\u0015\u0001\u0014\u0039\u0015\u0001\u0013\uffa3\u0015",
            "\u0030\u001c\u000a\u0023\u0007\u001c\u0006\u0023\u001a\u001c"+
            "\u0006\u0023\uff99\u001c",
            "\u0022\u0015\u0001\u0014\u0039\u0015\u0001\u0013\uffa3\u0015",
            "\u0030\u001c\u000a\u0024\u0007\u001c\u0006\u0024\u001a\u001c"+
            "\u0006\u0024\uff99\u001c",
            "\u0022\u0015\u0001\u0014\u0039\u0015\u0001\u0013\uffa3\u0015"
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
        return "1:1: Tokens : ( T__17 | T__18 | T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | ID | STR | COMMENT | WS | STRING | INT | FLOAT | CHAR );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA21_31 = input.LA(1);

                            s = -1;
                            if ( (LA21_31=='\"') ) {s = 20;}

                            else if ( ((LA21_31>='0' && LA21_31<='7')) ) {s = 34;}

                            else if ( (LA21_31=='\\') ) {s = 19;}

                            else if ( ((LA21_31>='\u0000' && LA21_31<='!')||(LA21_31>='#' && LA21_31<='/')||(LA21_31>='8' && LA21_31<='[')||(LA21_31>=']' && LA21_31<='\uFFFF')) ) {s = 21;}

                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA21_19 = input.LA(1);

                            s = -1;
                            if ( (LA21_19=='\"') ) {s = 23;}

                            else if ( (LA21_19=='u') ) {s = 24;}

                            else if ( (LA21_19=='\''||LA21_19=='\\'||LA21_19=='b'||LA21_19=='f'||LA21_19=='n'||LA21_19=='r'||LA21_19=='t') ) {s = 25;}

                            else if ( ((LA21_19>='0' && LA21_19<='3')) ) {s = 26;}

                            else if ( ((LA21_19>='4' && LA21_19<='7')) ) {s = 27;}

                            else if ( ((LA21_19>='\u0000' && LA21_19<='!')||(LA21_19>='#' && LA21_19<='&')||(LA21_19>='(' && LA21_19<='/')||(LA21_19>='8' && LA21_19<='[')||(LA21_19>=']' && LA21_19<='a')||(LA21_19>='c' && LA21_19<='e')||(LA21_19>='g' && LA21_19<='m')||(LA21_19>='o' && LA21_19<='q')||LA21_19=='s'||(LA21_19>='v' && LA21_19<='\uFFFF')) ) {s = 28;}

                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA21_35 = input.LA(1);

                            s = -1;
                            if ( ((LA21_35>='0' && LA21_35<='9')||(LA21_35>='A' && LA21_35<='F')||(LA21_35>='a' && LA21_35<='f')) ) {s = 36;}

                            else if ( ((LA21_35>='\u0000' && LA21_35<='/')||(LA21_35>=':' && LA21_35<='@')||(LA21_35>='G' && LA21_35<='`')||(LA21_35>='g' && LA21_35<='\uFFFF')) ) {s = 28;}

                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA21_33 = input.LA(1);

                            s = -1;
                            if ( ((LA21_33>='0' && LA21_33<='9')||(LA21_33>='A' && LA21_33<='F')||(LA21_33>='a' && LA21_33<='f')) ) {s = 35;}

                            else if ( ((LA21_33>='\u0000' && LA21_33<='/')||(LA21_33>=':' && LA21_33<='@')||(LA21_33>='G' && LA21_33<='`')||(LA21_33>='g' && LA21_33<='\uFFFF')) ) {s = 28;}

                            if ( s>=0 ) return s;
                            break;
                        case 4 : 
                            var LA21_30 = input.LA(1);

                            s = -1;
                            if ( ((LA21_30>='0' && LA21_30<='9')||(LA21_30>='A' && LA21_30<='F')||(LA21_30>='a' && LA21_30<='f')) ) {s = 33;}

                            else if ( ((LA21_30>='\u0000' && LA21_30<='/')||(LA21_30>=':' && LA21_30<='@')||(LA21_30>='G' && LA21_30<='`')||(LA21_30>='g' && LA21_30<='\uFFFF')) ) {s = 28;}

                            if ( s>=0 ) return s;
                            break;
                        case 5 : 
                            var LA21_36 = input.LA(1);

                            s = -1;
                            if ( (LA21_36=='\"') ) {s = 20;}

                            else if ( (LA21_36=='\\') ) {s = 19;}

                            else if ( ((LA21_36>='\u0000' && LA21_36<='!')||(LA21_36>='#' && LA21_36<='[')||(LA21_36>=']' && LA21_36<='\uFFFF')) ) {s = 21;}

                            if ( s>=0 ) return s;
                            break;
                        case 6 : 
                            var LA21_34 = input.LA(1);

                            s = -1;
                            if ( (LA21_34=='\"') ) {s = 20;}

                            else if ( (LA21_34=='\\') ) {s = 19;}

                            else if ( ((LA21_34>='\u0000' && LA21_34<='!')||(LA21_34>='#' && LA21_34<='[')||(LA21_34>=']' && LA21_34<='\uFFFF')) ) {s = 21;}

                            if ( s>=0 ) return s;
                            break;
                        case 7 : 
                            var LA21_32 = input.LA(1);

                            s = -1;
                            if ( (LA21_32=='\"') ) {s = 20;}

                            else if ( (LA21_32=='\\') ) {s = 19;}

                            else if ( ((LA21_32>='\u0000' && LA21_32<='!')||(LA21_32>='#' && LA21_32<='[')||(LA21_32>=']' && LA21_32<='\uFFFF')) ) {s = 21;}

                            if ( s>=0 ) return s;
                            break;
                        case 8 : 
                            var LA21_23 = input.LA(1);

                            s = -1;
                            if ( ((LA21_23>='\u0000' && LA21_23<='\uFFFF')) ) {s = 29;}

                            else s = 28;

                            if ( s>=0 ) return s;
                            break;
                        case 9 : 
                            var LA21_26 = input.LA(1);

                            s = -1;
                            if ( (LA21_26=='\"') ) {s = 20;}

                            else if ( ((LA21_26>='0' && LA21_26<='7')) ) {s = 31;}

                            else if ( (LA21_26=='\\') ) {s = 19;}

                            else if ( ((LA21_26>='\u0000' && LA21_26<='!')||(LA21_26>='#' && LA21_26<='/')||(LA21_26>='8' && LA21_26<='[')||(LA21_26>=']' && LA21_26<='\uFFFF')) ) {s = 21;}

                            if ( s>=0 ) return s;
                            break;
                        case 10 : 
                            var LA21_12 = input.LA(1);

                            s = -1;
                            if ( (LA21_12=='\\') ) {s = 19;}

                            else if ( (LA21_12=='\"') ) {s = 20;}

                            else if ( ((LA21_12>='\u0000' && LA21_12<='!')||(LA21_12>='#' && LA21_12<='[')||(LA21_12>=']' && LA21_12<='\uFFFF')) ) {s = 21;}

                            if ( s>=0 ) return s;
                            break;
                        case 11 : 
                            var LA21_25 = input.LA(1);

                            s = -1;
                            if ( (LA21_25=='\"') ) {s = 20;}

                            else if ( (LA21_25=='\\') ) {s = 19;}

                            else if ( ((LA21_25>='\u0000' && LA21_25<='!')||(LA21_25>='#' && LA21_25<='[')||(LA21_25>=']' && LA21_25<='\uFFFF')) ) {s = 21;}

                            if ( s>=0 ) return s;
                            break;
                        case 12 : 
                            var LA21_27 = input.LA(1);

                            s = -1;
                            if ( (LA21_27=='\"') ) {s = 20;}

                            else if ( ((LA21_27>='0' && LA21_27<='7')) ) {s = 32;}

                            else if ( (LA21_27=='\\') ) {s = 19;}

                            else if ( ((LA21_27>='\u0000' && LA21_27<='!')||(LA21_27>='#' && LA21_27<='/')||(LA21_27>='8' && LA21_27<='[')||(LA21_27>=']' && LA21_27<='\uFFFF')) ) {s = 21;}

                            if ( s>=0 ) return s;
                            break;
                        case 13 : 
                            var LA21_21 = input.LA(1);

                            s = -1;
                            if ( (LA21_21=='\"') ) {s = 20;}

                            else if ( (LA21_21=='\\') ) {s = 19;}

                            else if ( ((LA21_21>='\u0000' && LA21_21<='!')||(LA21_21>='#' && LA21_21<='[')||(LA21_21>=']' && LA21_21<='\uFFFF')) ) {s = 21;}

                            if ( s>=0 ) return s;
                            break;
                        case 14 : 
                            var LA21_24 = input.LA(1);

                            s = -1;
                            if ( ((LA21_24>='0' && LA21_24<='9')||(LA21_24>='A' && LA21_24<='F')||(LA21_24>='a' && LA21_24<='f')) ) {s = 30;}

                            else if ( ((LA21_24>='\u0000' && LA21_24<='/')||(LA21_24>=':' && LA21_24<='@')||(LA21_24>='G' && LA21_24<='`')||(LA21_24>='g' && LA21_24<='\uFFFF')) ) {s = 28;}

                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 21, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 
})();