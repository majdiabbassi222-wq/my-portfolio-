# Majdy Abbassy Portfolio - Deployment Guide

A modern, animated portfolio with custom cursor trigger, infinite brand logo marquee, and responsive design.

## 🚀 Quick Deploy to GitHub Pages (Free)

1. **Create a GitHub Repository**:
   - Go to [GitHub New Repository](https://github.com/new)
   - Name your repository (e.g. `portfolio` or `<your-username>.github.io`)
   - Leave it **Public** and click **Create repository**

2. **Push your files to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Organized portfolio codebase for deployment"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - In your GitHub repo, go to **Settings** > **Pages**
   - Under **Build and deployment** -> **Source**, select **Deploy from a branch**
   - Choose **Branch**: `main` and **Folder**: `/ (root)`
   - Click **Save**
   - Your site will be live at `https://<your-username>.github.io/<your-repo-name>/` in 1-2 minutes!

---

## 📁 Cleaned & Organized Project Structure
```
portflio v.2/
├── index.html                 # Main website entry page (lowercase for GitHub Pages)
├── assets/
│   ├── favicon.png            # Site favicon
│   ├── favicon.ico            # Favicon fallback
│   ├── bg-sprite.webp        # Background ambient animation frames
│   ├── bg-sprite.jpg         # Background fallback
│   ├── logos/                 # Organized brand logos (Exclude, Kenza, Lahmar, Zola, etc.)
│   └── work/                  # Portfolio showcase artwork (slas, 365, affiche-final, etc.)
├── README.md                  # Deployment & setup documentation
└── DESIGN.md                  # Visual style & UI specification
```

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start local dev server with Netlify Functions
npm run dev
# Opens http://localhost:8888 with live functions

# For live reload on HTML changes, also run:
npx serve . -l 3000
# Then open http://localhost:3000 and Netlify dev will proxy functions
```

## 🔧 Customization

### Update Portfolio Content
Edit `code.html` directly - all content is in the HTML.

### Update Colors/Theme
Modify the Tailwind config in `<script id="tailwind-config">` in `code.html`.

### Update Background Animation
Replace files in `assets/`:
- `bg-sprite.webp` (primary)
- `bg-sprite.jpg` (fallback)

Use `build_sprites.py` to generate new sprites from a video.

## 📧 Contact Form Features
- ✅ Serverless (no backend server to maintain)
- ✅ Spam protection (honeypot + validation)
- ✅ Beautiful HTML email template
- ✅ Auto-reply to sender's email (reply-to)
- ✅ Loading states & error handling
- ✅ Accessible (ARIA labels, focus states)
- ✅ Works without JavaScript (fallback to mailto)

## 🌐 Custom Domain (Optional)
1. In Netlify: **Site Settings** > **Domain Management** > **Add custom domain**
2. Follow DNS configuration instructions
3. SSL/HTTPS is automatic

## 📊 Analytics (Optional)
Add to `<head>` in `code.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Contact form 500 error | Check Netlify Function logs: **Functions** > **contact** > **Logs** |
| Emails not received | Check spam folder; verify Gmail App Password is correct (no spaces) |
| Background not loading | Check browser console; ensure `assets/bg-sprite.webp` exists |
| Styles not applying | Clear browser cache; Tailwind is loaded via CDN |

## 📝 License
MIT - Feel free to use for your own portfolio!