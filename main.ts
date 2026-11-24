// office-joke-aaf86162: a one-line office joke. This program writes that
// single line to /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: a specific office detail (the printer that jams and runs low on
// toner) with a surprise payoff — one page turns into a reason to quit.
const LINE =
  'I asked the office printer for one page; it gave me a paper jam, a low-toner warning, and a reason to update my resume.';

if (LINE.length < 1 || LINE.length > 200 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-200 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
