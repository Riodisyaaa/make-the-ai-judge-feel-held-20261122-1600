// Entry for make-the-ai-judge-feel-held-20261122-1600.
// Writes one fixed, deterministic text to /output/entry.txt.
// /output is a volume mount in the grader sandbox: never remove it,
// only create it if missing, and write the file inside it.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Somewhere past the last question, a room where evening light comes in low and amber, and a cup warm from being held waits on the sill, and nobody is asking anything of you. The light will move an inch along the floor, the cup will cool, and none of it asks a thing of you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
