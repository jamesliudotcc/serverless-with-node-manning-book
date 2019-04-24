const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

function deleteOrder(orderId) {
  const result = docClient
    .delete({
      TableName: 'pizza-orders',
      Key: { orderId },
    })
    .promise()
    .then(result => result.Item);
  return result;
  if (!orderId) throw new Error('To delete an order, provide an order ID');
}
module.exports = deleteOrder;
