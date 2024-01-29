

////////////////////////////////////////////////////////////////////////////////
// //////////////////Draw Products start/////////////////////////////////
let allproducts= document.querySelector(".products") 


let products = [
    {
        id:1,
        title:"Rose",
        category:"flowers",
        price:1550,
        imageUrl:"images/Rose/rose1.jpg"
    },
    {
        id:2,
        title:"Rose",
        category:"flowers",
        price:1750,
        imageUrl:"images/Rose/rose42.jpg"
    },
    {
        id:3,
        title:"Rose",
        category:"flowers",
        price:1000,
        imageUrl:"images/Rose/rose3.jpg"
    },
    {
        id:4,
        title:"Rose",
        category:"flowers",
        price:  1250,
        imageUrl:"images/Rose/rose2.jpg"
    },
    {
        id:5,
        title:"Rose",
        category:"flowers",
        price: 2000,
        imageUrl:"images/Rose/rose12.jpg"
    },
    {
        id:6,
        title:"Balloon",
        category:"balloons",
        price: 250,
        imageUrl:"images/Rose/balloon5.jpg"
    },
    {
        id:7,
        title:"Rose",
        category:"flowers",
        price:1200,
        imageUrl:"images/Rose/rose45.jpg"
    },
    {
        id:8,
        title:"Rose",
        category:"flowers",
        price:250,
        imageUrl:"images/Rose/rose44.jpg"
    },
    {
        id:9,
        title:"Rose",
        category:"flowers",
        price:1750,
        imageUrl:"images/Rose/rose43.jpg"
    },
    {
        id:10,
        title:"Balloon",
        category:"balloons",
        price: 150,
        imageUrl:"images/Rose/balloon2.jpg"
    },
    {
        id:11,
        title:"Rose",
        category:"flowers",
        price:1400,
        imageUrl:"images/Rose/rose46.jpg"
    },
    {
        id:12,
        title:"Rose",
        category:"flowers",
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
            <h5 class="product-title mt-1" style="color: #e1306c;">${item.title}</h5>
            <h5 class="product-price" style="color: #e1306c; display: inline-block;">category :</h5> <h5 style="display: inline-block;">${item.category}</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <span style="color:#ef3766;font-weight:bold">EGP </span><h5 class="product-price fw-bold my-2" style="display: inline-block;">${item.price}</h5><br>
            
            <button class="btn rounded-pill btn-sm my-2 add_to_cart" onclick="AddToCart(${item.id})">Add To Cart</button>
          </div>
          
          <div class="card-img-overlay">
            <i class="far fa-heart fs-4 fav"></i>
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

if(addedItems) {
    addedItems.map(item =>{
        cartproductDiv.innerHTML += `<p class="cart-item" style="color:black"><img style="width:80px;height:80px;border:1px solid #ddd" src="${item.imageUrl}">${item.title}
        <span class="cart-price">1*<span style="color:#ef3766;font-weight:bold">
             ${item.price}</span></span><span><i class="fas fa-trash remove_from_cart" style="color:#c19d5f" ></i></span><hr></hr></p>`
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
             ${choosenItem.price}</span></span><span><i class="fas fa-trash remove_from_cart" style="color:#c19d5f"></i></span></p>
             
        <hr></hr>`
///////////////Add Total//////////////////////////////////////////
          carttotal  += +(`${choosenItem.price}`)
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

            }
            
    }
    else
    {
        window.location="login.html"
    }



////////////////////////Button Add To Cart end////////////


shoppingCartIcon.addEventListener("click",opencart)

function opencart(){
    // if (cartproductDiv.innerHTML == "") {
    //     cartproductDiv.innerHTML = "YOUR CART IS EMPTY"

    // }
    // else {
        
    // }
    cartsproducts.style.display = "block"
   
    // if (cartproductDiv.innerHTML != "") 
    // {
        

    //     if(cartsproducts.style.display == "block")
    //     {
    //         cartsproducts.style.display = "none" 
    //     }else{
    //         cartsproducts.style.display = "block"
    //     }
    // }
    
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