// $ANTLR 3.3 Nov 30, 2010 12:46:29 /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g 2011-04-05 10:37:36

package org.nicerobot.struxt.parser;


import org.antlr.runtime.*;
import java.util.Stack;
import java.util.List;
import java.util.ArrayList;

public class StruxtLexer extends Lexer {
    public static final int EOF=-1;
    public static final int T__16=16;
    public static final int T__17=17;
    public static final int T__18=18;
    public static final int T__19=19;
    public static final int T__20=20;
    public static final int T__21=21;
    public static final int T__22=22;
    public static final int T__23=23;
    public static final int T__24=24;
    public static final int T__25=25;
    public static final int T__26=26;
    public static final int T__27=27;
    public static final int T__28=28;
    public static final int T__29=29;
    public static final int DOC=4;
    public static final int XML=5;
    public static final int STR=6;
    public static final int ID=7;
    public static final int OP=8;
    public static final int INT=9;
    public static final int FLOAT=10;
    public static final int CHAR=11;
    public static final int COMMENT=12;
    public static final int WS=13;
    public static final int EXPONENT=14;
    public static final int HEX_DIGIT=15;

    // delegates
    // delegators

    public StruxtLexer() {;} 
    public StruxtLexer(CharStream input) {
        this(input, new RecognizerSharedState());
    }
    public StruxtLexer(CharStream input, RecognizerSharedState state) {
        super(input,state);

    }
    public String getGrammarFileName() { return "/Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g"; }

    // $ANTLR start "T__16"
    public final void mT__16() throws RecognitionException {
        try {
            int _type = T__16;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:11:7: ( '.' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:11:9: '.'
            {
            match('.'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__16"

    // $ANTLR start "T__17"
    public final void mT__17() throws RecognitionException {
        try {
            int _type = T__17;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:12:7: ( '@' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:12:9: '@'
            {
            match('@'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__17"

    // $ANTLR start "T__18"
    public final void mT__18() throws RecognitionException {
        try {
            int _type = T__18;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:13:7: ( '\\\\' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:13:9: '\\\\'
            {
            match('\\'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__18"

    // $ANTLR start "T__19"
    public final void mT__19() throws RecognitionException {
        try {
            int _type = T__19;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:14:7: ( '{' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:14:9: '{'
            {
            match('{'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__19"

    // $ANTLR start "T__20"
    public final void mT__20() throws RecognitionException {
        try {
            int _type = T__20;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:15:7: ( '}' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:15:9: '}'
            {
            match('}'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__20"

    // $ANTLR start "T__21"
    public final void mT__21() throws RecognitionException {
        try {
            int _type = T__21;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:16:7: ( ':' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:16:9: ':'
            {
            match(':'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__21"

    // $ANTLR start "T__22"
    public final void mT__22() throws RecognitionException {
        try {
            int _type = T__22;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:17:7: ( ';' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:17:9: ';'
            {
            match(';'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__22"

    // $ANTLR start "T__23"
    public final void mT__23() throws RecognitionException {
        try {
            int _type = T__23;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:18:7: ( '!' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:18:9: '!'
            {
            match('!'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__23"

    // $ANTLR start "T__24"
    public final void mT__24() throws RecognitionException {
        try {
            int _type = T__24;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:19:7: ( '#' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:19:9: '#'
            {
            match('#'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__24"

    // $ANTLR start "T__25"
    public final void mT__25() throws RecognitionException {
        try {
            int _type = T__25;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:20:7: ( ',' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:20:9: ','
            {
            match(','); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__25"

    // $ANTLR start "T__26"
    public final void mT__26() throws RecognitionException {
        try {
            int _type = T__26;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:21:7: ( '(' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:21:9: '('
            {
            match('('); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__26"

    // $ANTLR start "T__27"
    public final void mT__27() throws RecognitionException {
        try {
            int _type = T__27;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:22:7: ( ')' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:22:9: ')'
            {
            match(')'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__27"

    // $ANTLR start "T__28"
    public final void mT__28() throws RecognitionException {
        try {
            int _type = T__28;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:23:7: ( '[' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:23:9: '['
            {
            match('['); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__28"

    // $ANTLR start "T__29"
    public final void mT__29() throws RecognitionException {
        try {
            int _type = T__29;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:24:7: ( ']' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:24:9: ']'
            {
            match(']'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__29"

    // $ANTLR start "OP"
    public final void mOP() throws RecognitionException {
        try {
            int _type = OP;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:115:5: ( ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' ) )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:115:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )
            {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:115:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )
            int alt1=22;
            alt1 = dfa1.predict(input);
            switch (alt1) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:115:8: '<'
                    {
                    match('<'); 

                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:115:14: '<<'
                    {
                    match("<<"); 


                    }
                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:115:21: '<-'
                    {
                    match("<-"); 


                    }
                    break;
                case 4 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:115:28: '<->'
                    {
                    match("<->"); 


                    }
                    break;
                case 5 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:115:36: '->'
                    {
                    match("->"); 


                    }
                    break;
                case 6 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:115:43: '>>'
                    {
                    match(">>"); 


                    }
                    break;
                case 7 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:115:50: '>'
                    {
                    match('>'); 

                    }
                    break;
                case 8 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:115:56: '~'
                    {
                    match('~'); 

                    }
                    break;
                case 9 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:115:62: '$'
                    {
                    match('$'); 

                    }
                    break;
                case 10 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:115:68: '%'
                    {
                    match('%'); 

                    }
                    break;
                case 11 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:115:74: '^'
                    {
                    match('^'); 

                    }
                    break;
                case 12 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:115:80: '&'
                    {
                    match('&'); 

                    }
                    break;
                case 13 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:115:86: '&&'
                    {
                    match("&&"); 


                    }
                    break;
                case 14 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:116:7: '*'
                    {
                    match('*'); 

                    }
                    break;
                case 15 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:116:13: '**'
                    {
                    match("**"); 


                    }
                    break;
                case 16 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:116:20: '-'
                    {
                    match('-'); 

                    }
                    break;
                case 17 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:116:26: '+'
                    {
                    match('+'); 

                    }
                    break;
                case 18 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:116:32: '='
                    {
                    match('='); 

                    }
                    break;
                case 19 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:116:38: '|'
                    {
                    match('|'); 

                    }
                    break;
                case 20 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:116:44: '||'
                    {
                    match("||"); 


                    }
                    break;
                case 21 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:116:51: '/'
                    {
                    match('/'); 

                    }
                    break;
                case 22 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:116:57: '?'
                    {
                    match('?'); 

                    }
                    break;

            }


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "OP"

    // $ANTLR start "ID"
    public final void mID() throws RecognitionException {
        try {
            int _type = ID;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:120:5: ( ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )* )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:120:7: ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )*
            {
            if ( (input.LA(1)>='A' && input.LA(1)<='Z')||input.LA(1)=='_'||(input.LA(1)>='a' && input.LA(1)<='z') ) {
                input.consume();

            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                recover(mse);
                throw mse;}

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:120:31: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )*
            loop2:
            do {
                int alt2=2;
                int LA2_0 = input.LA(1);

                if ( (LA2_0=='-'||(LA2_0>='0' && LA2_0<='9')||(LA2_0>='A' && LA2_0<='Z')||LA2_0=='_'||(LA2_0>='a' && LA2_0<='z')) ) {
                    alt2=1;
                }


                switch (alt2) {
            	case 1 :
            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:
            	    {
            	    if ( input.LA(1)=='-'||(input.LA(1)>='0' && input.LA(1)<='9')||(input.LA(1)>='A' && input.LA(1)<='Z')||input.LA(1)=='_'||(input.LA(1)>='a' && input.LA(1)<='z') ) {
            	        input.consume();

            	    }
            	    else {
            	        MismatchedSetException mse = new MismatchedSetException(null,input);
            	        recover(mse);
            	        throw mse;}


            	    }
            	    break;

            	default :
            	    break loop2;
                }
            } while (true);


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "ID"

    // $ANTLR start "XML"
    public final void mXML() throws RecognitionException {
        try {
            int _type = XML;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:124:5: ( '?xml' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:124:7: '?xml'
            {
            match("?xml"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "XML"

    // $ANTLR start "DOC"
    public final void mDOC() throws RecognitionException {
        try {
            int _type = DOC;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:128:5: ( '!!!' ( options {greedy=false; } : . )+ '!!!' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:128:7: '!!!' ( options {greedy=false; } : . )+ '!!!'
            {
            match("!!!"); 

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:128:13: ( options {greedy=false; } : . )+
            int cnt3=0;
            loop3:
            do {
                int alt3=2;
                int LA3_0 = input.LA(1);

                if ( (LA3_0=='!') ) {
                    int LA3_1 = input.LA(2);

                    if ( (LA3_1=='!') ) {
                        int LA3_3 = input.LA(3);

                        if ( (LA3_3=='!') ) {
                            alt3=2;
                        }
                        else if ( ((LA3_3>='\u0000' && LA3_3<=' ')||(LA3_3>='\"' && LA3_3<='\uFFFF')) ) {
                            alt3=1;
                        }


                    }
                    else if ( ((LA3_1>='\u0000' && LA3_1<=' ')||(LA3_1>='\"' && LA3_1<='\uFFFF')) ) {
                        alt3=1;
                    }


                }
                else if ( ((LA3_0>='\u0000' && LA3_0<=' ')||(LA3_0>='\"' && LA3_0<='\uFFFF')) ) {
                    alt3=1;
                }


                switch (alt3) {
            	case 1 :
            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:128:38: .
            	    {
            	    matchAny(); 

            	    }
            	    break;

            	default :
            	    if ( cnt3 >= 1 ) break loop3;
                        EarlyExitException eee =
                            new EarlyExitException(3, input);
                        throw eee;
                }
                cnt3++;
            } while (true);

            match("!!!"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "DOC"

    // $ANTLR start "STR"
    public final void mSTR() throws RecognitionException {
        try {
            int _type = STR;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:132:5: ( '\"\"\"' ( options {greedy=false; } : . )* '\"\"\"' | '\\'\\'\\'' ( options {greedy=false; } : . )* '\\'\\'\\'' | '\"' (~ ( '\"' ) )* '\"' )
            int alt7=3;
            int LA7_0 = input.LA(1);

            if ( (LA7_0=='\"') ) {
                int LA7_1 = input.LA(2);

                if ( (LA7_1=='\"') ) {
                    int LA7_3 = input.LA(3);

                    if ( (LA7_3=='\"') ) {
                        alt7=1;
                    }
                    else {
                        alt7=3;}
                }
                else if ( ((LA7_1>='\u0000' && LA7_1<='!')||(LA7_1>='#' && LA7_1<='\uFFFF')) ) {
                    alt7=3;
                }
                else {
                    NoViableAltException nvae =
                        new NoViableAltException("", 7, 1, input);

                    throw nvae;
                }
            }
            else if ( (LA7_0=='\'') ) {
                alt7=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 7, 0, input);

                throw nvae;
            }
            switch (alt7) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:132:7: '\"\"\"' ( options {greedy=false; } : . )* '\"\"\"'
                    {
                    match("\"\"\""); 

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:132:13: ( options {greedy=false; } : . )*
                    loop4:
                    do {
                        int alt4=2;
                        int LA4_0 = input.LA(1);

                        if ( (LA4_0=='\"') ) {
                            int LA4_1 = input.LA(2);

                            if ( (LA4_1=='\"') ) {
                                int LA4_3 = input.LA(3);

                                if ( (LA4_3=='\"') ) {
                                    alt4=2;
                                }
                                else if ( ((LA4_3>='\u0000' && LA4_3<='!')||(LA4_3>='#' && LA4_3<='\uFFFF')) ) {
                                    alt4=1;
                                }


                            }
                            else if ( ((LA4_1>='\u0000' && LA4_1<='!')||(LA4_1>='#' && LA4_1<='\uFFFF')) ) {
                                alt4=1;
                            }


                        }
                        else if ( ((LA4_0>='\u0000' && LA4_0<='!')||(LA4_0>='#' && LA4_0<='\uFFFF')) ) {
                            alt4=1;
                        }


                        switch (alt4) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:132:38: .
                    	    {
                    	    matchAny(); 

                    	    }
                    	    break;

                    	default :
                    	    break loop4;
                        }
                    } while (true);

                    match("\"\"\""); 


                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:133:7: '\\'\\'\\'' ( options {greedy=false; } : . )* '\\'\\'\\''
                    {
                    match("'''"); 

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:133:16: ( options {greedy=false; } : . )*
                    loop5:
                    do {
                        int alt5=2;
                        int LA5_0 = input.LA(1);

                        if ( (LA5_0=='\'') ) {
                            int LA5_1 = input.LA(2);

                            if ( (LA5_1=='\'') ) {
                                int LA5_3 = input.LA(3);

                                if ( (LA5_3=='\'') ) {
                                    alt5=2;
                                }
                                else if ( ((LA5_3>='\u0000' && LA5_3<='&')||(LA5_3>='(' && LA5_3<='\uFFFF')) ) {
                                    alt5=1;
                                }


                            }
                            else if ( ((LA5_1>='\u0000' && LA5_1<='&')||(LA5_1>='(' && LA5_1<='\uFFFF')) ) {
                                alt5=1;
                            }


                        }
                        else if ( ((LA5_0>='\u0000' && LA5_0<='&')||(LA5_0>='(' && LA5_0<='\uFFFF')) ) {
                            alt5=1;
                        }


                        switch (alt5) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:133:41: .
                    	    {
                    	    matchAny(); 

                    	    }
                    	    break;

                    	default :
                    	    break loop5;
                        }
                    } while (true);

                    match("'''"); 


                    }
                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:134:6: '\"' (~ ( '\"' ) )* '\"'
                    {
                    match('\"'); 
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:134:10: (~ ( '\"' ) )*
                    loop6:
                    do {
                        int alt6=2;
                        int LA6_0 = input.LA(1);

                        if ( ((LA6_0>='\u0000' && LA6_0<='!')||(LA6_0>='#' && LA6_0<='\uFFFF')) ) {
                            alt6=1;
                        }


                        switch (alt6) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:134:10: ~ ( '\"' )
                    	    {
                    	    if ( (input.LA(1)>='\u0000' && input.LA(1)<='!')||(input.LA(1)>='#' && input.LA(1)<='\uFFFF') ) {
                    	        input.consume();

                    	    }
                    	    else {
                    	        MismatchedSetException mse = new MismatchedSetException(null,input);
                    	        recover(mse);
                    	        throw mse;}


                    	    }
                    	    break;

                    	default :
                    	    break loop6;
                        }
                    } while (true);

                    match('\"'); 

                    }
                    break;

            }
            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "STR"

    // $ANTLR start "COMMENT"
    public final void mCOMMENT() throws RecognitionException {
        try {
            int _type = COMMENT;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:138:5: ( '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n' | '/*' ( options {greedy=false; } : . )* '*/' )
            int alt11=2;
            int LA11_0 = input.LA(1);

            if ( (LA11_0=='/') ) {
                int LA11_1 = input.LA(2);

                if ( (LA11_1=='/') ) {
                    alt11=1;
                }
                else if ( (LA11_1=='*') ) {
                    alt11=2;
                }
                else {
                    NoViableAltException nvae =
                        new NoViableAltException("", 11, 1, input);

                    throw nvae;
                }
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 11, 0, input);

                throw nvae;
            }
            switch (alt11) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:138:9: '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n'
                    {
                    match("//"); 

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:138:14: (~ ( '\\n' | '\\r' ) )*
                    loop8:
                    do {
                        int alt8=2;
                        int LA8_0 = input.LA(1);

                        if ( ((LA8_0>='\u0000' && LA8_0<='\t')||(LA8_0>='\u000B' && LA8_0<='\f')||(LA8_0>='\u000E' && LA8_0<='\uFFFF')) ) {
                            alt8=1;
                        }


                        switch (alt8) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:138:14: ~ ( '\\n' | '\\r' )
                    	    {
                    	    if ( (input.LA(1)>='\u0000' && input.LA(1)<='\t')||(input.LA(1)>='\u000B' && input.LA(1)<='\f')||(input.LA(1)>='\u000E' && input.LA(1)<='\uFFFF') ) {
                    	        input.consume();

                    	    }
                    	    else {
                    	        MismatchedSetException mse = new MismatchedSetException(null,input);
                    	        recover(mse);
                    	        throw mse;}


                    	    }
                    	    break;

                    	default :
                    	    break loop8;
                        }
                    } while (true);

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:138:28: ( '\\r' )?
                    int alt9=2;
                    int LA9_0 = input.LA(1);

                    if ( (LA9_0=='\r') ) {
                        alt9=1;
                    }
                    switch (alt9) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:138:28: '\\r'
                            {
                            match('\r'); 

                            }
                            break;

                    }

                    match('\n'); 
                    _channel=HIDDEN;

                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:139:9: '/*' ( options {greedy=false; } : . )* '*/'
                    {
                    match("/*"); 

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:139:14: ( options {greedy=false; } : . )*
                    loop10:
                    do {
                        int alt10=2;
                        int LA10_0 = input.LA(1);

                        if ( (LA10_0=='*') ) {
                            int LA10_1 = input.LA(2);

                            if ( (LA10_1=='/') ) {
                                alt10=2;
                            }
                            else if ( ((LA10_1>='\u0000' && LA10_1<='.')||(LA10_1>='0' && LA10_1<='\uFFFF')) ) {
                                alt10=1;
                            }


                        }
                        else if ( ((LA10_0>='\u0000' && LA10_0<=')')||(LA10_0>='+' && LA10_0<='\uFFFF')) ) {
                            alt10=1;
                        }


                        switch (alt10) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:139:42: .
                    	    {
                    	    matchAny(); 

                    	    }
                    	    break;

                    	default :
                    	    break loop10;
                        }
                    } while (true);

                    match("*/"); 

                    _channel=HIDDEN;

                    }
                    break;

            }
            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "COMMENT"

    // $ANTLR start "WS"
    public final void mWS() throws RecognitionException {
        try {
            int _type = WS;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:143:5: ( ( ' ' | '\\t' | '\\r' | '\\n' ) )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:143:9: ( ' ' | '\\t' | '\\r' | '\\n' )
            {
            if ( (input.LA(1)>='\t' && input.LA(1)<='\n')||input.LA(1)=='\r'||input.LA(1)==' ' ) {
                input.consume();

            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                recover(mse);
                throw mse;}

            _channel=HIDDEN;

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "WS"

    // $ANTLR start "INT"
    public final void mINT() throws RecognitionException {
        try {
            int _type = INT;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:150:5: ( ( '0' .. '9' )+ )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:150:7: ( '0' .. '9' )+
            {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:150:7: ( '0' .. '9' )+
            int cnt12=0;
            loop12:
            do {
                int alt12=2;
                int LA12_0 = input.LA(1);

                if ( ((LA12_0>='0' && LA12_0<='9')) ) {
                    alt12=1;
                }


                switch (alt12) {
            	case 1 :
            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:150:7: '0' .. '9'
            	    {
            	    matchRange('0','9'); 

            	    }
            	    break;

            	default :
            	    if ( cnt12 >= 1 ) break loop12;
                        EarlyExitException eee =
                            new EarlyExitException(12, input);
                        throw eee;
                }
                cnt12++;
            } while (true);


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "INT"

    // $ANTLR start "FLOAT"
    public final void mFLOAT() throws RecognitionException {
        try {
            int _type = FLOAT;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:154:5: ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT )
            int alt19=3;
            alt19 = dfa19.predict(input);
            switch (alt19) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:154:9: ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )?
                    {
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:154:9: ( '0' .. '9' )+
                    int cnt13=0;
                    loop13:
                    do {
                        int alt13=2;
                        int LA13_0 = input.LA(1);

                        if ( ((LA13_0>='0' && LA13_0<='9')) ) {
                            alt13=1;
                        }


                        switch (alt13) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:154:10: '0' .. '9'
                    	    {
                    	    matchRange('0','9'); 

                    	    }
                    	    break;

                    	default :
                    	    if ( cnt13 >= 1 ) break loop13;
                                EarlyExitException eee =
                                    new EarlyExitException(13, input);
                                throw eee;
                        }
                        cnt13++;
                    } while (true);

                    match('.'); 
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:154:25: ( '0' .. '9' )*
                    loop14:
                    do {
                        int alt14=2;
                        int LA14_0 = input.LA(1);

                        if ( ((LA14_0>='0' && LA14_0<='9')) ) {
                            alt14=1;
                        }


                        switch (alt14) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:154:26: '0' .. '9'
                    	    {
                    	    matchRange('0','9'); 

                    	    }
                    	    break;

                    	default :
                    	    break loop14;
                        }
                    } while (true);

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:154:37: ( EXPONENT )?
                    int alt15=2;
                    int LA15_0 = input.LA(1);

                    if ( (LA15_0=='E'||LA15_0=='e') ) {
                        alt15=1;
                    }
                    switch (alt15) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:154:37: EXPONENT
                            {
                            mEXPONENT(); 

                            }
                            break;

                    }


                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:155:9: '.' ( '0' .. '9' )+ ( EXPONENT )?
                    {
                    match('.'); 
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:155:13: ( '0' .. '9' )+
                    int cnt16=0;
                    loop16:
                    do {
                        int alt16=2;
                        int LA16_0 = input.LA(1);

                        if ( ((LA16_0>='0' && LA16_0<='9')) ) {
                            alt16=1;
                        }


                        switch (alt16) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:155:14: '0' .. '9'
                    	    {
                    	    matchRange('0','9'); 

                    	    }
                    	    break;

                    	default :
                    	    if ( cnt16 >= 1 ) break loop16;
                                EarlyExitException eee =
                                    new EarlyExitException(16, input);
                                throw eee;
                        }
                        cnt16++;
                    } while (true);

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:155:25: ( EXPONENT )?
                    int alt17=2;
                    int LA17_0 = input.LA(1);

                    if ( (LA17_0=='E'||LA17_0=='e') ) {
                        alt17=1;
                    }
                    switch (alt17) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:155:25: EXPONENT
                            {
                            mEXPONENT(); 

                            }
                            break;

                    }


                    }
                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:156:9: ( '0' .. '9' )+ EXPONENT
                    {
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:156:9: ( '0' .. '9' )+
                    int cnt18=0;
                    loop18:
                    do {
                        int alt18=2;
                        int LA18_0 = input.LA(1);

                        if ( ((LA18_0>='0' && LA18_0<='9')) ) {
                            alt18=1;
                        }


                        switch (alt18) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:156:10: '0' .. '9'
                    	    {
                    	    matchRange('0','9'); 

                    	    }
                    	    break;

                    	default :
                    	    if ( cnt18 >= 1 ) break loop18;
                                EarlyExitException eee =
                                    new EarlyExitException(18, input);
                                throw eee;
                        }
                        cnt18++;
                    } while (true);

                    mEXPONENT(); 

                    }
                    break;

            }
            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "FLOAT"

    // $ANTLR start "CHAR"
    public final void mCHAR() throws RecognitionException {
        try {
            int _type = CHAR;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:160:5: ( '\\'' (~ ( '\\'' ) )+ '\\'' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:160:8: '\\'' (~ ( '\\'' ) )+ '\\''
            {
            match('\''); 
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:160:13: (~ ( '\\'' ) )+
            int cnt20=0;
            loop20:
            do {
                int alt20=2;
                int LA20_0 = input.LA(1);

                if ( ((LA20_0>='\u0000' && LA20_0<='&')||(LA20_0>='(' && LA20_0<='\uFFFF')) ) {
                    alt20=1;
                }


                switch (alt20) {
            	case 1 :
            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:160:13: ~ ( '\\'' )
            	    {
            	    if ( (input.LA(1)>='\u0000' && input.LA(1)<='&')||(input.LA(1)>='(' && input.LA(1)<='\uFFFF') ) {
            	        input.consume();

            	    }
            	    else {
            	        MismatchedSetException mse = new MismatchedSetException(null,input);
            	        recover(mse);
            	        throw mse;}


            	    }
            	    break;

            	default :
            	    if ( cnt20 >= 1 ) break loop20;
                        EarlyExitException eee =
                            new EarlyExitException(20, input);
                        throw eee;
                }
                cnt20++;
            } while (true);

            match('\''); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "CHAR"

    // $ANTLR start "EXPONENT"
    public final void mEXPONENT() throws RecognitionException {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:165:5: ( ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+ )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:165:7: ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+
            {
            if ( input.LA(1)=='E'||input.LA(1)=='e' ) {
                input.consume();

            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                recover(mse);
                throw mse;}

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:165:17: ( '+' | '-' )?
            int alt21=2;
            int LA21_0 = input.LA(1);

            if ( (LA21_0=='+'||LA21_0=='-') ) {
                alt21=1;
            }
            switch (alt21) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:
                    {
                    if ( input.LA(1)=='+'||input.LA(1)=='-' ) {
                        input.consume();

                    }
                    else {
                        MismatchedSetException mse = new MismatchedSetException(null,input);
                        recover(mse);
                        throw mse;}


                    }
                    break;

            }

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:165:28: ( '0' .. '9' )+
            int cnt22=0;
            loop22:
            do {
                int alt22=2;
                int LA22_0 = input.LA(1);

                if ( ((LA22_0>='0' && LA22_0<='9')) ) {
                    alt22=1;
                }


                switch (alt22) {
            	case 1 :
            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:165:29: '0' .. '9'
            	    {
            	    matchRange('0','9'); 

            	    }
            	    break;

            	default :
            	    if ( cnt22 >= 1 ) break loop22;
                        EarlyExitException eee =
                            new EarlyExitException(22, input);
                        throw eee;
                }
                cnt22++;
            } while (true);


            }

        }
        finally {
        }
    }
    // $ANTLR end "EXPONENT"

    // $ANTLR start "HEX_DIGIT"
    public final void mHEX_DIGIT() throws RecognitionException {
        try {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:170:5: ( ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' ) )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:170:7: ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' )
            {
            if ( (input.LA(1)>='0' && input.LA(1)<='9')||(input.LA(1)>='A' && input.LA(1)<='F')||(input.LA(1)>='a' && input.LA(1)<='f') ) {
                input.consume();

            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                recover(mse);
                throw mse;}


            }

        }
        finally {
        }
    }
    // $ANTLR end "HEX_DIGIT"

    public void mTokens() throws RecognitionException {
        // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:8: ( T__16 | T__17 | T__18 | T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | T__29 | OP | ID | XML | DOC | STR | COMMENT | WS | INT | FLOAT | CHAR )
        int alt23=24;
        alt23 = dfa23.predict(input);
        switch (alt23) {
            case 1 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:10: T__16
                {
                mT__16(); 

                }
                break;
            case 2 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:16: T__17
                {
                mT__17(); 

                }
                break;
            case 3 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:22: T__18
                {
                mT__18(); 

                }
                break;
            case 4 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:28: T__19
                {
                mT__19(); 

                }
                break;
            case 5 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:34: T__20
                {
                mT__20(); 

                }
                break;
            case 6 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:40: T__21
                {
                mT__21(); 

                }
                break;
            case 7 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:46: T__22
                {
                mT__22(); 

                }
                break;
            case 8 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:52: T__23
                {
                mT__23(); 

                }
                break;
            case 9 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:58: T__24
                {
                mT__24(); 

                }
                break;
            case 10 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:64: T__25
                {
                mT__25(); 

                }
                break;
            case 11 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:70: T__26
                {
                mT__26(); 

                }
                break;
            case 12 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:76: T__27
                {
                mT__27(); 

                }
                break;
            case 13 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:82: T__28
                {
                mT__28(); 

                }
                break;
            case 14 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:88: T__29
                {
                mT__29(); 

                }
                break;
            case 15 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:94: OP
                {
                mOP(); 

                }
                break;
            case 16 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:97: ID
                {
                mID(); 

                }
                break;
            case 17 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:100: XML
                {
                mXML(); 

                }
                break;
            case 18 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:104: DOC
                {
                mDOC(); 

                }
                break;
            case 19 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:108: STR
                {
                mSTR(); 

                }
                break;
            case 20 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:112: COMMENT
                {
                mCOMMENT(); 

                }
                break;
            case 21 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:120: WS
                {
                mWS(); 

                }
                break;
            case 22 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:123: INT
                {
                mINT(); 

                }
                break;
            case 23 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:127: FLOAT
                {
                mFLOAT(); 

                }
                break;
            case 24 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:133: CHAR
                {
                mCHAR(); 

                }
                break;

        }

    }


    protected DFA1 dfa1 = new DFA1(this);
    protected DFA19 dfa19 = new DFA19(this);
    protected DFA23 dfa23 = new DFA23(this);
    static final String DFA1_eotS =
        "\1\uffff\1\21\1\23\1\25\4\uffff\1\27\1\31\2\uffff\1\33\3\uffff\1"+
        "\35\15\uffff";
    static final String DFA1_eofS =
        "\36\uffff";
    static final String DFA1_minS =
        "\1\44\1\55\2\76\4\uffff\1\46\1\52\2\uffff\1\174\3\uffff\1\76\15"+
        "\uffff";
    static final String DFA1_maxS =
        "\1\176\1\74\2\76\4\uffff\1\46\1\52\2\uffff\1\174\3\uffff\1\76\15"+
        "\uffff";
    static final String DFA1_acceptS =
        "\4\uffff\1\10\1\11\1\12\1\13\2\uffff\1\21\1\22\1\uffff\1\25\1\26"+
        "\1\2\1\uffff\1\1\1\5\1\20\1\6\1\7\1\15\1\14\1\17\1\16\1\24\1\23"+
        "\1\4\1\3";
    static final String DFA1_specialS =
        "\36\uffff}>";
    static final String[] DFA1_transitionS = {
            "\1\5\1\6\1\10\3\uffff\1\11\1\12\1\uffff\1\2\1\uffff\1\15\14"+
            "\uffff\1\1\1\13\1\3\1\16\36\uffff\1\7\35\uffff\1\14\1\uffff"+
            "\1\4",
            "\1\20\16\uffff\1\17",
            "\1\22",
            "\1\24",
            "",
            "",
            "",
            "",
            "\1\26",
            "\1\30",
            "",
            "",
            "\1\32",
            "",
            "",
            "",
            "\1\34",
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
    };

    static final short[] DFA1_eot = DFA.unpackEncodedString(DFA1_eotS);
    static final short[] DFA1_eof = DFA.unpackEncodedString(DFA1_eofS);
    static final char[] DFA1_min = DFA.unpackEncodedStringToUnsignedChars(DFA1_minS);
    static final char[] DFA1_max = DFA.unpackEncodedStringToUnsignedChars(DFA1_maxS);
    static final short[] DFA1_accept = DFA.unpackEncodedString(DFA1_acceptS);
    static final short[] DFA1_special = DFA.unpackEncodedString(DFA1_specialS);
    static final short[][] DFA1_transition;

    static {
        int numStates = DFA1_transitionS.length;
        DFA1_transition = new short[numStates][];
        for (int i=0; i<numStates; i++) {
            DFA1_transition[i] = DFA.unpackEncodedString(DFA1_transitionS[i]);
        }
    }

    class DFA1 extends DFA {

        public DFA1(BaseRecognizer recognizer) {
            this.recognizer = recognizer;
            this.decisionNumber = 1;
            this.eot = DFA1_eot;
            this.eof = DFA1_eof;
            this.min = DFA1_min;
            this.max = DFA1_max;
            this.accept = DFA1_accept;
            this.special = DFA1_special;
            this.transition = DFA1_transition;
        }
        public String getDescription() {
            return "115:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )";
        }
    }
    static final String DFA19_eotS =
        "\5\uffff";
    static final String DFA19_eofS =
        "\5\uffff";
    static final String DFA19_minS =
        "\2\56\3\uffff";
    static final String DFA19_maxS =
        "\1\71\1\145\3\uffff";
    static final String DFA19_acceptS =
        "\2\uffff\1\2\1\1\1\3";
    static final String DFA19_specialS =
        "\5\uffff}>";
    static final String[] DFA19_transitionS = {
            "\1\2\1\uffff\12\1",
            "\1\3\1\uffff\12\1\13\uffff\1\4\37\uffff\1\4",
            "",
            "",
            ""
    };

    static final short[] DFA19_eot = DFA.unpackEncodedString(DFA19_eotS);
    static final short[] DFA19_eof = DFA.unpackEncodedString(DFA19_eofS);
    static final char[] DFA19_min = DFA.unpackEncodedStringToUnsignedChars(DFA19_minS);
    static final char[] DFA19_max = DFA.unpackEncodedStringToUnsignedChars(DFA19_maxS);
    static final short[] DFA19_accept = DFA.unpackEncodedString(DFA19_acceptS);
    static final short[] DFA19_special = DFA.unpackEncodedString(DFA19_specialS);
    static final short[][] DFA19_transition;

    static {
        int numStates = DFA19_transitionS.length;
        DFA19_transition = new short[numStates][];
        for (int i=0; i<numStates; i++) {
            DFA19_transition[i] = DFA.unpackEncodedString(DFA19_transitionS[i]);
        }
    }

    class DFA19 extends DFA {

        public DFA19(BaseRecognizer recognizer) {
            this.recognizer = recognizer;
            this.decisionNumber = 19;
            this.eot = DFA19_eot;
            this.eof = DFA19_eof;
            this.min = DFA19_min;
            this.max = DFA19_max;
            this.accept = DFA19_accept;
            this.special = DFA19_special;
            this.transition = DFA19_transition;
        }
        public String getDescription() {
            return "153:1: FLOAT : ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT );";
        }
    }
    static final String DFA23_eotS =
        "\1\uffff\1\27\6\uffff\1\32\7\uffff\2\17\4\uffff\1\36\10\uffff";
    static final String DFA23_eofS =
        "\37\uffff";
    static final String DFA23_minS =
        "\1\11\1\60\6\uffff\1\41\7\uffff\1\52\1\170\2\uffff\1\0\1\uffff\1"+
        "\56\10\uffff";
    static final String DFA23_maxS =
        "\1\176\1\71\6\uffff\1\41\7\uffff\1\57\1\170\2\uffff\1\uffff\1\uffff"+
        "\1\145\10\uffff";
    static final String DFA23_acceptS =
        "\2\uffff\1\2\1\3\1\4\1\5\1\6\1\7\1\uffff\1\11\1\12\1\13\1\14\1\15"+
        "\1\16\1\17\2\uffff\1\20\1\23\1\uffff\1\25\1\uffff\1\1\1\27\1\22"+
        "\1\10\1\24\1\21\1\30\1\26";
    static final String DFA23_specialS =
        "\24\uffff\1\0\12\uffff}>";
    static final String[] DFA23_transitionS = {
            "\2\25\2\uffff\1\25\22\uffff\1\25\1\10\1\23\1\11\3\17\1\24\1"+
            "\13\1\14\2\17\1\12\1\17\1\1\1\20\12\26\1\6\1\7\3\17\1\21\1\2"+
            "\32\22\1\15\1\3\1\16\1\17\1\22\1\uffff\32\22\1\4\1\17\1\5\1"+
            "\17",
            "\12\30",
            "",
            "",
            "",
            "",
            "",
            "",
            "\1\31",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\1\33\4\uffff\1\33",
            "\1\34",
            "",
            "",
            "\47\35\1\23\uffd8\35",
            "",
            "\1\30\1\uffff\12\26\13\uffff\1\30\37\uffff\1\30",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    };

    static final short[] DFA23_eot = DFA.unpackEncodedString(DFA23_eotS);
    static final short[] DFA23_eof = DFA.unpackEncodedString(DFA23_eofS);
    static final char[] DFA23_min = DFA.unpackEncodedStringToUnsignedChars(DFA23_minS);
    static final char[] DFA23_max = DFA.unpackEncodedStringToUnsignedChars(DFA23_maxS);
    static final short[] DFA23_accept = DFA.unpackEncodedString(DFA23_acceptS);
    static final short[] DFA23_special = DFA.unpackEncodedString(DFA23_specialS);
    static final short[][] DFA23_transition;

    static {
        int numStates = DFA23_transitionS.length;
        DFA23_transition = new short[numStates][];
        for (int i=0; i<numStates; i++) {
            DFA23_transition[i] = DFA.unpackEncodedString(DFA23_transitionS[i]);
        }
    }

    class DFA23 extends DFA {

        public DFA23(BaseRecognizer recognizer) {
            this.recognizer = recognizer;
            this.decisionNumber = 23;
            this.eot = DFA23_eot;
            this.eof = DFA23_eof;
            this.min = DFA23_min;
            this.max = DFA23_max;
            this.accept = DFA23_accept;
            this.special = DFA23_special;
            this.transition = DFA23_transition;
        }
        public String getDescription() {
            return "1:1: Tokens : ( T__16 | T__17 | T__18 | T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | T__29 | OP | ID | XML | DOC | STR | COMMENT | WS | INT | FLOAT | CHAR );";
        }
        public int specialStateTransition(int s, IntStream _input) throws NoViableAltException {
            IntStream input = _input;
        	int _s = s;
            switch ( s ) {
                    case 0 : 
                        int LA23_20 = input.LA(1);

                        s = -1;
                        if ( (LA23_20=='\'') ) {s = 19;}

                        else if ( ((LA23_20>='\u0000' && LA23_20<='&')||(LA23_20>='(' && LA23_20<='\uFFFF')) ) {s = 29;}

                        if ( s>=0 ) return s;
                        break;
            }
            NoViableAltException nvae =
                new NoViableAltException(getDescription(), 23, _s, input);
            error(nvae);
            throw nvae;
        }
    }
 

}