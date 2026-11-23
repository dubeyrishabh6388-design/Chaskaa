# Chaskaa — Complete Web Platform

React + Vite + Tailwind implementation built from the uploaded screenshots/blueprints. Same wine-maroon and warm-red theme across all three workspaces. **No rider module is included.**

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:5173** — a portal links to a single unified login page (`/login`). On that page, click the big demo ID button (unlocks all workspaces) or any role card to enter instantly. Manual sign-in works too: select account type → any email/password → MFA code `123456`. Direct URLs without a session redirect to `/login?next=...`.

A portal links to all three apps:

| Workspace | URL | What it covers |
| --- | --- | --- |
| Admin Console | `/dashboard` | Dashboard, vendors, users, tiffin, orders, subscriptions, payments, marketing, support, reports, roles, settings |
| Customer App | `/customer` | Login/OTP, home, tiffin plans + detail, restaurants + menu, cart, checkout, order success, tracking, orders, subscriptions, wallet, profile |
| Merchant Panel | `/vendor` | Dashboard, live order board, tiffin operations, menu manager, offers, earnings/settlements, ratings/reviews, staff/support, outlet settings |

`/customer/login` also redirects to the unified `/login?role=customer`. A shared `LogoutButton` puts a clean sign-out control in the header, sidebar and footer of every page in all three workspaces (responsive: icon on mobile, labelled on larger screens).

## Theme

Deep wine sidebar (`#51010e` base → `#730216` top), crimson primary (`#b00528`), orange→crimson active nav pill (`#fc5e1d → #c2223a`), and light `#fef5f8` surfaces - all sampled from the reference dashboard and defined in `tailwind.config.js` and `src/index.css`, shared by all three workspaces.

All three workspaces use a **full-width desktop shell** (no centered `max-w-*` cap). Sidebars occupy their fixed rail and the remaining viewport width is used entirely by content; padding scales up on `lg`/`2xl` and mobile stays edge-to-edge with no horizontal overflow. Product imagery is local in `public/img`, with exact source titles recorded in `public/img/SOURCES.md`.

## Notes

- All data is realistic mock data in `src/data/mockData.js` and `src/data/customerData.js`.
- `src/store/AppContext.jsx` holds client-side actions and persists edits in localStorage.
- This is the admin/customer/merchant web platform from the blueprints; the rider app screens were intentionally excluded.

## Production build

```bash
npm run build
npm run preview
```
