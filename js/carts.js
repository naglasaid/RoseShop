


let ProductsInCart= localStorage.getItem("productsInCart")
let allproducts= document.querySelector(".products") 


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