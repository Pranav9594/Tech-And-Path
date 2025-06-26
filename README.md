🚀 Tech and Path
A comprehensive technology career guidance platform built with Next.js, TypeScript, and Supabase. Help professionals navigate their tech careers with expert-curated content, real-time market insights, and structured career roadmaps.

🌟 Features
🔐 Authentication System
Email/Password Authentication – Secure signup and login

Google OAuth Integration – One-click social authentication

Email Verification – Account confirmation via email

Protected Routes – User-specific dashboards and content

Session Management – Persistent login across sessions

📊 Career Guidance
10+ Technology Fields – Comprehensive coverage

Detailed Field Analysis – Skills, requirements, and job paths

Salary Insights – Real-time salary trends by experience

Learning Roadmaps – Guided career progression paths

Job Role Breakdown – 50+ roles with responsibilities

🎨 User Experience
Responsive Design – Optimized for all screen sizes

Modern UI – Clean, animated, and professional

Advanced Search – Find careers by skill, salary, or keyword

Smart Filters – Filter by salary, growth, etc.

Personalized Dashboard – Track learning and recommendations

🛠️ Technical Stack
Next.js 14 – App Router support

TypeScript – Type-safe development

Tailwind CSS – Utility-first styling

Supabase – Backend and Auth service

shadcn/ui – Accessible and elegant UI components

🚀 Quick Start
Prerequisites
Node.js v18+

npm or yarn

Supabase account

Installation
bash
Copy
Edit
git clone https://github.com/yourusername/tech-and-path.git
cd tech-and-path
npm install
# or
yarn install
Setup Environment Variables
bash
Copy
Edit
cp .env.example .env.local
Update the environment file:

env
Copy
Edit
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
Run the Development Server
bash
Copy
Edit
npm run dev
# or
yarn dev
Visit: http://localhost:3000

🔧 Supabase Configuration
1. Create a Project
Go to supabase.com

Create a new project

Copy the project URL and anon key

2. Configure Authentication
Navigate to Authentication → Settings

Setup email settings

Optional: Disable email confirmation for local development

3. Enable Google OAuth (Optional)
Go to Authentication → Providers

Enable Google and set up credentials

Redirect URL:

arduino
Copy
Edit
https://your-domain.com/auth/callback
Google OAuth Setup Steps
Go to Google Cloud Console

Enable OAuth & Google+ API

Create OAuth Client ID

Add redirect URI:

bash
Copy
Edit
https://your-supabase-url.supabase.co/auth/v1/callback
📁 Project Structure
python
Copy
Edit
tech-and-path/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── auth/                     # Auth routes
│   ├── dashboard/                # User dashboard
│   ├── features/                 # Features overview
│   ├── fields/[id]/              # Dynamic tech field pages
│   ├── login/                    # Login page
│   ├── signup/                   # Signup page
│   ├── search/                   # Search interface
│   ├── tech-fields/              # Tech fields listing
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/                   # Reusable UI components
│   ├── ui/                       # shadcn/ui components
│   ├── header.tsx                # Navbar
│   └── footer.tsx                # Footer
├── lib/                          # Utility functions and configs
│   ├── auth-context.tsx          # Auth context provider
│   ├── supabase.ts               # Supabase client
│   ├── tech-fields-data.ts       # Static tech field data
│   └── utils.ts                  # Helper functions
└── public/                       # Static files
🎯 Tech Fields Covered
Field	Avg Salary (INR)
Artificial Intelligence & ML	₹25.2 LPA
Data Science	₹19.8 LPA
Product Management	₹22.1 LPA
Cybersecurity	₹18.7 LPA
Cloud Computing	₹17.5 LPA
Blockchain	₹16.2 LPA
Internet of Things (IoT)	₹15.8 LPA
UI/UX Design	₹14.3 LPA
Non-Coding Tech Jobs	₹13.5 LPA
Web Development	₹12.5 LPA

Each field includes:

Career overview and trends

Required skills and tools

Roadmaps and resources

Salary insights

Growth potential and demand

🔐 Authentication Flow
Email/Password
Signup with email & password

Email verification (optional)

Log in and stay signed in with session persistence

Google OAuth
Click "Continue with Google"

Redirect to Google login

Return to /auth/callback

Authenticated and redirected to dashboard

Protected Routes
/dashboard and other user pages

Auto-redirects unauthenticated users to /login

Session managed via React Context

🎨 UI Components
Built with shadcn/ui and custom components:

Reusable Components

Button, Input, Badge, Card, Alert, Label

Custom Components

Header – Navbar with search and auth

Footer – Links and footer layout

AnimatedCounter – Number animation

LoadingSpinner – Loading states

📱 Responsive Design
Mobile-first design

Responsive layouts (flex/grid)

Touch-friendly interactions

Breakpoints: sm, md, lg, xl

🚀 Deployment
Deploy on Vercel (Recommended)
Import GitHub repo to Vercel

Add environment variables:

NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY

Deploy with each push

Alternative Hosts
Netlify – For static export

Railway – For full-stack hosting

DigitalOcean – Manual VPS

🧪 Development & Scripts
bash
Copy
Edit
npm run dev          # Development
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Linting with ESLint
npm run type-check   # TypeScript checks
✅ Development Workflow
Create a feature branch

Implement and test locally

Run lint and type-check

Create a PR

Deploy preview on Vercel

Merge to main

🤝 Contributing
Fork the repo

Create a new branch
git checkout -b feature/amazing-feature

Make your changes
git commit -m 'Add amazing feature'

Push to GitHub
git push origin feature/amazing-feature

Submit a Pull Request

📄 License
This project is licensed under the MIT License.
See the LICENSE file for more information.

🙏 Acknowledgments
Next.js – React Framework

Supabase – Backend services

Tailwind CSS – Modern styling

shadcn/ui – High-quality components

Lucide Icons – Icon set for React

🗺️ Roadmap
✅ Phase 1 (Completed)
Authentication (email & Google)

Tech field database and dynamic pages

Search and filtering

Responsive dashboard

🔜 Phase 2 (Upcoming)
Career assessment quiz

Progress tracking system

User favorites

Email alerts

Dashboard analytics

🧩 Phase 3 (Planned)
Job listings integration

Mentorship programs

Community forums

Mobile app (React Native)

Public API access

Made with ❤️ by the Tech and Path Team

Empowering professionals to make informed tech career decisions.