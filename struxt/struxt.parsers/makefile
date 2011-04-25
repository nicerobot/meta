all: archives | target

archives: target/stxt2xml target/xml2stxt target/struxt.jar target/saxon9he.jar target/xml2stxt.sh | target

target/struxt.jar:
	@mvn assembly:assembly

target/saxon9he.jar:
	@cd target; ln -s ${JAVA_LIB}/saxon9he.jar saxon9he.jar

target/xml2stxt.sh:
	@cd target; ln -s ../../../language/src/main/sh/xml2stxt.sh .

target/text-plain.xslt:
	@cd target; ln -s ../../../language/src/main/xslt/text-plain.xslt .

#
#
target/stxt2xml: src/main/sh/stxt2xml.sh target/struxt.jar
	@( cat $<; tar hcj -C target struxt.jar ) > $@
	@chmod +x $@

target/xml2stxt: target/xml2stxt.sh target/saxon9he.jar target/text-plain.xslt
	@( cat $<; tar hcj -C target saxon9he.jar text-plain.xslt ) > $@
	@chmod +x $@

#
#
target:
	@mvn assembly:assembly

clean:
	@cd target; rm -f stxt2xml xml2stxt

# $Id: $
