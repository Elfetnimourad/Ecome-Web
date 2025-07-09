"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Get the container where product cards will be displayed
let show = document.querySelector('.show');
let icons = document.querySelector('.icons');
let cartShop = document.querySelector('.fa-cart-shopping');
let cartBadge = document.querySelector('.cart-with-badge');
let beforeCart = window.getComputedStyle(cartShop, '::after');
let closeIcon = document.querySelector(".fa-xmark");
const badge = document.createElement('div');
let arrOfItemsList = document.querySelector(".arr-of-items");
let sidebar = document.querySelector('.sidebar');
let count = 0;
let countedItem = 1;
let quantity = { quantity: 0 };
let arrOfItems = [];
let tryArr = new Set();
let ab = [];
cartShop === null || cartShop === void 0 ? void 0 : cartShop.addEventListener('click', () => {
    sidebar.classList.remove('d-none');
});
closeIcon === null || closeIcon === void 0 ? void 0 : closeIcon.addEventListener('click', () => {
    sidebar.classList.add('d-none');
});
// Async function to fetch and display products
function getApi() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch product data from DummyJSON API
            const res = yield fetch("https://dummyjson.com/products");
            const data = yield res.json();
            // Log full data to the console
            console.log(data);
            // Filter out specific products by title
            let arr = data.products.filter((e) => e.title !== 'Beef Steak' && e.title !== 'Cucumber');
            const copiedArray = [...arr];
            // Iterate over the filtered products
            copiedArray.forEach((element) => {
                // Create individual elements for each product
                let heading = document.createElement('h5');
                let image = document.createElement('img');
                let card = document.createElement('div');
                let price = document.createElement('p');
                let buyBtn = document.createElement('button');
                // Set content for elements
                heading.innerHTML = element.title;
                image.src = element.images[0];
                price.innerHTML = `Price: ${element.price}$`;
                buyBtn.innerText = "BUY";
                // Style the image
                image.style.width = '290px';
                image.style.height = '220px';
                image.style.padding = '15px';
                // Style the price
                price.style.paddingBottom = '5px';
                price.style.paddingRight = '5px';
                // Style the Buy button
                buyBtn.style.width = '310px';
                buyBtn.style.height = '25px';
                buyBtn.style.backgroundColor = '#007BFF';
                buyBtn.style.color = 'white';
                buyBtn.style.borderRadius = '7px';
                buyBtn.style.float = 'center';
                // Style the card
                card.style.height = '400px';
                card.style.borderRadius = '10px';
                card.style.backgroundColor = 'white';
                card.style.display = 'flex';
                card.style.flexDirection = 'column';
                card.style.alignItems = 'center';
                card.style.justifyContent = 'space-between';
                card.style.margin = '10px';
                card.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                card.style.padding = '10px';
                // Append elements to card
                card.appendChild(image);
                card.appendChild(heading);
                card.appendChild(price);
                card.appendChild(buyBtn);
                // Append card to the main container
                show.appendChild(card);
                //Add To Cart
                badge.classList.add('badge');
                cartBadge.appendChild(badge);
                let objItem = Object.assign(Object.assign({}, element), { quantity });
                buyBtn.addEventListener('click', () => {
                    console.log('let us see before', arrOfItems);
                    console.log(quantity.quantity++, 'rr');
                    badge.classList.add('badge');
                    count++;
                    console.log(count);
                    badge.innerHTML = count.toString();
                    cartBadge.style.transform = 'translateY(10%)';
                    objItem.quantity++;
                    arrOfItems.push(objItem);
                    arrOfItemsList.innerHTML = "";
                    let arrOfSetItemsFilter = arrOfItems.filter((e, i) => i === arrOfItems.indexOf(e));
                    console.log('filtred array', arrOfSetItemsFilter);
                    let arrOfSetItems = new Set([...arrOfItems]);
                    arrOfSetItems.forEach((ele, index) => {
                        let cardItem = document.createElement('div');
                        let imgItem = document.createElement('img');
                        let titleItem = document.createElement("p");
                        let amount = document.createElement("span");
                        let totPrice = document.createElement("span");
                        let decBtn = document.createElement("button");
                        let incBtn = document.createElement("button");
                        incBtn.addEventListener("click", () => {
                            ele.quantity++;
                            amount.innerHTML = "Amount :" + ele.quantity;
                            amount.appendChild(incBtn);
                            amount.appendChild(decBtn);
                        });
                        decBtn.addEventListener("click", () => {
                            ele.quantity--;
                            amount.innerHTML = "Amount :" + ele.quantity;
                            amount.appendChild(incBtn);
                            amount.appendChild(decBtn);
                        });
                        incBtn.innerHTML = '+';
                        decBtn.innerHTML = '-';
                        // let totalPrice = arrOfItems.reduce((e,c)=>e.price + c.price);
                        cardItem.style.width = '100%';
                        imgItem.style.height = '80px';
                        imgItem.style.width = '80px';
                        imgItem.src = ele.images[0];
                        titleItem.innerHTML = ele.title;
                        console.log('ele', ele);
                        if (!tryArr.has(ele)) {
                            ele.quantity = 1;
                            tryArr.add(ele);
                        }
                        amount.innerHTML = "Amount :" + ele.quantity;
                        console.log('true, it is the same');
                        // totPrice.innerHTML = totalPrice.toString();
                        amount.appendChild(incBtn);
                        amount.appendChild(decBtn);
                        cardItem.appendChild(imgItem);
                        cardItem.appendChild(titleItem);
                        cardItem.appendChild(amount);
                        arrOfItemsList.appendChild(cardItem);
                    });
                    arrOfItemsList.style.overflow = "scroll";
                });
            });
            if (count === 0) {
                badge.classList.remove('badge');
            }
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    });
}
// Call the function to start loading data
getApi();
function specifiedInc(item) {
    return item.quantity++;
}
