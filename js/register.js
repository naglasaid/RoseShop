
////////////////////////////////////////// Variable Declarations
let userame= document.querySelector("#username")
let email =document.querySelector("#email")
let password= document.querySelector("#password")
let registerBtn = document.querySelector("#sign_up")

registerBtn.addEventListener("click",function(z){
   z.preventDefault()
    if(userame.value === "" || password.value === "" || email.value === ""){
        alert("Please Enter Credentials")
        
    }
    else{
        localStorage.setItem("username",username.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        setTimeout (()=> {
            
            window.location ="login.html"
        },1500)
       
    }
})





