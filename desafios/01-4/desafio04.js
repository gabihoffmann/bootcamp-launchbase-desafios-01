const user  = {
    name: 'Mariana',
    transactions: [],
    balance: 0
};

/**
 * random transactions
 */
function createTransaction(){
    const transaction = ['credit', 'debit'];
    const value = (Math.random()*1000).toFixed(2)
    
    return {
        type: transaction[Math.floor(Math.random()*transaction.length)],
        value
    }

}

user.transactions.push(createTransaction());
user.transactions.push(createTransaction());
user.transactions.push(createTransaction());

/**
 * Reports
 */
function getHigherTransactionByType(transactions, type){
    let higher = 0, index = null;
    for(transaction in transactions){
        if(transactions[transaction].type === type){
            if(transactions[transaction].value > higher){
                higher = transactions[transaction].value
                index = transaction
            }
        }
    }

    if(higher != 0 || index ){
        
        console.log(`A maior operação do type ${type} foi no valor de ${transactions[index].value}`);
        return 
    }

    console.log(`Não há operações do type ${type}`) 
}

console.log(user)
getHigherTransactionByType(user.transactions, 'credit')
getHigherTransactionByType(user.transactions, 'debit')

function getAverageTransactionValue(transactions){
    const total = transactions.reduce((acc, current) => acc+Number(current.value), 0)
    
    console.log(`O valor médio das transações foi de ${(total/transactions.length).toFixed(2)}`)
}

getAverageTransactionValue(user.transactions)

function getTransactionsCount(transactions){
    const debits = transactions.reduce((acc, current) =>{
        if(current.type === 'debit') acc++
        return acc
    },0);

    const credits = transactions.reduce((acc, current) =>{
        if(current.type === 'credit') acc++
        return acc
    },0);

   console.log(`Foram realizados ${debits} operações de debito e ${credits} de credito`)
}

getTransactionsCount(user.transactions)