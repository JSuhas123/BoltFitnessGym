# Bolt Fitness - Deployment Guide

## 🚀 Quick Fix for EPERM Error

### Windows Users (Current Issue):
```bash
# 1. Stop all Node processes
taskkill /f /im node.exe

# 2. Clean cache manually
rmdir /s /q node_modules\.vite
rmdir /s /q dist

# 3. Clear npm cache
npm cache clean --force

# 4. Reinstall and start
npm install
npm run dev
```

### Alternative (Use the cleanup script):
```bash
# Run the cleanup script
./cleanup.bat

# Then start development
npm install
npm run dev
```

## 📦 Vercel Deployment

### Method 1: Vercel CLI (Recommended)
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Build the project
npm run build

# 3. Deploy to Vercel
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? bolt-fitness
# - Directory? ./ (current directory)
# - Override settings? No
```

### Method 2: GitHub + Vercel (Automatic)
1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Bolt Fitness"
   git branch -M main
   git remote add origin https://github.com/yourusername/bolt-fitness.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite and deploy

### Method 3: Drag & Drop (Simple)
1. **Build the project:**
   ```bash
   npm run build
   ```
2. **Deploy dist folder:**
   - Go to [vercel.com](https://vercel.com)
   - Drag the `dist` folder to Vercel dashboard

## 🔧 Project Configuration

### Environment Setup:
```bash
# Development
npm run dev          # Start development server
npm run clean:dev    # Clean cache and start dev

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Maintenance
npm run clean        # Clean cache
npm run clean:install # Clean and reinstall
```

### Admin Panel Access (Production):
- **URL:** `https://your-domain.vercel.app/admin-nutrition-data-management`
- **Password:** `boltfitness2025`
- **Features:** Download nutrition data as CSV/Excel

## 🛠️ Troubleshooting

### EPERM Error Solutions:
1. **Close VS Code** and all terminals
2. **Run cleanup.bat** script
3. **Restart VS Code**
4. **Run npm install**
5. **Start with npm run dev**

### If still having issues:
```bash
# Nuclear option - complete reset
rmdir /s /q node_modules
npm cache clean --force
npm install
npm run dev
```

### Vercel Build Issues:
- Make sure `package.json` has correct build script
- Check that all dependencies are in `dependencies` not `devDependencies` if used in production
- Verify `vercel.json` configuration

## 📱 Features Ready for Production:

✅ **Responsive Design** - Works on all devices  
✅ **3D Animations** - Three.js/React Three Fiber  
✅ **Nutrition Form** - Data collection system  
✅ **Admin Panel** - Hidden data management  
✅ **Social Media Links** - Instagram & Facebook  
✅ **Analytics** - Local storage data tracking  
✅ **Export Features** - CSV/Excel downloads  
✅ **SEO Optimized** - Meta tags and structure  

## 🔐 Security Notes:

- Admin panel is hidden (no navigation links)
- Password protected admin access
- Data stored locally (privacy-first)
- No external database required
- Robots.txt blocks admin routes

## 📊 Post-Deployment:

1. **Test all pages** on the live site
2. **Verify admin panel** access
3. **Test nutrition form** submission
4. **Check data export** functionality
5. **Validate social media** links

## 🎯 Custom Domain (Optional):

After Vercel deployment:
1. Go to Vercel dashboard
2. Select your project
3. Go to Settings > Domains
4. Add your custom domain
5. Update DNS records as instructed

---

