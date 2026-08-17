import { DecapCMSData } from '../types';

export const DEFAULT_CMS_DATA: DecapCMSData = {
  siteSettings: {
    siteName: "Lizzdo Media",
    tagline: "Creative & Digital Agency",
    logoText: "LIZZDO MEDIA",
    logo: "/uploads/lizzdo-media-logo.svg",
    logoDark: "/uploads/lizzdo-media-logo.svg",
    logoLight: "/uploads/lizzdo-media-logo-light.svg",
    logoMark: "/uploads/lizzdo-media-mark.svg",
    favicon: "/uploads/lizzdo-media-mark.svg",
    contactEmail: "contact@media.lizzdo.com",
    primaryCtaText: "Let's Talk",
    primaryCtaUrl: "#contact",
    parentCompanyUrl: "https://lizzdo.com/",
    currentDomain: "https://media.lizzdo.com/",
    whatsappNumber: "+1234567890",
  },
  navigation: [
    { id: "home", label: "Home", href: "#", active: true },
    {
      id: "services",
      label: "Services",
      href: "#services",
      hasDropdown: true,
      dropdownItems: [
        { title: "Brand Identity", slug: "brand-identity", description: "Strategic brand identity design" },
        { title: "Logo Design", slug: "logo-design", description: "Memorable & iconic logo designs" },
        { title: "Graphic Design", slug: "graphic-design", description: "Eye-catching visuals for print & digital" },
        { title: "Web Development", slug: "web-development", description: "Fast, modern web experiences" },
        { title: "Social Media Design", slug: "social-media-design", description: "Stunning creatives that boost engagement" },
        { title: "Content Posting", slug: "content-posting", description: "Consistent storytelling & scheduling" },
        { title: "Digital Marketing", slug: "digital-marketing", description: "Data-driven marketing strategies" },
        { title: "Social Media Management", slug: "social-media-management", description: "Complete growth & community management" },
        { title: "Advertising Creatives", slug: "advertising-creatives", description: "High-converting ad visuals" },
        { title: "AI Visuals Content", slug: "ai-visuals-content", description: "Next-gen generative visual craft" },
        { title: "Website Development", slug: "website-development", description: "Powerful websites designed for growth" }
      ]
    },
    { id: "process", label: "Process", href: "#process" },
    { id: "work", label: "Work", href: "#work" },
    { id: "why-us", label: "Why Us", href: "#why-us" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Creative & Digital Agency",
    headlineLine1: "Design. Build.",
    headlineLine2Prefix: "Grow. ",
    headlineHighlightedWord: "Together.",
    description: "We help brands stand out and grow with creative design, powerful websites, and result-driven digital solutions.",
    primaryCtaText: "Explore Our Work",
    primaryCtaUrl: "#work"
  },
  services: [
    {
      id: "brand-identity",
      title: "Brand Identity",
      slug: "brand-identity",
      iconKey: "brand-identity",
      shortDescription: "Strategic brand identity design that defines and distinguishes you.",
      category: "Branding",
      order: 1,
      heroHeadline: "Brand Identity",
      heroHighlight: "That Defines You.",
      heroDescription: "From visual direction and custom typography to luxury stationery and digital guidelines, we build cohesive brand identities designed to captivate and endure.",
      ctaButtonText: "Build My Brand →",
      deliverables: [
        "Primary & Secondary Logo Marks",
        "Comprehensive Brand Book & Rules",
        "Custom Typography & Font Pairing",
        "Color Palette Matrix (Pantone/RGB/CMYK)",
        "Luxury Stationery & Business Cards",
        "Digital Social & Presentation Kits"
      ],
      processSteps: [
        { stepNumber: "01", title: "Brand Discovery", description: "In-depth audit of your core values, mission, target personas, and industry competitive landscape." },
        { stepNumber: "02", title: "Visual Direction", description: "Creating moodboards, tonal concepts, and creative vectors aligned with your aesthetic goals." },
        { stepNumber: "03", title: "Logo System", description: "Crafting mathematical vector logo marks, monograms, badges, and responsive variations." },
        { stepNumber: "04", title: "Brand Guidelines", description: "Documenting clear rules for spacing, minimum sizing, typography hierarchies, and do's/don'ts." },
        { stepNumber: "05", title: "Brand Applications", description: "Applying the visual identity across stationery, packaging, merchandise, and digital mockups." },
        { stepNumber: "06", title: "Final Delivery", description: "Handing over fully organized vector source files, export archives, and commercial usage licenses." }
      ],
      gallery: [
        { id: "bi-g1", title: "Obsidian Luxury Stationery Suite", caption: "300 DPI vector stationery with gold foiling", visualType: "brand-identity", layout: "large" },
        { id: "bi-g2", title: "Color & Typography Guidelines", caption: "Precision hierarchy and contrast ratios", visualType: "brand-guidelines", layout: "half" },
        { id: "bi-g3", title: "Embossed Substrate Mockup", caption: "Premium tactile physical production spec", visualType: "stationery", layout: "half" }
      ],
      relatedProjects: ["brand-identity-design", "packaging-design"],
      seoTitle: "Lizzdo Media | Brand Identity Design",
      seoDescription: "Strategic brand identity design that defines and distinguishes you. Full vector logo systems, guidelines, stationery, and collateral."
    },
    {
      id: "logo-design",
      title: "Logo Design",
      slug: "logo-design",
      iconKey: "logo-design",
      shortDescription: "Memorable logo designs that create a strong and lasting impression.",
      category: "Branding",
      order: 2,
      heroHeadline: "Logo Design",
      heroHighlight: "Made to Be Remembered.",
      heroDescription: "We create distinctive, mathematically balanced, and timeless logo systems that anchor your brand across every medium.",
      ctaButtonText: "Start a Logo Project →",
      deliverables: [
        "Primary Logo, Secondary Mark, & Favicon",
        "Mathematical Vector Construction Grids",
        "Light & Dark Monochromatic Variations",
        "Scalable Formats (SVG, AI, EPS, PNG, PDF)",
        "Color Space Specifications (Hex, CMYK, PMS)",
        "Clearance & Sizing Usage Cheat Sheet"
      ],
      processSteps: [
        { stepNumber: "01", title: "Logo Concept", description: "Initial brief analysis and strategic symbol brainstorming." },
        { stepNumber: "02", title: "Sketching", description: "Hand-drawn geometric ideations exploring dozens of visual metaphors." },
        { stepNumber: "03", title: "Vectorization", description: "Precise bezier curve plotting with mathematical optical balance." },
        { stepNumber: "04", title: "Refinement", description: "Testing legibility at 16px favicon scale and massive billboard formats." },
        { stepNumber: "05", title: "Substrate Testing", description: "Verifying single-color reproduction, embroidery, and screen printability." },
        { stepNumber: "06", title: "Final Identity", description: "Exporting organized master vector packages in every required format." }
      ],
      gallery: [
        { id: "ld-g1", title: "Geometric Vector Construction", caption: "Golden-ratio bezier curves and geometric alignment", visualType: "brand-identity", layout: "large" },
        { id: "ld-g2", title: "Monochrome Versatility", caption: "High-contrast reproduction on light and dark surfaces", visualType: "brand-guidelines", layout: "half" },
        { id: "ld-g3", title: "Embossed Foil Application", caption: "Gold stamped insignia on black cotton paper", visualType: "stationery", layout: "half" }
      ],
      relatedProjects: ["brand-identity-design"],
      seoTitle: "Lizzdo Media | Logo Design",
      seoDescription: "Distinctive, mathematically balanced logo designs that create a strong and lasting impression."
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      slug: "graphic-design",
      iconKey: "graphic-design",
      shortDescription: "Eye-catching visuals for print and digital communication.",
      category: "Design",
      order: 3,
      heroHeadline: "Graphic Design",
      heroHighlight: "Visuals That Speak.",
      heroDescription: "From editorial posters and marketing brochures to corporate collateral and digital assets, our design team produces stunning visual communication.",
      ctaButtonText: "Request Graphic Design →",
      deliverables: [
        "High-Impact Posters, Flyers, & Banners",
        "Corporate Brochures & Annual Reports",
        "Packaging & Label Dieline Layouts",
        "Exhibition Displays & Signage Graphics",
        "Marketing Pitch Decks & Presentations",
        "Print-Ready CMYK Files with Bleed Marks"
      ],
      processSteps: [
        { stepNumber: "01", title: "Briefing", description: "Understanding the communication objective, audience, and media format." },
        { stepNumber: "02", title: "Layout Grid", description: "Establishing typographic hierarchy and geometric balance." },
        { stepNumber: "03", title: "Visual Craft", description: "Composing custom vector artwork, photography, and colors." },
        { stepNumber: "04", title: "Proofing", description: "Rigorous review of copy, color calibration, and bleed margins." },
        { stepNumber: "05", title: "Pre-Flight", description: "Verifying printer color profiles and digital DPI settings." },
        { stepNumber: "06", title: "Handoff", description: "Delivering print-ready files and digital presentation packs." }
      ],
      gallery: [
        { id: "gd-g1", title: "Exhibition Poster Series", caption: "High-contrast typographic and geometric posters", visualType: "brand-identity", layout: "large" },
        { id: "gd-g2", title: "Marketing Collateral Suite", caption: "Brochures and corporate lookbooks", visualType: "stationery", layout: "half" },
        { id: "gd-g3", title: "Custom Packaging Dieline", caption: "Vector dielines and foil finishes", visualType: "packaging", layout: "half" }
      ],
      relatedProjects: ["packaging-design", "social-media-campaign"],
      seoTitle: "Lizzdo Media | Graphic Design",
      seoDescription: "High-impact graphic design, brochures, posters, packaging, and digital communication craft."
    },
    {
      id: "web-development",
      title: "Web Development",
      slug: "web-development",
      iconKey: "web-development",
      shortDescription: "Fast, responsive and modern websites built to perform.",
      category: "Engineering",
      order: 4,
      heroHeadline: "Web Development",
      heroHighlight: "Built for Performance.",
      heroDescription: "High-speed, SEO-optimized, and responsive web applications built with modern frontend frameworks, flawless accessibility, and fluid animations.",
      ctaButtonText: "Build My Website →",
      deliverables: [
        "Custom Responsive Frontend (React/Next.js/Vite)",
        "Mobile-First Touch Optimized Experiences",
        "Lighthouse 95+ Core Web Vitals Performance",
        "Decap CMS & Content Management Integration",
        "Semantic SEO & OpenGraph Meta Automation",
        "Secure SSL, CDN, & Fast Edge Deployment"
      ],
      processSteps: [
        { stepNumber: "01", title: "Plan", description: "Information architecture, route maps, and tech stack selection." },
        { stepNumber: "02", title: "Design", description: "Interactive wireframes and pixel-perfect Figma prototypes." },
        { stepNumber: "03", title: "Develop", description: "Writing clean, componentized TypeScript and Tailwind CSS." },
        { stepNumber: "04", title: "Test", description: "Cross-browser testing, accessibility audit, and performance checks." },
        { stepNumber: "05", title: "Launch", description: "Domain routing, CDN edge caching, and DNS propagation." },
        { stepNumber: "06", title: "Grow", description: "Ongoing speed optimization, uptime monitoring, and updates." }
      ],
      gallery: [
        { id: "wd-g1", title: "SaaS Analytics Dashboard UI", caption: "Real-time analytics frontend with dark luxury aesthetic", visualType: "saas-dashboard", layout: "large" },
        { id: "wd-g2", title: "Mobile Viewport Optimization", caption: "Fluid typography and smooth bottom navigation", visualType: "saas-mobile", layout: "half" },
        { id: "wd-g3", title: "E-Commerce Experience", caption: "Fast headless storefront with frictionless checkout", visualType: "ecommerce", layout: "half" }
      ],
      relatedProjects: ["saas-website-design", "ecommerce-website"],
      seoTitle: "Lizzdo Media | Web Development",
      seoDescription: "Modern web development with lightning-fast speeds, responsive layouts, and rich interactive experiences."
    },
    {
      id: "social-media-design",
      title: "Social Media Design",
      slug: "social-media-design",
      iconKey: "social-media-design",
      shortDescription: "Stunning social media creatives that boost engagement.",
      category: "Social",
      order: 5,
      heroHeadline: "Social Media Design",
      heroHighlight: "That Stops the Scroll.",
      heroDescription: "We design high-converting Instagram grids, storytelling carousels, TikTok/Reels graphics, and cohesive social branding that commands attention.",
      ctaButtonText: "Upgrade Social Creatives →",
      deliverables: [
        "Multi-Slide Educational Carousels",
        "Instagram 9-Grid Aesthetic Design Kits",
        "Reels & TikTok Video Cover Artwork",
        "Story & Highlight Icon Sets",
        "Editable Canva & Figma Template Kits",
        "Optimized 1080x1350 & 9:16 Assets"
      ],
      processSteps: [
        { stepNumber: "01", title: "Brand Audit", description: "Analyzing current social visual tone and audience response." },
        { stepNumber: "02", title: "Style Board", description: "Defining color codes, typography hierarchy, and post layouts." },
        { stepNumber: "03", title: "Creative Batching", description: "Designing recurring content pillars and hero visual hooks." },
        { stepNumber: "04", title: "Refinement", description: "Optimizing contrast, text readability, and call-to-action cues." },
        { stepNumber: "05", title: "Export Kits", description: "Packaging lossless assets formatted for all major channels." },
        { stepNumber: "06", title: "Performance Review", description: "Evaluating engagement metrics to continually refine the visual formula." }
      ],
      gallery: [
        { id: "smd-g1", title: "Multi-Platform Campaign Visuals", caption: "High-contrast typography and product focus", visualType: "social-campaign", layout: "large" },
        { id: "smd-g2", title: "Carousel Slide Sequence", caption: "Educational step-by-step swipe framework", visualType: "social-grid", layout: "half" },
        { id: "smd-g3", title: "Story Graphics Suite", caption: "9:16 interactive engagement stories", visualType: "social-stories", layout: "half" }
      ],
      relatedProjects: ["social-media-campaign"],
      seoTitle: "Lizzdo Media | Social Media Design",
      seoDescription: "High-converting social media design, Instagram grids, carousels, and stories crafted for maximum engagement."
    },
    {
      id: "content-posting",
      title: "Content Posting",
      slug: "content-posting",
      iconKey: "content-posting",
      shortDescription: "Consistent content posting to keep your audience engaged.",
      category: "Content",
      order: 6,
      heroHeadline: "Content Posting",
      heroHighlight: "Consistency That Builds Trust.",
      heroDescription: "Eliminate the stress of manual posting with strategic scheduling, engaging copywriting, hashtag research, and consistent brand presence.",
      ctaButtonText: "Schedule a Strategy Call →",
      deliverables: [
        "Monthly Content Calendar & Editorial Matrix",
        "Engaging Copywriting & Strategic Captions",
        "Curated Hashtag Strategy & Keyword Tags",
        "Scheduled Automated Multi-Platform Posting",
        "Publishing Time Optimization",
        "Monthly Cadence Progress Reports"
      ],
      processSteps: [
        { stepNumber: "01", title: "Strategy Matrix", description: "Aligning monthly themes with your key business priorities." },
        { stepNumber: "02", title: "Copy & Creative Pairing", description: "Matching high-impact visuals with persuasive copy." },
        { stepNumber: "03", title: "Calendar Approval", description: "Reviewing the complete publishing queue before scheduling." },
        { stepNumber: "04", title: "Automated Queueing", description: "Loading posts to go live at peak audience activity hours." },
        { stepNumber: "05", title: "Live Monitoring", description: "Ensuring proper asset rendering and link verification." },
        { stepNumber: "06", title: "Monthly Analytics", description: "Tracking reach, impressions, and engagement growth." }
      ],
      gallery: [
        { id: "cp-g1", title: "Monthly Editorial Calendar Matrix", caption: "Cross-platform scheduling & visual queue", visualType: "social-campaign", layout: "large" },
        { id: "cp-g2", title: "Multi-Channel Distribution", caption: "Synchronized posting across Instagram, LinkedIn, and X", visualType: "social-grid", layout: "half" },
        { id: "cp-g3", title: "Audience Peak Time Heatmap", caption: "Data-backed timing algorithms", visualType: "saas-dashboard", layout: "half" }
      ],
      relatedProjects: ["social-media-campaign"],
      seoTitle: "Lizzdo Media | Content Posting",
      seoDescription: "Consistent content posting and scheduling to build authority and keep your audience engaged."
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      slug: "digital-marketing",
      iconKey: "digital-marketing",
      shortDescription: "Data-driven marketing strategies that drive real results.",
      category: "Marketing",
      order: 7,
      heroHeadline: "Digital Marketing",
      heroHighlight: "Growth Driven by Data.",
      heroDescription: "We combine precision audience targeting, compelling ad creatives, conversion rate optimization, and transparent reporting to scale your brand profitably.",
      ctaButtonText: "Scale Your Marketing →",
      deliverables: [
        "Full-Funnel Paid Advertising (Meta, Google, LinkedIn)",
        "Conversion Rate Optimization (CRO) Audits",
        "Custom Retargeting & Audience Segmentation",
        "A/B Split-Testing Frameworks",
        "Live Performance Tracking Dashboards",
        "Monthly Return on Ad Spend (ROAS) Reports"
      ],
      processSteps: [
        { stepNumber: "01", title: "Market Analysis", description: "Deep dive into your unit economics, CAC targets, and rivals." },
        { stepNumber: "02", title: "Funnel Architecture", description: "Structuring top, middle, and bottom-of-funnel conversion paths." },
        { stepNumber: "03", title: "Creative Production", description: "Producing multi-variant ad hooks, copy, and visual assets." },
        { stepNumber: "04", title: "Campaign Launch", description: "Deploying campaigns with tight budget controls and pixel tracking." },
        { stepNumber: "05", title: "Optimization", description: "Killing underperforming ads and scaling winning variations." },
        { stepNumber: "06", title: "Reporting", description: "Transparent performance reviews with actionable next steps." }
      ],
      gallery: [
        { id: "dm-g1", title: "Conversion Ad Funnel", caption: "4.82x average client return on ad spend", visualType: "saas-dashboard", layout: "large" },
        { id: "dm-g2", title: "A/B Tested Creative Suite", caption: "High-performing visual hook variants", visualType: "social-campaign", layout: "half" },
        { id: "dm-g3", title: "Real-Time Telemetry", caption: "Custom analytics and ROI dashboard", visualType: "saas-dashboard", layout: "half" }
      ],
      relatedProjects: ["social-media-campaign", "saas-website-design"],
      seoTitle: "Lizzdo Media | Digital Marketing",
      seoDescription: "Data-driven digital marketing, paid ads management, and conversion optimization to drive measurable growth."
    },
    {
      id: "social-media-management",
      title: "Social Media Management",
      slug: "social-media-management",
      iconKey: "social-media-management",
      shortDescription: "Complete management to grow and nurture your online presence.",
      category: "Social",
      order: 8,
      heroHeadline: "Social Media Management",
      heroHighlight: "Total Brand Care.",
      heroDescription: "Full-service management including content creation, community engagement, influencer outreach, profile optimization, and monthly strategic reporting.",
      ctaButtonText: "Get Social Management →",
      deliverables: [
        "Dedicated Creative & Community Account Lead",
        "End-to-End Visual Content Creation & Copy",
        "Active DM & Comment Community Moderation",
        "Monthly Content Production Days & Briefs",
        "Influencer & Brand Collaboration Coordination",
        "Comprehensive Growth & Sentiment Reporting"
      ],
      processSteps: [
        { stepNumber: "01", title: "Account Audit", description: "Optimizing bios, highlight icons, links, and profile visuals." },
        { stepNumber: "02", title: "Voice Guidelines", description: "Establishing a consistent tone for customer interactions." },
        { stepNumber: "03", title: "Production Engine", description: "Creating and scheduling weekly batches of approved content." },
        { stepNumber: "04", title: "Active Moderation", description: "Responding to customer questions and comments daily." },
        { stepNumber: "05", title: "Proactive Outreach", description: "Engaging with niche leaders and potential brand advocates." },
        { stepNumber: "06", title: "Strategic Review", description: "Monthly review of follower growth, engagement rates, and ROI." }
      ],
      gallery: [
        { id: "smm-g1", title: "End-to-End Social Ecosystem", caption: "Active community management & unified aesthetic", visualType: "social-campaign", layout: "large" },
        { id: "smm-g2", title: "Community Response Protocol", caption: "Fast, brand-aligned customer touchpoints", visualType: "social-grid", layout: "half" },
        { id: "smm-g3", title: "Monthly Growth Trajectory", caption: "Organic audience expansion analytics", visualType: "saas-dashboard", layout: "half" }
      ],
      relatedProjects: ["social-media-campaign"],
      seoTitle: "Lizzdo Media | Social Media Management",
      seoDescription: "Full-service social media management, community engagement, and strategic brand growth."
    },
    {
      id: "advertising-creatives",
      title: "Advertising Creatives",
      slug: "advertising-creatives",
      iconKey: "advertising-creatives",
      shortDescription: "High-converting ad creatives that get attention.",
      category: "Advertising",
      order: 9,
      heroHeadline: "Advertising Creatives",
      heroHighlight: "Designed to Convert.",
      heroDescription: "We design high-impact banner ads, social sponsored creatives, display network units, and landing page visual hooks engineered for maximum click-through rates.",
      ctaButtonText: "Create Ad Creatives →",
      deliverables: [
        "Multi-Format Static & Motion Ad Units",
        "High-CTR Visual Hook Frameworks",
        "A/B Variation Testing Sets (Color, Copy, CTA)",
        "Standard IAB Display Banner Formats",
        "Social Ad Formats (1:1, 4:5, 9:16)",
        "Conversion-Tuned Landing Page Assets"
      ],
      processSteps: [
        { stepNumber: "01", title: "Offer Analysis", description: "Distilling your value proposition into rapid 3-second hooks." },
        { stepNumber: "02", title: "Creative Angles", description: "Developing pain-point, social-proof, and benefit angles." },
        { stepNumber: "03", title: "Visual Design", description: "Designing high-contrast, attention-commanding ad variations." },
        { stepNumber: "04", title: "Platform Specs", description: "Formatting assets to strictly meet Meta, Google, and TikTok guidelines." },
        { stepNumber: "05", title: "A/B Testing", description: "Testing visual variants to identify the highest ROI winner." },
        { stepNumber: "06", title: "Scale Kit", description: "Expanding the winning aesthetic across all platform dimensions." }
      ],
      gallery: [
        { id: "ac-g1", title: "High-Converting Banner Suite", caption: "A/B tested creatives with 5.8% CTR", visualType: "social-campaign", layout: "large" },
        { id: "ac-g2", title: "Product Focus Visual Hooks", caption: "Crisp studio lighting and bold price anchoring", visualType: "packaging", layout: "half" },
        { id: "ac-g3", title: "Display Network Ad Sizes", caption: "IAB standard compliant responsive units", visualType: "saas-dashboard", layout: "half" }
      ],
      relatedProjects: ["social-media-campaign", "brand-identity-design"],
      seoTitle: "Lizzdo Media | Advertising Creatives",
      seoDescription: "High-converting advertising creatives, banner designs, and social ads engineered for high CTR."
    },
    {
      id: "ai-visuals-content",
      title: "AI Visuals Content",
      slug: "ai-visuals-content",
      iconKey: "ai-visuals-content",
      shortDescription: "AI-powered visuals that bring your ideas to life.",
      category: "AI & Innovation",
      order: 10,
      heroHeadline: "AI Visuals Content",
      heroHighlight: "Next-Gen Visual Craft.",
      heroDescription: "Leveraging cutting-edge generative tools and skilled creative direction to produce impossible brand scenes, hyper-realistic product visuals, and rapid creative concepts.",
      ctaButtonText: "Explore AI Visuals →",
      deliverables: [
        "Hyper-Realistic 3D & Cinematic Product Mockups",
        "Bespoke Generative Backgrounds & Concept Scenes",
        "Rapid Moodboard & Visual Prototyping Assets",
        "High-Resolution 4K/8K Upscaled Master Files",
        "Custom Trained Aesthetic Prompt Workflows",
        "Commercial Royalty-Free Usage Rights"
      ],
      processSteps: [
        { stepNumber: "01", title: "Art Direction", description: "Setting precise aesthetic boundaries, lighting, and palette rules." },
        { stepNumber: "02", title: "Prompt Engineering", description: "Crafting mathematical prompt matrices with generative diffusion models." },
        { stepNumber: "03", title: "Curation & Selects", description: "Selecting only the highest-fidelity outputs for human retouching." },
        { stepNumber: "04", title: "Post-Processing", description: "Correcting artifacts, color grading, and compositing brand elements." },
        { stepNumber: "05", title: "Upscaling", description: "Deep resolution upscaling to ultra-sharp 8K print-ready files." },
        { stepNumber: "06", title: "Integration", description: "Incorporating final assets into marketing collateral and web UI." }
      ],
      gallery: [
        { id: "ai-g1", title: "Cinematic Luxury Concept Rendering", caption: "Neural generated product visual with gold foil details", visualType: "packaging", layout: "large" },
        { id: "ai-g2", title: "Futuristic Visual Atmosphere", caption: "Volumetric lighting and obsidian textures", visualType: "brand-identity", layout: "half" },
        { id: "ai-g3", title: "Generative Ad Asset Library", caption: "Dynamic product scenes in high resolution", visualType: "social-campaign", layout: "half" }
      ],
      relatedProjects: ["packaging-design", "brand-identity-design"],
      seoTitle: "Lizzdo Media | AI Visuals Content",
      seoDescription: "Next-generation generative AI visual production, cinematic product scenes, and creative concept art."
    },
    {
      id: "website-development",
      title: "Website Development",
      slug: "website-development",
      iconKey: "website-development",
      shortDescription: "Powerful websites designed for growth and scalability.",
      category: "Engineering",
      order: 11,
      heroHeadline: "Website Development",
      heroHighlight: "Designed for Growth.",
      heroDescription: "We build bespoke corporate websites, brand landing pages, and interactive digital experiences tailored to convert visitors into loyal clients.",
      ctaButtonText: "Build My Website →",
      deliverables: [
        "Custom Tailored Corporate Website (2–10+ Pages)",
        "Zero-Maintenance Serverless Architecture",
        "Seamless Decap CMS Content Management",
        "Comprehensive SEO Schema & Meta Setup",
        "Instant Load Times with Edge CDN Caching",
        "Cross-Device Responsive Design Assurance"
      ],
      processSteps: [
        { stepNumber: "01", title: "Discovery", description: "Analyzing brand goals, user journeys, and key conversion paths." },
        { stepNumber: "02", title: "Wireframes", description: "Structuring page layouts for optimal visual flow and readability." },
        { stepNumber: "03", title: "UI Design", description: "Applying refined typography, dark mode luxury aesthetics, and motion." },
        { stepNumber: "04", title: "Development", description: "Engineering fast, modern React components with Tailwind CSS." },
        { stepNumber: "05", title: "Content Integration", description: "Hooking up Decap CMS for frictionless ongoing updates." },
        { stepNumber: "06", title: "Launch & Support", description: "Conducting final quality assurance and deploying to production." }
      ],
      gallery: [
        { id: "wsd-g1", title: "Corporate Agency Web Experience", caption: "High-performance responsive agency platform", visualType: "saas-dashboard", layout: "large" },
        { id: "wsd-g2", title: "Mobile UI Excellence", caption: "Thumb-friendly navigation and lightning-fast loading", visualType: "saas-mobile", layout: "half" },
        { id: "wsd-g3", title: "Decap CMS Integration", caption: "Intuitive markdown content editing interface", visualType: "brand-guidelines", layout: "half" }
      ],
      relatedProjects: ["saas-website-design", "ecommerce-website"],
      seoTitle: "Lizzdo Media | Website Development",
      seoDescription: "Bespoke corporate websites and landing pages engineered for speed, high conversion, and easy CMS updates."
    }
  ],
  processSteps: [
    {
      id: "process-1",
      stepNumber: "01",
      title: "Discover",
      iconKey: "discover",
      description: "We understand your brand, goals, and target audience.",
      order: 1
    },
    {
      id: "process-2",
      stepNumber: "02",
      title: "Plan",
      iconKey: "plan",
      description: "We create a strategy and plan tailored to your needs.",
      order: 2
    },
    {
      id: "process-3",
      stepNumber: "03",
      title: "Design",
      iconKey: "design",
      description: "We bring ideas to life with creative and impactful designs.",
      order: 3
    },
    {
      id: "process-4",
      stepNumber: "04",
      title: "Develop",
      iconKey: "develop",
      description: "We build fast, responsive and user-friendly solutions.",
      order: 4
    },
    {
      id: "process-5",
      stepNumber: "05",
      title: "Launch",
      iconKey: "launch",
      description: "We deliver and launch your project with perfection.",
      order: 5
    },
    {
      id: "process-6",
      stepNumber: "06",
      title: "Grow",
      iconKey: "grow",
      description: "We support and optimize to help your brand grow consistently.",
      order: 6
    }
  ],
  portfolio: [
    {
      id: "work-1",
      title: "Brand Identity Design",
      slug: "brand-identity-design",
      category: "Branding",
      shortCategory: "Branding",
      description: "Complete obsidian visual identity, bespoke typographic system, and gold foil stationery for an elite luxury brand.",
      visualType: "brand-identity",
      featured: true,
      order: 1,
      client: "Aura Luxe Holdings",
      year: "2026",
      services: ["Brand Strategy", "Logo System", "Stationery", "Brand Guidelines"],
      tools: ["Adobe Illustrator", "Figma", "Photoshop"],
      challenge: "The client needed a timeless, international luxury identity that communicated prestige without feeling archaic or cluttered.",
      strategy: "We engineered an obsidian-and-gold visual system rooted in clean geometry, generous negative space, and custom letterform tracking.",
      design: "Every vector mark, color formula, and stationery substrate was chosen to ensure a tactile, premium impression across both physical and digital mediums.",
      execution: "Delivered a complete 48-page brand manual, embossed foil business cards, letterheads, and a digital social asset kit.",
      result: "Positioned the brand for an ultra-successful launch, generating immediate high-tier client acquisition and establishing a recognizable mark.",
      processSteps: [
        { stepNumber: "01", title: "Audit", description: "Auditing luxury market competitors and positioning" },
        { stepNumber: "02", title: "Concept", description: "Hand-drawn monogram and symbol iterations" },
        { stepNumber: "03", title: "Vector Craft", description: "Precision golden-ratio bezier plotting" },
        { stepNumber: "04", title: "Substrates", description: "Sampling tactile 600gsm cotton papers and foil stamps" },
        { stepNumber: "05", title: "Handoff", description: "Comprehensive master guidelines and vector package" }
      ],
      gallery: [
        { id: "w1-g1", title: "Complete Obsidian Stationery Suite", caption: "600gsm matte black card with hot-stamped gold foil", visualType: "brand-identity", layout: "large" },
        { id: "w1-g2", title: "Palette & Typographic Hierarchy", caption: "Primary obsidian, secondary warm gold, and refined serifs", visualType: "brand-guidelines", layout: "half" },
        { id: "w1-g3", title: "Digital Brand Presence", caption: "Cross-device responsive social guidelines and assets", visualType: "stationery", layout: "half" }
      ],
      relatedServices: ["brand-identity", "logo-design", "graphic-design"],
      relatedProjects: ["packaging-design", "saas-website-design"],
      seoTitle: "Lizzdo Media | Brand Identity Design Case Study",
      seoDescription: "Case study for Aura Luxe luxury brand identity design, custom typography, stationery, and guidelines by Lizzdo Media."
    },
    {
      id: "work-2",
      title: "Packaging Design",
      slug: "packaging-design",
      category: "Graphic Design",
      shortCategory: "Graphic Design",
      description: "Custom geometric luxury packaging boxes with foiling, embossed textures, and high-impact shelf appeal.",
      visualType: "packaging",
      featured: true,
      order: 2,
      client: "Vesper Botanicals",
      year: "2026",
      services: ["Packaging Design", "Dieline Engineering", "3D Visualization", "Print Production"],
      tools: ["Illustrator", "Cinema 4D", "Figma"],
      challenge: "Creating packaging that stood out on luxury retail shelves while meeting strict sustainable substrate guidelines.",
      strategy: "Combined deep purple tones with matte gold geometric foil lines to produce an unmistakable, premium unboxing experience.",
      design: "Engineered custom structural dielines with soft-close magnetic lids, embossed logo insignias, and spot UV details.",
      execution: "Coordinated directly with packaging manufacturers to calibrate Pantone metallic inks and test production proofs.",
      result: "Delivered packaging that drove a 60% increase in retail store placement and won wide acclaim from beauty editors.",
      processSteps: [
        { stepNumber: "01", title: "Dieline Spec", description: "Structural box prototyping and weight testing" },
        { stepNumber: "02", title: "Surface Art", description: "Geometric vector patterns and typography placement" },
        { stepNumber: "03", title: "3D Render", description: "Photorealistic material and foil lighting simulation" },
        { stepNumber: "04", title: "Press Proofs", description: "Color calibration with master printers" },
        { stepNumber: "05", title: "Production", description: "Flawless large-run manufacturing rollout" }
      ],
      gallery: [
        { id: "w2-g1", title: "3D Packaging Structural Mockup", caption: "Deep purple soft-touch matte with gold foil accenting", visualType: "packaging", layout: "large" },
        { id: "w2-g2", title: "Close-up Embossed Insignia", caption: "Tactile foil stamp with sharp edge definition", visualType: "packaging-side", layout: "half" },
        { id: "w2-g3", title: "Retail Shelf Arrangement", caption: "High visual contrast against competitors", visualType: "packaging-box", layout: "half" }
      ],
      relatedServices: ["graphic-design", "brand-identity", "ai-visuals-content"],
      relatedProjects: ["brand-identity-design", "social-media-campaign"],
      seoTitle: "Lizzdo Media | Packaging Design Case Study",
      seoDescription: "Case study for Vesper Botanicals luxury packaging design, custom dielines, and foil finishes by Lizzdo Media."
    },
    {
      id: "work-3",
      title: "SaaS Website Design",
      slug: "saas-website-design",
      category: "Web Development",
      shortCategory: "Web Development",
      description: "High-performance dark SaaS web dashboard with real-time data analytics, intuitive UX, and responsive layouts.",
      visualType: "saas-dashboard",
      featured: true,
      order: 3,
      client: "PulseMetrics AI",
      year: "2026",
      services: ["UX/UI Design", "Frontend Engineering", "Design System", "Performance Optimization"],
      tools: ["React", "TypeScript", "Tailwind CSS", "Figma"],
      challenge: "Simplifying complex real-time telemetry into a clean, intuitive, and visually stunning web application.",
      strategy: "Adopted a high-contrast dark theme with glowing yellow and emerald status indicators to reduce cognitive strain.",
      design: "Created an extensive component library with micro-interactions, responsive data tables, and fluid chart visualizers.",
      execution: "Engineered using React 18 and Vite for sub-100ms client-side page transitions and 100 Lighthouse performance scores.",
      result: "Reduced user churn by 32% and increased product trial-to-paid conversions by 48% within 90 days of release.",
      processSteps: [
        { stepNumber: "01", title: "UX Flows", description: "Mapping data hierarchies and user analytics workflows" },
        { stepNumber: "02", title: "Wireframes", description: "Prototyping responsive dashboard grids" },
        { stepNumber: "03", title: "UI Craft", description: "Dark mode color palette and custom vector chart assets" },
        { stepNumber: "04", title: "Frontend Build", description: "Writing modular TypeScript components with Tailwind" },
        { stepNumber: "05", title: "Deployment", description: "Deploying on global edge CDN with instant cache warming" }
      ],
      gallery: [
        { id: "w3-g1", title: "Live Real-Time SaaS Dashboard", caption: "Dark mode analytics overview with telemetry widgets", visualType: "saas-dashboard", layout: "large" },
        { id: "w3-g2", title: "Mobile Responsive App View", caption: "Touch-optimized metrics and fluid swipe drawer", visualType: "saas-mobile", layout: "half" },
        { id: "w3-g3", title: "Design System Tokens", caption: "Reusable UI components, buttons, and badges", visualType: "saas-analytics", layout: "half" }
      ],
      relatedServices: ["web-development", "website-development", "digital-marketing"],
      relatedProjects: ["ecommerce-website", "brand-identity-design"],
      seoTitle: "Lizzdo Media | SaaS Website Design Case Study",
      seoDescription: "Case study for PulseMetrics AI SaaS dashboard UI design and high-performance frontend engineering by Lizzdo Media."
    },
    {
      id: "work-4",
      title: "Social Media Campaign",
      slug: "social-media-campaign",
      category: "Social Media Design",
      shortCategory: "Social Media Design",
      description: "High-converting multi-platform social advertising campaign showcasing audio tech products with vibrant art direction.",
      visualType: "social-campaign",
      featured: true,
      order: 4,
      client: "Acoustix Sound Labs",
      year: "2026",
      services: ["Social Strategy", "Creative Direction", "Ad Creatives", "Carousel Design"],
      tools: ["Photoshop", "After Effects", "Figma"],
      challenge: "Launching a new wireless headphone series in an oversaturated market without relying on generic tech ad templates.",
      strategy: "Created bold yellow-and-black typographic posters and carousel teardowns focusing on sound purity and acoustic science.",
      design: "Combined dynamic product angles with rhythmic bold typography, vibrant gradient pills, and high-CTR CTA cards.",
      execution: "Produced over 40 formatted assets spanning Instagram feed, Stories, TikTok 9:16 ads, and LinkedIn executive posts.",
      result: "The campaign achieved a 4.2x ROAS and generated over 1.8M organic impressions across social channels in month one.",
      processSteps: [
        { stepNumber: "01", title: "Visual Angles", description: "Brainstorming 5 distinct visual creative angles" },
        { stepNumber: "02", title: "Batch Design", description: "Designing 40+ multi-format creatives" },
        { stepNumber: "03", title: "Motion Hooks", description: "Adding subtle 3-second animated hooks" },
        { stepNumber: "04", title: "A/B Testing", description: "Testing creative variants against live target segments" },
        { stepNumber: "05", title: "Scaling", description: "Doubling down on highest-performing creative layouts" }
      ],
      gallery: [
        { id: "w4-g1", title: "Launch Hero Social Suite", caption: "Multi-platform social campaign visual kit", visualType: "social-campaign", layout: "large" },
        { id: "w4-g2", title: "Educational Carousel Sequence", caption: "Step-by-step sound engineering teardown", visualType: "social-grid", layout: "half" },
        { id: "w4-g3", title: "Story & Reel Cover Set", caption: "9:16 vertical motion hooks for TikTok & Instagram", visualType: "social-stories", layout: "half" }
      ],
      relatedServices: ["social-media-design", "advertising-creatives", "digital-marketing"],
      relatedProjects: ["saas-website-design", "packaging-design"],
      seoTitle: "Lizzdo Media | Social Media Campaign Case Study",
      seoDescription: "Case study for Acoustix high-conversion social media campaign and advertising creatives by Lizzdo Media."
    },
    {
      id: "work-5",
      title: "Web Development",
      slug: "web-development",
      category: "Web Development",
      shortCategory: "Web Development",
      description: "High-speed modern web applications and responsive multi-device digital platforms built with React, Vite, and sub-20ms edge performance.",
      visualType: "web-development",
      featured: true,
      order: 5,
      client: "Nexus Core Technologies",
      year: "2026",
      services: ["Full-Stack Frontend", "Responsive UI/UX", "Core Web Vitals", "Decap CMS Integration"],
      tools: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      challenge: "Building an ultra-responsive, accessible corporate ecosystem that loads in under 0.5s globally and provides effortless CMS content workflows.",
      strategy: "Engineered a componentized design system with instant SPA client-side routing, automated image compression, and zero cumulative layout shift.",
      design: "Crafted sleek dark mode aesthetics paired with clean typographic rhythm and smooth GPU-accelerated motion micro-interactions.",
      execution: "Integrated Decap CMS for seamless marketing page edits, implemented global CDN edge caching, and automated SEO schema generation.",
      result: "Achieved a flawless 100/100 Google Lighthouse score across Performance, Accessibility, and SEO with a 54% boost in session duration.",
      processSteps: [
        { stepNumber: "01", title: "Architecture", description: "Route maps, component architecture, and API design" },
        { stepNumber: "02", title: "Prototyping", description: "Figma interactive responsive device mockups" },
        { stepNumber: "03", title: "Engineering", description: "Modular TypeScript and Tailwind CSS development" },
        { stepNumber: "04", title: "Optimization", description: "Lighthouse 100 Core Web Vitals performance tuning" },
        { stepNumber: "05", title: "Handoff", description: "Decap CMS client onboarding and global CDN deployment" }
      ],
      gallery: [
        { id: "w5-g1", title: "Responsive Web Engineering Ecosystem", caption: "MacBook Pro & smartphone multi-device responsive cascade", visualType: "web-development", layout: "large" },
        { id: "w5-g2", title: "Core Web Vitals 100/100 Audit", caption: "Flawless performance, accessibility, and SEO metrics", visualType: "web-development", layout: "half" },
        { id: "w5-g3", title: "TypeScript & Tailwind Architecture", caption: "Modular component tokens and sub-20ms edge delivery", visualType: "web-development", layout: "half" }
      ],
      relatedServices: ["web-development", "website-development", "brand-identity"],
      relatedProjects: ["saas-website-design", "brand-identity-design"],
      seoTitle: "Lizzdo Media | Web Development Case Study",
      seoDescription: "Case study for Nexus Core Technologies high-performance web development, 100 Core Web Vitals, and responsive UI by Lizzdo Media."
    }
  ],
  whyChooseUs: {
    eyebrow: "WHY CHOOSE US",
    headingPrefix: "Why Brands Choose ",
    headingHighlight: "Lizzdo Media",
    description: "We combine creativity, strategy, and technology to deliver exceptional results that help brands grow faster and stronger.",
    ctaText: "Let's Work Together",
    ctaUrl: "#contact"
  },
  statistics: [
    {
      id: "stat-1",
      value: "250+",
      label: "Happy Clients",
      sublabel: "Trusted by brands worldwide",
      iconKey: "smile",
      order: 1
    },
    {
      id: "stat-2",
      value: "650+",
      label: "Projects Completed",
      sublabel: "Successful projects delivered",
      iconKey: "box",
      order: 2
    },
    {
      id: "stat-3",
      value: "7+",
      label: "Years Experience",
      sublabel: "Delivering creative excellence",
      iconKey: "trophy",
      order: 3
    },
    {
      id: "stat-4",
      value: "15+",
      label: "Expert Team",
      sublabel: "Passionate professionals at your service",
      iconKey: "team",
      order: 4
    }
  ],
  testimonials: [
    {
      id: "test-1",
      quote: "Lizzdo Media transformed our brand completely. Their creativity, communication, and dedication are truly outstanding!",
      author: "Ravi Sharma",
      role: "Founder",
      company: "Urban Mart",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "test-2",
      quote: "The brand identity and website that Lizzdo Media built for us elevated our conversion rate by over 140% in the first quarter.",
      author: "Elena Rostova",
      role: "Head of Marketing",
      company: "Aura Innovations",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "test-3",
      quote: "Fast turnaround, breathtaking visual aesthetics, and genuine technical craftsmanship. They are our go-to creative agency partner.",
      author: "Marcus Vance",
      role: "Chief Executive",
      company: "Solstice Studio",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    }
  ],
  bodyCta: {
    heading: "Let's Build Something Great Together.",
    description: "Have a project in mind? Tell us what you need and let's create something that moves your brand forward.",
    ctaText: "Let's Talk",
    ctaUrl: "#contact"
  },
  features: [
    {
      id: "feat-1",
      title: "Creative & Unique Designs",
      description: "Designs that represent your brand perfectly",
      order: 1
    },
    {
      id: "feat-2",
      title: "Strategy-Driven Approach",
      description: "Data-backed strategy for real results",
      order: 2
    },
    {
      id: "feat-3",
      title: "On-Time Delivery",
      description: "We respect your time & deadlines",
      order: 3
    },
    {
      id: "feat-4",
      title: "Long-Term Partnership",
      description: "We grow when you grow",
      order: 4
    }
  ]
};

const STORAGE_KEY = "lizzdo_media_cms_content_v3";

export function loadCmsData(): DecapCMSData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...DEFAULT_CMS_DATA,
        ...parsed,
        siteSettings: { ...DEFAULT_CMS_DATA.siteSettings, ...parsed.siteSettings },
        hero: { ...DEFAULT_CMS_DATA.hero, ...parsed.hero },
        navigation: parsed.navigation || DEFAULT_CMS_DATA.navigation,
        services: parsed.services || DEFAULT_CMS_DATA.services,
        processSteps: parsed.processSteps || DEFAULT_CMS_DATA.processSteps,
        portfolio: parsed.portfolio || DEFAULT_CMS_DATA.portfolio,
        whyChooseUs: { ...DEFAULT_CMS_DATA.whyChooseUs, ...parsed.whyChooseUs },
        statistics: parsed.statistics || DEFAULT_CMS_DATA.statistics,
        testimonials: parsed.testimonials || DEFAULT_CMS_DATA.testimonials,
        bodyCta: { ...DEFAULT_CMS_DATA.bodyCta, ...parsed.bodyCta },
        features: parsed.features || DEFAULT_CMS_DATA.features,
      };
    }
  } catch (e) {
    console.warn("Could not load stored CMS data, using default", e);
  }
  return DEFAULT_CMS_DATA;
}

export function saveCmsData(data: DecapCMSData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save CMS data to localStorage", e);
  }
}

