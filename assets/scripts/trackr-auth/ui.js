'use strict'
const store = require('../store.js')
const displayFoodItemsTemplate = require('../templates/get-food-items.handlebars')
const displayGroceryListTemplate = require('../templates/get-grocery-list.handlebars')

const addNewItemSuccess = (data) => {
  console.log('addNewItemSuccess worked!')
  store.item = data.item
  $('#add-item-response').text('Success!')
}

const addNewItemFail = (error) => {
  console.error(error)
  console.log('addNewItem failed!')
}

const getFoodItemsSuccess = (data) => {
  console.log(data)
  console.log('getAllItems worked!')
  const displayFoodItems = displayFoodItemsTemplate({ items: data.items })
  $('#show-food-list').append(displayFoodItems)
}

const getFoodItemsFail = (error) => {
  console.error(error)
  console.log('getAllItems failed.')
}

const getGroceryListSuccess = (data) => {
  console.log(data)
  console.log('getAllItems worked!')
  const displayGroceryList = displayGroceryListTemplate({ items: data.items })
  $('#show-grocery-list').append(displayGroceryList)
}

const getGroceryListFail = (error) => {
  console.error(error)
  console.log('getAllItems failed.')
}

const updateQuantitySuccess = (data) => {
  console.log(data)
  console.log('updateQuantity worked!')
}

const updateQuantityFail = (error) => {
  console.error(error)
  console.log('updateQuantity failed.')
}

const deleteItemSuccess = (data) => {
  console.log(data)
  console.log('item has been deleted!')
}

const deleteItemFail = (error) => {
  console.error(error)
}

module.exports = {
  addNewItemSuccess,
  addNewItemFail,
  getFoodItemsSuccess,
  getFoodItemsFail,
  getGroceryListSuccess,
  getGroceryListFail,
  updateQuantitySuccess,
  updateQuantityFail,
  deleteItemSuccess,
  deleteItemFail
}
