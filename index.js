import { menuArray } from "./data.js";


const menuDiv = document.getElementById("menu-item-info");


function renderMenu() {
    let menuHtml = "";
    menuArray.forEach((menuItem) => {
        menuHtml += `<div class="menu-item">
           <div class="items">
                <img src="${menuItem.image}" class="menu-item-image" />
                <div class="menu-items-details">
                   <h3 class="menu-item-name">${menuItem.name}</h3>
                   <p class="menu-item-ingredients">${menuItem.ingredients}</p>
                   <p class="menu-item-price">$${menuItem.price}</p>
                </div>
           </div>
            <button class="add-btn" data-menu-id="${menuItem.id}">+</button>
        </div>
        <hr>
        `;
    })
    menuDiv.innerHTML = menuHtml;
}
 
renderMenu();