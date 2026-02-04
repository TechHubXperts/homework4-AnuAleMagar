#!/bin/bash
set -e

echo "Setting up E2E test environment..."

# Clone test files repo
echo "Cloning test files..."
git clone https://github.com/TechHubXperts/simple-note-test-file.git temp-test-files

# Copy playwright directory
echo "Copying Playwright tests..."
mkdir -p playwright
cp -r temp-test-files/playwright/* playwright/

# Clean up
rm -rf temp-test-files

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Install Playwright dependencies and browsers
echo "Installing Playwright..."
cd playwright
npm install
npx playwright install --with-deps
cd ..

echo "Setup complete!"

