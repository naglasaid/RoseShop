////////////////////////////////////////// Variable Declarations/////////////////////////////////////////////
let username= document.querySelector("#username")
let password= document.querySelector("#password")
let loginBtn = document.querySelector("#sign_in") 
////////////////////////////////////////// Variable Declarations/////////////////////////////////////////////



/////////////////////////////////////////////GET DATA//////////////////////////////////////////////////////
let getUsername= localStorage.getItem("username")
let getPassword= localStorage.getItem("password")


loginBtn.addEventListener("click",function(z){
    z.preventDefault()
    if(username.value==="" || password.value === ""){
        alert("Please Enter Your Credentials")
    } 
    else{
        if((getUsername && getUsername.trim() === username.value && getPassword && getPassword.trim() === password.value))
        {
            setTimeout (()=> {
                window.location ="index.html"
            },1500)
        
        }
    else{
        alert("Please Enter Your Valid Credentials ")
    }
}
})

/////////////////////////////////////////////GET DATA//////////////////////////////////////////////////////


