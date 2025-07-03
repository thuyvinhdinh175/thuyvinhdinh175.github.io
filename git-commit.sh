#!/bin/bash

# Navigate to the repository
cd /Users/dinhviethoang/Users/vinhdinh/workspace/repos/personal/thuyvinhdinh175.github.io

# Add all files to the staging area
git add .

# Create a commit with a descriptive message
git commit -m "Reorganize website structure for better maintainability

- Created organized directory structure (assets/css, assets/images, assets/docs)
- Moved files to appropriate directories
- Updated file references in HTML and CSS
- Added .gitignore for unnecessary files
- Updated README with project structure and deployment instructions"

# Display status after commit
git status

# Show the commit log
git log -1
