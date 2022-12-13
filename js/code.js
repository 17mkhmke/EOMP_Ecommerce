// var products =[
//        {
//            id: 1,
//            productName: "Budwiser",
//            image : "https://i.postimg.cc/JhCpLBwq/Bud-Special.png",
//            price: 200,
//            category:"beer",
//            quantity: "24 x 330ml"
//        },
//        {
//            id: 2,
//            productName: "savanna",
//            image : "https://i.postimg.cc/9z377ZYg/Savanna-Pack.jpg",
//            price: 200,
//            category: "cider",
//            quantity: "24 x 330ml"
//        },
//        {
//            id: 3,
//            productName: "Russian Bear",
//            image : "https://i.postimg.cc/P5TMVn13/Russian-Bear.png",
//            price: 154,
//            category: "vodka",
//            quantity: "1 litre"
//        },
//        {
//            id: 4,
//            productName: "4th-street",
//            image : "https://i.postimg.cc/pLcnfwCn/4th-Street-Wine.png",
//            price: 130,
//            category: "wine",
//            quantity: "5 litres"
//        },
//        {
//            id: 5,
//            productName: "firstwatch",
//            image : "https://i.postimg.cc/TPWhrphZ/first-Watch.jpg",
//            price: 170,
//            category: "whisky",
//            quantity: "750ml"
//        },
//        {
//            id: 6,
//            productName: "J.C. Le Roux Domaine Premium",
//            image : "https://i.postimg.cc/4dsZmdcv/LeRoux.png",
//            price: 185,
//            category: "champaign",
//            quantity: "750ml"
//        },
//        {
//            id: 7,
//            productName: "Flying Fish",
//            image : "https://i.postimg.cc/WbCxK35N/flying-Fish2-0.webp",
//            price: 100,
//            category: "beer",
//            quantity: "500ml X 6"
//        },
//        {
//            id: 8,
//            productName: "Bernini Blush",
//            image : "https://i.postimg.cc/mrT69Fdr/Bernini-Blush.png",
//            price: 270,
//            category: "cider",
//            quantity: "440ml x 6"
//        },
//        {
//            id: 9,
//            productName: "Old Buck",
//            image : "https://i.postimg.cc/JzQCS8vG/oldBuck.png",
//            price: 130,
//            category: "gin",
//            quantity: "750ml"
//        },
//        {
//            id: 10,
//            productName: "Hennesy",
//            image : "https://i.postimg.cc/D0KPs96K/Hennesy2-1.png",
//            price: 420,
//            category: "brandy",
//            quantity: "750ml"
//        },
//        {
//            id: 11,
//            productName: "Gordon's Gin",
//            image : "https://i.postimg.cc/50BBSP6d/Gordons.png",
//            price: 180,
//            category: "gin",
//            quantity: "750ml"
//        },
//        {
//            id: 12,
//            productName: "Rain Dance",
//            image : "https://i.postimg.cc/8zxLQ8vg/raindance.jpg",
//            price: 110,
//            category: "wine",
//            quantity : "5 litres"
//        },
//    ];
//    products.forEach((item, i) =>{
//     $('main .container').append(`<div class = "card">
//     <img src="${item.image}" alt= "${item.productName}"/>
//     <section>
//         <span>${item.productName}</span>
//         <span>${item.price}</span>`)
//    })
var products = {
    data:[
        {
            id: 1,
            productName: "Budwiser",
            image : "https://i.postimg.cc/JhCpLBwq/Bud-Special.png",
            price: 200.00,
            category:"beer",
            quantity: "24 x 330ml ",
            button :"Add to cart"
        },
        {
            id: 2,
            productName: "savanna",
            image : "https://i.postimg.cc/9z377ZYg/Savanna-Pack.jpg",
            price: 200,
            category: "cider",
            quantity: "24 x 330ml ",
            button :"Add to cart"
        },
        {
            id: 3,
            productName: "Russian Bear",
            image : "https://i.postimg.cc/P5TMVn13/Russian-Bear.png",
            price: 154,
            category: "vodka",
            quantity: "1 litre ",
            button :"Add to cart"
        },
        {
            id: 4,
            productName: "4th-street",
            image : "https://i.postimg.cc/pLcnfwCn/4th-Street-Wine.png",
            price: 130,
            category: "wine",
            quantity: "5 litres ",
            button :"Add to cart"
        },
        {
            id: 5,
            productName: "firstwatch",
            image : "https://i.postimg.cc/TPWhrphZ/first-Watch.jpg",
            price: 170,
            category: "whisky",
            quantity: "750ml ",
            button :"Add to cart"
        },
        {
            id: 6,
            productName: "J.C. Le Roux Domaine Premium",
            image : "https://i.postimg.cc/4dsZmdcv/LeRoux.png",
            price: 185,
            category: "champaign",
            quantity: "750ml ",
            button :"Add to cart"
        },
        {
            id: 7,
            productName: "Flying Fish",
            image : "https://i.postimg.cc/WbCxK35N/flying-Fish2-0.webp",
            price: 100,
            category: "beer",
            quantity: "500ml X 6 ",
            button :"Add to cart"
        },
        {
            id: 8,
            productName: "Bernini Blush",
            image : "https://i.postimg.cc/mrT69Fdr/Bernini-Blush.png",
            price: 270,
            category: "cider",
            quantity: "440ml x 6 ",
            button :"Add to cart"
        },
        {
            id: 9,
            productName: "Old Buck",
            image : "https://i.postimg.cc/JzQCS8vG/oldBuck.png",
            price: 130,
            category: "gin",
            quantity: "750ml ",
            button :"Add to cart"
        },
        {
            id: 10,
            productName: "Hennesy",
            image : "https://i.postimg.cc/D0KPs96K/Hennesy2-1.png",
            price: 420,
            category: "brandy",
            quantity: "750ml ",
            button: "Add to cart"
        },
        {
            id: 11,
            productName: "Gordon's Gin",
            image : "https://i.postimg.cc/50BBSP6d/Gordons.png",
            price: 180,
            category: "gin",
            quantity: "750ml ",
            button :"Add to cart"
        },
        {
            id: 12,
            productName: "Rain Dance",
            image : "https://i.postimg.cc/8zxLQ8vg/raindance.jpg",
            price: 110,
            category: "wine",
            quantity : "5 litres ",
            button :"Add to cart"
        },
    ],
};
//Create cards

for (let i of products.data){
    let card = document.createElement("div");

    card.classList.add("card", "i.category");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //Contents
    let container = document.createElement("div");
    container.classList.add("container");
    //prodName
    let name = document.createElement("h6");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
   
    //price
    let priceR = document.createElement("small");
    priceR.classList.add("product-price");
    priceR.innerText ="R" + i.price;
    container.appendChild(priceR);
    //category
    let categs = document.createElement("p");
    categs.classList.add("product-category");
    categs.innerText = i.category.toUpperCase();
    container.appendChild(categs);
    //quantity
    let quants = document.createElement("i");
    quants.classList.add("product-quantity");
    quants.innerText = i.quantity.toLowerCase();
    container.appendChild(quants);
    
    //buttons
    let checkout = document.createElement("button");
    checkout.classList.add("btnCheckout");
    checkout.innerText = i.button.toLowerCase();
    container.appendChild(checkout);
    card.appendChild(container);
    document.getElementById("Products").appendChild(card);
    
}


function filter(value){

    let buttons = document.querySelectorAll(".filterButtons");
    buttons.forEach((button) => {
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        } else{
            button.classList.remove("active");
        }
    
});

//select all
let elements = document.querySelectorAll(".card");
elements.forEach((element)=>{
    if (value == "all"){
        element.classList.remove();
    } else {
        if(element.classList.contains(value)){
            element.classList.remove()
        }
        else{
            element.classList.add()
        }
    }
})
}
//all
window.onload =() =>{
    filter("all");

};
// search.addEventListener('input', e => searchProducts(e.target.products));

function search() {
    let input = document.getElementById('search-input').value
    input=input.toLowerCase();
    for (i = 0; i < products.data.length; i++) { 
        const productNames = products.data[i].productName.toLowerCase()
        const sort = productNames.includes(input)
        if (sort == true){
            document.write(productNames.data);
        }
        // console.log(sort);
    }
}