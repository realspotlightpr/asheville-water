import fs from "node:fs";
import ts from "typescript";

// cities.ts is our import-free, versioned data module. Compile it with the
// existing build dependency, avoiding a second parser or Node TS-loader requirement.
const source = fs.readFileSync(new URL("../src/data/cities.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 },
});
const data = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
export const { cityProfiles, getCitySeo } = data;
