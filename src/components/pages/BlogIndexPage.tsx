import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, Calendar, Clock, User, ArrowRight, 
  Search, BookOpen, ChevronRight, X, Layers,
  Compass, Palette, Code, Share2, Filter
} from 'lucide-react';
import { DecapCMSData, BlogArticle } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { navigateTo } from '../../utils/router';
import { LizzdoLogo } from '../LizzdoLogo';
import { ServiceIcon } from '../ServiceIcons';

interface BlogIndexPageProps {
  cmsData: DecapCMSData;
  onOpenContact?: () => void;
}

export const BlogIndexPage: React.FC<BlogIndexPageProps> = ({ cmsData, onOpenContact }) => {
  const { siteSettings, blog = [] } = cmsData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique categories and counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: blog.length };
    blog.forEach(article => {
      if (article.category) {
        counts[article.category] = (counts[article.category] || 0) + 1;
      }
    });
    return counts;
  }, [blog]);

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(blog.map(a => a.category).filter(Boolean)))];
  }, [blog]);

  // Filter articles by category & search term
  const filteredArticles = useMemo(() => {
    return blog.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = q === '' || 
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        (article.tags && article.tags.some(t => t.toLowerCase().includes(q)));
      return matchesCategory && matchesSearch;
    });
  }, [blog, selectedCategory, searchQuery]);

  // Determine featured article
  const featuredArticle = useMemo(() => {
    const explicitlyFeatured = blog.find(a => a.featured === true);
    if (explicitlyFeatured) return explicitlyFeatured;
    return blog.find(a => a.slug === 'how-to-build-a-powerful-brand-identity') || blog[0];
  }, [blog]);

  // Grid articles (exclude featured article when showing default unfiltered view)
  const isDefaultView = selectedCategory === 'All' && searchQuery.trim() === '';
  const gridArticles = useMemo(() => {
    if (isDefaultView && featuredArticle) {
      return filteredArticles.filter(a => a.id !== featuredArticle.id && a.slug !== featuredArticle.slug);
    }
    return filteredArticles;
  }, [filteredArticles, isDefaultView, featuredArticle]);

  const canonicalUrl = "https://media.lizzdo.com/blog";
  const seoTitle = "Lizzdo Media Blog | Branding, Packaging & Web Insights";
  const seoDescription = "In-depth articles, frameworks, and case studies on brand identity design, structural packaging dielines, conversion marketing, and high-speed web engineering from Cardiff, UK.";

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Lizzdo Media Insights & Blog",
      "description": seoDescription,
      "url": canonicalUrl,
      "publisher": {
        "@type": "Organization",
        "name": siteSettings?.siteName || "Lizzdo Media",
        "url": "https://media.lizzdo.com/",
        "logo": "https://media.lizzdo.com/uploads/lizzdo-media-logo.svg"
      },
      "blogPost": blog.map((art) => ({
        "@type": "BlogPosting",
        "headline": art.title,
        "description": art.summary,
        "url": `https://media.lizzdo.com/blog/${art.slug}`,
        "datePublished": art.publishedDate,
        "dateModified": art.updatedDate || art.publishedDate,
        "author": {
          "@type": "Person",
          "name": art.author?.name || "Lizzdo Design Studio"
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://media.lizzdo.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": canonicalUrl
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-[#ffbe1a] selection:text-black font-['Plus_Jakarta_Sans']">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalUrl}
        type="website"
        schemaData={schemaData}
      />

      {/* Top Breadcrumb Header */}
      <div className="bg-[#07090e] pt-20 sm:pt-24 border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }]} />
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-white/[0.08] bg-gradient-to-b from-[#07090e] via-[#0a0d16] to-[#07090e] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffbe1a0a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#ffbe1a]/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono tracking-wider uppercase font-bold"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>AGENCY INSIGHTS & THOUGHT LEADERSHIP</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Outfit'] text-white tracking-tight leading-tight"
            >
              Design, Engineering & <span className="text-[#ffbe1a]">Strategic Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed"
            >
              Practical frameworks, architectural breakdowns, and strategic essays from the creative directors, vector designers, and software engineers at Lizzdo Media.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Bar & Search */}
      <section className="py-6 border-b border-white/[0.06] bg-[#080b13]/80 backdrop-blur sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const count = categoryCounts[cat] || 0;
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'bg-[#ffbe1a] text-black shadow-lg shadow-[#ffbe1a]/20'
                        : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                      isSelected ? 'bg-black/20 text-black font-bold' : 'bg-white/[0.06] text-slate-400'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by topic, keyword, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#ffbe1a] focus:outline-none text-xs text-white placeholder-slate-400 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Featured Article Hero (Shown on Default View) */}
      {isDefaultView && featuredArticle && (
        <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="group relative rounded-3xl bg-gradient-to-br from-[#121622] via-[#0e111a] to-[#080a10] border border-white/[0.1] hover:border-[#ffbe1a]/60 p-6 sm:p-10 lg:p-12 transition-all duration-300 shadow-2xl hover:shadow-[#ffbe1a]/5 overflow-hidden"
          >
            {/* Top gold accent stripe */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffbe1a]/60 to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Metadata & Copy */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#ffbe1a] bg-[#ffbe1a]/10 px-3 py-1 rounded-full border border-[#ffbe1a]/30 font-bold">
                    Featured Insight
                  </span>
                  <span className="text-xs text-slate-400 font-mono bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">
                    {featuredArticle.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <a
                  href={`/blog/${featuredArticle.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(`/blog/${featuredArticle.slug}`);
                  }}
                  className="block"
                >
                  <h2 className="text-2xl sm:text-4xl font-black font-['Outfit'] text-white group-hover:text-[#ffbe1a] transition-colors leading-tight">
                    {featuredArticle.title}
                  </h2>
                </a>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl line-clamp-3">
                  {featuredArticle.summary}
                </p>

                {/* Author row */}
                <div className="flex items-center gap-4 pt-3 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#ffbe1a]/20 border border-[#ffbe1a]/40 flex items-center justify-center text-[#ffbe1a] font-bold">
                      {featuredArticle.author?.name ? featuredArticle.author.name.charAt(0) : 'L'}
                    </div>
                    <span className="text-white font-semibold">{featuredArticle.author?.name || "Lizzdo Design Studio"}</span>
                  </div>
                  <span>•</span>
                  <span>{new Date(featuredArticle.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </div>

              {/* Right Column: Visual CTA Action */}
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                <a
                  href={`/blog/${featuredArticle.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(`/blog/${featuredArticle.slug}`);
                  }}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#ffbe1a] text-black font-bold text-sm font-['Outfit'] hover:bg-amber-400 transition-all shadow-xl group-hover:translate-x-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </motion.div>
        </section>
      )}

      {/* Main Grid Section */}
      <section className="py-8 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.06]">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
            <span>Showing {gridArticles.length} {gridArticles.length === 1 ? 'Article' : 'Articles'}</span>
            {selectedCategory !== 'All' && <span>in "{selectedCategory}"</span>}
            {searchQuery && <span>matching "{searchQuery}"</span>}
          </div>

          {(selectedCategory !== 'All' || searchQuery !== '') && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-mono text-[#ffbe1a] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {gridArticles.length === 0 ? (
          <div className="text-center py-20 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
            <p className="text-base text-slate-300">No articles found matching your criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#ffbe1a] text-black font-bold text-xs font-mono cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gridArticles.map((article, idx) => (
              <motion.article
                key={article.id || article.slug || `article-${idx}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="group flex flex-col justify-between rounded-2xl bg-[#0f121d] border border-white/[0.08] hover:border-[#ffbe1a]/50 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
              >
                <div className="space-y-4">
                  
                  {/* Card Header: Category & Read Time */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#ffbe1a] bg-[#ffbe1a]/10 px-2.5 py-1 rounded-md border border-[#ffbe1a]/30 font-bold">
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Article Title */}
                  <a
                    href={`/blog/${article.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(`/blog/${article.slug}`);
                    }}
                    className="block"
                  >
                    <h3 className="text-xl font-bold font-['Outfit'] text-white group-hover:text-[#ffbe1a] transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                  </a>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  {/* Tags Preview (if any) */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {article.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={`tag-${tIdx}`}
                          className="text-[10px] font-mono text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.05]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Byline */}
                <div className="pt-6 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/[0.06] flex items-center justify-center text-[10px] text-white font-bold">
                      {article.author?.name ? article.author.name.charAt(0) : 'L'}
                    </div>
                    <span className="truncate max-w-[120px]">{article.author?.name || "Lizzdo Studio"}</span>
                  </div>

                  <a
                    href={`/blog/${article.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(`/blog/${article.slug}`);
                    }}
                    className="inline-flex items-center gap-1 text-[#ffbe1a] font-bold group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>Read</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.article>
            ))}
          </div>
        )}

      </section>

      {/* Agency Consultation & Newsletter CTA */}
      <section className="py-16 sm:py-20 border-t border-white/[0.08] bg-[#0a0d16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT STUDIO ENGAGEMENT</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black font-['Outfit'] text-white tracking-tight">
            Need Expert Brand Strategy or High-Speed Engineering?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our creative directors and software engineers partner directly with founders and marketing teams to build category-defining brands.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => {
                if (onOpenContact) {
                  onOpenContact();
                } else {
                  navigateTo('/contact');
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#ffbe1a] text-black font-bold font-['Outfit'] text-sm hover:bg-amber-400 transition-all shadow-lg cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/services');
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.1] font-semibold text-sm font-['Outfit'] transition-all"
            >
              <span>Explore All Services</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
