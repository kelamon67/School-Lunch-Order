let selectedFood = "";
let selectedPrice = 0;


// STUDENT SELECT FOOD
function orderFood(food,price){

selectedFood = food;
selectedPrice = price;

document.getElementById("selectedFood").innerHTML =
"Selected: " + food + " - K" + price;

}


// PLACE ORDER
function placeOrder(){

let name = document.getElementById("name").value;
let studentClass = document.getElementById("class").value;

fetch("https://script.google.com/macros/s/AKfycbwkjUmw3VS2Lf4t7q2vst93SkfvrK1RTX7T7u0NJ_0YVFku21aqyZofjSWDYOD91l7-/exec",{

method:"POST",

body:JSON.stringify({

name:name,
class:studentClass,
food:selectedFood,
price:selectedPrice

})

});

document.getElementById("message").innerHTML =
"Order sent. Pay Mechola. Call 72232225";

}


// ADMIN LOAD ORDERS
function loadOrders(){

let orders = JSON.parse(localStorage.getItem("orders")) || [];

const div = document.getElementById("orders");

if(!div) return;

div.innerHTML = "";

let totalOrders = 0;
let totalMoney = 0;

orders.forEach((o,i)=>{

totalOrders++;
totalMoney += Number(o.price);

div.innerHTML += `

<div class="food">

<h3>${o.food}</h3>

<p><b>Name:</b> ${o.name}</p>

<p><b>Class:</b> ${o.class}</p>

<p><b>Price:</b> K${o.price}</p>

<p><b>Status:</b> ${o.status}</p>

<p><b>Time:</b> ${o.time}</p>

<button onclick="markPaid(${i})">
MARK PAID
</button>

<button onclick="completeOrder(${i})">
COMPLETE
</button>

</div>

`;

});

if(document.getElementById("totalOrders"))
document.getElementById("totalOrders").innerText = totalOrders;

if(document.getElementById("totalMoney"))
document.getElementById("totalMoney").innerText = totalMoney;

}


// MARK ORDER PAID
function markPaid(index){

let orders = JSON.parse(localStorage.getItem("orders"));

orders[index].status="PAID";

localStorage.setItem("orders",JSON.stringify(orders));

loadOrders();

}


// COMPLETE ORDER
function completeOrder(index){

let orders = JSON.parse(localStorage.getItem("orders"));

orders.splice(index,1);

localStorage.setItem("orders",JSON.stringify(orders));

loadOrders();

}


// AUTO LOAD ADMIN PAGE
window.onload = function(){

loadOrders();

};