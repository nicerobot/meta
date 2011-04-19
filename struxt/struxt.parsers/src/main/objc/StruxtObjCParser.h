// $ANTLR 3.3 Nov 30, 2010 12:46:29 /Users/Shared/Dropbox/workspace/projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtObjC.g 2011-04-19 00:05:01

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

#pragma mark Cyclic DFA interface start DFA8
@interface DFA8 : ANTLRDFA {
}
+ newDFA8WithRecognizer:(ANTLRBaseRecognizer *)theRecognizer;
- initWithRecognizer:(ANTLRBaseRecognizer *)recognizer;
@end /* end of DFA8 interface  */

#pragma mark Cyclic DFA interface end DFA8#pragma mark Cyclic DFA interface start DFA15
@interface DFA15 : ANTLRDFA {
}
+ newDFA15WithRecognizer:(ANTLRBaseRecognizer *)theRecognizer;
- initWithRecognizer:(ANTLRBaseRecognizer *)recognizer;
@end /* end of DFA15 interface  */

#pragma mark Cyclic DFA interface end DFA15
#pragma mark Tokens
#define EOF -1
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
#define DOC 4
#define XML 5
#define CDATA 6
#define OP 7
#define PRENS 8
#define ID 9
#define POSTNS 10
#define STR 11
#define INT 12
#define FLOAT 13
#define CHAR 14
#define COMMENT 15
#define WS 16
#define EXPONENT 17
#define HEX_DIGIT 18
#pragma mark Dynamic Global Scopes
#pragma mark Dynamic Rule Scopes
#pragma mark Rule Return Scopes start
/* returnScopeInterface */
@interface StruxtObjCParser_name_return :ANTLRParserRuleReturnScope { /* returnScopeInterface line 1806 */
 /* start of memVars() */
Token namespace;
Token nodename;
}
 /* start properties */
@property (getter=getnamespace, setter=setnamespace:) Token namespace;
@property (getter=getnodename, setter=setnodename:) Token nodename;

/* end properties */
+ (StruxtObjCParser_name_return *)newStruxtObjCParser_name_return;
/* this is start of set and get methods */
  /* methodsDecl */
/* start of iterated get and set functions */



- (Token)getnamespace;
- (void)setnamespace:(Token)aVal;


- (Token)getnodename;
- (void)setnodename:(Token)aVal;

// End of iterated get and set functions
@end /* end of returnScopeInterface interface */

#pragma mark Rule return scopes end
@interface StruxtObjCParser : ANTLRParser { /* line 572 */
// start of globalAttributeScopeMemVar


// start of action-actionScope-memVars
// start of ruleAttributeScopeMemVar


// Start of memVars

DFA8 *dfa8;
DFA15 *dfa15;
 }

// start of action-actionScope-methodsDecl


- (StruxtObjCParser)struxt; 
- (void)xmldecl; 
- (void)node; 
- (void)tag; 
- (void)children; 
- (void)childs; 
- (void)attribute; 
- (StruxtObjCParser_name_return *)name; 
- (Token)ns; 
- (String)value; 
- (void)attributes; 


@end /* end of StruxtObjCParser interface */
