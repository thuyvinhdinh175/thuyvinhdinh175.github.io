#!/bin/bash

# Navigate to the repository
cd /Users/dinhviethoang/Users/vinhdinh/workspace/repos/personal/thuyvinhdinh175.github.io

# Display current Git status
echo "=== Current Git Status ==="
git status

# List changes to be committed
echo -e "\n=== Files Changed ==="
git diff --name-status
