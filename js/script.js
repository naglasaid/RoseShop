// localStorage.setItem("username","zeya")
// localStorage.setItem("pass","125")
// localStorage.getItem("username")
// // console.log(localStorage.getItem("user name"))
// localStorage.removeItem("username")
// localStorage.clear()


let userinfo = document.querySelector("#user_info")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")
if (localStorage.getItem("username")){
    links.remove()
    userinfo.style.display="block"
    userData.style.color= "#ef3766"
    userData.style.textDecoration="none"
    
    userData.innerHTML=localStorage.getItem("username")
}