function createOrder(order) {
  if (!order || !order.pizzaId || !order.address)
    throw new Error('To order pizza please provide type and address');
  return {};
}

module.exports = createOrder;
