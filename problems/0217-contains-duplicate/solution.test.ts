import { describe, expect, it } from "bun:test";
import { Solution } from "./solution";

describe("217. Contains Duplicate", () => {
  const solution = new Solution();
  it("example 1", () => {
    expect(solution.hasDuplicate([1, 2, 3, 3])).toEqual(true);
  });
  it("example 2", () => {
    expect(solution.hasDuplicate([1, 2, 3, 4])).toEqual(false);
  });
});
