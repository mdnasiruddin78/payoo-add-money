
// step-01 add event handler to the add money button inside the from
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('money add button clicked')

    // step-02 get money to be added to the acount
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput)

});