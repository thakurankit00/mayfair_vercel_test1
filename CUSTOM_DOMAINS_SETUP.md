# 🌐 Custom Domains Setup - Mayfair Hotel Management

## 🎯 Domain Configuration

The Mayfair Hotel Management System now uses **custom domains** for different environments:

| Environment | Domain | Purpose |
|-------------|--------|---------|
| **Preview** | `dev.mayfairmandi.com` | Development and testing |
| **Production** | `prod.mayfairmandi.com` | Live production environment |

## 🚀 How It Works

### Automatic Domain Assignment
When you run any deployment workflow:

1. **Select "preview"** → Deploys to `dev.mayfairmandi.com`
2. **Select "production"** → Deploys to `prod.mayfairmandi.com`

### Workflow Integration
All workflows now automatically:
- ✅ Deploy to the correct Vercel environment
- ✅ Display both Vercel URL and custom domain
- ✅ Show clear environment indicators
- ✅ Provide direct access links

## 📋 Updated Workflows

### 1. Deploy Any Branch (Self-Sufficient)
- **Preview**: Deploys any branch to `dev.mayfairmandi.com`
- **Production**: Deploys any branch to `prod.mayfairmandi.com`

### 2. Deploy to Vercel (Direct)
- **Preview**: Deploys master/branches to `dev.mayfairmandi.com`
- **Production**: Deploys master/branches to `prod.mayfairmandi.com`

### 3. Deploy Any Branch (Legacy)
- **Preview**: Deploys with file injection to `dev.mayfairmandi.com`
- **Production**: Deploys with file injection to `prod.mayfairmandi.com`

## 🎯 Usage Examples

### Example 1: Feature Branch Testing
```
Workflow: Deploy Any Branch (Self-Sufficient)
Branch: feature/latest-features
Environment: preview
Result: https://dev.mayfairmandi.com
```

### Example 2: Production Release
```
Workflow: Deploy to Vercel (Direct)
Branch: master
Environment: production
Result: https://prod.mayfairmandi.com
```

### Example 3: Hotfix Deployment
```
Workflow: Deploy Any Branch (Self-Sufficient)
Branch: hotfix/critical-bug
Environment: production
Result: https://prod.mayfairmandi.com
```

## 📊 Deployment Summary

After deployment, you'll see:

```
## 🚀 Deployment Complete!

**Target Branch:** feature/latest-features
**Environment:** preview

### 🌐 Access URLs
- **Custom Domain:** https://dev.mayfairmandi.com
- **Vercel URL:** https://mayfair-hotel-abc123.vercel.app

### 📊 Deployment Details
- **Workflow:** Self-Sufficient (Auto-generated files)
- **Custom Domains:** dev.mayfairmandi.com (preview) | prod.mayfairmandi.com (production)
- **Commit:** abc123def
- **Triggered by:** @developer
- **Timestamp:** 2024-01-15 10:30:00 UTC
```

## 🔧 Technical Details

### Domain Mapping
- **Vercel Project**: Configured with custom domains
- **DNS Setup**: Points to Vercel's edge network
- **SSL Certificates**: Automatically managed by Vercel
- **CDN**: Global edge caching enabled

### Environment Variables
Both domains use the same environment variables configured in Vercel dashboard:
- Database connections
- API keys
- Third-party integrations
- Payment gateway settings

### Database Considerations
⚠️ **Important**: Both environments may share the same database. Consider:
- Using separate databases for dev/prod
- Being careful with data modifications in preview
- Testing thoroughly before production deployments

## 🎯 Best Practices

### 1. Development Workflow
1. **Feature Development** → Deploy to `dev.mayfairmandi.com`
2. **Testing & QA** → Verify on `dev.mayfairmandi.com`
3. **Production Release** → Deploy to `prod.mayfairmandi.com`

### 2. Environment Usage
- **dev.mayfairmandi.com**: 
  - Feature testing
  - Integration testing
  - Demo purposes
  - Client previews
  
- **prod.mayfairmandi.com**:
  - Live hotel operations
  - Customer-facing features
  - Production data
  - Critical business functions

### 3. Deployment Strategy
- **Always test on preview first**
- **Use production sparingly**
- **Monitor both environments**
- **Keep environments in sync**

## 🔍 Troubleshooting

### Common Issues

#### 1. Domain Not Accessible
**Issue**: Custom domain shows error
**Solution**: 
- Check Vercel domain configuration
- Verify DNS settings
- Wait for propagation (up to 24 hours)

#### 2. Wrong Environment
**Issue**: Deployed to wrong domain
**Solution**:
- Check workflow environment selection
- Re-run workflow with correct environment
- Verify Vercel project settings

#### 3. SSL Certificate Issues
**Issue**: HTTPS not working
**Solution**:
- Vercel automatically handles SSL
- Wait for certificate provisioning
- Check domain verification status

## 🌟 Benefits

### For Developers
- ✅ **Clear environment separation**
- ✅ **Easy testing and preview**
- ✅ **Professional domain names**
- ✅ **Simplified deployment process**

### For Stakeholders
- ✅ **Branded domain names**
- ✅ **Reliable preview environment**
- ✅ **Professional presentation**
- ✅ **Easy access for testing**

### For Operations
- ✅ **Environment isolation**
- ✅ **Reduced production risks**
- ✅ **Better monitoring capabilities**
- ✅ **Streamlined deployment pipeline**

## 🎉 Ready to Deploy!

Your custom domain setup is complete! 🚀

- **Preview Environment**: `https://dev.mayfairmandi.com`
- **Production Environment**: `https://prod.mayfairmandi.com`

Use any workflow and select the appropriate environment to deploy to your custom domains!
