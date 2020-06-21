const user = {
  name: "Carlos",
  age: 32,
  techs: [
    {
      name: "C++",
      specialty: "Desktop",
    },
    {
      name: "JavaScript",
      specialty: "Web/Mobile",
    },
  ],
};

function userTechs(techs) {
  let totalTechs = techs.length;
  let message = "";

  for (let i = 0; i < totalTechs; i++) {
    message += `${techs[i].name} with specialty ${techs[i].specialty}`;

    i < totalTechs - 1 ? (message += ` and `) : (message += `.`);
  }

  return message;
}

console.log(
  `The user ${user.name} is ${user.age} years old and use the thec: ${userTechs(user.techs)}`
);
