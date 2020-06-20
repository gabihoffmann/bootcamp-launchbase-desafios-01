const { func } = require("prop-types");

const users = [
  {
    name: "Salvio",
    income: [115.3, 48.7, 98.3, 14.5],
    outlay: [85.3, 13.5, 19.9],
  },
  {
    name: "Marcio",
    income: [24.6, 214.3, 45.3],
    outlay: [185.3, 12.1, 120.0],
  },
  {
    name: "Lucia",
    income: [9.8, 120.3, 340.2, 45.3],
    outlay: [450.2, 29.9],
  },
];

function calculateBalance(income, outlay) {
  let totalIncome = calculateSum(income);
  let totalOutlay = calculateSum(outlay);

  return totalIncome - totalOutlay;
}

function calculateSum(numbers) {
  return numbers.reduce((acc, currentValue) => acc + currentValue);
}

users.forEach((user) => {
  let balance = calculateBalance(user.income, user.outlay);
  let resultSign = balance > 0 ? "POSITIVE" : "NEGATIVE";
  console.log(
    `${user.name} has a ${resultSign} balance of ${balance.toFixed(2)}`
  );
});
