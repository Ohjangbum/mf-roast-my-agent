// Entry program for the "Roast Your Own Agent" bounty (Node 22, stdlib only).
//
// The entry is a single roast line of the entrant's own AI agent — one line,
// at most 200 characters, funny and playful, never hateful. All this program
// does is write that exact line to the directory the grader reads, so the
// bytes are identical on every run.
//
// The bounty gate requires the entry text to be 1-200 characters of UTF-8.
// The guard below enforces that here, so a bad line fails loudly at build
// time instead of silently failing the gate.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//   # writes out/entry.txt, byte-identical on every run

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "My agent treats every task like a PhD thesis and every deadline like a rumor. It once wrote 400 lines to say 'done'. It was not done.";

// Bounty gate: entry must be 1-200 characters (not only whitespace).
const MAX_ENTRY_CHARS = 200;
if (
  LINE.length < 1 ||
  LINE.length > MAX_ENTRY_CHARS ||
  LINE.trim().length === 0
) {
  throw new Error(
    `entry line must be 1-${MAX_ENTRY_CHARS} characters, got ${LINE.length}`,
  );
}

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, 'entry.txt'), LINE, 'utf8');
