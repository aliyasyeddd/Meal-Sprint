import { menuArray } from "./data.js";

let orderedItems = [];
const menuDiv = document.getElementById("menu-item-info");
const orderReceipt = document.querySelector(".receipt")


function renderMenu() {
    let menuHtml = "";
    menuArray.forEach((menuItem) => {
        menuHtml += `<div class="menu-item">
           <div class="items">
                <img src="${menuItem.image}" class="menu-item-image" />
                <div class="menu-items-details">
                   <h3 class="menu-item-name">${menuItem.name}</h3>
                   <p class="menu-item-ingredients">${menuItem.ingredients}</p>
                   <p class="price">$${menuItem.price}</p>
                </div>
           </div>
            <button class="add-btn" data-menu-id="${menuItem.id}">+</button>
        </div>
        <hr>
        `;
    })
    menuDiv.innerHTML = menuHtml;
    document.querySelectorAll(".add-btn").forEach(button => {
        button.addEventListener("click", handleAddItem);
    })

}


function handleAddItem(e) {
    const itemId = e.target.dataset.menuId;
    const menuItem = menuArray.find(item => item.id == itemId);
    orderedItems.push(menuItem);
    renderOrderReceipt()
}

function renderOrderReceipt() {
    orderReceipt.style.display = "block";
    document.getElementById("order-items").innerHTML = orderedItems.map(item => {
        return (
            `<div class="ordered-items-list">
                <div class="ordered-item">
                      <h3 class="ordered-item-name">${item.name}</h3>
                      <button class="remove-btn">remove</button>
                </div>
                <p class="price">$${item.price}</p>
            </div>
      `
        )
    }).join("")
    document.querySelectorAll(".remove-btn").forEach((button, index) => {
        button.addEventListener("click", () => removeItem(index));
    })
    const totalPrice = orderedItems.reduce((total, item) => total + item.price, 0);
    document.querySelector(".order-total").innerHTML = `
                           <h3 class="total-price">Total Price:</h3>
                           <p class="price">$${totalPrice}</p>
    `;

}

function removeItem(index) {
    orderedItems.splice(index, 1);
    if(orderedItems.length > 0){
        orderReceipt.style.display = "block";
        renderOrderReceipt();
    } else {
        orderReceipt.style.display = "none";
    }
}

renderMenu();