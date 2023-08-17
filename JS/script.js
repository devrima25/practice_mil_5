document.getElementById('Submit').addEventListener('click', function(){
    // console.log('submist button clicked');
    const emailField = document.getElementById('user_email');
    const email = emailField.value;
    // console.log(email);

    const passwordField = document.getElementById('user_password');
    const password = passwordField.value;
    console.log(email,password);

    if(email === 'nahida@rima.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid user');
    }

})