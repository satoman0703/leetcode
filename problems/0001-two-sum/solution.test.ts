import { describe, expect, it } from "bun:test";
import { Solution } from "./solution";

describe("1. Two Sum", () => {
  const solution = new Solution();
  // 実装を始めるときに it.todo を it に変えて Red から始める
  it("example 1", () => {
    expect(solution.twoSum([3, 4, 5, 6], 7)).toEqual([0, 1]);
  });
  it("example 1", () => {
    expect(solution.twoSum([4, 5, 6], 10)).toEqual([0, 2]);
  });
  it("example 1", () => {
    expect(solution.twoSum([5, 5], 10)).toEqual([0, 1]);
  });
});
