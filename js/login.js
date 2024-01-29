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
        if((getUsername === username.value && username.value.trim() && getPassword === password.value && password.value.trim()))
        {
            setTimeout (()=> {
                window.location ="products.html"
            },1500)
        
        }
    else{
        alert("One of Your Credentials is Incorrect")
    }
}
})

/////////////////////////////////////////////GET DATA//////////////////////////////////////////////////////


