'use strict';

let tshirt = 15.678;
let panth = 90.2345;
let shoes = 123.965;
let goodsNumber = 3;

console.log((Math.max( tshirt, panth, shoes )) + ' - максимальна ціна');
console.log((Math.min( tshirt, panth, shoes )) + ' - мінімальна ціна');


let sum = tshirt +  panth + shoes;
console.log( `${sum} - сума всіх товарів`);

let clearSum  = Math.floor(Math.trunc(tshirt) + Math.trunc(panth) + Math.trunc(shoes));
console.log(`${clearSum} - чиста сума всіх товарів`);

console.log(`${(Math.round(clearSum / 100)) * 100} - сума округлена до сотень`);

let roundSum = Math.floor(tshirt +  panth + shoes);
console.log(roundSum % 2 == 0);

console.log(`${500 - sum} - ваша здача`);

console.log(`${(sum / goodsNumber).toFixed(2)} - середнє значення`);

let discount = Math.round(Math.random() * 40);
console.log(`${discount}% - рандомна знижка`);

let priceWithDiscount = panth - (panth / 100) * discount;
console.log(`${priceWithDiscount.toFixed(2)} - всого до оплати зі знижкою`);

let productionCost = panth / 2;
console.log(`${priceWithDiscount - productionCost} - чистий прибуток`);








