const product = {
    name: 'Bic pen black',
    price: 1.90,
    off: 0.05
}

function clone(object){
    return { ...object }
}

const newProduct = clone(product);
newProduct.name = 'Bic pen blue';
console.log(product);
console.log(newProduct);