# 🌐 Custom Domains Setup - Mayfair Hotel

## 🎯 Domain Configuration

Your Mayfair Hotel Management System now uses **custom domains** for different environments:

| Environment | Domain | Purpose |
|-------------|--------|---------|
| **Preview** | `dev.mayfairmandi.com` | Development & testing deployments |
| **Production** | `prod.mayfairmandi.com` | Live production deployments |

## 🚀 How It Works

### Automatic Domain Routing
When you run any deployment workflow and select an environment:

#### Preview Environment
- **Workflow Selection:** `preview`
- **Vercel Command:** `vercel deploy --yes`
- **Result:** Deploys to `dev.mayfairmandi.com`
- **Use Case:** Feature testing, development, staging

#### Production Environment  
- **Workflow Selection:** `production`
- **Vercel Command:** `vercel deploy --prod --yes`
- **Result:** Deploys to `prod.mayfairmandi.com`
- **Use Case:** Live production site

### Updated Workflow Behavior

All workflows now show clear domain information:

```bash
🔍 Deploying to PREVIEW (dev.mayfairmandi.com)...
✅ Preview deployment complete!
🌐 Preview URL: https://dev.mayfairmandi.com
🔗 Vercel URL: https://mayfair-hotel-abc123.vercel.app
```

```bash
🌟 Deploying to PRODUCTION (prod.mayfairmandi.com)...
✅ Production deployment complete!
🌐 Production URL: https://prod.mayfairmandi.com
🔗 Vercel URL: https://mayfair-hotel-xyz789.vercel.app
```

---

## 📋 Deployment Workflows

### 1. Self-Sufficient Deployment (Recommended)
**Workflow:** `Deploy Any Branch to Vercel (Self-Sufficient)`

**Usage:**
```
Branch: feature/latest-features
Environment: preview → Deploys to dev.mayfairmandi.com
Environment: production → Deploys to prod.mayfairmandi.com
```

### 2. Direct Deployment
**Workflow:** `Deploy to Vercel (Direct)`

**Usage:**
```
Branch: master
Environment: preview → Deploys to dev.mayfairmandi.com
Environment: production → Deploys to prod.mayfairmandi.com
```

### 3. Any Branch Deployment
**Workflow:** `Deploy Any Branch to Vercel`

**Usage:**
```
Branch: any-branch-name
Source Branch: master
Environment: preview → Deploys to dev.mayfairmandi.com
Environment: production → Deploys to prod.mayfairmandi.com
```

---

## 🔧 Vercel Project Configuration

### Domain Setup in Vercel Dashboard

Your Vercel project should be configured with:

#### Production Domain
- **Domain:** `prod.mayfairmandi.com`
- **Type:** Production
- **SSL:** Automatic (Let's Encrypt)
- **Redirects:** All traffic to HTTPS

#### Preview Domain
- **Domain:** `dev.mayfairmandi.com`
- **Type:** Preview
- **SSL:** Automatic (Let's Encrypt)
- **Redirects:** All traffic to HTTPS

### DNS Configuration

Your DNS should point to Vercel:

```dns
# A Records
prod.mayfairmandi.com → 76.76.19.61
dev.mayfairmandi.com → 76.76.19.61

# CNAME Records (Alternative)
prod.mayfairmandi.com → cname.vercel-dns.com
dev.mayfairmandi.com → cname.vercel-dns.com
```

---

## 🎯 Environment Strategy

### Development Workflow
1. **Feature Development**
   - Create feature branch
   - Deploy to `preview` → `dev.mayfairmandi.com`
   - Test functionality
   - Share with team for review

2. **Production Release**
   - Merge to master
   - Deploy to `production` → `prod.mayfairmandi.com`
   - Monitor live site

### Testing Strategy
```
Feature Branch → dev.mayfairmandi.com (testing)
     ↓
Master Branch → dev.mayfairmandi.com (staging)
     ↓
Master Branch → prod.mayfairmandi.com (production)
```

---

## 🔍 Deployment Summary

After deployment, you'll see:

### Preview Deployment Summary
```
## 🚀 Self-Sufficient Deployment Complete!

**Target Branch:** feature/latest-features
**Environment:** preview
**🌐 Preview URL:** https://dev.mayfairmandi.com
**🔗 Vercel URL:** https://mayfair-hotel-abc123.vercel.app

### 📊 Deployment Details
- **Workflow:** Self-Sufficient (Auto-generated files)
- **Files Generated:** vercel.json, backend/index.js, build scripts, manifest.json, etc.
- **No Dependencies:** Completely independent of master branch
- **Custom Domains:** dev.mayfairmandi.com (preview) | prod.mayfairmandi.com (production)
```

### Production Deployment Summary
```
## 🚀 Self-Sufficient Deployment Complete!

**Target Branch:** master
**Environment:** production
**🌐 Production URL:** https://prod.mayfairmandi.com
**🔗 Vercel URL:** https://mayfair-hotel-xyz789.vercel.app

### 📊 Deployment Details
- **Workflow:** Self-Sufficient (Auto-generated files)
- **Custom Domains:** dev.mayfairmandi.com (preview) | prod.mayfairmandi.com (production)
```

---

## 🛠️ Troubleshooting

### Common Issues

#### 1. Domain Not Resolving
**Issue:** `dev.mayfairmandi.com` or `prod.mayfairmandi.com` not loading
**Solutions:**
- Check DNS propagation (can take up to 48 hours)
- Verify domain configuration in Vercel dashboard
- Ensure SSL certificates are active

#### 2. Wrong Domain After Deployment
**Issue:** Deployment goes to wrong domain
**Solutions:**
- Check environment selection in workflow
- Verify Vercel project domain settings
- Ensure `--prod` flag usage is correct

#### 3. SSL Certificate Issues
**Issue:** HTTPS not working
**Solutions:**
- Wait for automatic SSL provisioning (up to 24 hours)
- Check domain verification in Vercel
- Ensure DNS records are correct

### Debug Commands

```bash
# Check DNS resolution
nslookup dev.mayfairmandi.com
nslookup prod.mayfairmandi.com

# Test SSL
curl -I https://dev.mayfairmandi.com
curl -I https://prod.mayfairmandi.com

# Check domain status
vercel domains ls
```

---

## 🎉 Benefits

### Professional Setup
- ✅ **Custom branded domains** instead of vercel.app URLs
- ✅ **Environment separation** (dev vs prod)
- ✅ **SSL certificates** automatically managed
- ✅ **Professional appearance** for clients/stakeholders

### Development Benefits
- ✅ **Clear environment distinction**
- ✅ **Easy sharing** with team members
- ✅ **Consistent URLs** across deployments
- ✅ **SEO-friendly** production domain

### Operational Benefits
- ✅ **Zero configuration** required in workflows
- ✅ **Automatic routing** based on environment
- ✅ **Clear deployment logs** showing target domains
- ✅ **Professional deployment summaries**

---

## 🚀 Next Steps

1. **Test Preview Deployment**
   - Deploy any feature branch to `preview`
   - Verify `dev.mayfairmandi.com` loads correctly

2. **Test Production Deployment**
   - Deploy master branch to `production`
   - Verify `prod.mayfairmandi.com` loads correctly

3. **Share URLs**
   - Use `dev.mayfairmandi.com` for development testing
   - Use `prod.mayfairmandi.com` for live production

4. **Monitor Performance**
   - Set up monitoring for both domains
   - Configure alerts for downtime

**Your Mayfair Hotel Management System is now professionally deployed with custom domains!** 🏨✨
