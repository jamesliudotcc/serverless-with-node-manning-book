function deleteOrder(orderId) {
  if (!orderId) throw new Error('To delete an order, provide an order ID');
  return { ok: `deleting order ${orderId}` };
}
module.exports = deleteOrder;
