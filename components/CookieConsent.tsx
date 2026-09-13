"use client";

import { useEffect, useState } from "react";
import {
  CookiePreferences,
  OPEN_PREFERENCES_EVENT,
  availableTools,
  defaultPreferences,
  readStoredPreferences,
  writeStoredPreferences,
} from "@/lib/cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Reading localStorage must happen after mount (it isn't available
    // during server rendering), so the banner starts hidden on both server
    // and first client render and this effect decides whether to reveal
    // it — an intentional one-time sync from an external system, not a
    // cascading re-render.
    const stored = readStoredPreferences();
    if (!stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    } else {
      setPrefs(stored);
    }

    const openPanel = () => {
      setPrefs(readStoredPreferences() ?? defaultPreferences);
      setVisible(true);
      setPanelOpen(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, openPanel);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, openPanel);
  }, []);

  function commit(next: CookiePreferences) {
    setPrefs(next);
    writeStoredPreferences(next);
    setVisible(false);
    setPanelOpen(false);
  }

  function acceptAll() {
    commit({
      necessary: true,
      analytics: availableTools.analytics,
      marketing: availableTools.marketing,
    });
  }

  function rejectNonEssential() {
    commit({ necessary: true, analytics: false, marketing: false });
  }

  function savePreferences() {
    commit(prefs);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-gold bg-ivory shadow-[0_-4px_24px_rgba(33,29,25,0.08)]"
    >
      <div className="container-editorial py-6">
        {!panelOpen ? (
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-2xl font-sans text-sm leading-relaxed text-espresso/80">
              We use strictly necessary cookies to run this site. With your consent
              we&rsquo;d also use analytics and marketing cookies —{" "}
              <strong>no such tools are currently installed on this site</strong>, so
              choosing to allow them has no effect yet. See our{" "}
              <a href="/privacy" className="underline hover:text-gold">
                Privacy Policy
              </a>{" "}
              for details.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setPanelOpen(true)}
                className="border border-taupe/40 px-5 py-2.5 font-sans text-sm text-espresso hover:border-gold hover:text-gold"
              >
                Customize
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="border border-taupe/40 px-5 py-2.5 font-sans text-sm text-espresso hover:border-gold hover:text-gold"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="bg-espresso px-5 py-2.5 font-sans text-sm text-ivory hover:bg-gold"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-serif text-xl text-espresso">Cookie Preferences</h2>
              <button
                type="button"
                onClick={() => setPanelOpen(false)}
                aria-label="Close preferences"
                className="font-sans text-sm text-taupe hover:text-gold"
              >
                Close
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-5">
              <PreferenceRow
                title="Strictly Necessary"
                description="Required for the site to function (e.g. remembering your cookie choice). Always active."
                checked
                disabled
              />
              <PreferenceRow
                title="Analytics"
                description={
                  availableTools.analytics
                    ? "Helps us understand how visitors use the site."
                    : "No analytics tool is currently installed on this site, so this category has no effect yet."
                }
                checked={prefs.analytics}
                disabled={!availableTools.analytics}
                onChange={(checked) => setPrefs((p) => ({ ...p, analytics: checked }))}
              />
              <PreferenceRow
                title="Marketing"
                description={
                  availableTools.marketing
                    ? "Used to tailor marketing to your interests."
                    : "No marketing tool is currently installed on this site, so this category has no effect yet."
                }
                checked={prefs.marketing}
                disabled={!availableTools.marketing}
                onChange={(checked) => setPrefs((p) => ({ ...p, marketing: checked }))}
              />
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={rejectNonEssential}
                className="border border-taupe/40 px-5 py-2.5 font-sans text-sm text-espresso hover:border-gold hover:text-gold"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={savePreferences}
                className="bg-espresso px-5 py-2.5 font-sans text-sm text-ivory hover:bg-gold"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PreferenceRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-taupe/20 pb-5 last:border-b-0">
      <div>
        <p className="font-sans text-sm font-medium text-espresso">{title}</p>
        <p className="mt-1 max-w-lg font-sans text-xs leading-relaxed text-espresso/60">
          {description}
        </p>
      </div>
      <label className="relative inline-flex shrink-0 cursor-pointer items-center">
        <span className="sr-only">{title}</span>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="h-5 w-5 border-taupe/40 accent-gold disabled:opacity-50"
        />
      </label>
    </div>
  );
}
