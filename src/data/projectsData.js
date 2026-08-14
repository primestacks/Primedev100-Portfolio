export const projectsData = [
  {
    id: "prepv8",
    title: "PrepV8",
    subtitle: "AI-powered interview preparation platform for job seekers & professionals across all levels",
    category: "AI & ML",
    featured: true,
    status: "Under Development",
    image: "/PrepV8.png",
    gallery: [
      "/PrepV8.png"
    ],
    tech: ["React", "TypeScript", "Node.js", "OpenAI API", "MongoDB", "Tailwind CSS"],
    stackBreakdown: {
      frontend: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express.js", "LangChain / OpenAI API"],
      database: ["MongoDB Atlas", "Redis Caching"],
      devops: ["Vercel", "GitHub Actions"]
    },
    shortDescription:
      "Intelligent AI mock interview simulator providing real-time voice & text coaching, role-specific technical questions, instant feedback analysis, and personalized career tracks.",
    fullDescription:
      "PrepV8 is an end-to-end AI-powered interview preparation platform engineered for job seekers, software engineers, product managers, and professionals across all career levels. It features simulated live AI interviewer sessions, domain-specific behavioral and technical question sets, automated answer evaluation, speech clarity scoring, and actionable improvement recommendations.",
    challenge:
      "Delivering realistic, non-scripted AI interview conversations with dynamic follow-up questions while generating multi-dimensional feedback scores in real-time.",
    solution:
      "Implemented a streaming LLM response pipeline paired with speech-to-text integration and real-time STAR rubric evaluation algorithms.",
    impact: "Empowers candidates across all industries and experience levels to master technical, behavioral, and leadership interviews.",
    features: [
      { title: "Simulated AI Mock Interviews", desc: "Practice live realistic technical, system design, and behavioral interviews tailored to target job roles." },
      { title: "Instant Performance Analytics", desc: "Receive actionable scoring breakdowns on answer structure (STAR method), technical accuracy, confidence, and key takeaways." },
      { title: "All Experience Levels", desc: "Curated interview question paths covering Entry Level, Mid-Level, Senior, Lead, and Executive positions." },
      { title: "Targeted Job & Resume Matching", desc: "Paste any target job description or upload your resume to generate custom tailored interview scenarios." }
    ],
    metrics: [
      { label: "Target Audience", value: "All Career Levels" },
      { label: "AI Response Speed", value: "< 300ms" },
      { label: "Status", value: "Under Development" },
      { label: "Interview Types", value: "Tech & Behavioral" }
    ],
    liveUrl: null,
    githubUrl: null
  },
  {
    id: "artizansquare",
    title: "Artizansquare",
    subtitle: "Digital marketplace connecting clients with verified skilled artisans & service professionals",
    category: "Full Stack",
    featured: true,
    status: "Live Production",
    image: "/Artizansquare.png",
    gallery: [
      "/Artizansquare.png"
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    stackBreakdown: {
      frontend: ["React", "Tailwind CSS", "Redux", "Axios"],
      backend: ["Node.js", "Express.js", "JWT Authentication"],
      database: ["MongoDB Atlas", "Mongoose"],
      devops: ["Vercel", "AWS S3"]
    },
    shortDescription:
      "Comprehensive service platform for finding, booking, and rating local artisans, featuring real-time booking management and verified portfolios.",
    fullDescription:
      "Artizansquare bridges the gap between clients and verified skilled artisans (carpenters, electricians, plumbers, interior designers). Clients can browse portfolios, request quotes, schedule appointments, and leave verified ratings.",
    challenge:
      "Ensuring seamless matching between client service requests and nearby verified professionals with reliable rating mechanisms.",
    solution:
      "Developed a robust geo-matching algorithm and multi-step verification pipeline for artisan profiles.",
    impact: "Empowers hundreds of independent service professionals with direct digital bookings.",
    features: [
      { title: "Artisan Directory & Portfolios", desc: "Explore verified artisan profiles, past project galleries, and client reviews." },
      { title: "Instant Booking & Quotes", desc: "Request custom job quotes or book appointments directly through the platform." },
      { title: "Rating & Review System", desc: "Trust-based review system ensuring top-quality service delivery." },
      { title: "Service Categories Filter", desc: "Filter by craft, location, price range, and availability." }
    ],
    metrics: [
      { label: "Live Domain", value: "artizansquare.com" },
      { label: "Artisans Registered", value: "500+" },
      { label: "Bookings Handled", value: "2.4K+" },
      { label: "Client Rating", value: "4.9 ★" }
    ],
    liveUrl: "https://artizansquare.com",
    githubUrl: null
  },
  {
    id: "realdoktor",
    title: "RealDoktor",
    subtitle: "Telehealth healthcare ecosystem for virtual online medical consultations",
    category: "Full Stack",
    featured: true,
    status: "Live Production",
    image: "/RealDoktor.png",
    gallery: [
      "/RealDoktor.png"
    ],
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
    stackBreakdown: {
      frontend: ["React 19", "Tailwind CSS", "Lucide Icons", "Framer Motion"],
      backend: ["Node.js", "Express.js", "REST APIs"],
      database: ["MongoDB Production", "Mongoose"],
      devops: ["Vercel (Frontend)", "Render (Backend)"]
    },
    shortDescription:
      "Modern telehealth portal enabling patients to search verified medical specialists, schedule online consultations, and access medical care remotely.",
    fullDescription:
      "RealDoktor is a production healthcare platform designed to streamline virtual medical access. It features verified doctor profiles, specialization filtering, online consultation scheduling, patient health dashboards, and admin onboarding suites.",
    challenge:
      "Building a lightweight, high-performance web platform that operates seamlessly across desktop and mobile browsers with secure doctor verification.",
    solution:
      "Implemented role-based authorization, clean API caching layer, and optimized asset delivery for fast load times.",
    impact: "Enables instant virtual healthcare consultations with verified doctors.",
    features: [
      { title: "Verified Doctor Directory", desc: "Browse qualified specialists across multiple medical fields with credentials." },
      { title: "Virtual Consultation Booking", desc: "Book online video/chat consultations with flexible time slots." },
      { title: "Doctor Admin Portal", desc: "Dedicated portal for medical professionals to manage availability and patient requests." },
      { title: "Responsive Telehealth UI", desc: "Pixel-perfect mobile-first design built for smooth navigation on all devices." }
    ],
    metrics: [
      { label: "Live Deployment", value: "realdoktor.vercel.app" },
      { label: "Verified Doctors", value: "Active" },
      { label: "Load Time", value: "< 0.8s" },
      { label: "Uptime", value: "99.9%" }
    ],
    liveUrl: "https://realdoktor.vercel.app",
    githubUrl: null
  },
  {
    id: "houseofama",
    title: "House of Ama",
    subtitle: "Luxury fashion & e-commerce brand platform with custom showcase catalog",
    category: "Web Apps",
    featured: true,
    status: "Live Production",
    image: "/Houseofama.png",
    gallery: [
      "/Houseofama.png"
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "E-Commerce Suite"],
    stackBreakdown: {
      frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "REST APIs"],
      database: ["MongoDB / Commerce DB"],
      devops: ["Vercel Deployment"]
    },
    shortDescription:
      "E-commerce storefront and digital brand catalog for House of Ama, showcasing bespoke fashion design collections and luxury products.",
    fullDescription:
      "House of Ama delivers an elegant digital shopping experience for a premier fashion brand. The site features immersive visual galleries, detailed product sizing guides, direct customer inquiries, and seamless product navigation.",
    challenge:
      "Refining high-definition fashion imagery displays while maintaining ultra-fast page transitions and mobile responsiveness.",
    solution:
      "Leveraged dynamic image optimization, lazy loading techniques, and glassmorphism UI layouts.",
    impact: "Elevates brand presence and drives online customer engagements.",
    features: [
      { title: "Fashion Collection Showcase", desc: "Interactive lookbooks with high-resolution imagery and hover zoom capabilities." },
      { title: "Bespoke Ordering Suite", desc: "Direct ordering pathways for custom-tailored apparel and accessories." },
      { title: "Brand Storytelling", desc: "Rich narrative pages highlighting craftsmanship, materials, and design philosophy." },
      { title: "Mobile Optimized Storefront", desc: "Smooth swipeable product sliders and touch-friendly interface." }
    ],
    metrics: [
      { label: "Live Website", value: "houseofama.net" },
      { label: "Visual Assets", value: "HD Gallery" },
      { label: "Mobile Speed", value: "98/100" },
      { label: "Brand Reach", value: "Global" }
    ],
    liveUrl: "https://houseofama.net",
    githubUrl: null
  },
  {
    id: "primedev100-portfolio",
    title: "Primedev100 Portfolio",
    subtitle: "Personal software engineer portfolio showcasing full-stack projects & technical skill set",
    category: "Full Stack",
    featured: true,
    status: "Live Production",
    image: "/Primdev100.png",
    gallery: [
      "/Primdev100.png"
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Icons"],
    stackBreakdown: {
      frontend: ["React 19", "Vite", "Tailwind CSS 4", "tw-animate-css"],
      backend: ["Static / API Client Integrations"],
      database: ["JSON / Structured Data"],
      devops: ["Vercel Hosting"]
    },
    shortDescription:
      "High-impact software engineering portfolio featuring dynamic project detail modals, dark/light aesthetics, bento grids, and contact integration.",
    fullDescription:
      "Engineered as a state-of-the-art interactive resume and showcase, Primedev100 Portfolio highlights technical achievements, real-world web applications, client testimonials, and engineering skills with fluid micro-animations.",
    challenge:
      "Designing a clean, impressionable interface that highlights both complex technical backend skills and polished frontend visual design.",
    solution:
      "Implemented tailored electric gradient styling, modular project modals, and interactive bento cards.",
    impact: "Serves as the primary digital footprint for prospective clients and engineering roles.",
    features: [
      { title: "Interactive Project Details Modal", desc: "Deep-dive view into features, architecture breakdowns, metrics, and screenshots." },
      { title: "Bento Skill Grid", desc: "Visual presentation of technical proficiencies across frontend, backend, and DevOps." },
      { title: "Category Filtering", desc: "Instant filter navigation between Web Apps, Full Stack, AI & ML, and SaaS." },
      { title: "Responsive Dark Theme", desc: "Modern glassmorphism and electric color system designed for maximum visual wow factor." }
    ],
    metrics: [
      { label: "Live URL", value: "primedev100-portfolio.vercel.app" },
      { label: "Lighthouse Performance", value: "100/100" },
      { label: "Build Tool", value: "Vite + React 19" },
      { label: "Responsiveness", value: "All Screens" }
    ],
    liveUrl: "https://primedev100-portfolio.vercel.app",
    githubUrl: "https://github.com/primestacks"
  },
  {
    id: "myteacherconnect",
    title: "MyTeacherConnect",
    subtitle: "EdTech platform connecting certified educators with students & learning opportunities",
    category: "Full Stack",
    featured: true,
    status: "Live Production",
    image: "/Myteacherconnect.png",
    gallery: [
      "/Myteacherconnect.png"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    stackBreakdown: {
      frontend: ["React", "Tailwind CSS", "React Router"],
      backend: ["Node.js", "Express.js", "REST APIs"],
      database: ["MongoDB", "Mongoose"],
      devops: ["Vercel", "Cloud Infrastructure"]
    },
    shortDescription:
      "Empowering educational network bridging educators, tutors, and academic institutions with students seeking qualified instruction.",
    fullDescription:
      "MyTeacherConnect is a dedicated education marketplace designed to simplify tutor hiring, course matching, and educator networking. It offers verified teacher profiles, subject filtering, application management, and communication hubs.",
    challenge:
      "Building a trust-centered network with comprehensive teacher credentials verification and easy subject filtering.",
    solution:
      "Structured a multi-role web platform supporting teacher profiles, subject classification, and direct inquiry messaging.",
    impact: "Connects hundreds of educators with targeted tutoring opportunities.",
    features: [
      { title: "Educator Search & Filter", desc: "Find qualified tutors by subject expertise, grade level, location, and rate." },
      { title: "Teacher Credential Profiles", desc: "Detailed teacher bio pages featuring experience, subjects taught, and contact options." },
      { title: "Institution & Student Portal", desc: "Direct channel for parents, students, and schools to post teaching requirements." },
      { title: "Resource Sharing", desc: "Access to educational materials, study guides, and teaching resources." }
    ],
    metrics: [
      { label: "Live Domain", value: "myteacherconnect.org" },
      { label: "Target Audience", value: "Students & Teachers" },
      { label: "Platform Type", value: "EdTech" },
      { label: "Security", value: "HTTPS / SSL" }
    ],
    liveUrl: "https://myteacherconnect.org",
    githubUrl: null
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Enterprise Platform",
    subtitle: "Scalable digital marketplace with real-time analytics & multi-currency payment checkout",
    category: "Full Stack",
    featured: false,
    status: "Production Ready",
    image: "/ecommerce-platform-dashboard.jpg",
    gallery: [
      "/ecommerce-platform-dashboard.jpg",
      "/analytics-dashboard-charts.jpg"
    ],
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "Redis"],
    stackBreakdown: {
      frontend: ["React 19", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
      backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
      database: ["MongoDB Atlas", "Redis Caching"],
      devops: ["Vercel", "AWS S3", "Docker", "GitHub Actions"]
    },
    shortDescription:
      "Full-featured e-commerce system featuring automated inventory tracking, instantaneous search indexing, and a unified merchant management suite.",
    fullDescription:
      "Engineered an enterprise-ready e-commerce ecosystem designed to handle thousands of concurrent transactions with sub-second page loads. Features include dynamic pricing algorithms, automated inventory reconciliation, multi-tier product variants, localized checkout with Stripe Connect, and high-performance server side session management.",
    challenge:
      "Legacy e-commerce backends suffer from slow cart mutation times under peak sales traffic and delayed inventory updates across multi-storefront deployments.",
    solution:
      "Implemented a optimistic UI updating strategy paired with Redis publish/subscribe message channels to guarantee real-time stock sync with zero UI latency.",
    impact: "Boosted checkout conversion by 28% and reduced API payload turnaround times to under 120ms.",
    features: [
      { title: "Real-Time Inventory", desc: "Live stock updates via WebSocket connections preventing overselling during sales." },
      { title: "Stripe & Crypto Checkout", desc: "Seamless multi-currency payments with automated tax calculation and dynamic shipping rates." },
      { title: "Merchant Command Center", desc: "Intuitive admin dashboard for order processing, customer management, and sales reports." },
      { title: "Smart Product Search", desc: "Fuzzy search with instant filter facets, price sliders, and tag recommendations." }
    ],
    metrics: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Active Users", value: "45K+" },
      { label: "Monthly GMV", value: "$350K+" },
      { label: "Uptime", value: "99.99%" }
    ],
    liveUrl: "https://example.com/demo-ecommerce",
    githubUrl: "https://github.com/example/ecommerce-platform"
  },
  {
    id: "analytics-dashboard",
    title: "Real-Time BI Analytics Engine",
    subtitle: "High-throughput data visualization suite with interactive charts & custom reporting",
    category: "Web Apps",
    featured: false,
    status: "Live Project",
    image: "/analytics-dashboard-charts.jpg",
    gallery: [
      "/analytics-dashboard-charts.jpg",
      "/ecommerce-platform-dashboard.jpg"
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js", "Tailwind CSS"],
    stackBreakdown: {
      frontend: ["Next.js App Router", "TypeScript", "Chart.js", "Lucide Icons"],
      backend: ["Server Actions", "Node.js", "GraphQL"],
      database: ["PostgreSQL", "Prisma ORM", "TimescaleDB"],
      devops: ["Vercel", "Supabase", "Datadog"]
    },
    shortDescription:
      "Interactive data dashboard aggregating real-time user behavior telemetry into customizable chart widgets and automated PDF exports.",
    fullDescription:
      "Designed and delivered a modern business intelligence dashboard for enterprise revenue ops teams. It parses streaming stream event metrics into custom interactive charts, funnels, cohort retention grids, and automated digest reports.",
    challenge:
      "Processing millions of raw clickstream logs into instantly readable time-series data without causing database query bottlenecks.",
    solution:
      "Leveraged TimescaleDB continuous aggregates and Next.js server components with streaming SSR to render analytical views in milliseconds.",
    impact: "Decreased dashboard load times from 4.2 seconds to 350ms across high-volume dataset queries.",
    features: [
      { title: "Custom Widget Drag-n-Drop", desc: "Tailor your dashboard layout with resizable grid components and live metric cards." },
      { title: "Cohort & Funnel Analysis", desc: "Drill down into user churn, retention rates, and conversion bottlenecks." },
      { title: "Automated Report Export", desc: "Generate PDF and CSV reports scheduled to send via Slack or Email automatically." },
      { title: "Real-Time Event Stream", desc: "Sub-second live streaming updates powered by Server-Sent Events (SSE)." }
    ],
    metrics: [
      { label: "Data Processed", value: "10M+ events/day" },
      { label: "Query Speed", value: "< 50ms" },
      { label: "Custom Dashboards", value: "1.2k+" },
      { label: "Client Satisfaction", value: "4.9 / 5" }
    ],
    liveUrl: "https://example.com/demo-analytics",
    githubUrl: "https://github.com/example/analytics-dashboard"
  },
  {
    id: "ai-chat-application",
    title: "AI Conversational Workspace",
    subtitle: "Multi-model LLM chat environment with context awareness, prompt templates & document Q&A",
    category: "AI & ML",
    featured: false,
    status: "Featured",
    image: "/ai-chat-application-interface.jpg",
    gallery: [
      "/ai-chat-application-interface.jpg",
      "/social-media-app-interface.jpg"
    ],
    tech: ["React", "OpenAI API", "Node.js", "Vector DB", "Tailwind CSS"],
    stackBreakdown: {
      frontend: ["React", "Tailwind CSS", "Katex Math", "Monaco Editor"],
      backend: ["Node.js", "LangChain", "FastAPI Python"],
      database: ["Pinecone Vector DB", "MongoDB"],
      devops: ["AWS ECS", "Docker", "Cloudflare Workers"]
    },
    shortDescription:
      "Intelligent AI workspace powered by LLMs supporting document parsing, code execution execution support, and collaborative prompt saving.",
    fullDescription:
      "An advanced AI Assistant application that allows users to query complex documents (PDFs, Markdown, CSVs) using vector embeddings and semantic search. Supports multi-turn conversation memory, code syntax highlighting, and custom prompt library sharing.",
    challenge:
      "Ensuring accurate context retrieval from large multi-page PDF technical manuals without exceeding token limits or hallucinating responses.",
    solution:
      "Built a hybrid RAG (Retrieval-Augmented Generation) pipeline combining semantic vector search with keyword BM25 scoring for maximum precision.",
    impact: "Accelerated technical documentation research speed by 4x for dev teams.",
    features: [
      { title: "Document RAG Chat", desc: "Upload PDFs, DOCX, or codebases and ask questions with citation source links." },
      { title: "Multi-Model Toggle", desc: "Seamlessly switch between GPT-4o, Claude 3.5, and open-source models." },
      { title: "Code Sandbox Execution", desc: "Inspect and test AI-generated code snippets in an isolated runtime." },
      { title: "Prompt Engineering Studio", desc: "Save, version, and share reusable system prompt templates." }
    ],
    metrics: [
      { label: "RAG Accuracy", value: "96.4%" },
      { label: "Avg Token Speed", value: "85 tokens/s" },
      { label: "Docs Indexed", value: "120K+" },
      { label: "User Rating", value: "5.0 ★" }
    ],
    liveUrl: "https://example.com/demo-ai-chat",
    githubUrl: "https://github.com/example/ai-chat-workspace"
  }
];
