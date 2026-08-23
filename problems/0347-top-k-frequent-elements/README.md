# 347. Top K Frequent Elements

- https://leetcode.com/problems/top-k-frequent-elements/
- https://neetcode.io/problems/top-k-elements-in-list/question?list=neetcode150
- Difficulty: Medium
- Tags:

## アプローチ

- 要素をkeyとしてMapで出現頻度をカウントする
- 要素を出現順に並び替えて、頻出のk個の要素をsliceで取り出す

## 計算量

- Time: O(n log n)
- Space: O(n)

## 学び

- https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/entries
- [key, val]両方使うのでMap.entries()を採用
- 最後はkeyを返せばいいので、第一引数だけに絞って配列を作成する
