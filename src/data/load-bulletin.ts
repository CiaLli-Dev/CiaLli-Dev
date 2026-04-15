import rawBulletinData from "./bulletin.json";
import { bulletinSchema } from "./bulletin-schema";
import type { BulletinData, FaqItem } from "./types";

function normalizeFaqItems(items: BulletinData["faq"]["items"]): FaqItem[] {
  return items.map((item) => {
    const list = item.list && item.list.length > 0 ? item.list : undefined;
    return {
      ...item,
      list,
    };
  });
}

function formatSchemaIssues(issues: { path: Array<string | number>; message: string }[]): string {
  return issues
    .map((issue) => {
      const path = issue.path.length === 0 ? "(root)" : issue.path.join(".");
      return `${path}: ${issue.message}`;
    })
    .join("; ");
}

export function parseBulletinData(input: unknown): BulletinData {
  const parsed = bulletinSchema.safeParse(input);
  if (!parsed.success) {
    throw new Error(`Invalid bulletin data: ${formatSchemaIssues(parsed.error.issues)}`);
  }

  return {
    ...parsed.data,
    hero: {
      ...parsed.data.hero,
      summary: parsed.data.hero.summary ?? "",
    },
    faq: {
      ...parsed.data.faq,
      items: normalizeFaqItems(parsed.data.faq.items),
    },
  };
}

export function loadBulletinData(): BulletinData {
  return parseBulletinData(rawBulletinData);
}

export const bulletinData = loadBulletinData();
