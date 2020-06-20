const users = [
  {
    name: "Carlos",
    techs: ["HTML", "CSS"],
  },
  {
    name: "Jasmine",
    techs: ["JavaScript", "CSS"],
  },
  {
    name: "Tuane",
    techs: ["HTML", "Node.js"],
  },
];

users.forEach((user, index) => {
  const didWork = userWorkWithCSS(user);

  if (didWork) console.log(`The user ${user.name} work with CSS.`);
});

function userWorkWithCSS(user) {
  let didWork = false;

  for (let tech of user.techs) {
    if (tech === "CSS") return !didWork;
  }
  return didWork;
}
