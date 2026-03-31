# WIZ HOMES - GitHub Deployment Guide

This guide will help you deploy your WIZ HOMES website to GitHub Pages.

## Prerequisites

1. **Node.js and npm** installed on your computer
   - Download from: https://nodejs.org/
   - Install the LTS version

2. **Git** installed on your computer
   - Download from: https://git-scm.com/

3. **GitHub account**
   - Sign up at: https://github.com/

---

## Step 1: Install Node.js and Git

### Install Node.js:
1. Go to https://nodejs.org/
2. Download the LTS version
3. Run the installer
4. **Important:** Check "Add to PATH" during installation
5. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Install Git:
1. Go to https://git-scm.com/
2. Download Git for Windows
3. Run the installer (use default settings)
4. Verify installation:
   ```bash
   git --version
   ```

---

## Step 2: Initialize Git Repository

Open a terminal in VS Code (Ctrl + `) and run:

```bash
# Initialize Git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit - WIZ HOMES website"
```

---

## Step 3: Create GitHub Repository

1. Go to https://github.com and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name:** `wizhomes`
   - **Description:** `WIZ HOMES - Premium Living Website`
   - **Visibility:** Public (recommended for free hosting)
   - **DO NOT** check "Add a README file"
5. Click **"Create repository"**

---

## Step 4: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/wizhomes.git

# Rename branch to main
git branch -M main

# Push code to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

---

## Step 5: Install gh-pages Package

Run this command in your terminal:

```bash
npm install gh-pages --save-dev
```

---

## Step 6: Update package.json

Open [`package.json`](package.json) and add these lines:

```json
{
  "name": "wiz-homes",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "homepage": "https://YOUR_USERNAME.github.io/wizhomes",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^19.2.3",
    "react-router-dom": "^7.13.0",
    "react-dom": "^19.2.3"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@vitejs/plugin-react": "^5.0.0",
    "gh-pages": "^6.1.1",
    "typescript": "~5.8.2",
    "vite": "^6.2.0"
  }
}
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

---

## Step 7: Update vite.config.ts

Open [`vite.config.ts`](vite.config.ts) and update it:

```typescript
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/wizhomes/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
```

**Note:** The `base: '/wizhomes/'` line is important for GitHub Pages!

---

## Step 8: Deploy to GitHub Pages

Run these commands:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## Step 9: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** section (left sidebar)
4. Under **"Source"**, select **"Deploy from a branch"**
5. Under **"Branch"**, select **"gh-pages"**
6. Click **"Save"**

---

## Step 10: Access Your Live Website

Your website will be live at:
```
https://YOUR_USERNAME.github.io/wizhomes
```

**It may take 5-10 minutes for the first deployment!**

---

## Automatic Deployments

After setup, every time you make changes:

```bash
# Add changes
git add .

# Commit changes
git commit -m "Update website content"

# Push to GitHub
git push

# Deploy to GitHub Pages
npm run deploy
```

---

## Troubleshooting

### Issue: "npm not recognized"
**Solution:** Restart VS Code after installing Node.js

### Issue: "git not recognized"
**Solution:** Restart VS Code after installing Git

### Issue: Build fails
**Solution:** 
```bash
npm install
npm run build
```

### Issue: 404 error on GitHub Pages
**Solution:** Make sure `base: '/wizhomes/'` is in [`vite.config.ts`](vite.config.ts)

### Issue: Images not loading
**Solution:** Make sure image paths start with `/` (e.g., `/images/image1.jpeg`)

---

## Quick Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run deploy` | Deploy to GitHub Pages |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Commit changes |
| `git push` | Push to GitHub |

---

## Your Live URLs

After deployment:
- **GitHub Pages:** `https://YOUR_USERNAME.github.io/wizhomes`
- **Local Development:** `http://localhost:3000`

---

## Need Help?

If you encounter any issues:
1. Check the troubleshooting section above
2. Make sure Node.js and Git are installed
3. Verify you're in the correct directory
4. Check that all commands are run in the terminal

Good luck with your deployment! 🚀
