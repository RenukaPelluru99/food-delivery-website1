let cart = [];
let total = 0;

function addToCart(food,price){

cart.push(food);

total += price;

let li = document.createElement("li");
li.textContent = food + " - ₹" + price;

document.getElementById("cart-items").appendChild(li);

document.getElementById("total").textContent = total;

}

function placeOrder(){

if(cart.length === 0){
alert("Your cart is empty!");
}

else{
alert("Order placed successfully!");
cart = [];
document.getElementById("cart-items").innerHTML="";
document.getElementById("total").textContent = 0;
total = 0;
}

}