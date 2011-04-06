# $ANTLR 3.3 Nov 30, 2010 12:45:30 /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g 2011-04-05 10:59:01

import sys
from antlr3 import *
from antlr3.compat import set, frozenset


# for convenience in actions
HIDDEN = BaseRecognizer.HIDDEN

# token types
EOF=-1
T__16=16
T__17=17
T__18=18
T__19=19
T__20=20
T__21=21
T__22=22
T__23=23
T__24=24
T__25=25
T__26=26
T__27=27
T__28=28
T__29=29
DOC=4
XML=5
STR=6
ID=7
OP=8
INT=9
FLOAT=10
CHAR=11
COMMENT=12
WS=13
EXPONENT=14
HEX_DIGIT=15

# token names
tokenNames = [
    "<invalid>", "<EOR>", "<DOWN>", "<UP>", 
    "DOC", "XML", "STR", "ID", "OP", "INT", "FLOAT", "CHAR", "COMMENT", 
    "WS", "EXPONENT", "HEX_DIGIT", "'.'", "'@'", "'\\\\'", "'{'", "'}'", 
    "':'", "';'", "'!'", "'#'", "','", "'('", "')'", "'['", "']'"
]




class StruxtPyParser(Parser):
    grammarFileName = "/Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g"
    antlr_version = version_str_to_tuple("3.3 Nov 30, 2010 12:45:30")
    antlr_version_str = "3.3 Nov 30, 2010 12:45:30"
    tokenNames = tokenNames

    def __init__(self, input, state=None, *args, **kwargs):
        if state is None:
            state = RecognizerSharedState()

        super(StruxtPyParser, self).__init__(input, state, *args, **kwargs)

        self.dfa9 = self.DFA9(
            self, 9,
            eot = self.DFA9_eot,
            eof = self.DFA9_eof,
            min = self.DFA9_min,
            max = self.DFA9_max,
            accept = self.DFA9_accept,
            special = self.DFA9_special,
            transition = self.DFA9_transition
            )






                


        



    # $ANTLR start "struxt"
    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:8:1: struxt : (xml= xmldecl )? (doctype= DOC )? node EOF ;
    def struxt(self, ):

        doctype = None
        xml = None


        try:
            try:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:9:5: ( (xml= xmldecl )? (doctype= DOC )? node EOF )
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:9:7: (xml= xmldecl )? (doctype= DOC )? node EOF
                pass 
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:9:10: (xml= xmldecl )?
                alt1 = 2
                LA1_0 = self.input.LA(1)

                if (LA1_0 == XML) :
                    alt1 = 1
                if alt1 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:9:10: xml= xmldecl
                    pass 
                    self._state.following.append(self.FOLLOW_xmldecl_in_struxt29)
                    xml = self.xmldecl()

                    self._state.following.pop()



                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:10:14: (doctype= DOC )?
                alt2 = 2
                LA2_0 = self.input.LA(1)

                if (LA2_0 == DOC) :
                    alt2 = 1
                if alt2 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:10:14: doctype= DOC
                    pass 
                    doctype=self.match(self.input, DOC, self.FOLLOW_DOC_in_struxt40)



                self._state.following.append(self.FOLLOW_node_in_struxt49)
                self.node()

                self._state.following.pop()
                self.match(self.input, EOF, self.FOLLOW_EOF_in_struxt51)




            except RecognitionException, re:
                self.reportError(re)
                self.recover(self.input, re)
        finally:

            pass
        return 

    # $ANTLR end "struxt"


    # $ANTLR start "xmldecl"
    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:14:1: xmldecl returns [String attrs] : XML attributes '.' ;
    def xmldecl(self, ):

        attrs = None

        try:
            try:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:15:5: ( XML attributes '.' )
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:15:7: XML attributes '.'
                pass 
                self.match(self.input, XML, self.FOLLOW_XML_in_xmldecl72)
                self._state.following.append(self.FOLLOW_attributes_in_xmldecl74)
                self.attributes()

                self._state.following.pop()
                self.match(self.input, 16, self.FOLLOW_16_in_xmldecl76)




            except RecognitionException, re:
                self.reportError(re)
                self.recover(self.input, re)
        finally:

            pass
        return attrs

    # $ANTLR end "xmldecl"


    # $ANTLR start "node"
    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:18:1: node : (tagname= tag children | text= STR );
    def node(self, ):

        text = None
        tagname = None


        try:
            try:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:19:5: (tagname= tag children | text= STR )
                alt3 = 2
                LA3_0 = self.input.LA(1)

                if (LA3_0 == ID) :
                    alt3 = 1
                elif (LA3_0 == STR) :
                    alt3 = 2
                else:
                    nvae = NoViableAltException("", 3, 0, self.input)

                    raise nvae

                if alt3 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:19:7: tagname= tag children
                    pass 
                    self._state.following.append(self.FOLLOW_tag_in_node95)
                    tagname = self.tag()

                    self._state.following.pop()
                    self._state.following.append(self.FOLLOW_children_in_node111)
                    self.children()

                    self._state.following.pop()


                elif alt3 == 2:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:22:7: text= STR
                    pass 
                    text=self.match(self.input, STR, self.FOLLOW_STR_in_node121)



            except RecognitionException, re:
                self.reportError(re)
                self.recover(self.input, re)
        finally:

            pass
        return 

    # $ANTLR end "node"


    # $ANTLR start "tag"
    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:26:1: tag returns [String tagname] : nodename= ID ( ( '@' | '\\\\' ) ns= ID )? ( attributes )? ;
    def tag(self, ):

        tagname = None

        nodename = None
        ns = None

        try:
            try:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:27:5: (nodename= ID ( ( '@' | '\\\\' ) ns= ID )? ( attributes )? )
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:27:7: nodename= ID ( ( '@' | '\\\\' ) ns= ID )? ( attributes )?
                pass 
                nodename=self.match(self.input, ID, self.FOLLOW_ID_in_tag150)
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:27:19: ( ( '@' | '\\\\' ) ns= ID )?
                alt4 = 2
                LA4_0 = self.input.LA(1)

                if ((17 <= LA4_0 <= 18)) :
                    alt4 = 1
                if alt4 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:27:20: ( '@' | '\\\\' ) ns= ID
                    pass 
                    if (17 <= self.input.LA(1) <= 18):
                        self.input.consume()
                        self._state.errorRecovery = False

                    else:
                        mse = MismatchedSetException(None, self.input)
                        raise mse


                    ns=self.match(self.input, ID, self.FOLLOW_ID_in_tag161)



                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:27:39: ( attributes )?
                alt5 = 2
                LA5_0 = self.input.LA(1)

                if ((STR <= LA5_0 <= ID) or (INT <= LA5_0 <= CHAR) or LA5_0 == 26 or LA5_0 == 28) :
                    alt5 = 1
                if alt5 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:27:39: attributes
                    pass 
                    self._state.following.append(self.FOLLOW_attributes_in_tag165)
                    self.attributes()

                    self._state.following.pop()







            except RecognitionException, re:
                self.reportError(re)
                self.recover(self.input, re)
        finally:

            pass
        return tagname

    # $ANTLR end "tag"


    # $ANTLR start "children"
    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:30:10: fragment children : ( '{' childs '}' | ( ':' ( node )* )? ( '.' | ';' ) );
    def children(self, ):

        try:
            try:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:31:5: ( '{' childs '}' | ( ':' ( node )* )? ( '.' | ';' ) )
                alt8 = 2
                LA8_0 = self.input.LA(1)

                if (LA8_0 == 19) :
                    alt8 = 1
                elif (LA8_0 == 16 or (21 <= LA8_0 <= 22)) :
                    alt8 = 2
                else:
                    nvae = NoViableAltException("", 8, 0, self.input)

                    raise nvae

                if alt8 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:31:7: '{' childs '}'
                    pass 
                    self.match(self.input, 19, self.FOLLOW_19_in_children184)
                    self._state.following.append(self.FOLLOW_childs_in_children186)
                    self.childs()

                    self._state.following.pop()
                    self.match(self.input, 20, self.FOLLOW_20_in_children188)


                elif alt8 == 2:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:32:7: ( ':' ( node )* )? ( '.' | ';' )
                    pass 
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:32:7: ( ':' ( node )* )?
                    alt7 = 2
                    LA7_0 = self.input.LA(1)

                    if (LA7_0 == 21) :
                        alt7 = 1
                    if alt7 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:32:8: ':' ( node )*
                        pass 
                        self.match(self.input, 21, self.FOLLOW_21_in_children197)
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:32:12: ( node )*
                        while True: #loop6
                            alt6 = 2
                            LA6_0 = self.input.LA(1)

                            if ((STR <= LA6_0 <= ID)) :
                                alt6 = 1


                            if alt6 == 1:
                                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:32:12: node
                                pass 
                                self._state.following.append(self.FOLLOW_node_in_children199)
                                self.node()

                                self._state.following.pop()


                            else:
                                break #loop6



                    if self.input.LA(1) == 16 or self.input.LA(1) == 22:
                        self.input.consume()
                        self._state.errorRecovery = False

                    else:
                        mse = MismatchedSetException(None, self.input)
                        raise mse





            except RecognitionException, re:
                self.reportError(re)
                self.recover(self.input, re)
        finally:

            pass
        return 

    # $ANTLR end "children"


    # $ANTLR start "childs"
    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:35:10: fragment childs : ( node )* (nodename= tag )? ;
    def childs(self, ):

        nodename = None


        try:
            try:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:36:5: ( ( node )* (nodename= tag )? )
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:36:7: ( node )* (nodename= tag )?
                pass 
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:36:7: ( node )*
                while True: #loop9
                    alt9 = 2
                    alt9 = self.dfa9.predict(self.input)
                    if alt9 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:36:7: node
                        pass 
                        self._state.following.append(self.FOLLOW_node_in_childs227)
                        self.node()

                        self._state.following.pop()


                    else:
                        break #loop9
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:36:21: (nodename= tag )?
                alt10 = 2
                LA10_0 = self.input.LA(1)

                if (LA10_0 == ID) :
                    alt10 = 1
                if alt10 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:36:21: nodename= tag
                    pass 
                    self._state.following.append(self.FOLLOW_tag_in_childs232)
                    nodename = self.tag()

                    self._state.following.pop()







            except RecognitionException, re:
                self.reportError(re)
                self.recover(self.input, re)
        finally:

            pass
        return 

    # $ANTLR end "childs"


    # $ANTLR start "attribute"
    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:39:10: fragment attribute : ( (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? ) (o= OP )? (v= value )? | v= value (o= OP )? (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? )? );
    def attribute(self, ):

        ns = None
        name = None
        o = None
        v = None


        try:
            try:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:40:5: ( (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? ) (o= OP )? (v= value )? | v= value (o= OP )? (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? )? )
                alt18 = 2
                LA18_0 = self.input.LA(1)

                if (LA18_0 == ID) :
                    alt18 = 1
                elif (LA18_0 == STR or (INT <= LA18_0 <= CHAR)) :
                    alt18 = 2
                else:
                    nvae = NoViableAltException("", 18, 0, self.input)

                    raise nvae

                if alt18 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:40:7: (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? ) (o= OP )? (v= value )?
                    pass 
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:40:7: (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? )
                    alt12 = 2
                    LA12_0 = self.input.LA(1)

                    if (LA12_0 == ID) :
                        LA12_1 = self.input.LA(2)

                        if ((23 <= LA12_1 <= 24)) :
                            alt12 = 1
                        elif (LA12_1 == STR or (OP <= LA12_1 <= CHAR) or (16 <= LA12_1 <= 22) or LA12_1 == 25 or LA12_1 == 27 or LA12_1 == 29) :
                            alt12 = 2
                        else:
                            nvae = NoViableAltException("", 12, 1, self.input)

                            raise nvae

                    else:
                        nvae = NoViableAltException("", 12, 0, self.input)

                        raise nvae

                    if alt12 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:40:8: ns= ID ( '!' | '#' ) name= ID
                        pass 
                        ns=self.match(self.input, ID, self.FOLLOW_ID_in_attribute255)
                        if (23 <= self.input.LA(1) <= 24):
                            self.input.consume()
                            self._state.errorRecovery = False

                        else:
                            mse = MismatchedSetException(None, self.input)
                            raise mse


                        name=self.match(self.input, ID, self.FOLLOW_ID_in_attribute265)


                    elif alt12 == 2:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:40:34: name= ID ( ( '@' | '\\\\' ) ns= ID )?
                        pass 
                        name=self.match(self.input, ID, self.FOLLOW_ID_in_attribute271)
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:40:42: ( ( '@' | '\\\\' ) ns= ID )?
                        alt11 = 2
                        LA11_0 = self.input.LA(1)

                        if ((17 <= LA11_0 <= 18)) :
                            alt11 = 1
                        if alt11 == 1:
                            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:40:44: ( '@' | '\\\\' ) ns= ID
                            pass 
                            if (17 <= self.input.LA(1) <= 18):
                                self.input.consume()
                                self._state.errorRecovery = False

                            else:
                                mse = MismatchedSetException(None, self.input)
                                raise mse


                            ns=self.match(self.input, ID, self.FOLLOW_ID_in_attribute283)






                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:40:65: (o= OP )?
                    alt13 = 2
                    LA13_0 = self.input.LA(1)

                    if (LA13_0 == OP) :
                        alt13 = 1
                    if alt13 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:40:65: o= OP
                        pass 
                        o=self.match(self.input, OP, self.FOLLOW_OP_in_attribute290)



                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:40:71: (v= value )?
                    alt14 = 2
                    LA14_0 = self.input.LA(1)

                    if (LA14_0 == STR or (INT <= LA14_0 <= CHAR)) :
                        alt14 = 1
                    if alt14 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:40:71: v= value
                        pass 
                        self._state.following.append(self.FOLLOW_value_in_attribute295)
                        v = self.value()

                        self._state.following.pop()





                elif alt18 == 2:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:41:7: v= value (o= OP )? (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? )?
                    pass 
                    self._state.following.append(self.FOLLOW_value_in_attribute306)
                    v = self.value()

                    self._state.following.pop()
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:41:16: (o= OP )?
                    alt15 = 2
                    LA15_0 = self.input.LA(1)

                    if (LA15_0 == OP) :
                        alt15 = 1
                    if alt15 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:41:16: o= OP
                        pass 
                        o=self.match(self.input, OP, self.FOLLOW_OP_in_attribute310)



                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:41:21: (ns= ID ( '!' | '#' ) name= ID | name= ID ( ( '@' | '\\\\' ) ns= ID )? )?
                    alt17 = 3
                    LA17_0 = self.input.LA(1)

                    if (LA17_0 == ID) :
                        LA17_1 = self.input.LA(2)

                        if ((23 <= LA17_1 <= 24)) :
                            alt17 = 1
                        elif ((16 <= LA17_1 <= 22) or LA17_1 == 25 or LA17_1 == 27 or LA17_1 == 29) :
                            alt17 = 2
                    if alt17 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:41:22: ns= ID ( '!' | '#' ) name= ID
                        pass 
                        ns=self.match(self.input, ID, self.FOLLOW_ID_in_attribute316)
                        if (23 <= self.input.LA(1) <= 24):
                            self.input.consume()
                            self._state.errorRecovery = False

                        else:
                            mse = MismatchedSetException(None, self.input)
                            raise mse


                        name=self.match(self.input, ID, self.FOLLOW_ID_in_attribute327)


                    elif alt17 == 2:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:41:49: name= ID ( ( '@' | '\\\\' ) ns= ID )?
                        pass 
                        name=self.match(self.input, ID, self.FOLLOW_ID_in_attribute333)
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:41:57: ( ( '@' | '\\\\' ) ns= ID )?
                        alt16 = 2
                        LA16_0 = self.input.LA(1)

                        if ((17 <= LA16_0 <= 18)) :
                            alt16 = 1
                        if alt16 == 1:
                            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:41:58: ( '@' | '\\\\' ) ns= ID
                            pass 
                            if (17 <= self.input.LA(1) <= 18):
                                self.input.consume()
                                self._state.errorRecovery = False

                            else:
                                mse = MismatchedSetException(None, self.input)
                                raise mse


                            ns=self.match(self.input, ID, self.FOLLOW_ID_in_attribute344)









            except RecognitionException, re:
                self.reportError(re)
                self.recover(self.input, re)
        finally:

            pass
        return 

    # $ANTLR end "attribute"


    # $ANTLR start "value"
    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:44:10: fragment value returns [Token value] : ( STR | INT | FLOAT | CHAR ) ;
    def value(self, ):

        value = None

        try:
            try:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:45:5: ( ( STR | INT | FLOAT | CHAR ) )
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:45:7: ( STR | INT | FLOAT | CHAR )
                pass 
                if self.input.LA(1) == STR or (INT <= self.input.LA(1) <= CHAR):
                    self.input.consume()
                    self._state.errorRecovery = False

                else:
                    mse = MismatchedSetException(None, self.input)
                    raise mse






            except RecognitionException, re:
                self.reportError(re)
                self.recover(self.input, re)
        finally:

            pass
        return value

    # $ANTLR end "value"


    # $ANTLR start "attributes"
    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:48:10: fragment attributes : ( attribute ( ',' attribute )* | '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')' | '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']' );
    def attributes(self, ):

        try:
            try:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:49:5: ( attribute ( ',' attribute )* | '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')' | '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']' )
                alt22 = 3
                LA22 = self.input.LA(1)
                if LA22 == STR or LA22 == ID or LA22 == INT or LA22 == FLOAT or LA22 == CHAR:
                    alt22 = 1
                elif LA22 == 26:
                    alt22 = 2
                elif LA22 == 28:
                    alt22 = 3
                else:
                    nvae = NoViableAltException("", 22, 0, self.input)

                    raise nvae

                if alt22 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:49:7: attribute ( ',' attribute )*
                    pass 
                    self._state.following.append(self.FOLLOW_attribute_in_attributes404)
                    self.attribute()

                    self._state.following.pop()
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:49:17: ( ',' attribute )*
                    while True: #loop19
                        alt19 = 2
                        LA19_0 = self.input.LA(1)

                        if (LA19_0 == 25) :
                            alt19 = 1


                        if alt19 == 1:
                            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:49:19: ',' attribute
                            pass 
                            self.match(self.input, 25, self.FOLLOW_25_in_attributes408)
                            self._state.following.append(self.FOLLOW_attribute_in_attributes410)
                            self.attribute()

                            self._state.following.pop()


                        else:
                            break #loop19


                elif alt22 == 2:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:50:7: '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')'
                    pass 
                    self.match(self.input, 26, self.FOLLOW_26_in_attributes420)
                    self._state.following.append(self.FOLLOW_attribute_in_attributes422)
                    self.attribute()

                    self._state.following.pop()
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:50:21: ( ( ',' | ';' | '.' ) attribute )*
                    while True: #loop20
                        alt20 = 2
                        LA20_0 = self.input.LA(1)

                        if (LA20_0 == 16 or LA20_0 == 22 or LA20_0 == 25) :
                            alt20 = 1


                        if alt20 == 1:
                            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:50:23: ( ',' | ';' | '.' ) attribute
                            pass 
                            if self.input.LA(1) == 16 or self.input.LA(1) == 22 or self.input.LA(1) == 25:
                                self.input.consume()
                                self._state.errorRecovery = False

                            else:
                                mse = MismatchedSetException(None, self.input)
                                raise mse


                            self._state.following.append(self.FOLLOW_attribute_in_attributes434)
                            self.attribute()

                            self._state.following.pop()


                        else:
                            break #loop20
                    self.match(self.input, 27, self.FOLLOW_27_in_attributes438)


                elif alt22 == 3:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:51:7: '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']'
                    pass 
                    self.match(self.input, 28, self.FOLLOW_28_in_attributes446)
                    self._state.following.append(self.FOLLOW_attribute_in_attributes448)
                    self.attribute()

                    self._state.following.pop()
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:51:21: ( ( ',' | ';' | '.' ) attribute )*
                    while True: #loop21
                        alt21 = 2
                        LA21_0 = self.input.LA(1)

                        if (LA21_0 == 16 or LA21_0 == 22 or LA21_0 == 25) :
                            alt21 = 1


                        if alt21 == 1:
                            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:51:23: ( ',' | ';' | '.' ) attribute
                            pass 
                            if self.input.LA(1) == 16 or self.input.LA(1) == 22 or self.input.LA(1) == 25:
                                self.input.consume()
                                self._state.errorRecovery = False

                            else:
                                mse = MismatchedSetException(None, self.input)
                                raise mse


                            self._state.following.append(self.FOLLOW_attribute_in_attributes460)
                            self.attribute()

                            self._state.following.pop()


                        else:
                            break #loop21
                    self.match(self.input, 29, self.FOLLOW_29_in_attributes464)



            except RecognitionException, re:
                self.reportError(re)
                self.recover(self.input, re)
        finally:

            pass
        return 

    # $ANTLR end "attributes"


    # Delegated rules


    # lookup tables for DFA #9

    DFA9_eot = DFA.unpack(
        u"\141\uffff"
        )

    DFA9_eof = DFA.unpack(
        u"\141\uffff"
        )

    DFA9_min = DFA.unpack(
        u"\2\6\2\uffff\1\7\1\6\1\7\3\6\2\7\1\6\1\20\1\6\1\7\1\20\1\6\1\7"
        u"\1\6\1\7\3\6\5\7\1\6\1\20\1\6\1\20\1\7\1\20\2\7\1\6\1\20\1\6\1"
        u"\20\1\7\1\20\2\7\1\6\1\20\1\7\3\20\3\6\3\7\3\6\3\7\2\6\4\7\1\6"
        u"\1\20\1\7\3\20\2\7\1\6\1\20\1\7\5\20\2\6\2\7\2\6\2\7\4\20"
        )

    DFA9_max = DFA.unpack(
        u"\1\24\1\34\2\uffff\1\7\2\31\2\13\1\34\2\7\2\31\1\13\2\31\2\33\2"
        u"\35\4\31\4\7\2\33\1\13\1\26\2\33\2\7\2\35\1\13\1\26\2\35\2\7\6"
        u"\31\4\33\2\7\4\35\2\7\2\31\4\7\6\33\2\7\6\35\2\31\2\33\2\7\2\35"
        u"\2\7\2\33\2\35"
        )

    DFA9_accept = DFA.unpack(
        u"\2\uffff\1\2\1\1\135\uffff"
        )

    DFA9_special = DFA.unpack(
        u"\141\uffff"
        )

            
    DFA9_transition = [
        DFA.unpack(u"\1\3\1\1\14\uffff\1\2"),
        DFA.unpack(u"\1\6\1\5\1\uffff\3\6\4\uffff\1\3\2\4\1\3\1\2\2\3\3"
        u"\uffff\1\7\1\uffff\1\10"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"\1\11"),
        DFA.unpack(u"\1\15\1\uffff\1\14\3\15\4\uffff\1\3\2\13\1\3\1\2\2"
        u"\3\2\12\1\16"),
        DFA.unpack(u"\1\20\1\17\7\uffff\1\3\2\uffff\1\3\1\2\2\3\2\uffff"
        u"\1\16"),
        DFA.unpack(u"\1\22\1\21\1\uffff\3\22"),
        DFA.unpack(u"\1\24\1\23\1\uffff\3\24"),
        DFA.unpack(u"\1\6\1\5\1\uffff\3\6\4\uffff\1\3\2\uffff\1\3\1\2\2"
        u"\3\3\uffff\1\7\1\uffff\1\10"),
        DFA.unpack(u"\1\25"),
        DFA.unpack(u"\1\26"),
        DFA.unpack(u"\1\15\2\uffff\3\15\4\uffff\1\3\2\uffff\1\3\1\2\2\3"
        u"\2\uffff\1\16"),
        DFA.unpack(u"\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16"),
        DFA.unpack(u"\1\30\1\27\1\uffff\3\30"),
        DFA.unpack(u"\1\20\10\uffff\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16"),
        DFA.unpack(u"\1\3\2\32\1\3\1\2\2\3\2\31\1\16"),
        DFA.unpack(u"\1\36\1\uffff\1\35\3\36\4\uffff\1\37\2\34\3\uffff\1"
        u"\37\2\33\1\37\1\uffff\1\40"),
        DFA.unpack(u"\1\42\1\41\7\uffff\1\37\5\uffff\1\37\2\uffff\1\37\1"
        u"\uffff\1\40"),
        DFA.unpack(u"\1\46\1\uffff\1\45\3\46\4\uffff\1\47\2\44\3\uffff\1"
        u"\47\2\43\1\47\3\uffff\1\50"),
        DFA.unpack(u"\1\52\1\51\7\uffff\1\47\5\uffff\1\47\2\uffff\1\47\3"
        u"\uffff\1\50"),
        DFA.unpack(u"\1\15\1\uffff\1\14\3\15\4\uffff\1\3\2\uffff\1\3\1\2"
        u"\2\3\2\uffff\1\16"),
        DFA.unpack(u"\1\15\1\uffff\1\14\3\15\4\uffff\1\3\2\uffff\1\3\1\2"
        u"\2\3\2\uffff\1\16"),
        DFA.unpack(u"\1\56\1\uffff\1\55\3\56\4\uffff\1\3\2\54\1\3\1\2\2"
        u"\3\2\53\1\16"),
        DFA.unpack(u"\1\60\1\57\7\uffff\1\3\2\uffff\1\3\1\2\2\3\2\uffff"
        u"\1\16"),
        DFA.unpack(u"\1\61"),
        DFA.unpack(u"\1\62"),
        DFA.unpack(u"\1\63"),
        DFA.unpack(u"\1\64"),
        DFA.unpack(u"\1\36\2\uffff\3\36\4\uffff\1\37\5\uffff\1\37\2\uffff"
        u"\1\37\1\uffff\1\40"),
        DFA.unpack(u"\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff\1\40"),
        DFA.unpack(u"\1\66\1\65\1\uffff\3\66"),
        DFA.unpack(u"\1\3\2\uffff\1\3\1\2\2\3"),
        DFA.unpack(u"\1\42\10\uffff\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff"
        u"\1\40"),
        DFA.unpack(u"\1\37\2\70\3\uffff\1\37\2\67\1\37\1\uffff\1\40"),
        DFA.unpack(u"\1\71"),
        DFA.unpack(u"\1\72"),
        DFA.unpack(u"\1\46\2\uffff\3\46\4\uffff\1\47\5\uffff\1\47\2\uffff"
        u"\1\47\3\uffff\1\50"),
        DFA.unpack(u"\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff\1\50"),
        DFA.unpack(u"\1\74\1\73\1\uffff\3\74"),
        DFA.unpack(u"\1\3\2\uffff\1\3\1\2\2\3"),
        DFA.unpack(u"\1\52\10\uffff\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff"
        u"\1\50"),
        DFA.unpack(u"\1\47\2\76\3\uffff\1\47\2\75\1\47\3\uffff\1\50"),
        DFA.unpack(u"\1\77"),
        DFA.unpack(u"\1\100"),
        DFA.unpack(u"\1\56\2\uffff\3\56\4\uffff\1\3\2\uffff\1\3\1\2\2\3"
        u"\2\uffff\1\16"),
        DFA.unpack(u"\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16"),
        DFA.unpack(u"\1\60\10\uffff\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16"),
        DFA.unpack(u"\1\3\2\102\1\3\1\2\2\3\2\101\1\16"),
        DFA.unpack(u"\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16"),
        DFA.unpack(u"\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16"),
        DFA.unpack(u"\1\36\1\uffff\1\35\3\36\4\uffff\1\37\5\uffff\1\37\2"
        u"\uffff\1\37\1\uffff\1\40"),
        DFA.unpack(u"\1\36\1\uffff\1\35\3\36\4\uffff\1\37\5\uffff\1\37\2"
        u"\uffff\1\37\1\uffff\1\40"),
        DFA.unpack(u"\1\106\1\uffff\1\105\3\106\4\uffff\1\37\2\104\3\uffff"
        u"\1\37\2\103\1\37\1\uffff\1\40"),
        DFA.unpack(u"\1\110\1\107\7\uffff\1\37\5\uffff\1\37\2\uffff\1\37"
        u"\1\uffff\1\40"),
        DFA.unpack(u"\1\111"),
        DFA.unpack(u"\1\112"),
        DFA.unpack(u"\1\46\1\uffff\1\45\3\46\4\uffff\1\47\5\uffff\1\47\2"
        u"\uffff\1\47\3\uffff\1\50"),
        DFA.unpack(u"\1\46\1\uffff\1\45\3\46\4\uffff\1\47\5\uffff\1\47\2"
        u"\uffff\1\47\3\uffff\1\50"),
        DFA.unpack(u"\1\116\1\uffff\1\115\3\116\4\uffff\1\47\2\114\3\uffff"
        u"\1\47\2\113\1\47\3\uffff\1\50"),
        DFA.unpack(u"\1\120\1\117\7\uffff\1\47\5\uffff\1\47\2\uffff\1\47"
        u"\3\uffff\1\50"),
        DFA.unpack(u"\1\121"),
        DFA.unpack(u"\1\122"),
        DFA.unpack(u"\1\56\1\uffff\1\55\3\56\4\uffff\1\3\2\uffff\1\3\1\2"
        u"\2\3\2\uffff\1\16"),
        DFA.unpack(u"\1\56\1\uffff\1\55\3\56\4\uffff\1\3\2\uffff\1\3\1\2"
        u"\2\3\2\uffff\1\16"),
        DFA.unpack(u"\1\123"),
        DFA.unpack(u"\1\124"),
        DFA.unpack(u"\1\125"),
        DFA.unpack(u"\1\126"),
        DFA.unpack(u"\1\106\2\uffff\3\106\4\uffff\1\37\5\uffff\1\37\2\uffff"
        u"\1\37\1\uffff\1\40"),
        DFA.unpack(u"\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff\1\40"),
        DFA.unpack(u"\1\110\10\uffff\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff"
        u"\1\40"),
        DFA.unpack(u"\1\37\2\130\3\uffff\1\37\2\127\1\37\1\uffff\1\40"),
        DFA.unpack(u"\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff\1\40"),
        DFA.unpack(u"\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff\1\40"),
        DFA.unpack(u"\1\131"),
        DFA.unpack(u"\1\132"),
        DFA.unpack(u"\1\116\2\uffff\3\116\4\uffff\1\47\5\uffff\1\47\2\uffff"
        u"\1\47\3\uffff\1\50"),
        DFA.unpack(u"\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff\1\50"),
        DFA.unpack(u"\1\120\10\uffff\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff"
        u"\1\50"),
        DFA.unpack(u"\1\47\2\134\3\uffff\1\47\2\133\1\47\3\uffff\1\50"),
        DFA.unpack(u"\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff\1\50"),
        DFA.unpack(u"\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff\1\50"),
        DFA.unpack(u"\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16"),
        DFA.unpack(u"\1\3\2\uffff\1\3\1\2\2\3\2\uffff\1\16"),
        DFA.unpack(u"\1\106\1\uffff\1\105\3\106\4\uffff\1\37\5\uffff\1\37"
        u"\2\uffff\1\37\1\uffff\1\40"),
        DFA.unpack(u"\1\106\1\uffff\1\105\3\106\4\uffff\1\37\5\uffff\1\37"
        u"\2\uffff\1\37\1\uffff\1\40"),
        DFA.unpack(u"\1\135"),
        DFA.unpack(u"\1\136"),
        DFA.unpack(u"\1\116\1\uffff\1\115\3\116\4\uffff\1\47\5\uffff\1\47"
        u"\2\uffff\1\47\3\uffff\1\50"),
        DFA.unpack(u"\1\116\1\uffff\1\115\3\116\4\uffff\1\47\5\uffff\1\47"
        u"\2\uffff\1\47\3\uffff\1\50"),
        DFA.unpack(u"\1\137"),
        DFA.unpack(u"\1\140"),
        DFA.unpack(u"\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff\1\40"),
        DFA.unpack(u"\1\37\5\uffff\1\37\2\uffff\1\37\1\uffff\1\40"),
        DFA.unpack(u"\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff\1\50"),
        DFA.unpack(u"\1\47\5\uffff\1\47\2\uffff\1\47\3\uffff\1\50")
    ]

    # class definition for DFA #9

    class DFA9(DFA):
        pass


 

    FOLLOW_xmldecl_in_struxt29 = frozenset([4, 6, 7])
    FOLLOW_DOC_in_struxt40 = frozenset([4, 6, 7])
    FOLLOW_node_in_struxt49 = frozenset([])
    FOLLOW_EOF_in_struxt51 = frozenset([1])
    FOLLOW_XML_in_xmldecl72 = frozenset([6, 7, 9, 10, 11, 26, 28])
    FOLLOW_attributes_in_xmldecl74 = frozenset([16])
    FOLLOW_16_in_xmldecl76 = frozenset([1])
    FOLLOW_tag_in_node95 = frozenset([16, 19, 21, 22])
    FOLLOW_children_in_node111 = frozenset([1])
    FOLLOW_STR_in_node121 = frozenset([1])
    FOLLOW_ID_in_tag150 = frozenset([1, 6, 7, 9, 10, 11, 17, 18, 26, 28])
    FOLLOW_set_in_tag153 = frozenset([7])
    FOLLOW_ID_in_tag161 = frozenset([1, 6, 7, 9, 10, 11, 26, 28])
    FOLLOW_attributes_in_tag165 = frozenset([1])
    FOLLOW_19_in_children184 = frozenset([4, 6, 7, 20])
    FOLLOW_childs_in_children186 = frozenset([20])
    FOLLOW_20_in_children188 = frozenset([1])
    FOLLOW_21_in_children197 = frozenset([4, 6, 7, 16, 22])
    FOLLOW_node_in_children199 = frozenset([4, 6, 7, 16, 22])
    FOLLOW_set_in_children204 = frozenset([1])
    FOLLOW_node_in_childs227 = frozenset([1, 4, 6, 7])
    FOLLOW_tag_in_childs232 = frozenset([1])
    FOLLOW_ID_in_attribute255 = frozenset([23, 24])
    FOLLOW_set_in_attribute257 = frozenset([7])
    FOLLOW_ID_in_attribute265 = frozenset([1, 6, 7, 8, 9, 10, 11])
    FOLLOW_ID_in_attribute271 = frozenset([1, 6, 7, 8, 9, 10, 11, 17, 18])
    FOLLOW_set_in_attribute275 = frozenset([7])
    FOLLOW_ID_in_attribute283 = frozenset([1, 6, 7, 8, 9, 10, 11])
    FOLLOW_OP_in_attribute290 = frozenset([1, 6, 7, 9, 10, 11])
    FOLLOW_value_in_attribute295 = frozenset([1])
    FOLLOW_value_in_attribute306 = frozenset([1, 7, 8])
    FOLLOW_OP_in_attribute310 = frozenset([1, 7])
    FOLLOW_ID_in_attribute316 = frozenset([23, 24])
    FOLLOW_set_in_attribute319 = frozenset([7])
    FOLLOW_ID_in_attribute327 = frozenset([1])
    FOLLOW_ID_in_attribute333 = frozenset([1, 17, 18])
    FOLLOW_set_in_attribute336 = frozenset([7])
    FOLLOW_ID_in_attribute344 = frozenset([1])
    FOLLOW_set_in_value371 = frozenset([1])
    FOLLOW_attribute_in_attributes404 = frozenset([1, 25])
    FOLLOW_25_in_attributes408 = frozenset([6, 7, 9, 10, 11])
    FOLLOW_attribute_in_attributes410 = frozenset([1, 25])
    FOLLOW_26_in_attributes420 = frozenset([6, 7, 9, 10, 11])
    FOLLOW_attribute_in_attributes422 = frozenset([16, 22, 25, 27])
    FOLLOW_set_in_attributes426 = frozenset([6, 7, 9, 10, 11])
    FOLLOW_attribute_in_attributes434 = frozenset([16, 22, 25, 27])
    FOLLOW_27_in_attributes438 = frozenset([1])
    FOLLOW_28_in_attributes446 = frozenset([6, 7, 9, 10, 11])
    FOLLOW_attribute_in_attributes448 = frozenset([16, 22, 25, 29])
    FOLLOW_set_in_attributes452 = frozenset([6, 7, 9, 10, 11])
    FOLLOW_attribute_in_attributes460 = frozenset([16, 22, 25, 29])
    FOLLOW_29_in_attributes464 = frozenset([1])



def main(argv, stdin=sys.stdin, stdout=sys.stdout, stderr=sys.stderr):
    from antlr3.main import ParserMain
    main = ParserMain("StruxtPyLexer", StruxtPyParser)
    main.stdin = stdin
    main.stdout = stdout
    main.stderr = stderr
    main.execute(argv)


if __name__ == '__main__':
    main(sys.argv)
