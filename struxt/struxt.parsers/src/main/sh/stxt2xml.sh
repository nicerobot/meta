#!/bin/sh
SELFD=$(cd $(dirname $0); cd -P $(dirname $(readlink $0)); pwd)
SELF=$(basename $0 .sh)
java -cp ${CLASSPATH}:${SELFD}/../../../target/classes/ org.nicerobot.struxt.parser.StruxtJavaParser ${1}
echo
exit 0
