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
let show = document.querySelector('.show');
function getApi() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch("https://dummyjson.com/products");
            const data = yield res.json();
            console.log(data);
            let arr = data.products.filter((e) => e.title !== 'Beef Steak' && e.title !== "Cucumber");
            arr.forEach((element) => {
                let heading = document.createElement('h5');
                let image = document.createElement('img');
                let card = document.createElement('div');
                let price = document.createElement('p');
                let buyBtn = document.createElement("button");
                buyBtn.innerText = "BUY";
                buyBtn.style.width = "310px";
                buyBtn.style.height = "25px";
                buyBtn.style.alignSelf = 'center';
                buyBtn.style.borderRadius = "7px";
                image.style.width = '290px';
                image.style.height = '220px';
                price.innerHTML = 'Price : ' + element.price + "$";
                card.style.height = '400px';
                card.style.borderRadius = '10px';
                card.style.backgroundColor = 'white';
                image.style.padding = "15px";
                image.src = element.images[0];
                heading.innerHTML = element.title;
                //   price.style.float = "right";
                price.style.paddingBottom = '5px';
                price.style.paddingRight = '5px';
                card.appendChild(image);
                card.appendChild(heading);
                card.appendChild(price);
                card.appendChild(buyBtn);
                show.appendChild(card);
                console.log(element);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
getApi();
