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

function onClickDressDiscount() {
    const dress = document.getElementById("inputReference")
    const discountedAmount = document.getElementById("inputCoupons")
debbuger
    console.log(dress);
    console.log(discountedAmount);
    // function finalPrice() {
    //     if (inputPrice == 'Oxford', discountedAmount == PrimeraCompra){
    //         const priceAdjusted1 = (oxford.price * 90) / 100;
    //         return priceAdjusted1
    //     }else if(inputPrice == 'Oxford', discountedAmount == Aniversario50off){
    //         const priceAdjusted2 = (oxford.price * 50) / 100;
    //         return priceAdjusted2
    //     }else if(inputPrice == 'Oxford', discountedAmount == NuevaPromo){
    //         const priceAdjusted3 = (oxford.price * 89) / 100;
    //         return priceAdjusted3
    //     }
    // }
    const finalPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio final es: $" + finalPrice;
}

function thanks(){
    alert ('¡Gracias por tu compra!');
    location.reload(forceGet)
}