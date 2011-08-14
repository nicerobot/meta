package node

import (
  "fmt"
  "xml"
)

type Attributes []xml.Attr
type Children []Node

type Node struct {
  Name xml.Name
  Attributes Attributes
  Children Children
}

func (this Attributes) String() (s string) {
  for _, a := range this {
    name := a.Name.Local
    if "" != a.Name.Space {
      name = fmt.Sprintf("%s:%s", a.Name.Space, a.Name.Local)
    }
    s += fmt.Sprintf(" %s=\"%s\"",name,a.Value)
  }
	return
}

func (this Children) String() (s string) {
  for _, c := range this {
    s += fmt.Sprintf("%s", c)
  }
  return
}

func (this Node) String() (s string) {
  name := this.Name.Local
  if "" != this.Name.Space {
    name = fmt.Sprintf("%s:%s", this.Name.Space, this.Name.Local)
  }
  if 0 == len(this.Children) {
  	return fmt.Sprintf("<%s%v/>\n", name, this.Attributes)
  }
	return fmt.Sprintf("<%s%v>%s</%s>\n", name, this.Attributes, this.Children, name)
}

