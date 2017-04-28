'use strict'
const store = require('../store.js')

const addNewItemSuccess = (data) => {
  console.log('addNewItemSuccess worked!')
  store.item = data.item
}

const addNewItemFail = (error) => {
  console.error(error)
  console.log('addNewItem failed!')
}

module.exports = {
  addNewItemSuccess,
  addNewItemFail
}
