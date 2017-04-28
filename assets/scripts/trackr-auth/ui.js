'use strict'
const store = require('../store.js')
const displayFoodItemsTemplate = require('../templates/get-food-items.handlebars')
const displayGroceryListTemplate = require('../templates/get-grocery-list.handlebars')

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

module.exports = {
  addNewItemSuccess,
  addNewItemFail,
  getFoodItemsSuccess,
  getFoodItemsFail,
  getGroceryListSuccess,
  getGroceryListFail
}
