
let submit = document.querySelector("#submitbtn");
let checkBal = document.querySelector("#balance");
let withdraw = document.querySelector("#withdraw");
let deposit = document.querySelector("#deposit");
let logout = document.querySelector("#logout");
let result = document.querySelector(".result");
let balamt = document.querySelector(".balamt");
// Submit Button


submit.addEventListener('click', ()=>{
    let pin = document.querySelector("#pin").value;
    //console.log(pin);
    
    if(pin === '1234'){
        localStorage.setItem("key", pin);
        result.innerHTML = "Login Successful.";
        localStorage.setItem('balance','1000')
    }
    else{
        result.innerHTML = "Invalid Pin, Please Try Again.";
    }
});
let user = localStorage.getItem("key");
console.log(user);

if(localStorage.getItem('balance') === null){
    localStorage.setItem('balance', '1000');
}

// CheckBalance Button
checkBal.addEventListener('click',()=>{
    if (!user || user !== '1234' ) {
        result.innerHTML = "Please Login First.";
        return;
    }
    
    if(Number(user) === 1234){
        result.innerHTML = `Your Balance is $${parseInt(localStorage.getItem('balance'))}` ;
    }
    
})
// Deposit Button
deposit.addEventListener('click',()=>{
    if (!user || user !== '1234') {
        result.innerHTML = "Please Login First.";
        return;
    }
        let amount = prompt("Enter the amount to deposit");
        if(amount > 0){
            let depamt = parseInt(amount);
            let newBal = depamt + parseInt(localStorage.getItem('balance'));
            localStorage.setItem('balance', newBal);
            result.innerHTML = `Depositted $${depamt}. Your new balane is $${newBal}`;
        }
        else{
            result.innerHTML = "Invalid amount "
        }

})
// Withdraw Button
withdraw.addEventListener('click',()=>{
    if (!user || user !== '1234') {
        result.innerHTML = "Please Login First.";
        return;
    }
    let amount = prompt("Enter the amount to withdraw");
    let currentBal = parseInt(localStorage.getItem("balance"));
    if(amount > 0){
        let withdrawamt = parseInt(amount);
        let newBal = currentBal - withdrawamt  ;
        localStorage.setItem('balance', newBal);
        result.innerHTML = `Withdrawn $${withdrawamt}. Your new balane is $${newBal}`;
    }
    else{
        result.innerHTML = "Invalid amount or Insufficient balance. please try again "
    }
})
// Logout Button
logout.addEventListener('click',()=>{
    
    localStorage.clear();
    
    result.innerHTML = "Logged out successfully.";
    setTimeout(()=>{
        window.location.reload();
    },1000)
})