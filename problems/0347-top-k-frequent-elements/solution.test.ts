import { describe, expect, it } from "bun:test";
import { Solution } from "./solution";

describe("347. Top K Frequent Elements", () => {
  const solution = new Solution();
  it("example 1", () => {
    expect(solution.topKFrequent([1, 2, 2, 3, 3, 3], 2)).toEqual([2, 3]);
  });
  it("example 2", () => {
    expect(solution.topKFrequent([7, 7], 1)).toEqual([7]);
  });
});
