# 238. Array Exept Self

- https://leetcode.com/problems/array-exept-self/
- https://neetcode.io/problems/products-of-array-discluding-self/question?list=neetcode150
- Difficulty: Medium
- Tags:

## アプローチ

- 計算量について考える必要がある
- result[i],nums[i]これらの両方の値に対して考える
- 要は自分を除く配列の積 = 自分より左の積 * 自分より右の積と考えればよい
- 最初のループで自分のresult[i]に入る数値は自分より左側の要素の積
  - 最も左の要素は初期化のために1にする
- 次のループで自分の右側の積を1ループ目に対してかけあわせることでresultが正しく出る

## 計算量

- Time: O()
- Space: O()

## 学び

- 計算量について考える必要があった

```ts
class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      const value = nums
        .filter((_, index) => index !== i)
        .reduce((acc, current) => acc * current);
      result.push(value + 0);
    }
    return result;
  }
}
```

- これだとTimeがO(n^2)となり、`Time Limit Exceeded`だった
- 自分の頭の中でnums[],result[],let acc（左右の要素を掛け合わしていった癌剤の値）の3要素を2要素が可変なものに対してロジックを組み立てていくのが理解しづらかった
