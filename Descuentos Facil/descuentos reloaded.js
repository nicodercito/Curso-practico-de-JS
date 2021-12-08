let originalPrice = 120;
const discount = 18;



// const priceDiscounted = 100 - discount;
// const priceAdjusted = (originalPrice * priceDiscounted) / 100;



//Descuentos con objetos

// const discounts = ["Primeriza10", "MeCasoHoy", "SoyTuAmiga", "MeDebesUna"];


function onClickDressDiscount() {
    const dress = document.getElementById("fullPrice")
    const discountedAmount = document.getElementById("textDiscount")
    const converter = string(discountedAmount);

    // console.log(dress);
    // console.log(discountedAmount);
    const operation = document.getElementById("resultPrice");

    function finalPrice() {
        const operation = document.getElementById("resultPrice");
        if (converter == "oxford"){
            const priceAdjusted1 = (dress * 90) / 100;
            return operation.innerText = "El precio final es: $" + priceAdjusted1;;
        }else if(converter == "primavera"){
            const priceAdjusted2 = (dress * 50) / 100;
            return operation.innerText = "El precio final es: $" + priceAdjusted2;
        }else if(converter == "ojala"){
            const priceAdjusted3 = (dress * 89) / 100;
            return operation.innerText = "El precio final es: $" + priceAdjusted3;
        }
    }
    finalPrice();
    // operation.innerText = "El precio final es: $" + finalPrice;
};

function thanks(){
    alert ('¡Gracias por tu compra!');
    location.reload(forceGet)
}



const discounts = [
    "PrimeraCompra10off", 
    "VestidoPrado", 
    "SoyTuPrimo",
   "PorCuentaDeLaCasa"
];

function onClickButtonPriceDiscount() {
        const inputPrice = document.getElementById("InputPrice");
        const priceValue = inputPrice.value;
        
        const inputCoupon = document.getElementById("inputDiscount");
        const couponValue = inputCoupon.value;
      
        let descuento;
      
            switch(couponValue) {
                case discounts[0]: // "JuanDC_es_Batman"
                    descuento = 10;
                break;
                case discounts[1]: // "pero_no_le_digas_a_nadie"
                    descuento = 30;
                break;
                case discounts[2]: // "es_un_secreto"
                    descuento = 85;
                break;
                case discounts[3]: // "es_un_secreto"
                    descuento = 100;
                break;
                default: 
                    descuento = 0;
            }
        
        const priceDiscounted = 100 - descuento;
            
        function calcularPrecioConDescuento (){
                const priceAdjusted = (priceValue * priceDiscounted) / 100;
            
                return priceAdjusted;
            }

        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("ResultP");
        
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

function reloadDiscounts(){
    alert("¡Gracias por tu compra!");
    location.reload();
};