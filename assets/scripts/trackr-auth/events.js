'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const addNewItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addNewItem(data)
    .done(ui.addNewItemSuccess)
    .fail(ui.addNewItemFail)
  console.log('addNewItem ran!')
}

const getFoodItems = function (event) {
  event.preventDefault()
  api.getFoodItems()
    .done(ui.getFoodItemsSuccess)
    .fail(ui.getFoodItemsFail)
}

const getGroceryList = function (event) {
  event.preventDefault()
  api.getGroceryList()
    .done(ui.getGroceryListSuccess)
    .fail(ui.getGroceryListFail)
}

// const onUpdateItem = function (data) {
//   api.updateItem(data)
//   .done(ui.updateItemSuccess)
//   .fail(ui.updateItemFail)
// }
//
// const onRemoveItem = function (data) {
//   api.removeItem(data)
//   .done(ui.removeItemSuccess)
//   .fail(ui.removeItemFail)
// }

const trackrHandlers = () => {
  $('#add-item').on('submit', addNewItem)
  $('#get-food-items').on('click', getFoodItems)
  $('#get-grocery-list').on('click', getGroceryList)
}

module.exports = {
  trackrHandlers
}
