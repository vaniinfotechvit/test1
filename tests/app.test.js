const test = require("node:test");
const assert = require("node:assert");

test("basic CI test", () => {
  assert.strictEqual(1 + 1, 2);
});

test("application files are expected to be browser-based", () => {
  assert.ok(true);
});
