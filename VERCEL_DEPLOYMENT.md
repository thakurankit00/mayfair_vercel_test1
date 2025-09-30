# Vercel Deployment Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Add GitHub Secrets

Go to: **GitHub Repository → Settings → Secrets and variables → Actions**

Add these 3 secrets:

```
VERCEL_TOKEN          = i7adB6xz5puvC2Yv8SP7nX9I
VERCEL_ORG_ID         = team_G0MxrgB1Ad38UOUKlLJUFPot
VERCEL_PROJECT_ID     = prj_j5sAccdlktFM81JaBqhspn5s3HFq
```

### Step 2: Set Vercel Environment Variables

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

Add these required variables:

```
DATABASE_URL          = Your PostgreSQL connection string
SUPABASE_URL          = Your Supabase project URL
SUPABASE_ANON_KEY     = Your Supabase anonymous key
JWT_SECRET            = Strong random string for JWT tokens
```

Optional variables:
```
CORS_ORIGIN           = Your frontend URL
CLOUDINARY_CLOUD_NAME = Your Cloudinary cloud name
CLOUDINARY_API_KEY    = Your Cloudinary API key
CLOUDINARY_API_SECRET = Your Cloudinary API secret
```

### Step 3: Deploy

1. Go to **GitHub Actions** tab
2. Select **"Deploy to Vercel (Simple)"** or **"Deploy to Vercel (Prebuilt)"**
3. Click **"Run workflow"**
4. Choose:
   - **Branch:** The branch you want to deploy (e.g., `main`, `develop`)
   - **Environment:** `preview` or `production`
5. Click **"Run workflow"**
6. Wait for deployment to complete
7. Get your deployment URL from the workflow summary

---

## 📋 Two Deployment Options

### Option 1: Simple Deployment (Recommended for Quick Deploys)

**Best for:** Feature branches, quick testing, preview deployments

**How it works:** Vercel handles the build process

**Pros:**
- ✅ Faster workflow execution
- ✅ Less GitHub Actions minutes used
- ✅ Simpler process

**When to use:**
- Testing feature branches
- Quick preview deployments
- Rapid iteration

---

### Option 2: Prebuilt Deployment (Recommended for Production)

**Best for:** Production deployments, when you need tests/linting

**How it works:** GitHub Actions builds the app, then deploys to Vercel

**Pros:**
- ✅ Full control over build
- ✅ Runs linting before deployment
- ✅ Deterministic builds
- ✅ Better for debugging

**When to use:**
- Production deployments
- When you need quality checks
- When you need consistent builds

---

## 🔄 Typical Workflow

### For Feature Development:
1. Create feature branch: `git checkout -b feature/my-feature`
2. Make your changes and push to GitHub
3. Deploy using **Simple** workflow to `preview` environment
4. Test the preview deployment
5. Create pull request
6. After review, merge to `main`
7. Deploy `main` using **Prebuilt** workflow to `production`

### For Production:
1. Ensure `main` branch is stable
2. Go to GitHub Actions
3. Select **"Deploy to Vercel (Prebuilt)"**
4. Choose branch: `main`
5. Choose environment: `production`
6. Monitor deployment logs
7. Verify production deployment

---

## 🐛 Troubleshooting

### Deployment Fails
1. Check GitHub Actions logs (Actions tab → Click on failed workflow)
2. Verify all GitHub secrets are set correctly
3. Check Vercel dashboard for errors
4. Ensure environment variables are set in Vercel

### Build Errors
1. Test locally first: `npm run dev`
2. Check for linting errors: `npm run lint --prefix backend`
3. Ensure `package-lock.json` is committed
4. Verify Node version (requires Node 18+)

### Deployment URL Not Working
1. Check Vercel deployment logs in Vercel dashboard
2. Verify environment variables are correct
3. Check database connection (DATABASE_URL)
4. Verify CORS settings

---

## 📁 Essential Files

These files are required for Vercel deployment:

- ✅ `vercel.json` - Vercel configuration
- ✅ `backend/index.js` - Vercel entry point
- ✅ `frontend/build-production.js` - ESLint-safe build script
- ✅ `frontend/.env.production` - Production environment config
- ✅ `.vercelignore` - Files to exclude from deployment
- ✅ `package.json` - Root package with scripts
- ✅ `backend/package.json` - Backend package with postinstall script
- ✅ `frontend/package.json` - Frontend package with build:production script
- ✅ `.github/workflows/deploy-vercel-simple.yml` - Simple deployment workflow
- ✅ `.github/workflows/deploy-vercel-prebuilt.yml` - Prebuilt deployment workflow

### ⚠️ Important Note about .vercelignore

The `.vercelignore` file should **NOT** exclude:
- ❌ `frontend/src` - Source files needed for build
- ❌ `frontend/public` - Contains index.html template
- ❌ `frontend/.env.production` - Production configuration

Vercel builds the app on their servers, so they need access to all source files.

---

## 🔒 Security Notes

1. **Never commit secrets** to the repository
2. **Rotate tokens regularly** (set expiration in Vercel)
3. **Use environment-specific secrets** (production vs preview)
4. **Review deployment logs** for sensitive information

---

## 💡 Tips

1. ✅ Use preview deployments for testing before production
2. ✅ Test locally before deploying: `npm run dev`
3. ✅ Use Simple workflow for feature branches
4. ✅ Use Prebuilt workflow for production
5. ✅ Monitor GitHub Actions usage to optimize workflows

---

## 📚 More Information

For detailed workflow documentation, see: `.github/workflows/README.md`

---

**Last Updated:** 2025-09-30

