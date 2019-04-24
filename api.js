'use strict';

const Api = require('claudia-api-builder');
const api = new Api();

const getPizzas = require('./handlers/get-pizzas');
const getOrders = require('./handlers/get-orders');
const orderPizza = require('./handlers/create-order');
const updatePizza = require('./handlers/update-order');
const deleteOrder = require('./handlers/delete-order');

api.get('/', () => {
  return 'Pizza api. Use the /pizzas route';
});

api.get('/pizzas', () => {
  return getPizzas();
});

api.get(
  '/pizzas/{id}',
  request => {
    return getPizzas(request.pathParams.id);
  },
  { error: 404 }
);
api.get('/orders', () => {
  return getOrders();
});
api.get(
  '/orders/{id}',
  request => {
    return getOrders(request.pathParams.id);
  },
  { error: 500 }
);
api.post(
  '/orders',
  request => {
    return orderPizza(request.body);
  },
  { error: 400 }
);
api.put(
  '/orders/{id}',
  request => {
    return updatePizza(request.pathParams.id, request.body);
  },
  { error: 400 }
);
api.delete(
  '/orders/{id}',
  request => {
    return deleteOrder(request.pathParams.id);
  },
  { error: 400 }
);

module.exports = api;
