# Auto README Generator

A full-stack web application that generates professional README files in **15 languages** with a single button click. Built on a React + Chakra UI frontend and an Express backend, it is embedded as a feature inside a Product Store app.

---

## Overview

Users fill in basic project details — name, description, optional features, tech stack, repository URL, and license — then choose one of three generation modes and hit **Generate README**. The backend assembles a structured Markdown document using native-language section headings and returns it as JSON (or as a raw `.md` file download). Generated files can be previewed in-browser, copied to clipboard, or downloaded individually and in bulk.

---

## Features

- One-click README generation in any of 15 supported languages
- Three generation modes: single language, multiple languages (bulk), or all 15 at once
- Copy-to-clipboard and individual file download for every generated README
- "Download All" button for bulk and all-languages modes
- RTL text direction support (Arabic)
- Live character count and line count per generated file
- Light / dark mode support via Chakra UI color mode
- Backend starts and serves the README API even when the MongoDB connection is unavailable
- Browser-friendly convenience endpoint for raw Markdown downloads via GET requests

---

## Supported Languages

| Code | Language               | Direction |
|------|------------------------|-----------|
| `en` | English                | LTR       |
| `es` | Spanish (Español)      | LTR       |
| `fr` | French (Français)      | LTR       |
| `de` | German (Deutsch)       | LTR       |
| `zh` | Chinese Simplified     | LTR       |
| `ja` | Japanese (日本語)      | LTR       |
| `pt` | Portuguese (Português) | LTR       |
| `hi` | Hindi (हिन्दी)         | LTR       |
| `ar` | Arabic (العربية)       | RTL       |
| `ru` | Russian (Русский)      | LTR       |
| `ko` | Korean (한국어)        | LTR       |
| `it` | Italian (Italiano)     | LTR       |
| `nl` | Dutch (Nederlands)     | LTR       |
| `tr` | Turkish (Türkçe)       | LTR       |
| `pl` | Polish (Polski)        | LTR       |

---

## Tech Stack

- **Frontend:** React 18, Chakra UI, React Router, Vite
- **Backend:** Node.js, Express, ES Modules
- **Database:** MongoDB via Mongoose (product routes only; README API is DB-free)
- **Build tool:** Vite

---

## Project Structure

```
/
├── frontend/
│   └── src/
│       ├── components/
│       │   └── Navbar.jsx          # Added "README" nav button
│       ├── pages/
│       │   └── ReadmePage.jsx      # New — full README generator UI
│       └── App.jsx                 # Added /readme route
├── backend/
│   ├── controllers/
│   │   └── readme.controller.js    # README builder + 4 controller exports
│   ├── routes/
│   │   └── readme.route.js         # 5 API routes for README generation
│   └── server.js                   # Modified — server starts before DB connects
└── README.md
```

---

## API Reference

All endpoints are prefixed with `/api/readme`.

### `GET /api/readme/languages`
Returns the list of all supported language codes, names, and text direction.

**Response:**
```json
{
  "count": 15,
  "languages": [
    { "code": "en", "name": "English", "direction": "ltr" },
    ...
  ]
}
```

---

### `POST /api/readme/generate`
Generates a README in one selected language.

**Request body:**
```json
{
  "language": "fr",
  "name": "My App",
  "description": "A cool project.",
  "features": "Fast, Lightweight, Open source",
  "techStack": "React, Node.js, MongoDB",
  "repoUrl": "https://github.com/user/my-app",
  "license": "MIT"
}
```

Required: `name`, `description`. All other fields are optional.

**Response:**
```json
{
  "success": true,
  "language": { "code": "fr", "name": "French (Français)", "direction": "ltr" },
  "filename": "README.fr.md",
  "content": "# My App\n\n## Présentation\n...",
  "characterCount": 512,
  "lineCount": 30
}
```

Add `"format": "raw"` to the body to receive a raw Markdown file download instead.

---

### `POST /api/readme/generate/bulk`
Generates README in multiple selected languages simultaneously.

**Request body:**
```json
{
  "languages": ["en", "es", "de"],
  "name": "My App",
  "description": "A cool project."
}
```

**Response:**
```json
{
  "success": true,
  "requested": 3,
  "generated": 3,
  "failed": 0,
  "results": [ ... ]
}
```

---

### `POST /api/readme/generate/all`
Generates README in all 15 supported languages at once.

**Request body:** same as single generate (omit `language`).

**Response:**
```json
{
  "success": true,
  "count": 15,
  "readmes": [ ... ]
}
```

---

### `GET /api/readme/generate/:language`
Browser-friendly convenience endpoint. Returns a raw Markdown file download for the given language. Accepts optional query parameters: `name`, `description`, `features` (CSV), `techStack` (CSV), `repoUrl`, `license`.

**Example:**
```
GET /api/readme/generate/fr?name=MyApp&description=A+cool+app&techStack=React,Node.js
```

---

## Installation

```bash
git clone https://github.com/krishna2700/agent-trial
cd agent-trial
npm install
```

Install frontend dependencies and build:

```bash
cd frontend
npm install
npx vite build
cd ..
```

---

## Running the App

**Development (frontend only):**
```bash
cd frontend
npm run dev
```

**Production (full stack):**
```bash
NODE_ENV=production node backend/server.js
```

The server runs on port `5000` by default (configurable via `PORT` environment variable). In production mode it serves the built frontend from `frontend/dist/` and proxies all `/api/*` requests to the Express backend.

---

## Environment Variables

Create a `.env` file in the project root:

```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/dbname
PORT=5000
NODE_ENV=production
```

The README generation API works without a MongoDB connection. Only the product CRUD routes require the database.

---

## Usage

1. Navigate to `/readme` in the app (or click the **README** button in the navbar).
2. Fill in your project name and description (required).
3. Optionally add features, tech stack, repository URL, and choose a license.
4. Select a generation mode:
   - **Single Language** — pick one language from the dropdown.
   - **Multiple Languages** — check any combination of the 15 languages.
   - **All 15 Languages** — generates every language in one request.
5. Click **Generate README**.
6. Preview each generated file, copy it to clipboard, or download it as a `.md` file.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License.
