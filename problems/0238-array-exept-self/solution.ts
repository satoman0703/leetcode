class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums: number[]): number[] {
    const result: number[] = Array.from({ length: nums.length });

    // 現在の計算結果を保持する
    // 初期値は計算結果に影響しないもの（今回は掛け算なので1）にする
    let acc = 1;
    // result[i]に自分(nums[i])より左側の要素の累積を入れる
    for (let i = 0; i < nums.length; i++) {
      result[i] = acc;
      acc *= nums[i];
    }

    acc = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
      result[i] = result[i] * acc + 0;
      acc *= nums[i];
    }

    return result;
  }
}

export { Solution };
