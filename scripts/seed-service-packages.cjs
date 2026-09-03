const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, '../src/content/services');

const servicePackageData = {
  "content-creation": {
    pricingModel: "recurring",
    startingPrice: 400,
    currency: "£",
    duration: "4 weeks",
    packages: [
      {
        id: "starter",
        name: "Starter Content",
        badge: "Entry Foundation",
        recommended: false,
        description: "Ideal for small businesses and emerging brands establishing their baseline content presence.",
        idealCustomer: "Small businesses & solo founders wanting a professional, consistent monthly content baseline.",
        price: 400,
        pricePrefix: "From ",
        currency: "£",
        duration: "4 weeks",
        pricingModel: "recurring",
        pricingLabel: "From £400 / 4 weeks",
        revisionCount: "2 revision rounds per batch",
        turnaroundTime: "Initial batch in 5 business days",
        features: [
          "5 branded social media posts per week (20 posts / 4 weeks)",
          "1 short-form video reel per week (4 videos / 4 weeks)",
          "Branded visual layout templates",
          "Engaging caption copywriting & hashtag research",
          "Structured monthly content calendar",
          "Basic monthly content planning"
        ],
        deliverables: [
          "20 High-Resolution Static Visuals (1:1 & 4:5 ratios)",
          "4 Vertical Short-Form Video Reels (9:16)",
          "Complete Caption Sheet with Strategic Hooks & CTAs",
          "Platform-Optimized Hashtag Sets",
          "Pre-Scheduled Content Calendar Overview"
        ],
        notIncluded: [
          "Daily community comment moderation (available as add-on)",
          "Dedicated on-location video shooting crew",
          "Paid ad campaign management"
        ],
        ctaText: "Request Starter Package",
        sortOrder: 1
      },
      {
        id: "professional",
        name: "Professional Content",
        badge: "Most Popular",
        recommended: true,
        description: "A comprehensive content engine for growing brands requiring consistent volume, motion video, and strategic authority.",
        idealCustomer: "Growing brands wanting higher reach, video velocity, and authoritative industry positioning.",
        price: 550,
        pricePrefix: "From ",
        currency: "£",
        duration: "4 weeks",
        pricingModel: "recurring",
        pricingLabel: "From £550 / 4 weeks",
        revisionCount: "4 revision rounds per batch",
        turnaroundTime: "Initial batch in 4 business days",
        features: [
          "5–7 branded posts per week (24 posts / 4 weeks)",
          "2 short-form video reels per week (8 videos / 4 weeks)",
          "Educational multi-slide carousel graphics",
          "Dedicated content strategy & audience hook research",
          "Hashtag & trending audio research",
          "Monthly performance review & creative iteration",
          "Priority Slack / WhatsApp production communication"
        ],
        deliverables: [
          "24 Bespoke Brand Graphic Assets & Infographics",
          "8 Edited Vertical Video Reels with Motion Text & Captions",
          "3 High-Engagement Carousel Slidesets (5–7 slides each)",
          "Full Persuasive Copywriting & Storyboard Hooks",
          "Curated Trending Audio Recommendations",
          "Monthly Content Performance & Metric Review"
        ],
        notIncluded: [
          "On-location physical videography crew",
          "Paid media ad spend"
        ],
        ctaText: "Request Professional Package",
        sortOrder: 2
      },
      {
        id: "premium",
        name: "Premium Content Engine",
        badge: "High Velocity",
        recommended: false,
        description: "Full-spectrum, high-velocity content production system designed for established businesses demanding market dominance.",
        idealCustomer: "Established businesses and rapid-growth companies needing an omnichannel creative pipeline.",
        price: 750,
        pricePrefix: "From ",
        currency: "£",
        duration: "4 weeks",
        pricingModel: "recurring",
        pricingLabel: "From £750 / 4 weeks",
        revisionCount: "Comprehensive rapid revisions",
        turnaroundTime: "Priority 48-hour turnarounds on urgent assets",
        features: [
          "7+ posts per week (30+ posts / 4 weeks across channels)",
          "3+ short-form video reels per week (12+ videos / 4 weeks)",
          "Premium branded motion graphics & story cards",
          "Advanced omnichannel content strategy & storytelling",
          "Campaign-specific promotional creatives",
          "Cross-platform copywriting (Instagram, LinkedIn, X)",
          "Monthly strategy workshop & ROI reporting",
          "Dedicated Senior Creative Director oversight"
        ],
        deliverables: [
          "30+ Multi-Platform Master Visual Assets",
          "12 High-Impact Edited Video Reels with Sound Design & Subtitles",
          "5 Thought-Leadership Carousel Sets",
          "Dedicated Channel-Specific Copywriting (B2B + B2C tone)",
          "Paid Social Ad Creative Adaptation Sets",
          "Source Design Files (Figma / Adobe CC)",
          "Monthly Strategic Creative Director Call"
        ],
        notIncluded: [
          "Third-party paid media advertising budget"
        ],
        ctaText: "Request Premium Package",
        sortOrder: 3
      }
    ],
    addOns: [
      {
        id: "addon-extra-short-form-video",
        name: "Additional Short-Form Video Reel",
        description: "Extra 9:16 vertical motion video including editing, dynamic captions, and sound design.",
        price: 75,
        currency: "£",
        unit: "per video",
        priceType: "per_unit"
      },
      {
        id: "addon-social-media-management",
        name: "Social Media Publishing & Scheduling",
        description: "Hands-off scheduling, post formatting, and first-comment setup across up to 3 channels.",
        price: 180,
        currency: "£",
        unit: "per 4 weeks",
        priceType: "recurring"
      },
      {
        id: "addon-carousel-infographic",
        name: "Educational Carousel Infographic",
        description: "Bespoke 6–8 slide visual carousel breaking down complex industry insights.",
        price: 60,
        currency: "£",
        unit: "per carousel",
        priceType: "per_unit"
      },
      {
        id: "addon-paid-ad-variation",
        name: "Paid Advertising Creative Pack",
        description: "3 high-converting ad variations adapted from your content batch for Meta or TikTok ads.",
        price: 120,
        currency: "£",
        unit: "per pack",
        priceType: "per_unit"
      }
    ],
    comparisonRows: [
      {
        feature: "Weekly Post Volume",
        category: "Deliverables",
        starter: "5 posts / week (20 total)",
        professional: "5–7 posts / week (24 total)",
        premium: "7+ posts / week (30+ total)"
      },
      {
        feature: "Short-Form Video Reels",
        category: "Deliverables",
        starter: "1 reel / week (4 total)",
        professional: "2 reels / week (8 total)",
        premium: "3+ reels / week (12+ total)"
      },
      {
        feature: "Multi-Slide Carousels",
        category: "Deliverables",
        starter: "Optional add-on",
        professional: "3 carousel decks",
        premium: "5 carousel decks"
      },
      {
        feature: "Caption Writing & Hashtags",
        category: "Strategy & Copy",
        starter: true,
        professional: true,
        premium: "Multi-platform tailored"
      },
      {
        feature: "Content Calendar & Planning",
        category: "Strategy & Copy",
        starter: "Monthly baseline",
        professional: "Strategic pillars & hooks",
        premium: "Omnichannel campaign strategy"
      },
      {
        feature: "Revision Rounds",
        category: "Service & Support",
        starter: "2 rounds per batch",
        professional: "4 rounds per batch",
        premium: "Comprehensive rapid revisions"
      },
      {
        feature: "Production Turnaround",
        category: "Service & Support",
        starter: "5 business days",
        professional: "4 business days",
        premium: "Priority 48-hour sprints"
      },
      {
        feature: "Performance & Strategy Reviews",
        category: "Service & Support",
        starter: false,
        professional: "Monthly report",
        premium: "Monthly review call + report"
      },
      {
        feature: "Source Files (Figma / Adobe)",
        category: "Deliverables",
        starter: false,
        professional: false,
        premium: true
      }
    ],
    whoIsThisFor: {
      starter: "Small businesses, local services, and solo founders who need a consistent, professional monthly content presence without high overhead.",
      professional: "Growing brands, e-commerce stores, and service companies looking to scale reach, boost engagement, and leverage short-form video reels.",
      premium: "Established brands, funded startups, and industry leaders requiring a high-velocity, multi-platform content production machine."
    }
  },

  "brand-identity": {
    pricingModel: "project",
    startingPrice: 750,
    currency: "£",
    duration: "project",
    packages: [
      {
        id: "starter",
        name: "Brand Foundation",
        badge: "Essential",
        recommended: false,
        description: "Essential visual branding tailored for new ventures and founders launching with a clear, cohesive identity.",
        idealCustomer: "Startups, independent professionals & new businesses establishing their foundational market mark.",
        price: 750,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £750 / project",
        revisionCount: "2 revision rounds",
        turnaroundTime: "10–14 business days",
        features: [
          "Primary bespoke vector logo design (2 strategic directions)",
          "Curated brand color palette (HEX, RGB, CMYK)",
          "Typography pairing system & hierarchy guidelines",
          "Monochrome & inverted logo variations",
          "Digital export pack (SVG, PNG, EPS, PDF)",
          "Essential Brand Direction One-Pager"
        ],
        deliverables: [
          "Primary Logo in All Standard Formats (Vector SVG/EPS + Raster PNG/JPG)",
          "Monochrome Black & White Master Formats",
          "Curated 5-Color Brand Palette Specification Sheet",
          "Primary & Secondary Typography Font System Recommendations",
          "Essential Brand Identity Guidelines Sheet"
        ],
        notIncluded: [
          "Complete multi-page Brand Guidelines manual",
          "Custom stationery and business card print artwork",
          "Social media template kits"
        ],
        ctaText: "Request Foundation Package",
        sortOrder: 1
      },
      {
        id: "professional",
        name: "Brand Authority",
        badge: "Recommended",
        recommended: true,
        description: "A complete, strategic brand identity system engineered for businesses seeking market distinction and credibility.",
        idealCustomer: "Growing businesses ready to upgrade from generic visuals to a distinctive, market-leading identity.",
        price: 1450,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £1,450 / project",
        revisionCount: "4 revision rounds",
        turnaroundTime: "2–3 weeks",
        features: [
          "Complete responsive logo system (Primary, Secondary, Monogram, Favicon)",
          "Comprehensive Brand Guidelines Manual (20+ pages)",
          "Primary & extended color system with accessibility contrast ratings",
          "Custom brand pattern, iconography & graphic device suite",
          "Print stationery suite (Business cards, letterhead, presentation folder)",
          "Social media profile kit (Avatars, banners & 6 editable launch templates)",
          "Real-world mockups demonstrating brand applications"
        ],
        deliverables: [
          "Full Vector Master Asset Archive (Illustrator, EPS, SVG, PDF)",
          "Comprehensive 20+ Page Brand Guidelines Manual (PDF)",
          "Complete Stationery Suite Ready for Commercial Print (CMYK + Bleed)",
          "Social Media Launch Kit (Avatars, LinkedIn/X Banners, 6 Post Templates)",
          "Bespoke Brand Graphic Devices, Texture, and Iconography Suite",
          "Commercial Copyright & Intellectual Property Transfer"
        ],
        notIncluded: [
          "Packaging structural engineering",
          "Website development (available in Brand Launch Bundle)"
        ],
        ctaText: "Request Authority Package",
        sortOrder: 2
      },
      {
        id: "premium",
        name: "Enterprise Identity System",
        badge: "Flagship",
        recommended: false,
        description: "Comprehensive corporate brand architecture, strategy, and cross-medium design system for established market leaders.",
        idealCustomer: "Established enterprises, scale-ups, and luxury brands executing a major repositioning or IPO launch.",
        price: 2800,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £2,800 / project",
        revisionCount: "Comprehensive iterative revisions",
        turnaroundTime: "4–6 weeks",
        features: [
          "Strategic brand discovery workshop & competitive landscape audit",
          "Complete omnichannel brand architecture & sub-brand system",
          "Exhaustive 40+ page Master Brand Design System manual",
          "Complete corporate stationery & luxury print packaging specifications",
          "3D animated logo sting / video brand motion intro",
          "Full digital UI design system kit (Figma tokens & components)",
          "Comprehensive marketing collateral templates (Pitch deck, brochures, ads)",
          "Dedicated Senior Creative Director consultation throughout"
        ],
        deliverables: [
          "Master Vector Archive with Full Commercial IP Transfer",
          "Exhaustive 40+ Page Brand Standards Bible (Digital & Print)",
          "Figma Component Library & Design Tokens",
          "Corporate Stationery & Luxury Print Production Consultation",
          "15-Slide Master Pitch Deck Template (Keynote & PowerPoint)",
          "3D Motion Logo Sting (4K MP4 + Transparent ProRes)",
          "Sub-Brand / Product Extension Hierarchy Matrix"
        ],
        notIncluded: [
          "Third-party font license purchase fees",
          "Physical printing manufacturing costs"
        ],
        ctaText: "Request Enterprise Package",
        sortOrder: 3
      }
    ],
    addOns: [
      {
        id: "addon-stationery-suite",
        name: "Luxury Print Stationery Suite",
        description: "Print-ready business cards, letterhead, envelope, and presentation folder with spot UV/foil specs.",
        price: 280,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      },
      {
        id: "addon-logo-animation",
        name: "3D Motion Logo Sting",
        description: "Custom 3D or 2D animated logo reveal for video intros, presentations, and website heroes.",
        price: 320,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      },
      {
        id: "addon-pitch-deck",
        name: "15-Slide Branded Pitch Deck",
        description: "Custom investor or sales presentation deck in Figma, PowerPoint, or Keynote.",
        price: 450,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      },
      {
        id: "addon-social-kit-brand",
        name: "Social Media Profile & Template Kit",
        description: "Custom banners, highlight icons, and 9 bespoke post/story templates.",
        price: 250,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      }
    ],
    comparisonRows: [
      {
        feature: "Initial Concept Directions",
        category: "Creative Concepts",
        starter: "2 strategic directions",
        professional: "3–4 strategic directions",
        premium: "5+ exhaustive directions"
      },
      {
        feature: "Logo Lockups Included",
        category: "Deliverables",
        starter: "Primary + Monochrome",
        professional: "Full System (Primary, Secondary, Favicon, Monogram)",
        premium: "Omnichannel System + Sub-Brand Lockups"
      },
      {
        feature: "Brand Guidelines Manual",
        category: "Documentation",
        starter: "One-pager overview",
        professional: "20+ Page Comprehensive Book",
        premium: "40+ Page Enterprise Design System"
      },
      {
        feature: "Stationery Suite",
        category: "Collateral",
        starter: "Optional add-on",
        professional: true,
        premium: "Full Corporate + Luxury Specs"
      },
      {
        feature: "Social Media Asset Suite",
        category: "Collateral",
        starter: "Optional add-on",
        professional: "Avatars + Banners + 6 Templates",
        premium: "Full Omnichannel Asset Suite"
      },
      {
        feature: "Animated Motion Logo",
        category: "Motion & 3D",
        starter: false,
        professional: "Optional add-on",
        premium: "Included (4K MP4 + ProRes)"
      },
      {
        feature: "Revision Rounds",
        category: "Service & Support",
        starter: "2 revision rounds",
        professional: "4 revision rounds",
        premium: "Comprehensive revisions"
      },
      {
        feature: "Delivery Timeline",
        category: "Service & Support",
        starter: "10–14 business days",
        professional: "2–3 weeks",
        premium: "4–6 weeks dedicated sprint"
      }
    ],
    whoIsThisFor: {
      starter: "Early-stage founders, creators, and new businesses needing clean, cohesive, professional visual fundamentals to enter the market.",
      professional: "Growing companies and established businesses ready to command higher prices, build brand equity, and ensure total visual consistency across all touchpoints.",
      premium: "Enterprise corporations, VC-backed scale-ups, and heritage brands requiring comprehensive brand architecture, sub-brand governance, and executive oversight."
    }
  },

  "packaging-design": {
    pricingModel: "project",
    startingPrice: 550,
    currency: "£",
    duration: "project",
    packages: [
      {
        id: "starter",
        name: "Single Product Packaging",
        badge: "Essential",
        recommended: false,
        description: "Professional packaging artwork designed for single-SKU product launches and initial production runs.",
        idealCustomer: "Startups and DTC creators launching their first physical product.",
        price: 550,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £550 / project",
        revisionCount: "2 revision rounds",
        turnaroundTime: "7–10 business days",
        features: [
          "Packaging design concept for 1 product SKU / format",
          "Front, back, and panel layout configuration",
          "Production dieline alignment & barcode/nutrition panel integration",
          "Print-ready CMYK master artwork with bleeds & crop marks",
          "High-resolution 3D digital mockup for e-commerce preview"
        ],
        deliverables: [
          "Print-Ready Press PDF (CMYK, 300 DPI, Vectors Outlined)",
          "Vector Master Source File (Adobe Illustrator / InDesign)",
          "1 Photorealistic 3D Product Mockup (PNG & JPG)",
          "Pre-Flight Print Specification Sheet"
        ],
        notIncluded: [
          "Multiple flavor / color variations",
          "Direct manufacturer print proof inspections"
        ],
        ctaText: "Request Single SKU Package",
        sortOrder: 1
      },
      {
        id: "professional",
        name: "Retail Brand Packaging",
        badge: "Recommended",
        recommended: true,
        description: "Retail-shelf ready packaging design engineered to command consumer attention in physical stores and online.",
        idealCustomer: "Consumer brands expanding into supermarkets, retail boutiques, or high-volume e-commerce.",
        price: 950,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £950 / project",
        revisionCount: "4 revision rounds",
        turnaroundTime: "2–3 weeks",
        features: [
          "2 distinct creative packaging concepts for primary SKU",
          "Complete multi-panel dieline engineering with accurate structural fold testing",
          "Specialty finish consultation (Spot UV, metallic foil stamping, emboss/deboss)",
          "Print-ready CMYK + Pantone spot color separation",
          "Set of 3 photorealistic 3D product renders (Angles, lifestyle & hero)",
          "Regulatory compliance checklist (Ingredients, warnings, barcode zones)",
          "Direct communication with your packaging manufacturer or print house"
        ],
        deliverables: [
          "Production-Ready Packaging Files (CMYK + Pantone Spot Separations)",
          "Fully Layered Dieline Illustrator Source Files (.ai)",
          "3 High-Resolution Photorealistic 3D Studio Mockups",
          "Finishing Guide & Foil/Emboss Mask Layers",
          "Direct Manufacturer Pre-Press Handoff Support"
        ],
        notIncluded: [
          "Physical sample printing / prototype manufacturing costs"
        ],
        ctaText: "Request Retail Package",
        sortOrder: 2
      },
      {
        id: "premium",
        name: "Full Product Line Suite",
        badge: "Multi-SKU System",
        recommended: false,
        description: "Complete packaging architecture for comprehensive product families, multiple SKUs, and retail distribution.",
        idealCustomer: "Established FMCG, cosmetics, food & beverage, or luxury lifestyle brands with multiple product lines.",
        price: 1850,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £1,850 / project",
        revisionCount: "Comprehensive iterative revisions",
        turnaroundTime: "3–5 weeks",
        features: [
          "Complete packaging design system for up to 4 SKUs or flavour/size variants",
          "Harmonized colour hierarchy & SKU differentiation strategy",
          "Luxury substrate & tactile finish specifications (Kraft, soft-touch, foil, embossing)",
          "Shipper box / secondary retail display packaging design (SRP)",
          "Comprehensive 3D render suite (Individual SKUs, group lineup, and e-commerce packshots)",
          "Packaging brand standards manual (Colour rules, typography, dieline rules)",
          "End-to-end print vendor coordination and press proof approvals"
        ],
        deliverables: [
          "Complete Vector Master Files for All 4 SKUs",
          "Secondary Outer Packaging / Shipper Box Dielines",
          "8 High-Definition 3D Commercial Product Renders",
          "Packaging Standards & SKU Extension Manual (PDF)",
          "Manufacturer-Ready Pantone/CMYK Technical Proofs",
          "Complete Commercial IP Rights"
        ],
        notIncluded: [
          "Physical mass manufacturing production costs"
        ],
        ctaText: "Request Product Line Suite",
        sortOrder: 3
      }
    ],
    addOns: [
      {
        id: "addon-additional-sku",
        name: "Additional SKU Variant (Flavor / Color)",
        description: "Adaptation of approved base packaging concept to an additional SKU flavor, scent, or shade.",
        price: 220,
        currency: "£",
        unit: "per SKU",
        priceType: "per_unit"
      },
      {
        id: "addon-3d-animated-turnaround",
        name: "3D Animated 360° Product Reel",
        description: "Smooth 360-degree rotating 3D video render of your packaged product for ads and website heroes.",
        price: 350,
        currency: "£",
        unit: "per video",
        priceType: "per_unit"
      },
      {
        id: "addon-outer-carton",
        name: "Outer Shipper / Retail Display Box",
        description: "Design of master shipping carton or shelf-ready packaging (SRP) tray.",
        price: 280,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      }
    ],
    comparisonRows: [
      {
        feature: "SKUs / Variants Included",
        category: "Scope",
        starter: "1 SKU",
        professional: "1 Primary SKU (Detailed)",
        premium: "Up to 4 SKUs / Variants"
      },
      {
        feature: "Initial Design Directions",
        category: "Design",
        starter: "1 Concept Direction",
        professional: "2 Distinct Directions",
        premium: "3 Strategic Lineup Concepts"
      },
      {
        feature: "Photorealistic 3D Renders",
        category: "Visuals",
        starter: "1 basic 3D preview",
        professional: "3 studio angle renders",
        premium: "8 high-fidelity renders + group lineup"
      },
      {
        feature: "Specialty Finishes (Foil/Emboss)",
        category: "Print Prep",
        starter: "Standard CMYK only",
        professional: "Pantone + Foil / Emboss layers",
        premium: "Full luxury tactile finish guide"
      },
      {
        feature: "Manufacturer Coordination",
        category: "Service",
        starter: "Pre-flight specs sheet",
        professional: "Direct vendor email handoff",
        premium: "End-to-end printer proof verification"
      },
      {
        feature: "Revision Rounds",
        category: "Service",
        starter: "2 rounds",
        professional: "4 rounds",
        premium: "Comprehensive revisions"
      }
    ],
    whoIsThisFor: {
      starter: "Emerging creators and DTC entrepreneurs launching their initial product or running a boutique production batch.",
      professional: "Brands transitioning into retail stores, supermarkets, or high-end retail boutiques where packaging shelf appeal drives sales.",
      premium: "Multi-product consumer brands, cosmetic lines, food & beverage companies, and luxury goods distributors requiring an extensible packaging ecosystem."
    }
  },

  "web-development": {
    pricingModel: "project",
    startingPrice: 950,
    currency: "£",
    duration: "project",
    packages: [
      {
        id: "starter",
        name: "Starter Business Website",
        badge: "Essential Launch",
        recommended: false,
        description: "A fast, modern, mobile-first website engineered to establish credibility and capture inbound client inquiries.",
        idealCustomer: "Local businesses, professional service providers, and startups requiring a sharp web presence.",
        price: 950,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £950 / project",
        revisionCount: "2 revision rounds",
        turnaroundTime: "2–3 weeks",
        features: [
          "Modern responsive website up to 5 core pages (Home, About, Services, Contact, Legal)",
          "High-conversion lead capture inquiry form",
          "Mobile-first responsive layout (Optimized for iOS & Android)",
          "Clean on-page SEO foundation & Meta tags",
          "Google Maps & WhatsApp contact integration",
          "SSL security & lightning-fast speed optimization"
        ],
        deliverables: [
          "Fully Deployed Live Website on Custom Domain",
          "Responsive Clean Codebase (React / TypeScript / Tailwind)",
          "Interactive Contact Form with Email Notifications",
          "Essential Meta & Open Graph Social Share Setup",
          "30-Day Post-Launch Bug-Fix Warranty"
        ],
        notIncluded: [
          "Dynamic CMS content management dashboard",
          "E-commerce payment gateway integration",
          "Custom API third-party integrations"
        ],
        ctaText: "Request Starter Website",
        sortOrder: 1
      },
      {
        id: "professional",
        name: "Custom Agency Website",
        badge: "Most Popular",
        recommended: true,
        description: "A bespoke, custom-engineered website featuring Decap CMS, interactive animations, and deep conversion optimization.",
        idealCustomer: "Growing businesses, digital agencies, and companies seeking inbound lead generation and effortless content management.",
        price: 1850,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £1,850 / project",
        revisionCount: "4 revision rounds",
        turnaroundTime: "3–5 weeks",
        features: [
          "Custom bespoke architecture up to 10 pages + dynamic case studies/services",
          "Decap CMS integration (Edit text, images, case studies & blogs without code)",
          "Smooth scroll animations, micro-interactions & motion transitions",
          "Advanced SEO engineering (Schema.org structured data, XML sitemap, canonicals)",
          "Google Analytics 4 & Google Tag Manager tracking integration",
          "Interactive filters, search, and dynamic service package cards",
          "Automated lead capture & WhatsApp deep links"
        ],
        deliverables: [
          "Production Deployment with Git-Backed CMS Engine",
          "Full Content Editing Admin Dashboard (/admin/)",
          "Schema.org JSON-LD Structured Data for Rich Google Snippets",
          "Automated Dynamic XML Sitemap Generator",
          "1-on-1 CMS Video Training Session for Your Team",
          "60-Day Post-Launch Technical Support & Warranty"
        ],
        notIncluded: [
          "Complex custom user authentication or subscription portals",
          "Third-party paid hosting / domain registration fees"
        ],
        ctaText: "Request Custom Website",
        sortOrder: 2
      },
      {
        id: "premium",
        name: "Enterprise Digital Platform",
        badge: "Advanced Web Engine",
        recommended: false,
        description: "High-performance custom web application or advanced e-commerce platform with custom logic, integrations, and scale.",
        idealCustomer: "Scale-ups, e-commerce brands, SaaS companies, and organizations requiring bespoke interactive workflows.",
        price: 3500,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £3,500 / project",
        revisionCount: "Comprehensive iterative revisions",
        turnaroundTime: "5–8 weeks",
        features: [
          "Custom multi-page web application or complete e-commerce architecture",
          "Bespoke interactive features (Product configurators, calculators, or member areas)",
          "Stripe / PayPal payment processing & subscription checkout flows",
          "Custom headless CMS workflows, webhooks, and REST/GraphQL API connections",
          "Advanced speed optimization scoring 95+ on Google Lighthouse",
          "High-conversion CRO design architecture tailored to your audience",
          "Priority 90-day post-launch support and developer SLA"
        ],
        deliverables: [
          "Full Master Source Code Repository with Complete Commercial Ownership",
          "Custom Production Server Configuration & CI/CD Pipeline",
          "Secure Payment & Checkout Integrations",
          "Enterprise Google Lighthouse Audit & Performance Sign-off",
          "Dedicated Senior Full-Stack Architect Support",
          "Comprehensive Architecture Documentation"
        ],
        notIncluded: [
          "Ongoing monthly cloud hosting and SaaS API subscription costs"
        ],
        ctaText: "Request Enterprise Platform",
        sortOrder: 3
      }
    ],
    addOns: [
      {
        id: "addon-additional-page",
        name: "Additional Custom Web Page",
        description: "Design and development of an extra bespoke page with custom layout and responsive styling.",
        price: 150,
        currency: "£",
        unit: "per page",
        priceType: "per_unit"
      },
      {
        id: "addon-ecommerce-module",
        name: "E-Commerce Checkout & Product Module",
        description: "Stripe-powered checkout, shopping cart, and product management setup.",
        price: 650,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      },
      {
        id: "addon-maintenance-plan",
        name: "Monthly Maintenance, Security & Backups",
        description: "Monthly plugin updates, security scanning, performance monitoring, and 2 hours of content updates.",
        price: 120,
        currency: "£",
        unit: "per month",
        priceType: "recurring"
      },
      {
        id: "addon-multilingual",
        name: "Multi-Language Localization Setup",
        description: "Bespoke multilingual routing, language switcher, and translation architecture.",
        price: 450,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      }
    ],
    comparisonRows: [
      {
        feature: "Number of Core Pages",
        category: "Scope",
        starter: "Up to 5 Pages",
        professional: "Up to 10 Pages + Dynamic CMS",
        premium: "Bespoke Architecture (15+ Pages)"
      },
      {
        feature: "Decap CMS Content Dashboard",
        category: "Content Management",
        starter: false,
        professional: "Included (Full visual admin)",
        premium: "Advanced CMS + Custom Schemas"
      },
      {
        feature: "Responsive Design & Mobile Tuning",
        category: "Design & UX",
        starter: true,
        professional: true,
        premium: true
      },
      {
        feature: "Interactive Motion & Animations",
        category: "Design & UX",
        starter: "Standard CSS transitions",
        professional: "Bespoke scroll motion & micro-interactions",
        premium: "Advanced 3D / WebGL / motion effects"
      },
      {
        feature: "SEO & Schema.org Structured Data",
        category: "SEO & Performance",
        starter: "Basic Meta & Open Graph",
        professional: "Full Schema.org JSON-LD + Sitemap",
        premium: "Enterprise SEO + Core Web Vitals 95+"
      },
      {
        feature: "E-Commerce / Payment Integration",
        category: "Features",
        starter: "Optional add-on",
        professional: "Optional add-on",
        premium: "Included (Stripe / Cart)"
      },
      {
        feature: "Post-Launch Warranty",
        category: "Support",
        starter: "30 Days",
        professional: "60 Days",
        premium: "90 Days Dedicated SLA"
      }
    ],
    whoIsThisFor: {
      starter: "Businesses and solo entrepreneurs needing an authoritative, elegant website quickly to showcase services and receive customer inquiries.",
      professional: "Companies demanding a competitive digital edge, effortless in-house content editing via CMS, and advanced SEO visibility.",
      premium: "E-commerce brands, high-growth scale-ups, and established organizations requiring custom digital applications, payments, and integrations."
    }
  },

  "website-development": {
    pricingModel: "project",
    startingPrice: 950,
    currency: "£",
    duration: "project",
    packages: [
      {
        id: "starter",
        name: "Starter Business Website",
        badge: "Essential Launch",
        recommended: false,
        description: "A fast, modern, mobile-first website engineered to establish credibility and capture inbound client inquiries.",
        idealCustomer: "Local businesses, professional service providers, and startups requiring a sharp web presence.",
        price: 950,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £950 / project",
        revisionCount: "2 revision rounds",
        turnaroundTime: "2–3 weeks",
        features: [
          "Modern responsive website up to 5 core pages (Home, About, Services, Contact, Legal)",
          "High-conversion lead capture inquiry form",
          "Mobile-first responsive layout (Optimized for iOS & Android)",
          "Clean on-page SEO foundation & Meta tags",
          "Google Maps & WhatsApp contact integration",
          "SSL security & lightning-fast speed optimization"
        ],
        deliverables: [
          "Fully Deployed Live Website on Custom Domain",
          "Responsive Clean Codebase (React / TypeScript / Tailwind)",
          "Interactive Contact Form with Email Notifications",
          "Essential Meta & Open Graph Social Share Setup",
          "30-Day Post-Launch Bug-Fix Warranty"
        ],
        notIncluded: [
          "Dynamic CMS content management dashboard",
          "E-commerce payment gateway integration",
          "Custom API third-party integrations"
        ],
        ctaText: "Request Starter Website",
        sortOrder: 1
      },
      {
        id: "professional",
        name: "Custom Agency Website",
        badge: "Most Popular",
        recommended: true,
        description: "A bespoke, custom-engineered website featuring Decap CMS, interactive animations, and deep conversion optimization.",
        idealCustomer: "Growing businesses, digital agencies, and companies seeking inbound lead generation and effortless content management.",
        price: 1850,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £1,850 / project",
        revisionCount: "4 revision rounds",
        turnaroundTime: "3–5 weeks",
        features: [
          "Custom bespoke architecture up to 10 pages + dynamic case studies/services",
          "Decap CMS integration (Edit text, images, case studies & blogs without code)",
          "Smooth scroll animations, micro-interactions & motion transitions",
          "Advanced SEO engineering (Schema.org structured data, XML sitemap, canonicals)",
          "Google Analytics 4 & Google Tag Manager tracking integration",
          "Interactive filters, search, and dynamic service package cards",
          "Automated lead capture & WhatsApp deep links"
        ],
        deliverables: [
          "Production Deployment with Git-Backed CMS Engine",
          "Full Content Editing Admin Dashboard (/admin/)",
          "Schema.org JSON-LD Structured Data for Rich Google Snippets",
          "Automated Dynamic XML Sitemap Generator",
          "1-on-1 CMS Video Training Session for Your Team",
          "60-Day Post-Launch Technical Support & Warranty"
        ],
        notIncluded: [
          "Complex custom user authentication or subscription portals",
          "Third-party paid hosting / domain registration fees"
        ],
        ctaText: "Request Custom Website",
        sortOrder: 2
      },
      {
        id: "premium",
        name: "Enterprise Digital Platform",
        badge: "Advanced Web Engine",
        recommended: false,
        description: "High-performance custom web application or advanced e-commerce platform with custom logic, integrations, and scale.",
        idealCustomer: "Scale-ups, e-commerce brands, SaaS companies, and organizations requiring bespoke interactive workflows.",
        price: 3500,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £3,500 / project",
        revisionCount: "Comprehensive iterative revisions",
        turnaroundTime: "5–8 weeks",
        features: [
          "Custom multi-page web application or complete e-commerce architecture",
          "Bespoke interactive features (Product configurators, calculators, or member areas)",
          "Stripe / PayPal payment processing & subscription checkout flows",
          "Custom headless CMS workflows, webhooks, and REST/GraphQL API connections",
          "Advanced speed optimization scoring 95+ on Google Lighthouse",
          "High-conversion CRO design architecture tailored to your audience",
          "Priority 90-day post-launch support and developer SLA"
        ],
        deliverables: [
          "Full Master Source Code Repository with Complete Commercial Ownership",
          "Custom Production Server Configuration & CI/CD Pipeline",
          "Secure Payment & Checkout Integrations",
          "Enterprise Google Lighthouse Audit & Performance Sign-off",
          "Dedicated Senior Full-Stack Architect Support",
          "Comprehensive Architecture Documentation"
        ],
        notIncluded: [
          "Ongoing monthly cloud hosting and SaaS API subscription costs"
        ],
        ctaText: "Request Enterprise Platform",
        sortOrder: 3
      }
    ],
    addOns: [
      {
        id: "addon-additional-page-wd",
        name: "Additional Custom Web Page",
        description: "Design and development of an extra bespoke page with custom layout and responsive styling.",
        price: 150,
        currency: "£",
        unit: "per page",
        priceType: "per_unit"
      },
      {
        id: "addon-ecommerce-module-wd",
        name: "E-Commerce Checkout & Product Module",
        description: "Stripe-powered checkout, shopping cart, and product management setup.",
        price: 650,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      },
      {
        id: "addon-maintenance-plan-wd",
        name: "Monthly Maintenance, Security & Backups",
        description: "Monthly updates, security scanning, performance monitoring, and 2 hours of content updates.",
        price: 120,
        currency: "£",
        unit: "per month",
        priceType: "recurring"
      },
      {
        id: "addon-multilingual-wd",
        name: "Multi-Language Localization Setup",
        description: "Bespoke multilingual routing, language switcher, and translation architecture.",
        price: 450,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      }
    ],
    comparisonRows: [
      {
        feature: "Number of Core Pages",
        category: "Scope",
        starter: "Up to 5 Pages",
        professional: "Up to 10 Pages + Dynamic CMS",
        premium: "Bespoke Architecture (15+ Pages)"
      },
      {
        feature: "Decap CMS Content Dashboard",
        category: "Content Management",
        starter: false,
        professional: "Included (Full visual admin)",
        premium: "Advanced CMS + Custom Schemas"
      },
      {
        feature: "Responsive Design & Mobile Tuning",
        category: "Design & UX",
        starter: true,
        professional: true,
        premium: true
      },
      {
        feature: "Interactive Motion & Animations",
        category: "Design & UX",
        starter: "Standard CSS transitions",
        professional: "Bespoke scroll motion & micro-interactions",
        premium: "Advanced 3D / WebGL / motion effects"
      },
      {
        feature: "SEO & Schema.org Structured Data",
        category: "SEO & Performance",
        starter: "Basic Meta & Open Graph",
        professional: "Full Schema.org JSON-LD + Sitemap",
        premium: "Enterprise SEO + Core Web Vitals 95+"
      },
      {
        feature: "E-Commerce / Payment Integration",
        category: "Features",
        starter: "Optional add-on",
        professional: "Optional add-on",
        premium: "Included (Stripe / Cart)"
      },
      {
        feature: "Post-Launch Warranty",
        category: "Support",
        starter: "30 Days",
        professional: "60 Days",
        premium: "90 Days Dedicated SLA"
      }
    ],
    whoIsThisFor: {
      starter: "Businesses and solo entrepreneurs needing an authoritative, elegant website quickly to showcase services and receive customer inquiries.",
      professional: "Companies demanding a competitive digital edge, effortless in-house content editing via CMS, and advanced SEO visibility.",
      premium: "E-commerce brands, high-growth scale-ups, and established organizations requiring custom digital applications, payments, and integrations."
    }
  },

  "logo-design": {
    pricingModel: "project",
    startingPrice: 350,
    currency: "£",
    duration: "project",
    packages: [
      {
        id: "starter",
        name: "Essential Logo",
        badge: "Startup Mark",
        recommended: false,
        description: "A clean, bespoke vector logo designed to give your venture an immediate professional trademark.",
        idealCustomer: "Startups, consultants, and independent creators needing a memorable visual mark.",
        price: 350,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £350 / project",
        revisionCount: "2 revision rounds",
        turnaroundTime: "5–7 business days",
        features: [
          "2 bespoke concept directions based on your brief",
          "Primary logo mark & monochrome variations",
          "Export pack for web & print (SVG, PNG, EPS, PDF)",
          "Font recommendations & basic color codes (HEX/RGB)",
          "Full commercial usage rights"
        ],
        deliverables: [
          "Primary Vector Master (.ai, .svg, .eps)",
          "Transparent High-Resolution PNGs (Dark & Light backgrounds)",
          "Basic Color Palette Specification Sheet"
        ],
        notIncluded: [
          "Secondary sub-marks & favicon suites",
          "Brand guidelines manual"
        ],
        ctaText: "Request Essential Logo",
        sortOrder: 1
      },
      {
        id: "professional",
        name: "Brand Mark System",
        badge: "Recommended",
        recommended: true,
        description: "A complete responsive logo system designed for modern multi-platform versatility.",
        idealCustomer: "Growing businesses upgrading from DIY or marketplace logos to an authoritative trademark.",
        price: 650,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £650 / project",
        revisionCount: "4 revision rounds",
        turnaroundTime: "7–10 business days",
        features: [
          "3–4 tailored strategic concept directions",
          "Complete responsive logo system (Horizontal, Stacked, Icon/Favicon, Monogram)",
          "Color hierarchy guide (CMYK, RGB, HEX, Pantone matching)",
          "Typography pairing sheet with commercial licensing recommendations",
          "Vector source files & social media profile avatar crop kit",
          "Logo usage dos & don'ts rulesheet"
        ],
        deliverables: [
          "Full Responsive Logo Vector Archive (.ai, .svg, .eps, .pdf)",
          "Favicon and App Icon Master Formats",
          "Social Media Profile Avatars Sized for All Major Networks",
          "Color System Specifications (CMYK/Pantone/HEX)",
          "Logo Style Guide One-Pager (PDF)"
        ],
        notIncluded: [
          "Multi-page corporate stationery suite"
        ],
        ctaText: "Request Logo System",
        sortOrder: 2
      },
      {
        id: "premium",
        name: "Master Trademark Suite",
        badge: "Complete Identity Mark",
        recommended: false,
        description: "Strategic visual trademark suite including 3D motion reveal, sub-brand lockups, and full legal copyright assignment.",
        idealCustomer: "Established enterprises, luxury brands, and funded ventures seeking an iconic trademark.",
        price: 1150,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £1,150 / project",
        revisionCount: "Comprehensive revisions",
        turnaroundTime: "2–3 weeks",
        features: [
          "5 strategic visual directions with market differentiation analysis",
          "Complete responsive logo lockup ecosystem including sub-brand variants",
          "3D animated logo motion sting (4K MP4 + Transparent WebM/ProRes)",
          "Bespoke brand iconography / secondary graphic symbols",
          "Exhaustive Logo Standards Manual (15+ pages)",
          "Formal Intellectual Property Assignment Documentation"
        ],
        deliverables: [
          "Master Vector Source Archives with Complete Trademark Transfer",
          "Animated 3D Logo Reveal Video (4K + Alpha Channel)",
          "Bespoke Vector Brand Monogram & Custom Icon Set",
          "15-Page Logo Guidelines Manual",
          "Full Print & Digital Handoff Guarantee"
        ],
        notIncluded: [
          "Trademark registration legal attorney filing fees"
        ],
        ctaText: "Request Master Suite",
        sortOrder: 3
      }
    ],
    addOns: [
      {
        id: "addon-logo-animation-ld",
        name: "3D Motion Logo Animation",
        description: "Smooth 3D or 2D animated reveal clip for video intros and presentations.",
        price: 280,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      },
      {
        id: "addon-brand-guideline-sheet",
        name: "Brand Style One-Pager Guide",
        description: "Quick-reference style sheet covering logo spacing, color codes, and font rules.",
        price: 150,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      },
      {
        id: "addon-express-turnaround-ld",
        name: "Priority 48-Hour Fast-Track Sprint",
        description: "Dedicated priority studio sprint delivering initial concepts within 48 hours.",
        price: 200,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      }
    ],
    comparisonRows: [
      {
        feature: "Concept Directions",
        category: "Creative Concepts",
        starter: "2 Concepts",
        professional: "3–4 Concepts",
        premium: "5 Strategic Directions"
      },
      {
        feature: "Logo Lockups Included",
        category: "Deliverables",
        starter: "Primary mark only",
        professional: "Horizontal, Stacked, Favicon, Monogram",
        premium: "Complete Ecosystem + Sub-Brands"
      },
      {
        feature: "Vector Source Files",
        category: "Deliverables",
        starter: true,
        professional: true,
        premium: true
      },
      {
        feature: "Animated Motion Logo",
        category: "Deliverables",
        starter: false,
        professional: "Optional add-on",
        premium: "Included (4K Motion Reveal)"
      },
      {
        feature: "Style Documentation",
        category: "Documentation",
        starter: "Basic color codes",
        professional: "Usage rules rulesheet",
        premium: "15-Page Logo Standards Manual"
      },
      {
        feature: "Revision Rounds",
        category: "Service",
        starter: "2 rounds",
        professional: "4 rounds",
        premium: "Comprehensive revisions"
      }
    ],
    whoIsThisFor: {
      starter: "New founders, creators, and freelancers who need a clean, polished vector logo mark quickly.",
      professional: "Growing companies looking to replace outdated or generic marks with an authoritative brand identity system.",
      premium: "Established corporations, premium products, and ventures seeking a memorable, protected visual trademark."
    }
  },

  "graphic-design": {
    pricingModel: "project",
    startingPrice: 250,
    currency: "£",
    duration: "project",
    packages: [
      {
        id: "starter",
        name: "Single Collateral Item",
        badge: "Essential Asset",
        recommended: false,
        description: "Design of a single marketing collateral asset tailored for a specific promotional requirement or event.",
        idealCustomer: "Businesses needing one key graphic asset designed quickly with professional polish.",
        price: 250,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £250 / project",
        revisionCount: "2 revision rounds",
        turnaroundTime: "3–5 business days",
        features: [
          "Design of 1 collateral item (e.g. Roll-up banner, poster, menu, or certificate)",
          "Print-ready PDF with bleed and crop marks or digital export",
          "Custom vector typography & brand color alignment",
          "High-resolution stock imagery integration",
          "Full commercial usage rights"
        ],
        deliverables: [
          "Print-Ready PDF (CMYK, 300 DPI)",
          "Digital Web Optimized JPG & PNG Formats",
          "2 Iterative Revision Passes"
        ],
        notIncluded: [
          "Physical printing & shipping",
          "Editable vector master design files"
        ],
        ctaText: "Request Single Collateral",
        sortOrder: 1
      },
      {
        id: "professional",
        name: "Marketing Collateral Suite",
        badge: "Recommended",
        recommended: true,
        description: "A coordinated suite of marketing collateral assets ensuring seamless brand presentation across offline and digital channels.",
        idealCustomer: "Businesses launching a campaign, trade show booth, or comprehensive marketing initiative.",
        price: 500,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £500 / project",
        revisionCount: "3 revision rounds",
        turnaroundTime: "5–8 business days",
        features: [
          "Suite of up to 4 coordinated marketing collateral assets (e.g. Banner, brochure, flyers, social graphics)",
          "Print-shop technical coordination & substrate finish advice",
          "Custom vector graphics, charts, and iconography",
          "Editable Canva or Figma template handoff for future in-house updates",
          "Export specifications tailored for high-volume commercial printing"
        ],
        deliverables: [
          "4 Print-Ready Press PDFs with Precise Printer Specifications",
          "Digital High-Res Asset Pack for Multi-Channel Distribution",
          "Editable Template Source Links (Canva / Figma)",
          "Print House Technical Handoff Support"
        ],
        notIncluded: [
          "Physical printing production invoices"
        ],
        ctaText: "Request Collateral Suite",
        sortOrder: 2
      },
      {
        id: "premium",
        name: "Corporate Asset Ecosystem",
        badge: "Complete Suite",
        recommended: false,
        description: "Complete corporate graphic design suite including multi-page editorial brochure, pitch deck, and exhibition displays.",
        idealCustomer: "Enterprises, corporate service firms, and event organizers requiring extensive high-end collateral.",
        price: 950,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £950 / project",
        revisionCount: "Comprehensive revisions",
        turnaroundTime: "2–3 weeks",
        features: [
          "Multi-page corporate brochure or catalogue (Up to 12 pages)",
          "Full pitch deck / presentation design (Up to 15 slides)",
          "Exhibition booth / trade show backdrop graphic set",
          "Full editable source files (Adobe InDesign, Illustrator, or Figma)",
          "Dedicated senior art director guidance throughout the sprint"
        ],
        deliverables: [
          "Multi-Page Editorial Brochure (Print & Interactive Digital PDF)",
          "Master Presentation Deck (.pptx, Keynote, or Figma)",
          "Exhibition Large-Format Vector Graphics",
          "Complete Layered Source Archive (.indd, .ai, .psd)",
          "Full Commercial Copyright"
        ],
        notIncluded: [
          "Physical printing and exhibition booth hardware"
        ],
        ctaText: "Request Corporate Ecosystem",
        sortOrder: 3
      }
    ],
    addOns: [
      {
        id: "addon-extra-collateral",
        name: "Additional Collateral Asset",
        description: "Design of an extra marketing collateral item aligned with your approved aesthetic.",
        price: 120,
        currency: "£",
        unit: "per asset",
        priceType: "per_unit"
      },
      {
        id: "addon-interactive-pdf",
        name: "Interactive Digital PDF Setup",
        description: "Addition of clickable links, navigation buttons, and bookmarks for digital brochure distribution.",
        price: 150,
        currency: "£",
        unit: "per document",
        priceType: "fixed"
      },
      {
        id: "addon-rush-turnaround-gd",
        name: "24-Hour Urgent Delivery Sprint",
        description: "Fast-tracked studio turnaround delivering print-ready artwork within 24 hours.",
        price: 180,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      }
    ],
    comparisonRows: [
      {
        feature: "Number of Assets Included",
        category: "Scope",
        starter: "1 Asset",
        professional: "Up to 4 Coordinated Assets",
        premium: "Full Multi-Page Brochure + Deck + Display"
      },
      {
        feature: "Print-Ready Vector PDFs",
        category: "Deliverables",
        starter: true,
        professional: true,
        premium: true
      },
      {
        feature: "Editable Templates (Canva/Figma)",
        category: "Deliverables",
        starter: false,
        professional: true,
        premium: "Full Master Source Files (.ai/.indd)"
      },
      {
        feature: "Printer Technical Coordination",
        category: "Service",
        starter: "Bleed/crop specs included",
        professional: "Direct vendor liaison",
        premium: "End-to-end print proof verification"
      },
      {
        feature: "Revision Rounds",
        category: "Service",
        starter: "2 rounds",
        professional: "3 rounds",
        premium: "Comprehensive revisions"
      }
    ],
    whoIsThisFor: {
      starter: "Businesses with a single pressing design need such as an event banner, menu update, or promotional poster.",
      professional: "Companies running integrated marketing campaigns requiring cohesive flyers, banners, and digital graphics.",
      premium: "Enterprises, corporate teams, and trade show exhibitors needing extensive multi-page brochures, sales decks, and environmental displays."
    }
  },

  "flyer-design": {
    pricingModel: "project",
    startingPrice: 180,
    currency: "£",
    duration: "project",
    packages: [
      {
        id: "starter",
        name: "Essential Flyer",
        badge: "Single Promotion",
        recommended: false,
        description: "Single or double-sided promotional flyer designed to generate immediate footfall or event attendance.",
        idealCustomer: "Local businesses, restaurants, nightlife, and events running targeted promotions.",
        price: 180,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £180 / project",
        revisionCount: "2 revision rounds",
        turnaroundTime: "2–3 business days",
        features: [
          "Single or double-sided design (A6, A5, or DL format)",
          "Print-ready PDF with industry-standard 3mm bleeds & crop marks",
          "High-contrast hierarchy & compelling call-to-action",
          "Digital web version sized for WhatsApp & social sharing",
          "QR code generation & integration"
        ],
        deliverables: [
          "Print-Ready Press PDF (CMYK, 300 DPI)",
          "Digital Web JPG & PNG Formats",
          "Print-Ready Bleed & Trim Verification"
        ],
        notIncluded: [
          "Multi-panel folding structures",
          "Physical paper printing"
        ],
        ctaText: "Request Essential Flyer",
        sortOrder: 1
      },
      {
        id: "professional",
        name: "Folded Leaflet / Brochure",
        badge: "Recommended",
        recommended: true,
        description: "Multi-panel folded leaflet or brochure design for products or services requiring detailed storytelling.",
        idealCustomer: "Clinics, financial advisors, real estate agencies, and service companies explaining comprehensive offerings.",
        price: 320,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £320 / project",
        revisionCount: "3 revision rounds",
        turnaroundTime: "4–6 business days",
        features: [
          "Tri-fold, Z-fold, or bi-fold layout (A4 to DL or A5 folded)",
          "Precise panel creep & fold tolerance engineering",
          "Custom vector iconography & feature breakdown tables",
          "High-resolution curated imagery integration",
          "Print house finish recommendations (Silk, matte, or gloss coatings)"
        ],
        deliverables: [
          "Print-Ready Folded Dieline PDF (CMYK + Cut/Crease Marks)",
          "Interactive Digital PDF Version for Email Distribution",
          "Social Media Promotional Snippet Crop",
          "Layered Editable Source Files"
        ],
        notIncluded: [
          "Physical printing / distribution logistics"
        ],
        ctaText: "Request Folded Leaflet",
        sortOrder: 2
      },
      {
        id: "premium",
        name: "Campaign Leaflet Suite",
        badge: "Full Campaign",
        recommended: false,
        description: "Complete multi-format campaign print suite with copywriting polish, luxury print specs, and digital adaptations.",
        idealCustomer: "High-end showrooms, luxury hospitality, private healthcare, and corporate direct-mail campaigns.",
        price: 580,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £580 / project",
        revisionCount: "Comprehensive revisions",
        turnaroundTime: "7–10 business days",
        features: [
          "Suite of 3 format adaptations (e.g. A5 flyer, Tri-fold brochure, and DL insert card)",
          "Professional headline & copy refinement review",
          "Luxury finish specifications (Spot UV, metallic foil stamping, embossed accents)",
          "Digital interactive PDF with active links and bookmarks",
          "Direct communication with your selected commercial print house"
        ],
        deliverables: [
          "Complete Print Package for All 3 Formats",
          "Specialty Foil / Spot UV Mask Separation Layers",
          "Digital Interactive PDF Suite",
          "Full Vector Source Files (InDesign / Illustrator)",
          "End-to-End Print Proof Quality Inspection"
        ],
        notIncluded: [
          "Physical printing invoices"
        ],
        ctaText: "Request Campaign Suite",
        sortOrder: 3
      }
    ],
    addOns: [
      {
        id: "addon-copy-review",
        name: "Headline & Copywriting Polish",
        description: "Professional proofreading and persuasive copy refinement to maximize conversion rates.",
        price: 80,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      },
      {
        id: "addon-additional-format",
        name: "Additional Size Format Adaptation",
        description: "Resizing and layout re-flow of approved flyer for another paper format (e.g. A4 to A6).",
        price: 90,
        currency: "£",
        unit: "per format",
        priceType: "per_unit"
      },
      {
        id: "addon-rush-flyer",
        name: "24-Hour Express Print-Ready Handoff",
        description: "Emergency fast-track turnaround delivering final press PDFs within 24 hours.",
        price: 120,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      }
    ],
    comparisonRows: [
      {
        feature: "Format & Structure",
        category: "Layout",
        starter: "Single / Double-sided (A6/A5/DL)",
        professional: "Folded Tri-fold / Bi-fold Brochure",
        premium: "3 Formats (Flyer, Folded Leaflet, Insert)"
      },
      {
        feature: "Print-Ready Press PDFs",
        category: "Deliverables",
        starter: true,
        professional: true,
        premium: true
      },
      {
        feature: "Digital Web / WhatsApp Version",
        category: "Deliverables",
        starter: true,
        professional: "Interactive PDF",
        premium: "Interactive PDF + Social Assets"
      },
      {
        feature: "Luxury Finishes (Foil/Spot UV)",
        category: "Print Prep",
        starter: false,
        professional: "Optional add-on",
        premium: "Included (Mask layers prepared)"
      },
      {
        feature: "Copywriting Review",
        category: "Content",
        starter: "Client provided",
        professional: "Minor proofing",
        premium: "Headline & CTA polish included"
      },
      {
        feature: "Revision Rounds",
        category: "Service",
        starter: "2 rounds",
        professional: "3 rounds",
        premium: "Comprehensive revisions"
      }
    ],
    whoIsThisFor: {
      starter: "Businesses with a focused promotion, event launch, or special discount offer needing an eye-catching flyer fast.",
      professional: "Companies with multiple service tiers, medical clinics, or property developments requiring folded panels for detailed storytelling.",
      premium: "Luxury brands, corporate marketing teams, and direct-mail campaigns demanding superior print finishes and multi-format collateral."
    }
  },

  "social-media-design": {
    pricingModel: "project",
    startingPrice: 300,
    currency: "£",
    duration: "project",
    packages: [
      {
        id: "starter",
        name: "Starter Social Kit",
        badge: "Essential Kit",
        recommended: false,
        description: "A cohesive set of customizable branded social media templates designed to establish an elevated feed aesthetic.",
        idealCustomer: "Small businesses and creators looking to post consistently with an on-brand look.",
        price: 300,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £300 / project",
        revisionCount: "2 revision rounds",
        turnaroundTime: "4–6 business days",
        features: [
          "6 bespoke branded post & story templates (1:1 and 9:16 formats)",
          "Fully editable in Figma or Canva (No technical software required)",
          "Brand typography rules & color palette integration",
          "Highlight covers / profile avatar styling",
          "Easy-to-follow video walkthrough on how to customize templates"
        ],
        deliverables: [
          "6 Editable Master Templates (Canva or Figma)",
          "High-Resolution PNG Sample Exports",
          "5 Branded Instagram Story Highlight Covers",
          "Template Customization Quick-Guide"
        ],
        notIncluded: [
          "Ongoing monthly content creation",
          "Animated video story templates"
        ],
        ctaText: "Request Starter Kit",
        sortOrder: 1
      },
      {
        id: "professional",
        name: "Authority Feed System",
        badge: "Recommended",
        recommended: true,
        description: "A comprehensive social media design system with multi-slide carousels, animated assets, and versatile promotional layouts.",
        idealCustomer: "Active brands and e-commerce stores looking to elevate engagement, reach, and visual authority.",
        price: 550,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £550 / project",
        revisionCount: "4 revision rounds",
        turnaroundTime: "7–10 business days",
        features: [
          "15 bespoke multi-format templates (Feed posts, stories, announcements, testimonials)",
          "2 educational multi-slide carousel frameworks (5–7 slides each)",
          "3 subtle animated story / reel cover templates",
          "Platform adaptations for Instagram, LinkedIn, and Facebook",
          "Bespoke brand graphic devices, textures, and custom framing elements",
          "Full Canva & Figma editable template handoff"
        ],
        deliverables: [
          "15 Master Editable Templates in Figma and Canva",
          "2 Complete Carousel Slide Decks",
          "10 Curated Highlight Icons",
          "Animated Story Assets (MP4 / GIF)",
          "Social Visual Guidelines Sheet (PDF)"
        ],
        notIncluded: [
          "Daily community moderation",
          "Direct post publishing / scheduling"
        ],
        ctaText: "Request Authority System",
        sortOrder: 2
      },
      {
        id: "premium",
        name: "Omnichannel Brand Suite",
        badge: "Complete System",
        recommended: false,
        description: "The complete visual social design library: 30+ templates, motion assets, paid ad creatives, and cross-network banners.",
        idealCustomer: "Fast-scaling brands, agency clients, and e-commerce brands demanding comprehensive multi-network visual distinction.",
        price: 950,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £950 / project",
        revisionCount: "Comprehensive revisions",
        turnaroundTime: "2–3 weeks",
        features: [
          "30+ versatile multi-channel templates across Instagram, LinkedIn, TikTok & X",
          "5 high-engagement carousel slide systems",
          "6 animated motion reel / story templates with sound integration",
          "4 paid advertising creative variations (High-CTR conversion layouts)",
          "Complete header banner suite for LinkedIn, YouTube, X, and Facebook",
          "Master design system library in Figma with reusable components & variants"
        ],
        deliverables: [
          "Comprehensive 30+ Template Figma Design System Library",
          "Full Canva Pro Template Clones for In-House Marketing Teams",
          "6 Motion Video Templates (1080x1920 MP4)",
          "Multi-Platform Banner Suite",
          "Source Assets & Commercial Typography Guidelines"
        ],
        notIncluded: [
          "Paid media advertising budget"
        ],
        ctaText: "Request Omnichannel Suite",
        sortOrder: 3
      }
    ],
    addOns: [
      {
        id: "addon-extra-templates",
        name: "5 Additional Custom Templates",
        description: "Expansion pack of 5 custom branded templates designed for specific content types.",
        price: 150,
        currency: "£",
        unit: "per 5 templates",
        priceType: "per_unit"
      },
      {
        id: "addon-animated-story",
        name: "Animated Motion Story Template",
        description: "Bespoke animated MP4 story graphic with dynamic kinetic typography.",
        price: 120,
        currency: "£",
        unit: "per template",
        priceType: "per_unit"
      },
      {
        id: "addon-banner-pack",
        name: "Multi-Platform Header Banner Pack",
        description: "Coordinated header banners sized for LinkedIn Company Page, personal profiles, X, and YouTube.",
        price: 160,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      }
    ],
    comparisonRows: [
      {
        feature: "Number of Templates Included",
        category: "Scope",
        starter: "6 Templates",
        professional: "15 Templates",
        premium: "30+ Templates"
      },
      {
        feature: "Multi-Slide Carousels",
        category: "Templates",
        starter: false,
        professional: "2 Carousel Decks",
        premium: "5 Carousel Decks"
      },
      {
        feature: "Animated Motion Elements",
        category: "Motion",
        starter: false,
        professional: "3 Animated Story Covers",
        premium: "6 Motion Video Templates"
      },
      {
        feature: "Editable Canva & Figma Links",
        category: "Deliverables",
        starter: true,
        professional: true,
        premium: "Figma Component Library + Canva"
      },
      {
        feature: "Paid Ad Creative Variations",
        category: "Deliverables",
        starter: "Optional add-on",
        professional: "Optional add-on",
        premium: "4 Ad Variations Included"
      },
      {
        feature: "Revision Rounds",
        category: "Service",
        starter: "2 rounds",
        professional: "4 rounds",
        premium: "Comprehensive revisions"
      }
    ],
    whoIsThisFor: {
      starter: "Businesses and solo founders wanting to establish a clean, recognizable aesthetic without designing from scratch each week.",
      professional: "Growing companies looking to share infographics, carousels, and motion clips that drive saves, shares, and inquiries.",
      premium: "Omnichannel brands and high-growth e-commerce ventures that require an extensive, unified design system across every major network."
    }
  },

  "content-posting": {
    pricingModel: "recurring",
    startingPrice: 280,
    currency: "£",
    duration: "4 weeks",
    packages: [
      {
        id: "starter",
        name: "Essential Scheduling",
        badge: "Consistent Cadence",
        recommended: false,
        description: "Reliable, hands-off scheduling and publishing of your ready-to-go content across primary channels.",
        idealCustomer: "Founders who have content created but lack the time to schedule and maintain consistent weekly publishing.",
        price: 280,
        pricePrefix: "From ",
        currency: "£",
        duration: "4 weeks",
        pricingModel: "recurring",
        pricingLabel: "From £280 / 4 weeks",
        revisionCount: "Ongoing schedule adjustments",
        turnaroundTime: "Scheduled 7 days in advance",
        features: [
          "Scheduled publishing for 3 posts per week (12 posts / 4 weeks)",
          "Coverage across 1 to 2 social channels (e.g. Instagram & Facebook or LinkedIn)",
          "Optimal time-slot targeting based on audience activity data",
          "Caption formatting & clean spacing layout",
          "First-comment hashtag placement",
          "Monthly posting confirmation log"
        ],
        deliverables: [
          "Clockwork Scheduled Publishing for 12 Posts",
          "Optimal Posting Hour Optimization",
          "Hashtag Formatting in First Comment",
          "Monthly Dispatch Verification Log"
        ],
        notIncluded: [
          "Graphic design / video creation (Client provides content or pairs with Content Creation)",
          "Direct comment and DM inbox replies"
        ],
        ctaText: "Request Essential Scheduling",
        sortOrder: 1
      },
      {
        id: "professional",
        name: "Active Multi-Channel Posting",
        badge: "Most Popular",
        recommended: true,
        description: "Consistent 5-day weekly publishing across up to 3 platforms with caption optimization, hashtag clustering, and story shares.",
        idealCustomer: "Growing businesses seeking steady visibility and audience touchpoints without daily operational distraction.",
        price: 420,
        pricePrefix: "From ",
        currency: "£",
        duration: "4 weeks",
        pricingModel: "recurring",
        pricingLabel: "From £420 / 4 weeks",
        revisionCount: "Ongoing schedule adjustments",
        turnaroundTime: "Scheduled 10 days in advance",
        features: [
          "Scheduled publishing for 5 posts per week (20 posts / 4 weeks)",
          "Coverage across up to 3 platforms (Instagram, LinkedIn, Facebook, or X)",
          "Platform-specific caption tailoring (Hashtag clusters, mentions, line breaks)",
          "Feed post sharing to Instagram & Facebook Stories upon publish",
          "Link-in-bio maintenance & URL destination updates",
          "Bi-weekly publishing review & timing refinements"
        ],
        deliverables: [
          "20 Clockwork Post Dispatches Across Up to 3 Platforms",
          "Automatic Story Reshares for Maximum Initial Reach",
          "Curated Strategic Hashtag Clusters",
          "Active Link-in-Bio Maintenance",
          "Monthly Publishing Analytics Summary"
        ],
        notIncluded: [
          "Active outbound engagement / cold DM outreach"
        ],
        ctaText: "Request Active Posting",
        sortOrder: 2
      },
      {
        id: "premium",
        name: "Omnichannel Daily Publishing",
        badge: "Maximum Visibility",
        recommended: false,
        description: "Comprehensive daily publishing engine across up to 4 platforms with story scheduling and weekend automation.",
        idealCustomer: "High-visibility brands, e-commerce stores, and thought leaders demanding an omnipresent, clockwork cadence.",
        price: 650,
        pricePrefix: "From ",
        currency: "£",
        duration: "4 weeks",
        pricingModel: "recurring",
        pricingLabel: "From £650 / 4 weeks",
        revisionCount: "Real-time calendar adjustments",
        turnaroundTime: "Scheduled 14 days in advance",
        features: [
          "Daily scheduled publishing (7 posts per week, 28+ posts / 4 weeks)",
          "Omnichannel distribution across up to 4 platforms (Instagram, LinkedIn, TikTok, Facebook/X)",
          "Daily story scheduling (Polls, stickers, updates & reshares)",
          "Multi-channel content repurposing & format adaptations",
          "Community engagement notification alerts to your team for urgent leads",
          "Dedicated scheduling specialist & emergency post adjustments"
        ],
        deliverables: [
          "28+ Clockwork Dispatches (Daily 7-Day Schedule)",
          "15+ Scheduled Stories / Updates",
          "Multi-Platform Custom Formatting (Video reels, carousels, text)",
          "Real-Time Urgent Lead Notifications via Slack/WhatsApp",
          "Comprehensive Monthly Reach & Impression Overview"
        ],
        notIncluded: [
          "Paid media advertising ad spend"
        ],
        ctaText: "Request Daily Publishing",
        sortOrder: 3
      }
    ],
    addOns: [
      {
        id: "addon-extra-platform-cp",
        name: "Additional Social Media Channel",
        description: "Addition of an extra social channel to your monthly publishing cadence.",
        price: 90,
        currency: "£",
        unit: "per 4 weeks",
        priceType: "recurring"
      },
      {
        id: "addon-story-pack-cp",
        name: "Story Publishing Expansion Pack",
        description: "Scheduling of 10 additional interactive stories with polls and question stickers.",
        price: 110,
        currency: "£",
        unit: "per 4 weeks",
        priceType: "recurring"
      },
      {
        id: "addon-triage-cp",
        name: "High-Priority Lead Notification Triage",
        description: "Daily monitoring for purchase-intent comments and instant forwarding to your WhatsApp.",
        price: 160,
        currency: "£",
        unit: "per 4 weeks",
        priceType: "recurring"
      }
    ],
    comparisonRows: [
      {
        feature: "Weekly Post Frequency",
        category: "Volume",
        starter: "3 Posts / Week (12 total)",
        professional: "5 Posts / Week (20 total)",
        premium: "Daily 7 Posts / Week (28+ total)"
      },
      {
        feature: "Social Platforms Covered",
        category: "Channels",
        starter: "Up to 2 Platforms",
        professional: "Up to 3 Platforms",
        premium: "Up to 4 Platforms"
      },
      {
        feature: "Story Resharing & Scheduling",
        category: "Features",
        starter: false,
        professional: "Feed reshares to Stories",
        premium: "Dedicated scheduled stories + reshares"
      },
      {
        feature: "First-Comment Hashtags & Formatting",
        category: "Features",
        starter: true,
        professional: true,
        premium: true
      },
      {
        feature: "Link-in-Bio Updates",
        category: "Features",
        starter: false,
        professional: true,
        premium: true
      },
      {
        feature: "Emergency Post Insertion",
        category: "Service",
        starter: "48h notice",
        professional: "24h notice",
        premium: "Same-day priority adjustments"
      }
    ],
    whoIsThisFor: {
      starter: "Businesses with pre-existing content that need consistent publishing without having to remember to post manually.",
      professional: "Growing companies looking to maintain a 5-day weekly rhythm across their key social touchpoints with professional formatting.",
      premium: "E-commerce brands, high-profile executives, and active publishers requiring 7-day-a-week omnipresence across multiple social channels."
    }
  },

  "social-media-management": {
    pricingModel: "recurring",
    startingPrice: 480,
    currency: "£",
    duration: "4 weeks",
    packages: [
      {
        id: "starter",
        name: "Foundation Management",
        badge: "Essential Presence",
        recommended: false,
        description: "Professional management of your primary social channel including publishing, basic moderation, and monthly performance tracking.",
        idealCustomer: "Small businesses wanting a well-tended, responsive social media channel without overhead.",
        price: 480,
        pricePrefix: "From ",
        currency: "£",
        duration: "4 weeks",
        pricingModel: "recurring",
        pricingLabel: "From £480 / 4 weeks",
        revisionCount: "Monthly strategic review",
        turnaroundTime: "Ongoing weekly execution",
        features: [
          "Management of 1 core social platform (Instagram or LinkedIn)",
          "3 curated posts per week (12 posts / 4 weeks)",
          "Basic comment and DM inbox triage (Business days)",
          "Targeted audience hashtag research & geo-tagging",
          "Monthly growth & engagement analytics report"
        ],
        deliverables: [
          "12 Published High-Quality Posts",
          "Active Inbox Triage & Spam Removal",
          "Monthly Audience Growth & Analytics Report"
        ],
        notIncluded: [
          "Proactive outbound engagement campaigns",
          "Influencer marketing coordination"
        ],
        ctaText: "Request Foundation Management",
        sortOrder: 1
      },
      {
        id: "professional",
        name: "Growth Management",
        badge: "Most Popular",
        recommended: true,
        description: "Active multi-channel management designed to build community, engage prospects, and drive qualified inquiries.",
        idealCustomer: "Growing brands looking to turn their social channels into active community-building and lead-generation funnels.",
        price: 780,
        pricePrefix: "From ",
        currency: "£",
        duration: "4 weeks",
        pricingModel: "recurring",
        pricingLabel: "From £780 / 4 weeks",
        revisionCount: "Bi-weekly strategy check-ins",
        turnaroundTime: "Ongoing weekly execution",
        features: [
          "Management of 2 social platforms (e.g. Instagram & LinkedIn or TikTok)",
          "5 high-engagement posts per week (20 posts / 4 weeks)",
          "Proactive daily community engagement (Interacting with target accounts & industry hashtags)",
          "Comment responses & direct message lead qualification",
          "Weekly interactive story updates (Polls, Q&As, announcements)",
          "Monthly strategic review call & content performance breakdown"
        ],
        deliverables: [
          "20 Published Strategic Posts Across 2 Platforms",
          "Daily Community Engagement & Lead Nurturing",
          "8+ Interactive Story Touchpoints",
          "Monthly Strategic Performance Video Call (45 mins)",
          "Comprehensive Growth, Reach & Inquiry Report"
        ],
        notIncluded: [
          "Paid advertising campaign ad spend"
        ],
        ctaText: "Request Growth Management",
        sortOrder: 2
      },
      {
        id: "premium",
        name: "Omnichannel Brand Leadership",
        badge: "Full Partnership",
        recommended: false,
        description: "Full-scale social leadership: multi-channel daily publishing, rapid moderation, influencer outreach, and executive social strategy.",
        idealCustomer: "Scale-ups, established brands, and high-growth companies demanding an authoritative, always-on social presence.",
        price: 1250,
        pricePrefix: "From ",
        currency: "£",
        duration: "4 weeks",
        pricingModel: "recurring",
        pricingLabel: "From £1,250 / 4 weeks",
        revisionCount: "Weekly agile adjustments",
        turnaroundTime: "Priority dedicated account manager",
        features: [
          "Comprehensive management across up to 4 platforms",
          "Daily publishing (7 posts/week, 28+ posts / 4 weeks)",
          "Rapid response community moderation (Under 2-hour response during business hours)",
          "Influencer & brand partnership outreach coordination",
          "Reputation management & review response handling",
          "Bi-weekly strategy reviews & dedicated Slack/WhatsApp channel",
          "Competitor benchmark tracking and trend hijacking"
        ],
        deliverables: [
          "28+ Published Posts Across Up to 4 Platforms",
          "Daily Active Community Building & Rapid Inbox Management",
          "Micro-Influencer Outreach & Collaboration Coordination",
          "Bi-Weekly Strategic Marketing Reviews",
          "Executive Social Media KPI Dashboard & ROI Reporting",
          "Dedicated Social Media Account Manager"
        ],
        notIncluded: [
          "Influencer collaboration fee budgets"
        ],
        ctaText: "Request Leadership Management",
        sortOrder: 3
      }
    ],
    addOns: [
      {
        id: "addon-extra-channel-smm",
        name: "Additional Social Channel Management",
        description: "Expand your management package to an additional platform with tailored publishing and moderation.",
        price: 250,
        currency: "£",
        unit: "per 4 weeks",
        priceType: "recurring"
      },
      {
        id: "addon-influencer-outreach",
        name: "Influencer Outreach & Seeding Campaign",
        description: "Curating, contacting, and coordinating product gifting with 15 verified micro-influencers.",
        price: 350,
        currency: "£",
        unit: "per campaign",
        priceType: "fixed"
      },
      {
        id: "addon-competitor-report",
        name: "Monthly Competitor Intelligence Report",
        description: "In-depth monthly breakdown of 3 top competitors' creative strategies, top posts, and engagement tactics.",
        price: 180,
        currency: "£",
        unit: "per report",
        priceType: "recurring"
      }
    ],
    comparisonRows: [
      {
        feature: "Platforms Managed",
        category: "Channels",
        starter: "1 Platform",
        professional: "2 Platforms",
        premium: "Up to 4 Platforms"
      },
      {
        feature: "Weekly Post Frequency",
        category: "Volume",
        starter: "3 Posts / Week (12 total)",
        professional: "5 Posts / Week (20 total)",
        premium: "Daily 7 Posts / Week (28+ total)"
      },
      {
        feature: "Proactive Community Engagement",
        category: "Community",
        starter: "Basic moderation only",
        professional: "Daily outbound engagement & comments",
        premium: "Extensive industry engagement + influencer outreach"
      },
      {
        feature: "DM & Comment Response Speed",
        category: "Customer Care",
        starter: "24–48 hours",
        professional: "Same-day response",
        premium: "Under 2 hours during business hours"
      },
      {
        feature: "Interactive Stories",
        category: "Content",
        starter: false,
        professional: "Weekly interactive stories",
        premium: "Multi-weekly custom stories"
      },
      {
        feature: "Strategy & Reporting Calls",
        category: "Strategy",
        starter: "Written monthly report",
        professional: "Monthly video review call",
        premium: "Bi-weekly strategy reviews + dedicated Slack"
      }
    ],
    whoIsThisFor: {
      starter: "Local businesses and independent practitioners looking for a clean, professional, spam-free presence on their primary channel.",
      professional: "Growing companies looking to actively cultivate their community, boost organic engagement, and nurture inbound customer inquiries.",
      premium: "Established brands and rapid-growth organizations requiring a dedicated social media agency team handling daily operations, community care, and outreach."
    }
  },

  "digital-marketing": {
    pricingModel: "recurring",
    startingPrice: 450,
    currency: "£",
    duration: "4 weeks",
    packages: [
      {
        id: "starter",
        name: "Campaign Foundation",
        badge: "Launch Campaign",
        recommended: false,
        description: "Setup and targeted management of your primary paid advertising or email acquisition channel.",
        idealCustomer: "Businesses testing paid customer acquisition or initiating targeted digital advertising.",
        price: 450,
        pricePrefix: "From ",
        currency: "£",
        duration: "4 weeks",
        pricingModel: "recurring",
        pricingLabel: "From £450 / 4 weeks",
        revisionCount: "Bi-weekly campaign optimization",
        turnaroundTime: "Campaign launch in 5 business days",
        features: [
          "Setup & management of 1 advertising channel (Meta Ads or Google Search Ads)",
          "Audience persona definition & keyword / interest targeting",
          "Conversion tracking pixel installation & verification",
          "A/B split testing of 2 ad copy & creative angles",
          "Weekly budget monitoring & bid optimization",
          "Monthly transparent ROAS & cost-per-lead reporting"
        ],
        deliverables: [
          "Configured Campaign Setup in Your Business Manager",
          "Tracking Pixel & Conversion Event Verification",
          "2 Active Ad Sets with Split-Tested Messaging",
          "Monthly Performance & Acquisition Cost Report"
        ],
        notIncluded: [
          "Third-party paid media advertising budget (Paid directly to ad network)",
          "Custom landing page development"
        ],
        ctaText: "Request Campaign Foundation",
        sortOrder: 1
      },
      {
        id: "professional",
        name: "Growth Acquisition Engine",
        badge: "Most Popular",
        recommended: true,
        description: "Multi-channel paid acquisition with full-funnel retargeting, conversion rate tuning, and proactive creative rotation.",
        idealCustomer: "Scaling businesses and e-commerce brands wanting consistent, profitable customer acquisition.",
        price: 850,
        pricePrefix: "From ",
        currency: "£",
        duration: "4 weeks",
        pricingModel: "recurring",
        pricingLabel: "From £850 / 4 weeks",
        revisionCount: "Weekly creative & budget tuning",
        turnaroundTime: "Campaign launch in 7 business days",
        features: [
          "Multi-channel campaign management (Meta + Google Ads)",
          "Full-funnel architecture: Cold prospecting, consideration, and retargeting",
          "Lookalike audience modeling & customer list enrichment",
          "A/B split testing across 6+ ad variants (Copy, headlines, and visual assets)",
          "Google Analytics 4 event tracking & UTM parameter structure",
          "Weekly bid management, negative keyword pruning & budget reallocation",
          "Bi-weekly strategy call & real-time live performance dashboard"
        ],
        deliverables: [
          "Full-Funnel Campaign Architecture on Meta & Google",
          "Retargeting Audiences for Abandoned Carts & Site Visitors",
          "Live 24/7 Looker Studio Performance Dashboard",
          "Bi-Weekly Video Strategy Review Meetings",
          "Ongoing Creative Fatigue Monitoring & Recommendations"
        ],
        notIncluded: [
          "Direct ad spend media budget"
        ],
        ctaText: "Request Growth Engine",
        sortOrder: 2
      },
      {
        id: "premium",
        name: "Enterprise Performance Scale",
        badge: "Scale & Dominate",
        recommended: false,
        description: "High-volume paid growth partnership: multi-network omni-campaigns, landing page CRO, advanced attribution, and dedicated senior media buyer.",
        idealCustomer: "Established e-commerce brands, funded startups, and enterprises managing significant monthly marketing budgets.",
        price: 1500,
        pricePrefix: "From ",
        currency: "£",
        duration: "4 weeks",
        pricingModel: "recurring",
        pricingLabel: "From £1,500 / 4 weeks",
        revisionCount: "Continuous real-time optimization",
        turnaroundTime: "Priority dedicated campaign sprints",
        features: [
          "Omnichannel advertising across Meta, Google Search/Shopping, YouTube, and TikTok",
          "Full conversion rate optimization (CRO) audit of your landing pages",
          "Advanced server-side tracking (Meta CAPI & Google Enhanced Conversions)",
          "Continuous creative refreshes & weekly high-performing ad iterations",
          "Multi-touch attribution modeling & lifetime customer value (LTV) analysis",
          "Weekly executive strategy calls & dedicated Slack/WhatsApp war room",
          "Senior Growth Director oversight on all accounts"
        ],
        deliverables: [
          "Complete Omnichannel Acquisition & Retention Engine",
          "Server-Side Conversions API (CAPI) Architecture",
          "Monthly Landing Page CRO Recommendations & Heatmap Audits",
          "Weekly Performance Calls & Action Logs",
          "Dedicated Senior Media Buyer & Creative Strategist",
          "Custom Multi-Touch Attribution Reporting"
        ],
        notIncluded: [
          "Ad network media spend"
        ],
        ctaText: "Request Enterprise Scale",
        sortOrder: 3
      }
    ],
    addOns: [
      {
        id: "addon-landing-page",
        name: "High-Converting Campaign Landing Page",
        description: "Design and development of a dedicated high-converting landing page optimized for paid ad traffic.",
        price: 450,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      },
      {
        id: "addon-email-automation",
        name: "Welcome & Abandoned Cart Email Flow",
        description: "Setup of 4 automated email sequences in Klaviyo or Mailchimp to convert paid ad traffic.",
        price: 380,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      },
      {
        id: "addon-tracking-setup",
        name: "Advanced Tracking & GTM Setup",
        description: "Comprehensive Google Tag Manager container setup with custom event triggers and server-side tracking.",
        price: 280,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      }
    ],
    comparisonRows: [
      {
        feature: "Ad Platforms Managed",
        category: "Channels",
        starter: "1 Platform (Meta or Google)",
        professional: "2 Platforms (Meta + Google)",
        premium: "Omnichannel (Meta, Google, TikTok, YouTube)"
      },
      {
        feature: "Funnel Architecture",
        category: "Strategy",
        starter: "Single campaign focus",
        professional: "Full Funnel (Prospecting + Retargeting)",
        premium: "Advanced Multi-Tier Retention & Scale"
      },
      {
        feature: "Conversion Tracking & Attribution",
        category: "Analytics",
        starter: "Standard Pixel setup",
        professional: "GA4 Events + UTM Taxonomy",
        premium: "Server-Side CAPI + Multi-Touch Attribution"
      },
      {
        feature: "Creative A/B Split Testing",
        category: "Optimization",
        starter: "2 Variations",
        professional: "6+ Variations with weekly rotation",
        premium: "Continuous creative testing engine"
      },
      {
        feature: "Landing Page CRO Audits",
        category: "Optimization",
        starter: false,
        professional: "Basic feedback",
        premium: "Monthly in-depth CRO & heatmap analysis"
      },
      {
        feature: "Reporting & Strategy Cadence",
        category: "Support",
        starter: "Monthly report",
        professional: "Bi-weekly calls + Live Dashboard",
        premium: "Weekly strategy reviews + dedicated Slack"
      }
    ],
    whoIsThisFor: {
      starter: "Businesses dipping their toes into digital ads and wanting properly configured campaigns that do not waste ad budget.",
      professional: "Companies ready to systematically acquire customers, lower their cost-per-acquisition (CPA), and run retargeting funnels.",
      premium: "Established brands spending thousands monthly on digital media needing high-level media buying, CRO, and attribution modeling."
    }
  },

  "advertising-creatives": {
    pricingModel: "project",
    startingPrice: 350,
    currency: "£",
    duration: "project",
    packages: [
      {
        id: "starter",
        name: "Test & Learn Creative Pack",
        badge: "Starter Sprint",
        recommended: false,
        description: "High-converting static ad creatives engineered to test new offers, hooks, and audience segments.",
        idealCustomer: "Brands launching a new campaign or testing creative angles to find their winning hook.",
        price: 350,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £350 / project",
        revisionCount: "2 revision rounds",
        turnaroundTime: "3–5 business days",
        features: [
          "4 bespoke static ad variations (1:1 Square & 9:16 Vertical formats)",
          "Compelling visual hooks designed to stop the feed scroll",
          "Clear, high-contrast call-to-action badges",
          "Ad copy headlines and primary text recommendations",
          "Formatted and tested for Meta Ads (Instagram/Facebook) and TikTok"
        ],
        deliverables: [
          "4 High-Resolution Ad Creatives (1:1 & 9:16 PNG/JPG)",
          "Strategic Copy Hooks & Headline Matrix (Sheet)",
          "Ad Compliance Check for Text-to-Image Ratio"
        ],
        notIncluded: [
          "Motion video animation",
          "Ad campaign management in Meta/Google Ads"
        ],
        ctaText: "Request Creative Pack",
        sortOrder: 1
      },
      {
        id: "professional",
        name: "High-Converting Multi-Format Suite",
        badge: "Recommended",
        recommended: true,
        description: "A dynamic suite of static and motion video ad creatives engineered to lower customer acquisition costs (CAC).",
        idealCustomer: "Active advertisers looking to beat ad fatigue and improve click-through rates across Meta, TikTok, and LinkedIn.",
        price: 650,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £650 / project",
        revisionCount: "3 revision rounds",
        turnaroundTime: "5–7 business days",
        features: [
          "8 multi-format ad creatives (4 Static Visuals + 4 Motion Video Hooks)",
          "Dynamic text animation, sound design, and subtitle captions for video ads",
          "Format variations for Feed (1:1), Stories/Reels (9:16), and Landscape (16:9)",
          "Split-test angle variations (Social proof, pain point, aspirational, and urgency)",
          "Competitor creative landscape analysis and hook benchmarking"
        ],
        deliverables: [
          "4 High-Impact Static Ad Designs in Multi-Ratios",
          "4 Motion Video Ads (1080x1920 MP4 with Sound & Subtitles)",
          "Full Hook & Storyboard Documentation",
          "Editable Figma Design Source Files"
        ],
        notIncluded: [
          "Physical product videography shoot"
        ],
        ctaText: "Request Multi-Format Suite",
        sortOrder: 2
      },
      {
        id: "premium",
        name: "Performance Creative Arsenal",
        badge: "High Velocity",
        recommended: false,
        description: "Extensive performance creative arsenal: 16 high-impact ads including UGC-style video hooks, static suites, and seasonal variations.",
        idealCustomer: "Scale-ups and performance marketing teams requiring continuous fresh creative rotation for high monthly ad spend.",
        price: 1200,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £1,200 / project",
        revisionCount: "Comprehensive revisions",
        turnaroundTime: "10–14 business days",
        features: [
          "16 comprehensive performance creatives (8 Motion Reels + 8 Static Variations)",
          "UGC-style dynamic edits, voiceover pacing, and kinetic typography hooks",
          "Rapid hook testing variations (3 alternative 3-second openers per video)",
          "Cross-platform sizing for Meta, TikTok, YouTube Shorts, and Pinterest Ads",
          "Direct collaboration with your media buyer to tailor creative iterations based on CPA data",
          "Master source archives (After Effects, Premiere, and Figma)"
        ],
        deliverables: [
          "16 Production-Ready Master Ad Assets (MP4 & PNG)",
          "24 Total Hook Variants for A/B Testing",
          "Full Source Files (Adobe AE / PR / Figma)",
          "Creative Strategy & Hook Breakdown Playbook",
          "Commercial Sound & Asset Licensing"
        ],
        notIncluded: [
          "Media spend ad budget"
        ],
        ctaText: "Request Creative Arsenal",
        sortOrder: 3
      }
    ],
    addOns: [
      {
        id: "addon-hook-variations",
        name: "3 Alternative Video Hooks",
        description: "3 additional opening 3-second video hooks to test against your winning video ad.",
        price: 140,
        currency: "£",
        unit: "per pack",
        priceType: "per_unit"
      },
      {
        id: "addon-resizing-pack",
        name: "Cross-Platform Resizing Suite",
        description: "Adaptation of all approved creatives into 16:9 Landscape and 4:5 Portrait ratios.",
        price: 120,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      },
      {
        id: "addon-express-ad",
        name: "48-Hour Rapid Ad Delivery",
        description: "Fast-track sprint delivering initial ad concepts within 48 hours.",
        price: 180,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      }
    ],
    comparisonRows: [
      {
        feature: "Total Creatives Included",
        category: "Volume",
        starter: "4 Static Creatives",
        professional: "8 Creatives (4 Static + 4 Motion)",
        premium: "16 Creatives (8 Static + 8 Motion)"
      },
      {
        feature: "Motion Video Ads (Reels / TikTok)",
        category: "Formats",
        starter: false,
        professional: "4 Motion Video Ads",
        premium: "8 Motion Ads + 24 Hook Variations"
      },
      {
        feature: "Sound Design & Captions",
        category: "Production",
        starter: false,
        professional: true,
        premium: true
      },
      {
        feature: "Strategic Angle Split-Testing",
        category: "Strategy",
        starter: "2 Angles",
        professional: "4 Angles (Pain, Proof, Urgency)",
        premium: "Comprehensive Playbook & Hook Matrix"
      },
      {
        feature: "Editable Source Files",
        category: "Deliverables",
        starter: false,
        professional: "Figma Source",
        premium: "After Effects + Premiere + Figma"
      },
      {
        feature: "Revision Rounds",
        category: "Service",
        starter: "2 rounds",
        professional: "3 rounds",
        premium: "Comprehensive revisions"
      }
    ],
    whoIsThisFor: {
      starter: "Businesses launching their first paid social campaign who need clean, trustworthy, high-contrast ad visuals.",
      professional: "Active media buyers and DTC brands looking to rotate fresh video reels and static ads to keep CTRs high and CPAs low.",
      premium: "High-spending advertisers needing an endless stream of tested hooks, UGC-style edits, and variations to scale spend profitably."
    }
  },

  "ai-visual-content": {
    pricingModel: "project",
    startingPrice: 320,
    currency: "£",
    duration: "project",
    packages: [
      {
        id: "starter",
        name: "Conceptual Brand Visuals",
        badge: "Experimental",
        recommended: false,
        description: "Bespoke generative visual assets developed for moodboards, brand conceptualization, and digital headers.",
        idealCustomer: "Designers, startups, and creative teams looking for hyper-custom visual assets without stock photo cliches.",
        price: 320,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £320 / project",
        revisionCount: "2 revision passes",
        turnaroundTime: "3–4 business days",
        features: [
          "10 bespoke AI-generated visual assets tailored to your aesthetic direction",
          "Advanced prompt engineering & model parameter tuning",
          "High-resolution upscaling (Up to 4K resolution)",
          "Artistic color correction & digital post-processing",
          "Commercial usage rights & license clearance"
        ],
        deliverables: [
          "10 Master Visual Assets (4K JPG & PNG)",
          "Curated Style Consistency Prompt Guide",
          "Digital Post-Production Color Grading"
        ],
        notIncluded: [
          "Custom synthetic brand character training",
          "Generative motion video clips"
        ],
        ctaText: "Request Conceptual Pack",
        sortOrder: 1
      },
      {
        id: "professional",
        name: "Brand World Synthesis",
        badge: "Recommended",
        recommended: true,
        description: "A cohesive collection of 25 generative brand visuals sharing a consistent style, color palette, and visual identity.",
        idealCustomer: "Brands seeking distinctive campaign imagery, editorial visuals, and futuristic storytelling assets.",
        price: 580,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £580 / project",
        revisionCount: "4 revision passes",
        turnaroundTime: "5–7 business days",
        features: [
          "25 curated generative brand visuals with tight stylistic continuity",
          "Custom style consistency tuning (Lighting, palette, textures, atmosphere)",
          "Professional Photoshop retouching & composite cleanup (Removing AI anomalies)",
          "Multi-aspect ratio formatting (16:9 web hero, 1:1 feed, 9:16 mobile)",
          "Commercial intellectual property clearance"
        ],
        deliverables: [
          "25 Polished Retouched Visual Assets in Multi-Ratios",
          "Ultra High-Res 4K & 8K Upscaled Master Files",
          "Brand Visual Consistency Style Bible",
          "Complete Commercial Intellectual Property Rights"
        ],
        notIncluded: [
          "Full synthetic video generation"
        ],
        ctaText: "Request Brand World",
        sortOrder: 2
      },
      {
        id: "premium",
        name: "Omniverse Generative Suite",
        badge: "Flagship Production",
        recommended: false,
        description: "Complete generative studio production: 50+ master renders, synthetic character consistency, and animated motion clips.",
        idealCustomer: "Visionary creative campaigns, gaming, web3, entertainment, and futuristic brand worlds.",
        price: 980,
        pricePrefix: "From ",
        currency: "£",
        duration: "project",
        pricingModel: "project",
        pricingLabel: "From £980 / project",
        revisionCount: "Comprehensive revisions",
        turnaroundTime: "10–14 business days",
        features: [
          "50+ ultra-high-resolution conceptual renders and surreal environments",
          "Custom consistent synthetic brand character / product model creation",
          "5 generative animated motion video clips (Looping cinematic motion)",
          "Professional studio grading, grain addition, and high-fidelity composite finishing",
          "Master source generation seeds, prompts, and training workflows",
          "Dedicated AI Art Director collaboration throughout"
        ],
        deliverables: [
          "50+ High-Resolution Master Renders (Print-Ready 300 DPI)",
          "5 Generative Motion Video Clips (4K / 1080p MP4)",
          "Custom Brand Character Consistency Library",
          "Exhaustive Prompt & Model Parameter Workflow Bible",
          "Full Commercial Usage Guarantee"
        ],
        notIncluded: [
          "Traditional physical camera crews"
        ],
        ctaText: "Request Generative Suite",
        sortOrder: 3
      }
    ],
    addOns: [
      {
        id: "addon-extra-generative-visuals",
        name: "10 Additional Generated Visuals",
        description: "Expansion pack of 10 customized generative assets aligned with your approved aesthetic.",
        price: 150,
        currency: "£",
        unit: "per 10 assets",
        priceType: "per_unit"
      },
      {
        id: "addon-motion-clip",
        name: "Cinematic Motion Video Loop",
        description: "Conversion of an approved static generative asset into a 4K looping cinematic video clip.",
        price: 180,
        currency: "£",
        unit: "per clip",
        priceType: "per_unit"
      },
      {
        id: "addon-print-upscale",
        name: "8K Large-Format Print Upscaling Pack",
        description: "Specialized ultra-deep upscaling suitable for large billboards, exhibition walls, and gallery prints.",
        price: 120,
        currency: "£",
        unit: "one-time",
        priceType: "fixed"
      }
    ],
    comparisonRows: [
      {
        feature: "Assets Included",
        category: "Scope",
        starter: "10 Visual Assets",
        professional: "25 Visual Assets",
        premium: "50+ Visuals + 5 Motion Clips"
      },
      {
        feature: "Style & Character Consistency",
        category: "Consistency",
        starter: "Prompt-based",
        professional: "Fine-tuned aesthetic continuity",
        premium: "Synthetic character & world modeling"
      },
      {
        feature: "Post-Processing & Retouching",
        category: "Refinement",
        starter: "Color grading & basic upscale",
        professional: "Photoshop anomaly cleanup + 4K",
        premium: "Studio composite retouching + 8K print"
      },
      {
        feature: "Motion Video Clips",
        category: "Motion",
        starter: false,
        professional: "Optional add-on",
        premium: "5 Cinematic Motion Loops Included"
      },
      {
        feature: "Multi-Ratio Exports",
        category: "Deliverables",
        starter: "Single ratio",
        professional: "1:1, 16:9, and 9:16",
        premium: "All ratios + Print 300 DPI"
      },
      {
        feature: "Revision Passes",
        category: "Service",
        starter: "2 passes",
        professional: "4 passes",
        premium: "Comprehensive revisions"
      }
    ],
    whoIsThisFor: {
      starter: "Creators, bloggers, and designers needing evocative imagery for pitch concepts and website headers that cannot be found on stock sites.",
      professional: "Brands looking to establish a distinctive, surreal visual identity for campaigns, social feeds, and digital touchpoints with strict aesthetic continuity.",
      premium: "Creative agencies, gaming companies, and visionary brands launching immersive worlds, character stories, and multi-dimensional digital experiences."
    }
  }
};

// Process all files in services directory
const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.json'));

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(servicesDir, file);
  const raw = fs.readFileSync(filePath, 'utf-8');
  let serviceData;
  try {
    serviceData = JSON.parse(raw);
  } catch (e) {
    console.error(`Error parsing ${file}:`, e);
    continue;
  }

  const slug = serviceData.slug || file.replace('.json', '');
  const packageConfig = servicePackageData[slug] || servicePackageData[file.replace('.json', '')];

  if (!packageConfig) {
    console.warn(`No package config found for slug "${slug}" (${file})`);
    continue;
  }

  // Merge package config into serviceData
  serviceData.pricingModel = packageConfig.pricingModel;
  serviceData.startingPrice = packageConfig.startingPrice;
  serviceData.currency = packageConfig.currency || "£";
  serviceData.duration = packageConfig.duration;
  serviceData.packages = packageConfig.packages;
  serviceData.addOns = packageConfig.addOns;
  serviceData.comparisonRows = packageConfig.comparisonRows;
  serviceData.whoIsThisFor = packageConfig.whoIsThisFor;

  fs.writeFileSync(filePath, JSON.stringify(serviceData, null, 2) + '\n', 'utf-8');
  console.log(`Successfully updated ${file} with full package engine data.`);
  updatedCount++;
}

console.log(`\nCompleted! Successfully populated packages for ${updatedCount} services.`);
