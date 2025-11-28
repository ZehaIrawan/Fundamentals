let discount = 10;

function getPrice(price, discount = discount) {
  return price - discount;
}

console.log(getPrice(100));