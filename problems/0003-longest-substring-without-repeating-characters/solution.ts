// LeetCode へ貼るときは末尾の export 文を除く
function lengthOfLongestSubstring(s: string): number {
  const window = new Set<string>();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // 左端を1文字ずつ削ることで window の中身と [left, right] の範囲が一致し続ける
    while (window.has(s[right])) {
      window.delete(s[left]);
      left++;
    }
    window.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

export { lengthOfLongestSubstring };
