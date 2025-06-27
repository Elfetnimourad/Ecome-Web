let show = document.querySelector('.show') as HTMLDivElement;



async function getApi(){
    try{
 const res = await fetch("https://dummyjson.com/products");
const data =await res.json();
let arr = data.products;
arr.forEach((element: any) => {
    let heading = document.createElement('h6');
    let image = document.createElement('img');
    let card = document.createElement('div');
image.style.width = '200px';
image.style.height = '100px';

        card.style.height = '150px';
    card.style.borderRadius = '10px';
    card.style.backgroundColor= 'white';
    image.src = element.images[0];
  heading.innerHTML = element.title;
    card.appendChild(image);
      card.appendChild(heading)

show.appendChild(card);
    console.log(element);

});
    }catch(error){
        console.log(error);
    }
   
}
getApi()