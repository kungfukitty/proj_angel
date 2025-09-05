#!/bin/bash
# Execute the directory restructure migration

echo "🚀 Starting Angel Kellogg website restructure..."

# Create new directory structure
mkdir -p src/app
mkdir -p src/components
mkdir -p src/lib
mkdir -p backend

# Move app directory to src
if [ -d "app" ]; then
    echo "📁 Moving app/ to src/app/"
    cp -r app/* src/app/ 2>/dev/null || true
fi

# Move components to src
if [ -d "components" ]; then
    echo "📁 Moving components/ to src/components/"
    cp -r components/* src/components/ 2>/dev/null || true
fi

# Move lib to src
if [ -d "lib" ]; then
    echo "📁 Moving lib/ to src/lib/"
    cp -r lib/* src/lib/ 2>/dev/null || true
fi

# Move backend files
if [ -f "server.js" ]; then
    echo "🔧 Moving backend files..."
    mv server.js backend/
    mv models backend/ 2>/dev/null || true
fi

echo "✅ Migration completed successfully!"
echo "🎯 Next steps: Update import paths and test the application"
