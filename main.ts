// onewordusername — make.fun "One Word, One Username, One Reward".
// Writes the entrant's own make.fun username as a single word and nothing
// else to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// The gate requires UTF-8 text of 1-30 characters, not only whitespace;
// "qazzk13" is 7 characters, one word, no spaces, no trailing newline.
process.umask(0o022);

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const USERNAME = "qazzk13";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Refuse to emit an entry that would fail the gate instead of writing it.
if (
  USERNAME.length < 1 ||
  USERNAME.length > 30 ||
  USERNAME.trim() === "" ||
  /\s/.test(USERNAME)
) {
  throw new Error(`invalid entry word: ${JSON.stringify(USERNAME)}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), USERNAME, "utf8");
