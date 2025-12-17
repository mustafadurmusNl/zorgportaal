# Deployment Guide - Zorgportaal

## Production Deployment on Vercel

### Live URL

🌐 **https://www.groeipunt.nl**

### Deployment Platform

- **Platform**: Vercel
- **Framework**: Next.js 15.5.3
- **Database**: MongoDB Atlas
- **Languages**: Turkish (TR), English (EN)

---

## Environment Variables (Vercel)

Set these in Vercel Dashboard → Settings → Environment Variables:

```env
MONGODB_URI=mongodb+srv://mdurmusnl_db_user:***@cluster0.hy3ej0b.mongodb.net/groeipunt_healthcare
JWT_SECRET=*** (use crypto.randomBytes(32).toString('base64'))
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=*** (bcrypt hash)
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://www.groeipunt.nl
```

---

## Deployment Steps

### 1. Domain Setup

- Purchase domain: www.groeipunt.nl (via TransIP/Versio/GoDaddy)

### 2. Vercel Setup

1. Sign up at [vercel.com](https://vercel.com) with GitHub
2. Import repository: `mustafadurmusNl/zorgportaal`
3. Configure build settings:
   - Framework: Next.js (auto-detected)
   - Build Command: `pnpm run build`
   - Install Command: `pnpm install`

### 3. Environment Variables

- Add all environment variables in Vercel Dashboard
- Generate secure JWT_SECRET with: `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`

### 4. MongoDB Atlas

- Whitelist Vercel IPs in MongoDB Atlas → Network Access
- Add IP: `0.0.0.0/0` (allow from anywhere) or specific Vercel IPs

### 5. Deploy

- Click "Deploy" in Vercel
- Wait for build to complete (~2-5 minutes)
- Verify deployment at temporary URL

### 6. Custom Domain

- Add domain in Vercel: Project → Settings → Domains
- Configure DNS at domain provider:
  ```
  A     @     76.76.21.21
  CNAME www   cname.vercel-dns.com
  ```
- Wait for DNS propagation (5-60 minutes)

### 7. SSL Certificate

- Vercel automatically provisions SSL via Let's Encrypt
- HTTPS will be enforced

---

## Post-Deployment Checklist

- [ ] Website accessible at https://www.groeipunt.nl
- [ ] SSL certificate active (green padlock)
- [ ] MongoDB connection working
- [ ] Language switcher (TR/EN) functional
- [ ] All pages loading correctly
- [ ] Images loading from external sources
- [ ] Admin panel accessible (if implemented)

---

## Maintenance

### Updating the Site

1. Push changes to GitHub main branch
2. Vercel automatically deploys on push
3. Deployment takes ~2-5 minutes

### Monitoring

- Check Vercel Dashboard for deployment logs
- Monitor MongoDB Atlas for database performance
- Set up Vercel Analytics (optional)

---

## Security Notes

⚠️ **IMPORTANT**:

- Never commit `.env.local` or `.env.production` to GitHub
- Rotate JWT_SECRET periodically
- Change default admin password immediately
- Keep MongoDB credentials secure
- Enable MongoDB Atlas IP whitelist
- Review Vercel security best practices

---

## Support

For issues:

1. Check Vercel deployment logs
2. Check MongoDB Atlas connection
3. Verify environment variables
4. Review Next.js build errors

## Useful Commands

```bash
# Generate JWT secret
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Generate bcrypt hash for password
# Use online tool: https://bcrypt-generator.com/

# Local development
pnpm dev

# Production build test
pnpm build
pnpm start
```

---

**Last Updated**: December 2025
**Maintained By**: Mustafa Durmuş
