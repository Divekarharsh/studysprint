const test = require("node:test");
const assert = require("node:assert/strict");
const { createTask, formatDueDate } = require("../script.js");

test("createTask trims the title and sets default task properties", () => {
  const task = createTask("  Revise DevOps  ");
  assert.equal(task.title, "Revise DevOps");
  assert.equal(task.subject, "General");
  assert.equal(task.priority, "Normal");
  assert.equal(task.completed, false);
  assert.ok(task.id);
});

test("createTask preserves the supplied subject, priority, and due date", () => {
  const task = createTask("Finish lab", "Database Engineering", "High", "2026-10-20");
  assert.equal(task.subject, "Database Engineering");
  assert.equal(task.priority, "High");
  assert.equal(task.due, "2026-10-20");
});

test("formatDueDate returns an empty string when no date is provided", () => {
  assert.equal(formatDueDate(""), "");
});

test("formatDueDate formats a valid date", () => {
  assert.match(formatDueDate("2026-10-20"), /20/);
});
