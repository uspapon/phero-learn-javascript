// developed by Programming Hero
const pHeroshoppingCart = [
    { name: 'shoe' , price: 1200 },
    { name: 'shirt', price: 2200},
    { name:'pant', price: 3600},
    { name: 'belt', price: 600}
];

function pHeroTotalCost(products){
    let pheroTotal = 0;
    for(let i=0; i<products.length; i++) {

        const pHeroProduct = products[i];
        const pHeroPrice = pHeroProduct.price;
        pheroTotal = pheroTotal + pHeroPrice;

    }

    return pheroTotal;
}

const pHeroExpense = pHeroTotalCost(pHeroshoppingCart);
console.log("total expense today: ", pHeroExpense); 





// developed my me
const shoppingCart = [
    {shoe: 1200 },
    {shirt: 2200},
    {pant: 3600},
    {belt: 600}
];

function totalCost(products){

    let total = 0;

    for(let i=0; i<products.length; i++){

        const product = products[i];

        const price = Object.values(product);
        
        total = total + parseInt(price);

    }

    return total;
}

const expense = totalCost(shoppingCart);
console.log("total price is ", expense);