// MENU ITEMS
const menu = [

{ name:"Chicken Rice", price:5, image:"images/chicken.jpg" },

{ name:"Hot Dog", price:3, image:"images/hotdog3.jpg" },

{ name:"Lamb Curry", price:6, image:"images/lamb2.jpg" }

];


// LOAD MENU
function loadMenu(){

let html="";

menu.forEach(item=>{

html += `

<div class="food">

<img src="${item.image}">

<h3>${item.name}</h3>

<p>K${item.price}</p>

<button onclick="orderFood('${item.name}',${item.price})">
ORDER
</button>

</div>

`;

});

document.getElementById("menu").innerHTML = html;

}


// SEND ORDER
function orderFood(food,price){

let name = document.getElementById("name").value;

let studentClass = document.getElementById("class").value;

fetch("https://script.google.com/macros/s/AKfycbwkjUmw3VS2Lf4t7q2vst93SkfvrK1RTX7T7u0NJ_0YVFku21aqyZofjSWDYOD91l7-/exec",{

method:"POST",

body:JSON.stringify({

name:name,
class:studentClass,
food:food,
price:price

})

})

.then(()=>{

document.getElementById("message").innerHTML =
"Order sent. Please go pay.";

});

}


// START APP
window.onload = loadMenu;