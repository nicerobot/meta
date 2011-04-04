// $ANTLR 3.3 Nov 30, 2010 12:45:30 /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtObjC.g 2011-04-04 13:36:28

/* =============================================================================
 * Standard antlr3 OBJC runtime definitions
 */
#import <Cocoa/Cocoa.h>
#import "antlr3.h"
/* End of standard antlr3 runtime definitions
 * =============================================================================
 */

/* parserHeaderFile */

typedef enum {
    ANTLR_EOF = -1,
    INVALID,
    EOR,
    DOWN,
    UP,
    MIN
} ANTLR3TokenType;

#pragma mark Cyclic DFA interface start DFA6
@interface DFA6 : ANTLRDFA {
}
+ newDFA6WithRecognizer:(ANTLRBaseRecognizer *)theRecognizer;
- initWithRecognizer:(ANTLRBaseRecognizer *)recognizer;
@end /* end of DFA6 interface  */

#pragma mark Cyclic DFA interface end DFA6
#pragma mark Tokens
#define EOF -1
#define T__17 17
#define T__18 18
#define T__19 19
#define T__20 20
#define T__21 21
#define T__22 22
#define T__23 23
#define T__24 24
#define T__25 25
#define T__26 26
#define STR 4
#define ID 5
#define INT 6
#define FLOAT 7
#define CHAR 8
#define COMMENT 9
#define WS 10
#define ESC_SEQ 11
#define STRING 12
#define EXPONENT 13
#define HEX_DIGIT 14
#define UNICODE_ESC 15
#define OCTAL_ESC 16
#pragma mark Dynamic Global Scopes
#pragma mark Dynamic Rule Scopes
#pragma mark Rule Return Scopes start
#pragma mark Rule return scopes end
@interface StruxtObjCParser : ANTLRParser { /* line 572 */
// start of globalAttributeScopeMemVar


// start of action-actionScope-memVars
// start of ruleAttributeScopeMemVar


// Start of memVars

DFA6 *dfa6;
 }

// start of action-actionScope-methodsDecl


- (void)struxt; 
- (void)node; 
- (void)tag; 
- (void)children; 
- (void)childs; 
- (void)attribute; 
- (void)attributes; 


@end /* end of StruxtObjCParser interface */
