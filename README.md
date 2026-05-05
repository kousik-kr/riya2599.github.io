# Riya Goyal - Professional Portfolio Website

A modern, multi-page academic portfolio website featuring Riya Goyal's research, publications, education, and professional experience.

## 🎨 Features

### Multi-Page Architecture
- **Separate Pages**: Each major section has its own dedicated page with proper navigation
- **Home Page** (`/`) - Welcome page with highlights and key metrics
- **About Page** (`/about.html`) - Comprehensive bio and research interests
- **Research Page** (`/research.html`) - Publications and research work
- **Projects Page** (`/projects.html`) - Featured projects and open-source contributions
- **Education Page** (`/education.html`) - Academic credentials
- **Experience Page** (`/experience.html`) - Professional internships and work
- **Awards Page** (`/awards.html`) - Recognition and achievements
- **Teaching Page** (`/teaching.html`) - Teaching experience
- **Skills Page** (`/skills.html`) - Technical and professional skills
- **Contact Page** (`/contact.html`) - Contact information and inquiry form

### Standard Site Elements
✅ **Navigation** - Sticky header with responsive navigation menu
✅ **Footer** - Comprehensive footer with:
  - Copyright information with dynamic year
  - Organized footer sections (About, Navigation, Resources, Connect)
  - Social media links
  - Footer meta links (Sitemap, Privacy, Terms)

✅ **Legal Pages**:
  - Privacy Policy (`/privacy.html`)
  - Terms of Use (`/terms.html`)
  - Sitemap (`/sitemap.html`)

✅ **SEO & Metadata**:
  - XML Sitemap (`sitemap.xml`)
  - Robots.txt for search engine crawlers
  - Open Graph meta tags
  - Canonical URLs

✅ **Contact Features**:
  - Contact information display
  - Contact form with validation
  - Social media links
  - FAQ section

### Design System
- Glass-morphism UI with blur effects
- Smooth animations and transitions
- Responsive grid layouts
- Professional color scheme
- Clean typography

## 📁 Project Structure

```
riya_website/
├── index.html              # Home page
├── about.html              # About page
├── research.html           # Research & publications
├── projects.html           # Projects showcase
├── education.html          # Educational background
├── experience.html         # Professional experience
├── awards.html             # Awards & recognition
├── teaching.html           # Teaching experience
├── skills.html             # Technical skills
├── contact.html            # Contact & inquiry form
├── privacy.html            # Privacy policy
├── terms.html              # Terms of use
├── sitemap.html            # HTML sitemap
├── sitemap.xml             # XML sitemap for SEO
├── robots.txt              # Search engine directives
│
└── src/
    ├── main.js
    ├── styles/
    │   ├── reset.css
    │   ├── design-tokens.css
    │   └── main.css
    ├── components/
    │   ├── Navigation.js
    │   ├── PageFooter.js
    │   ├── About.js
    │   ├── Contact.js
    │   ├── Research.js
    │   ├── Projects.js
    │   ├── Education.js
    │   ├── Experience.js
    │   ├── Awards.js
    │   ├── Teaching.js
    │   ├── Skills.js
    │   ├── Metrics.js
    │   ├── Highlights.js
    │   ├── Hero.js
    │   └── more...
    ├── utils/
    │   └── dom.js
    └── data/
        └── profile.js
```

## 🚀 Getting Started

### Installation
```bash
git clone https://github.com/kousik-kr/riya_website.git
cd riya_website
```

### Local Development
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Visit: http://localhost:8000
```

## 📝 Customization

### Update Profile Data
Edit `src/data/profile.js`:
- Name, credentials, and contact info
- Education and experience
- Publications and research
- Projects and awards
- Skills and teaching
- Social media links

### Modify Content
Each page component is in `src/components/`. Components follow a consistent pattern.

### Customize Styling
Edit CSS variables in `src/styles/design-tokens.css`:
- Colors (primary, accent, text, etc.)
- Spacing and sizing
- Typography
- Border radius and shadows

## 🔍 SEO Features

- ✅ XML Sitemap
- ✅ Robots.txt
- ✅ Open Graph meta tags
- ✅ Semantic HTML
- ✅ Mobile responsive
- ✅ Fast load times

## 📱 Responsive Design

Works perfectly on:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🎯 Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Welcome & highlights |
| About | `/about.html` | Biography & interests |
| Research | `/research.html` | Publications |
| Projects | `/projects.html` | Portfolio projects |
| Education | `/education.html` | Degrees & credentials |
| Experience | `/experience.html` | Work history |
| Awards | `/awards.html` | Recognition |
| Teaching | `/teaching.html` | Courses & mentoring |
| Skills | `/skills.html` | Technical skills |
| Contact | `/contact.html` | Get in touch |
| Privacy | `/privacy.html` | Privacy policy |
| Terms | `/terms.html` | Terms of use |
| Sitemap | `/sitemap.html` | Site navigation |

## ⚡ Performance

- Vanilla JavaScript (zero dependencies)
- Minimal CSS
- Optimized animations
- Fast load times

## 📞 Contact

Email: riya.goyal@stanford.edu

---

**Built with ❤️ for research, collaboration, and knowledge sharing**