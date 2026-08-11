import { describe, expect, it } from "bun:test";
import { twoSum } from "./solution";

describe("1. Two Sum", () => {
  it("和が target になる2つの index を返す", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("先頭の要素が解に含まれない場合も正しい index を返す", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("同じ値の要素2つで target を作る場合、同一 index を再利用しない", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("負の数を含む場合も解を返す", () => {
    expect(twoSum([-1, -2, -3, -4], -6)).toEqual([1, 3]);
  });
});
