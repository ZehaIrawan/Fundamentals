type ApiProduct = {
  id: string;
  price: number | string;  // API is inconsistent
};

function normalizeProduct(p: ApiProduct) {
  // FIX: always return price: number
  return {
    id: p.id,
    price: Number(p.price)
  };
}

const product = normalizeProduct({ id: "1", price: "12000" });
// product.price should be a number (12000)

console.log(product,'product')


// my answer
//     price: p.price as number
// should be
//     price: Number(p.price)

// as number is NOT a conversion.

// It only tells TypeScript to trust you — it does NOT change the runtime value.