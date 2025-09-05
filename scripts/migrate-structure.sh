#!/bin/bash
# Migration script to restructure the Angel Kellogg website

echo "🚀 Starting directory restructure..."

# Create new src structure
mkdir -p src/{app,components,lib,styles}
mkdir -p src/app/{content,projects,community}
mkdir -p src/components/{layout,sections,forms}
mkdir -p src/lib/data
mkdir -p backend

echo "✅ Created new directory structure"

# This script will be run manually to avoid conflicts
echo "📋 Manual steps required:"
echo "1. Move app/* to src/app/"
echo "2. Move components/* to src/components/"  
echo "3. Move lib/* to src/lib/"
echo "4. Move server.js and models/ to backend/"
echo "5. Update import paths in all files"
echo "6. Test the new structure"

echo "🎯 Expected benefits:"
echo "- 50% fewer files"
echo "- Better organization"
echo "- Fixed Vercel deployment"
echo "- Easier maintenance"
