document.addEventListener("DOMContentLoaded",()=>{

    const products=[
        {id:1, name:"Product 1", price:39.99},
        {id:2, name:"Product 2", price:19.99},
        {id:3, name:"Product 3", price:49.99},
        {id:4, name:"Product 4", price:9.99}
    ];
    const cart= JSON.parse( localStorage.getItem('cart')) || [];


const productList=document.getElementById("product-list");
const cartItemsDisplay=document.getElementById("cart-items");
const emptyCartMessage=document.getElementById("empty-cart");
const cartTotalMessage=document.getElementById("cart-total");
const totalPriceDisplay=document.getElementById("total-price");
const checkOutBtn=document.getElementById("checkout-btn");

products.forEach((product)=>{
    const productDiv=document.createElement('div');
    productDiv.classList.add("product");
    productDiv.innerHTML=`
    <span>${product.name} -$${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to Cart 🛒</button>
        `;
    productList.appendChild(productDiv);
  });

productList.addEventListener("click",(e)=>{
if(e.target.tagName === "BUTTON"){
 const productId=parseInt(e.target.getAttribute('data-id'));
 const product= products.find((p)=>p.id===productId);
 addToCart(product);
 }
 });
function addToCart(product){
    cart.push(product);
    saveCartItems();
    renderCart();
}

function renderCart(){
    cartItemsDisplay.innerText="";
    let totalPrice=0;
    if(cart.length>0){
        emptyCartMessage.classList.add('hidden');
        cartTotalMessage.classList.remove('hidden');
        cart.forEach((item,index)=>{
            totalPrice+=item.price;
           const cartItem= document.createElement('div');
           cartItem.classList.add('cart-container');
           cartItem.innerHTML=`
           ${item.name} -$${item.price.toFixed(2)} <button data-index="${index}" class="remove-btn">Remove🗑️</button>
           `;
           cartItemsDisplay.appendChild(cartItem);
        
        });
        totalPriceDisplay.textContent=`
        ${totalPrice.toFixed(2)}
        `;

    }else{
             emptyCartMessage.classList.remove('hidden');
            cartTotalMessage.classList.add('hidden');
             totalPriceDisplay.textContent=`0.00`;
         }
}
cartItemsDisplay.addEventListener("click",(e)=>{
    if(e.target.classList.contains('remove-btn')){
        const index=parseInt(e.target.getAttribute('data-index'));
        removeFromCart(index);
    }
});
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartItems();
    renderCart();
}



function saveCartItems(){
    localStorage.setItem('cart',JSON.stringify(cart));
}


checkOutBtn.addEventListener('click',()=>{
    cart.length=0;
    saveCartItems();
    alert("Checkout Successfully");
    renderCart();
    });

renderCart();
});