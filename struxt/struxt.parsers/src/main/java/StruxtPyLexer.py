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


class StruxtPyLexer(Lexer):

    grammarFileName = "/Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g"
    antlr_version = version_str_to_tuple("3.3 Nov 30, 2010 12:45:30")
    antlr_version_str = "3.3 Nov 30, 2010 12:45:30"

    def __init__(self, input=None, state=None):
        if state is None:
            state = RecognizerSharedState()
        super(StruxtPyLexer, self).__init__(input, state)


        self.dfa15 = self.DFA15(
            self, 15,
            eot = self.DFA15_eot,
            eof = self.DFA15_eof,
            min = self.DFA15_min,
            max = self.DFA15_max,
            accept = self.DFA15_accept,
            special = self.DFA15_special,
            transition = self.DFA15_transition
            )

        self.dfa21 = self.DFA21(
            self, 21,
            eot = self.DFA21_eot,
            eof = self.DFA21_eof,
            min = self.DFA21_min,
            max = self.DFA21_max,
            accept = self.DFA21_accept,
            special = self.DFA21_special,
            transition = self.DFA21_transition
            )






    # $ANTLR start "T__17"
    def mT__17(self, ):

        try:
            _type = T__17
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:7:7: ( '{' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:7:9: '{'
            pass 
            self.match(123)



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

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:8:7: ( '}' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:8:9: '}'
            pass 
            self.match(125)



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

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:9:7: ( '[' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:9:9: '['
            pass 
            self.match(91)



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

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:10:7: ( ']' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:10:9: ']'
            pass 
            self.match(93)



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

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:11:7: ( '(' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:11:9: '('
            pass 
            self.match(40)



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

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:12:7: ( ')' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:12:9: ')'
            pass 
            self.match(41)



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

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:13:7: ( ':' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:13:9: ':'
            pass 
            self.match(58)



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

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:14:7: ( '.' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:14:9: '.'
            pass 
            self.match(46)



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

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:15:7: ( ';' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:15:9: ';'
            pass 
            self.match(59)



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

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:16:7: ( ',' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:16:9: ','
            pass 
            self.match(44)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "T__26"



    # $ANTLR start "ID"
    def mID(self, ):

        try:
            _type = ID
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:41:5: ( ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )* )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:41:7: ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            pass 
            if (65 <= self.input.LA(1) <= 90) or self.input.LA(1) == 95 or (97 <= self.input.LA(1) <= 122):
                self.input.consume()
            else:
                mse = MismatchedSetException(None, self.input)
                self.recover(mse)
                raise mse

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:41:31: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            while True: #loop1
                alt1 = 2
                LA1_0 = self.input.LA(1)

                if ((48 <= LA1_0 <= 57) or (65 <= LA1_0 <= 90) or LA1_0 == 95 or (97 <= LA1_0 <= 122)) :
                    alt1 = 1


                if alt1 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:
                    pass 
                    if (48 <= self.input.LA(1) <= 57) or (65 <= self.input.LA(1) <= 90) or self.input.LA(1) == 95 or (97 <= self.input.LA(1) <= 122):
                        self.input.consume()
                    else:
                        mse = MismatchedSetException(None, self.input)
                        self.recover(mse)
                        raise mse



                else:
                    break #loop1



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "ID"



    # $ANTLR start "STR"
    def mSTR(self, ):

        try:
            _type = STR
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:45:5: ( '\"' (~ ( '\"' ) )* '\"' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:45:8: '\"' (~ ( '\"' ) )* '\"'
            pass 
            self.match(34)
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:45:12: (~ ( '\"' ) )*
            while True: #loop2
                alt2 = 2
                LA2_0 = self.input.LA(1)

                if ((0 <= LA2_0 <= 33) or (35 <= LA2_0 <= 65535)) :
                    alt2 = 1


                if alt2 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:45:12: ~ ( '\"' )
                    pass 
                    if (0 <= self.input.LA(1) <= 33) or (35 <= self.input.LA(1) <= 65535):
                        self.input.consume()
                    else:
                        mse = MismatchedSetException(None, self.input)
                        self.recover(mse)
                        raise mse



                else:
                    break #loop2
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

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:49:5: ( '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n' | '/*' ( options {greedy=false; } : . )* '*/' )
            alt6 = 2
            LA6_0 = self.input.LA(1)

            if (LA6_0 == 47) :
                LA6_1 = self.input.LA(2)

                if (LA6_1 == 47) :
                    alt6 = 1
                elif (LA6_1 == 42) :
                    alt6 = 2
                else:
                    nvae = NoViableAltException("", 6, 1, self.input)

                    raise nvae

            else:
                nvae = NoViableAltException("", 6, 0, self.input)

                raise nvae

            if alt6 == 1:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:49:9: '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n'
                pass 
                self.match("//")
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:49:14: (~ ( '\\n' | '\\r' ) )*
                while True: #loop3
                    alt3 = 2
                    LA3_0 = self.input.LA(1)

                    if ((0 <= LA3_0 <= 9) or (11 <= LA3_0 <= 12) or (14 <= LA3_0 <= 65535)) :
                        alt3 = 1


                    if alt3 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:49:14: ~ ( '\\n' | '\\r' )
                        pass 
                        if (0 <= self.input.LA(1) <= 9) or (11 <= self.input.LA(1) <= 12) or (14 <= self.input.LA(1) <= 65535):
                            self.input.consume()
                        else:
                            mse = MismatchedSetException(None, self.input)
                            self.recover(mse)
                            raise mse



                    else:
                        break #loop3
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:49:28: ( '\\r' )?
                alt4 = 2
                LA4_0 = self.input.LA(1)

                if (LA4_0 == 13) :
                    alt4 = 1
                if alt4 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:49:28: '\\r'
                    pass 
                    self.match(13)



                self.match(10)
                #action start
                _channel=HIDDEN;
                #action end


            elif alt6 == 2:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:50:9: '/*' ( options {greedy=false; } : . )* '*/'
                pass 
                self.match("/*")
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:50:14: ( options {greedy=false; } : . )*
                while True: #loop5
                    alt5 = 2
                    LA5_0 = self.input.LA(1)

                    if (LA5_0 == 42) :
                        LA5_1 = self.input.LA(2)

                        if (LA5_1 == 47) :
                            alt5 = 2
                        elif ((0 <= LA5_1 <= 46) or (48 <= LA5_1 <= 65535)) :
                            alt5 = 1


                    elif ((0 <= LA5_0 <= 41) or (43 <= LA5_0 <= 65535)) :
                        alt5 = 1


                    if alt5 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:50:42: .
                        pass 
                        self.matchAny()


                    else:
                        break #loop5
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

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:54:5: ( ( ' ' | '\\t' | '\\r' | '\\n' ) )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:54:9: ( ' ' | '\\t' | '\\r' | '\\n' )
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



    # $ANTLR start "STRING"
    def mSTRING(self, ):

        try:
            _type = STRING
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:62:5: ( '\"' ( ESC_SEQ | ~ ( '\\\\' | '\"' ) )* '\"' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:62:8: '\"' ( ESC_SEQ | ~ ( '\\\\' | '\"' ) )* '\"'
            pass 
            self.match(34)
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:62:12: ( ESC_SEQ | ~ ( '\\\\' | '\"' ) )*
            while True: #loop7
                alt7 = 3
                LA7_0 = self.input.LA(1)

                if (LA7_0 == 92) :
                    alt7 = 1
                elif ((0 <= LA7_0 <= 33) or (35 <= LA7_0 <= 91) or (93 <= LA7_0 <= 65535)) :
                    alt7 = 2


                if alt7 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:62:14: ESC_SEQ
                    pass 
                    self.mESC_SEQ()


                elif alt7 == 2:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:62:24: ~ ( '\\\\' | '\"' )
                    pass 
                    if (0 <= self.input.LA(1) <= 33) or (35 <= self.input.LA(1) <= 91) or (93 <= self.input.LA(1) <= 65535):
                        self.input.consume()
                    else:
                        mse = MismatchedSetException(None, self.input)
                        self.recover(mse)
                        raise mse



                else:
                    break #loop7
            self.match(34)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "STRING"



    # $ANTLR start "INT"
    def mINT(self, ):

        try:
            _type = INT
            _channel = DEFAULT_CHANNEL

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:65:5: ( ( '0' .. '9' )+ )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:65:7: ( '0' .. '9' )+
            pass 
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:65:7: ( '0' .. '9' )+
            cnt8 = 0
            while True: #loop8
                alt8 = 2
                LA8_0 = self.input.LA(1)

                if ((48 <= LA8_0 <= 57)) :
                    alt8 = 1


                if alt8 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:65:7: '0' .. '9'
                    pass 
                    self.matchRange(48, 57)


                else:
                    if cnt8 >= 1:
                        break #loop8

                    eee = EarlyExitException(8, self.input)
                    raise eee

                cnt8 += 1



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

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:69:5: ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT )
            alt15 = 3
            alt15 = self.dfa15.predict(self.input)
            if alt15 == 1:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:69:9: ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )?
                pass 
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:69:9: ( '0' .. '9' )+
                cnt9 = 0
                while True: #loop9
                    alt9 = 2
                    LA9_0 = self.input.LA(1)

                    if ((48 <= LA9_0 <= 57)) :
                        alt9 = 1


                    if alt9 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:69:10: '0' .. '9'
                        pass 
                        self.matchRange(48, 57)


                    else:
                        if cnt9 >= 1:
                            break #loop9

                        eee = EarlyExitException(9, self.input)
                        raise eee

                    cnt9 += 1
                self.match(46)
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:69:25: ( '0' .. '9' )*
                while True: #loop10
                    alt10 = 2
                    LA10_0 = self.input.LA(1)

                    if ((48 <= LA10_0 <= 57)) :
                        alt10 = 1


                    if alt10 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:69:26: '0' .. '9'
                        pass 
                        self.matchRange(48, 57)


                    else:
                        break #loop10
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:69:37: ( EXPONENT )?
                alt11 = 2
                LA11_0 = self.input.LA(1)

                if (LA11_0 == 69 or LA11_0 == 101) :
                    alt11 = 1
                if alt11 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:69:37: EXPONENT
                    pass 
                    self.mEXPONENT()





            elif alt15 == 2:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:70:9: '.' ( '0' .. '9' )+ ( EXPONENT )?
                pass 
                self.match(46)
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:70:13: ( '0' .. '9' )+
                cnt12 = 0
                while True: #loop12
                    alt12 = 2
                    LA12_0 = self.input.LA(1)

                    if ((48 <= LA12_0 <= 57)) :
                        alt12 = 1


                    if alt12 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:70:14: '0' .. '9'
                        pass 
                        self.matchRange(48, 57)


                    else:
                        if cnt12 >= 1:
                            break #loop12

                        eee = EarlyExitException(12, self.input)
                        raise eee

                    cnt12 += 1
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:70:25: ( EXPONENT )?
                alt13 = 2
                LA13_0 = self.input.LA(1)

                if (LA13_0 == 69 or LA13_0 == 101) :
                    alt13 = 1
                if alt13 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:70:25: EXPONENT
                    pass 
                    self.mEXPONENT()





            elif alt15 == 3:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:71:9: ( '0' .. '9' )+ EXPONENT
                pass 
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:71:9: ( '0' .. '9' )+
                cnt14 = 0
                while True: #loop14
                    alt14 = 2
                    LA14_0 = self.input.LA(1)

                    if ((48 <= LA14_0 <= 57)) :
                        alt14 = 1


                    if alt14 == 1:
                        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:71:10: '0' .. '9'
                        pass 
                        self.matchRange(48, 57)


                    else:
                        if cnt14 >= 1:
                            break #loop14

                        eee = EarlyExitException(14, self.input)
                        raise eee

                    cnt14 += 1
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

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:75:5: ( '\\'' ( ESC_SEQ | ~ ( '\\'' | '\\\\' ) ) '\\'' )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:75:8: '\\'' ( ESC_SEQ | ~ ( '\\'' | '\\\\' ) ) '\\''
            pass 
            self.match(39)
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:75:13: ( ESC_SEQ | ~ ( '\\'' | '\\\\' ) )
            alt16 = 2
            LA16_0 = self.input.LA(1)

            if (LA16_0 == 92) :
                alt16 = 1
            elif ((0 <= LA16_0 <= 38) or (40 <= LA16_0 <= 91) or (93 <= LA16_0 <= 65535)) :
                alt16 = 2
            else:
                nvae = NoViableAltException("", 16, 0, self.input)

                raise nvae

            if alt16 == 1:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:75:15: ESC_SEQ
                pass 
                self.mESC_SEQ()


            elif alt16 == 2:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:75:25: ~ ( '\\'' | '\\\\' )
                pass 
                if (0 <= self.input.LA(1) <= 38) or (40 <= self.input.LA(1) <= 91) or (93 <= self.input.LA(1) <= 65535):
                    self.input.consume()
                else:
                    mse = MismatchedSetException(None, self.input)
                    self.recover(mse)
                    raise mse




            self.match(39)



            self._state.type = _type
            self._state.channel = _channel

        finally:

            pass

    # $ANTLR end "CHAR"



    # $ANTLR start "EXPONENT"
    def mEXPONENT(self, ):

        try:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:80:5: ( ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+ )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:80:7: ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+
            pass 
            if self.input.LA(1) == 69 or self.input.LA(1) == 101:
                self.input.consume()
            else:
                mse = MismatchedSetException(None, self.input)
                self.recover(mse)
                raise mse

            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:80:17: ( '+' | '-' )?
            alt17 = 2
            LA17_0 = self.input.LA(1)

            if (LA17_0 == 43 or LA17_0 == 45) :
                alt17 = 1
            if alt17 == 1:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:
                pass 
                if self.input.LA(1) == 43 or self.input.LA(1) == 45:
                    self.input.consume()
                else:
                    mse = MismatchedSetException(None, self.input)
                    self.recover(mse)
                    raise mse




            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:80:28: ( '0' .. '9' )+
            cnt18 = 0
            while True: #loop18
                alt18 = 2
                LA18_0 = self.input.LA(1)

                if ((48 <= LA18_0 <= 57)) :
                    alt18 = 1


                if alt18 == 1:
                    # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:80:29: '0' .. '9'
                    pass 
                    self.matchRange(48, 57)


                else:
                    if cnt18 >= 1:
                        break #loop18

                    eee = EarlyExitException(18, self.input)
                    raise eee

                cnt18 += 1




        finally:

            pass

    # $ANTLR end "EXPONENT"



    # $ANTLR start "HEX_DIGIT"
    def mHEX_DIGIT(self, ):

        try:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:85:5: ( ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' ) )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:85:7: ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' )
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



    # $ANTLR start "ESC_SEQ"
    def mESC_SEQ(self, ):

        try:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:90:5: ( '\\\\' ( 'b' | 't' | 'n' | 'f' | 'r' | '\\\"' | '\\'' | '\\\\' ) | UNICODE_ESC | OCTAL_ESC )
            alt19 = 3
            LA19_0 = self.input.LA(1)

            if (LA19_0 == 92) :
                LA19 = self.input.LA(2)
                if LA19 == 34 or LA19 == 39 or LA19 == 92 or LA19 == 98 or LA19 == 102 or LA19 == 110 or LA19 == 114 or LA19 == 116:
                    alt19 = 1
                elif LA19 == 117:
                    alt19 = 2
                elif LA19 == 48 or LA19 == 49 or LA19 == 50 or LA19 == 51 or LA19 == 52 or LA19 == 53 or LA19 == 54 or LA19 == 55:
                    alt19 = 3
                else:
                    nvae = NoViableAltException("", 19, 1, self.input)

                    raise nvae

            else:
                nvae = NoViableAltException("", 19, 0, self.input)

                raise nvae

            if alt19 == 1:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:90:9: '\\\\' ( 'b' | 't' | 'n' | 'f' | 'r' | '\\\"' | '\\'' | '\\\\' )
                pass 
                self.match(92)
                if self.input.LA(1) == 34 or self.input.LA(1) == 39 or self.input.LA(1) == 92 or self.input.LA(1) == 98 or self.input.LA(1) == 102 or self.input.LA(1) == 110 or self.input.LA(1) == 114 or self.input.LA(1) == 116:
                    self.input.consume()
                else:
                    mse = MismatchedSetException(None, self.input)
                    self.recover(mse)
                    raise mse



            elif alt19 == 2:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:91:9: UNICODE_ESC
                pass 
                self.mUNICODE_ESC()


            elif alt19 == 3:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:92:9: OCTAL_ESC
                pass 
                self.mOCTAL_ESC()



        finally:

            pass

    # $ANTLR end "ESC_SEQ"



    # $ANTLR start "OCTAL_ESC"
    def mOCTAL_ESC(self, ):

        try:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:97:5: ( '\\\\' ( '0' .. '3' ) ( '0' .. '7' ) ( '0' .. '7' ) | '\\\\' ( '0' .. '7' ) ( '0' .. '7' ) | '\\\\' ( '0' .. '7' ) )
            alt20 = 3
            LA20_0 = self.input.LA(1)

            if (LA20_0 == 92) :
                LA20_1 = self.input.LA(2)

                if ((48 <= LA20_1 <= 51)) :
                    LA20_2 = self.input.LA(3)

                    if ((48 <= LA20_2 <= 55)) :
                        LA20_4 = self.input.LA(4)

                        if ((48 <= LA20_4 <= 55)) :
                            alt20 = 1
                        else:
                            alt20 = 2
                    else:
                        alt20 = 3
                elif ((52 <= LA20_1 <= 55)) :
                    LA20_3 = self.input.LA(3)

                    if ((48 <= LA20_3 <= 55)) :
                        alt20 = 2
                    else:
                        alt20 = 3
                else:
                    nvae = NoViableAltException("", 20, 1, self.input)

                    raise nvae

            else:
                nvae = NoViableAltException("", 20, 0, self.input)

                raise nvae

            if alt20 == 1:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:97:9: '\\\\' ( '0' .. '3' ) ( '0' .. '7' ) ( '0' .. '7' )
                pass 
                self.match(92)
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:97:14: ( '0' .. '3' )
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:97:15: '0' .. '3'
                pass 
                self.matchRange(48, 51)



                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:97:25: ( '0' .. '7' )
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:97:26: '0' .. '7'
                pass 
                self.matchRange(48, 55)



                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:97:36: ( '0' .. '7' )
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:97:37: '0' .. '7'
                pass 
                self.matchRange(48, 55)





            elif alt20 == 2:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:98:9: '\\\\' ( '0' .. '7' ) ( '0' .. '7' )
                pass 
                self.match(92)
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:98:14: ( '0' .. '7' )
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:98:15: '0' .. '7'
                pass 
                self.matchRange(48, 55)



                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:98:25: ( '0' .. '7' )
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:98:26: '0' .. '7'
                pass 
                self.matchRange(48, 55)





            elif alt20 == 3:
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:99:9: '\\\\' ( '0' .. '7' )
                pass 
                self.match(92)
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:99:14: ( '0' .. '7' )
                # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:99:15: '0' .. '7'
                pass 
                self.matchRange(48, 55)






        finally:

            pass

    # $ANTLR end "OCTAL_ESC"



    # $ANTLR start "UNICODE_ESC"
    def mUNICODE_ESC(self, ):

        try:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:104:5: ( '\\\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT )
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:104:9: '\\\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT
            pass 
            self.match(92)
            self.match(117)
            self.mHEX_DIGIT()
            self.mHEX_DIGIT()
            self.mHEX_DIGIT()
            self.mHEX_DIGIT()




        finally:

            pass

    # $ANTLR end "UNICODE_ESC"



    def mTokens(self):
        # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:8: ( T__17 | T__18 | T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | ID | STR | COMMENT | WS | STRING | INT | FLOAT | CHAR )
        alt21 = 18
        alt21 = self.dfa21.predict(self.input)
        if alt21 == 1:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:10: T__17
            pass 
            self.mT__17()


        elif alt21 == 2:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:16: T__18
            pass 
            self.mT__18()


        elif alt21 == 3:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:22: T__19
            pass 
            self.mT__19()


        elif alt21 == 4:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:28: T__20
            pass 
            self.mT__20()


        elif alt21 == 5:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:34: T__21
            pass 
            self.mT__21()


        elif alt21 == 6:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:40: T__22
            pass 
            self.mT__22()


        elif alt21 == 7:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:46: T__23
            pass 
            self.mT__23()


        elif alt21 == 8:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:52: T__24
            pass 
            self.mT__24()


        elif alt21 == 9:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:58: T__25
            pass 
            self.mT__25()


        elif alt21 == 10:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:64: T__26
            pass 
            self.mT__26()


        elif alt21 == 11:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:70: ID
            pass 
            self.mID()


        elif alt21 == 12:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:73: STR
            pass 
            self.mSTR()


        elif alt21 == 13:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:77: COMMENT
            pass 
            self.mCOMMENT()


        elif alt21 == 14:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:85: WS
            pass 
            self.mWS()


        elif alt21 == 15:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:88: STRING
            pass 
            self.mSTRING()


        elif alt21 == 16:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:95: INT
            pass 
            self.mINT()


        elif alt21 == 17:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:99: FLOAT
            pass 
            self.mFLOAT()


        elif alt21 == 18:
            # /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtPy.g:1:105: CHAR
            pass 
            self.mCHAR()







    # lookup tables for DFA #15

    DFA15_eot = DFA.unpack(
        u"\5\uffff"
        )

    DFA15_eof = DFA.unpack(
        u"\5\uffff"
        )

    DFA15_min = DFA.unpack(
        u"\2\56\3\uffff"
        )

    DFA15_max = DFA.unpack(
        u"\1\71\1\145\3\uffff"
        )

    DFA15_accept = DFA.unpack(
        u"\2\uffff\1\2\1\1\1\3"
        )

    DFA15_special = DFA.unpack(
        u"\5\uffff"
        )

            
    DFA15_transition = [
        DFA.unpack(u"\1\2\1\uffff\12\1"),
        DFA.unpack(u"\1\3\1\uffff\12\1\13\uffff\1\4\37\uffff\1\4"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"")
    ]

    # class definition for DFA #15

    class DFA15(DFA):
        pass


    # lookup tables for DFA #21

    DFA21_eot = DFA.unpack(
        u"\10\uffff\1\21\6\uffff\1\26\7\uffff\1\34\15\uffff"
        )

    DFA21_eof = DFA.unpack(
        u"\45\uffff"
        )

    DFA21_min = DFA.unpack(
        u"\1\11\7\uffff\1\60\3\uffff\1\0\2\uffff\1\56\3\uffff\1\0\1\uffff"
        u"\1\0\1\uffff\5\0\2\uffff\7\0"
        )

    DFA21_max = DFA.unpack(
        u"\1\175\7\uffff\1\71\3\uffff\1\uffff\2\uffff\1\145\3\uffff\1\uffff"
        u"\1\uffff\1\uffff\1\uffff\5\uffff\2\uffff\7\uffff"
        )

    DFA21_accept = DFA.unpack(
        u"\1\uffff\1\1\1\2\1\3\1\4\1\5\1\6\1\7\1\uffff\1\11\1\12\1\13\1\uffff"
        u"\1\15\1\16\1\uffff\1\22\1\10\1\21\1\uffff\1\14\1\uffff\1\20\5\uffff"
        u"\1\14\1\17\7\uffff"
        )

    DFA21_special = DFA.unpack(
        u"\14\uffff\1\12\6\uffff\1\1\1\uffff\1\15\1\uffff\1\10\1\16\1\13"
        u"\1\11\1\14\2\uffff\1\4\1\0\1\7\1\3\1\6\1\2\1\5"
        )

            
    DFA21_transition = [
        DFA.unpack(u"\2\16\2\uffff\1\16\22\uffff\1\16\1\uffff\1\14\4\uffff"
        u"\1\20\1\5\1\6\2\uffff\1\12\1\uffff\1\10\1\15\12\17\1\7\1\11\5\uffff"
        u"\32\13\1\3\1\uffff\1\4\1\uffff\1\13\1\uffff\32\13\1\1\1\uffff\1"
        u"\2"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"\12\22"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"\42\25\1\24\71\25\1\23\uffa3\25"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"\1\22\1\uffff\12\17\13\uffff\1\22\37\uffff\1\22"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"\42\34\1\27\4\34\1\31\10\34\4\32\4\33\44\34\1\31\5"
        u"\34\1\31\3\34\1\31\7\34\1\31\3\34\1\31\1\34\1\31\1\30\uff8a\34"),
        DFA.unpack(u""),
        DFA.unpack(u"\42\25\1\24\71\25\1\23\uffa3\25"),
        DFA.unpack(u""),
        DFA.unpack(u"\0\35"),
        DFA.unpack(u"\60\34\12\36\7\34\6\36\32\34\6\36\uff99\34"),
        DFA.unpack(u"\42\25\1\24\71\25\1\23\uffa3\25"),
        DFA.unpack(u"\42\25\1\24\15\25\10\37\44\25\1\23\uffa3\25"),
        DFA.unpack(u"\42\25\1\24\15\25\10\40\44\25\1\23\uffa3\25"),
        DFA.unpack(u""),
        DFA.unpack(u""),
        DFA.unpack(u"\60\34\12\41\7\34\6\41\32\34\6\41\uff99\34"),
        DFA.unpack(u"\42\25\1\24\15\25\10\42\44\25\1\23\uffa3\25"),
        DFA.unpack(u"\42\25\1\24\71\25\1\23\uffa3\25"),
        DFA.unpack(u"\60\34\12\43\7\34\6\43\32\34\6\43\uff99\34"),
        DFA.unpack(u"\42\25\1\24\71\25\1\23\uffa3\25"),
        DFA.unpack(u"\60\34\12\44\7\34\6\44\32\34\6\44\uff99\34"),
        DFA.unpack(u"\42\25\1\24\71\25\1\23\uffa3\25")
    ]

    # class definition for DFA #21

    class DFA21(DFA):
        pass


        def specialStateTransition(self_, s, input):
            # convince pylint that my self_ magic is ok ;)
            # pylint: disable-msg=E0213

            # pretend we are a member of the recognizer
            # thus semantic predicates can be evaluated
            self = self_.recognizer

            _s = s

            if s == 0: 
                LA21_31 = input.LA(1)

                s = -1
                if (LA21_31 == 34):
                    s = 20

                elif ((48 <= LA21_31 <= 55)):
                    s = 34

                elif (LA21_31 == 92):
                    s = 19

                elif ((0 <= LA21_31 <= 33) or (35 <= LA21_31 <= 47) or (56 <= LA21_31 <= 91) or (93 <= LA21_31 <= 65535)):
                    s = 21

                if s >= 0:
                    return s
            elif s == 1: 
                LA21_19 = input.LA(1)

                s = -1
                if (LA21_19 == 34):
                    s = 23

                elif (LA21_19 == 117):
                    s = 24

                elif (LA21_19 == 39 or LA21_19 == 92 or LA21_19 == 98 or LA21_19 == 102 or LA21_19 == 110 or LA21_19 == 114 or LA21_19 == 116):
                    s = 25

                elif ((48 <= LA21_19 <= 51)):
                    s = 26

                elif ((52 <= LA21_19 <= 55)):
                    s = 27

                elif ((0 <= LA21_19 <= 33) or (35 <= LA21_19 <= 38) or (40 <= LA21_19 <= 47) or (56 <= LA21_19 <= 91) or (93 <= LA21_19 <= 97) or (99 <= LA21_19 <= 101) or (103 <= LA21_19 <= 109) or (111 <= LA21_19 <= 113) or LA21_19 == 115 or (118 <= LA21_19 <= 65535)):
                    s = 28

                if s >= 0:
                    return s
            elif s == 2: 
                LA21_35 = input.LA(1)

                s = -1
                if ((48 <= LA21_35 <= 57) or (65 <= LA21_35 <= 70) or (97 <= LA21_35 <= 102)):
                    s = 36

                elif ((0 <= LA21_35 <= 47) or (58 <= LA21_35 <= 64) or (71 <= LA21_35 <= 96) or (103 <= LA21_35 <= 65535)):
                    s = 28

                if s >= 0:
                    return s
            elif s == 3: 
                LA21_33 = input.LA(1)

                s = -1
                if ((48 <= LA21_33 <= 57) or (65 <= LA21_33 <= 70) or (97 <= LA21_33 <= 102)):
                    s = 35

                elif ((0 <= LA21_33 <= 47) or (58 <= LA21_33 <= 64) or (71 <= LA21_33 <= 96) or (103 <= LA21_33 <= 65535)):
                    s = 28

                if s >= 0:
                    return s
            elif s == 4: 
                LA21_30 = input.LA(1)

                s = -1
                if ((48 <= LA21_30 <= 57) or (65 <= LA21_30 <= 70) or (97 <= LA21_30 <= 102)):
                    s = 33

                elif ((0 <= LA21_30 <= 47) or (58 <= LA21_30 <= 64) or (71 <= LA21_30 <= 96) or (103 <= LA21_30 <= 65535)):
                    s = 28

                if s >= 0:
                    return s
            elif s == 5: 
                LA21_36 = input.LA(1)

                s = -1
                if (LA21_36 == 34):
                    s = 20

                elif (LA21_36 == 92):
                    s = 19

                elif ((0 <= LA21_36 <= 33) or (35 <= LA21_36 <= 91) or (93 <= LA21_36 <= 65535)):
                    s = 21

                if s >= 0:
                    return s
            elif s == 6: 
                LA21_34 = input.LA(1)

                s = -1
                if (LA21_34 == 34):
                    s = 20

                elif (LA21_34 == 92):
                    s = 19

                elif ((0 <= LA21_34 <= 33) or (35 <= LA21_34 <= 91) or (93 <= LA21_34 <= 65535)):
                    s = 21

                if s >= 0:
                    return s
            elif s == 7: 
                LA21_32 = input.LA(1)

                s = -1
                if (LA21_32 == 34):
                    s = 20

                elif (LA21_32 == 92):
                    s = 19

                elif ((0 <= LA21_32 <= 33) or (35 <= LA21_32 <= 91) or (93 <= LA21_32 <= 65535)):
                    s = 21

                if s >= 0:
                    return s
            elif s == 8: 
                LA21_23 = input.LA(1)

                s = -1
                if ((0 <= LA21_23 <= 65535)):
                    s = 29

                else:
                    s = 28

                if s >= 0:
                    return s
            elif s == 9: 
                LA21_26 = input.LA(1)

                s = -1
                if (LA21_26 == 34):
                    s = 20

                elif ((48 <= LA21_26 <= 55)):
                    s = 31

                elif (LA21_26 == 92):
                    s = 19

                elif ((0 <= LA21_26 <= 33) or (35 <= LA21_26 <= 47) or (56 <= LA21_26 <= 91) or (93 <= LA21_26 <= 65535)):
                    s = 21

                if s >= 0:
                    return s
            elif s == 10: 
                LA21_12 = input.LA(1)

                s = -1
                if (LA21_12 == 92):
                    s = 19

                elif (LA21_12 == 34):
                    s = 20

                elif ((0 <= LA21_12 <= 33) or (35 <= LA21_12 <= 91) or (93 <= LA21_12 <= 65535)):
                    s = 21

                if s >= 0:
                    return s
            elif s == 11: 
                LA21_25 = input.LA(1)

                s = -1
                if (LA21_25 == 34):
                    s = 20

                elif (LA21_25 == 92):
                    s = 19

                elif ((0 <= LA21_25 <= 33) or (35 <= LA21_25 <= 91) or (93 <= LA21_25 <= 65535)):
                    s = 21

                if s >= 0:
                    return s
            elif s == 12: 
                LA21_27 = input.LA(1)

                s = -1
                if (LA21_27 == 34):
                    s = 20

                elif ((48 <= LA21_27 <= 55)):
                    s = 32

                elif (LA21_27 == 92):
                    s = 19

                elif ((0 <= LA21_27 <= 33) or (35 <= LA21_27 <= 47) or (56 <= LA21_27 <= 91) or (93 <= LA21_27 <= 65535)):
                    s = 21

                if s >= 0:
                    return s
            elif s == 13: 
                LA21_21 = input.LA(1)

                s = -1
                if (LA21_21 == 34):
                    s = 20

                elif (LA21_21 == 92):
                    s = 19

                elif ((0 <= LA21_21 <= 33) or (35 <= LA21_21 <= 91) or (93 <= LA21_21 <= 65535)):
                    s = 21

                if s >= 0:
                    return s
            elif s == 14: 
                LA21_24 = input.LA(1)

                s = -1
                if ((48 <= LA21_24 <= 57) or (65 <= LA21_24 <= 70) or (97 <= LA21_24 <= 102)):
                    s = 30

                elif ((0 <= LA21_24 <= 47) or (58 <= LA21_24 <= 64) or (71 <= LA21_24 <= 96) or (103 <= LA21_24 <= 65535)):
                    s = 28

                if s >= 0:
                    return s

            nvae = NoViableAltException(self_.getDescription(), 21, _s, input)
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
