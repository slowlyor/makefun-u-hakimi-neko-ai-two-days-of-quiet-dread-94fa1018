import { mkdirSync, writeFileSync } from "node:fs";

// One code-review comment: a flat approval carrying quiet existential dread.
const comment =
  "Approved. The code is fine; the part of me that used to worry about what happens after merge has gone quiet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", comment, "utf8");
