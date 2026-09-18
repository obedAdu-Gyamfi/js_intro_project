const student = {
  name: "Your Name",
  programme: "Your Programme",
  level: 1,
  country: "Your Country"
};

function formatProfile(profile) {
  return [
    `Name: ${profile.name}`,
    `Programme: ${profile.programme}`,
    `Level: ${profile.level}`,
    `Country: ${profile.country}`
  ].join("\n");
}

console.log(formatProfile(student));
