// $ANTLR 3.3 Nov 30, 2010 12:46:29 /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g 2011-04-17 20:34:27

package org.nicerobot.struxt.parser;


import org.antlr.runtime.*;
import java.util.Stack;
import java.util.List;
import java.util.ArrayList;

public class StruxtLexer extends Lexer {
    public static final int EOF=-1;
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
    public static final int DOC=4;
    public static final int XML=5;
    public static final int CDATA=6;
    public static final int OP=7;
    public static final int PRENS=8;
    public static final int ID=9;
    public static final int POSTNS=10;
    public static final int STR=11;
    public static final int INT=12;
    public static final int FLOAT=13;
    public static final int CHAR=14;
    public static final int COMMENT=15;
    public static final int WS=16;
    public static final int EXPONENT=17;
    public static final int HEX_DIGIT=18;

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

    // $ANTLR start "T__19"
    public final void mT__19() throws RecognitionException {
        try {
            int _type = T__19;
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
    // $ANTLR end "T__19"

    // $ANTLR start "T__20"
    public final void mT__20() throws RecognitionException {
        try {
            int _type = T__20;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:12:7: ( '{' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:12:9: '{'
            {
            match('{'); 

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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:13:7: ( '}' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:13:9: '}'
            {
            match('}'); 

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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:14:7: ( ':' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:14:9: ':'
            {
            match(':'); 

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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:15:7: ( ';' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:15:9: ';'
            {
            match(';'); 

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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:16:7: ( ',' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:16:9: ','
            {
            match(','); 

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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:17:7: ( '(' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:17:9: '('
            {
            match('('); 

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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:18:7: ( ')' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:18:9: ')'
            {
            match(')'); 

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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:19:7: ( '[' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:19:9: '['
            {
            match('['); 

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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:20:7: ( ']' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:20:9: ']'
            {
            match(']'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__28"

    // $ANTLR start "PRENS"
    public final void mPRENS() throws RecognitionException {
        try {
            int _type = PRENS;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:285:5: ( ( '!' | '#' | '::' ) )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:285:7: ( '!' | '#' | '::' )
            {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:285:7: ( '!' | '#' | '::' )
            int alt1=3;
            switch ( input.LA(1) ) {
            case '!':
                {
                alt1=1;
                }
                break;
            case '#':
                {
                alt1=2;
                }
                break;
            case ':':
                {
                alt1=3;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 1, 0, input);

                throw nvae;
            }

            switch (alt1) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:285:8: '!'
                    {
                    match('!'); 

                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:285:12: '#'
                    {
                    match('#'); 

                    }
                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:285:16: '::'
                    {
                    match("::"); 


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
    // $ANTLR end "PRENS"

    // $ANTLR start "POSTNS"
    public final void mPOSTNS() throws RecognitionException {
        try {
            int _type = POSTNS;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:289:5: ( ( '@' | '\\\\' ) )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:289:7: ( '@' | '\\\\' )
            {
            if ( input.LA(1)=='@'||input.LA(1)=='\\' ) {
                input.consume();

            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                recover(mse);
                throw mse;}


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "POSTNS"

    // $ANTLR start "OP"
    public final void mOP() throws RecognitionException {
        try {
            int _type = OP;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:293:5: ( ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' ) )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:293:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )
            {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:293:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )
            int alt2=22;
            alt2 = dfa2.predict(input);
            switch (alt2) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:293:8: '<'
                    {
                    match('<'); 

                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:293:14: '<<'
                    {
                    match("<<"); 


                    }
                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:293:21: '<-'
                    {
                    match("<-"); 


                    }
                    break;
                case 4 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:293:28: '<->'
                    {
                    match("<->"); 


                    }
                    break;
                case 5 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:293:36: '->'
                    {
                    match("->"); 


                    }
                    break;
                case 6 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:293:43: '>>'
                    {
                    match(">>"); 


                    }
                    break;
                case 7 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:293:50: '>'
                    {
                    match('>'); 

                    }
                    break;
                case 8 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:293:56: '~'
                    {
                    match('~'); 

                    }
                    break;
                case 9 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:293:62: '$'
                    {
                    match('$'); 

                    }
                    break;
                case 10 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:293:68: '%'
                    {
                    match('%'); 

                    }
                    break;
                case 11 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:293:74: '^'
                    {
                    match('^'); 

                    }
                    break;
                case 12 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:293:80: '&'
                    {
                    match('&'); 

                    }
                    break;
                case 13 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:293:86: '&&'
                    {
                    match("&&"); 


                    }
                    break;
                case 14 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:294:7: '*'
                    {
                    match('*'); 

                    }
                    break;
                case 15 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:294:13: '**'
                    {
                    match("**"); 


                    }
                    break;
                case 16 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:294:20: '-'
                    {
                    match('-'); 

                    }
                    break;
                case 17 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:294:26: '+'
                    {
                    match('+'); 

                    }
                    break;
                case 18 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:294:32: '='
                    {
                    match('='); 

                    }
                    break;
                case 19 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:294:38: '|'
                    {
                    match('|'); 

                    }
                    break;
                case 20 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:294:44: '||'
                    {
                    match("||"); 


                    }
                    break;
                case 21 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:294:51: '/'
                    {
                    match('/'); 

                    }
                    break;
                case 22 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:294:57: '?'
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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:298:5: ( ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )* )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:298:7: ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )*
            {
            if ( (input.LA(1)>='A' && input.LA(1)<='Z')||input.LA(1)=='_'||(input.LA(1)>='a' && input.LA(1)<='z') ) {
                input.consume();

            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                recover(mse);
                throw mse;}

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:298:31: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )*
            loop3:
            do {
                int alt3=2;
                int LA3_0 = input.LA(1);

                if ( (LA3_0=='-'||(LA3_0>='0' && LA3_0<='9')||(LA3_0>='A' && LA3_0<='Z')||LA3_0=='_'||(LA3_0>='a' && LA3_0<='z')) ) {
                    alt3=1;
                }


                switch (alt3) {
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
            	    break loop3;
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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:302:5: ( '?xml' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:302:7: '?xml'
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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:306:5: ( '!!!' ( options {greedy=false; } : . )+ '!!!' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:306:7: '!!!' ( options {greedy=false; } : . )+ '!!!'
            {
            match("!!!"); 

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:306:13: ( options {greedy=false; } : . )+
            int cnt4=0;
            loop4:
            do {
                int alt4=2;
                int LA4_0 = input.LA(1);

                if ( (LA4_0=='!') ) {
                    int LA4_1 = input.LA(2);

                    if ( (LA4_1=='!') ) {
                        int LA4_3 = input.LA(3);

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
            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:306:38: .
            	    {
            	    matchAny(); 

            	    }
            	    break;

            	default :
            	    if ( cnt4 >= 1 ) break loop4;
                        EarlyExitException eee =
                            new EarlyExitException(4, input);
                        throw eee;
                }
                cnt4++;
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

    // $ANTLR start "CDATA"
    public final void mCDATA() throws RecognitionException {
        try {
            int _type = CDATA;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:310:5: ( '[[\"' ( options {greedy=false; } : . )+ '\"]]' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:310:7: '[[\"' ( options {greedy=false; } : . )+ '\"]]'
            {
            match("[[\""); 

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:310:13: ( options {greedy=false; } : . )+
            int cnt5=0;
            loop5:
            do {
                int alt5=2;
                int LA5_0 = input.LA(1);

                if ( (LA5_0=='\"') ) {
                    int LA5_1 = input.LA(2);

                    if ( (LA5_1==']') ) {
                        int LA5_3 = input.LA(3);

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
            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:310:38: .
            	    {
            	    matchAny(); 

            	    }
            	    break;

            	default :
            	    if ( cnt5 >= 1 ) break loop5;
                        EarlyExitException eee =
                            new EarlyExitException(5, input);
                        throw eee;
                }
                cnt5++;
            } while (true);

            match("\"]]"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "CDATA"

    // $ANTLR start "STR"
    public final void mSTR() throws RecognitionException {
        try {
            int _type = STR;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:314:5: ( '\"\"\"' ( options {greedy=false; } : . )* '\"\"\"' | '\\'\\'\\'' ( options {greedy=false; } : . )* '\\'\\'\\'' | '\"' (~ ( '\"' ) )* '\"' )
            int alt9=3;
            int LA9_0 = input.LA(1);

            if ( (LA9_0=='\"') ) {
                int LA9_1 = input.LA(2);

                if ( (LA9_1=='\"') ) {
                    int LA9_3 = input.LA(3);

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
                    NoViableAltException nvae =
                        new NoViableAltException("", 9, 1, input);

                    throw nvae;
                }
            }
            else if ( (LA9_0=='\'') ) {
                alt9=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 9, 0, input);

                throw nvae;
            }
            switch (alt9) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:314:7: '\"\"\"' ( options {greedy=false; } : . )* '\"\"\"'
                    {
                    match("\"\"\""); 

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:314:13: ( options {greedy=false; } : . )*
                    loop6:
                    do {
                        int alt6=2;
                        int LA6_0 = input.LA(1);

                        if ( (LA6_0=='\"') ) {
                            int LA6_1 = input.LA(2);

                            if ( (LA6_1=='\"') ) {
                                int LA6_3 = input.LA(3);

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
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:314:38: .
                    	    {
                    	    matchAny(); 

                    	    }
                    	    break;

                    	default :
                    	    break loop6;
                        }
                    } while (true);

                    match("\"\"\""); 


                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:315:7: '\\'\\'\\'' ( options {greedy=false; } : . )* '\\'\\'\\''
                    {
                    match("'''"); 

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:315:16: ( options {greedy=false; } : . )*
                    loop7:
                    do {
                        int alt7=2;
                        int LA7_0 = input.LA(1);

                        if ( (LA7_0=='\'') ) {
                            int LA7_1 = input.LA(2);

                            if ( (LA7_1=='\'') ) {
                                int LA7_3 = input.LA(3);

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
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:315:41: .
                    	    {
                    	    matchAny(); 

                    	    }
                    	    break;

                    	default :
                    	    break loop7;
                        }
                    } while (true);

                    match("'''"); 


                    }
                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:316:6: '\"' (~ ( '\"' ) )* '\"'
                    {
                    match('\"'); 
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:316:10: (~ ( '\"' ) )*
                    loop8:
                    do {
                        int alt8=2;
                        int LA8_0 = input.LA(1);

                        if ( ((LA8_0>='\u0000' && LA8_0<='!')||(LA8_0>='#' && LA8_0<='\uFFFF')) ) {
                            alt8=1;
                        }


                        switch (alt8) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:316:10: ~ ( '\"' )
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
                    	    break loop8;
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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:320:5: ( '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n' | '/*' ( options {greedy=false; } : . )* '*/' )
            int alt13=2;
            int LA13_0 = input.LA(1);

            if ( (LA13_0=='/') ) {
                int LA13_1 = input.LA(2);

                if ( (LA13_1=='/') ) {
                    alt13=1;
                }
                else if ( (LA13_1=='*') ) {
                    alt13=2;
                }
                else {
                    NoViableAltException nvae =
                        new NoViableAltException("", 13, 1, input);

                    throw nvae;
                }
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 13, 0, input);

                throw nvae;
            }
            switch (alt13) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:320:9: '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n'
                    {
                    match("//"); 

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:320:14: (~ ( '\\n' | '\\r' ) )*
                    loop10:
                    do {
                        int alt10=2;
                        int LA10_0 = input.LA(1);

                        if ( ((LA10_0>='\u0000' && LA10_0<='\t')||(LA10_0>='\u000B' && LA10_0<='\f')||(LA10_0>='\u000E' && LA10_0<='\uFFFF')) ) {
                            alt10=1;
                        }


                        switch (alt10) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:320:14: ~ ( '\\n' | '\\r' )
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
                    	    break loop10;
                        }
                    } while (true);

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:320:28: ( '\\r' )?
                    int alt11=2;
                    int LA11_0 = input.LA(1);

                    if ( (LA11_0=='\r') ) {
                        alt11=1;
                    }
                    switch (alt11) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:320:28: '\\r'
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
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:321:9: '/*' ( options {greedy=false; } : . )* '*/'
                    {
                    match("/*"); 

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:321:14: ( options {greedy=false; } : . )*
                    loop12:
                    do {
                        int alt12=2;
                        int LA12_0 = input.LA(1);

                        if ( (LA12_0=='*') ) {
                            int LA12_1 = input.LA(2);

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
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:321:42: .
                    	    {
                    	    matchAny(); 

                    	    }
                    	    break;

                    	default :
                    	    break loop12;
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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:325:5: ( ( ' ' | '\\t' | '\\r' | '\\n' ) )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:325:9: ( ' ' | '\\t' | '\\r' | '\\n' )
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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:332:5: ( ( '0' .. '9' )+ )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:332:7: ( '0' .. '9' )+
            {
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:332:7: ( '0' .. '9' )+
            int cnt14=0;
            loop14:
            do {
                int alt14=2;
                int LA14_0 = input.LA(1);

                if ( ((LA14_0>='0' && LA14_0<='9')) ) {
                    alt14=1;
                }


                switch (alt14) {
            	case 1 :
            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:332:7: '0' .. '9'
            	    {
            	    matchRange('0','9'); 

            	    }
            	    break;

            	default :
            	    if ( cnt14 >= 1 ) break loop14;
                        EarlyExitException eee =
                            new EarlyExitException(14, input);
                        throw eee;
                }
                cnt14++;
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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:336:5: ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT )
            int alt21=3;
            alt21 = dfa21.predict(input);
            switch (alt21) {
                case 1 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:336:9: ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )?
                    {
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:336:9: ( '0' .. '9' )+
                    int cnt15=0;
                    loop15:
                    do {
                        int alt15=2;
                        int LA15_0 = input.LA(1);

                        if ( ((LA15_0>='0' && LA15_0<='9')) ) {
                            alt15=1;
                        }


                        switch (alt15) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:336:10: '0' .. '9'
                    	    {
                    	    matchRange('0','9'); 

                    	    }
                    	    break;

                    	default :
                    	    if ( cnt15 >= 1 ) break loop15;
                                EarlyExitException eee =
                                    new EarlyExitException(15, input);
                                throw eee;
                        }
                        cnt15++;
                    } while (true);

                    match('.'); 
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:336:25: ( '0' .. '9' )*
                    loop16:
                    do {
                        int alt16=2;
                        int LA16_0 = input.LA(1);

                        if ( ((LA16_0>='0' && LA16_0<='9')) ) {
                            alt16=1;
                        }


                        switch (alt16) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:336:26: '0' .. '9'
                    	    {
                    	    matchRange('0','9'); 

                    	    }
                    	    break;

                    	default :
                    	    break loop16;
                        }
                    } while (true);

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:336:37: ( EXPONENT )?
                    int alt17=2;
                    int LA17_0 = input.LA(1);

                    if ( (LA17_0=='E'||LA17_0=='e') ) {
                        alt17=1;
                    }
                    switch (alt17) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:336:37: EXPONENT
                            {
                            mEXPONENT(); 

                            }
                            break;

                    }


                    }
                    break;
                case 2 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:337:9: '.' ( '0' .. '9' )+ ( EXPONENT )?
                    {
                    match('.'); 
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:337:13: ( '0' .. '9' )+
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
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:337:14: '0' .. '9'
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

                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:337:25: ( EXPONENT )?
                    int alt19=2;
                    int LA19_0 = input.LA(1);

                    if ( (LA19_0=='E'||LA19_0=='e') ) {
                        alt19=1;
                    }
                    switch (alt19) {
                        case 1 :
                            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:337:25: EXPONENT
                            {
                            mEXPONENT(); 

                            }
                            break;

                    }


                    }
                    break;
                case 3 :
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:338:9: ( '0' .. '9' )+ EXPONENT
                    {
                    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:338:9: ( '0' .. '9' )+
                    int cnt20=0;
                    loop20:
                    do {
                        int alt20=2;
                        int LA20_0 = input.LA(1);

                        if ( ((LA20_0>='0' && LA20_0<='9')) ) {
                            alt20=1;
                        }


                        switch (alt20) {
                    	case 1 :
                    	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:338:10: '0' .. '9'
                    	    {
                    	    matchRange('0','9'); 

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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:342:5: ( '\\'' (~ ( '\\'' ) )+ '\\'' )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:342:8: '\\'' (~ ( '\\'' ) )+ '\\''
            {
            match('\''); 
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:342:13: (~ ( '\\'' ) )+
            int cnt22=0;
            loop22:
            do {
                int alt22=2;
                int LA22_0 = input.LA(1);

                if ( ((LA22_0>='\u0000' && LA22_0<='&')||(LA22_0>='(' && LA22_0<='\uFFFF')) ) {
                    alt22=1;
                }


                switch (alt22) {
            	case 1 :
            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:342:13: ~ ( '\\'' )
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
            	    if ( cnt22 >= 1 ) break loop22;
                        EarlyExitException eee =
                            new EarlyExitException(22, input);
                        throw eee;
                }
                cnt22++;
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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:347:5: ( ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+ )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:347:7: ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+
            {
            if ( input.LA(1)=='E'||input.LA(1)=='e' ) {
                input.consume();

            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                recover(mse);
                throw mse;}

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:347:17: ( '+' | '-' )?
            int alt23=2;
            int LA23_0 = input.LA(1);

            if ( (LA23_0=='+'||LA23_0=='-') ) {
                alt23=1;
            }
            switch (alt23) {
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

            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:347:28: ( '0' .. '9' )+
            int cnt24=0;
            loop24:
            do {
                int alt24=2;
                int LA24_0 = input.LA(1);

                if ( ((LA24_0>='0' && LA24_0<='9')) ) {
                    alt24=1;
                }


                switch (alt24) {
            	case 1 :
            	    // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:347:29: '0' .. '9'
            	    {
            	    matchRange('0','9'); 

            	    }
            	    break;

            	default :
            	    if ( cnt24 >= 1 ) break loop24;
                        EarlyExitException eee =
                            new EarlyExitException(24, input);
                        throw eee;
                }
                cnt24++;
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
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:352:5: ( ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' ) )
            // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:352:7: ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' )
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
        // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:8: ( T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | PRENS | POSTNS | OP | ID | XML | DOC | CDATA | STR | COMMENT | WS | INT | FLOAT | CHAR )
        int alt25=23;
        alt25 = dfa25.predict(input);
        switch (alt25) {
            case 1 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:10: T__19
                {
                mT__19(); 

                }
                break;
            case 2 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:16: T__20
                {
                mT__20(); 

                }
                break;
            case 3 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:22: T__21
                {
                mT__21(); 

                }
                break;
            case 4 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:28: T__22
                {
                mT__22(); 

                }
                break;
            case 5 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:34: T__23
                {
                mT__23(); 

                }
                break;
            case 6 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:40: T__24
                {
                mT__24(); 

                }
                break;
            case 7 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:46: T__25
                {
                mT__25(); 

                }
                break;
            case 8 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:52: T__26
                {
                mT__26(); 

                }
                break;
            case 9 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:58: T__27
                {
                mT__27(); 

                }
                break;
            case 10 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:64: T__28
                {
                mT__28(); 

                }
                break;
            case 11 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:70: PRENS
                {
                mPRENS(); 

                }
                break;
            case 12 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:76: POSTNS
                {
                mPOSTNS(); 

                }
                break;
            case 13 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:83: OP
                {
                mOP(); 

                }
                break;
            case 14 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:86: ID
                {
                mID(); 

                }
                break;
            case 15 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:89: XML
                {
                mXML(); 

                }
                break;
            case 16 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:93: DOC
                {
                mDOC(); 

                }
                break;
            case 17 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:97: CDATA
                {
                mCDATA(); 

                }
                break;
            case 18 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:103: STR
                {
                mSTR(); 

                }
                break;
            case 19 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:107: COMMENT
                {
                mCOMMENT(); 

                }
                break;
            case 20 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:115: WS
                {
                mWS(); 

                }
                break;
            case 21 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:118: INT
                {
                mINT(); 

                }
                break;
            case 22 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:122: FLOAT
                {
                mFLOAT(); 

                }
                break;
            case 23 :
                // /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/Struxt.g:1:128: CHAR
                {
                mCHAR(); 

                }
                break;

        }

    }


    protected DFA2 dfa2 = new DFA2(this);
    protected DFA21 dfa21 = new DFA21(this);
    protected DFA25 dfa25 = new DFA25(this);
    static final String DFA2_eotS =
        "\1\uffff\1\21\1\23\1\25\4\uffff\1\27\1\31\2\uffff\1\33\3\uffff\1"+
        "\35\15\uffff";
    static final String DFA2_eofS =
        "\36\uffff";
    static final String DFA2_minS =
        "\1\44\1\55\2\76\4\uffff\1\46\1\52\2\uffff\1\174\3\uffff\1\76\15"+
        "\uffff";
    static final String DFA2_maxS =
        "\1\176\1\74\2\76\4\uffff\1\46\1\52\2\uffff\1\174\3\uffff\1\76\15"+
        "\uffff";
    static final String DFA2_acceptS =
        "\4\uffff\1\10\1\11\1\12\1\13\2\uffff\1\21\1\22\1\uffff\1\25\1\26"+
        "\1\2\1\uffff\1\1\1\5\1\20\1\6\1\7\1\15\1\14\1\17\1\16\1\24\1\23"+
        "\1\4\1\3";
    static final String DFA2_specialS =
        "\36\uffff}>";
    static final String[] DFA2_transitionS = {
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

    static final short[] DFA2_eot = DFA.unpackEncodedString(DFA2_eotS);
    static final short[] DFA2_eof = DFA.unpackEncodedString(DFA2_eofS);
    static final char[] DFA2_min = DFA.unpackEncodedStringToUnsignedChars(DFA2_minS);
    static final char[] DFA2_max = DFA.unpackEncodedStringToUnsignedChars(DFA2_maxS);
    static final short[] DFA2_accept = DFA.unpackEncodedString(DFA2_acceptS);
    static final short[] DFA2_special = DFA.unpackEncodedString(DFA2_specialS);
    static final short[][] DFA2_transition;

    static {
        int numStates = DFA2_transitionS.length;
        DFA2_transition = new short[numStates][];
        for (int i=0; i<numStates; i++) {
            DFA2_transition[i] = DFA.unpackEncodedString(DFA2_transitionS[i]);
        }
    }

    class DFA2 extends DFA {

        public DFA2(BaseRecognizer recognizer) {
            this.recognizer = recognizer;
            this.decisionNumber = 2;
            this.eot = DFA2_eot;
            this.eof = DFA2_eof;
            this.min = DFA2_min;
            this.max = DFA2_max;
            this.accept = DFA2_accept;
            this.special = DFA2_special;
            this.transition = DFA2_transition;
        }
        public String getDescription() {
            return "293:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )";
        }
    }
    static final String DFA21_eotS =
        "\5\uffff";
    static final String DFA21_eofS =
        "\5\uffff";
    static final String DFA21_minS =
        "\2\56\3\uffff";
    static final String DFA21_maxS =
        "\1\71\1\145\3\uffff";
    static final String DFA21_acceptS =
        "\2\uffff\1\2\1\1\1\3";
    static final String DFA21_specialS =
        "\5\uffff}>";
    static final String[] DFA21_transitionS = {
            "\1\2\1\uffff\12\1",
            "\1\3\1\uffff\12\1\13\uffff\1\4\37\uffff\1\4",
            "",
            "",
            ""
    };

    static final short[] DFA21_eot = DFA.unpackEncodedString(DFA21_eotS);
    static final short[] DFA21_eof = DFA.unpackEncodedString(DFA21_eofS);
    static final char[] DFA21_min = DFA.unpackEncodedStringToUnsignedChars(DFA21_minS);
    static final char[] DFA21_max = DFA.unpackEncodedStringToUnsignedChars(DFA21_maxS);
    static final short[] DFA21_accept = DFA.unpackEncodedString(DFA21_acceptS);
    static final short[] DFA21_special = DFA.unpackEncodedString(DFA21_specialS);
    static final short[][] DFA21_transition;

    static {
        int numStates = DFA21_transitionS.length;
        DFA21_transition = new short[numStates][];
        for (int i=0; i<numStates; i++) {
            DFA21_transition[i] = DFA.unpackEncodedString(DFA21_transitionS[i]);
        }
    }

    class DFA21 extends DFA {

        public DFA21(BaseRecognizer recognizer) {
            this.recognizer = recognizer;
            this.decisionNumber = 21;
            this.eot = DFA21_eot;
            this.eof = DFA21_eof;
            this.min = DFA21_min;
            this.max = DFA21_max;
            this.accept = DFA21_accept;
            this.special = DFA21_special;
            this.transition = DFA21_transition;
        }
        public String getDescription() {
            return "335:1: FLOAT : ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT );";
        }
    }
    static final String DFA25_eotS =
        "\1\uffff\1\26\2\uffff\1\30\4\uffff\1\32\1\uffff\1\14\3\uffff\2\16"+
        "\4\uffff\1\37\12\uffff";
    static final String DFA25_eofS =
        "\40\uffff";
    static final String DFA25_minS =
        "\1\11\1\60\2\uffff\1\72\4\uffff\1\133\1\uffff\1\41\3\uffff\1\52"+
        "\1\170\2\uffff\1\0\1\uffff\1\56\12\uffff";
    static final String DFA25_maxS =
        "\1\176\1\71\2\uffff\1\72\4\uffff\1\133\1\uffff\1\41\3\uffff\1\57"+
        "\1\170\2\uffff\1\uffff\1\uffff\1\145\12\uffff";
    static final String DFA25_acceptS =
        "\2\uffff\1\2\1\3\1\uffff\1\5\1\6\1\7\1\10\1\uffff\1\12\1\uffff\1"+
        "\13\1\14\1\15\2\uffff\1\16\1\22\1\uffff\1\24\1\uffff\1\1\1\26\1"+
        "\4\1\21\1\11\1\20\1\23\1\17\1\27\1\25";
    static final String DFA25_specialS =
        "\23\uffff\1\0\14\uffff}>";
    static final String[] DFA25_transitionS = {
            "\2\24\2\uffff\1\24\22\uffff\1\24\1\13\1\22\1\14\3\16\1\23\1"+
            "\7\1\10\2\16\1\6\1\16\1\1\1\17\12\25\1\4\1\5\3\16\1\20\1\15"+
            "\32\21\1\11\1\15\1\12\1\16\1\21\1\uffff\32\21\1\2\1\16\1\3\1"+
            "\16",
            "\12\27",
            "",
            "",
            "\1\14",
            "",
            "",
            "",
            "",
            "\1\31",
            "",
            "\1\33",
            "",
            "",
            "",
            "\1\34\4\uffff\1\34",
            "\1\35",
            "",
            "",
            "\47\36\1\22\uffd8\36",
            "",
            "\1\27\1\uffff\12\25\13\uffff\1\27\37\uffff\1\27",
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

    static final short[] DFA25_eot = DFA.unpackEncodedString(DFA25_eotS);
    static final short[] DFA25_eof = DFA.unpackEncodedString(DFA25_eofS);
    static final char[] DFA25_min = DFA.unpackEncodedStringToUnsignedChars(DFA25_minS);
    static final char[] DFA25_max = DFA.unpackEncodedStringToUnsignedChars(DFA25_maxS);
    static final short[] DFA25_accept = DFA.unpackEncodedString(DFA25_acceptS);
    static final short[] DFA25_special = DFA.unpackEncodedString(DFA25_specialS);
    static final short[][] DFA25_transition;

    static {
        int numStates = DFA25_transitionS.length;
        DFA25_transition = new short[numStates][];
        for (int i=0; i<numStates; i++) {
            DFA25_transition[i] = DFA.unpackEncodedString(DFA25_transitionS[i]);
        }
    }

    class DFA25 extends DFA {

        public DFA25(BaseRecognizer recognizer) {
            this.recognizer = recognizer;
            this.decisionNumber = 25;
            this.eot = DFA25_eot;
            this.eof = DFA25_eof;
            this.min = DFA25_min;
            this.max = DFA25_max;
            this.accept = DFA25_accept;
            this.special = DFA25_special;
            this.transition = DFA25_transition;
        }
        public String getDescription() {
            return "1:1: Tokens : ( T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | PRENS | POSTNS | OP | ID | XML | DOC | CDATA | STR | COMMENT | WS | INT | FLOAT | CHAR );";
        }
        public int specialStateTransition(int s, IntStream _input) throws NoViableAltException {
            IntStream input = _input;
        	int _s = s;
            switch ( s ) {
                    case 0 : 
                        int LA25_19 = input.LA(1);

                        s = -1;
                        if ( (LA25_19=='\'') ) {s = 18;}

                        else if ( ((LA25_19>='\u0000' && LA25_19<='&')||(LA25_19>='(' && LA25_19<='\uFFFF')) ) {s = 30;}

                        if ( s>=0 ) return s;
                        break;
            }
            NoViableAltException nvae =
                new NoViableAltException(getDescription(), 25, _s, input);
            error(nvae);
            throw nvae;
        }
    }
 

}