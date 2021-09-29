let originalPrice = 120;
const discount = 18;

const discounts = ["PrimeraCompra10off", "Vestido prado"]

const priceDiscounted = 100 - discount;
const priceAdjusted = (originalPrice * priceDiscounted) / 100;

// console.log({
//     originalPrice,
//     discount,
//     priceDiscounted,
//     priceAdjusted
// });

function applyPriceDiscounted (originalPrice, discount){
    const priceDiscounted = 100 - discount;
    const priceAdjusted = (originalPrice * priceDiscounted) / 100;

    return priceAdjusted;
}

function onClickButtonPriceDiscount (){
    const inputPrice = document.getElementById("inputPrice")
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount")
    const discountValue = inputDiscount.value;

    const resultPrice = document.getElementById("resultPrice");

    const finalPrice = applyPriceDiscounted (priceValue, discountValue)

    resultPrice.innerText = "El precio final es: $" + finalPrice;
}

//Descuentos con objetos

const oxford = {
    name: 'Oxford',
    price: 1400,
    picture: './Oxford.jpg'
};

const pradera = {
    name: 'Pradera',
    price: 1890,
    picture: './Pradera.jpg'
};

const queen = {
    name: 'Queen',
    price: 2300,
    picture: './Queen.jpg'
};

const dresses = [oxford, pradera, queen];
const discounts = ['Primeriza10', 'MeCasoHoy', 'SoyTuAmiga', 'MeDebesUna'];

function dressDiscount () {

}

function thanks(){
    prompt ('¡Gracias por tu compra!');
}