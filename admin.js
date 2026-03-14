// Load orders when page opens
function loadOrders(){

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    const ordersDiv = document.getElementById("orders");

    ordersDiv.innerHTML = "";

    orders.forEach((order,index)=>{

        let card = document.createElement("div");
        card.className = "food";

        card.innerHTML = `
        <h3>${order.food}</h3>

        <p><b>Name:</b> ${order.name}</p>

        <p><b>Class:</b> ${order.class}</p>

        <p><b>Price:</b> K${order.price}</p>

        <p><b>Status:</b> ${order.status}</p>

        <button onclick="markPaid(${index})">
        MARK PAID
        </button>

        <button onclick="deleteOrder(${index})">
        COMPLETE
        </button>
        `;

        ordersDiv.appendChild(card);

    });

}


// Mark payment as paid
function markPaid(index){

    let orders = JSON.parse(localStorage.getItem("orders"));

    orders[index].status = "PAID";

    localStorage.setItem("orders",JSON.stringify(orders));

    loadOrders();

}


// Remove completed order
function deleteOrder(index){

    let orders = JSON.parse(localStorage.getItem("orders"));

    orders.splice(index,1);

    localStorage.setItem("orders",JSON.stringify(orders));

    loadOrders();

}


// Auto refresh every 5 seconds
setInterval(loadOrders,5000);


// Load when page opens
loadOrders();