# Ashvani Singh — Premium Developer Portfolio Website

[![GitHub](https://img.shields.io/badge/GitHub-Ashvani6858-181717?style=flat&logo=github)](https://github.com/Ashvani6858)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ashvani_Singh-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/ashvani-singh-334a0a296/)
[![LeetCode](https://img.shields.io/badge/LeetCode-Ashvani6858-FFA116?style=flat&logo=leetcode)](https://leetcode.com/u/Ashvani6858/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A world-class, modern, and visually impressive personal developer portfolio website for **Ashvani Singh** (Full Stack Developer). Built with React 19, Vite, Tailwind CSS v4, Lucide Icons, and Web Audio API synthesizer.

---

## 👤 Profile & Academic Details

- **Name:** Ashvani Singh
- **Role:** Full Stack Developer
- **Education:** B.Tech in Artificial Intelligence & Data Science (AIDS), 2027 Batch
- **College:** G.L. Bajaj Institute of Technology & Management (CGPA: 7.6 / 10)
- **Hometown / Location:** Gorakhpur, Uttar Pradesh, India
- **Email:** [ashvanisingh930@gmail.com](mailto:ashvanisingh930@gmail.com)
- **Phone:** +91 6306426858
- **GitHub:** [https://github.com/Ashvani6858](https://github.com/Ashvani6858)
- **Repository:** [https://github.com/Ashvani6858/Ashvani-Portfolio](https://github.com/Ashvani6858/Ashvani-Portfolio)

---

## ⚡ Key Highlights & Features

1. **Professional Photo Integration**:
   - High-resolution professional photograph integrated in the Hero section, About section, and 3D Developer Card.
   - Preserves aspect ratio, responsive cropping, and neon-green obsidian framing.

2. **3D Holographic Developer Card ("Tilt or drag it · tap to flip")**:
   - Responds to mouse coordinates with real-time 3D perspective tilt ($\pm 12^\circ$) and a dynamic holographic glare reflection.
   - Click to flip between Front (Verified Developer ID, 7.6 CGPA, production stats, core tags) and Back (G.L. Bajaj AIDS 2027 Batch academic credentials, cryptographic verification seal).

3. **Interactive Domain Vaults ("My Craft, One Door Per Domain")**:
   - **Door 01**: Enterprise Java & Backend (Spring Boot, Multithreading, Clean OOP, REST APIs)
   - **Door 02**: Modern Full-Stack & UI (React.js, Responsive SPAs, State Management)
   - **Door 03**: Databases, ORM & Security (MySQL, PostgreSQL, Prisma ORM, JWT, bcrypt, RBAC)
   - **Door 04**: Core CS & Cloud DevOps (Data Structures, Algorithms, DBMS, Render, Aiven, Git)

4. **Featured Projects with Live Interactive Sandboxes**:
   - **PARKEASE** (Full-Stack Smart Parking Management & Booking Platform):
     - Complete feature breakdown (JWT auth, bcrypt, vehicle registration, slot booking, admin revenue & occupancy tracking).
     - **Live Interactive Sandbox**: Select a slot (A-01 to A-08), pick duration, calculate live demo pricing, and click to generate a real dynamic SVG QR-based digital ticket!
     - **Admin Radar Mode**: Test the physical gate scanner simulation and observe atomic double-booking prevention.
     - Inspect real Prisma transaction overlap logic.
   - **MEDIMATRIX** (Hospital Service Management System):
     - Complete architecture breakdown (React.js, Spring Boot, PostgreSQL, Spring Security, JWT).
     - **Live OPD Queue Sandbox**: Test patient admission, doctor scheduling across Cardiology, Neurology, and Orthopedics, and watch live queue updates.
     - **Spring Boot REST API Console**: Test simulated endpoints (`GET /api/v1/patients/queue/live`, `GET /api/v1/doctors/availability`, `GET /api/v1/auth/jwt-claims`) with live latency and JSON viewers.

5. **Honest, High-Impact Skills Matrix (Zero Fake Percentages)**:
   - Categorized into: Programming Languages, Backend, Frontend, Databases, Security, Testing, Core CS Concepts, Tools & Cloud.
   - Each skill highlights its real-world architectural role in production systems.
   - Instant search and category filter.

6. **EmailJS & Direct Gmail Contact Form**:
   - Send messages directly to `ashvanisingh930@gmail.com`.
   - Supports EmailJS configuration with loading states, error handling, and a direct `mailto:` fallback.
   - 1-Click Copy with Confetti & Toast for Email and Phone.

7. **Power-User Utilities**:
   - **Command Palette (`Ctrl+K` / `⌘K`)**: Instant fuzzy keyboard navigation.
   - **Customizable GitHub URL**: In-app modal to update and test GitHub links.
   - **Printable Resume Modal**: Formatted one-page resume view with "Print / Save as PDF".
   - **Synthesizer Sound Effects**: Browser-native Web Audio micro-interactions with mute toggle.
   - **Live IST Clock**: Indian Standard Time clock (`UTC+5:30`) updating in real-time.

---

## 🛠️ Local Development & Quick Start

```bash
# Clone the repository
git clone https://github.com/Ashvani6858/Ashvani-Portfolio.git
cd Ashvani-Portfolio

# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## ✉️ EmailJS Setup (Optional)

If you wish to receive messages directly in your inbox without opening the user's default email client, configure EmailJS:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Create an Email Service (connect your Gmail `ashvanisingh930@gmail.com`).
3. Create an Email Template with fields: `{{from_name}}`, `{{reply_to}}`, `{{subject}}`, `{{message}}`.
4. Copy your Service ID, Template ID, and Public Key into a `.env.local` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

*(If these variables are not provided, the contact form automatically falls back to drafting an email directly in the user's default Gmail client so no message is ever missed).*

---

## 🚀 Vercel Deployment Guide

Deploying this portfolio to [Vercel](https://vercel.com/) takes less than 2 minutes:

1. Push this repository to your GitHub account: `https://github.com/Ashvani6858/Ashvani-Portfolio`.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"** -> **"Import Git Repository"**.
3. Select `Ashvani-Portfolio`.
4. Vercel will automatically detect **Vite**:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. *(Optional)* Under **Environment Variables**, add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. Click **"Deploy"**. Your portfolio will be live worldwide on a global edge CDN with automatic SSL!

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
