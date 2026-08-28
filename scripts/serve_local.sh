#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
export PATH="/usr/local/opt/ruby@3.2/bin:$PATH"
export RUBYOPT="-r${ROOT_DIR}/scripts/jekyll_taint_patch.rb"

cd "$ROOT_DIR"
bundle exec jekyll serve --unpublished --host 127.0.0.1 --port 4000
