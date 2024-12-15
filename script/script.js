let balance = 1000.00;
let transactionHistory = [];

function updateBalance() {
    document.getElementById('balance-amount').innerText = balance.toFixed(2);
}

function depositFun() {
    let depositValue = parseFloat(document.getElementById('input-value').value);
    if (isNaN(depositValue) || depositValue <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    balance += depositValue;

    // Store the deposit type and amount in the transaction history
    let transaction = { type: 'deposit', amount: depositValue };
    transactionHistory.push(transaction);

    updateBalance();
    updateTransactionHistory();
}

function withdrawFun() {
    let withdrawValue = parseFloat(document.getElementById('input-value').value);
    if (isNaN(withdrawValue) || withdrawValue <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    if (withdrawValue > balance) {
        alert("Insufficient balance.");
        return;
    }
    balance -= withdrawValue;

    // Store the withdrawal type and amount in the transaction history
    let transaction = { type: 'withdraw', amount: withdrawValue };
    transactionHistory.push(transaction);

    updateBalance();
    updateTransactionHistory();
}

function updateTransactionHistory() {
    let transactionHistoryElement = document.getElementById('transaction-history');
    transactionHistoryElement.innerHTML = '';

    // Display transactions in reverse order
    transactionHistory.reverse().forEach((transaction, index) => {
        let transactionItem = document.createElement('p');
        
        // Apply different styles based on the transaction type
        if (transaction.type === 'deposit') {
            transactionItem.classList.add('transaction-item', 'deposit');
            transactionItem.innerText = `Deposited: $${transaction.amount.toFixed(2)}`;
        } else if (transaction.type === 'withdraw') {
            transactionItem.classList.add('transaction-item', 'withdraw');
            transactionItem.innerText = `Withdrew: $${transaction.amount.toFixed(2)}`;
        }
        
        transactionHistoryElement.appendChild(transactionItem);
    });
}
