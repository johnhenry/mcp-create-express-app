import { test } from "node:test";
import assert from "node:assert/strict";
import createExpressApp, { createStateful, createStateless } from "../index.mjs";

test("exports the app factories", () => {
  assert.equal(typeof createStateful, "function");
  assert.equal(typeof createStateless, "function");
  assert.equal(createExpressApp, createStateless);
});
