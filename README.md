# To-Do App — Frontend

React UI for a full-stack to-do list app: register, log in, and manage your
own tasks.

**Live app:** https://to-do-app-frontend-green.vercel.app/
**Backend repo:** https://github.com/deepakdevfile/ToDo-App-Backend
**Backend API:** https://todo-app-backend-1jmk.onrender.com

> The backend is on Render's free tier, so the very first request after a
> period of inactivity can take 20–30 seconds to wake up.

## Tech stack

- **React** (via **Vite**)
- **ESLint** for linting
- Talks to the backend over a REST API using `fetch`
<!-- Swap in axios here if that's what you used -->

## Features

- User registration and login (JWT-based auth against the backend)
- Create, view, update, and delete tasks
- Only the logged-in user's own tasks are shown

## Project structure

```
.
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level views (Login, Register, Todos)
│   └── main.jsx        # App entry point
├── index.html
└── vite.config.js
```
<!-- Adjust this tree to match your actual /src layout -->

## Getting started locally

```bash
git clone https://github.com/deepakdevfile/ToDo-App-Frontend.git
cd ToDo-App-Frontend
npm install
cp .env.example .env   # set VITE_API_URL, see below
npm run dev
```

Opens at `http://localhost:5173` by default.

## Environment variables

Create a `.env` file in the project root with:

| Variable        | Description                                  |
|------------------|-----------------------------------------------|
| `VITE_API_URL`   | Base URL of the backend API (e.g. `http://localhost:5000` locally, or the Render URL in production) |

## Build

```bash
npm run build
```

Outputs a production build to `dist/`.

## Deployment

Deployed on [Vercel](https://vercel.com). The `VITE_API_URL` environment
variable is set in the Vercel project settings to point at the deployed
backend.

## License

MIT