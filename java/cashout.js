// step-01
document.getElementById('btn-cash-out').addEventListener('click',function(main){

    main.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value
    const cashOutPin = document.getElementById('input-cashoutpin-number').value

    if(cashOutPin === '1234'){

        const balance = document.getElementById('account-balance').innerText
        const cashOutAmount = parseFloat(cashOut)
        const balanceNumber = parseFloat(balance)
        const updateNumber = balanceNumber - cashOutAmount

        document.getElementById('account-balance').innerText = updateNumber
    }
    else{
        alert('try next time')
    }


});
