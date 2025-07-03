#!/bin/bash

# Navigate to the repository directory
cd "$(dirname "$0")"

# Display current status
echo "===== Current Git Status ====="
git status

# Add all files to staging
echo -e "\n===== Adding files to Git ====="
git add .
echo "All files added to staging."

# Create commit
echo -e "\n===== Creating commit ====="
git commit -m "Reorganize website structure for better maintainability

- Created organized directory structure (assets/css, assets/images, assets/docs)
- Moved files to appropriate directories
- Updated file references in HTML and CSS
- Added .gitignore for unnecessary files
- Updated README with project structure and deployment instructions"

# Push to GitHub
echo -e "\n===== Pushing to GitHub ====="
git push origin main

echo -e "\n===== All done! ====="
echo "Your changes have been committed and pushed to GitHub."
echo "If GitHub Pages is enabled, your website will be automatically updated."

# Keep terminal open
echo -e "\nPress Enter to close this window..."
read
