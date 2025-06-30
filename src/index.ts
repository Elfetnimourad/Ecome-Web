let show = document.querySelector('.show') as HTMLDivElement;



async function getApi(){
    try{
 const res = await fetch("https://dummyjson.com/products");
const data = await res.json();
console.log(data);
let arr = data.products.filter((e: { title: string; })=>e.title !== 'Beef Steak' && e.title !== "Cucumber");
arr.forEach((element: any) => {
    let heading = document.createElement('h5');
    let image = document.createElement('img');
    let card = document.createElement('div');
    let price = document.createElement('p');
    let buyBtn = document.createElement("button");
    buyBtn.innerText = "BUY";
    buyBtn.style.width = "310px";
        buyBtn.style.height = "25px";
        buyBtn.style.alignSelf = 'center'
buyBtn.style.borderRadius = "7px"
image.style.width = '290px';
image.style.height = '220px';
   price.innerHTML = 'Price : ' + element.price + "$"
        card.style.height = '400px';
    card.style.borderRadius = '10px';
    card.style.backgroundColor= 'white';
    image.style.padding = "15px"
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
    }catch(error){
        console.log(error);
    }
   
}
getApi()