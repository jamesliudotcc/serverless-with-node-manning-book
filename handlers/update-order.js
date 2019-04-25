const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

function updateOrder(orderId, request) {
  return docClient
    .update({
      TableName: 'pizza-orders',
      Key: { orderId },
      ConditionExpression: 'orderStatus=:pending',
      UpdateExpression: `set pizza = :p , address= :a`,
      ExpressionAttributeValues: {
        ':p': request.pizzaId,
        ':a': request.address,
        ':pending': 'pending',
      },
      ReturnValues: 'ALL_NEW',
    })
    .promise()
    .then(result => result.Attributes);
}
module.exports = updateOrder;
