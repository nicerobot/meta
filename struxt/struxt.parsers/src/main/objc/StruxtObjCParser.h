// $ANTLR 3.3 Nov 30, 2010 12:45:30 /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtObjC.g 2011-04-05 10:55:39

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

#pragma mark Cyclic DFA interface start DFA9
@interface DFA9 : ANTLRDFA {
}
+ newDFA9WithRecognizer:(ANTLRBaseRecognizer *)theRecognizer;
- initWithRecognizer:(ANTLRBaseRecognizer *)recognizer;
@end /* end of DFA9 interface  */

#pragma mark Cyclic DFA interface end DFA9
#pragma mark Tokens
#define EOF -1
#define T__16 16
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
#define T__27 27
#define T__28 28
#define T__29 29
#define DOC 4
#define XML 5
#define STR 6
#define ID 7
#define OP 8
#define INT 9
#define FLOAT 10
#define CHAR 11
#define COMMENT 12
#define WS 13
#define EXPONENT 14
#define HEX_DIGIT 15
#pragma mark Dynamic Global Scopes
#pragma mark Dynamic Rule Scopes
#pragma mark Rule Return Scopes start
#pragma mark Rule return scopes end
@interface StruxtObjCParser : ANTLRParser { /* line 572 */
// start of globalAttributeScopeMemVar


// start of action-actionScope-memVars
// start of ruleAttributeScopeMemVar


// Start of memVars

DFA9 *dfa9;
 }

// start of action-actionScope-methodsDecl


- (void)struxt; 
- (String)xmldecl; 
- (void)node; 
- (String)tag; 
- (void)children; 
- (void)childs; 
- (void)attribute; 
- (Token)value; 
- (void)attributes; 


@end /* end of StruxtObjCParser interface */
