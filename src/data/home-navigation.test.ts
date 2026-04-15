import { describe, expect, test } from "vite-plus/test";
import { getHomeNavigation } from "./home-navigation";

describe("home navigation", () => {
  test("uses the bulletin navigation copy on the home route", () => {
    const navigation = getHomeNavigation();

    expect(navigation.brand).toBe("CiaLli†Dev");
    expect(navigation.links.map((link) => link.label)).toEqual(["Channel", "Code"]);
    expect(navigation.links.map((link) => link.url)).toEqual([
      "https://www.ciallichannel.com",
      "https://cms.cylphoto.cn:8080/home",
    ]);
  });
});
