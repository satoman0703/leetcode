import { describe, expect, it } from "bun:test";
import { Solution } from "./solution";

describe("271. Encode And Decode Strings", () => {
  const solution = new Solution();
  const roundTrip = (strs: string[]) => solution.decode(solution.encode(strs));

  it("encode した文字列を decode すると元に戻る", () => {
    expect(roundTrip(["Hello", "World"])).toEqual(["Hello", "World"]);
  });

  it("区切り文字に使った # が中身にあっても壊れない", () => {
    expect(roundTrip(["##", "#", "a#b"])).toEqual(["##", "#", "a#b"]);
  });

  it("空文字列を含んでいても長さ0として復元できる", () => {
    expect(roundTrip(["", "x", ""])).toEqual(["", "x", ""]);
  });

  it("空配列なら空配列を返す", () => {
    expect(roundTrip([])).toEqual([]);
  });

  it("長さが2桁以上でも桁数を取り違えない", () => {
    expect(roundTrip(["a".repeat(123), "b"])).toEqual(["a".repeat(123), "b"]);
  });

  it("数字だけの文字列を中身と長さで混同しない", () => {
    expect(roundTrip(["12", "3#4"])).toEqual(["12", "3#4"]);
  });
});
