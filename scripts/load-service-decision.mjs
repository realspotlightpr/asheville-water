import fs from "node:fs";
import ts from "typescript";

// Share the import-free metadata module with React without evaluating image imports.
const source = fs.readFileSync(new URL("../src/data/serviceDecision.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 },
});
const data = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
export const { serviceDecision, commercialGuideServiceLinks } = data;
