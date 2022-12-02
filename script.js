let cartIcon = document.querySelector('#lg-cart')
let cart = document.querySelector('#cart-check')
let closeCart = document.querySelector('#close-cart')


cartIcon.onclick = () =>{
    cart.classList.add('active');
};

closeCart.onclick = () =>{
    cart.classList.remove('active');
};

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}


function ready(){

    var removeCartItemButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartItemButtons);
    for (var i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i];
        button.addEventListener('click', function(event){
            var buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.remove();
            updateTotal();
        })
    }
    // Quantity Changes
    
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged);
    }
    //Add to Cart
    var addCart = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i]
        button.addEventListener("click", addCartClicked);
    }
}
//Quantity changes
function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateTotal();
}
//Add TO cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}
function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert('You have already add this item to cart');
            return;
        }
    }
    var cartBoxContent = `
    <img class="cart-img" src="./img/products/f1.jpg" alt="">
    <div class="detail-box">
    <div class="cart-product-title">T-shirt</div>
    <div class="cart-price">$68</div>
    <input type="number" value="1" class="cart-quantity">
    </div>
    <i class="fa-solid fa-xmark cart-remove"></i>`;
    
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);                     
}
    
    
    

// UPDATE TOTAL

function updateTotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""))
        var quantity = quantityElement.value;
        total= total + (price * quantity);
        //If price contain some cents value
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
    }
}


// Menu

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


var MainImg = document.getElementById("MainImg")
var smallimg = document.getElementsByClassName("small-img")

smallimg[0].onclick = function (){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function (){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function (){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function (){
    MainImg.src = smallimg[3].src;
}

