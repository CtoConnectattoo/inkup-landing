// Estado del consentimiento de cookies, compartido entre el banner y los scripts de seguimiento.
export type CookieConsentValue = "accepted" | "rejected"

const STORAGE_KEY = "inkup-cookie-consent"
export const CONSENT_CHANGE_EVENT = "inkup-cookie-consent-change"
export const OPEN_SETTINGS_EVENT = "inkup-open-cookie-settings"

export function getCookieConsent(): CookieConsentValue | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === "accepted" || value === "rejected" ? value : null
  } catch {
    return null
  }
}

export function setCookieConsent(value: CookieConsentValue) {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {}
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: value }))
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))
}
