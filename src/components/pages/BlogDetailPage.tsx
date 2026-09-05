import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, Clock, User, ArrowLeft, ArrowRight, 
  Sparkles, CheckCircle2, Share2, MessageCircle, 
  BookOpen, ChevronDown, ChevronUp, ChevronRight,
  Copy, Check, ExternalLink, Tag, Lightbulb, Compass, Award
} from 'lucide-react';
import { BlogArticle, DecapCMSData } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { navigateTo } from '../../utils/router';
import { ServiceIcon } from '../ServiceIcons';
import { getWhatsAppUrl } from '../../data/cmsContent';
import { createWhatsAppUrl } from '../../utils/whatsapp';

interface BlogDetailPageProps {
  article: BlogArticle;
  cmsData: DecapCMSData;
  onOpenContact: (customService?: string) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  article,
  cmsData,
  onOpenContact
}) => {
  const { siteSettings, services = [], portfolio = [], blog = [] } = cmsData;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://media.lizzdo.com/blog/${article.slug}`;

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      });
    }
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`"${article.title}" by @lizzdomedia`);
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleShareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, '_blank', 'noopener,noreferrer');
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`Check out this article from Lizzdo Media: ${article.title} - ${currentUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleConsultationWhatsApp = () => {
    const message = `Hello ${siteSettings.siteName || 'Lizzdo Media'}, I just read your article "${article.title}" and would like to discuss a project with your team.`;
    const url = createWhatsAppUrl(siteSettings.whatsappNumber || "", message);
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Resolve related services, projects, and articles
  const relatedServicesList = services.filter(s => 
    article.relatedServices?.includes(s.slug) || 
    article.category.toLowerCase().includes(s.category.toLowerCase())
  ).slice(0, 3);

  const relatedPortfolioList = portfolio.filter(p => 
    article.relatedProjects?.includes(p.slug)
  ).slice(0, 2);

  const relatedArticlesList = blog.filter(b => 
    b.slug !== article.slug && (
      (article.relatedArticles && article.relatedArticles.includes(b.slug)) ||
      b.category === article.category
    )
  ).slice(0, 3);

  const canonicalUrl = article.canonicalUrl || `https://media.lizzdo.com/blog/${article.slug}`;
  const seoTitle = article.seoTitle || `${article.title} | Lizzdo Media Insights`;
  const seoDescription = article.seoDescription || article.summary;

  const schemaData: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "headline": article.title,
      "description": article.summary,
      "image": article.ogImage || "https://media.lizzdo.com/uploads/og-cover.png",
      "author": {
        "@type": "Person",
        "name": article.author?.name || "Lizzdo Design Studio",
        "jobTitle": article.author?.role || "Brand Strategy Lead"
      },
      "publisher": {
        "@type": "Organization",
        "name": siteSettings.siteName || "Lizzdo Media",
        "url": "https://media.lizzdo.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://media.lizzdo.com/uploads/lizzdo-media-logo.svg"
        }
      },
      "datePublished": article.publishedDate,
      "dateModified": article.updatedDate || article.publishedDate
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
          "item": "https://media.lizzdo.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": article.title,
          "item": canonicalUrl
        }
      ]
    }
  ];

  if (article.faqs && article.faqs.length > 0) {
    schemaData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": article.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  // Safe semantic markdown parser
  const renderMarkdown = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ').trim();
        if (text) {
          elements.push(
            <p key={`p-${elements.length}`} className="text-slate-300 text-base sm:text-[17px] leading-relaxed my-5 font-['Plus_Jakarta_Sans']">
              {formatInlineText(text)}
            </p>
          );
        }
        currentParagraph = [];
      }
    };

    const formatInlineText = (text: string) => {
      const linkRegex = /\[(.*?)\]\((.*?)\)/g;
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          parts.push(parseBoldItalic(text.substring(lastIndex, match.index)));
        }
        const linkText = match[1];
        const linkHref = match[2];
        parts.push(
          <a
            key={`link-${match.index}`}
            href={linkHref}
            onClick={(e) => {
              if (linkHref.startsWith('/')) {
                e.preventDefault();
                navigateTo(linkHref);
              }
            }}
            className="text-[#ffbe1a] underline decoration-[#ffbe1a]/40 underline-offset-4 hover:text-amber-300 font-semibold transition-colors"
          >
            {linkText}
          </a>
        );
        lastIndex = linkRegex.lastIndex;
      }

      if (lastIndex < text.length) {
        parts.push(parseBoldItalic(text.substring(lastIndex)));
      }

      return parts;
    };

    const parseBoldItalic = (text: string): React.ReactNode => {
      const boldParts = text.split(/\*\*(.*?)\*\*/g);
      return boldParts.map((part, idx) => {
        if (idx % 2 === 1) {
          return <strong key={idx} className="text-white font-bold">{part}</strong>;
        }
        return part;
      });
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('## ')) {
        flushParagraph();
        elements.push(
          <h2 key={`h2-${idx}`} className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white mt-12 mb-4 pt-6 border-t border-white/[0.08] tracking-tight">
            {trimmed.replace('## ', '')}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        flushParagraph();
        elements.push(
          <h3 key={`h3-${idx}`} className="text-xl sm:text-2xl font-bold font-['Outfit'] text-[#ffbe1a] mt-8 mb-3 tracking-tight">
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('- ')) {
        flushParagraph();
        elements.push(
          <li key={`li-${idx}`} className="flex items-start gap-3 text-slate-300 text-base leading-relaxed my-2.5 ml-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffbe1a] shrink-0 mt-2.5" />
            <span className="flex-1">{formatInlineText(trimmed.replace('- ', ''))}</span>
          </li>
        );
      } else if (trimmed.startsWith('> ')) {
        flushParagraph();
        elements.push(
          <blockquote key={`quote-${idx}`} className="my-6 pl-5 border-l-4 border-[#ffbe1a] bg-white/[0.02] p-4 rounded-r-xl text-slate-200 italic text-base leading-relaxed">
            {formatInlineText(trimmed.replace('> ', ''))}
          </blockquote>
        );
      } else if (trimmed === '---') {
        flushParagraph();
        elements.push(<hr key={`hr-${idx}`} className="my-10 border-white/[0.08]" />);
      } else if (trimmed === '') {
        flushParagraph();
      } else {
        currentParagraph.push(trimmed);
      }
    });

    flushParagraph();
    return elements;
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-[#ffbe1a] selection:text-black font-['Plus_Jakarta_Sans']">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalUrl}
        type="article"
        schemaData={schemaData}
      />

      {/* Breadcrumbs */}
      <div className="bg-[#07090e] pt-20 sm:pt-24 border-b border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: article.category, href: `/blog` },
              { label: article.title, href: `/blog/${article.slug}` }
            ]}
          />
        </div>
      </div>

      {/* Article Header Hero */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16">
        
        <header className="space-y-6 pb-8 border-b border-white/[0.08]">
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#ffbe1a] bg-[#ffbe1a]/10 px-3 py-1 rounded-full border border-[#ffbe1a]/30 font-bold">
              {article.category}
            </span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {new Date(article.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            {article.updatedDate && (
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                (Updated: {new Date(article.updatedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })})
              </span>
            )}
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {article.readTime}
            </span>
          </div>

          {/* Main Article Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black font-['Outfit'] text-white tracking-tight leading-[1.15]">
            {article.title}
          </h1>

          {/* Excerpt / Summary */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {article.summary}
          </p>

          {/* Author Byline & Social Share Row */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.06]">
            
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#ffbe1a]/15 border border-[#ffbe1a]/30 flex items-center justify-center text-[#ffbe1a] font-bold text-sm">
                {article.author?.name ? article.author.name.charAt(0) : 'L'}
              </div>
              <div>
                <div className="text-sm font-bold text-white font-['Outfit']">
                  {article.author?.name || "Lizzdo Design Studio"}
                </div>
                <div className="text-xs font-mono text-slate-400">
                  {article.author?.role || "Brand Strategy Lead"}
                </div>
              </div>
            </div>

            {/* Social Share Controls */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-1 hidden sm:inline">Share:</span>
              
              <button
                type="button"
                onClick={handleCopyLink}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-colors relative cursor-pointer"
                title="Copy article link"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copiedLink && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-emerald-500 text-black text-[10px] font-mono whitespace-nowrap font-bold">
                    Copied!
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={handleShareWhatsApp}
                className="p-2 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 transition-colors cursor-pointer"
                title="Share on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleShareLinkedIn}
                className="p-2 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-600/30 transition-colors cursor-pointer"
                title="Share on LinkedIn"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

          </div>

        </header>

        {/* Key Takeaways Callout Box (If available in CMS) */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#121622] to-[#0c0e16] border border-[#ffbe1a]/30 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ffbe1a] font-bold">
              <Lightbulb className="w-4 h-4" />
              <span>KEY STRATEGIC TAKEAWAYS</span>
            </div>
            <ul className="space-y-2.5">
              {article.keyTakeaways.map((takeaway, tIdx) => (
                <li key={`takeaway-${tIdx}`} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ffbe1a] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Semantic Article Body */}
        <div className="prose prose-invert max-w-none py-6">
          {renderMarkdown(article.content)}
        </div>

        {/* Article Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="py-6 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              <span>Topics:</span>
            </span>
            {article.tags.map((tag, tIdx) => (
              <span
                key={`tag-${tIdx}`}
                className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Article FAQs Accordion (If available) */}
        {article.faqs && article.faqs.length > 0 && (
          <div className="my-12 pt-8 border-t border-white/[0.08] space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#ffbe1a] uppercase tracking-wider font-bold">Frequently Asked Questions</span>
              <h3 className="text-2xl font-black font-['Outfit'] text-white">Questions About This Topic</h3>
            </div>

            <div className="space-y-3">
              {article.faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div
                    key={`faq-${fIdx}`}
                    className="rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left text-sm sm:text-base font-bold text-white hover:text-[#ffbe1a] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-[#ffbe1a]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Author Bio Box */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-[#0e111a] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center text-[#ffbe1a] font-black text-xl shrink-0 font-['Outfit']">
            {article.author?.name ? article.author.name.charAt(0) : 'L'}
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h4 className="text-lg font-bold font-['Outfit'] text-white">
                {article.author?.name || "Lizzdo Design Studio"}
              </h4>
              <span className="text-xs font-mono text-[#ffbe1a] bg-[#ffbe1a]/10 px-2.5 py-0.5 rounded border border-[#ffbe1a]/20">
                {article.author?.role || "Brand Strategy Lead"}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {article.author?.bio || "Specializing in brand architecture, mathematical vector design, and high-end visual systems for ambitious global businesses."}
            </p>
          </div>
        </div>

        {/* In-Article Conversion Call to Action */}
        <div className="my-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#151926] via-[#0f121c] to-[#080a10] border border-[#ffbe1a]/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffbe1a]/60 to-transparent" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXPERT STUDIO EXECUTION</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white tracking-tight">
            Ready to Implement These Principles for Your Brand?
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Partner directly with our senior creative directors and full-stack software engineers to build category-defining brand systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onOpenContact(article.category)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#ffbe1a] text-black font-bold font-['Outfit'] text-sm hover:bg-amber-400 transition-all shadow-lg cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {siteSettings.whatsappNumber && (
              <button
                type="button"
                onClick={handleConsultationWhatsApp}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 font-semibold font-['Outfit'] text-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            )}
          </div>
        </div>

        {/* Related Services */}
        {relatedServicesList.length > 0 && (
          <div className="my-12 pt-8 border-t border-white/[0.08] space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold font-['Outfit'] text-white">
                Related Agency Services
              </h3>
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/services');
                }}
                className="text-xs font-mono text-[#ffbe1a] hover:underline"
              >
                View All Services →
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedServicesList.map((service) => (
                <a
                  key={service.id || service.slug}
                  href={`/services/${service.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(`/services/${service.slug}`);
                  }}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#ffbe1a]/40 transition-all space-y-2 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#ffbe1a]/10 flex items-center justify-center text-[#ffbe1a] group-hover:scale-105 transition-transform">
                    <ServiceIcon iconKey={service.iconKey} className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#ffbe1a] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {service.shortDescription}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        {relatedArticlesList.length > 0 && (
          <div className="my-12 pt-8 border-t border-white/[0.08] space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold font-['Outfit'] text-white">
                More Articles & Insights
              </h3>
              <a
                href="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/blog');
                }}
                className="text-xs font-mono text-[#ffbe1a] hover:underline"
              >
                View Blog →
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedArticlesList.map((art) => (
                <a
                  key={art.id || art.slug}
                  href={`/blog/${art.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(`/blog/${art.slug}`);
                  }}
                  className="p-4 rounded-xl bg-[#0f121d] border border-white/[0.06] hover:border-[#ffbe1a]/40 transition-all space-y-2 group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-[#ffbe1a] uppercase tracking-wider">
                      {art.category}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#ffbe1a] transition-colors line-clamp-2 leading-snug">
                      {art.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      {art.summary}
                    </p>
                  </div>
                  <div className="pt-2 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                    <span>{art.readTime}</span>
                    <span className="text-[#ffbe1a] group-hover:translate-x-1 transition-transform">Read →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

      </article>

    </div>
  );
};
