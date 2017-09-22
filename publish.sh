#!/bin/sh
target=/home/allay/createFile/src/main/webapp/static/saul 
rm -rf $target
cp -rf dist $target
#sed -i '' -e '/\/\/# sourceMappingURL.*/d' $target/index.js
echo success
