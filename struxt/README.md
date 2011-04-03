# Struxt - Structured Text #

Structured ... like XML.

Readable   ... like plain text.

## The Goal ##

The goal is to facilitate creating Domain Specific Languages (DSLs) that readily transform into XML,
to provide an easy, more natural, less verbose means of manually creating structured documents.
In other words, do away with all the `< / >` marks and replace them with eye-friendly spaces and punctuation.
This is especially apparent when namespaces are involved in the markup.

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

### Alternately, {} can replace :. ###

    note {
      to{"Tove"}
      from{"Jani"}
      heading: "Reminder".
      body: "Don't forget me this weekend!".
    }

### HTML Example ###

    html{
      head{title:"My Struxt".}
      body{
        a href "/nicerobot/text-plain/tree/master/struxt":"Struxt".
      }
    }

### HTML Output ###

    <html>
      <head><title>My Struxt</title></head>
      <body>
        <a href="/nicerobot/text-plain/tree/master/struxt">Struxt</a>
      </body>
    </html>

## More Examples ##

---

### For [this XML](/nicerobot/text-plain/tree/master/language/src/test/resources/painting.xml) ###

    <painting>
      <img src="madonna.jpg" alt="Foligno Madonna, by Raphael"></img>
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
        date: "1512". "."..

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

    ?xml "1.1" version.
    iCalendar "urn:ietf:params:xml:ns:xcal" xmlns{
      vcalendar{
        version: "2.0".
        prodid: "-//hacksw/handcal//NONSGML v1.0//EN".
        vevent{
          dtstart: "19970714T170000Z".
          dtend: "19970715T035959Z".
          summary "en_US" lang/xml: "Bastille Day Party".
        }
      }
    }

---

## Semantics ##

- Attribute:
  - Specified "name value" but if name isn't a valid attribute name, "value name" will be used/attempted.
    - This can be force by always quoting the value. name "value" or "value" name.
  - Numeric values, including floats, can omit surrounding quotes.
  
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

    stylesheet/xsl 2.0 version,
      "http://www.w3.org/1999/xhtml" xhtml/xmlns,
      "http://www.w3.org/1999/XSL/Transform" xsl/xmlns
    {
      template/xsl match "*" {
        "[" value-of/xsl select ".". "]"
      }
    }

---

## XML Specifics ##

---

## CDATA ##

### For this XML ###

    <![CDATA[<greeting>Hello, world!</greeting>]]> 

### The Struxt ###

    [["<greeting>Hello, world!</greeting>"]].

---

## Comments ##

### For this XML ###

    <!-- declarations for <head> & <body> -->

### The Struxt ###

Multi-line comment

    /* declarations for <head> & <body> */

Single-line comment

    // declarations for <head> & <body>

---

## Processing Instructions ##

### For this XML ###

    <?xml version="1.1"?>
    <greeting>Hello, world!</greeting>

### The Struxt ###

    ?xml "1.1" version.
    greeting: "Hello, world!".

---

## Document Type Declaration (or a catchall) ##

Anything not directly supported above can be included verbatim with #|"""..."""

### For this XML ###

    <!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN"
     "http://www.apple.com/DTDs/PropertyList-1.0.dtd">

### The Struxt ###

    !!!
    plist PUBLIC 
    "-//Apple Computer//DTD PLIST 1.0//EN"
    "http://www.apple.com/DTDs/PropertyList-1.0.dtd"
    !!!
    
### For this XML ###

    <?xml version="1.1" encoding="UTF-8" ?>
    <!DOCTYPE greeting [
    <!ELEMENT greeting (#PCDATA)>
    ]>
    <greeting>Hello, world!</greeting>

### The Struxt ###

    ?xml with "1.1" version, and "UTF-8" encoding.
    !!!
    greeting [
    <!ELEMENT greeting (#PCDATA)>
    ]>
    !!!
    greeting: "Hello, world!".
