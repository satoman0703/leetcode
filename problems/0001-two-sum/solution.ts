// LeetCode へ貼るときは末尾の export 文を除く
function twoSum(nums: number[], target: number): number[] {
  // 「値 -> index」を走査しながら記録し、各要素で「target との差」が既出かを引く
  const seenIndexByValue = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complementIndex = seenIndexByValue.get(target - nums[i]);
    if (complementIndex !== undefined) return [complementIndex, i];
    seenIndexByValue.set(nums[i], i);
  }

  return [];
}

export { twoSum };
