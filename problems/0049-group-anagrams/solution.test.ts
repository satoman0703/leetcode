import { describe, expect, it } from "bun:test";
import { Solution } from "./solution";

describe("49. Group Anagrams", () => {
  // グループ内の要素を並び替えた後に、グループを1つの文字列としてさらに並び替える
  const normalize = (groups: string[][]): string[][] =>
    groups
      .map((group) => [...group].sort())
      .sort((a, b) => a.join(",").localeCompare(b.join(",")));

  const expectNormalized = (actual: string[][], expected: string[][]) => {
    expect(normalize(actual)).toEqual(normalize(expected));
  };

  const solution = new Solution();
  it("example 1", () => {
    expectNormalized(
      solution.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]),
      [["hat"], ["act", "cat"], ["stop", "pots", "tops"]],
    );
  });
  it("example 2", () => {
    expectNormalized(solution.groupAnagrams(["x"]), [["x"]]);
  });
  it("example 3", () => {
    expectNormalized(solution.groupAnagrams([""]), [[""]]);
  });
});
