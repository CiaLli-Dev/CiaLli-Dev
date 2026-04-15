import { describe, expect, test } from "vite-plus/test";
import { loadBulletinData, parseBulletinData } from "./load-bulletin";

describe("loadBulletinData", () => {
  test("parses bundled bulletin.json into typed data", () => {
    const data = loadBulletinData();
    expect(data.navigation.brand).toBe("CiaLli†Dev");
    expect(data.hero.actions.length).toBeGreaterThanOrEqual(2);
    expect(data.faq.items.length).toBeGreaterThan(0);
  });

  test("throws detailed path errors on invalid input", () => {
    expect(() =>
      parseBulletinData({
        navigation: { brand: "x", links: [] },
        hero: {},
        faq: { title: "FAQ", items: [] },
      }),
    ).toThrow(/hero\.headline/);
  });

  test("normalizes optional fields with defaults", () => {
    const data = parseBulletinData({
      navigation: {
        brand: "Brand",
        links: [{ label: "Home", url: "https://example.com" }],
      },
      hero: {
        headline: ["A", "B"],
        project: {
          prefix: "use",
          label: "repo",
          url: "https://example.com/repo",
          suffix: "now",
        },
        updatedAt: "today",
        visualAlt: "visual",
        actions: [
          { label: "go", url: "https://example.com/1", variant: "primary" },
          { label: "chat", url: "https://example.com/2", variant: "secondary" },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            question: "Q1",
            paragraphs: ["P1"],
            list: [],
          },
        ],
      },
    });

    expect(data.hero.summary).toBe("");
    expect(data.faq.items[0]?.list).toBeUndefined();
  });
});
