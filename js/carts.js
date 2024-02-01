


let ProductsInCart= localStorage.getItem("productsInCart")
let productsInFav = localStorage.getItem("productsInFav")
let allproducts= document.querySelector(".products") 
// let favproductDiv =document.querySelector(".fav_products")
let favproducts = document.querySelector(".fav_products")

// let addedItems =localStorage.getItem("productsInCart")? JSON.parse(localStorage.getItem("productsInCart")) :[];
// addedItems =[...addedItems,choosenItem]
//  localStorage.setItem("productsInCart",JSON.stringify(addedItems))



if (ProductsInCart){
   let item = JSON.parse(ProductsInCart);
  
    drawCartProducts(item);
    
}

function drawCartProducts(products){
   
        let d= products.map((item)=> {
          
        return `
    
           <div class="col-lg-3 col-md-6 p-3 product-item shadow">
              
              <img src="${item.imageUrl}" class="img-fluid mt-2">
              <div class="item_desc" style="color:black">
                <h5 class="product-title mt-1" style="color: #e1306c;">${item.title}</h5>
                <h5 class="" style="color: #e1306c; display: inline-block;">category :</h5> <h5 style="display: inline-block";>${item.category}</h5><br>
                 <h5 style="display: inline-block; margin-right:5px">Qty:</h5>
                <input class="product-quantity" type="number" value="1" min="0" style="width:60px;display: inline-block;padding-left:3px"><br>
                <span style="color:#ef3766;font-weight:bold">EGP </span> <h5 class="product-price fw-bold my-2" style="display: inline-block">${item.price}</h5></p>
                <button class="btn rounded-pill btn-sm my-2 remove_from_cart" style="background-color:#ef3766;">Remove From Cart</button>
                
              </div>
            </div>

    
    `
        })
        // calling Div
        allproducts.innerHTML=d;
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
    updateTotal()
    drawCart()
  }
  getButtons()
  //////////////////////////////////////////////////////////////


function getminusplusButtons(){
  
  var inputQ= document.getElementsByClassName("product-quantity") 
  // var priceElement1= cartitem.getElementsByClassName("product-price")
  for (var i = 0 ; i < inputQ.length; i++)
  {
    
    var inputs = inputQ[i]
    inputs.addEventListener("change",updateTotal)
    
  }
}
  


  ////////////////////////////////////////////////////////////
  function updateTotal(){
    // var cartContent=document.getElementsByClassName("products")[0]
    var cartItems=document.getElementsByClassName("product-item")  
    
    var total=0
    
    for (var i = 0 ; i < cartItems.length; i++)
    {
      
      var cartitem= cartItems[i]
    
      var priceElement= cartitem.getElementsByClassName("product-price")[0]
      
      
    var quantityElement= cartitem.getElementsByClassName("product-quantity")[0]
    var price= priceElement.innerText
  //  console.log(price)
    // var price= parseFloat(priceElement.innerText.replace("EGP",""))
    var quantity = quantityElement.value;
    // priceElement.innerText = price*quantity
    total = total + (price*quantity)
    document.getElementsByClassName('sub-amount')[0].innerText= 'EGP ' + total
    document.getElementsByClassName('total-amount')[0].innerText= 'EGP ' + total
    }
  }
  getminusplusButtons()
  updateTotal()
 


  ////////////////////////Get Fav/////////////////////////////

  if (productsInFav){
    
    let itemfav = JSON.parse(productsInFav);
    console.log(itemfav)
    drawFavProducts(itemfav);
 }

 function drawFavProducts(favProd){
   
  let z = favProd.map((itemv)=> {
    
  return `

     <div class="col-lg-3 col-md-6 p-3 product-item">
        
        <img src="${itemv.imageUrl}" class="img-fluid mt-2">
        <div class="item_desc" style="color:black">
          <h5 class="product-title my-2" style="color: #e1306c;">${itemv.title}</h5>
          <h5 class="" style="color: #e1306c; display: inline-block;">category :</h5> <h5 class="my-2" style="display: inline-block";>${itemv.category}</h5><br>
          <span style="color:#ef3766;font-weight:bold">EGP </span> <h5 class="product-price fw-bold my-2" style="display: inline-block">${itemv.price}</h5></p>
          
          
        </div>
      </div>


`
  })
  // calling Div
  favproducts.innerHTML=z;
}




//////////////////////////////////////////////////////////////////////////////////////////////////////
let shoppingCartIcon= document.querySelector(".shopping-cart") 
let cartsproducts= document.querySelector(".carts_products")
let cartproductDiv =document.querySelector(".carts_products div")
let badge = document.querySelector(".badge")


shoppingCartIcon.addEventListener("mouseenter",opencart)

function opencart(){
   
    cartsproducts.style.display = "block"
   
   
    
}


        function drawCart(){
          
          var remaineditems=document.getElementsByClassName("product-item") 
          
          
          cartproductDiv.innerHTML =""
          
          for (var i = 0 ; i < remaineditems.length; i++){
            var cartitem= remaineditems[i]
            
            var imgElement= cartitem.getElementsByTagName("img")[0]
            var img = imgElement.getAttribute("src")
            var titleElement= cartitem.getElementsByClassName("product-title")[0]
            var title = titleElement.innerText
            var priceElement= cartitem.getElementsByClassName("product-price")[0]
            var price = priceElement.innerText
            console.log(price)
          
           
            cartproductDiv.innerHTML += `<p class="cart-item" style="color:black"><img style="width:80px;height:80px;border:1px solid #ddd" src="${img}">${title}
            <span class="cart-price">1*<span style="color:#ef3766;font-weight:bold">
                 ${price}</span></span><hr style="color:black"></hr></p>`
            
            
          }

          badge.style.display="block";
          badge.innerHTML= remaineditems.length;

        }
        drawCart()




         
         
      