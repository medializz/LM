import React, { useEffect } from 'react';
import { AnalyticsSettings } from '../types';

interface AnalyticsTrackerProps {
  analytics?: AnalyticsSettings;
}

export const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ analytics }) => {
  useEffect(() => {
    if (!analytics || !analytics.googleAnalyticsEnabled) return;

    const measurementId = analytics.measurementId?.trim();
    if (!measurementId || !/^G-[A-Za-z0-9]+$/i.test(measurementId)) return;

    // Prevent duplicate script injection
    const existingScript = document.getElementById('ga-script');
    if (existingScript) return;

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.id = 'ga-inline-script';
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', { anonymize_ip: true });
    `;
    document.head.appendChild(inlineScript);

    return () => {
      // Cleanup on unmount or reconfiguration
      const s = document.getElementById('ga-script');
      if (s) s.remove();
      const is = document.getElementById('ga-inline-script');
      if (is) is.remove();
    };
  }, [analytics]);

  return null;
};
