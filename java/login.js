// step-01 set event handler
document.getElementById('button-login').addEventListener('click',function(event){
    // step-02 prvent default behavior
    event.preventDefault();
    console.log('login-button click')

    // step-03 get the phone number
    const phoneNumber = document.getElementById('phone-number').value
    console.log(phoneNumber)

})

// from submit reloding the page