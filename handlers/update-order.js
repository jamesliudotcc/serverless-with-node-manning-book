const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

function updateOrder(orderId) {
  
  if (!order.id || !order.old.pizzaId || !order.old.address)
    throw new Error(
      'To update an order, provide an order ID and a new order, including a type and address'
    );
  return {};
}
module.exports = updateOrder;
