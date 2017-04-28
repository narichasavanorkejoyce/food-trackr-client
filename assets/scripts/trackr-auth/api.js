'use strict'

const config = require('../config')
const store = require('../store')

const addNewItem = function (data) {
  console.log(data)
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

module.exports = {
  addNewItem,
  getFoodItems
}
