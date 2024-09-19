
// step-01 add event handler to the add money button inside the from
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('money add button clicked')

    // step-02 get money to be added to the acount
    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);

    // get the pin number
    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log(typeof pinNumberInput)

    // step-03 verify pin number
    if(pinNumberInput === '1234'){
        console.log('add money to your account');

        //step-04 get the current balance
        const balance = document.getElementById("account-balance").innerText;
        console.log(typeof balance);


        // step-05 sum
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // step-06 update update the balance in the ui/dom
        document.getElementById('account-balance').innerText = newBalance

    }
    else{
        alert('Failed to add money please try again later')
    }

});