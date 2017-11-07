#!/bin/sh
target=/home/allay/badmin/src/main/webapp/static/easy-jsx
rm -rf $target
cp -rf dist $target
#sed -i '' -e '/\/\/# sourceMappingURL.*/d' $target/index.js
echo success
