# QuantX — Geopolitical-Financial Intelligence

**QuantX** is India's first geopolitical-financial intelligence platform. It bridges the gap between global macroeconomic events and local NSE/BSE stock portfolios. Built for the active Indian retail investor, QuantX delivers the analytical edge of institutional-grade terminals with unparalleled precision and speed.

## Platform Architecture

QuantX connects disparate global data points into a cohesive, actionable dashboard.

- **Portfolio Attribution:** Real-time P&L factoring in global sector exposure.
- **Geopolitical Risk Engine:** Instant impact analysis of wars, sanctions, and trade disputes on specific stock holdings.
- **Global Heatmap:** A live 195-country risk visualizer tied to market implications.
- **AI Synthesis:** NLP-driven news analysis and personalized AI investment digests.
- **Market Pulse:** Live FII/DII flows, Nifty 50/Sensex tracking, and sector rotation.
- **Macro Intelligence:** Centralized repository for RBI decisions, GDP data, and inflation metrics.

## Engineering

QuantX is architected for high availability and minimal latency, utilizing a modern, edge-ready tech stack.

- **Core Engine:** Next.js (App Router), React
- **Interface:** Tailwind CSS v4, custom shadcn/ui integration
- **Data & Auth Layer:** Supabase (PostgreSQL, Edge Functions)
- **Infrastructure:** Vercel Edge Network
- **Pipeline:** GitHub Actions CI/CD

## Deployment

The platform is designed to be deployed flawlessly on the Vercel Edge Network. 

1. Connect the repository to a Vercel workspace.
2. Assign the root directory to `frontend`.
3. Provision the required secure environment variables via the Vercel dashboard.
4. Deploy.

Continuous Integration is strictly enforced via GitHub Actions on the `main` branch.

---
*QuantX — Intelligence for the modern Indian market.*
