# Struxt - Structured Text #

Structured ... like XML.

Readable   ... like plain text.

## For example ##

### Here is a [Struxt document](/nicerobot/text-plain/tree/master/language/src/test/resources/output/note.stxt) ###

    note: to: "Tove". from: "Jani". heading: "Reminder". body: "Don't forget me this weekend!"!

### For [this XML](/nicerobot/text-plain/tree/master/language/src/test/resources/note.xml) ###

    <note>
      <to>Tove</to>
      <from>Jani</from>
      <heading>Reminder</heading>
      <body>Don't forget me this weekend!</body>
    </note>

### Struxt formatted like the XML ###

    note:
      to: "Tove".
      from: "Jani".
      heading: "Reminder".
      body: "Don't forget me this weekend!".
    .

---

## Compared to Markdown ##

    A First Level Header
    ====================

    A Second Level Header
    ---------------------

    Now is the time for all good men to come to
    the aid of their country. This is just a
    regular paragraph.

    The quick brown fox jumped over the lazy
    dog's back.

    ### Header 3

    > This is a blockquote.
    > 
    > This is the second paragraph in the blockquote.
    >
    > ## This is an H2 in a blockquote

### Here is the struxt for the Markdown above ###

    h1: "A First Level Header".
    h2: "A Second Level Header".

    Now is the time for all good men to come to
    the aid of their country. This is just a
    regular paragraph.

    The quick brown fox jumped over the lazy
    dog's back.

    h3: "Header 3".

    blockquote: """
    This is a blockquote.

    This is the second paragraph in the blockquote.
    """
    h2: "This is an H2 in a blockquote".
    .

### To add links ###

    a: href "http://...".


---

## The Goal ##

The goal is to provide an easily readable representation of an XML document and, like Markdown,
provide an easy, more natural means of manually creating structured documents. In other words, do away
with all the `< / >` marks and replace them with human-friendly spaces and punctuation.

## More Examples ##

---

### For [this XML](/nicerobot/text-plain/tree/master/language/src/test/resources/painting.xml) ###

    <painting>
      <img src="madonna.jpg" alt='Foligno Madonna, by Raphael'/>
      <caption>This is Raphael's "Foligno" Madonna, painted in 
      <date>1511</date>-<date>1512</date>.
      </caption>
    </painting>

### [The Struxt](/nicerobot/text-plain/tree/master/language/src/test/resources/output/painting.stxt) ###

    painting:
      img "madonna.jpg" src, "Foligno Madonna, by Raphael" alt.
      caption:
        """This is Raphael's "Foligno" Madonna, painted in """
        date: "1511". "-"
        date: "1512". "."
    !

---

### For [this XML](/nicerobot/text-plain/tree/master/language/src/test/resources/ical.xml) ###

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

### [The Struxt](/nicerobot/text-plain/tree/master/language/src/test/resources/output/ical.stxt) ###

    #?xml "1.1" version.
    iCalendar "urn:ietf:params:xml:ns:xcal" xmlns:
      vcalendar:
        version: "2.0".
        prodid: "-//hacksw/handcal//NONSGML v1.0//EN".
        vevent:
          dtstart: "19970714T170000Z".
          dtend: "19970715T035959Z".
          summary "en_US" lang'xml: "Bastille Day Party".
    . . .

---

## Syntax ##
(draft)

- `:` indicates the opening of element, children follow. This is optional if there are no children.
- `.` or `,` closes an element.
- `;` closes two elements.
- `,` indicates the continuation of a list of attributes.
- `!` closes all open elements. Essentially ending the document. The same as using `.` for each open element.
- `'` followed by namespace name. For the default namespace, ' must be used. e.g. `root'.` is `<:root>`
- text
  - All `` \ `` are escaped as `` \\ ``.
  - `"` is single-line text.
    - All `"` are escaped as `` \" ``.
    - Carriage returns are escaped as `` \n ``.
  - `"""` is multi-line text.
    - All `"""` are escaped as `` \""" ``.
    - Carriage returns are not escaped.
  - Any single-line `"text"` can be represented as multi-line `"""text"""` and vice-versa, providing the appropriate escaping.

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
  - ` and ` after the last `,` of a list.
  - ` with ` or ` w/ ` before attribute lists.
  - ` of ` or ` as ` between attribute name and value.
  - ` contains` or ` includes` before `:`.
  - ` in ` prior to namespace prefix instead of `'`.
  
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
        "[" value-of in xsl w/ . select. "]"
    . .

  or

    stylesheet'xsl 2.0 version,
      http://www.w3.org/1999/xhtml xhtml'xmlns,
      http://www.w3.org/1999/XSL/Transform xsl'xmlns:
      template'xsl * match:
        "[" value-of'xsl . select. "]"
    . .

---

## XML Specifics ##

---

## CDATA ##

### For this XML ###

    <![CDATA[<greeting>Hello, world!</greeting>]]> 

### The Struxt ###

    ["""<greeting>Hello, world!</greeting>""".

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

    <!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN"
     "http://www.apple.com/DTDs/PropertyList-1.0.dtd">

### The Struxt ###

    #!DOCTYPE plist PUBLIC 
    #!"-//Apple Computer//DTD PLIST 1.0//EN"
    #!"http://www.apple.com/DTDs/PropertyList-1.0.dtd"
    
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
