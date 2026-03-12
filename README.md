This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Enquiry Form Email Setup

Both enquiry forms (`Quick Enquiry` modal and `/contact` page) now send real emails using EmailJS.

1. Create `.env.local` from `.env.example` and fill these values:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_ENQUIRY_RECEIVER_EMAIL` (default: `arumugarajap007@gmail.com`)
2. In EmailJS, configure your template with these variables:
   - `to_email`
   - `from_name`
   - `from_email`
   - `reply_to`
   - `phone`
   - `inquiry_type`
   - `subject`
   - `message`
   - `source`
   - `submitted_at`
3. Start app: `npm run dev` and submit the enquiry form.

## YouTube Shorts Fetch Setup

The home page YouTube section fetches latest shorts from `@greenhomesproperty`
using a Next.js API route at `/api/youtube/shorts`.

1. Add these env vars:
   - `YOUTUBE_API_KEY`
   - `YOUTUBE_CHANNEL_HANDLE=greenhomesproperty`
   - `YOUTUBE_CHANNEL_ID` (optional override)
2. Restart dev server after updating env.
3. For Vercel, add the same variables in Project Settings -> Environment Variables.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
