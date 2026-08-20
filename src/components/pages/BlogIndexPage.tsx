import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, Calendar, Clock, User, ArrowRight, 
  Tag, Search, BookOpen, ChevronRight 
} from 'lucide-react';
import { DecapCMSData, BlogArticle } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { navigateTo } from '../../utils/router';

interface BlogIndexPageProps {
  cmsData: DecapCMSData;
}

export const BlogIndexPage: React.FC<BlogIndexPageProps> = ({ cmsData }) => {
  const { siteSettings, blog = [] } = cmsData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...Array.from(new Set(blog.map(a => a.category)))];

  const filteredArticles = blog.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.tags && article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = blog.find(a => a.slug === 'how-to-build-a-powerful-brand-identity') || blog[0];
  const gridArticles = filteredArticles.filter(a => a.id !== featuredArticle?.id || selectedCategory !== 'All' || searchQuery !== '');

  const canonicalUrl = "https://media.lizzdo.com/blog";
  const seoTitle = "Lizzdo Media Blog | Branding, Design, Marketing & Web Insights";
  const seoDescription = "Explore in-depth articles on brand identity design, structural packaging, conversion-rate ad creatives, high-speed web engineering, and digital growth.";

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Lizzdo Media Insights & Blog",
      "description": seoDescription,
      "url": canonicalUrl,
      "publisher": {
        "@type": "Organization",
        "name": siteSettings.siteName,
        "url": "https://media.lizzdo.com/",
        "logo": "https://media.lizzdo.com/uploads/lizzdo-media-logo.svg"
      },
      "blogPost": blog.map((art) => ({
        "@type": "BlogPosting",
        "headline": art.title,
        "description": art.summary,
        "url": `https://media.lizzdo.com/blog/${art.slug}`,
        "datePublished": art.publishedDate,
        "author": {
          "@type": "Person",
          "name": art.author.name
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

      {/* Hero Header */}
      <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffbe1a0a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-60" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }]} />

          <div className="max-w-3xl mx-auto text-center space-y-5 pt-6 sm:pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono tracking-wider uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Agency Insights & Thought Leadership</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Outfit'] text-white tracking-tight">
              Design, Code & <span className="text-[#ffbe1a]">Growth Insights</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              In-depth essays, design frameworks, and technical case breakdowns from the creative and engineering teams at {siteSettings.siteName}.
            </p>
          </div>
        </div>
      </section>

      {/* Controls & Search Bar */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
          
          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-['Outfit'] font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#ffbe1a] text-black shadow-[0_0_15px_rgba(255,190,26,0.35)]'
                    : 'bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles & topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] focus:border-[#ffbe1a] focus:outline-none text-xs text-white placeholder-slate-400 transition-colors"
            />
          </div>

        </div>
      </section>

      {/* Featured Hero Article (when showing all and no search query) */}
      {selectedCategory === 'All' && searchQuery === '' && featuredArticle && (
        <section className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href={`/blog/${featuredArticle.slug}`}
            onClick={(e) => {
              e.preventDefault();
              navigateTo(`/blog/${featuredArticle.slug}`);
            }}
            className="group relative block rounded-3xl bg-gradient-to-br from-[#171a24] via-[#12151e] to-[#0d0f16] border border-white/[0.1] hover:border-[#ffbe1a]/60 p-6 sm:p-10 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffbe1a]/50 to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ffbe1a] bg-[#ffbe1a]/10 px-2.5 py-1 rounded-full border border-[#ffbe1a]/30">
                    Featured Insight
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] text-white group-hover:text-[#ffbe1a] transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed line-clamp-3">
                  {featuredArticle.summary}
                </p>

                <div className="flex items-center gap-4 pt-2 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-white">
                    <User className="w-3.5 h-3.5 text-[#ffbe1a]" />
                    {featuredArticle.author.name}
                  </span>
                  <span>•</span>
                  <span>{new Date(featuredArticle.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffbe1a] text-black font-bold text-sm font-['Outfit'] group-hover:bg-amber-400 transition-all shadow-lg group-hover:translate-x-1">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          </a>
        </section>
      )}

      {/* Article Grid */}
      <section className="py-8 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <p className="text-slate-400 text-base">No articles found matching your criteria.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-5 py-2.5 rounded-full bg-[#ffbe1a] text-black font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <a
                key={article.id}
                href={`/blog/${article.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo(`/blog/${article.slug}`);
                }}
                className="group flex flex-col justify-between rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#ffbe1a] bg-[#ffbe1a]/10 px-2.5 py-0.5 rounded border border-[#ffbe1a]/30">
                      {article.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-['Outfit'] text-white group-hover:text-[#ffbe1a] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{article.author.name}</span>
                  <div className="flex items-center gap-1 text-[#ffbe1a] font-bold group-hover:translate-x-1 transition-transform">
                    <span>Read</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};
