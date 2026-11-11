import { cx, displayUrl } from "../utils";

describe("cx", () => {
  it("joins only truthy class names", () => {
    expect(cx("a", false, undefined, null, "b")).toBe("a b");
    expect(cx()).toBe("");
  });
});

describe("displayUrl", () => {
  it.each([
    ["https://wortle.xyz", "wortle.xyz"],
    ["https://meetmaeva.com/", "meetmaeva.com"],
    ["http://www.example.com/blog/post/", "example.com/blog/post"],
  ])("shortens %s", (url, expected) => {
    expect(displayUrl(url)).toBe(expected);
  });
});
