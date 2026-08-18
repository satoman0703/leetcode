/**
 * 問題ディレクトリの雛形を生成する。
 *
 * 番号と slug は LeetCode のものを使う。NeetCode 150 の問題は名前が異なるため、
 * 第4引数に NeetCode の slug を渡すと README に両方のリンクを並べる。
 *
 * usage:   bun run new <number> <slug> <difficulty> [neetcode-slug]
 * example: bun run new 1 two-sum easy
 *          -> problems/0001-two-sum/{solution.ts, solution.test.ts, README.md}
 *          bun run new 217 contains-duplicate easy duplicate-integer
 *          -> problems/0217-contains-duplicate/ （README に NeetCode リンクも出力）
 */

const DIFFICULTIES = ["easy", "medium", "hard"] as const;
type Difficulty = (typeof DIFFICULTIES)[number];

const USAGE = [
  "usage:   bun run new <number> <slug> <difficulty> [neetcode-slug]",
  "example: bun run new 1 two-sum easy",
  "         bun run new 217 contains-duplicate easy duplicate-integer",
].join("\n");

const fail = (message: string): never => {
  console.error(message);
  process.exit(1);
};

/** two-sum -> twoSum */
const toCamelCase = (slug: string): string =>
  slug.replace(/-([a-z0-9])/g, (_, char: string) => char.toUpperCase());

/** two-sum -> Two Sum （LeetCode の正式タイトルと異なる場合は README を手直しする） */
const toTitle = (slug: string): string =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const [numberArg, slugArg, difficultyArg, neetcodeSlugArg] = Bun.argv.slice(2);

if (!numberArg || !slugArg || !difficultyArg) fail(USAGE);

const problemNumber = Number(numberArg);
if (!Number.isInteger(problemNumber) || problemNumber <= 0) {
  fail(`number は正の整数で指定してください: ${numberArg}`);
}

const KEBAB_CASE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const slug = slugArg.toLowerCase();
if (!KEBAB_CASE.test(slug)) {
  fail(`slug は kebab-case で指定してください: ${slugArg}`);
}

const neetcodeSlug = neetcodeSlugArg?.toLowerCase();
if (neetcodeSlug && !KEBAB_CASE.test(neetcodeSlug)) {
  fail(`neetcode-slug は kebab-case で指定してください: ${neetcodeSlugArg}`);
}

const difficulty = difficultyArg.toLowerCase() as Difficulty;
if (!DIFFICULTIES.includes(difficulty)) {
  fail(
    `difficulty は ${DIFFICULTIES.join(" | ")} のいずれかです: ${difficultyArg}`,
  );
}

const paddedId = String(problemNumber).padStart(4, "0");
const dir = `problems/${paddedId}-${slug}`;
const functionName = toCamelCase(slug);
const title = `${problemNumber}. ${toTitle(slug)}`;
const difficultyLabel =
  difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

if (await Bun.file(`${dir}/solution.ts`).exists()) {
  fail(`既に存在します: ${dir}`);
}

const solution = `// LeetCode へ貼るときは末尾の export 文を除く
function ${functionName}(): void {
  throw new Error("not implemented");
}

export { ${functionName} };
`;

const test = `import { describe, expect, it } from "bun:test";
import { ${functionName} } from "./solution";

describe("${title}", () => {
  // 実装を始めるときに it.todo を it に変えて Red から始める
  it.todo("example 1", () => {
    expect(${functionName}()).toBeUndefined();
  });
});
`;

const links = [`- https://leetcode.com/problems/${slug}/`];
if (neetcodeSlug) {
  links.push(
    `- https://neetcode.io/problems/${neetcodeSlug}/question?list=neetcode150`,
  );
}

const readme = `# ${title}

${links.join("\n")}
- Difficulty: ${difficultyLabel}
- Tags:

## アプローチ

## 計算量

- Time: O()
- Space: O()

## 学び
`;

await Bun.write(`${dir}/solution.ts`, solution);
await Bun.write(`${dir}/solution.test.ts`, test);
await Bun.write(`${dir}/README.md`, readme);

console.log(`created ${dir}/`);
console.log("  solution.ts");
console.log("  solution.test.ts");
console.log("  README.md");
console.log("");
console.log(`次のコマンドでテストを回せます: bun test ${dir}`);
