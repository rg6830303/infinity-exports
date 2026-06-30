# Infinity Exports — Test Credentials & Config

## Authentication
This site has **no authentication / login**. There are no user accounts, admin
panels or protected routes. No credentials are required to test any page.

## Web3Forms (Buyer Requirement Form)
- The buyer requirement form (`/requirement`, `/contact`) submits to Web3Forms.
- Access key is read from env var `NEXT_PUBLIC_WEB3FORMS_KEY`.
- Currently set to a **PLACEHOLDER** (`your-web3forms-access-key`) in `.env.local`
  and `.env.example`. The site owner will add the real key in Vercel env vars.
- ⚠️ Because the key is a placeholder, a real form submission will return an
  **error state** — this is EXPECTED until the owner sets the real key.
  The form validation, loading state, error state and WhatsApp fallback all work.

## Run / Preview
- Root Next.js 14 app (App Router). `npm install` then `npm run build` / `npm start`.
- Locally served on port 3000 (`npx next start -H 0.0.0.0 -p 3000`).
