// Getting User Data
let userinfo = document.querySelector("#user_info")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")
if (localStorage.getItem("username")){
    links.remove()
    userinfo.style.display="flex"
    userData.style.color= "#ef3766"
    userData.style.textDecoration="none"
    userData.style.fontWeight="bold"
    userData.innerHTML=localStorage.getItem("username")
}


let logoutBtn = document.querySelector("#logout")
logoutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location= "login.html";
    },1500)
})

