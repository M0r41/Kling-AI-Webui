#!/bin/bash

export http_proxy="http://127.0.0.1:7890"
export https_proxy="http://127.0.0.1:7890"

cd ../github/kling-ai-webui-open/
echo "Into to github project folder"
find . -not -name .git -not -path '*/.git/*' -delete
rsync -av --exclude='node_modules' --exclude='.next' --exclude='.vscode' --exclude='.git' ../../klingai.co/ ./
echo "Complete to copy code to github."