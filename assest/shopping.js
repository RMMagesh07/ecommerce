let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Gucci Leather bag<br>(Rs.5999)',
        image: 'gucci bag.jpg',
       
        price:  5999
        
      
    },
    {
        id: 2,
        name: 'Sunglasses <br>(Rs.21899)<br>',
        image: 'sunglass.jpg',
     
        price: 21899
    },
    {
        id: 3,
        name: 'Fastrack Watch<br>(Rs.2799)',
        image: 'watch.jpg',
      
        price: 2799
    },
    {
        id: 4,
        name: 'Travel Bag<br>(Rs.8999)',
        image: 'bag combo.jpg',
       
        price: 8999
    },
    {
        id: 5,
        name: 'Pendant<br>(Rs.7589)',
        image: 'pendant.jpg',
        
        price: 7589
    },
    {
        id: 6,
        name: 'Nike shoe<br>(Rs.12000)',
        image: 'nike.jpg',
        
        price: 12000
    },
    {
        id: 7,
        name: 'Small bag<br>(Rs.12659)',
        image: 'gucci bag.jpg',
       
        price: 12659
    },
    {
        id: 8,
        name: 'Headphones<br>(Rs.5800)',
        image: 'headphones.jpg',
        
        price: 5800
    },
   
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})"><span>Add To Cart</span></button>`;
        
            
  
            
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}