import {foodItem} from './food.js'

function displayItems(){
    var breakfast= document.getElementById('breakfast');
    var dessert=  document.getElementById('dessert');;
    var lunch =  document.getElementById('lunch');
    var drinks=  document.getElementById('drinks');
    var kidsmenu=  document.getElementById('kidsmenu');
    var starters=  document.getElementById('starters');

    

    const breakfastData= foodItem.filter((item)=>item.category=='breakfast');
    const lunchData= foodItem.filter((item)=>item.category=='lunch');
    const dessertData= foodItem.filter((item)=>item.category=='dessert');
    const drinksData= foodItem.filter((item)=>item.category=='drinks');
    const kidsmenuData= foodItem.filter((item)=>item.category=='kidsmenu');
    const startersData= foodItem.filter((item)=>item.category=='starters');
    breakfastData.map(item=>{
        
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(itemDescription);

        breakfast.appendChild(itemCard);
        
    })


    lunchData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(itemDescription);
        
        lunch.appendChild(itemCard)

    })

    dessertData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(itemDescription);
        
        dessert.appendChild(itemCard)

    })

    drinksData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(itemDescription);

        
        drinks.appendChild(itemCard)
    
    })

    kidsmenuData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(itemDescription);

        
        kidsmenu.appendChild(itemCard)
        
    })

    startersData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(itemDescription);

        
        starters.appendChild(itemCard)
        
    })
}