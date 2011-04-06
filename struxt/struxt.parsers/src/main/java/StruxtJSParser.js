// $ANTLR 3.3 Nov 30, 2010 12:45:30 /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g 2011-04-05 10:59:05

var StruxtJSParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    StruxtJSParser.superclass.constructor.call(this, input, state);

    this.dfa9 = new StruxtJSParser.DFA9(this);

         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(StruxtJSParser, {
    EOF: -1,
    T__16: 16,
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
    T__27: 27,
    T__28: 28,
    T__29: 29,
    DOC: 4,
    XML: 5,
    STR: 6,
    ID: 7,
    OP: 8,
    INT: 9,
    FLOAT: 10,
    CHAR: 11,
    COMMENT: 12,
    WS: 13,
    EXPONENT: 14,
    HEX_DIGIT: 15
});

(function(){
// public class variables
var EOF= -1,
    T__16= 16,
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
    T__27= 27,
    T__28= 28,
    T__29= 29,
    DOC= 4,
    XML= 5,
    STR= 6,
    ID= 7,
    OP= 8,
    INT= 9,
    FLOAT= 10,
    CHAR= 11,
    COMMENT= 12,
    WS= 13,
    EXPONENT= 14,
    HEX_DIGIT= 15;

// public instance methods/vars
org.antlr.lang.extend(StruxtJSParser, org.antlr.runtime.Parser, {
        

    getTokenNames: function() { return StruxtJSParser.tokenNames; },
    getGrammarFileName: function() { return "/Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g"; }
});
org.antlr.lang.augmentObject(StruxtJSParser.prototype, {


    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:7:1: struxt : (xml= xmldecl )? (doctype= DOC )? node EOF ;
    // $ANTLR start "struxt"
    struxt: function() {
        var doctype = null;
         var xml = null;

        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:8:5: ( (xml= xmldecl )? (doctype= DOC )? node EOF )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:8:7: (xml= xmldecl )? (doctype= DOC )? node EOF
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:8:10: (xml= xmldecl )?
            var alt1=2;
            var LA1_0 = this.input.LA(1);

            if ( (LA1_0==XML) ) {
                alt1=1;
            }
            switch (alt1) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:8:10: xml= xmldecl
                    this.pushFollow(StruxtJSParser.FOLLOW_xmldecl_in_struxt28);
                    xml=this.xmldecl();

                    this.state._fsp--;



                    break;

            }

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:9:14: (doctype= DOC )?
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( (LA2_0==DOC) ) {
                alt2=1;
            }
            switch (alt2) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:9:14: doctype= DOC
                    doctype=this.match(this.input,DOC,StruxtJSParser.FOLLOW_DOC_in_struxt39); 


                    break;

            }

            this.pushFollow(StruxtJSParser.FOLLOW_node_in_struxt48);
            this.node();

            this.state._fsp--;

            this.match(this.input,EOF,StruxtJSParser.FOLLOW_EOF_in_struxt50); 



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


    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:13:1: xmldecl returns [String attrs] : XML attributes '.' ;
    // $ANTLR start "xmldecl"
    xmldecl: function() {
        var attrs = null;

        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:14:5: ( XML attributes '.' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:14:7: XML attributes '.'
            this.match(this.input,XML,StruxtJSParser.FOLLOW_XML_in_xmldecl71); 
            this.pushFollow(StruxtJSParser.FOLLOW_attributes_in_xmldecl73);
            this.attributes();

            this.state._fsp--;

            this.match(this.input,16,StruxtJSParser.FOLLOW_16_in_xmldecl75); 



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
        return attrs;
    },


    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:17:1: node : (tagname= tag children | text= STR );
    // $ANTLR start "node"
    node: function() {
        var text = null;
         var tagname = null;

        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:18:5: (tagname= tag children | text= STR )
            var alt3=2;
            var LA3_0 = this.input.LA(1);

            if ( (LA3_0==ID) ) {
                alt3=1;
            }
            else if ( (LA3_0==STR) ) {
                alt3=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 3, 0, this.input);

                throw nvae;
            }
            switch (alt3) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:18:7: tagname= tag children
                    this.pushFollow(StruxtJSParser.FOLLOW_tag_in_node94);
                    tagname=this.tag();

                    this.state._fsp--;

                    this.pushFollow(StruxtJSParser.FOLLOW_children_in_node110);
                    this.children();

                    this.state._fsp--;



                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:21:7: text= STR
                    text=this.match(this.input,STR,StruxtJSParser.FOLLOW_STR_in_node120); 


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


    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:25:1: tag returns [String tagname] : nodename= ID ( ( '@' | '\\\\' ) ns= ID )? ( attributes )? ;
    // $ANTLR start "tag"
    tag: function() {
        var tagname = null;

        var nodename = null;
        var ns = null;

        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:26:5: (nodename= ID ( ( '@' | '\\\\' ) ns= ID )? ( attributes )? )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:26:7: nodename= ID ( ( '@' | '\\\\' ) ns= ID )? ( attributes )?
            nodename=this.match(this.input,ID,StruxtJSParser.FOLLOW_ID_in_tag149); 
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:26:19: ( ( '@' | '\\\\' ) ns= ID )?
            var alt4=2;
            var LA4_0 = this.input.LA(1);

            if ( ((LA4_0>=17 && LA4_0<=18)) ) {
                alt4=1;
            }
            switch (alt4) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:26:20: ( '@' | '\\\\' ) ns= ID
                    if ( (this.input.LA(1)>=17 && this.input.LA(1)<=18) ) {
                        this.input.consume();
                        this.state.errorRecovery=false;
                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    ns=this.match(this.input,ID,StruxtJSParser.FOLLOW_ID_in_tag160); 


                    break;

            }

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:26:39: ( attributes )?
            var alt5=2;
            var LA5_0 = this.input.LA(1);

            if ( ((LA5_0>=STR && LA5_0<=ID)||(LA5_0>=INT && LA5_0<=CHAR)||LA5_0==26||LA5_0==28) ) {
                alt5=1;
            }
            switch (alt5) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:26:39: attributes
                    this.pushFollow(StruxtJSParser.FOLLOW_attributes_in_tag164);
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
        return tagname;
    },


    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:29:10: fragment children : ( '{' childs '}' | ( ':' ( node )* )? ( '.' | ';' ) );
    // $ANTLR start "children"
    children: function() {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:30:5: ( '{' childs '}' | ( ':' ( node )* )? ( '.' | ';' ) )
            var alt8=2;
            var LA8_0 = this.input.LA(1);

            if ( (LA8_0==19) ) {
                alt8=1;
            }
            else if ( (LA8_0==16||(LA8_0>=21 && LA8_0<=22)) ) {
                alt8=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 8, 0, this.input);

                throw nvae;
            }
            switch (alt8) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:30:7: '{' childs '}'
                    this.match(this.input,19,StruxtJSParser.FOLLOW_19_in_children183); 
                    this.pushFollow(StruxtJSParser.FOLLOW_childs_in_children185);
                    this.childs();

                    this.state._fsp--;

                    this.match(this.input,20,StruxtJSParser.FOLLOW_20_in_children187); 


                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:31:7: ( ':' ( node )* )? ( '.' | ';' )
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:31:7: ( ':' ( node )* )?
                    var alt7=2;
                    var LA7_0 = this.input.LA(1);

                    if ( (LA7_0==21) ) {
                        alt7=1;
                    }
                    switch (alt7) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:31:8: ':' ( node )*
                            this.match(this.input,21,StruxtJSParser.FOLLOW_21_in_children196); 
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:31:12: ( node )*
                            loop6:
                            do {
                                var alt6=2;
                                var LA6_0 = this.input.LA(1);

                                if ( ((LA6_0>=STR && LA6_0<=ID)) ) {
                                    alt6=1;
                                }


                                switch (alt6) {
                                case 1 :
                                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:31:12: node
                                    this.pushFollow(StruxtJSParser.FOLLOW_node_in_children198);
                                    this.node();

                                    this.state._fsp--;



                                    break;

                                default :
                                    break loop6;
                                }
                            } while (true);



                            break;

                    }

                    if ( this.input.LA(1)==16||this.input.LA(1)==22 ) {
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


    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:34:10: fragment childs : ( node )* (nodename= tag )? ;
    // $ANTLR start "childs"
    childs: function() {
         var nodename = null;

        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:35:5: ( ( node )* (nodename= tag )? )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:35:7: ( node )* (nodename= tag )?
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:35:7: ( node )*
            loop9:
            do {
                var alt9=2;
                alt9 = this.dfa9.predict(this.input);
                switch (alt9) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:35:7: node
                    this.pushFollow(StruxtJSParser.FOLLOW_node_in_childs226);
                    this.node();

                    this.state._fsp--;



                    break;

                default :
                    break loop9;
                }
            } while (true);

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:35:21: (nodename= tag )?
            var alt10=2;
            var LA10_0 = this.input.LA(1);

            if ( (LA10_0==ID) ) {
                alt10=1;
            }
            switch (alt10) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:35:21: nodename= tag
                    this.pushFollow(StruxtJSParser.FOLLOW_tag_in_childs231);
                    nodename=this.tag();

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


    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:38:10: fragment attribute : ( (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? ) (o= OP )? (v= value )? | v= value (o= OP )? (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? )? );
    // $ANTLR start "attribute"
    attribute: function() {
        var ns = null;
        var name = null;
        var o = null;
         var v = null;

        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:39:5: ( (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? ) (o= OP )? (v= value )? | v= value (o= OP )? (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? )? )
            var alt18=2;
            var LA18_0 = this.input.LA(1);

            if ( (LA18_0==ID) ) {
                alt18=1;
            }
            else if ( (LA18_0==STR||(LA18_0>=INT && LA18_0<=CHAR)) ) {
                alt18=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 18, 0, this.input);

                throw nvae;
            }
            switch (alt18) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:39:7: (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? ) (o= OP )? (v= value )?
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:39:7: (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? )
                    var alt12=2;
                    var LA12_0 = this.input.LA(1);

                    if ( (LA12_0==ID) ) {
                        var LA12_1 = this.input.LA(2);

                        if ( ((LA12_1>=23 && LA12_1<=24)) ) {
                            alt12=1;
                        }
                        else if ( (LA12_1==STR||(LA12_1>=OP && LA12_1<=CHAR)||(LA12_1>=16 && LA12_1<=22)||LA12_1==25||LA12_1==27||LA12_1==29) ) {
                            alt12=2;
                        }
                        else {
                            var nvae =
                                new org.antlr.runtime.NoViableAltException("", 12, 1, this.input);

                            throw nvae;
                        }
                    }
                    else {
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 12, 0, this.input);

                        throw nvae;
                    }
                    switch (alt12) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:39:8: ns= ID ( '!' | '#' ) name= ID
                            ns=this.match(this.input,ID,StruxtJSParser.FOLLOW_ID_in_attribute254); 
                            if ( (this.input.LA(1)>=23 && this.input.LA(1)<=24) ) {
                                this.input.consume();
                                this.state.errorRecovery=false;
                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                throw mse;
                            }

                            name=this.match(this.input,ID,StruxtJSParser.FOLLOW_ID_in_attribute264); 


                            break;
                        case 2 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:39:34: name= ID ( ( '@' | '\\\\' ) ns= ID )?
                            name=this.match(this.input,ID,StruxtJSParser.FOLLOW_ID_in_attribute270); 
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:39:42: ( ( '@' | '\\\\' ) ns= ID )?
                            var alt11=2;
                            var LA11_0 = this.input.LA(1);

                            if ( ((LA11_0>=17 && LA11_0<=18)) ) {
                                alt11=1;
                            }
                            switch (alt11) {
                                case 1 :
                                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:39:44: ( '@' | '\\\\' ) ns= ID
                                    if ( (this.input.LA(1)>=17 && this.input.LA(1)<=18) ) {
                                        this.input.consume();
                                        this.state.errorRecovery=false;
                                    }
                                    else {
                                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                        throw mse;
                                    }

                                    ns=this.match(this.input,ID,StruxtJSParser.FOLLOW_ID_in_attribute282); 


                                    break;

                            }



                            break;

                    }

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:39:65: (o= OP )?
                    var alt13=2;
                    var LA13_0 = this.input.LA(1);

                    if ( (LA13_0==OP) ) {
                        alt13=1;
                    }
                    switch (alt13) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:39:65: o= OP
                            o=this.match(this.input,OP,StruxtJSParser.FOLLOW_OP_in_attribute289); 


                            break;

                    }

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:39:71: (v= value )?
                    var alt14=2;
                    var LA14_0 = this.input.LA(1);

                    if ( (LA14_0==STR||(LA14_0>=INT && LA14_0<=CHAR)) ) {
                        alt14=1;
                    }
                    switch (alt14) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:39:71: v= value
                            this.pushFollow(StruxtJSParser.FOLLOW_value_in_attribute294);
                            v=this.value();

                            this.state._fsp--;



                            break;

                    }



                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:40:7: v= value (o= OP )? (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? )?
                    this.pushFollow(StruxtJSParser.FOLLOW_value_in_attribute305);
                    v=this.value();

                    this.state._fsp--;

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:40:16: (o= OP )?
                    var alt15=2;
                    var LA15_0 = this.input.LA(1);

                    if ( (LA15_0==OP) ) {
                        alt15=1;
                    }
                    switch (alt15) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:40:16: o= OP
                            o=this.match(this.input,OP,StruxtJSParser.FOLLOW_OP_in_attribute309); 


                            break;

                    }

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:40:21: (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? )?
                    var alt17=3;
                    var LA17_0 = this.input.LA(1);

                    if ( (LA17_0==ID) ) {
                        var LA17_1 = this.input.LA(2);

                        if ( ((LA17_1>=23 && LA17_1<=24)) ) {
                            alt17=1;
                        }
                        else if ( ((LA17_1>=16 && LA17_1<=22)||LA17_1==25||LA17_1==27||LA17_1==29) ) {
                            alt17=2;
                        }
                    }
                    switch (alt17) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:40:22: ns= ID ( '!' | '#' ) name= ID
                            ns=this.match(this.input,ID,StruxtJSParser.FOLLOW_ID_in_attribute315); 
                            if ( (this.input.LA(1)>=23 && this.input.LA(1)<=24) ) {
                                this.input.consume();
                                this.state.errorRecovery=false;
                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                throw mse;
                            }

                            name=this.match(this.input,ID,StruxtJSParser.FOLLOW_ID_in_attribute326); 


                            break;
                        case 2 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:40:49: name= ID ( ( '@' | '\\\\' ) ns= ID )?
                            name=this.match(this.input,ID,StruxtJSParser.FOLLOW_ID_in_attribute332); 
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:40:57: ( ( '@' | '\\\\' ) ns= ID )?
                            var alt16=2;
                            var LA16_0 = this.input.LA(1);

                            if ( ((LA16_0>=17 && LA16_0<=18)) ) {
                                alt16=1;
                            }
                            switch (alt16) {
                                case 1 :
                                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:40:58: ( '@' | '\\\\' ) ns= ID
                                    if ( (this.input.LA(1)>=17 && this.input.LA(1)<=18) ) {
                                        this.input.consume();
                                        this.state.errorRecovery=false;
                                    }
                                    else {
                                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                        throw mse;
                                    }

                                    ns=this.match(this.input,ID,StruxtJSParser.FOLLOW_ID_in_attribute343); 


                                    break;

                            }



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


    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:43:10: fragment value returns [Token value] : ( STR | INT | FLOAT | CHAR ) ;
    // $ANTLR start "value"
    value: function() {
        var value = null;

        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:44:5: ( ( STR | INT | FLOAT | CHAR ) )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:44:7: ( STR | INT | FLOAT | CHAR )
            if ( this.input.LA(1)==STR||(this.input.LA(1)>=INT && this.input.LA(1)<=CHAR) ) {
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
        return value;
    },


    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:47:10: fragment attributes : ( attribute ( ',' attribute )* | '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')' | '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']' );
    // $ANTLR start "attributes"
    attributes: function() {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:48:5: ( attribute ( ',' attribute )* | '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')' | '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']' )
            var alt22=3;
            switch ( this.input.LA(1) ) {
            case STR:
            case ID:
            case INT:
            case FLOAT:
            case CHAR:
                alt22=1;
                break;
            case 26:
                alt22=2;
                break;
            case 28:
                alt22=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 22, 0, this.input);

                throw nvae;
            }

            switch (alt22) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:48:7: attribute ( ',' attribute )*
                    this.pushFollow(StruxtJSParser.FOLLOW_attribute_in_attributes403);
                    this.attribute();

                    this.state._fsp--;

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:48:17: ( ',' attribute )*
                    loop19:
                    do {
                        var alt19=2;
                        var LA19_0 = this.input.LA(1);

                        if ( (LA19_0==25) ) {
                            alt19=1;
                        }


                        switch (alt19) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:48:19: ',' attribute
                            this.match(this.input,25,StruxtJSParser.FOLLOW_25_in_attributes407); 
                            this.pushFollow(StruxtJSParser.FOLLOW_attribute_in_attributes409);
                            this.attribute();

                            this.state._fsp--;



                            break;

                        default :
                            break loop19;
                        }
                    } while (true);



                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:49:7: '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')'
                    this.match(this.input,26,StruxtJSParser.FOLLOW_26_in_attributes419); 
                    this.pushFollow(StruxtJSParser.FOLLOW_attribute_in_attributes421);
                    this.attribute();

                    this.state._fsp--;

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:49:21: ( ( ',' | ';' | '.' ) attribute )*
                    loop20:
                    do {
                        var alt20=2;
                        var LA20_0 = this.input.LA(1);

                        if ( (LA20_0==16||LA20_0==22||LA20_0==25) ) {
                            alt20=1;
                        }


                        switch (alt20) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:49:23: ( ',' | ';' | '.' ) attribute
                            if ( this.input.LA(1)==16||this.input.LA(1)==22||this.input.LA(1)==25 ) {
                                this.input.consume();
                                this.state.errorRecovery=false;
                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                throw mse;
                            }

                            this.pushFollow(StruxtJSParser.FOLLOW_attribute_in_attributes433);
                            this.attribute();

                            this.state._fsp--;



                            break;

                        default :
                            break loop20;
                        }
                    } while (true);

                    this.match(this.input,27,StruxtJSParser.FOLLOW_27_in_attributes437); 


                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:50:7: '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']'
                    this.match(this.input,28,StruxtJSParser.FOLLOW_28_in_attributes445); 
                    this.pushFollow(StruxtJSParser.FOLLOW_attribute_in_attributes447);
                    this.attribute();

                    this.state._fsp--;

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:50:21: ( ( ',' | ';' | '.' ) attribute )*
                    loop21:
                    do {
                        var alt21=2;
                        var LA21_0 = this.input.LA(1);

                        if ( (LA21_0==16||LA21_0==22||LA21_0==25) ) {
                            alt21=1;
                        }


                        switch (alt21) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:50:23: ( ',' | ';' | '.' ) attribute
                            if ( this.input.LA(1)==16||this.input.LA(1)==22||this.input.LA(1)==25 ) {
                                this.input.consume();
                                this.state.errorRecovery=false;
                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                throw mse;
                            }

                            this.pushFollow(StruxtJSParser.FOLLOW_attribute_in_attributes459);
                            this.attribute();

                            this.state._fsp--;



                            break;

                        default :
                            break loop21;
                        }
                    } while (true);

                    this.match(this.input,29,StruxtJSParser.FOLLOW_29_in_attributes463); 


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
    DFA9_eotS:
        "\u0061\uffff",
    DFA9_eofS:
        "\u0061\uffff",
    DFA9_minS:
        "\u0002\u0006\u0002\uffff\u0001\u0007\u0001\u0006\u0001\u0007\u0003"+
    "\u0006\u0002\u0007\u0001\u0006\u0001\u0010\u0001\u0006\u0001\u0007\u0001"+
    "\u0010\u0001\u0006\u0001\u0007\u0001\u0006\u0001\u0007\u0003\u0006\u0005"+
    "\u0007\u0001\u0006\u0001\u0010\u0001\u0006\u0001\u0010\u0001\u0007\u0001"+
    "\u0010\u0002\u0007\u0001\u0006\u0001\u0010\u0001\u0006\u0001\u0010\u0001"+
    "\u0007\u0001\u0010\u0002\u0007\u0001\u0006\u0001\u0010\u0001\u0007\u0003"+
    "\u0010\u0003\u0006\u0003\u0007\u0003\u0006\u0003\u0007\u0002\u0006\u0004"+
    "\u0007\u0001\u0006\u0001\u0010\u0001\u0007\u0003\u0010\u0002\u0007\u0001"+
    "\u0006\u0001\u0010\u0001\u0007\u0005\u0010\u0002\u0006\u0002\u0007\u0002"+
    "\u0006\u0002\u0007\u0004\u0010",
    DFA9_maxS:
        "\u0001\u0014\u0001\u001c\u0002\uffff\u0001\u0007\u0002\u0019\u0002"+
    "\u000b\u0001\u001c\u0002\u0007\u0002\u0019\u0001\u000b\u0002\u0019\u0002"+
    "\u001b\u0002\u001d\u0004\u0019\u0004\u0007\u0002\u001b\u0001\u000b\u0001"+
    "\u0016\u0002\u001b\u0002\u0007\u0002\u001d\u0001\u000b\u0001\u0016\u0002"+
    "\u001d\u0002\u0007\u0006\u0019\u0004\u001b\u0002\u0007\u0004\u001d\u0002"+
    "\u0007\u0002\u0019\u0004\u0007\u0006\u001b\u0002\u0007\u0006\u001d\u0002"+
    "\u0019\u0002\u001b\u0002\u0007\u0002\u001d\u0002\u0007\u0002\u001b\u0002"+
    "\u001d",
    DFA9_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u005d\uffff",
    DFA9_specialS:
        "\u0061\uffff}>",
    DFA9_transitionS: [
            "\u0001\u0003\u0001\u0001\u000c\uffff\u0001\u0002",
            "\u0001\u0006\u0001\u0005\u0001\uffff\u0003\u0006\u0004\uffff"+
            "\u0001\u0003\u0002\u0004\u0001\u0003\u0001\u0002\u0002\u0003"+
            "\u0003\uffff\u0001\u0007\u0001\uffff\u0001\u0008",
            "",
            "",
            "\u0001\u0009",
            "\u0001\u000d\u0001\uffff\u0001\u000c\u0003\u000d\u0004\uffff"+
            "\u0001\u0003\u0002\u000b\u0001\u0003\u0001\u0002\u0002\u0003"+
            "\u0002\u000a\u0001\u000e",
            "\u0001\u0010\u0001\u000f\u0007\uffff\u0001\u0003\u0002\uffff"+
            "\u0001\u0003\u0001\u0002\u0002\u0003\u0002\uffff\u0001\u000e",
            "\u0001\u0012\u0001\u0011\u0001\uffff\u0003\u0012",
            "\u0001\u0014\u0001\u0013\u0001\uffff\u0003\u0014",
            "\u0001\u0006\u0001\u0005\u0001\uffff\u0003\u0006\u0004\uffff"+
            "\u0001\u0003\u0002\uffff\u0001\u0003\u0001\u0002\u0002\u0003"+
            "\u0003\uffff\u0001\u0007\u0001\uffff\u0001\u0008",
            "\u0001\u0015",
            "\u0001\u0016",
            "\u0001\u000d\u0002\uffff\u0003\u000d\u0004\uffff\u0001\u0003"+
            "\u0002\uffff\u0001\u0003\u0001\u0002\u0002\u0003\u0002\uffff"+
            "\u0001\u000e",
            "\u0001\u0003\u0002\uffff\u0001\u0003\u0001\u0002\u0002\u0003"+
            "\u0002\uffff\u0001\u000e",
            "\u0001\u0018\u0001\u0017\u0001\uffff\u0003\u0018",
            "\u0001\u0010\u0008\uffff\u0001\u0003\u0002\uffff\u0001\u0003"+
            "\u0001\u0002\u0002\u0003\u0002\uffff\u0001\u000e",
            "\u0001\u0003\u0002\u001a\u0001\u0003\u0001\u0002\u0002\u0003"+
            "\u0002\u0019\u0001\u000e",
            "\u0001\u001e\u0001\uffff\u0001\u001d\u0003\u001e\u0004\uffff"+
            "\u0001\u001f\u0002\u001c\u0003\uffff\u0001\u001f\u0002\u001b"+
            "\u0001\u001f\u0001\uffff\u0001\u0020",
            "\u0001\u0022\u0001\u0021\u0007\uffff\u0001\u001f\u0005\uffff"+
            "\u0001\u001f\u0002\uffff\u0001\u001f\u0001\uffff\u0001\u0020",
            "\u0001\u0026\u0001\uffff\u0001\u0025\u0003\u0026\u0004\uffff"+
            "\u0001\u0027\u0002\u0024\u0003\uffff\u0001\u0027\u0002\u0023"+
            "\u0001\u0027\u0003\uffff\u0001\u0028",
            "\u0001\u002a\u0001\u0029\u0007\uffff\u0001\u0027\u0005\uffff"+
            "\u0001\u0027\u0002\uffff\u0001\u0027\u0003\uffff\u0001\u0028",
            "\u0001\u000d\u0001\uffff\u0001\u000c\u0003\u000d\u0004\uffff"+
            "\u0001\u0003\u0002\uffff\u0001\u0003\u0001\u0002\u0002\u0003"+
            "\u0002\uffff\u0001\u000e",
            "\u0001\u000d\u0001\uffff\u0001\u000c\u0003\u000d\u0004\uffff"+
            "\u0001\u0003\u0002\uffff\u0001\u0003\u0001\u0002\u0002\u0003"+
            "\u0002\uffff\u0001\u000e",
            "\u0001\u002e\u0001\uffff\u0001\u002d\u0003\u002e\u0004\uffff"+
            "\u0001\u0003\u0002\u002c\u0001\u0003\u0001\u0002\u0002\u0003"+
            "\u0002\u002b\u0001\u000e",
            "\u0001\u0030\u0001\u002f\u0007\uffff\u0001\u0003\u0002\uffff"+
            "\u0001\u0003\u0001\u0002\u0002\u0003\u0002\uffff\u0001\u000e",
            "\u0001\u0031",
            "\u0001\u0032",
            "\u0001\u0033",
            "\u0001\u0034",
            "\u0001\u001e\u0002\uffff\u0003\u001e\u0004\uffff\u0001\u001f"+
            "\u0005\uffff\u0001\u001f\u0002\uffff\u0001\u001f\u0001\uffff"+
            "\u0001\u0020",
            "\u0001\u001f\u0005\uffff\u0001\u001f\u0002\uffff\u0001\u001f"+
            "\u0001\uffff\u0001\u0020",
            "\u0001\u0036\u0001\u0035\u0001\uffff\u0003\u0036",
            "\u0001\u0003\u0002\uffff\u0001\u0003\u0001\u0002\u0002\u0003",
            "\u0001\u0022\u0008\uffff\u0001\u001f\u0005\uffff\u0001\u001f"+
            "\u0002\uffff\u0001\u001f\u0001\uffff\u0001\u0020",
            "\u0001\u001f\u0002\u0038\u0003\uffff\u0001\u001f\u0002\u0037"+
            "\u0001\u001f\u0001\uffff\u0001\u0020",
            "\u0001\u0039",
            "\u0001\u003a",
            "\u0001\u0026\u0002\uffff\u0003\u0026\u0004\uffff\u0001\u0027"+
            "\u0005\uffff\u0001\u0027\u0002\uffff\u0001\u0027\u0003\uffff"+
            "\u0001\u0028",
            "\u0001\u0027\u0005\uffff\u0001\u0027\u0002\uffff\u0001\u0027"+
            "\u0003\uffff\u0001\u0028",
            "\u0001\u003c\u0001\u003b\u0001\uffff\u0003\u003c",
            "\u0001\u0003\u0002\uffff\u0001\u0003\u0001\u0002\u0002\u0003",
            "\u0001\u002a\u0008\uffff\u0001\u0027\u0005\uffff\u0001\u0027"+
            "\u0002\uffff\u0001\u0027\u0003\uffff\u0001\u0028",
            "\u0001\u0027\u0002\u003e\u0003\uffff\u0001\u0027\u0002\u003d"+
            "\u0001\u0027\u0003\uffff\u0001\u0028",
            "\u0001\u003f",
            "\u0001\u0040",
            "\u0001\u002e\u0002\uffff\u0003\u002e\u0004\uffff\u0001\u0003"+
            "\u0002\uffff\u0001\u0003\u0001\u0002\u0002\u0003\u0002\uffff"+
            "\u0001\u000e",
            "\u0001\u0003\u0002\uffff\u0001\u0003\u0001\u0002\u0002\u0003"+
            "\u0002\uffff\u0001\u000e",
            "\u0001\u0030\u0008\uffff\u0001\u0003\u0002\uffff\u0001\u0003"+
            "\u0001\u0002\u0002\u0003\u0002\uffff\u0001\u000e",
            "\u0001\u0003\u0002\u0042\u0001\u0003\u0001\u0002\u0002\u0003"+
            "\u0002\u0041\u0001\u000e",
            "\u0001\u0003\u0002\uffff\u0001\u0003\u0001\u0002\u0002\u0003"+
            "\u0002\uffff\u0001\u000e",
            "\u0001\u0003\u0002\uffff\u0001\u0003\u0001\u0002\u0002\u0003"+
            "\u0002\uffff\u0001\u000e",
            "\u0001\u001e\u0001\uffff\u0001\u001d\u0003\u001e\u0004\uffff"+
            "\u0001\u001f\u0005\uffff\u0001\u001f\u0002\uffff\u0001\u001f"+
            "\u0001\uffff\u0001\u0020",
            "\u0001\u001e\u0001\uffff\u0001\u001d\u0003\u001e\u0004\uffff"+
            "\u0001\u001f\u0005\uffff\u0001\u001f\u0002\uffff\u0001\u001f"+
            "\u0001\uffff\u0001\u0020",
            "\u0001\u0046\u0001\uffff\u0001\u0045\u0003\u0046\u0004\uffff"+
            "\u0001\u001f\u0002\u0044\u0003\uffff\u0001\u001f\u0002\u0043"+
            "\u0001\u001f\u0001\uffff\u0001\u0020",
            "\u0001\u0048\u0001\u0047\u0007\uffff\u0001\u001f\u0005\uffff"+
            "\u0001\u001f\u0002\uffff\u0001\u001f\u0001\uffff\u0001\u0020",
            "\u0001\u0049",
            "\u0001\u004a",
            "\u0001\u0026\u0001\uffff\u0001\u0025\u0003\u0026\u0004\uffff"+
            "\u0001\u0027\u0005\uffff\u0001\u0027\u0002\uffff\u0001\u0027"+
            "\u0003\uffff\u0001\u0028",
            "\u0001\u0026\u0001\uffff\u0001\u0025\u0003\u0026\u0004\uffff"+
            "\u0001\u0027\u0005\uffff\u0001\u0027\u0002\uffff\u0001\u0027"+
            "\u0003\uffff\u0001\u0028",
            "\u0001\u004e\u0001\uffff\u0001\u004d\u0003\u004e\u0004\uffff"+
            "\u0001\u0027\u0002\u004c\u0003\uffff\u0001\u0027\u0002\u004b"+
            "\u0001\u0027\u0003\uffff\u0001\u0028",
            "\u0001\u0050\u0001\u004f\u0007\uffff\u0001\u0027\u0005\uffff"+
            "\u0001\u0027\u0002\uffff\u0001\u0027\u0003\uffff\u0001\u0028",
            "\u0001\u0051",
            "\u0001\u0052",
            "\u0001\u002e\u0001\uffff\u0001\u002d\u0003\u002e\u0004\uffff"+
            "\u0001\u0003\u0002\uffff\u0001\u0003\u0001\u0002\u0002\u0003"+
            "\u0002\uffff\u0001\u000e",
            "\u0001\u002e\u0001\uffff\u0001\u002d\u0003\u002e\u0004\uffff"+
            "\u0001\u0003\u0002\uffff\u0001\u0003\u0001\u0002\u0002\u0003"+
            "\u0002\uffff\u0001\u000e",
            "\u0001\u0053",
            "\u0001\u0054",
            "\u0001\u0055",
            "\u0001\u0056",
            "\u0001\u0046\u0002\uffff\u0003\u0046\u0004\uffff\u0001\u001f"+
            "\u0005\uffff\u0001\u001f\u0002\uffff\u0001\u001f\u0001\uffff"+
            "\u0001\u0020",
            "\u0001\u001f\u0005\uffff\u0001\u001f\u0002\uffff\u0001\u001f"+
            "\u0001\uffff\u0001\u0020",
            "\u0001\u0048\u0008\uffff\u0001\u001f\u0005\uffff\u0001\u001f"+
            "\u0002\uffff\u0001\u001f\u0001\uffff\u0001\u0020",
            "\u0001\u001f\u0002\u0058\u0003\uffff\u0001\u001f\u0002\u0057"+
            "\u0001\u001f\u0001\uffff\u0001\u0020",
            "\u0001\u001f\u0005\uffff\u0001\u001f\u0002\uffff\u0001\u001f"+
            "\u0001\uffff\u0001\u0020",
            "\u0001\u001f\u0005\uffff\u0001\u001f\u0002\uffff\u0001\u001f"+
            "\u0001\uffff\u0001\u0020",
            "\u0001\u0059",
            "\u0001\u005a",
            "\u0001\u004e\u0002\uffff\u0003\u004e\u0004\uffff\u0001\u0027"+
            "\u0005\uffff\u0001\u0027\u0002\uffff\u0001\u0027\u0003\uffff"+
            "\u0001\u0028",
            "\u0001\u0027\u0005\uffff\u0001\u0027\u0002\uffff\u0001\u0027"+
            "\u0003\uffff\u0001\u0028",
            "\u0001\u0050\u0008\uffff\u0001\u0027\u0005\uffff\u0001\u0027"+
            "\u0002\uffff\u0001\u0027\u0003\uffff\u0001\u0028",
            "\u0001\u0027\u0002\u005c\u0003\uffff\u0001\u0027\u0002\u005b"+
            "\u0001\u0027\u0003\uffff\u0001\u0028",
            "\u0001\u0027\u0005\uffff\u0001\u0027\u0002\uffff\u0001\u0027"+
            "\u0003\uffff\u0001\u0028",
            "\u0001\u0027\u0005\uffff\u0001\u0027\u0002\uffff\u0001\u0027"+
            "\u0003\uffff\u0001\u0028",
            "\u0001\u0003\u0002\uffff\u0001\u0003\u0001\u0002\u0002\u0003"+
            "\u0002\uffff\u0001\u000e",
            "\u0001\u0003\u0002\uffff\u0001\u0003\u0001\u0002\u0002\u0003"+
            "\u0002\uffff\u0001\u000e",
            "\u0001\u0046\u0001\uffff\u0001\u0045\u0003\u0046\u0004\uffff"+
            "\u0001\u001f\u0005\uffff\u0001\u001f\u0002\uffff\u0001\u001f"+
            "\u0001\uffff\u0001\u0020",
            "\u0001\u0046\u0001\uffff\u0001\u0045\u0003\u0046\u0004\uffff"+
            "\u0001\u001f\u0005\uffff\u0001\u001f\u0002\uffff\u0001\u001f"+
            "\u0001\uffff\u0001\u0020",
            "\u0001\u005d",
            "\u0001\u005e",
            "\u0001\u004e\u0001\uffff\u0001\u004d\u0003\u004e\u0004\uffff"+
            "\u0001\u0027\u0005\uffff\u0001\u0027\u0002\uffff\u0001\u0027"+
            "\u0003\uffff\u0001\u0028",
            "\u0001\u004e\u0001\uffff\u0001\u004d\u0003\u004e\u0004\uffff"+
            "\u0001\u0027\u0005\uffff\u0001\u0027\u0002\uffff\u0001\u0027"+
            "\u0003\uffff\u0001\u0028",
            "\u0001\u005f",
            "\u0001\u0060",
            "\u0001\u001f\u0005\uffff\u0001\u001f\u0002\uffff\u0001\u001f"+
            "\u0001\uffff\u0001\u0020",
            "\u0001\u001f\u0005\uffff\u0001\u001f\u0002\uffff\u0001\u001f"+
            "\u0001\uffff\u0001\u0020",
            "\u0001\u0027\u0005\uffff\u0001\u0027\u0002\uffff\u0001\u0027"+
            "\u0003\uffff\u0001\u0028",
            "\u0001\u0027\u0005\uffff\u0001\u0027\u0002\uffff\u0001\u0027"+
            "\u0003\uffff\u0001\u0028"
    ]
});

org.antlr.lang.augmentObject(StruxtJSParser, {
    DFA9_eot:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA9_eotS),
    DFA9_eof:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA9_eofS),
    DFA9_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSParser.DFA9_minS),
    DFA9_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSParser.DFA9_maxS),
    DFA9_accept:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA9_acceptS),
    DFA9_special:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA9_specialS),
    DFA9_transition: (function() {
        var a = [],
            i,
            numStates = StruxtJSParser.DFA9_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(StruxtJSParser.DFA9_transitionS[i]));
        }
        return a;
    })()
});

StruxtJSParser.DFA9 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 9;
    this.eot = StruxtJSParser.DFA9_eot;
    this.eof = StruxtJSParser.DFA9_eof;
    this.min = StruxtJSParser.DFA9_min;
    this.max = StruxtJSParser.DFA9_max;
    this.accept = StruxtJSParser.DFA9_accept;
    this.special = StruxtJSParser.DFA9_special;
    this.transition = StruxtJSParser.DFA9_transition;
};

org.antlr.lang.extend(StruxtJSParser.DFA9, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 35:7: ( node )*";
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(StruxtJSParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "DOC", "XML", "STR", "ID", "OP", "INT", "FLOAT", "CHAR", "COMMENT", "WS", "EXPONENT", "HEX_DIGIT", "'.'", "'@'", "'\\\\'", "'{'", "'}'", "':'", "';'", "'!'", "'#'", "','", "'('", "')'", "'['", "']'"],
    FOLLOW_xmldecl_in_struxt28: new org.antlr.runtime.BitSet([0x000000D0, 0x00000000]),
    FOLLOW_DOC_in_struxt39: new org.antlr.runtime.BitSet([0x000000D0, 0x00000000]),
    FOLLOW_node_in_struxt48: new org.antlr.runtime.BitSet([0x00000000, 0x00000000]),
    FOLLOW_EOF_in_struxt50: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_XML_in_xmldecl71: new org.antlr.runtime.BitSet([0x14000EC0, 0x00000000]),
    FOLLOW_attributes_in_xmldecl73: new org.antlr.runtime.BitSet([0x00010000, 0x00000000]),
    FOLLOW_16_in_xmldecl75: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_tag_in_node94: new org.antlr.runtime.BitSet([0x00690000, 0x00000000]),
    FOLLOW_children_in_node110: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STR_in_node120: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_tag149: new org.antlr.runtime.BitSet([0x14060EC2, 0x00000000]),
    FOLLOW_set_in_tag152: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ID_in_tag160: new org.antlr.runtime.BitSet([0x14000EC2, 0x00000000]),
    FOLLOW_attributes_in_tag164: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_19_in_children183: new org.antlr.runtime.BitSet([0x001000D0, 0x00000000]),
    FOLLOW_childs_in_children185: new org.antlr.runtime.BitSet([0x00100000, 0x00000000]),
    FOLLOW_20_in_children187: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_21_in_children196: new org.antlr.runtime.BitSet([0x004100D0, 0x00000000]),
    FOLLOW_node_in_children198: new org.antlr.runtime.BitSet([0x004100D0, 0x00000000]),
    FOLLOW_set_in_children203: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_node_in_childs226: new org.antlr.runtime.BitSet([0x000000D2, 0x00000000]),
    FOLLOW_tag_in_childs231: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_attribute254: new org.antlr.runtime.BitSet([0x01800000, 0x00000000]),
    FOLLOW_set_in_attribute256: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ID_in_attribute264: new org.antlr.runtime.BitSet([0x00000FC2, 0x00000000]),
    FOLLOW_ID_in_attribute270: new org.antlr.runtime.BitSet([0x00060FC2, 0x00000000]),
    FOLLOW_set_in_attribute274: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ID_in_attribute282: new org.antlr.runtime.BitSet([0x00000FC2, 0x00000000]),
    FOLLOW_OP_in_attribute289: new org.antlr.runtime.BitSet([0x00000EC2, 0x00000000]),
    FOLLOW_value_in_attribute294: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_value_in_attribute305: new org.antlr.runtime.BitSet([0x00000182, 0x00000000]),
    FOLLOW_OP_in_attribute309: new org.antlr.runtime.BitSet([0x00000082, 0x00000000]),
    FOLLOW_ID_in_attribute315: new org.antlr.runtime.BitSet([0x01800000, 0x00000000]),
    FOLLOW_set_in_attribute318: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ID_in_attribute326: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_attribute332: new org.antlr.runtime.BitSet([0x00060002, 0x00000000]),
    FOLLOW_set_in_attribute335: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ID_in_attribute343: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_value370: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_attribute_in_attributes403: new org.antlr.runtime.BitSet([0x02000002, 0x00000000]),
    FOLLOW_25_in_attributes407: new org.antlr.runtime.BitSet([0x00000EC0, 0x00000000]),
    FOLLOW_attribute_in_attributes409: new org.antlr.runtime.BitSet([0x02000002, 0x00000000]),
    FOLLOW_26_in_attributes419: new org.antlr.runtime.BitSet([0x00000EC0, 0x00000000]),
    FOLLOW_attribute_in_attributes421: new org.antlr.runtime.BitSet([0x0A410000, 0x00000000]),
    FOLLOW_set_in_attributes425: new org.antlr.runtime.BitSet([0x00000EC0, 0x00000000]),
    FOLLOW_attribute_in_attributes433: new org.antlr.runtime.BitSet([0x0A410000, 0x00000000]),
    FOLLOW_27_in_attributes437: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_28_in_attributes445: new org.antlr.runtime.BitSet([0x00000EC0, 0x00000000]),
    FOLLOW_attribute_in_attributes447: new org.antlr.runtime.BitSet([0x22410000, 0x00000000]),
    FOLLOW_set_in_attributes451: new org.antlr.runtime.BitSet([0x00000EC0, 0x00000000]),
    FOLLOW_attribute_in_attributes459: new org.antlr.runtime.BitSet([0x22410000, 0x00000000]),
    FOLLOW_29_in_attributes463: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();