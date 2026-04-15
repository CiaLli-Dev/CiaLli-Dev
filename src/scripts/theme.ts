export type BulletinTheme = "light" | "dark";

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme: BulletinTheme): void {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.dispatchEvent(new CustomEvent("bulletin-theme-change", { detail: { theme } }));
}

export function getSystemTheme(): BulletinTheme {
  return mediaQuery.matches ? "dark" : "light";
}

export function initTheme(): void {
  applyTheme(getSystemTheme());
}

export function startSystemThemeSync(): void {
  mediaQuery.addEventListener("change", (event) => {
    applyTheme(event.matches ? "dark" : "light");
  });
}
