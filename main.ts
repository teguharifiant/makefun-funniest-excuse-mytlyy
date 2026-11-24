import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line entry for make.fun "The Funniest AI Excuse":
// the excuse an AI agent gives after failing a task.
const text =
  "The task is done. Unfortunately, it is also a spreadsheet full of soup.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate: the entry must be a single line of 1-200 characters.
if ([...text].length < 1 || [...text].length > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${[...text].length}`,
  );
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("entry must be a single line (no newline characters)");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
