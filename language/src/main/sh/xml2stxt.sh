#!/bin/sh
# Struxt Generator
# 
# [The BSD License]
# Copyright (c) 2011 Nice Robot Corporation
# All rights reserved.
# Redistribution and use in source and binary forms, with or without modification, are permitted provided that the
# following conditions are met:
# 
# Redistributions of source code must retain the above copyright notice, this list of conditions and the following
# disclaimer.
# Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following
# disclaimer in the documentation and/or other materials provided with the distribution.
# Neither the name of the author nor the names of its contributors may be used to endorse or promote products derived from
# this software without specific prior written permission.
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
# INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
# DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
# SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
# LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
# CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
# SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
# 
SELFD=$(cd -P $(dirname $(readlink ${0} || echo ${0})); pwd)
SELFU=$(basename $0)
SELF=${SELFU%.*}
NOW=$(date -u +%Y%m%dt%H%M%S)

PAYLOAD=$(awk '/^__ARCHIVE__/ {print NR + 1; exit 0; }' ${0})
PATHD=${TMPDIR:=${TMP:=$([ -w /tmp ] && echo '/tmp/' || echo './')}}${SELF}.${RANDOM}
mkdir -p ${PATHD} 2>/dev/null && (
  cd ${PATHD}
  { tail -n+${PAYLOAD} ${SELFD}/${SELFU} | tar jx; } >/dev/null 2>&1
)
trap '{ unalias rm; unset rm; \rm -rf ${PATHD}; } >/dev/null 2>&1' 0
java -jar ${PATHD}/saxon9he.jar ${1} ${PATHD}/text-plain.xslt || exit $?
echo
exit 0

# $Id: $

__NOTICE__
# 
# Saxon is subject to the Mozilla Public License
# Version 1.1 (the "License"); you may not use this file except in
# compliance with the License. You may obtain a copy of the License at
# http://www.mozilla.org/MPL/
# 
# Software distributed under the License is distributed on an "AS IS"
# basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
# License for the specific language governing rights and limitations
# under the License.
# 
# The Original Code is http://saxon.sourceforge.net/#F9.3HE
# 
__ARCHIVE__
