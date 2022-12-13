 var products =JSON.parse(localStorage.getItem('products'))?
 JSON.parse(localStorage.getItem('products')) :[
        {
            id: 1,
            productName: "Budwiser",
            image : "https://i.postimg.cc/JhCpLBwq/Bud-Special.png",
            price: 200,
            category:"beer",
            quantity: "24 x 330ml"
        },
        {
            id: 2,
            productName: "savanna",
            image : "https://i.postimg.cc/9z377ZYg/Savanna-Pack.jpg",
            price: 200,
            category: "cider",
            quantity: "24 x 330ml"
        },
        {
            id: 3,
            productName: "Russian Bear",
            image : "https://i.postimg.cc/P5TMVn13/Russian-Bear.png",
            price: 154,
            category: "vodka",
            quantity: "1 litre"
        },
        {
            id: 4,
            productName: "4th-street",
            image : "https://i.postimg.cc/pLcnfwCn/4th-Street-Wine.png",
            price: 130,
            category: "wine",
            quantity: "5 litres"
        },
        {
            id: 5,
            productName: "firstwatch",
            image : "https://i.postimg.cc/TPWhrphZ/first-Watch.jpg",
            price: 170,
            category: "whisky",
            quantity: "750ml"
        },
        {
            id: 6,
            productName: "J.C. Le Roux Domaine Premium",
            image : "https://i.postimg.cc/4dsZmdcv/LeRoux.png",
            price: 185,
            category: "champaign",
            quantity: "750ml"
        },
        {
            id: 7,
            productName: "Flying Fish",
            image : "https://i.postimg.cc/WbCxK35N/flying-Fish2-0.webp",
            price: 100,
            category: "beer",
            quantity: "500ml X 6"
        },
        {
            id: 8,
            productName: "Bernini Blush",
            image : "https://i.postimg.cc/mrT69Fdr/Bernini-Blush.png",
            price: 270,
            category: "cider",
            quantity: "440ml x 6"
        },
        {
            id: 9,
            productName: "Old Buck",
            image : "https://i.postimg.cc/JzQCS8vG/oldBuck.png",
            price: 130,
            category: "gin",
            quantity: "750ml"
        },
        {
            id: 10,
            productName: "Hennesy",
            image : "https://i.postimg.cc/D0KPs96K/Hennesy2-1.png",
            price: 420,
            category: "brandy",
            quantity: "750ml"
        },
        {
            id: 11,
            productName: "Gordon's Gin",
            image : "https://i.postimg.cc/50BBSP6d/Gordons.png",
            price: 180,
            category: "gin",
            quantity: "750ml"
        },
        {
            id: 12,
            productName: "Rain Dance",
            image : "https://i.postimg.cc/8zxLQ8vg/raindance.jpg",
            price: 110,
            category: "wine",
            quantity : "5 litres"
        },
    ];

    let  fProducts = document.querySelector('tbody');
    function show(){
        products.forEach((item)=>{
           fProducts.innerHTML +=
           `
           <tr id="name">
           <th scope="row" id="name">${item.id}</th>
           <td id="name2">${item.productName}</td>
           <td id="name2">R${item.price}</td>
           <td id="name4">${item.category}</td>
           <td id="name4">${item.quantity}</td>
           <td> <img class="adminImage" src='${item.image}'> </td>
           
           <td> <a href="" class="btn btn-warning btn-sm delete">DELETE</td>
           <td> <a href="" class="btn btn-success btn-sm Edit onclick">EDIT</td>
           </tr>
           `
       })
    }
    show()

console.table(products.data);
document.write
let add = document.querySelector('#btn')
add.addEventListener('click',(e)=>{
    e.preventDefault();
    alert("Item added to storage");
});

//Delete DATA

// console.log(id)
        // document.querySelector('#tbody').innerHTML =``
        document.querySelector('.delete')
        let phones = JSON.parse(localStorage.getItem('fProducts'));
        phones.splice(id, 1)
        // console.log(phones)
        localStorage.setItem('fProducts', JSON.stringify(fProducts))
        // console.table(JSON.parse(localStorage.phones))
        show();
        // console.table(phones)