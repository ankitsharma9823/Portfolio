# Portfolio Website

This repository contains a modern personal portfolio website built for showcasing professional skills, projects, experience, services, and contact details.

## Overview

The site presents a branded landing experience with animated hero sections, an about section, project previews, experience highlights, services, and a contact form. It is designed to emphasize polished visual presentation, fast performance, and interactive UI behaviors.

## What It Showcases

- Personal introduction with animated hero experience
- Professional summary and about section
- Featured projects with interactive previews and detailed project pages
- Experience and service offerings
- Contact section with direct messaging and social links

## Key Features

- Animated loading intro and hero interactions
- Responsive layout optimized for desktop and mobile
- Section-based portfolio structure (Hero, About, Projects, Experience, Services, Contact)
- Project carousel and category browsing interface
- Contact form handling via Next.js action
- Downloadable resume support
- Dark/light theme support through theme provider

## Technology Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- Framer Motion
- GSAP
- Radix UI and shadcn/ui components
- Lucide icons, React Icons, and Phosphor icons
- Lottie animations

## Project Structure

- `app/page.tsx` - main landing page and section composition
- `app/layout.tsx` - application shell and metadata
- `app/actions/sendEmail.ts` - contact form action handler
- `app/projects/[id]/page.tsx` - individual project detail pages
- `components/section/` - portfolio sections for Hero, About, Projects, Experience, Services, Contact
- `components/ui/` - shared UI primitives, buttons, cards, dropdowns, navigation
- `public/` - static assets such as images, resume PDF, and media

## Running Locally

Install dependencies and start the Next.js development server:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Notes

- The portfolio is intended as a visual and functional presentation of a developer profile.
- Project detail pages are generated for each featured project in the `app/projects/[id]` route.
- The repository is focused on the front-end portfolio experience and includes real project showcase data.
