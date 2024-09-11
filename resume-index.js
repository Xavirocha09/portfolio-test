import {menuArray} from `/data.js`

let totalPrice = 0

const getMenuArray = menuArray.map(function(menu){
    return `
    <section class="item-container"> 
            <div class="emoji-div">
                ${menu.emoji}
            </div>
            
            <div class="name-ingredients">
                <h3>${menu.name}</h3>
                <p>${menu.ingredients} </p>
                <h4>$${menu.price}</h4>
            </div>
            
            <div class="add-btn"> 
                <i class="fa-solid fa-circle-plus" id="add-btn" data-name="${menu.name}" data-price="${menu.price}"></i>
            </div>
    </section>`
}).join('')