
// deposit*******
document.getElementById('btn_deposit').addEventListener('click', function(){
    // console.log('deposit button clicked');

    const depositField = document.getElementById('deposit_field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement =document.getElementById('deposit_total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance_total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = ''; 
})

// withdraw

// 1
document.getElementById('btn_withdraw').addEventListener('click', function(){
    // console.log('adda');
// 2
    const withdrawField = document.getElementById('withdraw_field');
    const  newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
// 3
    const withdrawTotalElement = document.getElementById('withdraw_total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

// 5
    const balanceTotalElement = document.getElementById('balance_total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// 7
    withdrawField.value= '';

    // ****
    if(newWithdrawAmount > previousBalanceTotal){
        alert('Cross Your Limit');
        return;
    }

// 4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;



// 6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})





