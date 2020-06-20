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

function showUsers(users) {
  let totalUsers = users.length;

  for (let i = 0; i < totalUsers; i++) {
    let totalTechs = users[i].techs.length;
    let message = `${users[i].name} works with `;

    for (let j = 0; j < totalTechs; j++) {
      message += `${users[i].techs[j]}`;

      message += j < totalTechs - 1 ? ", " : ".";
    }

    console.log(message);
  }
}

showUsers(users);
