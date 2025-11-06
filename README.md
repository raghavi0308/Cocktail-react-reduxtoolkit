# Cocktail Catalog (React + Redux Toolkit)

A responsive cocktail catalog that lets you search drinks, browse results in a modern card grid, and view detailed pages with images, tags, and meta info. Built with React, React Router, and Redux Toolkit.

## Features
- Search cocktails with a clean, debounced input
- Browse results as polished cards with hover effects
- Cocktail detail page with image, ingredients, and tags
- Helpful content pages: About, Contact, Help (accordion)
- Sticky footer and refined theme

## Tech Stack
- React 17, React Router 6
- Redux Toolkit (@reduxjs/toolkit) + React Redux
- Bootstrap 5 utilities + custom CSS
- Create React App tooling

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open `http://localhost:3000` in your browser.

## Scripts
- `npm start` – Run the dev server
- `npm run build` – Create a production build in `build/`
- `npm test` – Run tests

## Project Structure
```
src/
  Components/
    Header.js
    Footer.js
    Layout.js
    SearchBox.js
    shared/SpinnerAnim.js
  Pages/
    HomePage.js
    ProductDetails.js
    About.js
    Contact.js
    Help.js
  Redux/
    store.js
    features/
      cocktailSlice.js
  index.css
  index.js
```

## Styling and UX
- Global styles in `src/index.css`
- Sticky footer via flex layout (`app-shell` + `.content`)
- Subtle hover, focus, and elevation effects

## Icons & PWA
- Favicon: `public/images/favicon.jpg`
- Apple touch: `public/logo192.png`
- High‑res: `public/logo512.png`

## Notes
- Ensure network/API access for cocktail data if your slice fetches from an external API.
- If the favicon appears unchanged, hard refresh (Ctrl+F5) or clear site cache.

## Contributing
Issues and PRs are welcome. Please open an issue first to discuss significant changes.

## License
This project is provided as‑is under an open license of your choice (add one if needed).
