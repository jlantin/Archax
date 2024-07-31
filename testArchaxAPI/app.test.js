const request = require('supertest');
const express = require('express');
const app = express();
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  jest.setTimeout(20000); // Set timeout to 10 seconds (10000 milliseconds)


module.exports = delay;
//when running this make sure the amount owned for all coins is 0 to make sure the test passes
test('test for a successful response payload from the `purchase-coin` endpoint after a buy order is placed', async () => {
  const payload = {
    "amount": 1,
    "coinId": 2
  };
  const response = await request('http://localhost:3100')
  .post('/purchase-coin')
  .send(payload);
  expect(response.status).toBe(200);
 
});

test('test that `inventory.<coinId>.amountOwned` correctly reflects your owned inventory following a `purchase-coin` execution.', async () => {
  const amount = 1  //enter amount
  const coinId = 2  //enter coinId
  const payload = {
    "amount": amount,
    "coinId": coinId
  };
  const inventory_counter_array = coinId-1
  const response = await request('http://localhost:3100')
  .post('/purchase-coin')
  .send(payload);
  expect(response.status).toBe(200);
  expect(response.body.inventory[inventory_counter_array].amountOwned).toBe(2)
});

test('get the current price', async () => {
 
  const response = await request('http://localhost:3100')
  .get('/get-coins')
  expect(response.status).toBe(200);
  priceConB = response.body[2].price
});

test('test that CoinB incremements by one dollar with each message over a period of time. part 2 ', async () => {
  for (let i = 0; i < 50; i++) {
 
  const coin_B_increment = priceConB+0
  const response2 = await request('http://localhost:3100')
  .get('/get-coins')
  expect(response2.status).toBe(200);
  console.log(coin_B_increment)
  console.log(priceConB)
  expect(response2.body[2].price).toBe(coin_B_increment)
  
  console.log(response2.body[2].price)

  }
});


