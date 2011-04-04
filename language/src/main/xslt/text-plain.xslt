<?xml version="1.0" encoding="UTF-8" ?>
<!--
  text-plain.xslt
  
  Created: 2010-05-18-0800
  Modified: 2010-05-18-0800
  
  This transformation converts any XML document into text-plain.
-->
<xsl:stylesheet version="2.0"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:struxtml="http://www.struxtml.org/xmlns/version/2010/05"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output encoding="UTF-8" indent="no" media-type="text/plain" method="text"
    omit-xml-declaration="yes" />
  <xsl:strip-space elements="*"/>

  <xsl:variable name="struxtml" select="'http://www.struxtml.org/xmlns/version/2010/05'" />
  
  <xsl:variable name="CR"><xsl:text><![CDATA[
]]></xsl:text></xsl:variable>
  <xsl:variable name="START_ELEM" select="':'" />
  <xsl:variable name="END_ELEM" select="'.'" />
  <xsl:variable name="VALUE_DELIM" select="','" />
  <xsl:variable name="QUOTE_ATTRIB" select="'&quot;'" />
  <xsl:variable name="STRING_DELIM" select="'&quot;'" />
  <xsl:variable name="START_TEXT" select="'&quot;'" />
  <xsl:variable name="END_TEXT" select="'&quot;'" />
  <xsl:variable name="START_COMMENT" select="'/*'" />
  <xsl:variable name="END_COMMENT" select="'*/'" />

  <xsl:template match="comment()">
    <xsl:value-of select="$START_COMMENT" />
    <xsl:value-of select="." />
    <xsl:value-of select="$END_COMMENT" />
    <xsl:value-of select="$CR" />
  </xsl:template>

  <xsl:template match="*">

    <xsl:call-template name="indent">
      <xsl:with-param name="value" select="." />
    </xsl:call-template>

    <xsl:call-template name="name">
      <xsl:with-param name="local-name" select="local-name()" />
      <xsl:with-param name="name" select="name()" />
    </xsl:call-template>

    <!-- attribute object -->
    <xsl:if test="count(@*)>0">
      <xsl:for-each select="@*">
        <xsl:if test="position()>1"><xsl:value-of select="$VALUE_DELIM" /></xsl:if>
        <xsl:apply-templates select="."/>
      </xsl:for-each>
    </xsl:if>

    <xsl:choose>
      <xsl:when test="count(*|text())>0">
        <xsl:value-of select="$START_ELEM" />
        
        <!-- child elements and text-nodes -->
        <xsl:for-each select="*|text()">
          <xsl:apply-templates select="."/>
        </xsl:for-each>
        
      </xsl:when>
    </xsl:choose>

    <xsl:value-of select="$END_ELEM" />
  </xsl:template>

  <!--
    text-nodes
  -->
  <xsl:template match="text()">
    <xsl:call-template name="quote">
      <xsl:with-param name="value" select="." />
    </xsl:call-template>
  </xsl:template>
  
  <!--
    attributes
  -->
  <xsl:template match="@*">
    <xsl:call-template name="quote">
      <xsl:with-param name="value" select="." />
    </xsl:call-template>
    <xsl:text><![CDATA[ ]]></xsl:text>
    <xsl:call-template name="name">
      <xsl:with-param name="local-name" select="local-name()" />
      <xsl:with-param name="name" select="name()" />
    </xsl:call-template>
  </xsl:template>

  <xsl:template name="quote">
    <xsl:param name="value" />    

    <xsl:text> </xsl:text>
    <xsl:choose>
      <xsl:when test="contains($value,$QUOTE_ATTRIB)">
        <xsl:call-template name="indent">
          <xsl:with-param name="value" select="." />
        </xsl:call-template>
        <xsl:value-of select="$QUOTE_ATTRIB" />
        <xsl:value-of select="$QUOTE_ATTRIB" />
        <xsl:value-of select="$QUOTE_ATTRIB" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$QUOTE_ATTRIB" />
      </xsl:otherwise>
    </xsl:choose>
    <xsl:value-of select="$value" />
    <xsl:choose>
      <xsl:when test="contains($value,$QUOTE_ATTRIB)">
        <xsl:value-of select="$QUOTE_ATTRIB" />
        <xsl:value-of select="$QUOTE_ATTRIB" />
        <xsl:value-of select="$QUOTE_ATTRIB" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$QUOTE_ATTRIB" />
      </xsl:otherwise>
    </xsl:choose>
    
  </xsl:template>

  <xsl:template name="indent">
    <xsl:param name="value" />    
    
    <xsl:if test="count(./ancestor::node())>1">
      <xsl:for-each select="./ancestor::node()">
        <xsl:choose>
          <xsl:when test="position()=1">
            <xsl:value-of select="$CR" />
          </xsl:when>      
          <xsl:when test="position()>1"><xsl:text><![CDATA[  ]]></xsl:text></xsl:when>      
        </xsl:choose>
      </xsl:for-each>
    </xsl:if>
  </xsl:template>

  <xsl:template name="name">
    <xsl:param name="local-name" />
    <xsl:param name="name" />
    <xsl:value-of select="$local-name"/>
    <xsl:if test="$local-name!=$name">
      <xsl:text>/</xsl:text>
      <xsl:value-of select="substring-before($name, ':')"/>
    </xsl:if>
  </xsl:template>
  
</xsl:stylesheet>
