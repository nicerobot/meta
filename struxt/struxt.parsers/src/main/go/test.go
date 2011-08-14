package main

import (
  "fmt"
  "xml"
  "./gonode"
)

func main() {
  a := node.Node{xml.Name{"","a"},[]xml.Attr{xml.Attr{xml.Name{"","na"},"va"}}, nil}
  b := node.Node{xml.Name{"","b"},[]xml.Attr{xml.Attr{xml.Name{"","nb"},"vb"}}, nil}
  c := []node.Node{a,b}
  fmt.Print(node.Node{xml.Name{"","test"},[]xml.Attr{xml.Attr{xml.Name{"","nroota"},"vroota"}},c})
}
