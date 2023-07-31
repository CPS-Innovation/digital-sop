#!/usr/bin/env bash

git ls-tree -r --name-only HEAD docs/ | while read filename; do
  if [[ "$filename" == *.md ]]
  then
    echo "$(git log -1 --format="%ad" -- $filename) $filename";
  fi
done
