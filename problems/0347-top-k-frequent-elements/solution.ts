class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap = new Map<number, number>();
    for (const num of nums) {
      frequencyMap.set(num, (frequencyMap.get(num) ?? 0) + 1);
    }
    return Array.from(frequencyMap.entries())
      .sort((a, b) => a[1] - b[1])
      .slice(-k)
      .map(([num]) => num);
  }
}

export { Solution };
