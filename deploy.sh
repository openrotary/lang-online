#!/usr/bin/env sh

cd dist/
git init .
git add .
git commit -m'deploy'
git push -f https://github.com/openrotary/lang-online.git master:gh-pages
cd -