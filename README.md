# Maryam Naz | Personal Developer Portfolio

> **Software Engineer & Web Developer**  
> Building responsive websites, cloud-connected platforms, and AI-accelerated workflows.

[![Astro](https://img.shields.io/badge/Astro-v7.4-BC52EE?style=flat&logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-v19-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 👩‍💻 About Maryam Naz

Software Engineering student and Junior Web Developer who builds responsive websites and web applications, from clean front ends to cloud-based systems. Hands-on with HTML, CSS, JavaScript, Python, C++, and WordPress, plus React, Firebase, and Supabase. 

Utilizes modern AI tools such as **ChatGPT**, **Claude**, and **Google Gemini** with advanced prompt engineering to speed up coding, debugging, and content drafting with rigorous quality verification. Also skilled in graphic design, logo design, brand identity, and multimedia editing.

- 📍 **Location**: Kotli, Azad Kashmir, Pakistan
- 📧 **Email**: [chaudharymaryam346@gmail.com](mailto:chaudharymaryam346@gmail.com)
- 📱 **Phone / WhatsApp**: [+92 332 5680756](https://wa.me/923325680756)
- 💼 **Current Role**: Junior Web Developer (2025 – Present)
- 🎓 **Education**: BS Software Engineering, University of Kotli, AJK (2022 – 2026)

---

## 🛠️ Technical Skills & Competencies

| Domain | Technologies & Tools |
| :--- | :--- |
| **Frontend & Web** | HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Bootstrap, Responsive Web Design, React Native (Expo & Web), WordPress (Themes, Plugins & Content), Basic SEO |
| **Backend & Cloud** | Python, C++, Node.js (basic), Firebase Firestore, Supabase, MySQL (basic), RESTful APIs |
| **AI & Prompt Engineering** | ChatGPT, Claude, Google Gemini, Prompt Engineering, GitHub Copilot, AI-Assisted Debugging & Optimization |
| **Design & Multimedia** | Brand Identity & Logo Design, UI/UX Wireframing (Figma, Canva), Photo Editing, Video Editing |
| **CS Fundamentals** | Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP) |
| **Dev Tools & Workflow** | Git, GitHub, VS Code, Postman, Vercel Deployment |

---

## 🚀 Featured Projects

### 1. Organization Finance Management System *(Final Year Project)*
- **Stack**: React Native (Expo), React Native Web, Firebase Firestore, TypeScript
- **Overview**: Full-featured finance management platform developed as both a web application and mobile app from a single shared Expo / React Native Web codebase.
- **Key Features**:
  - Unified cross-platform architecture with real-time Firebase Firestore database sync.
  - Organization expense and income tracking.
  - Secure role-based user authentication.
  - Interactive financial analytics dashboard and cross-platform reporting.

### 2. Menu Cloud System *(Cloud Web Application)*
- **Stack**: HTML5, CSS3, JavaScript, Cloud Database, REST APIs
- **Overview**: Cloud-based digital menu and catalog system tailored for restaurants and cafes.
- **Key Features**:
  - Digital menu management allowing owners to update items, categories, and prices online.
  - Instant real-time database synchronization.
  - Mobile-first, device-responsive customer browsing interface with smooth search and filtering.

### 3. Personal Portfolio Website *(Modern Responsive Web App)*
- **Stack**: React, Tailwind CSS, Astro, TypeScript
- **Overview**: Interactive, high-performance developer portfolio showcasing background, skills, projects, and contact channels.
- **Key Features**:
  - Sleek dark-minimalist theme with glassmorphic cards and micro-animations.
  - Interactive letter-glitch WebGL canvas and dynamic skill accordions.
  - Fully responsive across mobile, tablet, and desktop screens.
  - SEO-optimized with JSON-LD schema markup.

---

## 💼 Professional Experience

### **Junior Web Developer** — Web Development & Graphic Design
*2025 – Present*
- Build and test responsive, mobile-friendly websites using HTML, CSS, and JavaScript across diverse screen sizes and browsers.
- Implement software projects in Python and C++, applying data structures and problem-solving techniques.
- Build, customize, and maintain WordPress websites, managing custom themes, plugins, and dynamic updates.
- Design high-quality logos, branding assets, and visual media for client websites.
- Leverage ChatGPT, Claude, and Gemini with prompt engineering to accelerate code generation and debugging workflows.

---

## 🎓 Education & Background

### **Bachelor of Science in Software Engineering**
**University of Kotli, AJK** | *2022 – 2026*
- **Relevant Coursework**: Data Structures, Algorithms, Artificial Intelligence, Machine Learning, Database Systems, Computer Networks, Operating Systems, Cloud Computing, Mobile Application Development, Human-Computer Interaction.
- **Soft Skills**: Problem Solving, Critical Thinking, Effective Communication, Team Collaboration, Time Management, Adaptability, Continuous Learning.
- **Languages**: English (Professional), Urdu (Native / Bilingual).

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js >= 20.0.0
- npm (or pnpm / yarn)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/maryam-portfolio.git
cd maryam-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser to view the portfolio.

### 4. Build for production
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory, ready to deploy to **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 📁 Project Structure

```text
├── public/
│   ├── fonts/           # Montserrat Variable typography
│   ├── projects/        # High-res SVG mockup covers for projects
│   └── svg/             # Technology & tool vector logos
├── src/
│   ├── components/      # Astro UI components
│   │   ├── nav.astro         # Sticky floating navigation bar
│   │   ├── home.astro        # Hero section & bio
│   │   ├── logoWall.astro    # Infinite marquee logo scroller
│   │   ├── experience.astro  # Work history, education & soft skills
│   │   ├── projects.astro    # Featured project grid & feature cards
│   │   ├── contact.astro     # Contact details & message form
│   │   └── footer.astro      # Social links, stats & attribution
│   ├── layouts/
│   │   └── Layout.astro      # Master HTML layout, SEO & JSON-LD
│   ├── pages/
│   │   └── index.astro       # Main entry page
│   ├── React/           # Interactive React islands
│   │   ├── LetterGlitch.tsx  # WebGL canvas letter glitch effect
│   │   ├── LikeButton.tsx    # Interactive persistent like counter
│   │   └── SkillsList.tsx    # Interactive competencies accordion
│   └── firebase.ts      # Cloud database config helper
├── astro.config.mjs     # Astro configuration
└── package.json         # Project scripts and dependencies
```

---

## 📄 License & Attribution

- **Portfolio Content & Data**: Copyright &copy; 2026 **Maryam Naz**. All rights reserved.
- **Base Design Template**: Designed by [Andres Hernandez](https://github.com/Gothsec), distributed by [ThemeWagon](https://themewagon.com) under the [MIT License](https://opensource.org/licenses/MIT).
