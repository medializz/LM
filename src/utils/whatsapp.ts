/**
 * Central WhatsApp & Contact Deep-Linking Utility for Lizzdo Media
 * 
 * Single source of truth for normalizing phone numbers and generating
 * compliant WhatsApp direct-messaging URLs with dynamic, context-aware messages.
 */

/**
 * Safely normalizes phone numbers into clean international digits for wa.me/ links.
 * 
 * Rules:
 * - Strips all non-digit characters (spaces, hyphens, parentheses, plus signs).
 * - Strips leading international access double zeroes ("0092..." -> "92...").
 * - Normalizes local Pakistani mobile format ("0300..." -> "92300...").
 * - Returns clean digit-only string (no "+" prefix, no "00" prefix).
 */
export function normalizeWhatsAppNumber(rawPhone?: string): string {
  if (!rawPhone || typeof rawPhone !== 'string') return '';
  
  // Strip all non-digit characters
  let digits = rawPhone.replace(/\D/g, '');
  if (!digits) return '';

  // Remove leading 00 (e.g. 0092300... -> 92300...)
  if (digits.startsWith('00')) {
    digits = digits.substring(2);
  }

  // Handle local Pakistani 11-digit numbers starting with 0 (e.g. 0300... -> 92300...)
  if (digits.startsWith('0') && digits.length === 11) {
    digits = '92' + digits.substring(1);
  }

  return digits;
}

/**
 * Generates a dynamic contextual message for WhatsApp and Contact form.
 */
export function generateContextualMessage(options: {
  title?: string;
  category?: string;
  client?: string;
  type?: 'work' | 'service' | 'general';
  customMessage?: string;
  siteName?: string;
}): string {
  const brandName = options.siteName || "Lizzdo Media";

  // 1. If explicit CMS custom WhatsApp message is provided, use it
  if (options.customMessage && options.customMessage.trim().length > 0) {
    return options.customMessage.trim();
  }

  const rawTitle = (options.title || options.category || 'creative').trim();
  
  // Clean up title (remove trailing 'Design' if we are building natural phrases, or preserve it)
  // Ensure we don't end up with "project project"
  const cleanTitle = rawTitle.replace(/\s+project$/i, '').trim();

  // Specific contextual styling based on disciplines
  const lower = cleanTitle.toLowerCase();

  if (lower.includes('brand identity') || lower.includes('branding')) {
    return `Hello ${brandName}, I’m interested in discussing a Brand Identity Design project. I’d like to learn more about your process, pricing, and timeline.`;
  }

  if (lower.includes('logo design') || lower === 'logo') {
    return `Hello ${brandName}, I’m interested in discussing a Logo Design project. I’d like to learn more about your process, pricing, and timeline.`;
  }

  if (lower.includes('packaging')) {
    return `Hello ${brandName}, I’m interested in discussing a Packaging Design project.`;
  }

  if (lower.includes('web development') || lower.includes('website development') || lower.includes('website')) {
    return `Hello ${brandName}, I’m interested in discussing a Web Development project.`;
  }

  if (lower.includes('social media campaign') || lower.includes('social campaign')) {
    return `Hello ${brandName}, I’m interested in discussing a Social Media Campaign project.`;
  }

  if (lower.includes('saas') || lower.includes('saas design')) {
    return `Hello ${brandName}, I’m interested in discussing a SaaS Design project.`;
  }

  if (lower.includes('graphic design')) {
    return `Hello ${brandName}, I’m interested in discussing a Graphic Design project.`;
  }

  if (lower.includes('social media design') || lower.includes('social media')) {
    return `Hello ${brandName}, I’m interested in discussing a Social Media Design project.`;
  }

  if (lower.includes('advertising') || lower.includes('ad creatives')) {
    return `Hello ${brandName}, I’m interested in discussing an Advertising Creatives project.`;
  }

  if (lower.includes('ai visual')) {
    return `Hello ${brandName}, I’m interested in discussing an AI Visual Content project.`;
  }

  if (lower.includes('e-commerce') || lower.includes('ecommerce')) {
    return `Hello ${brandName}, I’m interested in discussing an E-commerce Design project.`;
  }

  // Dynamic fallback for any custom CMS title / project
  if (options.type === 'service') {
    return `Hello ${brandName}, I’m interested in discussing a ${cleanTitle} project. I’d like to learn more about your process, pricing, and timeline.`;
  }

  const projectSubject = options.client ? `${options.client} ${cleanTitle}` : cleanTitle;
  return `Hello ${brandName}, I’m interested in discussing a ${projectSubject} project. I’d like to learn more about your process, pricing, and timeline.`;
}

/**
 * Creates a standard WhatsApp deep link URL.
 * 
 * @param rawPhone The raw phone number from CMS
 * @param message The prefilled text message to encode
 * @param defaultMessage Safe fallback message if message is empty
 * @returns Fully formed WhatsApp URL (e.g. "https://wa.me/923000000000?text=Hello...") or "#" if invalid
 */
export function createWhatsAppUrl(
  rawPhone?: string,
  message?: string,
  defaultMessage: string = "Hello Lizzdo Media, I would like to discuss a project with your team."
): string {
  const normalizedNumber = normalizeWhatsAppNumber(rawPhone);
  if (!normalizedNumber) {
    return '#';
  }

  const finalMessage = message && message.trim().length > 0 ? message.trim() : defaultMessage;
  const encodedMessage = encodeURIComponent(finalMessage);

  return `https://wa.me/${normalizedNumber}?text=${encodedMessage}`;
}

/**
 * Generates a service-specific contextual WhatsApp link.
 */
export function createServiceWhatsAppUrl(
  rawPhone?: string,
  serviceTitle?: string,
  siteName: string = "Lizzdo Media",
  customMessage?: string,
  category?: string
): string {
  const message = generateContextualMessage({
    title: serviceTitle,
    category,
    type: 'service',
    customMessage,
    siteName
  });

  return createWhatsAppUrl(rawPhone, message);
}

/**
 * Generates a work/portfolio contextual WhatsApp link.
 */
export function createWorkWhatsAppUrl(
  rawPhone?: string,
  projectTitle?: string,
  clientOrBrand?: string,
  siteName: string = "Lizzdo Media",
  customMessage?: string,
  category?: string
): string {
  const message = generateContextualMessage({
    title: projectTitle,
    client: clientOrBrand,
    category,
    type: 'work',
    customMessage,
    siteName
  });

  return createWhatsAppUrl(rawPhone, message);
}

/**
 * Normalizes phone numbers for standard clickable `tel:` links.
 */
export function createTelUrl(rawPhone?: string): string {
  if (!rawPhone) return '#';
  const digits = rawPhone.replace(/[^0-9+]/g, '');
  return digits ? `tel:${digits}` : '#';
}

/**
 * Creates a clean `mailto:` link with optional subject.
 */
export function createMailtoUrl(rawEmail?: string, subject?: string): string {
  if (!rawEmail) return '#';
  const cleanEmail = rawEmail.trim();
  if (!cleanEmail || cleanEmail === '#') return '#';
  if (subject) {
    return `mailto:${cleanEmail}?subject=${encodeURIComponent(subject)}`;
  }
  return `mailto:${cleanEmail}`;
}
