#!/usr/bin/env bash

TASK=$1

case $TASK in
'build')
  mkdocs build --config-file mkdocs.yml
  tidy \
    -indent --indent-spaces 2 --indent-attributes no \
    --wrap-attributes no -wrap 0 \
    -quiet --show-errors 0 --show-warnings 0 \
    -m ./**/*.html || echo "Tidied with errors"
  ;;
'dev')
  mkdocs serve -a 0.0.0.0:8000 --config-file mkdocs.development.yml
  ;;
esac
