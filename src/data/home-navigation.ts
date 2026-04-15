import { loadBulletinData } from "./load-bulletin";
import type { NavigationData } from "./types";

export function getHomeNavigation(): NavigationData {
  return loadBulletinData().navigation;
}
