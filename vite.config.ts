import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns: ["dist/**", ".astro/**", ".codex/**"],
  },
  lint: {
    ignorePatterns: ["node_modules/**", "dist/**", ".astro/**", ".codex/**"],
  },
  test: {
    passWithNoTests: true,
  },
});
