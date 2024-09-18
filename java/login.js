// step-01 set event handler
// document.getElementById('button-login').addEventListener('click',function(event){
//     // step-02 prvent default behavior
//     event.preventDefault();
//     console.log('login-button click')

//     // step-03 get the phone number
//     const phoneNumber = document.getElementById('phone-number').value
//     const pinNumber = document.getElementById('pin-number').value
//     console.log(phoneNumber,pinNumber)

//     // step-04 validate phone or pin
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('you are logged in');
//         // step-05 allow user to use the website
//     }
//     else{
//         alert('wrong phone number pin');
//     }
// })

// // from submit reloding the page


document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    
    // get phone number ane pin
    const phoneNumber = document.getElementById('phone-number').value
    const  pinNumber = document.getElementById('pin-number').value
    console.log(phoneNumber,pinNumber)

    // bad way to valided
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in')
        window.location.href = '/home.html';
    }
    else{
        alert('wrong phone number or pin')
    }
});