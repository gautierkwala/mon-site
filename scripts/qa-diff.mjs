// Comparaison pixel entre /tmp/kwala-qa/ref et /tmp/kwala-qa/apres.
import { execFileSync } from "node:child_process";
console.log(execFileSync("python3", ["scripts/qa-diff.py"], { encoding: "utf8" }));
