# Web3Forms Setup — Collecting Client Submissions

The buyer **Requirement form** (`/requirement`) and the **Contact form**
(`/contact`) on the Infinity Exports site submit through
[Web3Forms](https://web3forms.com). Web3Forms is a free, no-backend service:
when a visitor submits the form, the details are emailed straight to your inbox
(and can optionally be forwarded to a Google Sheet, Slack, webhook, etc.).

Until you add a real access key the forms still work visually (validation,
loading and error states), but a real submission will show an **error** — and a
WhatsApp fallback button. Follow the steps below to start collecting leads.

---

## Step 1 — Get your free Web3Forms access key

1. Go to **https://web3forms.com**.
2. In the **"Create your Access Key"** box, enter the email address where you
   want to **receive submissions** (e.g. `infinityexports@gmail.com`).
3. Click **Create Access Key**.
4. Web3Forms emails that address a confirmation link — **open the email and
   click to verify**. (Check spam if you don't see it.)
5. After verifying you'll have an **Access Key** that looks like a UUID, e.g.
   `a1b2c3d4-1234-5678-9abc-de1234567890`. Copy it.

> The access key is **safe to expose publicly** — it only allows *sending* a
> form to your verified email, not reading anything. That's why the variable is
> prefixed `NEXT_PUBLIC_`.

---

## Step 2 — Add the key to Vercel (production)

1. Open your project in the **Vercel dashboard**.
2. Go to **Settings → Environment Variables**.
3. Add a new variable:
   - **Name:** `NEXT_PUBLIC_WEB3FORMS_KEY`
   - **Value:** *(paste the access key from Step 1)*
   - **Environments:** tick **Production**, **Preview**, and **Development**.
4. Click **Save**.
5. **Redeploy** so the new value is baked in: go to **Deployments → ⋯ → Redeploy**
   on the latest deployment (or push any commit). `NEXT_PUBLIC_*` variables are
   embedded at **build time**, so a redeploy is required for the key to take
   effect.

---

## Step 3 — (Optional) Run it locally

1. In the project root, copy the example file:
   ```bash
   cp .env.example .env.local
   ```
2. Edit `.env.local` and set your key:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=a1b2c3d4-1234-5678-9abc-de1234567890
   ```
3. Restart the dev server (`npm run dev`). `.env.local` is git-ignored, so your
   key is never committed.

---

## Step 4 — Test it

1. Open `/requirement` (or `/contact`) on the deployed site.
2. Fill in the required fields (Company, Country, Commodity, Email) and submit.
3. You should see the **"Requirement received"** success screen, and an email
   should arrive at your verified address within a minute or two.
4. If you get an error, double-check: the key is correct, the email was
   verified, and the site was **redeployed** after adding the variable.

---

## What gets sent

Each submission email includes the fields the buyer filled in:

| Field | Notes |
| --- | --- |
| Company Name | required |
| Country | required |
| Commodity Interested In | required (from your product list) |
| Quantity | optional |
| Destination Port | optional |
| WhatsApp | optional |
| Email | required — set as the **reply-to**, so you can reply directly |
| Incoterm | optional (FOB / CIF / etc.) |
| Message | optional free text |
| product_slug / service_slug | which page the buyer came from |

The email **subject** is `New Infinity Exports Buyer Requirement` and the
reply-to is the buyer's email, so hitting "Reply" goes straight to the client.

---

## Optional upgrades (from the Web3Forms dashboard)

- **Spam protection:** the form already includes a hidden honeypot. You can also
  enable Web3Forms' built-in spam filter / hCaptcha.
- **Google Sheets / Slack / Zapier / webhooks:** forward every submission to a
  spreadsheet or chat so leads are logged automatically.
- **Auto-responder:** send the buyer an automatic "we received your enquiry"
  email.
- **Custom from-name / redirect:** already configured in code
  (`components/RequirementForm.tsx`) — adjust there if needed.

---

## Where it lives in the code

- Form + submission logic: `components/RequirementForm.tsx`
  (posts to `https://api.web3forms.com/submit`).
- Access key is read from `process.env.NEXT_PUBLIC_WEB3FORMS_KEY`.
- Env var documented in `.env.example`.
