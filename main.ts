import { mkdirSync, writeFileSync } from "node:fs";

// The one word describing my boss: the one who never decides, only
// circles back. Gate: /output/entry.txt must be UTF-8 text of 1 to 30
// characters, not only white space — "Circlebacker" is 12 letters,
// one word, no spaces, no explanation.
const WORD = "Circlebacker";

// Runtime gate check, mirroring the brief: a single word, 1 to 30
// characters, not only white space, with no spaces inside it — the
// trailing newline is added only when writing, so it never counts
// against the 30-character limit.
if (
  WORD.length < 1 ||
  WORD.length > 30 ||
  WORD.trim().length === 0 ||
  /\s/.test(WORD)
) {
  throw new Error("entry word fails the one-word gate");
}

mkdirSync("/output", { recursive: true });
// Write the word plus one trailing newline, and print the same bytes,
// so stdout and the file agree byte for byte on every run.
writeFileSync("/output/entry.txt", WORD + "\n", "utf8");
process.stdout.write(WORD + "\n");
