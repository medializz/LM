import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  fallbackMessage?: string;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[ErrorBoundary caught error]:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  public render() {
    if (this.state.hasError) {
      const { fallbackTitle, fallbackMessage } = this.props;

      return (
        <div 
          id="error-boundary-fallback"
          className="min-h-[50vh] flex items-center justify-center p-6 sm:p-12 text-center bg-[#07090e] text-slate-100 selection:bg-[#ffbe1a] selection:text-black font-['Plus_Jakarta_Sans']"
        >
          <div className="max-w-md w-full mx-auto space-y-6 p-8 rounded-2xl bg-[#10131d] border border-white/[0.08] shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
                {fallbackTitle || 'Something went wrong loading this content'}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {fallbackMessage || 'We encountered a momentary issue rendering this section. Please try refreshing or return to our homepage.'}
              </p>
            </div>

            {process.env.NODE_ENV !== 'production' && this.state.error && (
              <div className="text-left p-3 rounded-lg bg-black/50 border border-red-500/20 text-red-400 text-xs font-mono overflow-auto max-h-32">
                {this.state.error.toString()}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={this.handleReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#ffbe1a] hover:bg-amber-400 text-black font-bold text-xs sm:text-sm font-['Outfit'] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#ffbe1a]/20"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>

              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/';
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Home className="w-3.5 h-3.5 text-[#ffbe1a]" />
                <span>Return Home</span>
              </a>
            </div>

            <div className="pt-2 border-t border-white/[0.06] text-xs text-slate-400 flex items-center justify-center gap-2">
              <Mail className="w-3 h-3 text-[#ffbe1a]" />
              <span>Need help? Contact us at support@lizzdo.com</span>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
