import { describe, expect, it } from "bun:test";
import { addTwoNumbers, ListNode } from "./solution";

/** LeetCode の配列表記を連結リストへ。空配列は null */
const toList = (nums: number[]): ListNode | null => {
  const dummy = new ListNode();
  let tail = dummy;
  for (let i = 0; nums.length > i; i++) {
    tail.next = new ListNode(nums[i]);
    tail = tail.next;
  }
  return dummy.next;
};

/** 連結リストを LeetCode の配列表記へ */
const toArray = (head: ListNode | null): number[] => {
  let node = head;
  const array: number[] = [];
  while (node !== null) {
    array.push(node.val);
    node = node.next;
  }
  return array;
};

describe("2. Add Two Numbers", () => {
  it("途中の桁で繰り上がった分を次の桁へ送る", () => {
    // 342 + 465 = 807
    const actual = toArray(addTwoNumbers(toList([2, 4, 3]), toList([5, 6, 4])));
    expect(actual).toEqual([7, 0, 8]);
  });

  it("0 同士でも空リストではなく 1 桁を返す", () => {
    const actual = toArray(addTwoNumbers(toList([0]), toList([0])));
    expect(actual).toEqual([0]);
  });

  it("桁数が異なり最上位から繰り上がる場合、桁がひとつ増える", () => {
    // 9999999 + 9999 = 10009998
    const actual = toArray(
      addTwoNumbers(toList([9, 9, 9, 9, 9, 9, 9]), toList([9, 9, 9, 9])),
    );
    expect(actual).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });
});
