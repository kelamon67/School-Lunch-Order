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

if(name=="" || studentClass=="" || selectedFood==""){
alert("Please fill all fields");
return;
}

let order = {

name:name,
class:studentClass,
food:selectedFood,
price:selectedPrice,
status:"Payment Pending",
time:new Date().toLocaleTimeString()

};

let orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.push(order);

localStorage.setItem("orders",JSON.stringify(orders));

document.getElementById("message").innerHTML =
"Order sent. Please pay Mechola. Call 81900796";

document.getElementById("name").value="";
document.getElementById("class").value="";

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