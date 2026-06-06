# Pulse — Social Media App

A social media UI built with Tailwind CSS v4 as part of the Noroff CSS Frameworks course assignment (AUG24FT).

[Live demo: \[\]](https://pulse-social-ca.netlify.app/)

---

## What is this

Pulse is a 3-page social media interface. No backend, no real auth — just a clean frontend UI showing what I can do with Tailwind CSS v4 and vanilla JS.

---

## Pages

- **Auth page** (`/index.html`) — login and register with HTML form validation
- **Feed page** (`/feed/index.html`) — post feed with sort, create post, suggested users
- **Profile page** (`/profile/index.html`) — user profile with cover, stats, followers

---

## Tech used

- Tailwind CSS v4 (via npm, no CDN)
- Vanilla JavaScript
- Google Fonts — Inter + Sora
- Picsum Photos for placeholder images
- Pravatar for placeholder avatars

---

## Features

- Login / register tab switching
- Posts rendered from a JS array
- Sort by latest, popular, following
- Create a post — adds to feed live
- Like toggle with filled heart
- Follow / unfollow toggle
- User dropdown with profile and logout
- Mobile hamburger menu with user info
- Responsive layout — mobile and desktop

---

## Run locally

```bash
npm install
npm run dev
```

Open `index.html` with Live Server in VS Code.

Build for production:

```bash
npm run build
```

---

## Project structure

├── index.html # auth page
├── feed/
│ └── index.html # feed page
├── profile/
│ └── index.html # profile page
├── css/
│ └── style.css # tailwind input
├── js/
│ ├── main.js # shared ui logic
│ └── feed.js # feed data and rendering
├── images/
│ └── logo.webp # pulse logo
└── package.json

---

## Author

Lakhdar Hafsi — [github.com/lacdart2](https://github.com/lacdart2)
