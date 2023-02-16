const pHeroshoppingCart = [
    { name: 'belt', price: 600, quantity: 2},
    { name: 'shoe' , price: 1200, quantity: 5},
    { name: 'shirt', price: 2200, quantity: 4},
    { name:'pant', price: 3600, quantity: 3 }
];

function pHeroTotalCost(products){
    let sum = 0;
    for(let i=0; i<products.length; i++) {

        const pHeroProduct = products[i];
        const pHeroPrice = pHeroProduct.price;
        const pHeroProductTotal = pHeroPrice * pHeroProduct.quantity;
        sum = sum + pHeroProductTotal;

    }

    return sum;
}

const pHeroExpense = pHeroTotalCost(pHeroshoppingCart);
console.log("total expense today: ", pHeroExpense); 
