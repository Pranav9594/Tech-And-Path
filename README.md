# Tech and Path 🚀

A comprehensive technology career guidance platform built with Next.js, TypeScript, and Supabase. Help professionals navigate their tech career journey with expert-curated content, real-time market data, and proven career roadmaps.

## 🌟 Features

### 🔐 Authentication System
- **Email/Password Authentication** - Secure signup and login
- **Google OAuth Integration** - One-click social authentication
- **Email Verification** - Secure account confirmation process
- **Protected Routes** - Dashboard and user-specific content
- **Session Management** - Persistent login across browser sessions

### 📊 Career Guidance
- **10+ Technology Fields** - Comprehensive coverage of tech careers
- **Detailed Field Analysis** - In-depth descriptions, skills, and requirements
- **Salary Insights** - Real-time salary data across experience levels
- **Learning Roadmaps** - Step-by-step career progression paths
- **Job Role Breakdown** - 50+ detailed job positions and responsibilities

### 🎨 User Experience
- **Responsive Design** - Works seamlessly on all devices
- **Professional UI** - Clean, modern interface with smooth animations
- **Advanced Search** - Find fields by skills, salary, or keywords
- **Smart Filtering** - Filter by growth potential, salary range, and more
- **Personalized Dashboard** - Track progress and get recommendations

### 🛠️ Technical Features
- **Next.js 14** - Latest React framework with App Router
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Utility-first styling with custom components
- **Supabase** - Backend-as-a-Service for authentication and data
- **Shadcn/ui** - High-quality, accessible UI components

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/tech-and-path.git
   cd tech-and-path
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Add your Supabase credentials:
   \`\`\`env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Supabase Setup

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Copy your project URL and anon key

2. **Configure Authentication**
   - Go to Authentication → Settings
   - Configure email settings
   - Optionally disable email confirmation for development

3. **Set up OAuth Providers (Optional)**
   - Go to Authentication → Providers
   - Enable Google OAuth
   - Add your Google OAuth credentials
   - Set redirect URL: \`your-domain.com/auth/callback\`

### Google OAuth Setup (Optional)

1. **Google Cloud Console**
   - Go to [console.cloud.google.com](https://console.cloud.google.com)
   - Create or select a project
   - Enable Google+ API

2. **Create OAuth Credentials**
   - Go to APIs & Services → Credentials
   - Create OAuth 2.0 Client ID
   - Add authorized origins and redirect URIs

3. **Configure in Supabase**
   - Add Client ID and Secret to Supabase
   - Set redirect URL: \`https://your-supabase-url.supabase.co/auth/v1/callback\`

## 📁 Project Structure

\`\`\`
tech-and-path/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── auth/                     # Authentication callbacks
│   ├── dashboard/                # User dashboard
│   ├── features/                 # Features page
│   ├── fields/[id]/             # Dynamic tech field pages
│   ├── login/                    # Login page
│   ├── search/                   # Search functionality
│   ├── signup/                   # Registration page
│   ├── tech-fields/             # Tech fields listing
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # Reusable components
│   ├── ui/                      # UI components (shadcn/ui)
│   ├── header.tsx               # Navigation header
│   └── footer.tsx               # Site footer
├── lib/                         # Utility libraries
│   ├── auth-context.tsx         # Authentication context
│   ├── supabase.ts              # Supabase client
│   ├── tech-fields-data.ts      # Tech fields data
│   └── utils.ts                 # Utility functions
└── public/                      # Static assets
\`\`\`

## 🎯 Tech Fields Covered

1. **Artificial Intelligence & Machine Learning** - ₹25.2 LPA
2. **Data Science** - ₹19.8 LPA  
3. **Product Management** - ₹22.1 LPA
4. **Cybersecurity** - ₹18.7 LPA
5. **Cloud Computing** - ₹17.5 LPA
6. **Blockchain** - ₹16.2 LPA
7. **Internet of Things (IoT)** - ₹15.8 LPA
8. **UI/UX Design** - ₹14.3 LPA
9. **Non-Coding Tech Jobs** - ₹13.5 LPA
10. **Web Development** - ₹12.5 LPA

Each field includes:
- Detailed descriptions and career prospects
- Required skills and technologies
- Learning roadmaps and progression paths
- Salary ranges across experience levels
- Job roles and responsibilities
- Market demand and growth projections

## 🔒 Authentication Flow

### Email/Password Authentication
1. User signs up with email and password
2. Email verification sent (if enabled)
3. User confirms email and can log in
4. Session persisted across browser sessions

### Google OAuth Flow
1. User clicks "Continue with Google"
2. Redirected to Google authentication
3. Google redirects back to \`/auth/callback\`
4. Session created and user redirected to dashboard

### Protected Routes
- \`/dashboard\` - Requires authentication
- Automatic redirect to \`/login\` for unauthenticated users
- Session state managed globally via React Context

## 🎨 UI Components

Built with **shadcn/ui** components:
- \`Button\` - Various button styles and states
- \`Card\` - Content containers with headers
- \`Input\` - Form input fields
- \`Badge\` - Status and category indicators
- \`Alert\` - Success/error message displays
- \`Label\` - Form field labels

Custom components:
- \`AnimatedCounter\` - Smooth number animations
- \`LoadingSpinner\` - Loading state indicators
- \`Header\` - Navigation with search and auth
- \`Footer\` - Site footer with links

## 📱 Responsive Design

- **Mobile-first approach** - Optimized for all screen sizes
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible layouts** - Grid and flexbox for responsive content
- **Touch-friendly** - Appropriate touch targets and interactions

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect Repository**
   - Import project to Vercel
   - Connect your GitHub repository

2. **Environment Variables**
   - Add Supabase URL and anon key
   - Configure any additional environment variables

3. **Deploy**
   - Automatic deployments on git push
   - Preview deployments for pull requests

### Other Platforms
- **Netlify** - Static site deployment
- **Railway** - Full-stack deployment
- **DigitalOcean** - VPS deployment

## 🔧 Development

### Available Scripts
\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
\`\`\`

### Code Quality
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **Prettier** - Code formatting (optional)

### Development Workflow
1. Create feature branch from main
2. Make changes and test locally
3. Run linting and type checks
4. Create pull request
5. Deploy to preview environment
6. Merge to main for production deployment

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   \`\`\`bash
   git checkout -b feature/amazing-feature
   \`\`\`
3. **Commit your changes**
   \`\`\`bash
   git commit -m 'Add amazing feature'
   \`\`\`
4. **Push to the branch**
   \`\`\`bash
   git push origin feature/amazing-feature
   \`\`\`
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** - React framework for production
- **Supabase** - Backend-as-a-Service platform
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icon library

## 📞 Support

- **Email**: hello@techandpath.com
- **Documentation**: [docs.techandpath.com](https://docs.techandpath.com)
- **Issues**: [GitHub Issues](https://github.com/yourusername/tech-and-path/issues)

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Core authentication system
- ✅ Tech fields database and pages
- ✅ Search and filtering
- ✅ Responsive design
- ✅ User dashboard

### Phase 2 (Upcoming)
- 🔄 Career assessment quiz
- 🔄 Learning progress tracking
- 🔄 User favorites system
- 🔄 Email notifications
- 🔄 Advanced analytics

### Phase 3 (Future)
- 📋 Job listings integration
- 📋 Mentorship matching
- 📋 Community features
- 📋 Mobile app
- 📋 API for third-party integrations

---

**Built with ❤️ by the Tech and Path team**

*Empowering professionals to make informed career decisions in technology*
