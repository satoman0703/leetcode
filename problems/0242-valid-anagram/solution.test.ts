import { describe, expect, it } from "bun:test";
import { Solution } from "./solution";

describe("242. Valid Anagram", () => {
  const solution = new Solution();
  // 実装を始めるときに it.todo を it に変えて Red から始める
  it("アナグラムならtrue", () => {
    expect(solution.isAnagram("racecar", "carrace")).toEqual(true);
  });
  it("アナグラムではない場合はfalse", () => {
    expect(solution.isAnagram("jar", "jam")).toEqual(false);
  });
  it("アナグラムではない場合はfalse（同一の個数が異なる文字列）", () => {
    expect(solution.isAnagram("aacc", "ccac")).toEqual(false);
  });
});
