const user = {
  name: "Mariana",
  transactions: [],
  balance: 100,
};

function createTransaction(transaction) {
  if (transaction.type.toUpperCase() === "CREDIT") {
    user.balance += transaction.value;
    user.transactions.push(transaction);

    console.log("Success operation, new balance: $", user.balance);
  } else if (transaction.type.toUpperCase() === "DEBIT") {
    if (user.balance < transaction.value) {
      console.log(`Invalid Operation`);
      return;
    } else {
      user.balance -= transaction.value;
      user.transactions.push(transaction);
    }
    console.log("Success operation, new balance: $", user.balance);
  } else {
    console.log(`Invalid Operation`);
  }
}

function getHigherTransactionByType(transactionType) {
  let filteredOperation = user.transactions.filter(
    (transaction) => transaction.type === transactionType
  );

  let higherTransaction = filteredOperation.reduce(
    (acc, current) => {
      current.value > acc.value ? (acc = current) : acc;
      return acc;
    },
    { type: "", value: 0.0 }
  );

  console.log("Higher Transaction", higherTransaction);
  return higherTransaction;
}

function getAverageTransactionValue(user) {
  let transactions = user.transactions;
  let total = transactions.reduce((acc, current, idx) => {
    return acc + current.value;
  }, 0);
  let average = total / transactions.length;
  //console.log(average);
  return average;
}

function getTransactionsCount() {
  let counterCredit = { credit: 0, debit: 0 };

  for (transaction of user.transactions) {
    if (transaction.type === "credit") {
      counterCredit.credit++;
    } else if (transaction.type === "debit") {
      counterCredit.debit++;
    }
  }

  console.log(counterCredit);
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

getHigherTransactionByType("credit");
getHigherTransactionByType("debit");

console.log("Average transactions: ", getAverageTransactionValue(user));

getTransactionsCount();
