export type CookieCategory = "necessary" | "analytics" | "marketing";

export interface CookiePreferences {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
}

export const COOKIE_STORAGE_KEY = "ogs-cookie-preferences";
export const OPEN_PREFERENCES_EVENT = "ogs:open-cookie-preferences";

export const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

/**
 * No analytics or marketing scripts are wired into this site yet. These
 * flags are the single source of truth for that fact — when a real
 * analytics or marketing tool is added, flip the relevant flag to true
 * and load the script only behind the matching consent category.
 */
export const availableTools = {
  analytics: false,
  marketing: false,
};

export function readStoredPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics) && availableTools.analytics,
      marketing: Boolean(parsed.marketing) && availableTools.marketing,
    };
  } catch {
    return null;
  }
}

export function writeStoredPreferences(prefs: CookiePreferences) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      COOKIE_STORAGE_KEY,
      JSON.stringify({ ...prefs, savedAt: new Date().toISOString() })
    );
  } catch {
    // localStorage unavailable (private mode, etc.) — consent choice
    // simply won't persist across visits; the banner will reappear.
  }
}
