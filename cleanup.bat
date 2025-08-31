@echo off
echo Cleaning Bolt Fitness project...

REM Stop any running processes
taskkill /f /im node.exe 2>nul

REM Remove problematic directories
echo Removing cache directories...
if exist "node_modules\.vite" rmdir /s /q "node_modules\.vite"
if exist "dist" rmdir /s /q "dist"
if exist ".cache" rmdir /s /q ".cache"

REM Clear npm cache
echo Clearing npm cache...
npm cache clean --force

echo Cleanup complete!
echo.
echo To start development:
echo   npm install
echo   npm run dev
echo.
echo To build for production:
echo   npm run build
echo.
pause
