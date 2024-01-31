

////////////////////////////////////////////////////////////////////////////////
// //////////////////Draw Products start/////////////////////////////////
let allproducts= document.querySelector(".products") 


let products = [
    {
        id:1,
        title:"Red Rose1",
        category:"Flowers",
        price:1550,
        imageUrl:"images/Rose/rose1.jpg"
    },
    {
        id:2,
        title:"Red Rose2",
        category:"Flowers",
        price:1750,
        imageUrl:"images/Rose/rose42.jpg"
    },
    {
        id:3,
        title:"Red Rose3",
        category:"Flowers",
        price:1000,
        imageUrl:"images/Rose/rose3.jpg"
    },
    {
        id:4,
        title:"Red Rose4",
        category:"Flowers",
        price:  1250,
        imageUrl:"images/Rose/rose2.jpg"
    },
    {
        id:5,
        title:"Red Rose5",
        category:"Flowers",
        price: 2000,
        imageUrl:"images/Rose/rose12.jpg"
    },
    {
        id:6,
        title:"Balloon1",
        category:"Balloons",
        price: 250,
        imageUrl:"images/Rose/balloon5.jpg"
    },
    {
        id:7,
        title:"White Rose6",
        category:"Flowers",
        price:1200,
        imageUrl:"images/Rose/rose45.jpg"
    },
    {
        id:8,
        title:"Pink Rose7",
        category:"Flowers",
        price:250,
        imageUrl:"images/Rose/rose44.jpg"
    },
    {
        id:9,
        title:"Red Rose8",
        category:"Flowers",
        price:1750,
        imageUrl:"images/Rose/rose43.jpg"
    },
    {
        id:10,
        title:"Balloon2",
        category:"Balloons",
        price: 150,
        imageUrl:"images/Rose/balloon2.jpg"
    },
    {
        id:11,
        title:"Red Rose9",
        category:"Flowers",
        price:1400,
        imageUrl:"images/Rose/rose46.jpg"
    },
    {
        id:12,
        title:"Red Rose10",
        category:"Flowers",
        price: 1250,
        imageUrl:"images/Rose/rose6.jpg"
    }
]

function drawProducts(){
    let d= products.map((item)=>{
return `

<div class="col-lg-3 col-md-6 p-3  product-item shadow">
          
          <img src="${item.imageUrl}" class="img-fluid mt-2">
          <div class="item_desc">
            <h4 class="product-title mt-1" style="color: #e1306c;">${item.title}</h4>
            <h5 class="product-price" style="color: #e1306c; display: inline-block;">category :</h5> <h6 style="display: inline-block;color:black" class="fs-5">${item.category}</h6>
            <p style="color:black">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <span style="color:#ef3766;font-weight:bold">EGP </span><h5 class="product-price fw-bold my-2" style="display: inline-block;color:black">${item.price}</h5><br>
            
            <button class="btn rounded-pill btn-sm my-2 add_to_cart" onclick="AddToCart(${item.id})">Add To Cart</button>
          </div>
          
          <div class="card-img-overlay">
            <i class="fas fa-heart fs-4 fav" onclick="AddToFav(${item.id})"></i>
           
          </div> 
        </div>

`
    })
    // calling Div
    allproducts.innerHTML=d;
}

// calling drawing function

drawProducts()

// ////////////////// Draw Products end/////////////////////////////////

///////////////////// Button Add To Cart start/////////////////////////////
let badge = document.querySelector(".badge")
let btnAddToCart= document.querySelectorAll(".add_to_cart")
 //     btnAddToCart.textContent="Remove from Cart"
        //    btnAddToCart.style.backgroundColor="#ef3766";       
    
        let cartproductDiv =document.querySelector(".carts_products div")
        let shoppingCartIcon= document.querySelector(".shopping-cart") 
        let cartsproducts= document.querySelector(".carts_products")
        let mycarttotal= document.querySelector(".mycarttotal")
        let carttotal = 0
    // let addedItems =[]


 let addedItems =localStorage.getItem("productsInCart")? JSON.parse(localStorage.getItem("productsInCart")) :[];
let addedItemsv = localStorage.getItem("productsInFav")? JSON.parse(localStorage.getItem("productsInFav")):[];
if(addedItems) {
    addedItems.map(item =>{
        cartproductDiv.innerHTML += `<p class="cart-item" style="color:black"><img style="width:80px;height:80px;border:1px solid #ddd" src="${item.imageUrl}">${item.title}
        <span class="cart-price">1*<span style="color:#ef3766;font-weight:bold">
             ${item.price}</span></span><span><i class="fas fa-trash remove_from_cart" style="color:#c19d5f"></i></span><hr></hr></p>`
             ///////////////Add Total//////////////////////////////////////////
            carttotal  += +(`${item.price}`)
            mycarttotal.innerHTML = `<span style="color: #ef3766;">EGP  </span>` + +(carttotal)
///////////////Add Total////////////////////////////////////////

    })
            badge.style.display="block";
            badge.innerHTML= addedItems.length;

}



 if (localStorage.getItem("username"))
    {
        
        function AddToCart(id){
   
            let choosenItem=products.find((item)=> item.id === id)
            
            cartproductDiv.innerHTML += `<p class="cart-item" style="color:black">
            <img style="width:80px;height:80px;border:1px solid #ddd" src="${choosenItem.imageUrl}">${choosenItem.title}
            <span class="cart-price">1*<span style="color:#ef3766;font-weight:bold">
             ${choosenItem.price}</span></span><span><i class="fas fa-trash remove_from_cart" style="color:#c19d5f"></i></span><hr></hr></p>`
             
        
///////////////Add Total//////////////////////////////////////////
          carttotal  += +(`${choosenItem.price}`)
          console.log(carttotal)
          mycarttotal.innerHTML = `<span style="color: #ef3766;">EGP  </span>` + +(carttotal)
///////////////Add Total////////////////////////////////////////
           ////// Transfer added items//////////////////
           addedItems =[...addedItems,choosenItem]
           localStorage.setItem("productsInCart",JSON.stringify(addedItems))
          ////// Transfer added items//////////////////




            ///////////////Add Counter///////
            let cartproductslength= document.querySelectorAll(".carts_products div .cart-item")
            
            badge.innerHTML =cartproductslength.length
            badge.style.display="block";

            ///////////////Add Counter///////



///////////////Add Total///////
            } // function Add to Cart




            function AddToFav(id){
   
                let choosenItemfav=products.find((item)=> item.id === id)
                
                
                 
            
    
               ////// Transfer fav items//////////////////

               addedItemsv =[...addedItemsv,choosenItemfav]
            //    addedItems =[...addedItems,choosenItemfav]

               localStorage.setItem("productsInFav",JSON.stringify(addedItemsv))
            //    
              ////// Transfer fav items//////////////////
    
    
    
    
               
                } // function Add to Fav  
            
    }
    else
    {
        window.location="login.html"
    }



////////////////////////Button Add To Cart end////////////


shoppingCartIcon.addEventListener("mouseenter",opencart)

function opencart(){
    // if (cartproductDiv.innerHTML == "") {
    //     cartproductDiv.innerHTML = "YOUR CART IS EMPTY"

    // }
    // else {
        
    // }
    cartsproducts.style.display = "block"
   
   
    
}

function getButtons(){
    var removecartButtons= document.getElementsByClassName("remove_from_cart")
    for (var i = 0 ; i < removecartButtons.length; i++){
  var button = removecartButtons[i]
  button.addEventListener("click",RemoveFromCart)
    }
  }
  
  ///////////////////////////////////RemoveFromCart//////////////////////////////////////////
    function RemoveFromCart(event){
          var buttonclicked = event.target;
      let grandelement = buttonclicked.parentElement.parentElement
      grandelement.remove();
    //   updateTotal()
      
    }
    getButtons()
    //////////////////////////////////////////////////////////////




    ////////////////////////// search start///////////////////////////////////////////////
let dropdownBtn = document.getElementById("drop-text")
let list = document.getElementById("list")
let icon = document.getElementById("icon")
let span = document.getElementById("span")
let input = document.getElementById("search-input")
let listItems = document.querySelectorAll(".dropdown-list-item")


//show dropdown list on click on dropdown btn

dropdownBtn.onclick = function(){
    // rotate arrow icon
    if(list.classList.contains('show')){
        icon.style.rotate= "0deg"
    }else{
        icon.style.rotate= "-180deg"
    }
    list.classList.toggle("show");
    
   
};

//
// hide dropdown list when clicked outside dropdown btn
window.onclick=function(e){
if(
    e.target.id !== "drop-text" &&
    e.target.id !== "span" &&
    e.target.id !== "icon"

 ){
    list.classList.remove("show");
    icon.style.rotate= "0deg"
 }
}


for(item of listItems ){

    item.onclick= function(e){

//change dropdown btn text on click on selected list item
     span.innerText = e.target.innerText
     // change input placeholder text on selected list item
if (e.target.innerText == "Everything")
{
input.placeholder = "Search Anything..."
}else{
    input.placeholder= "Search " + e.target.innerText + "..."
}

    }

}



///// search by word in input

// // input.addEventListener("input",(e)=>{
// // const value= e.target.value.lowerCase()
// // console.log(value)
// })

const search = () =>{
   const searchinput =  document.getElementById("search-input").value.toUpperCase()
//    const storeitems = document.querySelector(".products")
const product = document.querySelectorAll(".product-item")
const pname = allproducts.getElementsByTagName("h4")



for (var i= 0 ; i < pname.length; i++){
let match
if (span.innerText == "By Name" ){
     match = product[i].getElementsByTagName("h4")[0] 
}else if(span.innerText == "By Category" ) {
    match = product[i].getElementsByTagName("h6")[0]
}

// let match = product[i].getElementsByTagName("h4")[0]
   
if(match){
 
    let textvalue = match.textContent || match.innerHTML
    
      if (textvalue.toUpperCase().indexOf(searchinput) > -1 ){
        product[i].style.display="";

      }else {
        product[i].style.display="none";
      }

}

}

}  //function





    ////////////////////////// search end///////////////////////////////////////////////


    ////////////////////////////ADD To FAV strat////////////////////////////////////////////////////


    ////////////////////////////ADD To FAV end////////////////////////////////////////////////////



