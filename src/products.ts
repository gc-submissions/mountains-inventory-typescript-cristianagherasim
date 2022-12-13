interface Product {
    name: string
    price: number
}

let products:Product[] = [{name:"pizza", price: 3.24},
                            {name:"pop", price: 1.99},
                            {name:"breadstick", price: 2.39}];

function calcAverageProductPrice(products:Product[]): number {
    if(products.length > 0){
        let sum = 0;
        for(let i = 0;i < products.length; i++) {
            sum += products[i].price;
        }
        return sum/products.length;}
        else {
            return 0;
        }

 }

console.log(calcAverageProductPrice(products));

export {calcAverageProductPrice, Product};