'use strict'

const config = require('../config')
const store = require('../store')

const addNewItem = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getFoodItems = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/items?quantity=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getGroceryList = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/items?quantity=false',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteItem = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/items/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePurchasedItem = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/items/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateQuantity = function (id) {
  // data = store.item
  // console.log('data is: ' + id)
  // console.log('store' + store)
  return $.ajax({
    url: config.apiOrigin + '/items/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'item': {
        'quantity': 'false'
      }
    }
  })
}

module.exports = {
  addNewItem,
  getFoodItems,
  getGroceryList,
  deleteItem,
  deletePurchasedItem,
  updateQuantity
}
