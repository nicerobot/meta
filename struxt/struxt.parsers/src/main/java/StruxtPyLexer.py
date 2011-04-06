# $ANTLR 3.3 Nov 30, 2010 12:45:30 /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g 2011-04-05 10:59:02

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


class StruxtPyLexer(Lexer):

    grammarFileName = "/Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g"
    antlr_version = version_str_to_tuple("3.3 Nov 30, 2010 12:45:30")
    antlr_version_str = "3.3 Nov 30, 2010 12:45:30"

    def __init__(self, input=None, state=None):
        if state is None:
            state = RecognizerSharedState()
        super(StruxtPyLexer, self).__init__(input, state)


        self.dfa1 = self.DFA1(
            self, 1,
            eot = self.DFA1_eot,
            eof = self.DFA1_eof,
            min = self.DFA1_min,
            max = self.DFA1_max,
            accept = self.DFA1_accept,
            special = self.DFA1_special,
            transition = self.DFA1_transition
            )

        self.dfa19 = self.DFA19(
            self, 19,
            eot = self.DFA19_eot,
            eof = self.DFA19_eof,
            min = self.DFA19_min,
            max = self.DFA19_max,
            accept = self.DFA19_accept,
            special = self.DFA19_special,
            transition = self.DFA19_transition
            )

        self.dfa23 = self.DFA23(
            self, 23,
            eot = self.DFA23_eot,
            eof = self.DFA23_eof,
            min = self.DFA23_min,
            max = self.DFA23_max,
            accept = self.DFA23_accept,
            special = self.DFA23_special,
            transition = self.DFA23_transition
            )






    # $ANTLR start "T__16"
    def mT__16(self, ):

        try:
            _type = T__16
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:7:7: ( '.' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:7:9: '.'
            pass 
            self.match(46)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "T__16"



    # $ANTLR start "T__17"
    def mT__17(self, ):

        try:
            _type = T__17
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:8:7: ( '@' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:8:9: '@'
            pass 
            self.match(64)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "T__17"



    # $ANTLR start "T__18"
    def mT__18(self, ):

        try:
            _type = T__18
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:9:7: ( '\\\\' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:9:9: '\\\\'
            pass 
            self.match(92)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "T__18"



    # $ANTLR start "T__19"
    def mT__19(self, ):

        try:
            _type = T__19
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:10:7: ( '{' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:10:9: '{'
            pass 
            self.match(123)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "T__19"



    # $ANTLR start "T__20"
    def mT__20(self, ):

        try:
            _type = T__20
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:11:7: ( '}' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:11:9: '}'
            pass 
            self.match(125)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "T__20"



    # $ANTLR start "T__21"
    def mT__21(self, ):

        try:
            _type = T__21
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:12:7: ( ':' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:12:9: ':'
            pass 
            self.match(58)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "T__21"



    # $ANTLR start "T__22"
    def mT__22(self, ):

        try:
            _type = T__22
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:13:7: ( ';' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:13:9: ';'
            pass 
            self.match(59)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "T__22"



    # $ANTLR start "T__23"
    def mT__23(self, ):

        try:
            _type = T__23
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:14:7: ( '!' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:14:9: '!'
            pass 
            self.match(33)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "T__23"



    # $ANTLR start "T__24"
    def mT__24(self, ):

        try:
            _type = T__24
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:15:7: ( '#' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:15:9: '#'
            pass 
            self.match(35)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "T__24"



    # $ANTLR start "T__25"
    def mT__25(self, ):

        try:
            _type = T__25
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:16:7: ( ',' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:16:9: ','
            pass 
            self.match(44)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "T__25"



    # $ANTLR start "T__26"
    def mT__26(self, ):

        try:
            _type = T__26
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:17:7: ( '(' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:17:9: '('
            pass 
            self.match(40)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "T__26"



    # $ANTLR start "T__27"
    def mT__27(self, ):

        try:
            _type = T__27
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:18:7: ( ')' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:18:9: ')'
            pass 
            self.match(41)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "T__27"



    # $ANTLR start "T__28"
    def mT__28(self, ):

        try:
            _type = T__28
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:19:7: ( '[' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:19:9: '['
            pass 
            self.match(91)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "T__28"



    # $ANTLR start "T__29"
    def mT__29(self, ):

        try:
            _type = T__29
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:20:7: ( ']' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:20:9: ']'
            pass 
            self.match(93)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "T__29"



    # $ANTLR start "OP"
    def mOP(self, ):

        try:
            _type = OP
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:55:5: ( ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' ) )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:55:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )
            pass 
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:55:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )
            alt1 = 22
            alt1 = self.dfa1.predict(self.input)
            if alt1 == 1:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:55:8: '<'
                pass 
                self.match(60)


            elif alt1 == 2:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:55:14: '<<'
                pass 
                self.match("<<")


            elif alt1 == 3:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:55:21: '<-'
                pass 
                self.match("<-")


            elif alt1 == 4:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:55:28: '<->'
                pass 
                self.match("<->")


            elif alt1 == 5:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:55:36: '->'
                pass 
                self.match("->")


            elif alt1 == 6:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:55:43: '>>'
                pass 
                self.match(">>")


            elif alt1 == 7:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:55:50: '>'
                pass 
                self.match(62)


            elif alt1 == 8:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:55:56: '~'
                pass 
                self.match(126)


            elif alt1 == 9:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:55:62: '$'
                pass 
                self.match(36)


            elif alt1 == 10:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:55:68: '%'
                pass 
                self.match(37)


            elif alt1 == 11:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:55:74: '^'
                pass 
                self.match(94)


            elif alt1 == 12:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:55:80: '&'
                pass 
                self.match(38)


            elif alt1 == 13:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:55:86: '&&'
                pass 
                self.match("&&")


            elif alt1 == 14:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:56:7: '*'
                pass 
                self.match(42)


            elif alt1 == 15:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:56:13: '**'
                pass 
                self.match("**")


            elif alt1 == 16:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:56:20: '-'
                pass 
                self.match(45)


            elif alt1 == 17:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:56:26: '+'
                pass 
                self.match(43)


            elif alt1 == 18:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:56:32: '='
                pass 
                self.match(61)


            elif alt1 == 19:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:56:38: '|'
                pass 
                self.match(124)


            elif alt1 == 20:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:56:44: '||'
                pass 
                self.match("||")


            elif alt1 == 21:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:56:51: '/'
                pass 
                self.match(47)


            elif alt1 == 22:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:56:57: '?'
                pass 
                self.match(63)






            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "OP"



    # $ANTLR start "ID"
    def mID(self, ):

        try:
            _type = ID
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:60:5: ( ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )* )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:60:7: ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )*
            pass 
            if (65 <= self.input.LA(1) <= 90) or self.input.LA(1) == 95 or (97 <= self.input.LA(1) <= 122):
                self.input.consume()
            else:
                mse = MismatchedSetException(None, self.input)
                self.recover(mse)
                raise mse

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:60:31: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )*
            while True: #loop2
                alt2 = 2
                LA2_0 = self.input.LA(1)

                if (LA2_0 == 45 or (48 <= LA2_0 <= 57) or (65 <= LA2_0 <= 90) or LA2_0 == 95 or (97 <= LA2_0 <= 122)) :
                    alt2 = 1


                if alt2 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:
                    pass 
                    if self.input.LA(1) == 45 or (48 <= self.input.LA(1) <= 57) or (65 <= self.input.LA(1) <= 90) or self.input.LA(1) == 95 or (97 <= self.input.LA(1) <= 122):
                        self.input.consume()
                    else:
                        mse = MismatchedSetException(None, self.input)
                        self.recover(mse)
                        raise mse



                else:
                    break #loop2



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "ID"



    # $ANTLR start "XML"
    def mXML(self, ):

        try:
            _type = XML
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:64:5: ( '?xml' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:64:7: '?xml'
            pass 
            self.match("?xml")



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "XML"



    # $ANTLR start "DOC"
    def mDOC(self, ):

        try:
            _type = DOC
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:68:5: ( '!!!' ( options {greedy=false; } : . )+ '!!!' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:68:7: '!!!' ( options {greedy=false; } : . )+ '!!!'
            pass 
            self.match("!!!")
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:68:13: ( options {greedy=false; } : . )+
            cnt3 = 0
            while True: #loop3
                alt3 = 2
                LA3_0 = self.input.LA(1)

                if (LA3_0 == 33) :
                    LA3_1 = self.input.LA(2)

                    if (LA3_1 == 33) :
                        LA3_3 = self.input.LA(3)

                        if (LA3_3 == 33) :
                            alt3 = 2
                        elif ((0 <= LA3_3 <= 32) or (34 <= LA3_3 <= 65535)) :
                            alt3 = 1


                    elif ((0 <= LA3_1 <= 32) or (34 <= LA3_1 <= 65535)) :
                        alt3 = 1


                elif ((0 <= LA3_0 <= 32) or (34 <= LA3_0 <= 65535)) :
                    alt3 = 1


                if alt3 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:68:38: .
                    pass 
                    self.matchAny()


                else:
                    if cnt3 >= 1:
                        break #loop3

                    eee = EarlyExitException(3, self.input)
                    raise eee

                cnt3 += 1
            self.match("!!!")



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "DOC"



    # $ANTLR start "STR"
    def mSTR(self, ):

        try:
            _type = STR
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:72:5: ( '\"\"\"' ( options {greedy=false; } : . )* '\"\"\"' | '\\'\\'\\'' ( options {greedy=false; } : . )* '\\'\\'\\'' | '\"' (~ ( '\"' ) )* '\"' )
            alt7 = 3
            LA7_0 = self.input.LA(1)

            if (LA7_0 == 34) :
                LA7_1 = self.input.LA(2)

                if (LA7_1 == 34) :
                    LA7_3 = self.input.LA(3)

                    if (LA7_3 == 34) :
                        alt7 = 1
                    else:
                        alt7 = 3
                elif ((0 <= LA7_1 <= 33) or (35 <= LA7_1 <= 65535)) :
                    alt7 = 3
                else:
                    nvae = NoViableAltException("", 7, 1, self.input)

                    raise nvae

            elif (LA7_0 == 39) :
                alt7 = 2
            else:
                nvae = NoViableAltException("", 7, 0, self.input)

                raise nvae

            if alt7 == 1:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:72:7: '\"\"\"' ( options {greedy=false; } : . )* '\"\"\"'
                pass 
                self.match("\"\"\"")
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:72:13: ( options {greedy=false; } : . )*
                while True: #loop4
                    alt4 = 2
                    LA4_0 = self.input.LA(1)

                    if (LA4_0 == 34) :
                        LA4_1 = self.input.LA(2)

                        if (LA4_1 == 34) :
                            LA4_3 = self.input.LA(3)

                            if (LA4_3 == 34) :
                                alt4 = 2
                            elif ((0 <= LA4_3 <= 33) or (35 <= LA4_3 <= 65535)) :
                                alt4 = 1


                        elif ((0 <= LA4_1 <= 33) or (35 <= LA4_1 <= 65535)) :
                            alt4 = 1


                    elif ((0 <= LA4_0 <= 33) or (35 <= LA4_0 <= 65535)) :
                        alt4 = 1


                    if alt4 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:72:38: .
                        pass 
                        self.matchAny()


                    else:
                        break #loop4
                self.match("\"\"\"")


            elif alt7 == 2:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:73:7: '\\'\\'\\'' ( options {greedy=false; } : . )* '\\'\\'\\''
                pass 
                self.match("'''")
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:73:16: ( options {greedy=false; } : . )*
                while True: #loop5
                    alt5 = 2
                    LA5_0 = self.input.LA(1)

                    if (LA5_0 == 39) :
                        LA5_1 = self.input.LA(2)

                        if (LA5_1 == 39) :
                            LA5_3 = self.input.LA(3)

                            if (LA5_3 == 39) :
                                alt5 = 2
                            elif ((0 <= LA5_3 <= 38) or (40 <= LA5_3 <= 65535)) :
                                alt5 = 1


                        elif ((0 <= LA5_1 <= 38) or (40 <= LA5_1 <= 65535)) :
                            alt5 = 1


                    elif ((0 <= LA5_0 <= 38) or (40 <= LA5_0 <= 65535)) :
                        alt5 = 1


                    if alt5 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:73:41: .
                        pass 
                        self.matchAny()


                    else:
                        break #loop5
                self.match("'''")


            elif alt7 == 3:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:74:6: '\"' (~ ( '\"' ) )* '\"'
                pass 
                self.match(34)
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:74:10: (~ ( '\"' ) )*
                while True: #loop6
                    alt6 = 2
                    LA6_0 = self.input.LA(1)

                    if ((0 <= LA6_0 <= 33) or (35 <= LA6_0 <= 65535)) :
                        alt6 = 1


                    if alt6 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:74:10: ~ ( '\"' )
                        pass 
                        if (0 <= self.input.LA(1) <= 33) or (35 <= self.input.LA(1) <= 65535):
                            self.input.consume()
                        else:
                            mse = MismatchedSetException(None, self.input)
                            self.recover(mse)
                            raise mse



                    else:
                        break #loop6
                self.match(34)


            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "STR"



    # $ANTLR start "COMMENT"
    def mCOMMENT(self, ):

        try:
            _type = COMMENT
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:78:5: ( '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n' | '/*' ( options {greedy=false; } : . )* '*/' )
            alt11 = 2
            LA11_0 = self.input.LA(1)

            if (LA11_0 == 47) :
                LA11_1 = self.input.LA(2)

                if (LA11_1 == 47) :
                    alt11 = 1
                elif (LA11_1 == 42) :
                    alt11 = 2
                else:
                    nvae = NoViableAltException("", 11, 1, self.input)

                    raise nvae

            else:
                nvae = NoViableAltException("", 11, 0, self.input)

                raise nvae

            if alt11 == 1:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:78:9: '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n'
                pass 
                self.match("//")
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:78:14: (~ ( '\\n' | '\\r' ) )*
                while True: #loop8
                    alt8 = 2
                    LA8_0 = self.input.LA(1)

                    if ((0 <= LA8_0 <= 9) or (11 <= LA8_0 <= 12) or (14 <= LA8_0 <= 65535)) :
                        alt8 = 1


                    if alt8 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:78:14: ~ ( '\\n' | '\\r' )
                        pass 
                        if (0 <= self.input.LA(1) <= 9) or (11 <= self.input.LA(1) <= 12) or (14 <= self.input.LA(1) <= 65535):
                            self.input.consume()
                        else:
                            mse = MismatchedSetException(None, self.input)
                            self.recover(mse)
                            raise mse



                    else:
                        break #loop8
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:78:28: ( '\\r' )?
                alt9 = 2
                LA9_0 = self.input.LA(1)

                if (LA9_0 == 13) :
                    alt9 = 1
                if alt9 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:78:28: '\\r'
                    pass 
                    self.match(13)



                self.match(10)
                #action start
                _channel=HIDDEN;
                #action end


            elif alt11 == 2:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:79:9: '/*' ( options {greedy=false; } : . )* '*/'
                pass 
                self.match("/*")
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:79:14: ( options {greedy=false; } : . )*
                while True: #loop10
                    alt10 = 2
                    LA10_0 = self.input.LA(1)

                    if (LA10_0 == 42) :
                        LA10_1 = self.input.LA(2)

                        if (LA10_1 == 47) :
                            alt10 = 2
                        elif ((0 <= LA10_1 <= 46) or (48 <= LA10_1 <= 65535)) :
                            alt10 = 1


                    elif ((0 <= LA10_0 <= 41) or (43 <= LA10_0 <= 65535)) :
                        alt10 = 1


                    if alt10 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:79:42: .
                        pass 
                        self.matchAny()


                    else:
                        break #loop10
                self.match("*/")
                #action start
                _channel=HIDDEN;
                #action end


            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "COMMENT"



    # $ANTLR start "WS"
    def mWS(self, ):

        try:
            _type = WS
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:83:5: ( ( ' ' | '\\t' | '\\r' | '\\n' ) )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:83:9: ( ' ' | '\\t' | '\\r' | '\\n' )
            pass 
            if (9 <= self.input.LA(1) <= 10) or self.input.LA(1) == 13 or self.input.LA(1) == 32:
                self.input.consume()
            else:
                mse = MismatchedSetException(None, self.input)
                self.recover(mse)
                raise mse

            #action start
            _channel=HIDDEN;
            #action end



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "WS"



    # $ANTLR start "INT"
    def mINT(self, ):

        try:
            _type = INT
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:90:5: ( ( '0' .. '9' )+ )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:90:7: ( '0' .. '9' )+
            pass 
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:90:7: ( '0' .. '9' )+
            cnt12 = 0
            while True: #loop12
                alt12 = 2
                LA12_0 = self.input.LA(1)

                if ((48 <= LA12_0 <= 57)) :
                    alt12 = 1


                if alt12 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:90:7: '0' .. '9'
                    pass 
                    self.matchRange(48, 57)


                else:
                    if cnt12 >= 1:
                        break #loop12

                    eee = EarlyExitException(12, self.input)
                    raise eee

                cnt12 += 1



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "INT"



    # $ANTLR start "FLOAT"
    def mFLOAT(self, ):

        try:
            _type = FLOAT
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:94:5: ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT )
            alt19 = 3
            alt19 = self.dfa19.predict(self.input)
            if alt19 == 1:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:94:9: ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )?
                pass 
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:94:9: ( '0' .. '9' )+
                cnt13 = 0
                while True: #loop13
                    alt13 = 2
                    LA13_0 = self.input.LA(1)

                    if ((48 <= LA13_0 <= 57)) :
                        alt13 = 1


                    if alt13 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:94:10: '0' .. '9'
                        pass 
                        self.matchRange(48, 57)


                    else:
                        if cnt13 >= 1:
                            break #loop13

                        eee = EarlyExitException(13, self.input)
                        raise eee

                    cnt13 += 1
                self.match(46)
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:94:25: ( '0' .. '9' )*
                while True: #loop14
                    alt14 = 2
                    LA14_0 = self.input.LA(1)

                    if ((48 <= LA14_0 <= 57)) :
                        alt14 = 1


                    if alt14 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:94:26: '0' .. '9'
                        pass 
                        self.matchRange(48, 57)


                    else:
                        break #loop14
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:94:37: ( EXPONENT )?
                alt15 = 2
                LA15_0 = self.input.LA(1)

                if (LA15_0 == 69 or LA15_0 == 101) :
                    alt15 = 1
                if alt15 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:94:37: EXPONENT
                    pass 
                    self.mEXPONENT()





            elif alt19 == 2:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:95:9: '.' ( '0' .. '9' )+ ( EXPONENT )?
                pass 
                self.match(46)
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:95:13: ( '0' .. '9' )+
                cnt16 = 0
                while True: #loop16
                    alt16 = 2
                    LA16_0 = self.input.LA(1)

                    if ((48 <= LA16_0 <= 57)) :
                        alt16 = 1


                    if alt16 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:95:14: '0' .. '9'
                        pass 
                        self.matchRange(48, 57)


                    else:
                        if cnt16 >= 1:
                            break #loop16

                        eee = EarlyExitException(16, self.input)
                        raise eee

                    cnt16 += 1
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:95:25: ( EXPONENT )?
                alt17 = 2
                LA17_0 = self.input.LA(1)

                if (LA17_0 == 69 or LA17_0 == 101) :
                    alt17 = 1
                if alt17 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:95:25: EXPONENT
                    pass 
                    self.mEXPONENT()





            elif alt19 == 3:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:96:9: ( '0' .. '9' )+ EXPONENT
                pass 
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:96:9: ( '0' .. '9' )+
                cnt18 = 0
                while True: #loop18
                    alt18 = 2
                    LA18_0 = self.input.LA(1)

                    if ((48 <= LA18_0 <= 57)) :
                        alt18 = 1


                    if alt18 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:96:10: '0' .. '9'
                        pass 
                        self.matchRange(48, 57)


                    else:
                        if cnt18 >= 1:
                            break #loop18

                        eee = EarlyExitException(18, self.input)
                        raise eee

                    cnt18 += 1
                self.mEXPONENT()


            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "FLOAT"



    # $ANTLR start "CHAR"
    def mCHAR(self, ):

        try:
            _type = CHAR
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:100:5: ( '\\'' (~ ( '\\'' ) )+ '\\'' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:100:8: '\\'' (~ ( '\\'' ) )+ '\\''
            pass 
            self.match(39)
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:100:13: (~ ( '\\'' ) )+
            cnt20 = 0
            while True: #loop20
                alt20 = 2
                LA20_0 = self.input.LA(1)

                if ((0 <= LA20_0 <= 38) or (40 <= LA20_0 <= 65535)) :
                    alt20 = 1


                if alt20 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:100:13: ~ ( '\\'' )
                    pass 
                    if (0 <= self.input.LA(1) <= 38) or (40 <= self.input.LA(1) <= 65535):
                        self.input.consume()
                    else:
                        mse = MismatchedSetException(None, self.input)
                        self.recover(mse)
                        raise mse



                else:
                    if cnt20 >= 1:
                        break #loop20

                    eee = EarlyExitException(20, self.input)
                    raise eee

                cnt20 += 1
            self.match(39)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "CHAR"



    # $ANTLR start "EXPONENT"
    def mEXPONENT(self, ):

        try:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:105:5: ( ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+ )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:105:7: ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+
            pass 
            if self.input.LA(1) == 69 or self.input.LA(1) == 101:
                self.input.consume()
            else:
                mse = MismatchedSetException(None, self.input)
                self.recover(mse)
                raise mse

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:105:17: ( '+' | '-' )?
            alt21 = 2
            LA21_0 = self.input.LA(1)

            if (LA21_0 == 43 or LA21_0 == 45) :
                alt21 = 1
            if alt21 == 1:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:
                pass 
                if self.input.LA(1) == 43 or self.input.LA(1) == 45:
                    self.input.consume()
                else:
                    mse = MismatchedSetException(None, self.input)
                    self.recover(mse)
                    raise mse




            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:105:28: ( '0' .. '9' )+
            cnt22 = 0
            while True: #loop22
                alt22 = 2
                LA22_0 = self.input.LA(1)

                if ((48 <= LA22_0 <= 57)) :
                    alt22 = 1


                if alt22 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:105:29: '0' .. '9'
                    pass 
                    self.matchRange(48, 57)


                else:
                    if cnt22 >= 1:
                        break #loop22

                    eee = EarlyExitException(22, self.input)
                    raise eee

                cnt22 += 1




        finally:

            pass

    # $ANTLR end "EXPONENT"



    # $ANTLR start "HEX_DIGIT"
    def mHEX_DIGIT(self, ):

        try:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:110:5: ( ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' ) )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:110:7: ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' )
            pass 
            if (48 <= self.input.LA(1) <= 57) or (65 <= self.input.LA(1) <= 70) or (97 <= self.input.LA(1) <= 102):
                self.input.consume()
            else:
                mse = MismatchedSetException(None, self.input)
                self.recover(mse)
                raise mse





        finally:

            pass

    # $ANTLR end "HEX_DIGIT"



    def mTokens(self):
        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:8: ( T__16 | T__17 | T__18 | T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | T__29 | OP | ID | XML | DOC | STR | COMMENT | WS | INT | FLOAT | CHAR )
        alt23 = 24
        alt23 = self.dfa23.predict(self.input)
        if alt23 == 1:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:10: T__16
            pass 
            self.mT__16()


        elif alt23 == 2:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:16: T__17
            pass 
            self.mT__17()


        elif alt23 == 3:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:22: T__18
            pass 
            self.mT__18()


        elif alt23 == 4:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:28: T__19
            pass 
            self.mT__19()


        elif alt23 == 5:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:34: T__20
            pass 
            self.mT__20()


        elif alt23 == 6:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:40: T__21
            pass 
            self.mT__21()


        elif alt23 == 7:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:46: T__22
            pass 
            self.mT__22()


        elif alt23 == 8:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:52: T__23
            pass 
            self.mT__23()


        elif alt23 == 9:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:58: T__24
            pass 
            self.mT__24()


        elif alt23 == 10:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:64: T__25
            pass 
            self.mT__25()


        elif alt23 == 11:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:70: T__26
            pass 
            self.mT__26()


        elif alt23 == 12:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:76: T__27
            pass 
            self.mT__27()


        elif alt23 == 13:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:82: T__28
            pass 
            self.mT__28()


        elif alt23 == 14:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:88: T__29
            pass 
            self.mT__29()


        elif alt23 == 15:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:94: OP
            pass 
            self.mOP()


        elif alt23 == 16:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:97: ID
            pass 
            self.mID()


        elif alt23 == 17:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:100: XML
            pass 
            self.mXML()


        elif alt23 == 18:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:104: DOC
            pass 
            self.mDOC()


        elif alt23 == 19:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:108: STR
            pass 
            self.mSTR()


        elif alt23 == 20:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:112: COMMENT
            pass 
            self.mCOMMENT()


        elif alt23 == 21:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:120: WS
            pass 
            self.mWS()


        elif alt23 == 22:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:123: INT
            pass 
            self.mINT()


        elif alt23 == 23:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:127: FLOAT
            pass 
            self.mFLOAT()


        elif alt23 == 24:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:133: CHAR
            pass 
            self.mCHAR()







    # lookup tables for DFA #1

    DFA1_eot = DFA.unpack(
        u"\1\uffff\1\21\1\23\1\25\4\uffff\1\27\1\31\2\uffff\1\33\3\uffff"
        u"\1\35\15\uffff"
        )

    DFA1_eof = DFA.unpack(
        u"\36\uffff"
        )

    DFA1_min = DFA.unpack(
        u"\1\44\1\55\2\76\4\uffff\1\46\1\52\2\uffff\1\174\3\uffff\1\76\15"
        u"\uffff"
        )

    DFA1_max = DFA.unpack(
        u"\1\176\1\74\2\76\4\uffff\1\46\1\52\2\uffff\1\174\3\uffff\1\76\15"
        u"\uffff"
        )

    DFA1_accept = DFA.unpack(
        u"\4\uffff\1\10\1\11\1\12\1\13\2\uffff\1\21\1\22\1\uffff\1\25\1\26"
        u"\1\2\1\uffff\1\1\1\5\1\20\1\6\1\7\1\15\1\14\1\17\1\16\1\24\1\23"
        u"\1\4\1\3"
        )

    DFA1_special = DFA.unpack(
        u"\36\uffff"
        )

            
    DFA1_transition = [
        DFA.unpack(u"\1\5\1\6\1\10\3\uffff\1\11\1\12\1\uffff\1\2\1\uffff"
        u"\1\15\14\uffff\1\1\1\13\1\3\1\16\36\uffff\1\7\35\uffff\1\14\1\uffff"
        u"\1\4"),
        DFA.unpack(u"\1\20\16\uffff\1\17"),
        DFA.unpack(u"\1\22"),
        DFA.unpack(u"\1\24"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"\1\26"),
        DFA.unpack(u"\1\30"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"\1\32"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"\1\34"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"")
    ]

    # class definition for DFA #1

    class DFA1(DFA):
        pass


    # lookup tables for DFA #19

    DFA19_eot = DFA.unpack(
        u"\5\uffff"
        )

    DFA19_eof = DFA.unpack(
        u"\5\uffff"
        )

    DFA19_min = DFA.unpack(
        u"\2\56\3\uffff"
        )

    DFA19_max = DFA.unpack(
        u"\1\71\1\145\3\uffff"
        )

    DFA19_accept = DFA.unpack(
        u"\2\uffff\1\2\1\1\1\3"
        )

    DFA19_special = DFA.unpack(
        u"\5\uffff"
        )

            
    DFA19_transition = [
        DFA.unpack(u"\1\2\1\uffff\12\1"),
        DFA.unpack(u"\1\3\1\uffff\12\1\13\uffff\1\4\37\uffff\1\4"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"")
    ]

    # class definition for DFA #19

    class DFA19(DFA):
        pass


    # lookup tables for DFA #23

    DFA23_eot = DFA.unpack(
        u"\1\uffff\1\27\6\uffff\1\32\7\uffff\2\17\4\uffff\1\36\10\uffff"
        )

    DFA23_eof = DFA.unpack(
        u"\37\uffff"
        )

    DFA23_min = DFA.unpack(
        u"\1\11\1\60\6\uffff\1\41\7\uffff\1\52\1\170\2\uffff\1\0\1\uffff"
        u"\1\56\10\uffff"
        )

    DFA23_max = DFA.unpack(
        u"\1\176\1\71\6\uffff\1\41\7\uffff\1\57\1\170\2\uffff\1\uffff\1\uffff"
        u"\1\145\10\uffff"
        )

    DFA23_accept = DFA.unpack(
        u"\2\uffff\1\2\1\3\1\4\1\5\1\6\1\7\1\uffff\1\11\1\12\1\13\1\14\1"
        u"\15\1\16\1\17\2\uffff\1\20\1\23\1\uffff\1\25\1\uffff\1\1\1\27\1"
        u"\22\1\10\1\24\1\21\1\30\1\26"
        )

    DFA23_special = DFA.unpack(
        u"\24\uffff\1\0\12\uffff"
        )

            
    DFA23_transition = [
        DFA.unpack(u"\2\25\2\uffff\1\25\22\uffff\1\25\1\10\1\23\1\11\3\17"
        u"\1\24\1\13\1\14\2\17\1\12\1\17\1\1\1\20\12\26\1\6\1\7\3\17\1\21"
        u"\1\2\32\22\1\15\1\3\1\16\1\17\1\22\1\uffff\32\22\1\4\1\17\1\5\1"
        u"\17"),
        DFA.unpack(u"\12\30"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"\1\31"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"\1\33\4\uffff\1\33"),
        DFA.unpack(u"\1\34"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"\47\35\1\23\uffd8\35"),
        DFA.unpack(u""),
        DFA.unpack(u"\1\30\1\uffff\12\26\13\uffff\1\30\37\uffff\1\30"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"")
    ]

    # class definition for DFA #23

    class DFA23(DFA):
        pass


        def specialStateTransition(self_, s, input):
            # convince pylint that my self_ magic is ok ;)
            # pylint: disable-msg=E0213

            # pretend we are a member of the recognizer
            # thus semantic predicates can be evaluated
            self = self_.recognizer

            _s = s

            if s == 0: 
                LA23_20 = input.LA(1)

                s = -1
                if (LA23_20 == 39):
                    s = 19

                elif ((0 <= LA23_20 <= 38) or (40 <= LA23_20 <= 65535)):
                    s = 29

                if s >= 0:
                    return s

            nvae = NoViableAltException(self_.getDescription(), 23, _s, input)
            self_.error(nvae)
            raise nvae
 



def main(argv, stdin=sys.stdin, stdout=sys.stdout, stderr=sys.stderr):
    from antlr3.main import LexerMain
    main = LexerMain(StruxtPyLexer)
    main.stdin = stdin
    main.stdout = stdout
    main.stderr = stderr
    main.execute(argv)


if __name__ == '__main__':
    main(sys.argv)
