# `text-plain` : The Language #
(draft)

- A meta-language.
- Compliant with Struxt.
- Uses Markdown for documentation.

The goal is to be able to transform text-plain into many actual language sources. Since it's Struxt, it can be converted into XML. XML is "easily" transformed using XSLT. This provides a single source for multiple languages. That is, a single text-plain document can be transformed into multiple compilable or interpreted programming language sources.

Essentially, a formal pseudo-code that, as the draft progresses, will attempt to align with [Structured English](http://en.wikipedia.org/wiki/Structured_English).

`textc` will transform the document into a some language-specific compilation unit.
`textdoc` will transform the document into HTML documentation.

## Example ##

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
  - They are essentially nested documents.
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