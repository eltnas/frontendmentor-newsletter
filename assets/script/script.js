const bntSignup = document.querySelector("#btn-signup");
const bntDismiss = document.querySelector("#btn-dismiss");
const email = document.querySelector("#usremail");
const signup = document.querySelector("#signup");
const sucess = document.querySelector("#sucess");
const cadEmail = document.querySelector("#sucess-email");

bntSignup.addEventListener("click", () =>{
    let usrEmail = email.value;
    if (!usrEmail){
        alert("Digite um email!");
    }
    else{
        signup.style.display = "none";
        sucess.style.display = "block";
        cadEmail.innerHTML = usrEmail;
    }
})

bntDismiss.addEventListener("click", ()=>{
    signup.style.display = "flex";
    sucess.style.display = "none";
    email.value = '';
    cadEmail.innerHTML = '';
})