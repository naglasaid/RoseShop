


let ProductsInCart= localStorage.getItem("productsInCart")
let productsInFav = localStorage.getItem("productsInFav")

let allproducts= document.querySelector(".products") 
// let favproductDiv =document.querySelector(".fav_products")
let favproducts = document.querySelector(".fav_products")
let item = JSON.parse(ProductsInCart);

if (ProductsInCart){

  
   
   
  
    let item = JSON.parse(ProductsInCart)
    
      drawCartProducts(item);
      
  }
  

  // let nn= JSON.parse(localStorage.getItem("naglaa"))
  // drawCartProducts(nn);

  


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
                <button class="btn rounded-pill btn-sm my-2 remove_from_cart" onclick="removeItems(${item.id})"   style="background-color:#ef3766;">Remove From Cart</button>
                
              </div>
              
            </div>

            
    `
        })
        // calling Div
        allproducts.innerHTML=d;
    }

    
    
    
   
  // onclick="removeItems(${item.id})"

     
   


  
function getButtons(){
  var removecartButtons= document.getElementsByClassName("remove_from_cart")
  for (var i = 0 ; i < removecartButtons.length; i++){
var button = removecartButtons[i]
// console.log(button)
// button.addEventListener("click",RemoveFromCart)
  }
}

///////////////////////////////////RemoveFromCart//////////////////////////////////////////
  function RemoveFromCart(event){
    
    var buttonclicked = event.target;
     let grandelement = buttonclicked.parentElement.parentElement
     grandelement.remove();
     console.log(id)


    updateTotal()
    drawCart()
    
  }
  // getButtons()
  //////////////////////////////////////////////////////////////


  function removeItems(id){
    
      // let item = JSON.parse(ProductsInCart);
    var index= item.findIndex((x)=>{
     return x.id==id
    
  })
  
  item.splice(index,1)
  
   
  localStorage.setItem("productsInCart",JSON.stringify(item))
  
  drawCartProducts(item)
  
  updateTotal()
    drawCart()

}




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
    localStorage.setItem("total",total)
    }
  }
  getminusplusButtons()
  updateTotal()
 


  ////////////////////////Get Fav/////////////////////////////
  let itemfav
  if (productsInFav){
    
     itemfav = JSON.parse(productsInFav);
    
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
          <i class="fas fa-heart fs-4 fav me-auto" style="color: red;" onclick="RemoveFromFav(${itemv.id})"></i>
          </div>
        
      </div>


`
  })
  // calling Div
  favproducts.innerHTML=z;
}

function RemoveFromFav(id){
  let index =itemfav.findIndex((x)=>{
    return  x.id==id
  })

  itemfav.splice(index,1)
  localStorage.setItem('productsInFav',JSON.stringify(itemfav))
  console.log(itemfav)

  // addEventListener('click',(e)=> e.preventDefault())
  // location.reload()
  drawFavProducts(itemfav)
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
            
            
          
           
            cartproductDiv.innerHTML += `<p class="cart-item" style="color:black"><img style="width:80px;height:80px;border:1px solid #ddd" src="${img}">${title}
            <span class="cart-price">1*<span style="color:#ef3766;font-weight:bold">
                 ${price}</span></span><hr style="color:black"></hr></p>`
            
            
          }

          badge.style.display="block";
          badge.innerHTML= remaineditems.length;
          
          // localStorage.setItem("productsInCart",JSON.stringify(zz))
          // console.log(localStorage.getItem("productsInCart"))
         
         
         }
        // drawCart()




         
         
    