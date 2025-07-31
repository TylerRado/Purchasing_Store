
var subtotal1 = 0;
var subtotal2 = 0;
var subtotl3 = 0;
var subtotal = 0;

function CalcSubTotal1() {
  var price1  = parseInt(document.Order.Price1.value);
  var quantity1  = parseInt(document.Order.Quantity1.value);
  subtotal1 = quantity1 * price1;
  document.Order.SubTotal1.value = subtotal1;
 }
 
function CalcSubTotal2(){
   var price2  = parseInt(document.Order.Price2.value);
   var quantity2  = parseInt(document.Order.Quantity2.value);
   subtotal2 = quantity2 * price2;
   document.Order.SubTotal2.value = subtotal2;  
  }
  
function CalcSubTotal3() {
  var price3  = parseInt(document.Order.Price3.value);
  var quantity3  = parseInt(document.Order.Quantity3.value);
  subtotal3 = quantity3 * price3;
  document.Order.SubTotal3.value = subtotal3;
}            

function CalcTotals() {
  subtotal = subtotal1 + subtotal2 + subtotal3;
  var vat = parseInt(subtotal * 0.15);
  var Total = subtotal + vat;
  document.Order.VAT.value = vat;
  document.Order.Total.value = Total;
}

document.getUserById("clear").addEventListener("click",CalcTotals);
document.getUserById("clear").addEventListener("click", CalcSubTotal1);
document.getUserById("clear").addEventListener("click", CalcSubTotal2);
document.getUserById("clear").addEventListener("click", CalcSubTotal3);


