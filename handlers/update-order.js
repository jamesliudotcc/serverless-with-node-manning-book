const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

function updateOrder(orderId, request) {
  return docClient
    .update({
      TableName: 'pizza-orders',
      Key: { orderId },
      UpdateExpression: `set pizza = :p , address= :a`,
      ExpressionAttributeValues: {
        ':p': request.pizzaId,
        ':a': request.address,
      },
    })
    .promise()
    .then(result => result.Item);
  if (!order.id || !order.old.pizzaId || !order.old.address)
    throw new Error(
      'To update an order, provide an order ID and a new order, including a type and address'
    );
  return {};
}
module.exports = updateOrder;
