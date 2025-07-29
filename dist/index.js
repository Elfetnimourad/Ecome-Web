"use strict";
/**
 * Main E-commerce product and cart functionality
 *
 * Features:
 * - Fetches and displays products
 * - Responsive mobile menu
 * - Add to cart functionality
 * - Cart item quantity management
 * - Dynamic total price calculation
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// DOM elements setup
let show = document.querySelector('.show');
let header = document.querySelector('.header');
let sideBarMoreIcon = document.querySelector(".sidebar-more-icon");
let searchBar = document.querySelector('input');
let closeMoreIcon = document.getElementById('closeIcon');
let menu = document.querySelector(".menu");
let icons = document.querySelector('.icons');
let home = document.querySelector('a');
let cartShop = document.querySelector('.fa-cart-shopping');
let cartBadge = document.querySelector('.cart-with-badge');
let beforeCart = window.getComputedStyle(cartShop, '::after');
let closeIcon = document.querySelector(".fa-xmark");
let arrOfItemsList = document.querySelector(".arr-of-items");
let sidebar = document.querySelector('.sidebar');
let logout = document.querySelector('.logout');
// Badge element for cart counter
const badge = document.createElement('div');
badge.classList.add("badge");
// Total price element
let totPrice = document.createElement("span");
totPrice.classList.add("totPrice");
// Cart and quantity tracking
let count = 0;
let countedItem = 1;
let quantity = { quantity: 0 };
let t = 0;
// Set to track added items for duplication check
let tryArr = new Set();
// Product arrays
let arrOfItems = [];
let ab = [];
// Sidebar show/hide
cartShop === null || cartShop === void 0 ? void 0 : cartShop.addEventListener('click', () => {
    sidebar.classList.remove('d-none');
});
closeIcon === null || closeIcon === void 0 ? void 0 : closeIcon.addEventListener('click', () => {
    sidebar.classList.add('d-none');
});
// Responsive menu toggle
menu.addEventListener('click', () => {
    sideBarMoreIcon.classList.remove('d-none');
});
closeMoreIcon.addEventListener('click', () => {
    sideBarMoreIcon.classList.add('d-none');
});
// Set home link color
home.style.color = "black";
/**
 * Fetch and display product data
 */
function getApi() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch("https://dummyjson.com/products");
            const data = yield res.json();
            // Filter out unwanted products
            let arr = data.products.filter((e) => e.title !== 'Beef Steak' && e.title !== 'Cucumber');
            // Responsive mobile layout setup
            if (window.innerWidth < 800) {
                let iconsPart = document.createElement('div');
                iconsPart.className = 'icons-wrapper';
                let addCircle = document.createElement('i');
                addCircle.className = 'fa-solid fa-circle-plus add-circle-icon';
                icons.remove();
                iconsPart.appendChild(addCircle);
                header.appendChild(iconsPart);
                let isExpanded = true;
                addCircle.addEventListener('click', () => {
                    isExpanded = !isExpanded;
                    if (isExpanded) {
                        let iconsBar = document.createElement('div');
                        iconsBar.className = 'icons-bar';
                        icons.classList.add('icons-column');
                        iconsBar.appendChild(icons);
                        iconsPart.appendChild(iconsBar);
                        header.style.height = '90px';
                    }
                    else {
                        const existingBar = iconsPart.querySelector('.icons-bar');
                        if (existingBar) {
                            iconsPart.removeChild(existingBar);
                            icons.classList.remove('icons-column');
                            header.style.height = '';
                        }
                    }
                });
            }
            let copiedArray = [...arr];
            /**
             * Render filtered products and enable cart actions
             * @param copiedArray - list of products to display
             */
            function getResult(copiedArray) {
                copiedArray.forEach((element) => {
                    // Create product card elements
                    let heading = document.createElement('h5');
                    let image = document.createElement('img');
                    let card = document.createElement('div');
                    let price = document.createElement('p');
                    let buyBtn = document.createElement('button');
                    heading.innerHTML = element.title;
                    image.src = element.images[0];
                    price.innerHTML = `Price: ${element.price}$`;
                    buyBtn.innerText = "BUY";
                    // Style elements
                    image.style.width = '290px';
                    image.style.height = '220px';
                    image.style.padding = '15px';
                    price.style.paddingBottom = '5px';
                    price.style.paddingRight = '5px';
                    buyBtn.style.width = '99%';
                    buyBtn.style.height = '25px';
                    buyBtn.style.backgroundColor = '#007BFF';
                    buyBtn.style.color = 'white';
                    buyBtn.style.borderRadius = '7px';
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
                    // Append elements
                    card.appendChild(image);
                    card.appendChild(heading);
                    card.appendChild(price);
                    card.appendChild(buyBtn);
                    show.appendChild(card);
                    let toot;
                    let objItem = Object.assign(Object.assign({}, element), { quantity, toot });
                    /**
                     * Show full product details when clicking image
                     */
                    image.addEventListener('click', () => {
                        show.innerHTML = '';
                        let partImage = document.createElement("div");
                        let partDetails = document.createElement("div");
                        let productCard = document.createElement('div');
                        let productImage = document.createElement('img');
                        let productTitle = document.createElement("h4");
                        let descrptionProduct = document.createElement("p");
                        let productPrice = document.createElement('span');
                        let productDimensions = document.createElement("h5");
                        let productStock = document.createElement("p");
                        for (let i = 0.1; i <= element.rating; i++) {
                            let rateProduct = document.createElement("i");
                            rateProduct.classList = 'fa-solid fa-star';
                            rateProduct.style.color = "yellow";
                            partDetails.appendChild(rateProduct);
                            productCard.appendChild(partDetails);
                        }
                        show.style.height = '80vh';
                        productImage.src = element.images[0];
                        productImage.className = 'productImage';
                        productImage.style.border = '1px solid lightblue';
                        productImage.style.boxShadow = '2px 2px 2px lightblue';
                        productTitle.innerText = 'Title :' + element.title;
                        descrptionProduct.innerText = "Product Description :" + element.description;
                        productPrice.innerText = 'Price :' + element.price + "$";
                        productDimensions.innerHTML = "Dimensions :" + JSON.stringify(element.dimensions);
                        productStock.innerHTML = "Stock :" + element.stock;
                        partImage.appendChild(productImage);
                        partDetails.appendChild(productTitle);
                        partDetails.appendChild(descrptionProduct);
                        partDetails.appendChild(productDimensions);
                        partDetails.appendChild(productPrice);
                        partDetails.appendChild(productStock);
                        partDetails.className = 'partDetails';
                        productCard.style.display = 'flex';
                        productCard.style.flexDirection = 'row';
                        productCard.style.width = '150vh';
                        productCard.style.height = '70vh';
                        productCard.appendChild(partImage);
                        productCard.appendChild(partDetails);
                        show.appendChild(productCard);
                    });
                    /**
                     * Handle add to cart action
                     */
                    buyBtn.addEventListener('click', () => {
                        count++;
                        badge.innerHTML = count.toString();
                        cartBadge.style.transform = 'translateY(10%)';
                        objItem.quantity++;
                        objItem.toot = (objItem.quantity * objItem.price) || objItem.price;
                        arrOfItems.push(objItem);
                        arrOfItemsList.innerHTML = "";
                        let arrOfSetItems = new Set([...arrOfItems]);
                        let ar = [];
                        arrOfSetItems.forEach((ele, index) => {
                            if (ele.quantity !== 0) {
                                let cardItem = document.createElement('div');
                                let imgItem = document.createElement('img');
                                let titleItem = document.createElement("p");
                                let amount = document.createElement("span");
                                let decBtn = document.createElement("button");
                                let incBtn = document.createElement("button");
                                // Increment
                                incBtn.addEventListener("click", () => {
                                    ele.quantity++;
                                    amount.innerHTML = "Amount :" + ele.quantity;
                                    ele.toot = ele.quantity * ele.price;
                                    count++;
                                    badge.innerHTML = count.toString();
                                    let sum = [...arrOfSetItems.values()].map((e) => e.toot).reduce((e, c) => e + c);
                                    totPrice.innerHTML = 'Total Price :' + sum.toString() + "$";
                                });
                                // Decrement
                                decBtn.addEventListener("click", () => {
                                    ele.quantity--;
                                    amount.innerHTML = "Amount :" + ele.quantity;
                                    ele.toot = ele.quantity * ele.price;
                                    count--;
                                    badge.innerHTML = count.toString();
                                    let sum = [...arrOfSetItems.values()].map((e) => e.toot).reduce((e, c) => e + c);
                                    totPrice.innerHTML = 'Total Price :' + sum.toString() + "$";
                                    if (count === 0) {
                                        badge.classList.remove('badge');
                                        totPrice.remove();
                                    }
                                    if (ele.quantity === 0) {
                                        cardItem.remove();
                                        arrOfSetItems.delete(ele);
                                    }
                                });
                                // Ensure quantity initialized
                                if (!tryArr.has(ele)) {
                                    ele.quantity = 1;
                                    tryArr.add(ele);
                                }
                                amount.innerHTML = "Amount :" + ele.quantity;
                                let totNumber = ele.quantity * ele.price;
                                ar.push(totNumber);
                                incBtn.innerHTML = '+';
                                decBtn.innerHTML = '-';
                                imgItem.src = ele.images[0];
                                imgItem.style.height = '80px';
                                imgItem.style.width = '80px';
                                titleItem.innerHTML = ele.title;
                                amount.appendChild(incBtn);
                                amount.appendChild(decBtn);
                                cardItem.appendChild(imgItem);
                                cardItem.appendChild(titleItem);
                                cardItem.appendChild(amount);
                                arrOfItemsList.appendChild(cardItem);
                            }
                        });
                        // Append total price
                        let sum = [...arrOfSetItems.values()].map((e) => e.toot).reduce((e, c) => e + c);
                        totPrice.innerHTML = 'Total Price :' + sum.toString() + "$";
                        arrOfItemsList.appendChild(totPrice);
                        arrOfItemsList.style.overflow = "scroll";
                    });
                });
            }
            // If no search term, show all
            if (searchBar.value === '') {
                getResult(copiedArray);
            }
            // Search functionality
            searchBar.addEventListener('change', () => {
                if (searchBar.value !== '' && copiedArray.some(el => el.title === searchBar.value)) {
                    show.innerHTML = '';
                    getResult(copiedArray.filter(el => el.title === searchBar.value));
                }
            });
            // Remove badge if cart is empty
            if (count === 0) {
                badge.classList.remove('badge');
            }
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    });
}
// Start the app
getApi();
