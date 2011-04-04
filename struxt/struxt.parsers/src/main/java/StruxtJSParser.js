// $ANTLR 3.3 Nov 30, 2010 12:45:30 /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g 2011-04-04 13:32:03

var StruxtJSParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    StruxtJSParser.superclass.constructor.call(this, input, state);

    this.dfa6 = new StruxtJSParser.DFA6(this);

         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(StruxtJSParser, {
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
// public class variables
var EOF= -1,
    T__17= 17,
    T__18= 18,
    T__19= 19,
    T__20= 20,
    T__21= 21,
    T__22= 22,
    T__23= 23,
    T__24= 24,
    T__25= 25,
    T__26= 26,
    STR= 4,
    ID= 5,
    INT= 6,
    FLOAT= 7,
    CHAR= 8,
    COMMENT= 9,
    WS= 10,
    ESC_SEQ= 11,
    STRING= 12,
    EXPONENT= 13,
    HEX_DIGIT= 14,
    UNICODE_ESC= 15,
    OCTAL_ESC= 16;

// public instance methods/vars
org.antlr.lang.extend(StruxtJSParser, org.antlr.runtime.Parser, {
        

    getTokenNames: function() { return StruxtJSParser.tokenNames; },
    getGrammarFileName: function() { return "/Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g"; }
});
org.antlr.lang.augmentObject(StruxtJSParser.prototype, {


    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:7:1: struxt : node EOF ;
    // $ANTLR start "struxt"
    struxt: function() {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:8:5: ( node EOF )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:8:7: node EOF
            this.pushFollow(StruxtJSParser.FOLLOW_node_in_struxt26);
            this.node();

            this.state._fsp--;

            this.match(this.input,EOF,StruxtJSParser.FOLLOW_EOF_in_struxt28); 



        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    },


    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:11:1: node : ( tag children | STR );
    // $ANTLR start "node"
    node: function() {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:12:5: ( tag children | STR )
            var alt1=2;
            var LA1_0 = this.input.LA(1);

            if ( (LA1_0==ID) ) {
                alt1=1;
            }
            else if ( (LA1_0==STR) ) {
                alt1=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 1, 0, this.input);

                throw nvae;
            }
            switch (alt1) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:12:7: tag children
                    this.pushFollow(StruxtJSParser.FOLLOW_tag_in_node45);
                    this.tag();

                    this.state._fsp--;

                    this.pushFollow(StruxtJSParser.FOLLOW_children_in_node47);
                    this.children();

                    this.state._fsp--;



                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:13:7: STR
                    this.match(this.input,STR,StruxtJSParser.FOLLOW_STR_in_node55); 


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    },


    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:16:1: tag : ID ( attributes )? ;
    // $ANTLR start "tag"
    tag: function() {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:17:5: ( ID ( attributes )? )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:17:7: ID ( attributes )?
            this.match(this.input,ID,StruxtJSParser.FOLLOW_ID_in_tag72); 
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:17:10: ( attributes )?
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( ((LA2_0>=STR && LA2_0<=CHAR)) ) {
                alt2=1;
            }
            switch (alt2) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:17:10: attributes
                    this.pushFollow(StruxtJSParser.FOLLOW_attributes_in_tag74);
                    this.attributes();

                    this.state._fsp--;



                    break;

            }




        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    },


    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:20:10: fragment children : ( '{' childs '}' | '[' childs ']' | '(' childs ')' | ( ':' ( node )* )? ( '.' | ';' ) );
    // $ANTLR start "children"
    children: function() {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:21:5: ( '{' childs '}' | '[' childs ']' | '(' childs ')' | ( ':' ( node )* )? ( '.' | ';' ) )
            var alt5=4;
            switch ( this.input.LA(1) ) {
            case 17:
                alt5=1;
                break;
            case 19:
                alt5=2;
                break;
            case 21:
                alt5=3;
                break;
            case 23:
            case 24:
            case 25:
                alt5=4;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 5, 0, this.input);

                throw nvae;
            }

            switch (alt5) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:21:7: '{' childs '}'
                    this.match(this.input,17,StruxtJSParser.FOLLOW_17_in_children93); 
                    this.pushFollow(StruxtJSParser.FOLLOW_childs_in_children95);
                    this.childs();

                    this.state._fsp--;

                    this.match(this.input,18,StruxtJSParser.FOLLOW_18_in_children97); 


                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:22:7: '[' childs ']'
                    this.match(this.input,19,StruxtJSParser.FOLLOW_19_in_children105); 
                    this.pushFollow(StruxtJSParser.FOLLOW_childs_in_children107);
                    this.childs();

                    this.state._fsp--;

                    this.match(this.input,20,StruxtJSParser.FOLLOW_20_in_children109); 


                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:23:7: '(' childs ')'
                    this.match(this.input,21,StruxtJSParser.FOLLOW_21_in_children117); 
                    this.pushFollow(StruxtJSParser.FOLLOW_childs_in_children119);
                    this.childs();

                    this.state._fsp--;

                    this.match(this.input,22,StruxtJSParser.FOLLOW_22_in_children121); 


                    break;
                case 4 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:24:7: ( ':' ( node )* )? ( '.' | ';' )
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:24:7: ( ':' ( node )* )?
                    var alt4=2;
                    var LA4_0 = this.input.LA(1);

                    if ( (LA4_0==23) ) {
                        alt4=1;
                    }
                    switch (alt4) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:24:8: ':' ( node )*
                            this.match(this.input,23,StruxtJSParser.FOLLOW_23_in_children130); 
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:24:12: ( node )*
                            loop3:
                            do {
                                var alt3=2;
                                var LA3_0 = this.input.LA(1);

                                if ( ((LA3_0>=STR && LA3_0<=ID)) ) {
                                    alt3=1;
                                }


                                switch (alt3) {
                                case 1 :
                                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:24:12: node
                                    this.pushFollow(StruxtJSParser.FOLLOW_node_in_children132);
                                    this.node();

                                    this.state._fsp--;



                                    break;

                                default :
                                    break loop3;
                                }
                            } while (true);



                            break;

                    }

                    if ( (this.input.LA(1)>=24 && this.input.LA(1)<=25) ) {
                        this.input.consume();
                        this.state.errorRecovery=false;
                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }



                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    },


    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:27:10: fragment childs : ( node )* ( tag )? ;
    // $ANTLR start "childs"
    childs: function() {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:28:5: ( ( node )* ( tag )? )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:28:7: ( node )* ( tag )?
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:28:7: ( node )*
            loop6:
            do {
                var alt6=2;
                alt6 = this.dfa6.predict(this.input);
                switch (alt6) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:28:7: node
                    this.pushFollow(StruxtJSParser.FOLLOW_node_in_childs160);
                    this.node();

                    this.state._fsp--;



                    break;

                default :
                    break loop6;
                }
            } while (true);

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:28:13: ( tag )?
            var alt7=2;
            var LA7_0 = this.input.LA(1);

            if ( (LA7_0==ID) ) {
                alt7=1;
            }
            switch (alt7) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:28:13: tag
                    this.pushFollow(StruxtJSParser.FOLLOW_tag_in_childs163);
                    this.tag();

                    this.state._fsp--;



                    break;

            }




        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    },


    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:31:10: fragment attribute : ( ID ( STR | INT | FLOAT | CHAR )? | ( STR | INT | FLOAT | CHAR ) ( ID )? );
    // $ANTLR start "attribute"
    attribute: function() {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:32:5: ( ID ( STR | INT | FLOAT | CHAR )? | ( STR | INT | FLOAT | CHAR ) ( ID )? )
            var alt10=2;
            var LA10_0 = this.input.LA(1);

            if ( (LA10_0==ID) ) {
                alt10=1;
            }
            else if ( (LA10_0==STR||(LA10_0>=INT && LA10_0<=CHAR)) ) {
                alt10=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 10, 0, this.input);

                throw nvae;
            }
            switch (alt10) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:32:7: ID ( STR | INT | FLOAT | CHAR )?
                    this.match(this.input,ID,StruxtJSParser.FOLLOW_ID_in_attribute183); 
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:32:10: ( STR | INT | FLOAT | CHAR )?
                    var alt8=2;
                    var LA8_0 = this.input.LA(1);

                    if ( (LA8_0==STR||(LA8_0>=INT && LA8_0<=CHAR)) ) {
                        alt8=1;
                    }
                    switch (alt8) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:
                            if ( this.input.LA(1)==STR||(this.input.LA(1)>=INT && this.input.LA(1)<=CHAR) ) {
                                this.input.consume();
                                this.state.errorRecovery=false;
                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                throw mse;
                            }



                            break;

                    }



                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:33:7: ( STR | INT | FLOAT | CHAR ) ( ID )?
                    if ( this.input.LA(1)==STR||(this.input.LA(1)>=INT && this.input.LA(1)<=CHAR) ) {
                        this.input.consume();
                        this.state.errorRecovery=false;
                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:33:34: ( ID )?
                    var alt9=2;
                    var LA9_0 = this.input.LA(1);

                    if ( (LA9_0==ID) ) {
                        alt9=1;
                    }
                    switch (alt9) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:33:34: ID
                            this.match(this.input,ID,StruxtJSParser.FOLLOW_ID_in_attribute224); 


                            break;

                    }



                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    },


    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:36:10: fragment attributes : attribute ( ',' attribute )* ;
    // $ANTLR start "attributes"
    attributes: function() {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:37:5: ( attribute ( ',' attribute )* )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:37:7: attribute ( ',' attribute )*
            this.pushFollow(StruxtJSParser.FOLLOW_attribute_in_attributes244);
            this.attribute();

            this.state._fsp--;

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:37:17: ( ',' attribute )*
            loop11:
            do {
                var alt11=2;
                var LA11_0 = this.input.LA(1);

                if ( (LA11_0==26) ) {
                    alt11=1;
                }


                switch (alt11) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:37:19: ',' attribute
                    this.match(this.input,26,StruxtJSParser.FOLLOW_26_in_attributes248); 
                    this.pushFollow(StruxtJSParser.FOLLOW_attribute_in_attributes250);
                    this.attribute();

                    this.state._fsp--;



                    break;

                default :
                    break loop11;
                }
            } while (true);




        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    }

    // Delegated rules




}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(StruxtJSParser, {
    DFA6_eotS:
        "\u000d\uffff",
    DFA6_eofS:
        "\u000d\uffff",
    DFA6_minS:
        "\u0002\u0004\u0002\uffff\u0001\u0004\u0001\u0005\u0001\u0011\u0001"+
    "\u0004\u0001\u0011\u0001\u0004\u0001\u0005\u0002\u0011",
    DFA6_maxS:
        "\u0001\u0016\u0001\u0019\u0002\uffff\u0003\u001a\u0001\u0008\u0005"+
    "\u001a",
    DFA6_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0009\uffff",
    DFA6_specialS:
        "\u000d\uffff}>",
    DFA6_transitionS: [
            "\u0001\u0003\u0001\u0001\u000c\uffff\u0001\u0002\u0001\uffff"+
            "\u0001\u0002\u0001\uffff\u0001\u0002",
            "\u0001\u0005\u0001\u0004\u0003\u0005\u0008\uffff\u0001\u0003"+
            "\u0001\u0002\u0001\u0003\u0001\u0002\u0001\u0003\u0001\u0002"+
            "\u0003\u0003",
            "",
            "",
            "\u0001\u0006\u0001\uffff\u0003\u0006\u0008\uffff\u0001\u0003"+
            "\u0001\u0002\u0001\u0003\u0001\u0002\u0001\u0003\u0001\u0002"+
            "\u0003\u0003\u0001\u0007",
            "\u0001\u0008\u000b\uffff\u0001\u0003\u0001\u0002\u0001\u0003"+
            "\u0001\u0002\u0001\u0003\u0001\u0002\u0003\u0003\u0001\u0007",
            "\u0001\u0003\u0001\u0002\u0001\u0003\u0001\u0002\u0001\u0003"+
            "\u0001\u0002\u0003\u0003\u0001\u0007",
            "\u0001\u000a\u0001\u0009\u0003\u000a",
            "\u0001\u0003\u0001\u0002\u0001\u0003\u0001\u0002\u0001\u0003"+
            "\u0001\u0002\u0003\u0003\u0001\u0007",
            "\u0001\u000b\u0001\uffff\u0003\u000b\u0008\uffff\u0001\u0003"+
            "\u0001\u0002\u0001\u0003\u0001\u0002\u0001\u0003\u0001\u0002"+
            "\u0003\u0003\u0001\u0007",
            "\u0001\u000c\u000b\uffff\u0001\u0003\u0001\u0002\u0001\u0003"+
            "\u0001\u0002\u0001\u0003\u0001\u0002\u0003\u0003\u0001\u0007",
            "\u0001\u0003\u0001\u0002\u0001\u0003\u0001\u0002\u0001\u0003"+
            "\u0001\u0002\u0003\u0003\u0001\u0007",
            "\u0001\u0003\u0001\u0002\u0001\u0003\u0001\u0002\u0001\u0003"+
            "\u0001\u0002\u0003\u0003\u0001\u0007"
    ]
});

org.antlr.lang.augmentObject(StruxtJSParser, {
    DFA6_eot:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA6_eotS),
    DFA6_eof:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA6_eofS),
    DFA6_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSParser.DFA6_minS),
    DFA6_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSParser.DFA6_maxS),
    DFA6_accept:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA6_acceptS),
    DFA6_special:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA6_specialS),
    DFA6_transition: (function() {
        var a = [],
            i,
            numStates = StruxtJSParser.DFA6_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA6_transitionS[i]));
        }
        return a;
    })()
});

StruxtJSParser.DFA6 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 6;
    this.eot = StruxtJSParser.DFA6_eot;
    this.eof = StruxtJSParser.DFA6_eof;
    this.min = StruxtJSParser.DFA6_min;
    this.max = StruxtJSParser.DFA6_max;
    this.accept = StruxtJSParser.DFA6_accept;
    this.special = StruxtJSParser.DFA6_special;
    this.transition = StruxtJSParser.DFA6_transition;
};

org.antlr.lang.extend(StruxtJSParser.DFA6, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 28:7: ( node )*";
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(StruxtJSParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "STR", "ID", "INT", "FLOAT", "CHAR", "COMMENT", "WS", "ESC_SEQ", "STRING", "EXPONENT", "HEX_DIGIT", "UNICODE_ESC", "OCTAL_ESC", "'{'", "'}'", "'['", "']'", "'('", "')'", "':'", "'.'", "';'", "','"],
    FOLLOW_node_in_struxt26: new org.antlr.runtime.BitSet([0x00000000, 0x00000000]),
    FOLLOW_EOF_in_struxt28: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_tag_in_node45: new org.antlr.runtime.BitSet([0x03AA0000, 0x00000000]),
    FOLLOW_children_in_node47: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STR_in_node55: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_tag72: new org.antlr.runtime.BitSet([0x000001F2, 0x00000000]),
    FOLLOW_attributes_in_tag74: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_17_in_children93: new org.antlr.runtime.BitSet([0x00040030, 0x00000000]),
    FOLLOW_childs_in_children95: new org.antlr.runtime.BitSet([0x00040000, 0x00000000]),
    FOLLOW_18_in_children97: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_19_in_children105: new org.antlr.runtime.BitSet([0x00100030, 0x00000000]),
    FOLLOW_childs_in_children107: new org.antlr.runtime.BitSet([0x00100000, 0x00000000]),
    FOLLOW_20_in_children109: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_21_in_children117: new org.antlr.runtime.BitSet([0x00400030, 0x00000000]),
    FOLLOW_childs_in_children119: new org.antlr.runtime.BitSet([0x00400000, 0x00000000]),
    FOLLOW_22_in_children121: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_23_in_children130: new org.antlr.runtime.BitSet([0x03000030, 0x00000000]),
    FOLLOW_node_in_children132: new org.antlr.runtime.BitSet([0x03000030, 0x00000000]),
    FOLLOW_set_in_children137: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_node_in_childs160: new org.antlr.runtime.BitSet([0x00000032, 0x00000000]),
    FOLLOW_tag_in_childs163: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_attribute183: new org.antlr.runtime.BitSet([0x000001D2, 0x00000000]),
    FOLLOW_set_in_attribute185: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_attribute208: new org.antlr.runtime.BitSet([0x00000022, 0x00000000]),
    FOLLOW_ID_in_attribute224: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_attribute_in_attributes244: new org.antlr.runtime.BitSet([0x04000002, 0x00000000]),
    FOLLOW_26_in_attributes248: new org.antlr.runtime.BitSet([0x000001F0, 0x00000000]),
    FOLLOW_attribute_in_attributes250: new org.antlr.runtime.BitSet([0x04000002, 0x00000000])
});

})();