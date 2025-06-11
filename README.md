<p align="center">
  <img src="https://raw.githubusercontent.com/your-username/mentora/main/public/logo.png" alt="Mentora Logo" width="120" />
</p>

<h1 align="center">Converso</h1>
<p align="center">
  <b>AI-powered companion platform built with Next.js, Clerk, and Supabase</b>
</p>
<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-documentation">Documentation</a> •
  <a href="#-contributing">Contributing</a> •
  <a href="#-license">License</a>
</p>

---

## 🚀 Features

- ⚡ **Next.js App Router** — Modern routing and server components.
- 🔒 **Clerk Authentication** — Secure, robust user management.
- 🟢 **Supabase Integration** — Real-time database and storage.
- 🛡️ **TypeScript** — Type-safe, reliable codebase.
- 🧩 **Server Actions** — Efficient backend logic, no extra endpoints.
- 🎨 **Modern UI** — Built with React, Tailwind CSS, and accessible components.

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mentora.git
cd mentora
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file at the root and add your credentials:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Set Up Clerk

Install Clerk SDK:

```bash
npm install @clerk/nextjs@latest
```

Add `middleware.ts` at the root:

```typescript
import { clerkMiddleware } from "@clerk/nextjs/server";
export default clerkMiddleware();
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
```

Wrap your app with `<ClerkProvider>` in `app/layout.tsx`:

```typescript
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
```

---

## 📚 Documentation

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Clerk Quickstart for Next.js](https://clerk.com/docs/quickstarts/nextjs)
- [Supabase Docs](https://supabase.com/docs)

---

## 🧑‍💻 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## ✨ Acknowledgements

<p>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-000?logo=next.js&logoColor=fff" /></a>
  <a href="https://clerk.com/"><img src="https://img.shields.io/badge/Clerk-3A7AFE?logo=clerk&logoColor=fff" /></a>
  <a href="https://supabase.com/"><img src="https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=fff" /></a>
  <a href="https://ui.shadcn.com/"><img src="https://img.shields.io/badge/Shadcn/UI-000?logo=react&logoColor=fff" /></a>
</p>
