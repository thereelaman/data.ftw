# Project Title

This is a Next.js project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview

This project is a web application that displays data on a map. It's built with Next.js and uses a variety of modern web technologies.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **UI Components:** [Shadcn/ui](https://ui.shadcn.com/)
*   **Map:** [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/)
*   **Fuzzy Search:** [Fuse.js](https://fusejs.io/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Linting:** [ESLint](https://eslint.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)

## Folder Structure

The project uses the Next.js App Router with the following structure:

*   `/src/app/`: Contains the application's routes.
    *   `layout.tsx`: The root layout.
    *   `page.tsx`: The home page with a global map.
    *   `[dataCategory]/[country]/page.tsx`: Dynamic route for country-level data.
    *   `[dataCategory]/[country]/[state]/page.tsx`: Dynamic route for state-level data.
    *   `[dataCategory]/[country]/[state]/[city]/page.tsx`: Dynamic route for city-level data.
*   `/src/components/`: Contains reusable React components.
    *   `NavBar.tsx`: The main navigation bar.
    *   `MapComponent.tsx`: A dynamically imported Leaflet map component.
    *   `Dashboard.tsx`: A placeholder for a stats table/chart.
    *   `Footer.tsx`: The application footer.
*   `/src/lib/`: Contains utility functions.
*   `/public/`: Contains static assets.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.
