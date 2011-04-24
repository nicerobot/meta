#!/bin/sh
SELFD=$(cd -P $(dirname $0); pwd)
SELF=$(basename $0 .sh)
java -jar ${JAVA_LIB}/saxon9he.jar ${1} ${SELFD}/../xslt/text-plain.xslt
echo
exit 0
