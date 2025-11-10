// ### **2) Group Items by Key**

const orders = [
  { id: 1, user: "A", amount: 100 },
  { id: 2, user: "B", amount: 50 },
  { id: 3, user: "A", amount: 75 },
];

// {
//   A: [100, 75],
//   B: [50]
// }

const groupedOrders = orders.reduce((acc, order) => {
  if (acc[order.user]) {
    acc[order.user].push(order.amount);
  } else {
    acc[order.user] = [order.amount];
  }
  return acc;
}, {});

console.log(groupedOrders);


