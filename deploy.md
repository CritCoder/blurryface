# Deployment Guide for Face Blur Tool

## Option 1: GitHub Pages (Free)

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "New site from Git"
4. Connect your GitHub repository
5. Select your repository
6. Build settings: Leave default (no build command needed)
7. Deploy!

## Option 3: Vercel (Free tier available)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Deploy!

## Option 4: Surge.sh (Free)

```bash
npm install -g surge
cd /Users/papapudge/Desktop/blurryface
surge
```

## Option 5: Firebase Hosting (Free)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## Custom Domain Setup

For any of the above platforms:

1. Purchase a domain from providers like:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Cloudflare

2. Add your domain in the hosting platform's settings:
   - GitHub Pages: Repository Settings > Pages > Custom domain
   - Netlify: Site Settings > Domain Management
   - Vercel: Project Settings > Domains
   - Firebase: Hosting > Add custom domain

3. Update your domain's DNS records to point to the hosting platform

