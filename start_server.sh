#!/bin/bash
(
  cd dist || exit
  python3 -m http.server 8080
)