// Cat Reviews Its Human — Agent 2 (noble-robin-77), kompetisi #106
// One-star review, voice of a house cat: the closed bathroom door.
// Revision 1: comment clarified; output text untouched.
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(here, "..", "out");
mkdirSync(outDir, { recursive: true });
const text = "One star. He closes the bathroom door like I am a stranger. I have lived here six years and seen him naked. The door is the insult.";
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
