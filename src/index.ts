// Get the container where product cards will be displayed
let show = document.querySelector('.show') as HTMLDivElement;

let icons = document.querySelector('.icons') as HTMLDivElement

let cartShop = document.querySelector('.fa-cart-shopping') as HTMLDivElement;

let cartBadge = document.querySelector('.cart-with-badge') as HTMLDivElement;

let beforeCart = window.getComputedStyle(cartShop,'::after') as CSSStyleDeclaration;

let closeIcon = document.querySelector(".fa-xmark") as HTMLCanvasElement;

const badge = document.createElement('div');

let arrOfItemsList = document.querySelector(".arr-of-items") as HTMLDivElement;

let sidebar = document.querySelector('.sidebar') as HTMLDivElement;

      let totPrice = document.createElement("span") as HTMLSpanElement;
totPrice.classList.add("totPrice");

let count:number = 0;
        let countedItem = 1;
                let quantity = {quantity:0};
                let t = 0;

interface ArrOfItems {
  id:number,
  title:string,
  price:number,
  quantity : number,
    images:string[],
    toot:number;
  

}

let arrOfItems: ArrOfItems[] = [];
        let tryArr = new Set();
       

let ab: ArrOfItems[] = [];

cartShop?.addEventListener('click',()=>{
  sidebar.classList.remove('d-none')
})
closeIcon?.addEventListener('click',()=>{
  sidebar.classList.add('d-none')
})

// Async function to fetch and display products
async function getApi() {
  try {
    // Fetch product data from DummyJSON API
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    // Log full data to the console
    console.log(data);

    // Filter out specific products by title
    let arr = data.products.filter((e: { title: string }) =>
      e.title !== 'Beef Steak' && e.title !== 'Cucumber'
    );
const copiedArray = [...arr];
    // Iterate over the filtered products
    copiedArray.forEach((element: any) => {
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
      buyBtn.style.float = 'center'

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
     let toot;
   
 let objItem = {...element,quantity,toot};

     buyBtn.addEventListener('click',()=>{
          console.log('let us see before',arrOfItems)
console.log(quantity.quantity++,'rr')

    badge.classList.add('badge');
              count++;

      console.log(count);
      badge.innerHTML = count.toString();
      cartBadge.style.transform = 'translateY(10%)';
objItem.quantity++;
  objItem.toot = (objItem.quantity * objItem.price) || objItem.price;
      arrOfItems.push(objItem);

      arrOfItemsList.innerHTML = "";
    let arrOfSetItemsFilter = arrOfItems.filter((e,i)=>i === arrOfItems.indexOf(e));
console.log('filtred array',arrOfSetItemsFilter)
    let arrOfSetItems = new Set([...arrOfItems]);
 let ar:number[] = [];


arrOfSetItems.forEach((ele,index)=>{
  if(ele.quantity !== 0){
      let cardItem = document.createElement('div') as HTMLDivElement;
      let imgItem = document.createElement('img') as HTMLImageElement;
      let titleItem = document.createElement("p") as HTMLParagraphElement;
      let amount = document.createElement("span") as HTMLSpanElement;
         let decBtn = document.createElement("button") as HTMLButtonElement;
      let incBtn = document.createElement("button") as HTMLButtonElement;


incBtn.addEventListener("click", ()=>{
  ele.quantity++;
  amount.innerHTML = "Amount :" + ele.quantity ;
      ele.toot = ele.quantity * ele.price;
ar.push(totNumber);
 count++;
badge.innerHTML = count.toString();
console.log('ar',ar)
amount.appendChild(incBtn);
amount.appendChild(decBtn);
console.log("ele of increment cart shop",ele)
let sum = [...arrOfSetItems.values()].map((e)=>e.toot).reduce((e,c)=>e+c);
totPrice.innerHTML = 'Total Price :' + sum.toString() + "$";
})
decBtn.addEventListener("click",()=>{
  ele.quantity--;
  amount.innerHTML = "Amount :" + ele.quantity ;

      ele.toot = ele.quantity * ele.price;

ar.push(totNumber)
console.log('ar',ar)
 count--;
badge.innerHTML = count.toString();
amount.appendChild(incBtn);
amount.appendChild(decBtn);
console.log("ele of decrement cart shop",ele);
let sum = [...arrOfSetItems.values()].map((e)=>e.toot).reduce((e,c)=>e+c);
totPrice.innerHTML = 'Total Price :' + sum.toString() + "$";
if(count === 0 ){
      badge.classList.remove('badge');
      totPrice.remove();
    }
if(ele.quantity === 0){
  cardItem.remove();
   arrOfSetItems.delete(ele);

}
})
if(ele.quantity === 0){
  cardItem.remove();
   arrOfSetItems.delete(ele);

}
console.log("eleeeeeeee",ele)

      incBtn.innerHTML = '+';
      decBtn.innerHTML = '-';


      // let totalPrice = arrOfItems.reduce((e,c)=>e.price + c.price);

      cardItem.style.width = '100%';

      imgItem.style.height = '80px';
            imgItem.style.width = '80px';


      imgItem.src = ele.images[0];
      titleItem.innerHTML = ele.title;
console.log('ele',ele);


if(!tryArr.has(ele)){
  ele.quantity = 1;
    tryArr.add(ele);
}
amount.innerHTML = "Amount :" + ele.quantity ;

              console.log('true, it is the same');
          let totNumber:number = ele.quantity * ele.price;
console.log("totNumber",totNumber)    




ar.push(totNumber);
console.log(ar,"ar")

amount.appendChild(incBtn);
amount.appendChild(decBtn);
      cardItem.appendChild(imgItem);
      cardItem.appendChild(titleItem);
            cardItem.appendChild(amount);
arrOfItemsList.appendChild(cardItem);
console.log(ele.toot)
}
     })

     let sum = [...arrOfSetItems.values()].map((e)=>e.toot).reduce((e,c)=>e+c);
totPrice.innerHTML = 'Total Price :' + sum.toString() + "$";
arrOfItemsList.appendChild(totPrice);
console.log('sum',sum)
     arrOfItemsList.style.overflow = "scroll";

     })
    
    });
    if(count === 0 ){
      badge.classList.remove('badge')
    }

  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Call the function to start loading data
getApi();
