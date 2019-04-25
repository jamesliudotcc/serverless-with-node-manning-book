const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

function deleteOrder(orderId) {
  return docClient
    .delete({
      TableName: 'pizza-orders',
      Key: { orderId },
      ConditionExpression: 'orderStatus=:pending',
      ExpressionAttributeValues: {
        ':pending': 'pending',
      },
      ReturnValues: 'ALL_OLD',
    })
    .promise()
    .then(result => result.Item);
}
module.exports = deleteOrder;
