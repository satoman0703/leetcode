# leetcode

LeetCode の解答を TypeScript + Bun で管理する。1問1ディレクトリ、1問1コミット。

## セットアップ

```bash
bun install
```

## 新しい問題を始める

```bash
bun run new <number> <slug> <difficulty>
# 例
bun run new 1 two-sum easy
```

`problems/0001-two-sum/` に `solution.ts` / `solution.test.ts` / `README.md` の雛形が生成される。
`slug` は LeetCode の URL 末尾（`https://leetcode.com/problems/<slug>/`）をそのまま使う。

## 解く流れ

1. LeetCode の問題文から関数シグネチャを `solution.ts` にコピーする
2. `solution.test.ts` の `it.todo` を `it` に変えて Example のケースを書く（Red）
3. `bun --watch test problems/0001-two-sum` を回しながら実装する（Green）
4. `solution.ts` から**末尾の `export` 文を除いて** LeetCode に貼り、Submit する
5. `README.md` にアプローチ・計算量・学びを書く
6. コミットする

```bash
git add problems/0001-two-sum
git commit -m "solve: 1. Two Sum (Easy)"
```

進捗は `git log --oneline` がそのまま学習ログになる。

## コマンド

| コマンド | 内容 |
| --- | --- |
| `bun test` | 全問題のテスト |
| `bun test problems/0001-two-sum` | 特定の問題だけ |
| `bun --watch test problems/0001-two-sum` | ファイル変更で自動再実行 |
| `bun test --todo` | 未着手（`it.todo`）も含めて表示する |
| `bun run typecheck` | 型チェック |
| `bun run lint` | biome check |
| `bun run format` | biome format --write |

## 構成

```
problems/
  0001-two-sum/
    solution.ts        # 解答本体。末尾の export 文だけが LeetCode 用に不要
    solution.test.ts   # Example と自分で足したエッジケース
    README.md          # 問題URL・アプローチ・計算量・学び
scripts/
  new.ts               # 雛形生成
```

問題番号は4桁ゼロ埋めにして、ディレクトリのソート順を問題番号順に揃えている。

Linked List / Tree 問題に入ったら、共通の `ListNode` / `TreeNode` 定義と配列⇔構造体の
変換ヘルパーを `lib/structures.ts` に置く。

## 設計上の判断

- `tsconfig.json` の `noUncheckedIndexedAccess` は無効。有効だと `nums[i]` が
  `number | undefined` になり、境界をループ条件で保証済みの箇所にも `!` が必要になるため。
- CI は置いていない。1人用リポジトリで、push 前に手元でテストを通すため。
