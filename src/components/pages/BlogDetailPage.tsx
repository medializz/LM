import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, Clock, User, ArrowLeft, ArrowRight, 
  Sparkles, CheckCircle2, Share2, MessageCircle, 
  BookOpen, ChevronDown, ChevronUp, ChevronRight
} from 'lucide-react';
import { BlogArticle, DecapCMSData } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { navigateTo } from '../../utils/router';
import { ServiceIcon } from '../ServiceIcons';
import { getWhatsAppUrl } from '../../data/cmsContent';

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

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleWhatsApp = () => {
    const message = `Hi ${siteSettings.siteName || 'Lizzdo Media'}, I just read your article "${article.title}" and would like to discuss working together.`;
    const url = getWhatsAppUrl(siteSettings.whatsappNumber, message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Find related services & portfolio items
  const relatedServicesList = services.filter(s => 
    article.relatedServices?.includes(s.slug) || 
    article.category.toLowerCase().includes(s.category.toLowerCase())
  ).slice(0, 3);

  const relatedPortfolioList = portfolio.filter(p => 
    article.relatedProjects?.includes(p.slug)
  ).slice(0, 2);

  const otherArticles = blog.filter(b => b.slug !== article.slug).slice(0, 3);

  const canonicalUrl = `https://media.lizzdo.com/blog/${article.slug}`;
  const seoTitle = article.seoTitle || `${article.title} | Lizzdo Media Blog`;
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
      "image": "https://media.lizzdo.com/uploads/og-cover.png",
      "author": {
        "@type": "Person",
        "name": article.author.name,
        "jobTitle": article.author.role
      },
      "publisher": {
        "@type": "Organization",
        "name": siteSettings.siteName,
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

  // Simple, safe Markdown renderer for headings, lists, bold text, links, and paragraphs
  const renderMarkdown = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ').trim();
        if (text) {
          elements.push(
            <p key={`p-${elements.length}`} className="text-slate-300 text-base sm:text-[17px] leading-relaxed my-4">
              {formatInlineText(text)}
            </p>
          );
        }
        currentParagraph = [];
      }
    };

    const formatInlineText = (text: string) => {
      // Split by markdown link [text](url)
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
            className="text-[#ffbe1a] underline hover:text-amber-300 font-semibold transition-colors"
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
      // Basic bold parsing **text**
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
          <h2 key={`h2-${idx}`} className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white mt-10 mb-4 pt-4 border-t border-white/[0.08]">
            {trimmed.replace('## ', '')}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        flushParagraph();
        elements.push(
          <h3 key={`h3-${idx}`} className="text-xl sm:text-2xl font-bold font-['Outfit'] text-[#ffbe1a] mt-6 mb-3">
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('- ')) {
        flushParagraph();
        elements.push(
          <li key={`li-${idx}`} className="flex items-start gap-2.5 text-slate-300 text-base leading-relaxed my-2 ml-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffbe1a] shrink-0 mt-2.5" />
            <span>{formatInlineText(trimmed.replace('- ', ''))}</span>
          </li>
        );
      } else if (trimmed === '---') {
        flushParagraph();
        elements.push(<hr key={`hr-${idx}`} className="my-8 border-white/[0.08]" />);
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
        publishedTime={article.publishedDate}
        modifiedTime={article.updatedDate || article.publishedDate}
        authorName={article.author.name}
        schemaData={schemaData}
      />

      {/* Hero / Header */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffbe1a0a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-60" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumb 
            items={[
              { label: "Blog", href: "/blog" },
              { label: article.title }
            ]} 
          />

          <div className="space-y-4 pt-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#ffbe1a] bg-[#ffbe1a]/10 px-3 py-1 rounded-full border border-[#ffbe1a]/30">
                {article.category}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(article.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] text-white tracking-tight leading-[1.15]">
              {article.title}
            </h1>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center text-[#ffbe1a] font-bold text-sm">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{article.author.name}</div>
                <div className="text-xs text-slate-400 font-mono">{article.author.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Key Takeaways Box */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#10131d] border border-[#ffbe1a]/30 shadow-xl space-y-3.5">
            <div className="flex items-center gap-2 text-[#ffbe1a] text-xs font-mono uppercase tracking-wider font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Key Takeaways & Executive Summary</span>
            </div>
            <ul className="space-y-2.5">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ffbe1a] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Article Content */}
        <article className="prose prose-invert max-w-none">
          {renderMarkdown(article.content)}
        </article>

        {/* Article FAQ Section */}
        {article.faqs && article.faqs.length > 0 && (
          <section className="space-y-6 pt-8 border-t border-white/[0.08]">
            <div className="space-y-1">
              <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Topic FAQs</span>
              <h2 className="text-2xl font-bold font-['Outfit'] text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {article.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="rounded-xl bg-[#10131d] border border-white/[0.08] overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:text-[#ffbe1a] transition-colors"
                    >
                      <span className="font-bold text-sm sm:text-base text-white">{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#ffbe1a] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Author Bio Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/40 flex items-center justify-center text-[#ffbe1a] text-xl font-bold shrink-0">
            <User className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <div className="text-base font-bold text-white">{article.author.name}</div>
            <div className="text-xs text-[#ffbe1a] font-mono">{article.author.role} at {siteSettings.siteName}</div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
              {article.author.bio}
            </p>
          </div>
        </div>

        {/* Related Services Links */}
        {relatedServicesList.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-white/[0.08]">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Related Capabilities</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedServicesList.map((srv) => (
                <a
                  key={srv.id}
                  href={`/services/${srv.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(`/services/${srv.slug}`);
                  }}
                  className="p-4 rounded-xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group block"
                >
                  <div className="text-sm font-bold text-white group-hover:text-[#ffbe1a] transition-colors">
                    {srv.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {srv.shortDescription}
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Related Case Studies */}
        {relatedPortfolioList.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-white/[0.08]">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Related Projects</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPortfolioList.map((proj) => (
                <a
                  key={proj.id}
                  href={`/work/${proj.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(`/work/${proj.slug}`);
                  }}
                  className="p-5 rounded-xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group block"
                >
                  <div className="text-[10px] font-mono uppercase text-[#ffbe1a]">{proj.category}</div>
                  <div className="text-base font-bold text-white group-hover:text-[#ffbe1a] transition-colors mt-1">
                    {proj.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {proj.description}
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Other Articles */}
        {otherArticles.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-white/[0.08]">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-mono tracking-widest text-slate-400">Continue Reading</span>
              <a
                href="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/blog');
                }}
                className="text-xs text-[#ffbe1a] hover:underline font-mono"
              >
                View All Articles →
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherArticles.map((art) => (
                <a
                  key={art.id}
                  href={`/blog/${art.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(`/blog/${art.slug}`);
                  }}
                  className="p-4 rounded-xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group block"
                >
                  <div className="text-xs font-bold text-white group-hover:text-[#ffbe1a] transition-colors line-clamp-2">
                    {art.title}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-2 font-mono">{art.readTime}</div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* CTA Banner */}
        <section className="rounded-3xl bg-gradient-to-br from-[#171a24] via-[#12151e] to-[#0d0f16] border border-[#ffbe1a]/30 p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white">
            Need Expert Brand or Web Execution?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Discuss your requirements with our creative directors and receive a detailed project roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/contact');
              }}
              className="px-6 py-3 rounded-full bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-sm font-['Outfit'] transition-all shadow-lg hover:scale-105"
            >
              <span>Get in Touch →</span>
            </a>
            <button
              onClick={handleWhatsApp}
              className="px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/20 font-bold text-sm font-['Outfit'] transition-all hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
