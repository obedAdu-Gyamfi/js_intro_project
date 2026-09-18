import test from "node:test";
import assert from "node:assert/strict";

function formatProfile(profile) {
  return [
    `Name: ${profile.name}`,
    `Programme: ${profile.programme}`,
    `Level: ${profile.level}`,
    `Country: ${profile.country}`
  ].join("\n");
}

test("formats a student profile", () => {
  const profile = {
    name: "Ada",
    programme: "Computer Science",
    level: 1,
    country: "Ghana"
  };

  assert.equal(
    formatProfile(profile),
    "Name: Ada\nProgramme: Computer Science\nLevel: 1\nCountry: Ghana"
  );
});
