class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const compare = new Map<string, number>();

    for (const char of s) {
      compare.set(char, (compare.get(char) || 0) + 1);
    }
    for (const char of t) {
      const count = (compare.get(char) || 0) - 1;
      compare.set(char, count);
      if (count < 0) return false;
    }
    return true;
  }
}

export { Solution };
