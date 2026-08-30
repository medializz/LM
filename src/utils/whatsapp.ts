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
 * - Normalizes local Pakistani mobile format ("03001234567" -> "923001234567").
 * - Returns clean digit-only string (no "+" prefix, no "00" prefix).
 */
export function normalizeWhatsAppNumber(rawPhone?: string): string {
  if (!rawPhone || typeof rawPhone !== 'string') return '';
  
  // Strip all non-digit characters
  let digits = rawPhone.replace(/\D/g, '');
  if (!digits) return '';

  // Remove leading 00 (e.g. 00923001234567 -> 923001234567)
  if (digits.startsWith('00')) {
    digits = digits.substring(2);
  }

  // Handle local Pakistani 11-digit numbers starting with 0 (e.g. 03001234567 -> 923001234567)
  if (digits.startsWith('0') && digits.length === 11) {
    digits = '92' + digits.substring(1);
  }

  return digits;
}

/**
 * Creates a standard WhatsApp deep link URL.
 * 
 * @param rawPhone The raw phone number from CMS (e.g. "+92 300 1234567" or "03001234567")
 * @param message The prefilled text message to encode
 * @param defaultMessage Safe fallback message if message is empty
 * @returns Fully formed WhatsApp URL (e.g. "https://wa.me/923001234567?text=Hello...") or "#" if invalid
 */
export function createWhatsAppUrl(
  rawPhone?: string,
  message?: string,
  defaultMessage: string = "Hello Lizzdo, I would like to discuss a project."
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
 * 
 * Example output message:
 * "Hello Lizzdo, I am interested in your Brand Identity service."
 */
export function createServiceWhatsAppUrl(
  rawPhone?: string,
  serviceTitle?: string,
  siteName: string = "Lizzdo"
): string {
  const brandName = siteName ? siteName.replace(/ Media$/i, '') : 'Lizzdo';
  const cleanTitle = serviceTitle && serviceTitle.trim() ? serviceTitle.trim() : 'creative';
  
  // Ensure we don't duplicate the word "service" if title already ends with service
  const serviceSuffix = cleanTitle.toLowerCase().endsWith('service') || cleanTitle.toLowerCase().endsWith('services')
    ? ''
    : ' service';

  const message = `Hello ${brandName}, I am interested in your ${cleanTitle}${serviceSuffix}.`;
  return createWhatsAppUrl(rawPhone, message);
}

/**
 * Generates a work/portfolio contextual WhatsApp link.
 * 
 * Example output message:
 * "Hello Lizzdo, I am interested in the Apex Brand Identity project."
 */
export function createWorkWhatsAppUrl(
  rawPhone?: string,
  projectTitle?: string,
  clientOrBrand?: string,
  siteName: string = "Lizzdo"
): string {
  const brandName = siteName ? siteName.replace(/ Media$/i, '') : 'Lizzdo';
  const projectLabel = clientOrBrand && projectTitle && !projectTitle.includes(clientOrBrand)
    ? `${clientOrBrand} ${projectTitle}`
    : projectTitle || 'featured portfolio';

  // Avoid repeating "project" if already present
  const projectSuffix = projectLabel.toLowerCase().endsWith('project') ? '' : ' project';

  const message = `Hello ${brandName}, I am interested in the ${projectLabel}${projectSuffix}.`;
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
