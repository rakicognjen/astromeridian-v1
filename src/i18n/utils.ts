import { ui, languages } from './ui';
import type { Lang, UiKey } from './ui';

export { languages };
export type { Lang };

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    // Fall back to English if key missing in locale
    return (ui[lang] as Record<string, string>)[key]
      ?? (ui['en'] as Record<string, string>)[key]
      ?? key;
  };
}

/** Returns the equivalent URL for a given locale */
export function getLocalePath(currentPath: string, targetLang: Lang): string {
  const parts = currentPath.split('/').filter(Boolean);
  const knownLangs = Object.keys(ui) as Lang[];
  if (knownLangs.includes(parts[0] as Lang)) {
    parts.shift(); // remove current lang prefix
  }
  if (targetLang === 'en') return '/' + parts.join('/');
  return `/${targetLang}/${parts.join('/')}`.replace(/\/$/, '') || `/${targetLang}`;
}
