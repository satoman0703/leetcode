# leetcode

LeetCode の解答を TypeScript + Bun で管理する学習用リポジトリ。

## 最重要：解答を代わりに書かない

このリポジトリは本人がアルゴリズムを身につけるためのもの。**明示的に「解答を書いて」と
頼まれない限り、解法コードを書かない。**

- ヒントを求められたら、使うデータ構造や計算量の方向性だけを示す。コードは書かない
- レビューを頼まれたら、動いているコードに対して計算量・エッジケース・可読性を指摘する
- 詰まっている場合は、失敗しているテストケースの入力から何が起きているかを一緒に追う

`solution.ts` を先回りして埋めるのは、この方針への違反にあたる。

## ツールチェーン

Node.js / npm / pnpm ではなく Bun を使う。

- 実行: `bun <file>`（`node` や `tsx` ではない）
- テスト: `bun test`（jest / vitest ではない）
- 依存追加: `bun add`
- script 実行: `bun run <script>`

## 解答ファイルの形式

`solution.ts` は LeetCode のエディタへ貼れる形を保つ。関数宣言をそのまま書き、
末尾に `export { fn };` の1行だけを足す。貼り付け時はこの1行を除く。

```ts
// LeetCode へ貼るときは末尾の export 文を除く
function twoSum(nums: number[], target: number): number[] {
  ...
}

export { twoSum };
```

`export function` の形にはしない（毎回 `export` を消す手間が本体行に生じるため）。

## テスト

`bun:test` を使い、日本語で「何を保証するか」を書く。

```ts
import { describe, expect, it } from "bun:test";
import { twoSum } from "./solution";

describe("1. Two Sum", () => {
  it("和が target になる2つの index を返す", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
```

未着手の雛形は `it.todo` にしておく（`bun test` 全体をグリーンに保つため）。

## コミット

1問1コミット。書式は `solve: <番号>. <タイトル> (<Difficulty>)`。

```
solve: 1. Two Sum (Easy)
```

解答以外の変更（scaffold の修正、設定変更など）は通常どおり日本語のコミットメッセージで書く。

## 新しい問題の雛形

```bash
bun run new <number> <slug> <difficulty>
```

`scripts/new.ts` が `problems/<4桁>-<slug>/` に3ファイルを生成する。
