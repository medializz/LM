import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { navigateTo } from '../utils/router';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-neutral-400">
        <li className="flex items-center">
          <button
            onClick={() => navigateTo('/')}
            className="flex items-center gap-1 text-neutral-400 hover:text-[#e5a93c] transition-colors py-1 cursor-pointer"
            aria-label="Back to home"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-neutral-600 shrink-0" />
              {isLast || !item.href ? (
                <span className="text-[#e5a93c] font-medium truncate max-w-[200px] sm:max-w-none" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => item.href && navigateTo(item.href)}
                  className="text-neutral-400 hover:text-[#e5a93c] transition-colors py-1 cursor-pointer truncate max-w-[150px] sm:max-w-none"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
