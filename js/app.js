function getProductNumber(product, price, isIncrease) {
  const inputNumber = document.getElementById(product + "-number");
  let productNumber = parseInt(inputNumber.value);
  if (isIncrease == true) {
    productNumber = productNumber + 1;
  } else if (productNumber > 0) {
    productNumber = productNumber - 1;
  }
  inputNumber.value = productNumber;
  // update product total price
  const productPrice = document.getElementById(product + "-total");
  productPrice.innerText = productNumber * price;
  console.log(productPrice);
  currentBalance();
}
function getInputValue(product) {
  const inputNumber = document.getElementById(product + "-number");
  const productNumber = parseInt(inputNumber.value);
  return productNumber;
}

function currentBalance() {
  const phonePrice = getInputValue("phone") * 1219;
  const casePrice = getInputValue("case") * 59;
  const subTotal = phonePrice + casePrice;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = totalPrice;
}

document.getElementById("phone-plus").addEventListener("click", function () {
  getProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  getProductNumber("phone", 1219, false);
});
document.getElementById("case-plus").addEventListener("click", function () {
  getProductNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  getProductNumber("case", 59, false);
});
