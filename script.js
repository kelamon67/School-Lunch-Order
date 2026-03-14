let selectedFood = "";
let selectedPrice = 0;

function orderFood(food,price){

selectedFood = food;
selectedPrice = price;

document.getElementById("selectedFood").innerHTML =
"Selected: " + food + " - K" + price;

}

function placeOrder(){

let name = document.getElementById("name").value;
let studentClass = document.getElementById("class").value;

if(name=="" || studentClass=="" || selectedFood==""){
alert("Fill all fields");
return;
}

let order = {

name:name,
class:studentClass,
food:selectedFood,
price:selectedPrice,
status:"Payment Pending"

};

let orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.push(order);

localStorage.setItem("orders",JSON.stringify(orders));

document.getElementById("message").innerHTML =
"Order sent. Pay Mechola - call 81900796 .";

}

function loadOrders(){

let orders = JSON.parse(localStorage.getItem("orders")) || [];

const div = document.getElementById("orders");

if(!div) return;

div.innerHTML = "";

orders.forEach((o,i)=>{

div.innerHTML += `
<div class="food">

<h3>${o.food}</h3>

<p>${o.name} - ${o.class}</p>

<p>Status: ${o.status}</p>

<button onclick="markPaid(${i})">
MARK PAID
</button>

</div>
`;

});

}

function markPaid(index){

let orders = JSON.parse(localStorage.getItem("orders"));

orders[index].status="PAID";

localStorage.setItem("orders",JSON.stringify(orders));

loadOrders();

}

window.onload = loadOrders;