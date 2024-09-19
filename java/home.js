// step-01
document.getElementById('btn-add-money').addEventListener('click',function(event){

    event.preventDefault();
    // step-02
    const addMoney = document.getElementById('input-add-money').value
    const pinNumber = document.getElementById('input-pin-number').value
    // step-03
    if(pinNumber === '1234'){
        // step-04
        const balance = document.getElementById('account-balance').innerText
        // step-05
        const addMoneyNumber = parseFloat(addMoney)
        const balanceNumber = parseFloat(balance)
        const updateNumber = addMoneyNumber + balanceNumber;

        // step-06
        document.getElementById('account-balance').innerText = updateNumber
    }
    else{
        alert('try next time')
    }

});