import ts from "typescript";

// Read the same literal data used by React, without evaluating image imports or
// duplicating product copy. Fail the build rather than silently publishing slugs.
export function readSeoSiteData(source) {
  const file = ts.createSourceFile("site.ts", source, ts.ScriptTarget.Latest, true);
  const declarations = file.statements.filter(ts.isVariableStatement)
    .flatMap((statement) => [...statement.declarationList.declarations]);
  const initializer = (name) => declarations.find((node) => node.name.getText(file) === name)?.initializer;
  const field = (object, key) => {
    const property = object.properties.find((node) => ts.isPropertyAssignment(node) && node.name.getText(file) === key);
    if (!property || !ts.isStringLiteral(property.initializer)) throw new Error(`Expected literal SEO field: ${key}`);
    return property.initializer.text;
  };
  const productArray = initializer("products");
  const businessObject = initializer("business");
  if (!productArray || !ts.isArrayLiteralExpression(productArray) || !businessObject || !ts.isObjectLiteralExpression(businessObject)) {
    throw new Error("Expected products array and business object in site.ts");
  }
  const products = productArray.elements.map((node) => {
    if (!ts.isObjectLiteralExpression(node)) throw new Error("Expected literal product object");
    return Object.fromEntries(["slug", "name", "category", "blurb"].map((key) => [key, field(node, key)]));
  });
  if (!products.length || new Set(products.map(({ slug }) => slug)).size !== products.length) throw new Error("Missing or duplicate product slugs");
  return { products, phone: field(businessObject, "phone"), phoneHref: field(businessObject, "phoneHref") };
}
