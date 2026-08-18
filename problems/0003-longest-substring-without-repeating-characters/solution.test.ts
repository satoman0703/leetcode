import { describe, expect, it } from "bun:test";
import { lengthOfLongestSubstring } from "./solution";

describe("3. Longest Substring Without Repeating Characters", () => {
  // 実装を始めるときに it.todo を it に変えて Red から始める
  it("example 1", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
  });
  it("example 1", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
  });
  it("example 1", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
  });
});
