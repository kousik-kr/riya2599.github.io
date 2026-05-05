# 🚀 Quick Start Guide - Riya Goyal Portfolio Website

## What's New?

Your website has been completely refactored from a single-page application to a modern **multi-page architecture** with all standard site elements!

## 📋 Site Structure Overview

### Main Pages
| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Welcome with highlights |
| About | `/about.html` | Bio & research interests |
| Research | `/research.html` | Publications |
| Projects | `/projects.html` | Project portfolio |
| Education | `/education.html` | Degrees & credentials |
| Experience | `/experience.html` | Work history |
| Awards | `/awards.html` | Recognition |
| Teaching | `/teaching.html` | Courses & mentoring |
| Skills | `/skills.html` | Technical skills |
| Contact | `/contact.html` | Get in touch |

### Legal & Meta Pages
- Privacy Policy (`/privacy.html`)
- Terms of Use (`/terms.html`)
- Sitemap (`/sitemap.html`)
- XML Sitemap (`/sitemap.xml`)

## 🎨 Key Features

✅ **Sticky Navigation** - Always accessible header with active page highlighting
✅ **Comprehensive Footer** - With copyright, meta links, and social media
✅ **Contact Form** - Complete contact page with inquiry form and FAQ
✅ **About Section** - Detailed biography and research focus
✅ **SEO Optimized** - XML sitemap, robots.txt, meta tags
✅ **Mobile Responsive** - Works perfectly on all devices
✅ **Professional Design** - Glass-morphism UI with smooth animations

## 🛠️ How to Run

```bash
# Option 1: Python
python -m http.server 8000

# Option 2: Node.js
npx http-server

# Option 3: Just open index.html in your browser
```

Then visit: `http://localhost:8000`

## 📝 Customization Guide

### Update Your Profile
Edit: `src/data/profile.js`

```javascript
{
  fullName: 'Riya Goyal',
  email: 'riya.goyal@stanford.edu',
  // ... update all your info
  socialLinks: [
    { icon: 'fa-github', label: 'GitHub', url: 'https://github.com/...' },
    // ... your social links
  ]
}
```

### Change Colors
Edit: `src/styles/design-tokens.css`

```css
--primary: #1e3a5f;    /* Main brand color */
--accent: #3b82f6;     /* Highlight color */
--text: #2d3748;       /* Text color */
--bg: #ffffff;         /* Background */
```

### Update Page Content
- `src/components/About.js` - About page
- `src/components/Contact.js` - Contact page
- Other components for other sections

## 📁 File Organization

```
riya_website/
├── index.html                 # Home page
├── about.html                 # About page
├── contact.html               # Contact page
├── privacy.html               # Privacy policy
├── terms.html                 # Terms of use
├── sitemap.html               # Sitemap page
├── sitemap.xml                # XML sitemap (for search engines)
├── robots.txt                 # Search engine directives
│
└── src/
    ├── components/
    │   ├── Navigation.js       # ← Top navigation
    │   ├── PageFooter.js       # ← Footer with copyright
    │   ├── About.js            # ← About page
    │   ├── Contact.js          # ← Contact page
    │   └── ... other components
    ├── styles/
    │   ├── main.css            # Main stylesheet
    │   ├── design-tokens.css   # Color variables
    │   └── reset.css           # CSS reset
    ├── data/
    │   └── profile.js          # Your profile data
    └── utils/
        └── dom.js              # Utility functions
```

## 🌐 Deployment Options

### GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in settings
3. Your site is live!

### Netlify
1. Drag and drop the folder
2. Your site is live instantly!

### Vercel
1. Connect your GitHub repo
2. Automatic deployments on push

### Traditional Hosting
1. Upload files via FTP
2. Works with any web host

## ✨ What Was Added

### New Components
- ✅ `Navigation.js` - Sticky header with responsive navigation
- ✅ `PageFooter.js` - Footer with copyright and meta links
- ✅ `About.js` - About page with biography
- ✅ `Contact.js` - Contact page with form and FAQ

### New Pages
- ✅ About, Research, Projects, Education, Experience
- ✅ Awards, Teaching, Skills, Contact
- ✅ Privacy Policy, Terms of Use, Sitemap

### New Files
- ✅ `sitemap.xml` - For search engines
- ✅ `robots.txt` - Search engine crawler directives
- ✅ `CHANGELOG.md` - Documentation of changes
- ✅ `.gitignore` - Git configuration

### CSS Enhancements (~400+ lines)
- ✅ Navigation styling
- ✅ Page layouts
- ✅ Form styling
- ✅ Footer variations
- ✅ Mobile responsiveness

## 🔍 SEO Features

✅ Meta tags on every page
✅ Open Graph support
✅ XML Sitemap
✅ Robots.txt
✅ Canonical URLs
✅ Proper heading hierarchy
✅ Mobile-friendly design

## 📱 Device Support

- ✅ Desktop (1920px+)
- ✅ Tablet (768px-1024px)
- ✅ Mobile (320px-767px)
- ✅ All modern browsers

## 🎯 Next Steps

1. **Update Profile Data**
   - Edit `src/data/profile.js`
   - Add your social media links
   - Update CV and resume URLs

2. **Test All Pages**
   - Click through all navigation links
   - Test contact form
   - Check responsive design on mobile

3. **Add Content**
   - Update About page with your bio
   - Add your publications
   - Update projects and experience
   - Add teaching details

4. **Customize Styling** (Optional)
   - Update colors in `design-tokens.css`
   - Adjust spacing and sizing
   - Change fonts if desired

5. **Deploy**
   - Choose your hosting platform
   - Push code to deployment
   - Test live site

## 🆘 Troubleshooting

**Links not working?**
- Make sure you're using a local server (not opening files directly)
- Check that all paths start with `/`

**Styles not loading?**
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors (F12)

**Mobile layout broken?**
- Check viewport meta tag in HTML
- Open DevTools and enable mobile view (F12)

## 📞 Support

All pages now have:
- Clear navigation at the top
- Footer with contact info
- Social media links
- Legal pages with proper links

## 🎉 You're All Set!

Your website is now:
- ✅ Multi-page and professional
- ✅ Mobile responsive
- ✅ SEO optimized
- ✅ Ready for deployment
- ✅ Easy to customize

**Happy coding! Build something amazing! 🚀**

---

For detailed documentation, see: `README.md`
For change history, see: `CHANGELOG.md`