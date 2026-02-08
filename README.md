# Mohammad Kofil - Portfolio

A modern, multilingual portfolio website showcasing my work as a Software Engineer, Backend Specialist, and Founder of DevSync BD. Built with React, TypeScript, and cutting-edge web technologies.

![Portfolio Preview](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 🚀 Features

### Core Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌍 **Multilingual Support** - Available in English, Spanish, Bengali (বাংলা), and Arabic (العربية)
- 🌓 **Dark/Light Mode** - Seamless theme switching with persistent preferences
- ⚡ **Lightning Fast** - Optimized performance with code splitting and lazy loading
- 📱 **Fully Responsive** - Perfect experience across all devices
- ♿ **Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation

### Portfolio Sections

- 👋 **Hero** - Dynamic introduction with animated typing effect
- 👨‍💻 **About** - Professional background and expertise
- 🛠️ **Skills** - Technical skills with visual progress indicators
- 💼 **Experience** - Professional work history and achievements
- 📂 **Projects** - Showcase of completed projects with live demos
- 🎯 **Services** - Professional services offered
- 💬 **Consultation** - Book consultation sessions
- 📧 **Contact** - EmailJS integrated contact form

### Developer Experience

- ⌨️ **Command Palette** - Quick navigation with keyboard shortcuts (Ctrl/Cmd + K)
- 🔍 **SEO Optimized** - Pre-rendered pages with react-snap for better indexing
- 🗺️ **Sitemap & Robots.txt** - Enhanced search engine visibility
- 📊 **PWA Ready** - Service worker and manifest for offline support
- 🎭 **Error Boundaries** - Graceful error handling
- 🔄 **Smooth Scrolling** - Animated scroll behavior with scroll-to-top button

## 🛠️ Tech Stack

### Frontend

- **Framework:** React 19.2.0
- **Language:** TypeScript 5.9.3
- **Build Tool:** Vite 7.2.4
- **Routing:** React Router DOM 7.13.0
- **Styling:** Tailwind CSS 3.4.19
- **Animations:** Framer Motion 12.33.0
- **Icons:** Lucide React 0.562.0
- **Lottie Animations:** @lottiefiles/dotlottie-react

### UI Components

- **Component Library:** Radix UI (Headless components)
- **Form Management:** React Hook Form 7.70.0
- **Validation:** Zod 4.3.5
- **Toast Notifications:** Sonner 2.0.7
- **Command Menu:** CMDK 1.1.1
- **Carousel:** Embla Carousel 8.6.0
- **Charts:** Recharts 2.15.4

### Internationalization

- **i18n:** i18next 25.8.4
- **React Integration:** react-i18next 16.5.4
- **Language Detection:** i18next-browser-languagedetector 8.2.0
- **Supported Languages:** English (en), Spanish (es), Bengali (bn), Arabic (ar)

### Features & Integrations

- **Email Service:** EmailJS 4.4.1
- **SEO:** React Helmet Async 2.0.5
- **Pre-rendering:** React Snap 1.23.0
- **Theme Management:** next-themes 0.4.6
- **Date Handling:** date-fns 4.1.0

### Development Tools

- **Linting:** ESLint 9.39.1
- **CSS Processing:** PostCSS 8.5.6 & Autoprefixer 10.4.23
- **Compression:** vite-plugin-compression 0.5.1
- **Sitemap Generation:** vite-plugin-sitemap 0.8.2

## 📁 Project Structure

```
mohammedkofil/
├── public/                    # Static assets
│   ├── manifest.json         # PWA manifest
│   ├── robots.txt            # Search engine directives
│   ├── service-worker.js     # PWA service worker
│   └── sitemap.xml           # SEO sitemap
├── src/
│   ├── components/
│   │   ├── custom/           # Custom components
│   │   │   ├── CommandPalette.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ...
│   │   └── ui/               # Reusable UI components (Radix UI based)
│   ├── context/              # React contexts
│   │   ├── LanguageContext.tsx
│   │   └── ThemeContext.tsx
│   ├── hooks/                # Custom React hooks
│   │   ├── useLanguage.ts
│   │   ├── useTheme.ts
│   │   └── useScrollAnimation.ts
│   ├── i18n/                 # Internationalization
│   │   ├── config.ts         # i18n configuration
│   │   └── locales/          # Translation files
│   │       ├── en/           # English
│   │       ├── es/           # Spanish
│   │       ├── bn/           # Bengali
│   │       └── ar/           # Arabic
│   ├── lib/                  # Utility libraries
│   │   └── utils.ts          # Helper functions
│   ├── sections/             # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── Consultation.tsx
│   │   └── Contact.tsx
│   ├── App.tsx               # Root App component
│   ├── AppContent.tsx        # Main content component
│   └── main.tsx              # Application entry point
├── components.json           # shadcn/ui configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/mohammedkofil/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Start development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production (with TypeScript check and pre-rendering)
npm run build

# Preview production build with serve
npm run preview

# Preview production build with Vite
npm run preview:vite

# Lint code
npm run lint
```

## 🏗️ Build & Deployment

### Production Build

```bash
npm run build
```

This command:

1. Runs TypeScript compiler to check for type errors
2. Builds the application using Vite
3. Pre-renders pages using react-snap for better SEO
4. Generates optimized, minified assets in the `dist/` folder

### Pre-rendering Configuration

The portfolio uses `react-snap` to pre-render pages for improved SEO and performance. Configured routes:

- `/` (root)
- `/en/` (English)
- `/es/` (Spanish)
- `/bn/` (Bengali)
- `/ar/` (Arabic)

### Deployment

The portfolio can be deployed to various platforms:

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

#### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

#### Other Platforms

The `dist/` folder can be deployed to any static hosting service (GitHub Pages, AWS S3, Firebase Hosting, etc.)

## 🌍 Internationalization (i18n)

The portfolio supports four languages with automatic detection based on browser preferences:

| Language | Code | Status            |
| -------- | ---- | ----------------- |
| English  | `en` | ✅ Default        |
| Spanish  | `es` | ✅ Complete       |
| Bengali  | `bn` | ✅ Complete       |
| Arabic   | `ar` | ✅ Complete (RTL) |

### Adding a New Language

1. Create a new folder in `src/i18n/locales/` (e.g., `fr/` for French)
2. Add translation JSON files for all sections
3. Import translations in `src/i18n/config.ts`
4. Add the language code to supported languages
5. Update `package.json` reactSnap include paths

## ⚡ Performance Optimizations

- **Code Splitting** - Lazy loading of sections for faster initial load
- **Image Optimization** - Compressed and optimized images
- **Bundle Compression** - Gzip compression for production builds
- **Tree Shaking** - Eliminate unused code
- **Minification** - Minified CSS and JavaScript
- **Caching Strategy** - Service worker for offline support
- **Pre-rendering** - Static HTML generation for SEO

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly
- Color contrast compliance (WCAG AA)
- Reduced motion support

## 🎨 Customization

### Theme Customization

Edit [tailwind.config.js](tailwind.config.js) to customize colors, fonts, and other design tokens:

```js
theme: {
  extend: {
    colors: {
      // Your custom colors
    },
    fontFamily: {
      // Your custom fonts
    }
  }
}
```

### Content Customization

Update translation files in `src/i18n/locales/[language]/` to modify content for each section.

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Mohammad Kofil**

- Software Engineer | Backend Specialist
- Founder of DevSync BD
- Portfolio: [https://mohammedkofil.com]
- GitHub: [@mohammedkofil](https://github.com/mohammedkofil)
- LinkedIn: [Your LinkedIn]
- Email: mohammedkofil8@gmail.com

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) - Headless UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Beautiful icon set
- [EmailJS](https://www.emailjs.com/) - Email service integration

## 📞 Support

For questions or support, please open an issue or contact me directly through the portfolio contact form.

---

<p align="center">Made with ❤️ by Mohammad Kofil</p>
