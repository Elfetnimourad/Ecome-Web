// Get the container where product cards will be displayed
let show = document.querySelector('.show') as HTMLDivElement;

let icons = document.querySelector('.icons') as HTMLDivElement

let cartShop = document.querySelector('.fa-cart-shopping') as HTMLElement;

let cartBadge = document.querySelector('.cart-with-badge') as HTMLDivElement;

let beforeCart = window.getComputedStyle(cartShop,'::after') as CSSStyleDeclaration;

const badge = document.createElement('div');

let arrOfItemsList = document.querySelector(".arr-of-items") as HTMLDivElement;

let sidebar = document.querySelector('.sidebar') as HTMLDivElement;

let count:number = 0;
        let countedItem = 0;


interface ArrOfItems {
  title:string,
  price:number,
  
    images:string[]
  

}

let arrOfItems:ArrOfItems[] = [];
console.log(beforeCart.content);
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

    // Iterate over the filtered products
    arr.forEach((element: any) => {
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
cartBadge.appendChild(badge)
     buyBtn.addEventListener('click',()=>{
    badge.classList.add('badge');
      count++;
      console.log(count)
      badge.innerHTML = count.toString();
      cartBadge.style.transform = 'translateY(10%)';
      arrOfItems.push(element);
      console.log(element);
arrOfItemsList.innerHTML = "";
       arrOfItems.forEach((ele,index)=>{
      let cardItem = document.createElement('div') as HTMLDivElement;
      let imgItem = document.createElement('img') as HTMLImageElement;
      let titleItem = document.createElement("p") as HTMLParagraphElement;
      let amount = document.createElement("span") as HTMLSpanElement;

      cardItem.style.width = '100%';

      imgItem.style.height = '80px';
            imgItem.style.width = '80px';


      imgItem.src = ele.images[0];
      titleItem.innerHTML = ele.title;
console.log('ele',ele)
      if(arrOfItems.indexOf(ele) !== arrOfItems.lastIndexOf(ele)){
        countedItem++;
              amount.innerHTML = "Price :" + countedItem.toString();
              console.log('true, it is the same');
              
      }else{
              amount.innerHTML = '1';
                            

      }


      cardItem.appendChild(imgItem);
      cardItem.appendChild(titleItem);
            cardItem.appendChild(amount);

arrOfItemsList.appendChild(cardItem);
     })
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
