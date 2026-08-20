class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
      const existIndex = map.get(target - nums[i]);
      if (existIndex !== undefined) return [existIndex, i];
      map.set(nums[i], i);
    }

    return [];
  }
}

export { Solution };
