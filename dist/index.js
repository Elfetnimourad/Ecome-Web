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
            let arr = data.products;
            arr.forEach((element) => {
                let heading = document.createElement('h6');
                let image = document.createElement('img');
                let card = document.createElement('div');
                image.style.width = '200px';
                image.style.height = '100px';
                card.style.height = '150px';
                card.style.borderRadius = '10px';
                card.style.backgroundColor = 'white';
                image.src = element.images[0];
                heading.innerHTML = element.title;
                card.appendChild(image);
                card.appendChild(heading);
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
