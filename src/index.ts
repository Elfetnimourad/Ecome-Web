
// Get the container where product cards will be displayed
let show = document.querySelector('.show') as HTMLDivElement;

let sideBarMoreIcon = document.querySelector(".sidebar-more-icon") as HTMLDivElement;

let searchBar = document.querySelector('input') as HTMLInputElement ;

let closeMoreIcon = document.getElementById('closeIcon') as HTMLElement;

let menu = document.querySelector(".menu") as HTMLElement;

let icons = document.querySelector('.icons') as HTMLDivElement;
let home = document.querySelector('a') as HTMLAnchorElement;

let cartShop = document.querySelector('.fa-cart-shopping') as HTMLDivElement;

let cartBadge = document.querySelector('.cart-with-badge') as HTMLDivElement;

let beforeCart = window.getComputedStyle(cartShop,'::after') as CSSStyleDeclaration;

let closeIcon = document.querySelector(".fa-xmark") as HTMLCanvasElement;

const badge = document.createElement('div');

let arrOfItemsList = document.querySelector(".arr-of-items") as HTMLDivElement;

let sidebar = document.querySelector('.sidebar') as HTMLDivElement;

      let totPrice = document.createElement("span") as HTMLSpanElement;

      let logout = document.querySelector('.logout') as HTMLAnchorElement;
totPrice.classList.add("totPrice");

let count:number = 0;
        let countedItem:number = 1;
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
// Menu Icon 
menu.addEventListener('click',()=>{
  sideBarMoreIcon.classList.remove('d-none')
})
closeMoreIcon.addEventListener('click',()=>{
  sideBarMoreIcon.classList.add('d-none')
})

// Async function to fetch and display products

home.style.color="black"
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
let copiedArray = [...arr];
    // Iterate over the filtered products
function getResult(copiedArray: ArrOfItems[]){
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


 // Full Details for the Each Product 

 image.addEventListener('click',()=>{
  show.innerHTML = '';
  let partImage = document.createElement("div");
  let partDetails = document.createElement("div")
  let productCard = document.createElement('div');
  let productImage = document.createElement('img');
  let productTitle = document.createElement("h4");
  let descrptionProduct = document.createElement("p");
  let productPrice = document.createElement('span');
  let productDimensions = document.createElement("h5");
    let productStock = document.createElement("h5");

  
  for(let i = 0.1;i<=element.rating;i++){
let rateProduct = document.createElement("i");
  rateProduct.classList = 'fa-solid fa-star';
  rateProduct.style.color = "yellow"

  
  partDetails.appendChild(rateProduct);
  productCard.appendChild(partDetails)
  }
  show.style.height = '80vh';
  productImage.src = element.images[0];
  productImage.style.border = '1px solid lightblue';
  productImage.style.boxShadow = '2px 2px 2px lightblue'
  productTitle.innerText = 'Title :' + element.title;
descrptionProduct.innerText = "Product Description :" + element.description;
productPrice.innerText = 'Price :' + element.price + "$";
productDimensions.innerHTML = "Dimensions :" + JSON.stringify((element.dimensions));
  productImage.style.height = '50vh';
  productStock.innerHTML = "Stock :" + element.stock;
  partImage.appendChild(productImage);
    partDetails.appendChild(productTitle);
        partDetails.appendChild(descrptionProduct);
        partDetails.appendChild(productDimensions)
        partDetails.appendChild(productPrice);
        partDetails.appendChild(productStock);

productCard.style.display = 'flex';
productCard.style.flexDirection = 'row';
  productCard.style.width = '150vh';
  productCard.style.height = '70vh';


productCard.appendChild(partImage);
productCard.appendChild(partDetails);

  show.appendChild(productCard)
 })
//Search Bar Input 


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
}
   
if(searchBar.value === '' ){
getResult(copiedArray);


}
searchBar.addEventListener('change',()=>{
  if(searchBar.value !== '' && copiedArray.some(el=>el.title === searchBar.value)){
show.innerHTML = ''
  getResult(copiedArray.filter(el=>el.title === searchBar.value));
  }
  

})
    if(count === 0 ){
      badge.classList.remove('badge')
    }

  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Call the function to start loading data
getApi();

