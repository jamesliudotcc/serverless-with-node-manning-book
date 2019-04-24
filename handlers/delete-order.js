const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

function deleteOrder(orderId) {
  return docClient
    .delete({
      TableName: 'pizza-orders',
      Key: { orderId },
    })
    .promise()
    .then(result => result.Item);
}
module.exports = deleteOrder;
