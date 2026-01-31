# Premier Schools Exhibition - Frontend Assignment

## 👤 Developer Information
* **Name:** Akhil Kumar Rotta
* **LinkedIn:** [Akhil Kumar Rotta | LinkedIn](https://www.linkedin.com/in/akhil-kumar-rotta/)

---

## 🚀 Project Overview
This project is a high-performance, accessible, and responsive landing page for the **Premier Schools Exhibition**. Developed as part of a technical assessment, the solution demonstrates advanced UI engineering—including dual-axis sliders and infinite loops—using **Vanilla JS** and **Modern CSS**, strictly adhering to a "no-frameworks" constraint.

---

## 🛠 Tech Stack & Methodology
* **HTML5:** Utilizes semantic elements (`<header>`, `<main>`, `<section>`, `<footer>`) to ensure a clear document outline for SEO and screen readers.
* **CSS3 (BEM):** Employs the **Block Element Modifier** naming convention to ensure styles are modular, reusable, and free from specificity conflicts.
* **JavaScript (ES6+):** Leverages modular Vanilla JS for state management (sticky nav, slider synchronization) and DOM manipulation without the overhead of external libraries.

---

## 🌟 Key Features & Technical Implementation

### 1. Hero Section: Dual-Axis Dynamic Slider
* **Visual Logic:** Orchestrated a synchronized multi-column animation where adjacent columns move in opposing vertical directions (Up/Down) to create a high-end "infinite" feel.
* **Control Systems:** Integrated auto-play with smart `pause-on-hover` listeners to prevent content from moving while a user is attempting to interact.
* **Mobile Adaptation:** Automatically pivots from a vertical column flow to a horizontal "Sling" row flow on smaller viewports to maintain visual impact.

### 2. Participating Schools: "Sling" Logo Animation
* **Continuous Flow:** Developed alternating infinite loops (Row 1: Left-to-Right | Row 2: Right-to-Left) to maintain visual balance and engage the user.
* **GPU Acceleration:** Animations are powered by `transform: translateX()` rather than layout-triggering properties (like `left`), ensuring silky-smooth 60FPS performance on mobile devices.

### 3. "Choose Your School": Hybrid Grid-Slider
* **Responsive Architecture:** On desktop, a rigid 4-column grid provides instant information access.
* **Mobile UX:** At the `768px` breakpoint, the grid transitions into a horizontal slider using CSS **Scroll Snap** for native-feeling touch gestures.
* **Dot Navigation:** A custom JS observer synchronizes pagination dots in real-time as the user swipes through cards.

### 4. Exhibition Highlights & UI Geometry
* **Advanced Styling:** Implemented a unique section-wide curved background using the `clip-path: ellipse()` property to break standard "boxy" web patterns.
* **Interactive Slider:** Cards maintain a consistent height using Flexbox, with manual arrow controls that calculate precise scroll distances dynamically via JavaScript.

### 5. Accessibility & QA (WCAG 2.2 AA Standard)
* **Keyboard Interactivity:** All interactive triggers (buttons, dots) include focus states and are fully operable via the `Tab` and `Enter` keys.
* **Skip-to-Content:** A hidden anchor at the top of the document allows screen reader users to bypass the navigation and jump straight to the main content.
* **Motion Sensitivity:** Integrated `prefers-reduced-motion` media queries to automatically disable or slow down animations for users with vestibular sensitivities.

---

## 📂 Project Architecture
```text
├── index.html      # Optimized markup with ARIA landmarks & SEO meta tags
├── style.css       # Modular CSS with BEM logic, Variables, and Keyframes
├── script.js       # Centralized JS logic (Sticky Nav, Sliders, Dots)
└── images/         # Optimized assets for fast Largest Contentful Paint (LCP)