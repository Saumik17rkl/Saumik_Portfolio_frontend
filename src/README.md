# Saumik Chakraborty - AI Engineer Portfolio

A fully designed, production-ready portfolio website showcasing AI engineering expertise, projects, and services. Built with React, TypeScript, and Tailwind CSS following strict zero-animation design principles.

## 🎨 Design System

### Theme
- **Dark + Glassmorphism + Neon Cyan Accents**
- Background: `#0A0F14`
- Section Alternate: `#0D1218`
- Accent Cyan: `#00E6FF`
- Glass surfaces with `backdrop-filter: blur(14px)`

### Typography
- **Headings**: Poppins (400, 500, 600, 700)
- **Body**: Inter (400, 500, 600)
- H1: 48px / 700
- H2: 28-32px / 600
- Body: 16px / 400

### Layout
- Max container width: 1200px
- 12-column responsive grid
- Section padding: 88-120px
- Side padding: 24px

## 🚀 Features

### Global Components

#### 1. Navigation Bar
- Fixed glass panel at top (70px height)
- Logo: "Saumik Chakraborty"
- Links: Home, About, Services, Projects, Contact, Resume
- Screen Controls toggle button
- Mobile-responsive with hamburger menu

#### 2. Screen Controls Panel
Customizable accessibility controls:
- **Layout**: Compact / Comfortable / Wide
- **Font Size**: Small / Normal / Large
- **Accent Mode**: Neon On / Off
- **High Contrast**: On / Off
- Saves preferences to localStorage

#### 3. AI Chatbot (Right Edge)
- Fixed circular button (56×56px)
- Click to open chat window (360×480px)
- Connects to `/api/chat` endpoint (Grok API)
- Keyboard shortcut: `Ctrl/Cmd + K`
- No streaming; shows full responses
- Privacy note included

#### 4. Footer
- Copyright with current year
- Social links: GitHub, LinkedIn, Email, Resume

### Pages

#### Home Page
- Hero section with title, tagline, achievement badge
- Primary CTAs: "Hire Me" and "View My Projects"
- Static AI orb illustration with info card
- Featured project cards (5 highlights)
- Tech stack chips
- Features strip (AI Chatbot, 3D Illustration, Glassmorphism UI, etc.)

#### About Page
- Professional summary (12-18 lines)
- Skills matrix (6 categories: AI/ML, Backend, Cybersecurity, Tools, ML/Data, Applications)
- Experience timeline with achievements
- Education details
- Achievements & certifications
- Personal philosophy section
- CTA buttons

#### Services Page
- Multi-domain profile explanation
- 6 core service categories with detailed descriptions:
  1. GenAI & LLM Engineering
  2. RAG Pipelines & Conversational AI
  3. Python Backend Engineering
  4. Cybersecurity ML Systems
  5. Educational AI Systems
  6. Intelligent Agents & Automation
- Engineering process (6 steps)
- Service packages (Starter, Professional, Enterprise)
- Case study teasers
- Multi-domain impact statement

#### Projects Page
- Filter by category (All, RAG, GenAI, Backend, Security, Research, Education)
- Grid/List view toggle
- Project cards with metrics
- Detailed case study modals including:
  - Problem statement
  - Role & responsibilities
  - Architecture overview
  - Approach & implementation
  - Evaluation & metrics
  - Reproduction steps
  - Tech stack
  - Repository/demo links

**Featured Projects**:
1. RAG Conversational Learning Assistant (19% retrieval improvement)
2. Generative LLM Workflow Engine (92% accuracy)
3. Face Recognition + Identity Reasoning (95% accuracy)
4. Malware Detection System (94% detection rate)
5. Network Traffic Analysis (91% anomaly detection)
6. Indian Regional Language Translator (BLEU 38.5)
7. Autonomous AI Calling Agent (89% intent accuracy)
8. AI Breakup Agent (Mental Health Support)

#### Contact Page
- Contact information cards (Email, Phone, LinkedIn, GitHub, Portfolio)
- Structured contact form with fields:
  - Name, Email
  - Project Type dropdown
  - Budget Range dropdown
  - Timeline dropdown
  - Message textarea
- Submit to `/api/contact` endpoint
- Success confirmation UI
- "What I Can Help You With" section (6 categories)
- Achievements & certifications display
- Final CTA with response time note

## 🎯 Design Principles

### Zero Animation Rule
- **NO** transitions
- **NO** CSS animations
- **NO** JavaScript motion
- **NO** keyframes
- Only **instant state changes** (open/close, toggle)

### Accessibility
- Keyboard navigation support
- ARIA labels on all interactive elements
- Focus outlines (enhanced in High Contrast mode)
- Screen reader compatible
- Keyboard shortcut for chatbot (`Ctrl/Cmd + K`)

### Glassmorphism
All glass panels use:
```css
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.12);
backdrop-filter: blur(14px);
border-radius: 16-20px;
```

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Mobile: Single column layouts, full-width chat modal, hamburger menu
- Desktop: Multi-column grids, fixed chat window, horizontal navigation

## 📊 Data Structure

### Personal Information
```typescript
{
  name: "Saumik Chakraborty",
  title: "AI Engineer Specializing in GenAI, LLM Workflows & Intelligent Automation",
  email: "saumik17rkl@gmail.com",
  phone: "+91-96682-92738",
  linkedin: "linkedin.com/in/saumik-chakraborty-51a499257",
  github: "github.com/Saumik17rkl",
  portfolio: "saumikportfolio-nine.vercel.app"
}
```

### Skills Categories
- **AI/ML**: 13 skills (Generative AI, LLM Workflows, RAG, Prompt Engineering, etc.)
- **Backend**: 8 skills (Python, Flask, FastAPI, APIs, Microservices, etc.)
- **Cybersecurity**: 6 skills (Anomaly Detection, Malware Detection, etc.)
- **Tools**: 6 skills (Git, Docker, GitHub Actions, etc.)
- **ML/Data**: 6 skills (NumPy, Pandas, TensorFlow, PyTorch, etc.)
- **Applications**: 6 skills (Chatbot Design, Workflow Engines, etc.)

### Projects
8 detailed case studies with:
- Title, slug, summary, description
- Problem statement
- Role & responsibilities
- Tech stack (array)
- Category tags
- Metrics (label + value)
- Architecture description
- Approach & implementation details
- Evaluation & results
- Reproduction steps (array)
- Repository/demo links

## 🛠️ Technical Stack

### Frontend
- React 18+
- TypeScript
- Tailwind CSS v4.0
- Lucide React (icons)
- ShadCN UI components

### Backend Integration Points
- `/api/chat` - POST endpoint for AI chatbot (Grok API)
- `/api/contact` - POST endpoint for contact form submissions

### State Management
- React useState hooks
- localStorage for user preferences

### File Structure
```
/
├── App.tsx                          # Main application entry
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx           # Top navigation bar
│   │   ├── ScreenControls.tsx       # Accessibility controls panel
│   │   ├── ChatBot.tsx              # Right-edge AI chatbot
│   │   └── Footer.tsx               # Site footer
│   ├── pages/
│   │   ├── HomePage.tsx             # Landing page
│   │   ├── AboutPage.tsx            # About page
│   │   ├── ServicesPage.tsx         # Services page
│   │   ├── ProjectsPage.tsx         # Projects/case studies
│   │   └── ContactPage.tsx          # Contact page
│   └── ui/                          # ShadCN components (pre-existing)
├── data/
│   └── portfolio-data.ts            # All content data
├── styles/
│   └── globals.css                  # Global styles & CSS variables
└── README.md                        # This file
```

## 🎨 Color Palette

```css
/* Primary Colors */
--bg-primary: #0A0F14;
--bg-secondary: #0D1218;
--text-primary: #E8F0F8;
--text-secondary: #A8B4C0;
--text-muted: #6B7685;
--accent-cyan: #00E6FF;
--accent-blue: #0077FF;

/* Glass Surface */
--glass-bg: rgba(255, 255, 255, 0.05);
--glass-border: rgba(255, 255, 255, 0.12);
--glass-hover: rgba(255, 255, 255, 0.08);

/* Gradient Button */
background: linear-gradient(135deg, #00E6FF 0%, #0077FF 100%);
```

## 📱 Responsive Behavior

### Mobile (< 768px)
- Single column layouts
- Stacked navigation menu
- Full-width chat modal
- Reduced padding
- Simplified timeline layouts

### Tablet (768px - 1024px)
- 2-column grids
- Horizontal navigation
- Adjusted chat window size
- Balanced spacing

### Desktop (> 1024px)
- Multi-column grids (2-3 columns)
- Fixed navigation bar
- Right-edge chat bubble
- Full spacing and padding
- Alternating timeline layout

## 🔐 Backend API Requirements

### Chat Endpoint: `/api/chat`
**Request**:
```json
{
  "session_id": "string",
  "message": "string",
  "history": [
    { "role": "user|bot", "content": "string" }
  ]
}
```

**Response**:
```json
{
  "reply": "string"
}
```

**Implementation**: Connect to Grok API (xAI) for responses

### Contact Endpoint: `/api/contact`
**Request**:
```json
{
  "name": "string",
  "email": "string",
  "projectType": "string",
  "budget": "string",
  "timeline": "string",
  "message": "string"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Message received"
}
```

**Implementation**: Email notification via SMTP or service like SendGrid

## ✅ Accessibility Checklist

- [x] Keyboard navigation for all interactive elements
- [x] ARIA labels on buttons and links
- [x] Focus indicators (enhanced in High Contrast mode)
- [x] Screen reader compatible structure
- [x] Semantic HTML elements
- [x] Alt text for images (ImageWithFallback component)
- [x] Form labels properly associated
- [x] Keyboard shortcut for chatbot (Ctrl/Cmd + K)
- [x] High contrast mode toggle
- [x] Adjustable font sizes
- [x] Mobile-responsive touch targets (min 44×44px)

## 🎯 Key Metrics & Achievements

From resume sources:
- **🏆 2nd Runner-Up** — Infosys Global Hackathon 2025
- **19% retrieval error reduction** in RAG systems
- **95% accuracy** in face recognition
- **14% improvement** in explanation alignment (XAI)
- **92% workflow accuracy** in LLM engines
- **94% detection rate** in malware detection
- **91% accuracy** in network anomaly detection
- **BLEU 38.5** for language translation

## 🚀 Deployment

### Build
```bash
npm run build
```

### Environment Variables
```
VITE_API_BASE_URL=https://your-backend-api.com
```

### Recommended Platforms
- Vercel (Frontend)
- Render / Railway (Backend)
- Netlify (Frontend alternative)

## 📄 Resume Download

Resume file should be placed at:
```
/public/resume/Saumik_Chakraborty_Resume_freelance.pdf
```

Or update `resumePath` in `/data/portfolio-data.ts`

## 🎨 Customization

### Changing Colors
Edit CSS variables in `/styles/globals.css`:
```css
:root {
  --accent-cyan: #00E6FF;  /* Change accent color */
  --bg-primary: #0A0F14;   /* Change background */
}
```

### Adding Projects
Edit `/data/portfolio-data.ts`:
```typescript
export const projects = [
  {
    id: "new-project",
    title: "Project Title",
    // ... other fields
  }
];
```

### Modifying Content
All text content is centralized in `/data/portfolio-data.ts` for easy updates.

## 📝 License

© 2025 Saumik Chakraborty. All rights reserved.

## 📧 Contact

- **Email**: saumik17rkl@gmail.com
- **Phone**: +91-96682-92738
- **LinkedIn**: [linkedin.com/in/saumik-chakraborty-51a499257](https://linkedin.com/in/saumik-chakraborty-51a499257)
- **GitHub**: [github.com/Saumik17rkl](https://github.com/Saumik17rkl)
- **Portfolio**: [saumikportfolio-nine.vercel.app](https://saumikportfolio-nine.vercel.app)

---

**Note**: This is a production-ready portfolio with zero animations, following strict accessibility guidelines and modern design principles. All interactions are instant state changes with no CSS/JS motion.
