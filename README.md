# N.A. LOGISTICS AND BUS SERVICES Website

This is the official website for N.A. Logistics, built with Next.js, Tailwind CSS, and TypeScript.

## 🚀 Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    npm start
    ```

## 🛠 Project Structure

-   `src/app`: Application routes and pages.
-   `src/components`: Reusable UI components.
    -   `ui`: Basic building blocks (buttons, inputs, cards).
    -   `layout`: Header, Footer, etc.
    -   `sections`: Page-specific sections (Contact Form).
-   `src/lib`: Utilities and configuration.
    -   `site-config.ts`: **EDIT THIS FILE** to update phone numbers, hours, and addresses.

## 🎨 Design System

-   **Primary Color**: Deep Navy (`#0A192F`) - Trust & Authority
-   **Accent Color**: Amber/Orange (`#F59E0B`) - Energy & Motion
-   **Typography**: Inter (Body) + Manrope (Headings)
-   **No Purple**: Strictly enforced.

## 📝 Content Management

To update content, edit:
-   `src/lib/site-config.ts` for global details.
-   `src/app/services/page.tsx` for service descriptions.
-   `src/app/about/page.tsx` for company story.

## 📞 Contact Form

The contact form submits to `src/app/contact/submit/route.ts`. Currently, it logs to the console. Connect it to Resend, SendGrid, or similar services for email delivery.
