'use strict'
const store = require('../store.js')
const displayFoodItemsTemplate = require('../templates/get-food-items.handlebars')
const displayGroceryListTemplate = require('../templates/get-grocery-list.handlebars')

const addNewItemSuccess = (data) => {
  console.log('addNewItemSuccess worked!')
  store.item = data.item
  $('#add-item-response').text('Success! Add another item or click FOOD to see all items.')
}

const addNewItemFail = (error) => {
  console.error(error)
  console.log('addNewItem failed!')
  $('#add-item-response').text('All field forms are required. Please try again.')
}

const getFoodItemsSuccess = (data) => {
  console.log(data)
  console.log('getAllItems worked!')
  $('#show-food-list').empty()
  $('#show-grocery-list').empty()
  const displayFoodItems = displayFoodItemsTemplate({ items: data.items })
  $('#show-food-list').append(displayFoodItems)
  $('#add-item-jumbotron').hide()
  $('#instr-jumbotron').hide()
  $('#change-password-jumbotron').hide()
  $('#sign-out-jumbotron').hide()
}

const getFoodItemsFail = (error) => {
  console.error(error)
  console.log('getAllItems failed.')
}

const getGroceryListSuccess = (data) => {
  console.log(data)
  console.log('getAllItems worked!')
  $('#show-food-list').empty()
  $('#show-grocery-list').empty()
  const displayGroceryList = displayGroceryListTemplate({ items: data.items })
  $('#show-grocery-list').append(displayGroceryList)
  $('#add-item-jumbotron').hide()
  $('#instr-jumbotron').hide()
  $('#change-password-jumbotron').hide()
  $('#sign-out-jumbotron').hide()
}

const getGroceryListFail = (error) => {
  console.error(error)
  console.log('getAllItems failed.')
}

const updateQuantitySuccess = (data) => {
  console.log(data)
  console.log('updateQuantity worked!')
  $('#show-food-list').empty()
}

const updateQuantityFail = (error) => {
  console.error(error)
  console.log('updateQuantity failed.')
}

const deleteItemSuccess = (data) => {
  console.log(data)
  console.log('item has been deleted!')
  $('#show-food-list').empty()
}

const deleteItemFail = (error) => {
  console.error(error)
}

const deletePurchasedItemSuccess = (data) => {
  console.log(data)
  console.log('item has been deleted!')
  $('#show-grocery-list').empty()
}

const deletePurchasedItemFail = (error) => {
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
  deleteItemFail,
  deletePurchasedItemSuccess,
  deletePurchasedItemFail
}
