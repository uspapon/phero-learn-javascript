const phones = [
    {name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camera: 10, storage: '62gb', price: 22000, color: 'black'},
    {name: 'iPhone', camera: 16, storage: '52gb', price: 82000, color: 'Pink'},
    {name: 'Xaomi', camera: 13, storage: '42gb', price: 52000, color: 'white'},
    {name: 'Oppo', camera: 11, storage: '22gb', price: 20000, color: 'red'},
    {name: 'Nokia', camera: 18, storage: '72gb', price: 44000, color: 'green'},
    {name: 'HTC', camera: 8, storage: '12gb', price: 62000, color: 'blue'},
]

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i=0; i<phones.length; i++){

        let phone = phones[i];
        
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
             
    }

    return cheapest;

}

const mySelection = cheapestPhone(phones);
console.log("the cheapest phone is ", mySelection);