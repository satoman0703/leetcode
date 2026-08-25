import { describe, expect, it } from "bun:test";
import { Solution } from "./solution";

describe("238. Array Exept Self", () => {
  const solution = new Solution();
  it("output[i]はnums[i]を除く配列の積の累計になること", () => {
    expect(solution.productExceptSelf([1, 2, 4, 6])).toEqual([48, 24, 12, 8]);
  });
  it("0や-1がある場合も正しく計算されること", () => {
    expect(solution.productExceptSelf([-1, 0, 1, 2, 3])).toEqual([
      0, -6, 0, 0, 0,
    ]);
  });
  it("同じ数値の場合でもoutputが正確にでること", () => {
    expect(solution.productExceptSelf([0, 0])).toEqual([0, 0]);
  });
});
