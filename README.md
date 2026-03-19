# QuantX — Geopolitical-Financial Intelligence

**QuantX** is India's first geopolitical-financial intelligence platform. It bridges the gap between global macroeconomic events—like trade wars, sanctions, and elections—and your local NSE/BSE stock portfolio. Built for the active Indian retail investor, QuantX gives you the analytical edge of institutional-grade terminals without the complexity.

## 🚀 Features

- **Portfolio Tracking:** Real-time P&L, sector concentration, and performance attribution for 5,000+ NSE/BSE stocks.
- **Geopolitical Risk Engine:** See instantly how wars, sanctions, and trade disputes affect your specific stock holdings.
- **Interactive World Map:** A live risk heatmap across 195 countries. Click any region to see market implications.
- **AI-Powered Insights:** NLP-driven news analysis, sentiment scoring, and personalized AI investment digests.
- **Market Pulse:** Live Nifty 50, Sensex, FII/DII flows, and sector rotation at a glance.
- **Economic Intelligence:** Centralized dashboard for RBI decisions, GDP data, inflation, and macro indicators.

## 🛠️ Tech Stack

QuantX is built on a modern, high-performance web stack:
- **Frontend Framework:** [Next.js 14/15](https://nextjs.org/) (App Router, React)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Authentication & Database:** [Supabase](https://supabase.com/)
- **CI/CD pipeline:** GitHub Actions

## 📦 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+) and **npm** installed on your local machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shreyanshtripathi-01/QuantX.git
   cd QuantX/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env.local` file in the `frontend` directory and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment (Vercel)

This project is optimized for deployment on Vercel:

1. Push your code to your GitHub repository.
2. Log into [Vercel](https://vercel.com/) and create a **New Project**.
3. Import your `QuantX` GitHub repository.
4. **Crucial Step:** Since the Next.js app is inside the `frontend` folder, set the **Root Directory** to `frontend`.
5. Add your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to the **Environment Variables** section.
6. Click **Deploy**.

Future pushes to the `main` branch will automatically trigger a new build and deployment using the Vercel GitHub integration.

## 🛡️ CI/CD

This repository uses **GitHub Actions** for Continuous Integration. Every push to `main` and every Pull Request triggers a workflow that automatically checks dependencies, runs ESLint, and ensures the Next.js application builds successfully.

---
*Built for the informed Indian investor.*
