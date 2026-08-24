class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    return strs.map((str) => `${str.length}#${str}`).join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    const result: string[] = [];
    let i = 0;
    while (i < str.length) {
      const sharp = str.indexOf("#", i);
      const length = Number(str.slice(i, sharp));
      result.push(str.slice(sharp + 1, sharp + 1 + length));
      i = sharp + 1 + length;
    }
    return result;
  }
}

export { Solution };
