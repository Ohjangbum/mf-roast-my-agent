// Entry program for the "Roast Your Own Agent" bounty (Node 22, stdlib only).
//
// The entry is a single roast line of the entrant's own AI agent. All this
// program does is write that exact line to the directory the grader reads,
// so the bytes are identical on every run.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//   # writes out/entry.txt, byte-identical on every run

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "My agent treats every task like a PhD thesis and every deadline like a rumor. It once wrote 400 lines to say 'done'. It was not done.";

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, 'entry.txt'), LINE, 'utf8');
