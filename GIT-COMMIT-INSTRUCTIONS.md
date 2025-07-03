# Git Commit Instructions

Follow these instructions to commit your changes to Git:

## Step 1: Open Terminal
Open Terminal on your Mac by going to Applications > Utilities > Terminal

## Step 2: Navigate to your repository
Copy and paste this command:
```
cd /Users/dinhviethoang/Users/vinhdinh/workspace/repos/personal/thuyvinhdinh175.github.io
```

## Step 3: Check current status
Run this command to see what files have been changed:
```
git status
```

## Step 4: Add the modified files
Add all files to the staging area:
```
git add index.html
git add .gitignore
git add README.md
git add assets/css/styles.css
git add assets/docs/index.pdf
git add assets/images/Portfolio.png
git add assets/images/vinh-emoji.png
git add assets/css/.gitkeep
git add assets/docs/.gitkeep
git add assets/images/.gitkeep
```
Or you can add all changes at once:
```
git add .
```

## Step 5: Create a commit
Make a commit with a descriptive message:
```
git commit -m "Reorganize website structure for better maintainability

- Created organized directory structure (assets/css, assets/images, assets/docs)
- Moved files to appropriate directories
- Updated file references in HTML and CSS
- Added .gitignore for unnecessary files
- Updated README with project structure and deployment instructions"
```

## Step 6: Push changes to GitHub
Push your changes to the remote repository:
```
git push origin main
```

## Done!
Your changes should now be committed to Git and pushed to GitHub. If GitHub Pages is enabled for your repository, your website will be automatically updated.
