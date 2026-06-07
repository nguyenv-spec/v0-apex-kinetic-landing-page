# Apex Kinetic — Implementation Kickstart

> **Status:** Approved for build · Frontend-only prototype
> **Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui · Geist font
> **Scope:** Single-page landing + one secondary contact page. No backend, no database, no real email capture. All data is placeholder.

---

## 1. Project Overview

A premium, high-converting landing page for **Apex Kinetic**, a sports medicine clinic targeting high-school/collegiate athletes, weekend warriors, and active adults.

The page is built around the **"Book Appointment"** CTA. Per the latest direction, the primary CTA now **opens a booking modal** (instead of scrolling to a form), and CTAs are repeated **at least 3 times** down the page to maximize conversion.

### Key Decisions (locked)
| Topic | Decision |
|---|---|
| Backend / data | **Frontend only.** No DB, no submission, no real email capture. Placeholders only. |
| Booking flow | Primary "Book Appointment" CTAs **open a modal** containing the booking widget. |
| Contact flow | "Contact Marcus" links to a **dedicated `/contact` page**. |
| Contact details | **Realistic placeholders** (Boston, MA address, phone, hours). |
| Imagery | **Generate** the Apex Kinetic logo + professional provider avatars + hero image. |
| Mobile nav | **Hamburger menu** on tablet/mobile; full nav on desktop. |
| Responsiveness | **Fully responsive** across mobile, tablet, desktop. Full-width layout. |
| Animations | **Subtle animations throughout** + smooth scroll behavior + smooth "back to top". |
| Card style | **Glassmorphism** (frosted glass) on cards. Contrast to be reviewed later. |
| Font | **Geist** (sans + mono as needed). |
| State management | **None.** Static placeholders. Built robustly for future updates. |
| File size | Keep components short (**~600 lines max**), modular, reusable. |
| SEO | **Optimized** — metadata, Open Graph, structured data. |
| CTA count | **3+ instances** of "Book Appointment" across the page. |

---

## 2. Design Tokens

### Color Palette
Energetic, premium athletic palette. (Contrast is intentionally untested for now — we'll tune after first render.)

| Token | Role | Value (approx) |
|---|---|---|
| `--background` | Deep slate gray base | `#0F172A` (slate-900) |
| `--foreground` | Crisp white typography | `#F8FAFC` (slate-50) |
| `--card` | Glass surface base | slate w/ low opacity + blur |
| `--muted` | Secondary text / borders | slate-400 / slate-700 |
| `--primary` (accent) | **Electric teal — CTA only** | `#2DD4BF` / `#14B8A6` (teal-400/500) |
| `--primary-foreground` | Text on teal | slate-950 |

> **Rule:** Electric teal is reserved **exclusively for CTA elements** and key accents. Everything else stays slate + white.

### Glassmorphism Recipe (cards)
- Semi-transparent slate background (`bg-white/5` or `bg-slate-800/40`)
- `backdrop-blur-md` to `backdrop-blur-xl`
- Hairline border (`border-white/10`)
- Soft shadow + subtle inner highlight on hover

### Typography
- **Geist Sans** — headings + body
- **Geist Mono** — stats / numeric accents (optional)
- Line height 1.4–1.6 for body; bold, large headlines for hero.

### Radius & Spacing
- `--radius`: `0.75rem` (rounded-xl feel for premium cards)
- Tailwind spacing scale only (no arbitrary values).

### Motion
- Subtle fade/slide-in on scroll (intersection-based reveals)
- Smooth `scroll-behavior` for in-page anchors + back-to-top
- Gentle hover lift/scale on cards and buttons
- Respect `prefers-reduced-motion`

---

## 3. Page Structure (in order)

### Landing Page (`/`)

1. **Sticky Navbar**
   - Apex Kinetic logo (left)
   - Desktop nav links + electric teal **"Book Appointment"** button (right) → opens modal
   - Mobile/tablet: **hamburger menu** with slide-out/sheet nav + CTA
   - Stays visible on scroll, subtle background blur on scroll

2. **Hero Section** *(CTA #1)*
   - Headline: **"Get Back in the Game. Faster."**
   - Sub-headline: advanced non-surgical orthopedic care + rapid performance recovery
   - Primary **"Book Appointment"** button → opens modal
   - Generated hero image / athletic visual

3. **The Team / Providers**
   - **Dr. Marcus Vance, MD** — Non-surgical Orthopedic Care & Concussion Management. Includes a **"Contact Marcus"** link → `/contact` page.
   - **Casey Thompson, PT, DPT** — Sports Physical Therapy & Biomechanical Running Analysis
   - Generated professional avatars, glass cards

4. **Services & Transparent Pricing** *(CTA #2 — per-card "Book This Session")*
   - Responsive grid of shadcn/ui glass Cards. Each: title, description, price, **"Book This Session"** → opens modal.
     - Initial Orthopedic Consultation (Dr. Vance) — comprehensive injury eval, diagnostic review, custom recovery plan — **$250**
     - Sports Physical Therapy Session (Casey Thompson) — 60-min 1-on-1 hands-on therapy, corrective exercise, modalities — **$150**
     - Biomechanical Running Analysis — full-body video gait analysis, pressure-mapping, footwear/technique recs — **$199**
     - Concussion Assessment & Return-to-Play — neurological screening, baseline comparisons, structured progression — **$175**
   - Trust caption: *"We accept HSA/FSA cards. Detailed superbills provided for out-of-network insurance reimbursement."*

5. **Proof of Performance**
   - **Metrics bar:** "94% Return-to-Sport Rate" · "14-Day Average Recovery Acceleration" · "1,200+ Athletes Treated"
   - **3 testimonial glass cards:**
     - Sarah T., Boston Marathon Competitor — Achilles flare / stride defect / PR in 4 weeks
     - David K., Parent of Varsity Football Player — concussion protocol precision & peace of mind
     - Marcus L., Competitive CrossFitter — non-surgical meniscus recovery, back to lifting pain-free

6. **FAQ / Objection Removal** *(CTA #3 nearby)*
   - shadcn/ui Accordion (placeholder copy, editable later):
     - Referral needed? → No, MA is direct-access
     - How does Superbill reimbursement work? → flat-rate + itemized superbill
     - Not a pro athlete — right for me? → yes, all activity levels
     - Cancellation/rescheduling policy? → modify/cancel up to 24h, no penalty
   - Repeat **"Book Appointment"** CTA below the accordion → opens modal

7. **Booking Modal** *(shared component)*
   - Triggered by every CTA. Contains the booking widget:
     - shadcn/ui Calendar (date pick)
     - Select (service / provider)
     - Inputs (Name, Email, Phone) — **placeholders, not captured/persisted**
     - **"Confirm Appointment"** button → shows a local success state only (no submission)

8. **Conversion-Focused Footer**
   - Left: logo, placeholder address (Boston, MA), operational hours
   - Middle: Privacy Policy, Terms of Service, **Medical Disclaimer** ("If this is a medical emergency, please dial 911")
   - Right: micro-CTA **"Ready to recover? Book Your Visit Now"** → opens modal
   - **Smooth "Back to Top"** control

### Contact Page (`/contact`)
- Reachable from "Contact Marcus" on the providers section.
- Provider intro (Dr. Marcus Vance), placeholder contact details, and a simple contact form (placeholder, no capture).
- Consistent navbar/footer + back link to home.

---

## 4. Component & File Plan

> Keep each file modular and ≤ ~600 lines. No global state — props + placeholders only.

```
app/
  layout.tsx              # Root layout, Geist fonts, metadata, <html> bg
  page.tsx                # Landing page composition
  contact/
    page.tsx              # Dedicated "Contact Marcus" page
components/
  navbar.tsx              # Sticky nav + hamburger sheet
  hero.tsx                # Hero + CTA #1
  providers.tsx           # Team cards + "Contact Marcus" link
  services.tsx            # Pricing grid + per-card CTA
  proof.tsx               # Metrics bar + testimonials
  faqs.tsx                # Accordion + CTA
  footer.tsx              # Footer + back-to-top + micro-CTA
  booking-modal.tsx       # Shared modal w/ calendar + form (placeholder)
  cta-button.tsx          # Reusable CTA that opens the modal
  section-reveal.tsx      # Reusable scroll-in animation wrapper
  contact-form.tsx        # Placeholder contact form (contact page)
public/
  images/                 # Generated logo, avatars, hero
```

### Reusability Notes
- `cta-button.tsx` — single source of truth for all "Book Appointment" buttons; opens the modal. Variants (size/label) via props.
- `booking-modal.tsx` — controlled by a lightweight context or simple local trigger pattern so any CTA can open it without a state library.
- `section-reveal.tsx` — wraps sections for consistent, subtle scroll animations.

---

## 5. SEO Strategy
- `metadata` export in `layout.tsx` and per-page: title, description, keywords.
- Open Graph + Twitter card tags (with generated OG image where useful).
- Semantic HTML (`header`, `main`, `section`, `footer`) + descriptive headings.
- `MedicalClinic` / `LocalBusiness` JSON-LD structured data with placeholder NAP (name, address, phone).
- Descriptive alt text on all generated images.
- `viewport` + `theme-color` set to slate background.

---

## 6. Assets to Generate
1. **Apex Kinetic logo** — modern, athletic, works on dark slate.
2. **Dr. Marcus Vance** — professional headshot avatar.
3. **Casey Thompson** — professional headshot avatar.
4. **Hero image** — energetic sports-medicine/athletic visual.
5. (Optional) **OG image** for social sharing.

---

## 7. Accessibility & QA
- Keyboard-navigable nav, modal, and accordion (focus trap in modal, ESC to close).
- ARIA labels on icon-only controls (hamburger, back-to-top).
- `prefers-reduced-motion` fallbacks for animations.
- Visible focus states on CTAs.
- Browser verification of primary flows (CTA → modal, providers → contact page, back-to-top) after build.

---

## 8. Out of Scope (for now)
- Real booking submission / database / email capture
- Authentication
- Analytics / conversion tracking
- Final FAQ copy (placeholders for now, editable later)
- Verified color-contrast pass (to be reviewed after first render)
