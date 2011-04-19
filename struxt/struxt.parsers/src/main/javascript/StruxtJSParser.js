// $ANTLR 3.3 Nov 30, 2010 12:45:30 /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g 2011-04-19 00:14:15

var StruxtJSParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    StruxtJSParser.superclass.constructor.call(this, input, state);

    this.dfa8 = new StruxtJSParser.DFA8(this);
    this.dfa15 = new StruxtJSParser.DFA15(this);

         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(StruxtJSParser, {
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
// public class variables
var EOF= -1,
    T__19= 19,
    T__20= 20,
    T__21= 21,
    T__22= 22,
    T__23= 23,
    T__24= 24,
    T__25= 25,
    T__26= 26,
    T__27= 27,
    T__28= 28,
    DOC= 4,
    XML= 5,
    CDATA= 6,
    OP= 7,
    PRENS= 8,
    ID= 9,
    POSTNS= 10,
    STR= 11,
    INT= 12,
    FLOAT= 13,
    CHAR= 14,
    COMMENT= 15,
    WS= 16,
    EXPONENT= 17,
    HEX_DIGIT= 18;

// public instance methods/vars
org.antlr.lang.extend(StruxtJSParser, org.antlr.runtime.Parser, {
        

    getTokenNames: function() { return StruxtJSParser.tokenNames; },
    getGrammarFileName: function() { return "/Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g"; }
});
org.antlr.lang.augmentObject(StruxtJSParser.prototype, {


    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:7:1: struxt returns [StruxtJSParser self] : (xml= xmldecl )? (doctype= DOC )? node EOF ;
    // $ANTLR start "struxt"
    struxt: function() {
        var self = null;

        var doctype = null;

        try {
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:8:5: ( (xml= xmldecl )? (doctype= DOC )? node EOF )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:8:7: (xml= xmldecl )? (doctype= DOC )? node EOF
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:8:10: (xml= xmldecl )?
            var alt1=2;
            var LA1_0 = this.input.LA(1);

            if ( (LA1_0==XML) ) {
                alt1=1;
            }
            switch (alt1) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:8:10: xml= xmldecl
                    this.pushFollow(StruxtJSParser.FOLLOW_xmldecl_in_struxt32);
                    this.xmldecl();

                    this.state._fsp--;



                    break;

            }

            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:9:14: (doctype= DOC )?
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( (LA2_0==DOC) ) {
                alt2=1;
            }
            switch (alt2) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:9:14: doctype= DOC
                    doctype=this.match(this.input,DOC,StruxtJSParser.FOLLOW_DOC_in_struxt43); 


                    break;

            }

            this.pushFollow(StruxtJSParser.FOLLOW_node_in_struxt52);
            this.node();

            this.state._fsp--;

            this.match(this.input,EOF,StruxtJSParser.FOLLOW_EOF_in_struxt54); 



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
        return self;
    },


    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:13:1: xmldecl : XML attributes '.' ;
    // $ANTLR start "xmldecl"
    xmldecl: function() {
        try {
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:14:5: ( XML attributes '.' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:14:7: XML attributes '.'
            this.match(this.input,XML,StruxtJSParser.FOLLOW_XML_in_xmldecl71); 
            this.pushFollow(StruxtJSParser.FOLLOW_attributes_in_xmldecl73);
            this.attributes();

            this.state._fsp--;

            this.match(this.input,19,StruxtJSParser.FOLLOW_19_in_xmldecl75); 



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


    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:17:1: node : ( tag children | text= value | cdata= CDATA );
    // $ANTLR start "node"
    node: function() {
        var cdata = null;
         var text = null;

        try {
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:18:5: ( tag children | text= value | cdata= CDATA )
            var alt3=3;
            switch ( this.input.LA(1) ) {
            case ID:
                alt3=1;
                break;
            case STR:
            case INT:
            case FLOAT:
            case CHAR:
                alt3=2;
                break;
            case CDATA:
                alt3=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 3, 0, this.input);

                throw nvae;
            }

            switch (alt3) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:18:7: tag children
                    this.pushFollow(StruxtJSParser.FOLLOW_tag_in_node92);
                    this.tag();

                    this.state._fsp--;

                    this.pushFollow(StruxtJSParser.FOLLOW_children_in_node94);
                    this.children();

                    this.state._fsp--;



                    break;
                case 2 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:19:7: text= value
                    this.pushFollow(StruxtJSParser.FOLLOW_value_in_node104);
                    text=this.value();

                    this.state._fsp--;



                    break;
                case 3 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:20:7: cdata= CDATA
                    cdata=this.match(this.input,CDATA,StruxtJSParser.FOLLOW_CDATA_in_node114); 


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


    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:23:1: tag : n= name ( attributes )? ;
    // $ANTLR start "tag"
    tag: function() {
         var n = null;

        try {
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:24:5: (n= name ( attributes )? )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:24:7: n= name ( attributes )?
            this.pushFollow(StruxtJSParser.FOLLOW_name_in_tag133);
            n=this.name();

            this.state._fsp--;

            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:24:14: ( attributes )?
            var alt4=2;
            var LA4_0 = this.input.LA(1);

            if ( (LA4_0==OP||LA4_0==ID||(LA4_0>=STR && LA4_0<=CHAR)||LA4_0==25||LA4_0==27) ) {
                alt4=1;
            }
            switch (alt4) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:24:14: attributes
                    this.pushFollow(StruxtJSParser.FOLLOW_attributes_in_tag135);
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


    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:27:10: fragment children : ( '{' childs '}' | ( ':' ( node )* )? ( '.' | ';' | EOF ) );
    // $ANTLR start "children"
    children: function() {
        try {
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:28:5: ( '{' childs '}' | ( ':' ( node )* )? ( '.' | ';' | EOF ) )
            var alt7=2;
            var LA7_0 = this.input.LA(1);

            if ( (LA7_0==20) ) {
                alt7=1;
            }
            else if ( (LA7_0==EOF||LA7_0==19||(LA7_0>=22 && LA7_0<=23)) ) {
                alt7=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 7, 0, this.input);

                throw nvae;
            }
            switch (alt7) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:28:7: '{' childs '}'
                    this.match(this.input,20,StruxtJSParser.FOLLOW_20_in_children154); 
                    this.pushFollow(StruxtJSParser.FOLLOW_childs_in_children156);
                    this.childs();

                    this.state._fsp--;

                    this.match(this.input,21,StruxtJSParser.FOLLOW_21_in_children158); 


                    break;
                case 2 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:29:7: ( ':' ( node )* )? ( '.' | ';' | EOF )
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:29:7: ( ':' ( node )* )?
                    var alt6=2;
                    var LA6_0 = this.input.LA(1);

                    if ( (LA6_0==22) ) {
                        alt6=1;
                    }
                    switch (alt6) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:29:8: ':' ( node )*
                            this.match(this.input,22,StruxtJSParser.FOLLOW_22_in_children167); 
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:29:12: ( node )*
                            loop5:
                            do {
                                var alt5=2;
                                var LA5_0 = this.input.LA(1);

                                if ( (LA5_0==CDATA||LA5_0==ID||(LA5_0>=STR && LA5_0<=CHAR)) ) {
                                    alt5=1;
                                }


                                switch (alt5) {
                                case 1 :
                                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:29:12: node
                                    this.pushFollow(StruxtJSParser.FOLLOW_node_in_children169);
                                    this.node();

                                    this.state._fsp--;



                                    break;

                                default :
                                    break loop5;
                                }
                            } while (true);



                            break;

                    }

                    if ( this.input.LA(1)==EOF||this.input.LA(1)==19||this.input.LA(1)==23 ) {
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


    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:32:10: fragment childs : ( node )* (nodename= tag )? ;
    // $ANTLR start "childs"
    childs: function() {
        try {
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:33:5: ( ( node )* (nodename= tag )? )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:33:7: ( node )* (nodename= tag )?
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:33:7: ( node )*
            loop8:
            do {
                var alt8=2;
                alt8 = this.dfa8.predict(this.input);
                switch (alt8) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:33:7: node
                    this.pushFollow(StruxtJSParser.FOLLOW_node_in_childs199);
                    this.node();

                    this.state._fsp--;



                    break;

                default :
                    break loop8;
                }
            } while (true);

            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:33:21: (nodename= tag )?
            var alt9=2;
            var LA9_0 = this.input.LA(1);

            if ( (LA9_0==ID) ) {
                alt9=1;
            }
            switch (alt9) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:33:21: nodename= tag
                    this.pushFollow(StruxtJSParser.FOLLOW_tag_in_childs204);
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


    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:36:10: fragment attribute : (n= name (o= OP )? (v= value )? | v= value (o= OP )? (n= name )? | n= name o= OP n1= name | o= OP (n= name | v= value ) );
    // $ANTLR start "attribute"
    attribute: function() {
        var o = null;
         var n = null;
         var v = null;
         var n1 = null;

        try {
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:37:5: (n= name (o= OP )? (v= value )? | v= value (o= OP )? (n= name )? | n= name o= OP n1= name | o= OP (n= name | v= value ) )
            var alt15=4;
            alt15 = this.dfa15.predict(this.input);
            switch (alt15) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:37:7: n= name (o= OP )? (v= value )?
                    this.pushFollow(StruxtJSParser.FOLLOW_name_in_attribute226);
                    n=this.name();

                    this.state._fsp--;

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:37:15: (o= OP )?
                    var alt10=2;
                    var LA10_0 = this.input.LA(1);

                    if ( (LA10_0==OP) ) {
                        alt10=1;
                    }
                    switch (alt10) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:37:15: o= OP
                            o=this.match(this.input,OP,StruxtJSParser.FOLLOW_OP_in_attribute230); 


                            break;

                    }

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:37:21: (v= value )?
                    var alt11=2;
                    var LA11_0 = this.input.LA(1);

                    if ( ((LA11_0>=STR && LA11_0<=CHAR)) ) {
                        alt11=1;
                    }
                    switch (alt11) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:37:21: v= value
                            this.pushFollow(StruxtJSParser.FOLLOW_value_in_attribute235);
                            v=this.value();

                            this.state._fsp--;



                            break;

                    }



                    break;
                case 2 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:38:7: v= value (o= OP )? (n= name )?
                    this.pushFollow(StruxtJSParser.FOLLOW_value_in_attribute246);
                    v=this.value();

                    this.state._fsp--;

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:38:16: (o= OP )?
                    var alt12=2;
                    var LA12_0 = this.input.LA(1);

                    if ( (LA12_0==OP) ) {
                        alt12=1;
                    }
                    switch (alt12) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:38:16: o= OP
                            o=this.match(this.input,OP,StruxtJSParser.FOLLOW_OP_in_attribute250); 


                            break;

                    }

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:38:22: (n= name )?
                    var alt13=2;
                    var LA13_0 = this.input.LA(1);

                    if ( (LA13_0==ID) ) {
                        alt13=1;
                    }
                    switch (alt13) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:38:22: n= name
                            this.pushFollow(StruxtJSParser.FOLLOW_name_in_attribute255);
                            n=this.name();

                            this.state._fsp--;



                            break;

                    }



                    break;
                case 3 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:39:7: n= name o= OP n1= name
                    this.pushFollow(StruxtJSParser.FOLLOW_name_in_attribute266);
                    n=this.name();

                    this.state._fsp--;

                    o=this.match(this.input,OP,StruxtJSParser.FOLLOW_OP_in_attribute270); 
                    this.pushFollow(StruxtJSParser.FOLLOW_name_in_attribute274);
                    n1=this.name();

                    this.state._fsp--;



                    break;
                case 4 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:40:7: o= OP (n= name | v= value )
                    o=this.match(this.input,OP,StruxtJSParser.FOLLOW_OP_in_attribute284); 
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:40:12: (n= name | v= value )
                    var alt14=2;
                    var LA14_0 = this.input.LA(1);

                    if ( (LA14_0==ID) ) {
                        alt14=1;
                    }
                    else if ( ((LA14_0>=STR && LA14_0<=CHAR)) ) {
                        alt14=2;
                    }
                    else {
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 14, 0, this.input);

                        throw nvae;
                    }
                    switch (alt14) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:40:13: n= name
                            this.pushFollow(StruxtJSParser.FOLLOW_name_in_attribute289);
                            n=this.name();

                            this.state._fsp--;



                            break;
                        case 2 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:40:20: v= value
                            this.pushFollow(StruxtJSParser.FOLLOW_value_in_attribute293);
                            v=this.value();

                            this.state._fsp--;



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

    // inline static return class
    name_return: (function() {
        StruxtJSParser.name_return = function(){};
        org.antlr.lang.extend(StruxtJSParser.name_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
        });
        return;
    })(),

    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:43:10: fragment name returns [Token namespace, Token nodename] : (s= ns PRENS n= ID | n= ID ( POSTNS s= ns )? ) ;
    // $ANTLR start "name"
    name: function() {
        var retval = new StruxtJSParser.name_return();
        retval.start = this.input.LT(1);

        var n = null;
         var s = null;

        try {
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:44:5: ( (s= ns PRENS n= ID | n= ID ( POSTNS s= ns )? ) )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:44:7: (s= ns PRENS n= ID | n= ID ( POSTNS s= ns )? )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:44:7: (s= ns PRENS n= ID | n= ID ( POSTNS s= ns )? )
            var alt17=2;
            var LA17_0 = this.input.LA(1);

            if ( (LA17_0==ID) ) {
                var LA17_1 = this.input.LA(2);

                if ( (LA17_1==PRENS) ) {
                    alt17=1;
                }
                else if ( (LA17_1==OP||(LA17_1>=ID && LA17_1<=CHAR)||(LA17_1>=19 && LA17_1<=28)) ) {
                    alt17=2;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 17, 1, this.input);

                    throw nvae;
                }
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 17, 0, this.input);

                throw nvae;
            }
            switch (alt17) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:44:8: s= ns PRENS n= ID
                    this.pushFollow(StruxtJSParser.FOLLOW_ns_in_name320);
                    s=this.ns();

                    this.state._fsp--;

                    this.match(this.input,PRENS,StruxtJSParser.FOLLOW_PRENS_in_name322); 
                    n=this.match(this.input,ID,StruxtJSParser.FOLLOW_ID_in_name326); 


                    break;
                case 2 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:44:26: n= ID ( POSTNS s= ns )?
                    n=this.match(this.input,ID,StruxtJSParser.FOLLOW_ID_in_name332); 
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:44:31: ( POSTNS s= ns )?
                    var alt16=2;
                    var LA16_0 = this.input.LA(1);

                    if ( (LA16_0==POSTNS) ) {
                        alt16=1;
                    }
                    switch (alt16) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:44:33: POSTNS s= ns
                            this.match(this.input,POSTNS,StruxtJSParser.FOLLOW_POSTNS_in_name336); 
                            this.pushFollow(StruxtJSParser.FOLLOW_ns_in_name340);
                            s=this.ns();

                            this.state._fsp--;



                            break;

                    }



                    break;

            }




            retval.stop = this.input.LT(-1);

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
        return retval;
    },


    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:47:10: fragment ns returns [Token namespace] : s= ID ;
    // $ANTLR start "ns"
    ns: function() {
        var namespace = null;

        var s = null;

        try {
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:48:5: (s= ID )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:48:7: s= ID
            s=this.match(this.input,ID,StruxtJSParser.FOLLOW_ID_in_ns368); 



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
        return namespace;
    },


    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:51:10: fragment value returns [String s] : v= ( STR | INT | FLOAT | CHAR ) ;
    // $ANTLR start "value"
    value: function() {
        var s = null;

        var v = null;

        try {
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:52:5: (v= ( STR | INT | FLOAT | CHAR ) )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:52:7: v= ( STR | INT | FLOAT | CHAR )
            v=this.input.LT(1);
            if ( (this.input.LA(1)>=STR && this.input.LA(1)<=CHAR) ) {
                this.input.consume();
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
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
        return s;
    },


    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:55:10: fragment attributes : ( attribute ( ',' attribute )* | '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')' | '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']' );
    // $ANTLR start "attributes"
    attributes: function() {
        try {
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:56:5: ( attribute ( ',' attribute )* | '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')' | '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']' )
            var alt21=3;
            switch ( this.input.LA(1) ) {
            case OP:
            case ID:
            case STR:
            case INT:
            case FLOAT:
            case CHAR:
                alt21=1;
                break;
            case 25:
                alt21=2;
                break;
            case 27:
                alt21=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 21, 0, this.input);

                throw nvae;
            }

            switch (alt21) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:56:7: attribute ( ',' attribute )*
                    this.pushFollow(StruxtJSParser.FOLLOW_attribute_in_attributes426);
                    this.attribute();

                    this.state._fsp--;

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:56:17: ( ',' attribute )*
                    loop18:
                    do {
                        var alt18=2;
                        var LA18_0 = this.input.LA(1);

                        if ( (LA18_0==24) ) {
                            alt18=1;
                        }


                        switch (alt18) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:56:19: ',' attribute
                            this.match(this.input,24,StruxtJSParser.FOLLOW_24_in_attributes430); 
                            this.pushFollow(StruxtJSParser.FOLLOW_attribute_in_attributes432);
                            this.attribute();

                            this.state._fsp--;



                            break;

                        default :
                            break loop18;
                        }
                    } while (true);



                    break;
                case 2 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:57:7: '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')'
                    this.match(this.input,25,StruxtJSParser.FOLLOW_25_in_attributes442); 
                    this.pushFollow(StruxtJSParser.FOLLOW_attribute_in_attributes444);
                    this.attribute();

                    this.state._fsp--;

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:57:21: ( ( ',' | ';' | '.' ) attribute )*
                    loop19:
                    do {
                        var alt19=2;
                        var LA19_0 = this.input.LA(1);

                        if ( (LA19_0==19||(LA19_0>=23 && LA19_0<=24)) ) {
                            alt19=1;
                        }


                        switch (alt19) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:57:23: ( ',' | ';' | '.' ) attribute
                            if ( this.input.LA(1)==19||(this.input.LA(1)>=23 && this.input.LA(1)<=24) ) {
                                this.input.consume();
                                this.state.errorRecovery=false;
                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                throw mse;
                            }

                            this.pushFollow(StruxtJSParser.FOLLOW_attribute_in_attributes456);
                            this.attribute();

                            this.state._fsp--;



                            break;

                        default :
                            break loop19;
                        }
                    } while (true);

                    this.match(this.input,26,StruxtJSParser.FOLLOW_26_in_attributes460); 


                    break;
                case 3 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:58:7: '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']'
                    this.match(this.input,27,StruxtJSParser.FOLLOW_27_in_attributes468); 
                    this.pushFollow(StruxtJSParser.FOLLOW_attribute_in_attributes470);
                    this.attribute();

                    this.state._fsp--;

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:58:21: ( ( ',' | ';' | '.' ) attribute )*
                    loop20:
                    do {
                        var alt20=2;
                        var LA20_0 = this.input.LA(1);

                        if ( (LA20_0==19||(LA20_0>=23 && LA20_0<=24)) ) {
                            alt20=1;
                        }


                        switch (alt20) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:58:23: ( ',' | ';' | '.' ) attribute
                            if ( this.input.LA(1)==19||(this.input.LA(1)>=23 && this.input.LA(1)<=24) ) {
                                this.input.consume();
                                this.state.errorRecovery=false;
                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                throw mse;
                            }

                            this.pushFollow(StruxtJSParser.FOLLOW_attribute_in_attributes482);
                            this.attribute();

                            this.state._fsp--;



                            break;

                        default :
                            break loop20;
                        }
                    } while (true);

                    this.match(this.input,28,StruxtJSParser.FOLLOW_28_in_attributes486); 


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
    }

    // Delegated rules




}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(StruxtJSParser, {
    DFA8_eotS:
        "\u00ab\uffff",
    DFA8_eofS:
        "\u0001\uffff\u0001\u0003\u0004\uffff\u0002\u0003\u0003\uffff\u0002"+
    "\u0003\u0002\uffff\u0002\u0003\u0001\uffff\u0004\u0003\u0006\uffff\u0005"+
    "\u0003\u000a\uffff\u0001\u0003\u0009\uffff\u0001\u0003\u0008\uffff\u000a"+
    "\u0003\u0014\uffff\u0005\u0003\u0022\uffff\u0004\u0003\u0012\uffff\u0002"+
    "\u0003\u0010\uffff",
    DFA8_minS:
        "\u0001\u0006\u0001\u0007\u0002\uffff\u0002\u0009\u0002\u0007\u0001"+
    "\u0009\u0004\u0007\u0003\u0009\u0001\u0013\u0001\u0007\u0001\u0009\u0002"+
    "\u0008\u0001\u0013\u0002\u0007\u0001\u0009\u0002\u0007\u0001\u0009\u0002"+
    "\u0007\u0001\u0008\u0002\u0007\u0008\u0009\u0001\u0013\u0001\u0007\u0001"+
    "\u0013\u0001\u0009\u0002\u0008\u0001\u0013\u0003\u0009\u0001\u0013\u0001"+
    "\u0007\u0001\u0013\u0001\u0009\u0002\u0008\u0001\u0013\u0005\u0009\u0001"+
    "\u0013\u0001\u0009\u0002\u0008\u0005\u0013\u0002\u0007\u0001\u0008\u0002"+
    "\u0007\u0005\u0009\u0002\u0007\u0001\u0008\u0002\u0007\u0005\u0009\u0002"+
    "\u0013\u0002\u0007\u0001\u0008\u0009\u0009\u0001\u0013\u0001\u0009\u0002"+
    "\u0008\u0005\u0013\u0005\u0009\u0001\u0013\u0001\u0009\u0002\u0008\u0005"+
    "\u0013\u0002\u0009\u0006\u0013\u0002\u0007\u0001\u0008\u0004\u0009\u0002"+
    "\u0013\u0002\u0007\u0001\u0008\u0004\u0009\u0002\u0013\u0002\u0009\u0004"+
    "\u0013\u0002\u0009\u0008\u0013",
    DFA8_maxS:
        "\u0001\u0015\u0001\u001b\u0002\uffff\u0002\u0009\u0002\u0018\u0003"+
    "\u000e\u0002\u001b\u0002\u0009\u0002\u0018\u0001\u000e\u0004\u0018\u0002"+
    "\u001a\u0001\u000e\u0002\u001c\u0001\u000e\u0005\u0018\u0001\u000e\u0006"+
    "\u0009\u0002\u001a\u0001\u000e\u0001\u0017\u0004\u001a\u0002\u0009\u0002"+
    "\u001c\u0001\u000e\u0001\u0017\u0004\u001c\u0004\u0009\u000a\u0018\u0005"+
    "\u001a\u0001\u000e\u0004\u0009\u0005\u001c\u0001\u000e\u0004\u0009\u0005"+
    "\u0018\u0008\u0009\u000a\u001a\u0004\u0009\u000a\u001c\u0002\u0009\u0004"+
    "\u0018\u0005\u001a\u0004\u0009\u0005\u001c\u0004\u0009\u0002\u0018\u0002"+
    "\u0009\u0004\u001a\u0002\u0009\u0004\u001c\u0002\u001a\u0002\u001c",
    DFA8_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u00a7\uffff",
    DFA8_specialS:
        "\u00ab\uffff}>",
    DFA8_transitionS: [
            "\u0001\u0003\u0002\uffff\u0001\u0001\u0001\uffff\u0004\u0003"+
            "\u0006\uffff\u0001\u0002",
            "\u0001\u0008\u0001\u0004\u0001\u0006\u0001\u0005\u0004\u0007"+
            "\u0004\uffff\u0002\u0003\u0001\u0002\u0002\u0003\u0001\uffff"+
            "\u0001\u0009\u0001\uffff\u0001\u000a",
            "",
            "",
            "\u0001\u000b",
            "\u0001\u000c",
            "\u0001\u000f\u0001\u000d\u0001\uffff\u0001\u000e\u0004\u0010"+
            "\u0004\uffff\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u0012\u0001\uffff\u0001\u0013\u0009\uffff\u0002\u0003"+
            "\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u0014\u0001\uffff\u0004\u0015",
            "\u0001\u0018\u0001\uffff\u0001\u0016\u0001\uffff\u0004\u0017",
            "\u0001\u001b\u0001\uffff\u0001\u0019\u0001\uffff\u0004\u001a",
            "\u0001\u0008\u0001\uffff\u0001\u0006\u0001\uffff\u0004\u0007"+
            "\u0004\uffff\u0002\u0003\u0001\u0002\u0002\u0003\u0001\uffff"+
            "\u0001\u0009\u0001\uffff\u0001\u000a",
            "\u0001\u0008\u0001\uffff\u0001\u0006\u0001\uffff\u0004\u0007"+
            "\u0004\uffff\u0002\u0003\u0001\u0002\u0002\u0003\u0001\uffff"+
            "\u0001\u0009\u0001\uffff\u0001\u000a",
            "\u0001\u001c",
            "\u0001\u001d",
            "\u0001\u001e\u0001\uffff\u0004\u0010\u0004\uffff\u0002\u0003"+
            "\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u0021\u0001\uffff\u0001\u001f\u0001\uffff\u0004\u0020",
            "\u0001\u0013\u0009\uffff\u0002\u0003\u0001\u0002\u0002\u0003"+
            "\u0001\u0011",
            "\u0001\u0022\u0001\uffff\u0001\u0023\u0008\uffff\u0002\u0003"+
            "\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u0024\u0001\uffff\u0001\u0025\u0008\uffff\u0002\u0003"+
            "\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u0028\u0001\u0026\u0001\uffff\u0001\u0027\u0004\u0029"+
            "\u0004\uffff\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff"+
            "\u0001\u002b",
            "\u0001\u002c\u0001\uffff\u0001\u002d\u0009\uffff\u0001\u002a"+
            "\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u002e\u0001\uffff\u0004\u002f",
            "\u0001\u0032\u0001\u0030\u0001\uffff\u0001\u0031\u0004\u0033"+
            "\u0004\uffff\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff"+
            "\u0001\u0035",
            "\u0001\u0036\u0001\uffff\u0001\u0037\u0009\uffff\u0001\u0034"+
            "\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0038\u0001\uffff\u0004\u0039",
            "\u0001\u000f\u0003\uffff\u0004\u0010\u0004\uffff\u0002\u0003"+
            "\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u000f\u0003\uffff\u0004\u0010\u0004\uffff\u0002\u0003"+
            "\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u003a\u0001\uffff\u0001\u003b\u0008\uffff\u0002\u0003"+
            "\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u003e\u0001\u003c\u0001\uffff\u0001\u003d\u0004\u003f"+
            "\u0004\uffff\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u0040\u0001\uffff\u0001\u0041\u0009\uffff\u0002\u0003"+
            "\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u0042\u0001\uffff\u0004\u0043",
            "\u0001\u0044",
            "\u0001\u0045",
            "\u0001\u0046",
            "\u0001\u0047",
            "\u0001\u0048",
            "\u0001\u0049",
            "\u0001\u004a\u0001\uffff\u0004\u0029\u0004\uffff\u0001\u002a"+
            "\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u004d\u0001\uffff\u0001\u004b\u0001\uffff\u0004\u004c",
            "\u0002\u0003\u0001\u0002\u0002\u0003",
            "\u0001\u002d\u0009\uffff\u0001\u002a\u0003\uffff\u0002\u002a"+
            "\u0001\uffff\u0001\u002b",
            "\u0001\u004e\u0001\uffff\u0001\u004f\u0008\uffff\u0001\u002a"+
            "\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u0050\u0001\uffff\u0001\u0051\u0008\uffff\u0001\u002a"+
            "\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u0052",
            "\u0001\u0053",
            "\u0001\u0054\u0001\uffff\u0004\u0033\u0004\uffff\u0001\u0034"+
            "\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0057\u0001\uffff\u0001\u0055\u0001\uffff\u0004\u0056",
            "\u0002\u0003\u0001\u0002\u0002\u0003",
            "\u0001\u0037\u0009\uffff\u0001\u0034\u0003\uffff\u0002\u0034"+
            "\u0003\uffff\u0001\u0035",
            "\u0001\u0058\u0001\uffff\u0001\u0059\u0008\uffff\u0001\u0034"+
            "\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u005a\u0001\uffff\u0001\u005b\u0008\uffff\u0001\u0034"+
            "\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u005c",
            "\u0001\u005d",
            "\u0001\u005e",
            "\u0001\u005f",
            "\u0001\u0060\u0001\uffff\u0004\u003f\u0004\uffff\u0002\u0003"+
            "\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u0041\u0009\uffff\u0002\u0003\u0001\u0002\u0002\u0003"+
            "\u0001\u0011",
            "\u0001\u0061\u0001\uffff\u0001\u0062\u0008\uffff\u0002\u0003"+
            "\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u0063\u0001\uffff\u0001\u0064\u0008\uffff\u0002\u0003"+
            "\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u0028\u0003\uffff\u0004\u0029\u0004\uffff\u0001\u002a"+
            "\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u0028\u0003\uffff\u0004\u0029\u0004\uffff\u0001\u002a"+
            "\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u0065\u0001\uffff\u0001\u0066\u0008\uffff\u0001\u002a"+
            "\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u0069\u0001\u0067\u0001\uffff\u0001\u0068\u0004\u006a"+
            "\u0004\uffff\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff"+
            "\u0001\u002b",
            "\u0001\u006b\u0001\uffff\u0001\u006c\u0009\uffff\u0001\u002a"+
            "\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u006d\u0001\uffff\u0004\u006e",
            "\u0001\u006f",
            "\u0001\u0070",
            "\u0001\u0071",
            "\u0001\u0072",
            "\u0001\u0032\u0003\uffff\u0004\u0033\u0004\uffff\u0001\u0034"+
            "\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0032\u0003\uffff\u0004\u0033\u0004\uffff\u0001\u0034"+
            "\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0073\u0001\uffff\u0001\u0074\u0008\uffff\u0001\u0034"+
            "\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0077\u0001\u0075\u0001\uffff\u0001\u0076\u0004\u0078"+
            "\u0004\uffff\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff"+
            "\u0001\u0035",
            "\u0001\u0079\u0001\uffff\u0001\u007a\u0009\uffff\u0001\u0034"+
            "\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u007b\u0001\uffff\u0004\u007c",
            "\u0001\u007d",
            "\u0001\u007e",
            "\u0001\u007f",
            "\u0001\u0080",
            "\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u003e\u0003\uffff\u0004\u003f\u0004\uffff\u0002\u0003"+
            "\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u003e\u0003\uffff\u0004\u003f\u0004\uffff\u0002\u0003"+
            "\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u0081\u0001\uffff\u0001\u0082\u0008\uffff\u0002\u0003"+
            "\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u0083",
            "\u0001\u0084",
            "\u0001\u0085",
            "\u0001\u0086",
            "\u0001\u0087",
            "\u0001\u0088",
            "\u0001\u0089",
            "\u0001\u008a",
            "\u0001\u008b\u0001\uffff\u0004\u006a\u0004\uffff\u0001\u002a"+
            "\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u006c\u0009\uffff\u0001\u002a\u0003\uffff\u0002\u002a"+
            "\u0001\uffff\u0001\u002b",
            "\u0001\u008c\u0001\uffff\u0001\u008d\u0008\uffff\u0001\u002a"+
            "\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u008e\u0001\uffff\u0001\u008f\u0008\uffff\u0001\u002a"+
            "\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u0090",
            "\u0001\u0091",
            "\u0001\u0092",
            "\u0001\u0093",
            "\u0001\u0094\u0001\uffff\u0004\u0078\u0004\uffff\u0001\u0034"+
            "\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u007a\u0009\uffff\u0001\u0034\u0003\uffff\u0002\u0034"+
            "\u0003\uffff\u0001\u0035",
            "\u0001\u0095\u0001\uffff\u0001\u0096\u0008\uffff\u0001\u0034"+
            "\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0097\u0001\uffff\u0001\u0098\u0008\uffff\u0001\u0034"+
            "\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0099",
            "\u0001\u009a",
            "\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u0069\u0003\uffff\u0004\u006a\u0004\uffff\u0001\u002a"+
            "\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u0069\u0003\uffff\u0004\u006a\u0004\uffff\u0001\u002a"+
            "\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u009b\u0001\uffff\u0001\u009c\u0008\uffff\u0001\u002a"+
            "\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u009d",
            "\u0001\u009e",
            "\u0001\u009f",
            "\u0001\u00a0",
            "\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0077\u0003\uffff\u0004\u0078\u0004\uffff\u0001\u0034"+
            "\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0077\u0003\uffff\u0004\u0078\u0004\uffff\u0001\u0034"+
            "\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u00a1\u0001\uffff\u0001\u00a2\u0008\uffff\u0001\u0034"+
            "\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u00a3",
            "\u0001\u00a4",
            "\u0001\u00a5",
            "\u0001\u00a6",
            "\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0002\u0003\u0001\u0002\u0002\u0003\u0001\u0011",
            "\u0001\u00a7",
            "\u0001\u00a8",
            "\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u00a9",
            "\u0001\u00aa",
            "\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u002a\u0003\uffff\u0002\u002a\u0001\uffff\u0001\u002b",
            "\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035",
            "\u0001\u0034\u0003\uffff\u0002\u0034\u0003\uffff\u0001\u0035"
    ]
});

org.antlr.lang.augmentObject(StruxtJSParser, {
    DFA8_eot:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA8_eotS),
    DFA8_eof:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA8_eofS),
    DFA8_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSParser.DFA8_minS),
    DFA8_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSParser.DFA8_maxS),
    DFA8_accept:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA8_acceptS),
    DFA8_special:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA8_specialS),
    DFA8_transition: (function() {
        var a = [],
            i,
            numStates = StruxtJSParser.DFA8_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA8_transitionS[i]));
        }
        return a;
    })()
});

StruxtJSParser.DFA8 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 8;
    this.eot = StruxtJSParser.DFA8_eot;
    this.eof = StruxtJSParser.DFA8_eof;
    this.min = StruxtJSParser.DFA8_min;
    this.max = StruxtJSParser.DFA8_max;
    this.accept = StruxtJSParser.DFA8_accept;
    this.special = StruxtJSParser.DFA8_special;
    this.transition = StruxtJSParser.DFA8_transition;
};

org.antlr.lang.extend(StruxtJSParser.DFA8, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 33:7: ( node )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(StruxtJSParser, {
    DFA15_eotS:
        "\u000b\uffff",
    DFA15_eofS:
        "\u000b\uffff",
    DFA15_minS:
        "\u0002\u0007\u0002\uffff\u0003\u0009\u0001\uffff\u0002\u0007\u0001"+
    "\uffff",
    DFA15_maxS:
        "\u0001\u000e\u0001\u001c\u0002\uffff\u0002\u0009\u0001\u001c\u0001"+
    "\uffff\u0002\u001c\u0001\uffff",
    DFA15_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0004\u0003\uffff\u0001\u0001\u0002"+
    "\uffff\u0001\u0003",
    DFA15_specialS:
        "\u000b\uffff}>",
    DFA15_transitionS: [
            "\u0001\u0003\u0001\uffff\u0001\u0001\u0001\uffff\u0004\u0002",
            "\u0001\u0006\u0001\u0004\u0001\uffff\u0001\u0005\u0004\u0007"+
            "\u0004\uffff\u0006\u0007\u0001\uffff\u0001\u0007\u0001\uffff"+
            "\u0001\u0007",
            "",
            "",
            "\u0001\u0008",
            "\u0001\u0009",
            "\u0001\u000a\u0001\uffff\u0004\u0007\u0004\uffff\u0006\u0007"+
            "\u0001\uffff\u0001\u0007\u0001\uffff\u0001\u0007",
            "",
            "\u0001\u0006\u0003\uffff\u0004\u0007\u0004\uffff\u0006\u0007"+
            "\u0001\uffff\u0001\u0007\u0001\uffff\u0001\u0007",
            "\u0001\u0006\u0003\uffff\u0004\u0007\u0004\uffff\u0006\u0007"+
            "\u0001\uffff\u0001\u0007\u0001\uffff\u0001\u0007",
            ""
    ]
});

org.antlr.lang.augmentObject(StruxtJSParser, {
    DFA15_eot:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA15_eotS),
    DFA15_eof:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA15_eofS),
    DFA15_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSParser.DFA15_minS),
    DFA15_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSParser.DFA15_maxS),
    DFA15_accept:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA15_acceptS),
    DFA15_special:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA15_specialS),
    DFA15_transition: (function() {
        var a = [],
            i,
            numStates = StruxtJSParser.DFA15_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA15_transitionS[i]));
        }
        return a;
    })()
});

StruxtJSParser.DFA15 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 15;
    this.eot = StruxtJSParser.DFA15_eot;
    this.eof = StruxtJSParser.DFA15_eof;
    this.min = StruxtJSParser.DFA15_min;
    this.max = StruxtJSParser.DFA15_max;
    this.accept = StruxtJSParser.DFA15_accept;
    this.special = StruxtJSParser.DFA15_special;
    this.transition = StruxtJSParser.DFA15_transition;
};

org.antlr.lang.extend(StruxtJSParser.DFA15, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "36:10: fragment attribute : (n= name (o= OP )? (v= value )? | v= value (o= OP )? (n= name )? | n= name o= OP n1= name | o= OP (n= name | v= value ) );";
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(StruxtJSParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "DOC", "XML", "CDATA", "OP", "PRENS", "ID", "POSTNS", "STR", "INT", "FLOAT", "CHAR", "COMMENT", "WS", "EXPONENT", "HEX_DIGIT", "'.'", "'{'", "'}'", "':'", "';'", "','", "'('", "')'", "'['", "']'"],
    FOLLOW_xmldecl_in_struxt32: new org.antlr.runtime.BitSet([0x00007A50, 0x00000000]),
    FOLLOW_DOC_in_struxt43: new org.antlr.runtime.BitSet([0x00007A50, 0x00000000]),
    FOLLOW_node_in_struxt52: new org.antlr.runtime.BitSet([0x00000000, 0x00000000]),
    FOLLOW_EOF_in_struxt54: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_XML_in_xmldecl71: new org.antlr.runtime.BitSet([0x0A007A80, 0x00000000]),
    FOLLOW_attributes_in_xmldecl73: new org.antlr.runtime.BitSet([0x00080000, 0x00000000]),
    FOLLOW_19_in_xmldecl75: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_tag_in_node92: new org.antlr.runtime.BitSet([0x00D80000, 0x00000000]),
    FOLLOW_children_in_node94: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_value_in_node104: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_CDATA_in_node114: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_name_in_tag133: new org.antlr.runtime.BitSet([0x0A007A82, 0x00000000]),
    FOLLOW_attributes_in_tag135: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_20_in_children154: new org.antlr.runtime.BitSet([0x00207A50, 0x00000000]),
    FOLLOW_childs_in_children156: new org.antlr.runtime.BitSet([0x00200000, 0x00000000]),
    FOLLOW_21_in_children158: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_22_in_children167: new org.antlr.runtime.BitSet([0x00887A50, 0x00000000]),
    FOLLOW_node_in_children169: new org.antlr.runtime.BitSet([0x00887A50, 0x00000000]),
    FOLLOW_set_in_children174: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_node_in_childs199: new org.antlr.runtime.BitSet([0x00007A52, 0x00000000]),
    FOLLOW_tag_in_childs204: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_name_in_attribute226: new org.antlr.runtime.BitSet([0x00007882, 0x00000000]),
    FOLLOW_OP_in_attribute230: new org.antlr.runtime.BitSet([0x00007802, 0x00000000]),
    FOLLOW_value_in_attribute235: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_value_in_attribute246: new org.antlr.runtime.BitSet([0x00000282, 0x00000000]),
    FOLLOW_OP_in_attribute250: new org.antlr.runtime.BitSet([0x00000202, 0x00000000]),
    FOLLOW_name_in_attribute255: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_name_in_attribute266: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_OP_in_attribute270: new org.antlr.runtime.BitSet([0x00000200, 0x00000000]),
    FOLLOW_name_in_attribute274: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_OP_in_attribute284: new org.antlr.runtime.BitSet([0x00007A00, 0x00000000]),
    FOLLOW_name_in_attribute289: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_value_in_attribute293: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ns_in_name320: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_PRENS_in_name322: new org.antlr.runtime.BitSet([0x00000200, 0x00000000]),
    FOLLOW_ID_in_name326: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_name332: new org.antlr.runtime.BitSet([0x00000402, 0x00000000]),
    FOLLOW_POSTNS_in_name336: new org.antlr.runtime.BitSet([0x00000200, 0x00000000]),
    FOLLOW_ns_in_name340: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_ns368: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_value393: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_attribute_in_attributes426: new org.antlr.runtime.BitSet([0x01000002, 0x00000000]),
    FOLLOW_24_in_attributes430: new org.antlr.runtime.BitSet([0x00007A80, 0x00000000]),
    FOLLOW_attribute_in_attributes432: new org.antlr.runtime.BitSet([0x01000002, 0x00000000]),
    FOLLOW_25_in_attributes442: new org.antlr.runtime.BitSet([0x00007A80, 0x00000000]),
    FOLLOW_attribute_in_attributes444: new org.antlr.runtime.BitSet([0x05880000, 0x00000000]),
    FOLLOW_set_in_attributes448: new org.antlr.runtime.BitSet([0x00007A80, 0x00000000]),
    FOLLOW_attribute_in_attributes456: new org.antlr.runtime.BitSet([0x05880000, 0x00000000]),
    FOLLOW_26_in_attributes460: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_27_in_attributes468: new org.antlr.runtime.BitSet([0x00007A80, 0x00000000]),
    FOLLOW_attribute_in_attributes470: new org.antlr.runtime.BitSet([0x11880000, 0x00000000]),
    FOLLOW_set_in_attributes474: new org.antlr.runtime.BitSet([0x00007A80, 0x00000000]),
    FOLLOW_attribute_in_attributes482: new org.antlr.runtime.BitSet([0x11880000, 0x00000000]),
    FOLLOW_28_in_attributes486: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();