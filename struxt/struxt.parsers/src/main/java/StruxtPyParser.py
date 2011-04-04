# $ANTLR 3.3 Nov 30, 2010 12:45:30 /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g 2011-04-04 13:31:58

import sys
from antlr3 import *
from antlr3.compat import set, frozenset


# for convenience in actions
HIDDEN = BaseRecognizer.HIDDEN

# token types
EOF=-1
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
STR=4
ID=5
INT=6
FLOAT=7
CHAR=8
COMMENT=9
WS=10
ESC_SEQ=11
STRING=12
EXPONENT=13
HEX_DIGIT=14
UNICODE_ESC=15
OCTAL_ESC=16

# token names
tokenNames = [
    "<invalid>", "<EOR>", "<DOWN>", "<UP>", 
    "STR", "ID", "INT", "FLOAT", "CHAR", "COMMENT", "WS", "ESC_SEQ", "STRING", 
    "EXPONENT", "HEX_DIGIT", "UNICODE_ESC", "OCTAL_ESC", "'{'", "'}'", "'['", 
    "']'", "'('", "')'", "':'", "'.'", "';'", "','"
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

        self.dfa6 = self.DFA6(
            self, 6,
            eot = self.DFA6_eot,
            eof = self.DFA6_eof,
            min = self.DFA6_min,
            max = self.DFA6_max,
            accept = self.DFA6_accept,
            special = self.DFA6_special,
            transition = self.DFA6_transition
            )






                


        



    # $ANTLR start "struxt"
    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:7:1: struxt : node EOF ;
    def struxt(self, ):

        try:
            try:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:8:5: ( node EOF )
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:8:7: node EOF
                pass 
                self._state.following.append(self.FOLLOW_node_in_struxt26)
                self.node()

                self._state.following.pop()
                self.match(self.input, EOF, self.FOLLOW_EOF_in_struxt28)




            except RecognitionException, re:
                self.reportError(re)
                self.recover(self.input, re)
        finally:

            pass
        return 

    # $ANTLR end "struxt"


    # $ANTLR start "node"
    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:11:1: node : ( tag children | STR );
    def node(self, ):

        try:
            try:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:12:5: ( tag children | STR )
                alt1 = 2
                LA1_0 = self.input.LA(1)

                if (LA1_0 == ID) :
                    alt1 = 1
                elif (LA1_0 == STR) :
                    alt1 = 2
                else:
                    nvae = NoViableAltException("", 1, 0, self.input)

                    raise nvae

                if alt1 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:12:7: tag children
                    pass 
                    self._state.following.append(self.FOLLOW_tag_in_node45)
                    self.tag()

                    self._state.following.pop()
                    self._state.following.append(self.FOLLOW_children_in_node47)
                    self.children()

                    self._state.following.pop()


                elif alt1 == 2:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:13:7: STR
                    pass 
                    self.match(self.input, STR, self.FOLLOW_STR_in_node55)



            except RecognitionException, re:
                self.reportError(re)
                self.recover(self.input, re)
        finally:

            pass
        return 

    # $ANTLR end "node"


    # $ANTLR start "tag"
    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:16:1: tag : ID ( attributes )? ;
    def tag(self, ):

        try:
            try:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:17:5: ( ID ( attributes )? )
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:17:7: ID ( attributes )?
                pass 
                self.match(self.input, ID, self.FOLLOW_ID_in_tag72)
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:17:10: ( attributes )?
                alt2 = 2
                LA2_0 = self.input.LA(1)

                if ((STR <= LA2_0 <= CHAR)) :
                    alt2 = 1
                if alt2 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:17:10: attributes
                    pass 
                    self._state.following.append(self.FOLLOW_attributes_in_tag74)
                    self.attributes()

                    self._state.following.pop()







            except RecognitionException, re:
                self.reportError(re)
                self.recover(self.input, re)
        finally:

            pass
        return 

    # $ANTLR end "tag"


    # $ANTLR start "children"
    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:20:10: fragment children : ( '{' childs '}' | '[' childs ']' | '(' childs ')' | ( ':' ( node )* )? ( '.' | ';' ) );
    def children(self, ):

        try:
            try:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:21:5: ( '{' childs '}' | '[' childs ']' | '(' childs ')' | ( ':' ( node )* )? ( '.' | ';' ) )
                alt5 = 4
                LA5 = self.input.LA(1)
                if LA5 == 17:
                    alt5 = 1
                elif LA5 == 19:
                    alt5 = 2
                elif LA5 == 21:
                    alt5 = 3
                elif LA5 == 23 or LA5 == 24 or LA5 == 25:
                    alt5 = 4
                else:
                    nvae = NoViableAltException("", 5, 0, self.input)

                    raise nvae

                if alt5 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:21:7: '{' childs '}'
                    pass 
                    self.match(self.input, 17, self.FOLLOW_17_in_children93)
                    self._state.following.append(self.FOLLOW_childs_in_children95)
                    self.childs()

                    self._state.following.pop()
                    self.match(self.input, 18, self.FOLLOW_18_in_children97)


                elif alt5 == 2:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:22:7: '[' childs ']'
                    pass 
                    self.match(self.input, 19, self.FOLLOW_19_in_children105)
                    self._state.following.append(self.FOLLOW_childs_in_children107)
                    self.childs()

                    self._state.following.pop()
                    self.match(self.input, 20, self.FOLLOW_20_in_children109)


                elif alt5 == 3:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:23:7: '(' childs ')'
                    pass 
                    self.match(self.input, 21, self.FOLLOW_21_in_children117)
                    self._state.following.append(self.FOLLOW_childs_in_children119)
                    self.childs()

                    self._state.following.pop()
                    self.match(self.input, 22, self.FOLLOW_22_in_children121)


                elif alt5 == 4:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:24:7: ( ':' ( node )* )? ( '.' | ';' )
                    pass 
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:24:7: ( ':' ( node )* )?
                    alt4 = 2
                    LA4_0 = self.input.LA(1)

                    if (LA4_0 == 23) :
                        alt4 = 1
                    if alt4 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:24:8: ':' ( node )*
                        pass 
                        self.match(self.input, 23, self.FOLLOW_23_in_children130)
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:24:12: ( node )*
                        while True: #loop3
                            alt3 = 2
                            LA3_0 = self.input.LA(1)

                            if ((STR <= LA3_0 <= ID)) :
                                alt3 = 1


                            if alt3 == 1:
                                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:24:12: node
                                pass 
                                self._state.following.append(self.FOLLOW_node_in_children132)
                                self.node()

                                self._state.following.pop()


                            else:
                                break #loop3



                    if (24 <= self.input.LA(1) <= 25):
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
    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:27:10: fragment childs : ( node )* ( tag )? ;
    def childs(self, ):

        try:
            try:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:28:5: ( ( node )* ( tag )? )
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:28:7: ( node )* ( tag )?
                pass 
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:28:7: ( node )*
                while True: #loop6
                    alt6 = 2
                    alt6 = self.dfa6.predict(self.input)
                    if alt6 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:28:7: node
                        pass 
                        self._state.following.append(self.FOLLOW_node_in_childs160)
                        self.node()

                        self._state.following.pop()


                    else:
                        break #loop6
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:28:13: ( tag )?
                alt7 = 2
                LA7_0 = self.input.LA(1)

                if (LA7_0 == ID) :
                    alt7 = 1
                if alt7 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:28:13: tag
                    pass 
                    self._state.following.append(self.FOLLOW_tag_in_childs163)
                    self.tag()

                    self._state.following.pop()







            except RecognitionException, re:
                self.reportError(re)
                self.recover(self.input, re)
        finally:

            pass
        return 

    # $ANTLR end "childs"


    # $ANTLR start "attribute"
    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:31:10: fragment attribute : ( ID ( STR | INT | FLOAT | CHAR )? | ( STR | INT | FLOAT | CHAR ) ( ID )? );
    def attribute(self, ):

        try:
            try:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:32:5: ( ID ( STR | INT | FLOAT | CHAR )? | ( STR | INT | FLOAT | CHAR ) ( ID )? )
                alt10 = 2
                LA10_0 = self.input.LA(1)

                if (LA10_0 == ID) :
                    alt10 = 1
                elif (LA10_0 == STR or (INT <= LA10_0 <= CHAR)) :
                    alt10 = 2
                else:
                    nvae = NoViableAltException("", 10, 0, self.input)

                    raise nvae

                if alt10 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:32:7: ID ( STR | INT | FLOAT | CHAR )?
                    pass 
                    self.match(self.input, ID, self.FOLLOW_ID_in_attribute183)
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:32:10: ( STR | INT | FLOAT | CHAR )?
                    alt8 = 2
                    LA8_0 = self.input.LA(1)

                    if (LA8_0 == STR or (INT <= LA8_0 <= CHAR)) :
                        alt8 = 1
                    if alt8 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:
                        pass 
                        if self.input.LA(1) == STR or (INT <= self.input.LA(1) <= CHAR):
                            self.input.consume()
                            self._state.errorRecovery = False

                        else:
                            mse = MismatchedSetException(None, self.input)
                            raise mse







                elif alt10 == 2:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:33:7: ( STR | INT | FLOAT | CHAR ) ( ID )?
                    pass 
                    if self.input.LA(1) == STR or (INT <= self.input.LA(1) <= CHAR):
                        self.input.consume()
                        self._state.errorRecovery = False

                    else:
                        mse = MismatchedSetException(None, self.input)
                        raise mse


                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:33:34: ( ID )?
                    alt9 = 2
                    LA9_0 = self.input.LA(1)

                    if (LA9_0 == ID) :
                        alt9 = 1
                    if alt9 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:33:34: ID
                        pass 
                        self.match(self.input, ID, self.FOLLOW_ID_in_attribute224)






            except RecognitionException, re:
                self.reportError(re)
                self.recover(self.input, re)
        finally:

            pass
        return 

    # $ANTLR end "attribute"


    # $ANTLR start "attributes"
    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:36:10: fragment attributes : attribute ( ',' attribute )* ;
    def attributes(self, ):

        try:
            try:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:37:5: ( attribute ( ',' attribute )* )
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:37:7: attribute ( ',' attribute )*
                pass 
                self._state.following.append(self.FOLLOW_attribute_in_attributes244)
                self.attribute()

                self._state.following.pop()
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:37:17: ( ',' attribute )*
                while True: #loop11
                    alt11 = 2
                    LA11_0 = self.input.LA(1)

                    if (LA11_0 == 26) :
                        alt11 = 1


                    if alt11 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:37:19: ',' attribute
                        pass 
                        self.match(self.input, 26, self.FOLLOW_26_in_attributes248)
                        self._state.following.append(self.FOLLOW_attribute_in_attributes250)
                        self.attribute()

                        self._state.following.pop()


                    else:
                        break #loop11




            except RecognitionException, re:
                self.reportError(re)
                self.recover(self.input, re)
        finally:

            pass
        return 

    # $ANTLR end "attributes"


    # Delegated rules


    # lookup tables for DFA #6

    DFA6_eot = DFA.unpack(
        u"\15\uffff"
        )

    DFA6_eof = DFA.unpack(
        u"\15\uffff"
        )

    DFA6_min = DFA.unpack(
        u"\2\4\2\uffff\1\4\1\5\1\21\1\4\1\21\1\4\1\5\2\21"
        )

    DFA6_max = DFA.unpack(
        u"\1\26\1\31\2\uffff\3\32\1\10\5\32"
        )

    DFA6_accept = DFA.unpack(
        u"\2\uffff\1\2\1\1\11\uffff"
        )

    DFA6_special = DFA.unpack(
        u"\15\uffff"
        )

            
    DFA6_transition = [
        DFA.unpack(u"\1\3\1\1\14\uffff\1\2\1\uffff\1\2\1\uffff\1\2"),
        DFA.unpack(u"\1\5\1\4\3\5\10\uffff\1\3\1\2\1\3\1\2\1\3\1\2\3\3"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"\1\6\1\uffff\3\6\10\uffff\1\3\1\2\1\3\1\2\1\3\1\2\3"
        u"\3\1\7"),
        DFA.unpack(u"\1\10\13\uffff\1\3\1\2\1\3\1\2\1\3\1\2\3\3\1\7"),
        DFA.unpack(u"\1\3\1\2\1\3\1\2\1\3\1\2\3\3\1\7"),
        DFA.unpack(u"\1\12\1\11\3\12"),
        DFA.unpack(u"\1\3\1\2\1\3\1\2\1\3\1\2\3\3\1\7"),
        DFA.unpack(u"\1\13\1\uffff\3\13\10\uffff\1\3\1\2\1\3\1\2\1\3\1\2"
        u"\3\3\1\7"),
        DFA.unpack(u"\1\14\13\uffff\1\3\1\2\1\3\1\2\1\3\1\2\3\3\1\7"),
        DFA.unpack(u"\1\3\1\2\1\3\1\2\1\3\1\2\3\3\1\7"),
        DFA.unpack(u"\1\3\1\2\1\3\1\2\1\3\1\2\3\3\1\7")
    ]

    # class definition for DFA #6

    class DFA6(DFA):
        pass


 

    FOLLOW_node_in_struxt26 = frozenset([])
    FOLLOW_EOF_in_struxt28 = frozenset([1])
    FOLLOW_tag_in_node45 = frozenset([17, 19, 21, 23, 24, 25])
    FOLLOW_children_in_node47 = frozenset([1])
    FOLLOW_STR_in_node55 = frozenset([1])
    FOLLOW_ID_in_tag72 = frozenset([1, 4, 5, 6, 7, 8])
    FOLLOW_attributes_in_tag74 = frozenset([1])
    FOLLOW_17_in_children93 = frozenset([4, 5, 18])
    FOLLOW_childs_in_children95 = frozenset([18])
    FOLLOW_18_in_children97 = frozenset([1])
    FOLLOW_19_in_children105 = frozenset([4, 5, 20])
    FOLLOW_childs_in_children107 = frozenset([20])
    FOLLOW_20_in_children109 = frozenset([1])
    FOLLOW_21_in_children117 = frozenset([4, 5, 22])
    FOLLOW_childs_in_children119 = frozenset([22])
    FOLLOW_22_in_children121 = frozenset([1])
    FOLLOW_23_in_children130 = frozenset([4, 5, 24, 25])
    FOLLOW_node_in_children132 = frozenset([4, 5, 24, 25])
    FOLLOW_set_in_children137 = frozenset([1])
    FOLLOW_node_in_childs160 = frozenset([1, 4, 5])
    FOLLOW_tag_in_childs163 = frozenset([1])
    FOLLOW_ID_in_attribute183 = frozenset([1, 4, 6, 7, 8])
    FOLLOW_set_in_attribute185 = frozenset([1])
    FOLLOW_set_in_attribute208 = frozenset([1, 5])
    FOLLOW_ID_in_attribute224 = frozenset([1])
    FOLLOW_attribute_in_attributes244 = frozenset([1, 26])
    FOLLOW_26_in_attributes248 = frozenset([4, 5, 6, 7, 8])
    FOLLOW_attribute_in_attributes250 = frozenset([1, 26])



def main(argv, stdin=sys.stdin, stdout=sys.stdout, stderr=sys.stderr):
    from antlr3.main import ParserMain
    main = ParserMain("StruxtPyLexer", StruxtPyParser)
    main.stdin = stdin
    main.stdout = stdout
    main.stderr = stderr
    main.execute(argv)


if __name__ == '__main__':
    main(sys.argv)
