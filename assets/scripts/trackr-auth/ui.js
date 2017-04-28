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

const getFoodItemsSuccess = (data) => {
  console.log(data)
  console.log('getAllItems worked!')
}

const getFoodItemsFail = (error) => {
  console.error(error)
  console.log('getAllItems failed.')
}

module.exports = {
  addNewItemSuccess,
  addNewItemFail,
  getFoodItemsSuccess,
  getFoodItemsFail
}
