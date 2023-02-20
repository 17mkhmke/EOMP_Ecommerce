
let products = {
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
function display() {
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

}
display();

// // Add event listener to checkout button
// checkout.addEventListener("click", function() {
//   // Get the cart items
//   let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

//   // Store the cart items in local storage
//   localStorage.setItem("cart", JSON.stringify(cartItems));

//   // Redirect to checkout page
//   window.location.href = "checkout.html";
// });

// // On checkout page, retrieve cart items from local storage
// let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// // Calculate total price of cart items
// let totalPrice = 0;
// for (let i of cartItems) {
//   totalPrice += i.price;
// }


//Search & Filter
let searchInput = document.getElementById("search-input");
let allBtn = document.getElementById("all");
let beerBtn = document.getElementById("beer");
let ciderBtn = document.getElementById("cider");
let vodkaBtn = document.getElementById("vodka");
let wineBtn = document.getElementById("wine");
let champaignBtn = document.getElementById("champaign");
 
// Filter by category
function filterByCategory(category) {
  // Hide all cards
  let cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      card.style.display = 'none';
  });

  // Show cards with matching category
  let filteredCards = document.querySelectorAll(`.${category}`);
  filteredCards.forEach(card => {
      card.style.display = 'block';
  });
}

// Event listeners for category filter buttons
allBtn.addEventListener('click', () => {
  filterByCategory('card');
});

beerBtn.addEventListener('click', () => {
  filterByCategory('beer');
});

ciderBtn.addEventListener('click', () => {
  filterByCategory('cider');
});

vodkaBtn.addEventListener('click', () => {
  filterByCategory('vodka');
});


// Add event listener for search input
searchInput.addEventListener('input', () => {
  let searchTerm = searchInput.value.toLowerCase();
  let cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      let productName = card.querySelector('.product-name').innerText.toLowerCase();
      let category = card.querySelector('.product-category').innerText.toLowerCase();
      if (productName.includes(searchTerm) || category.includes(searchTerm)) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
});

