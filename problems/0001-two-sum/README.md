# 1. Two Sum

- https://leetcode.com/problems/two-sum/
- Difficulty: Easy
- Tags: Array, Hash Table

## アプローチ

配列を1回走査しながら「値 -> index」を Map に記録する。各要素で `target - nums[i]` が
既に Map にあれば、その2つが答え。総当たりの O(n^2) を Map の O(1) 参照に置き換えている。

## 計算量

- Time: O(n)
- Space: O(n)

## 学び

「後で必要になる値を先に記録しておく」と二重ループを1回の走査に落とせる。Hash Table 系の基本形。
