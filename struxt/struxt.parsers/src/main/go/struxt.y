%package main   # Set the package of the generated file to "main"

%import scanner fmt os ./gonode

%union {
  Root node.Node
}

%token<int> tint
%token<string> tid
%token<string> tstr
%token<byte> tchar
%token<float64> tfloat

%type<Root> Struxt

%%
Struxt : { fmt.Print("Struxt: Empty $$\n") }
       | Node { fmt.Print("Struxt: Node $$\n") }
       ;

Node : Tag Children { fmt.Print("Node: Tag Children $$\n") }
     | tstr { fmt.Print("Node: tstr $$\n") }
     ;

Nodes : Node NodeB { fmt.Print("Nodes: $$\n") }
      ;

NodeB :  { fmt.Print("NodeB: Empty $$\n") }
      | Nodes { fmt.Print("NodeB: Nodes $$\n") }
      ;

Etag : { fmt.Print("Etag: Empty $$\n") }
     | Tag { fmt.Print("Etag: Tag $$\n") }
     ;

Tags : tid Tagb { fmt.Print("Tags: tid Tagb $$\n") }
     ;

Tagb : { fmt.Print("Tagb: Empty $$\n") }
     | Attributes { fmt.Print("Tagb: Attributes $$\n") }
     ;

Children : '{' Nodes Etag '}' { fmt.Print("Children: { } $$\n") }
         | '(' Nodes Etag ')' { fmt.Print("Children: ( ) $$\n") }
         | '[' Nodes Etag ']' { fmt.Print("Children: [ ] $$\n") }
         | ':' Nodes   '.' { fmt.Print("Children: :. $$\n") }
         ;

Aid : tid Ab { fmt.Print("Aid: tid $$\n") }
    | tstr tid { fmt.Print("Aid: tstr $$\n") }
    | tint tid { fmt.Print("Aid: tint $$\n") }
    | tfloat tid { fmt.Print("Aid: tfloat $$\n") }
    | tchar tid { fmt.Print("Aid: tchar $$\n") }
    ;
    
Ab : tstr { fmt.Print("Ab: tstr $$\n") }
   | tint { fmt.Print("Ab: tint $$\n") }
   | tfloat { fmt.Print("Ab: tfloat $$\n") }
   | tchar { fmt.Print("Ab: tchar $$\n") }
   ;

Attributes : Attribute Abs { fmt.Print("Attributes: $$\n") }
           ;

Abs : { fmt.Print("Abs: Empty $$\n") }
    | Attribute ',' Attributes { fmt.Print("Abs: Attributes $$\n") }
    ;
%%

// Entry point for executable
func main() {
  reader := os.Stdin
  for true {
    var s scanner.Scanner
    s.Init(reader)
    
    // Define a scanner function for the yyparse function
    nextWord := func(v *yystype)int {
      s.Scan()
      return -1
    }
    // Print the result if the parser recognized the input
    // Otherwise, print a colloquial but unhelpful message
    if ok, result := yyparse(scanner.EOF, nextWord); ok {
      fmt.Println("Result:", result)
    } else {
      fmt.Println("Nope")
    }
  }
}
