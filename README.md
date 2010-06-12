`text-plain` is a language based on Struxt.

## Struxt - Structured Text ##

Structured ... like XML.
Readable   ... like plain text.

## For example ##

### Here is a Struxt document ###

    note: to: "Tove". from: "Jani". heading: "Reminder". body: "Don't forget me this weekend!"!

### For this XML ###

    <note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
    </note>

---

## The Goal ##

The goal is to provide an easily readable representation of an XML document and, like Markdown,
provide an easy, natural means of manually creating structured documents. In other words, do away
with all the `< / >` marks and tags and replace them with human-friendly punctuation.

## More Examples ##

---

### For this XML ###

    <painting>
      <img src="madonna.jpg" alt='Foligno Madonna, by Raphael'/>
      <caption>This is Raphael's "Foligno" Madonna, painted in 
      <date>1511</date>-<date>1512</date>.
      </caption>
    </painting>

### The Struxt ###

    painting:
      img "madonna.jpg" src, "Foligno Madonna, by Raphael" alt.
      caption:
        """This is Raphael's "Foligno" Madonna, painted in """
        date: "1511". "-"
        date: "1512". "."..

---

### For this XML ###

    <?xml version="1.0"?>
    <iCalendar xmlns="urn:ietf:params:xml:ns:xcal">
      <vcalendar>
        <version>2.0</version>
        <prodid>-//hacksw/handcal//NONSGML v1.0//EN</prodid>
        <vevent>
          <dtstart>19970714T170000Z</dtstart>
          <dtend>19970715T035959Z</dtend>
            <summary xml:lang="en_US">Bastille Day Party</summary>
        </vevent>
        </vcalendar>
    </iCalendar>

### The Struxt ###

	#?xml "1.1" version.
    iCalendar "urn:ietf:params:xml:ns:xcal" xmlns:
      vcalendar:
        version: "2.0".
        prodid: "-//hacksw/handcal//NONSGML v1.0//EN".
        vevent:
          dtstart: "19970714T170000Z".
          dtend: "19970715T035959Z".
          summary "en_US" lang'xml: "Bastille Day Party".
    !

---

## Syntax ##
(draft)

- `:` indicates the opening of element, children follow. This is optional if there are no children.
- `.` or `,` closes an element.
- `;` closes two elements.
- `,` indicates the continuation of a list of attributes.
- `!` closes all open elements. Essentially ending the document. The same as using "." for each open element.
- `'` followed by namespace name. For the default namespace, ' must be used. e.g. `root'.` is `<:root>`
- `"` is text. All `\` are escaped as `\\` and all `"` are escaped as `\"`.
- `"""` is multi-line text. All `\` are escaped as `\\` and all `"""` are escaped as `\"""`.
  Any single-line text can be represented as multi-line and vice-versa, given the customary escaping.

- Attribute:
  - Specified "name value" but if name isn't a valid attribute name, "value name" will be used/attempted.
    - This can be force by always quoting the value. name "value" or "value" name.
  - Values containing no space and neither beginning nor ending with a quote, can omit surrounding quotes.
  - Commas are optional between all name/value attribute pairs.
    - One default attribute name is allowed as the first in the list when not separating list items with a comma.
  - Attribute name can be optional.
    - For unknown or non-configured namespaces, there is a single default attribute name of "id".
    - The defaults are configurable per namespace and namespace element.
      - A sequence of defaults is available.
      - For example, xsl:value-of's default name is "select".
  - Namespace element-attribute configurations:
    - http://text-plain.org/attribute
      - http://text-plain.org/ns/attribute/xsl - for xsl-wide attribute default.
      - http://text-plain.org/ns/attribute/xsl/value-of - for xsl:value-of attribute default.

- Namespaces:
  - Similar to understandings of common file extensions,
    namespace names default to particular URIs if not specified in the markup.
  - Namespace URI configurations:
    - http://text-plain.org/ns/uri
      - http://text-plain.org/ns/uri/xsl - for namespace for "xsl"
  
- Optional. Using
  - "and" after the last "," of a list.
  - "with" or "w/" before attribute lists.
  - "of" or "as" between attribute name and value.
  - "contains" or "includes" before ":".
  - "in" prior to namespace prefix.
  
Space is not relevant between nodes and tokens.
Space, or the lack of it, is relevant between words and multi-character tokens, lists of elements omitting commas, and within quotes.

---

## More Examples ##

---
 
### For this XML ###

    <xsl:stylesheet version="2.0"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
      <xsl:template match="*">
        [<xsl:value-of select="." />]
      </xsl:template>
    </xsl:stylesheet>

### The Struxt ###

    stylesheet in xsl with 2.0 version,
      http://www.w3.org/1999/xhtml xhtml in xmlns,
      http://www.w3.org/1999/XSL/Transform xsl in xmlns:
      template in xsl w/ * match:
        "[" value-of in xsl w/ . select. "]"!

  or

    stylesheet'xsl 2.0 version,
      http://www.w3.org/1999/xhtml xhtml'xmlns,
      http://www.w3.org/1999/XSL/Transform xsl'xmlns:
      template'xsl * match:
        "[" value-of'xsl . select. "]"!

---

## XML Specifics ##

---

## CDATA ##

### For this XML ###

    <![CDATA[<greeting>Hello, world!</greeting>]]> 

### The Struxt ###

    ["""<greeting>Hello, world!</greeting>""".

  or

    [greeting: "Hello, world!"..

---

## Comments ##

### For this XML ###

    <!-- declarations for <head> & <body> -->

### The Struxt ###

Multi-line comment

    #"""declarations for <head> & <body>"""

  or, alternative multi-line comment

    /* declarations for <head> & <body> */

Single-line comment

    // declarations for <head> & <body>

---

## Processing Instructions ##

### For this XML ###

    <?xml version="1.1"?>
    <greeting>Hello, world!</greeting>

### The Struxt ###

    #?xml "1.1" version.
    greeting: "Hello, world!".

---

## Document Type Declaration (or a catchall) ##

Anything not directly supported above can be included verbatim with #|"""..."""

### For this XML ###

    <?xml version="1.1" encoding="UTF-8" ?>
    <!DOCTYPE greeting [
    <!ELEMENT greeting (#PCDATA)>
    ]>
    <greeting>Hello, world!</greeting>

### The Struxt ###

    #?xml with "1.1" version, and "UTF-8" encoding.
    #|"""<!DOCTYPE greeting [
    <!ELEMENT greeting (#PCDATA)>
    ]>""".
    greeting: "Hello, world!".

text-plain! DRAFT

- A meta-language.
- Compliant with Struxt.
- Uses Markdown for documentation.

The goal is to be able to transform text-plain into many actual language sources. Since it's Struxt, it can be converted into XML. XML is "easily" transformed using XSLT. This provides a single source for multiple languages. That is, a single text-plain document can be transformed into multiple compilable or interpreted programming language sources.

`textc` will transform the document into a some language-specific compilation unit.
`textdoc` will transform the document into HTML documentation.

=== Example ===

The following is a text-plain document/algorithm for quick sort:

---

### QuickSort ###

    define: sort array of integers:
      define: sort left integer, right integer:
        variable pivot: array at ((left + right) / 2);
        variable i: left;
        variable j: right;
        loop inclusively from i to j:
          loop from (array at i) to pivot: increment i by 1;
          loop from (array at j) to pivot: decrement j by 1;
          if (i <= j):
            swap index i and j.
            increment i by 1.
            decrement j by 1.
        . .
        if (l < j): sort from left to j;
        if (j < r): sort from i to right;
      .
      sort from 0 to (array length - 1).
    !


---

Special syntax considerations which must be processed prior to Struxt processing:

- Infix notation allowed within "()".
  - Mathematical expressions (within "()") are automatically MathML.
  - operator characters, <, >, +, ..., are converted to names.
    - each operator character and ")" imply ".".
  - WRT Struxt, spaces aren't relevant. That is, everything within () is considered a single value.
    - Though they are processed as a Struxt.

---

## Transformations ##

### A complicated statement ###

    loop from i to j: increment i by 1;

### Produces this XML ###

    <t:loop from="p:i" to="p:j"><t:increment id="p:i" by="1"/></t:loop>

### A Loop statement ###

    loop from (array at i) to pivot: increment i by 1;

### Produces this XML ###

    <t:loop from="attributes:from" to="p:pivot"
      xmlns:attributes="http://text-plain.org/xmlns/2010/05/01/attributes">
      <attributes:from><p:array t:at="p:i"/></attributes:from>
    </t:loop>

### The above QuickSort produces this XML ###

    <?xml version="1.0" encoding="UTF-8"?>
    <t:text-plain xmlns:t="http://text-plain.org/xmlns/2010/05/01"
      xmlns:p="http://text-plain.org/xmlns/2010/05/01/program-code">
      <t:define>
        <p:sort array="t:integers">
          <t:define>
            <p:sort left="t:integer" right="t:integer">
              <t:variable t:id="p:pivot">
                <p:array t:id="attributes:id"
                  xmlns:attributes="http://text-plain.org/xmlns/2010/05/01/attributes">
                  <attributes:id>
                    <m:math xmlns:m="http://www.w3.org/1998/Math/MathML">
                      <m:apply>
                        <m:divide />
                        <m:apply>
                          <m:plus />
                          <m:ci>p:left</m:ci>
                          <m:ci>p:right</m:ci>
                        </m:apply>
                        <m:cn>2</m:cn>
                      </m:apply>
                    </m:math>
                  </attributes:id>
                </p:array>
              </t:variable>
              <t:variable t:id="p:left">
                <p:i />
              </t:variable>
              <t:variable t:id="p:right">
                <p:j />
              </t:variable>
              <t:loop from="p:i" id="inclusively" to="p:j">
                <t:loop from="attributes:from" to="p:pivot"
                  xmlns:attributes="http://text-plain.org/xmlns/2010/05/01/attributes">
                  <attributes:from>
                    <p:array t:at="p:i" />
                  </attributes:from>
                  <t:increment by="1" id="p:i" />
                </t:loop>
                <t:loop from="attributes:from" to="p:pivot"
                  xmlns:attributes="http://text-plain.org/xmlns/2010/05/01/attributes">
                  <attributes:from>
                    <p:array t:at="p:j" />
                  </attributes:from>
                  <t:increment by="1" id="p:j" />
                </t:loop>
                <t:if xmlns:attributes="http://text-plain.org/xmlns/2010/05/01/attributes">
                  <attributes:id>
                    <condition xmlns="http://text-plain.org/xmlns/2010/05/01/conditional">
                      <p:i />
                      <le />
                      <p:j />
                    </condition>
                  </attributes:id>
                  <p:swap and="j" index="i" />
                  <t:increment by="1" id="p:i" />
                  <t:increment by="1" id="p:j" />
                </t:if>
              </t:loop>
              <t:if id="attributes:id"
                xmlns:attributes="http://text-plain.org/xmlns/2010/05/01/attributes">
                <attributes:id>
                  <condition xmlns="http://text-plain.org/xmlns/2010/05/01/conditional">
                    <p:l />
                    <lt />
                    <p:j />
                  </condition>
                </attributes:id>
                <p:sort t:from="p:left" t:to="p:j" />
              </t:if>
              <t:if id="attributes:id"
                xmlns:attributes="http://text-plain.org/xmlns/2010/05/01/attributes">
                <attributes:id>
                  <condition xmlns="http://text-plain.org/xmlns/2010/05/01/conditional">
                    <p:j />
                    <lt />
                    <p:r />
                  </condition>
                </attributes:id>
                <p:sort t:from="p:i" t:to="p:right" />
              </t:if>
            </p:sort>
          </t:define>
          <p:sort from="0" to="attributes:to"
            xmlns:attributes="http://text-plain.org/xmlns/2010/05/01/attributes">
            <attributes:to>
              <m:math xmlns:m="http://www.w3.org/1998/Math/MathML">
                <m:apply>
                  <m:subtract />
                  <p:array t:id="p:length" />
                  <m:cn>1</m:cn>
                </m:apply>
              </m:math>
            </attributes:to>
          </p:sort>
        </p:sort>
      </t:define>
    </t:text-plain>







