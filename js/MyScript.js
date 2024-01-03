// var x =prompt("Enter Your Age:")
// document.getElementById("div1").innerHTML=x




// confirm("sdkskjdksjfks")
//document.write("hello")
// document.getElementById("div1").inner
// document.getElementsByClassName("div1style").item(1).innerHTML="kfsjkdsjfkljdkf"
// var showpricebtn= document.getElementById("show-price")
// var div1=document.getElementById("div1")




// ////////////////////////////////////variables Declartions////////////////////////////////////

var div1= document.querySelector("#div1")
var showpricebtn = document.querySelector("#show-price")
var allproducts = document.querySelectorAll(".products span")
var totprice = document.querySelector("#totpricediv")
var totpriceh3 = document.querySelector("#finalprice")
var noofitemsh5 = document.querySelector("#noofitemsh5")
var totalPrice=0
var noofitems=0
var itemtitle=""

//////////////////////////////////////////////////////////////////////////////////////////////////////
allproducts.forEach(function(item){
    item.onclick=function(){
        totalPrice += +(item.getAttribute("price"))
        itemtitle = item.getAttribute("title")
        div1.innerHTML+= "<i class='fas fa-caret-right fs-5'></i>" +" " + itemtitle + "<br>" 
        // div1.innerHTML += "* " + item.textContent + "<br>"
        noofitems++
        noofitemsh5.innerHTML= noofitems
        if (div1.innerHTML !== ""){
            showpricebtn.style.display="block"
        }
       
    }
})





showpricebtn.onclick=function(){
    
    
    totpriceh3.innerHTML= " <sup> <small><b> EGP <b> </small> </sup> " + totalPrice  
   
    totprice.style.display="block"


}  

    



// console.log(item)