# 271. Encode And Decode Strings

- https://leetcode.com/problems/encode-and-decode-strings/
- https://neetcode.io/problems/string-encode-and-decode/question?list=neetcode150
- Difficulty: Medium
- Tags: Arrays: Hashing

## アプローチ

- encode: 各文字列を `長さ#本体` に変換して連結する（`["a#b", "c"]` → `"3#a#b1#c"`）
- decode: `#` の手前の数字を長さとして読み、その文字数だけ数えて取り出す。これを末尾まで繰り返す

## 計算量

- Time: O(m) — m は全文字数の合計。encode/decode でそれぞれ各文字を1回触るだけ
- Space: O(m) — 出力の文字列・配列そのもの

## 学び
