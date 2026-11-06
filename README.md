# Ankit Sharma — Portfolio

Professional portfolio site showcasing projects, experience, services, and a contact form. Built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**.

**Live:** [ankitsharma9823.github.io/Portfolio](https://ankitsharma9823.github.io/Portfolio) · **Repo:** [github.com/ankitsharma9823/Portfolio](https://github.com/ankitsharma9823/Portfolio)

---

## Features

- **Cinematic intro** — iris open/close, staggered letter reveal, social links, scroll locked until exit
- **Hero** — word-mask headline, GSAP entrance, mouse parallax, hover micro-interactions
- **Sections** — About, Projects (with detail pages), Experience timeline, Services, Contact
- **Design system** — centralized typography (Roboto Delta) and color tokens (Royal Amethyst × Neon Violet, 60-30-10)
- **Dark / light theme** — `next-themes`, system preference aware
- **Contact form** — Next.js Server Action + Resend, toast feedback
- **Responsive** — mobile-first layout, floating bottom nav
- **Accessible** — semantic HTML, focus states, reduced-motion friendly patterns

## Tech Stack

| Layer | Choices |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 4, shadcn/ui, Radix UI |
| Animation | GSAP, Framer Motion |
| Icons | Lucide, React Icons, Phosphor |
| Email | Resend (Server Actions) |
| Theming | next-themes |

## Project Structure

```
app/
  layout.tsx           # Shell, fonts, theme, navbar/footer
  page.tsx             # Landing page + intro
  fonts.ts             # Roboto Delta (local)
  globals.css          # Typography + color centers
  actions/sendEmail.ts # Contact Server Action
  projects/[id]/       # Project detail routes
components/
  section/             # Hero, About, Projects, Experience, Services, Contact
  Navbar.tsx           # Floating section nav
  Footer.tsx
  ui/                  # shadcn primitives
public/                # Images, resume PDF
```

## Getting Started

```bash
# Install
npm install

# Dev
npm run dev

# Production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create `.env` (or `.env.local`) for the contact form:

```bash
RESEND_API_KEY=re_xxxxxxxx
```

Without the key the site still runs; form submissions return a friendly configuration error instead of crashing.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Design Notes

- **Typography:** single family, body ≥ 16px, line-height 1.5–1.6, measure ~66ch, left-aligned
- **Color:** 60% violet-tinted neutrals · 30% Royal Amethyst (`brand-*`) · 10% Neon Violet (`neon-*`); edit tokens in `app/globals.css`
- **Motion:** intro uses clip-path iris exit; hero uses GSAP timeline + parallax

## Author

**Ankit Sharma** — Frontend & Full-Stack Engineer

- GitHub: [ankitsharma9823](https://github.com/ankitsharma9823)
- LinkedIn: [ankit-sharma-1aa523386](https://www.linkedin.com/in/ankit-sharma-1aa523386/)

## License

MIT — free to use with attribution.
