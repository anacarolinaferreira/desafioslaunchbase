const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

//quando eu chamar a funcao passar esse objeto
createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });
createTransaction({ type: "debit", value: 40 });
//Adicionando as transações
function createTransaction(transaction) {

    user.transactions.push(transaction)

    //Quanto uma transação for do tipo credit ela deve também somar o valor do crédito no saldo (balance) do usuário.
    if (transaction.type == 'credit') {
        user.balance += transaction.value

        //Se for uma transação do tipo debit ela deve subtrair o valor do débito no saldo (balance) do usuário.
    } else if (transaction.type == 'debit') {
        user.balance -= transaction.value
    }
}
console.log(`Seu saldo é de ${user.balance}`);


console.log(getHigherTransactionByType("credit")) 
console.log(getHigherTransactionByType("debit")) 

function getHigherTransactionByType(trans) {
 let bigTransaction
 let bigValue = 0

 for(let transaction of user.transactions){
    if(transaction.type === trans && transaction.value > bigValue){
        bigValue = transaction.value
        bigTransaction = transaction
    }
 }
 return bigTransaction
}


console.log(getAverageTransactionValue())

function getAverageTransactionValue(){
    //criar uma variavel para armazenar a soma
    let sum = 0
    //vou varrer o array  e dentro do for irei somar os valores da transacao
    for(let sumValues of user.transactions){
        sum = sum + sumValues.value
    }
    //retornar a soma dividida pelo tamanho das transacoes
    return `A média das transações é ${sum / user.transactions.length}`
}


console.log(getTransactionsCount())

function getTransactionsCount(){
    let countTransC = 0
    let countTransD =0
    for(let count of user.transactions){
        if(count.type === 'credit'){
            countTransC++
        }else{
            countTransD++
        }
    }
    return `A quantidade de transações é: credit ${countTransC} ; debit ${countTransD}`
}
