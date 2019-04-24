const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

function createOrder(request) {
  if (!request || !request.pizzaId || !request.address)
    throw new Error('To order pizza please provide type and address');
  return docClient
    .put({
      TableName: 'pizza-orders',
      Item: {
        orderId: uuid(),
        pizza: request.pizza,
        address: request.address,
        orderStatus: 'pending',
      },
    })
    .promise()
    .then(res => {
      console.log('Order is saved :', res);
      return res;
    })
    .catch(savedError => {
      console.log('Error', savedError);
      throw savedError;
    });
}

module.exports = createOrder;
