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

const getFoodItemsAgain = function () {
  // event.preventDefault()
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

const getGroceryListAgain = function () {
  // event.preventDefault()
  api.getGroceryList()
    .done(ui.getGroceryListSuccess)
    .fail(ui.getGroceryListFail)
}

const deleteItem = function () {
  console.log('deleteItem ran!')
  event.preventDefault()
  const id = $(this).attr('data-id')
  console.log('id is:' + id)
  api.deleteItem(id)
    .done(ui.deleteItemSuccess, getFoodItemsAgain)
    .fail(ui.deleteItemFail)
}

const updateQuantity = function (event) {
  event.preventDefault()
  console.log('updateQuantity button works')
  const id = $(this).attr('data-id')
  console.log('id is:' + id)
  api.updateQuantity(id)
    .done(ui.updateQuantitySuccess, getGroceryListAgain)
    .fail(ui.updateQuantityFail)
  console.log('updateQuantity ran!')
}

const trackrHandlers = () => {
  $('#add-item').on('submit', addNewItem)
  $('#get-food-items').on('click', getFoodItems)
  $('#get-grocery-list').on('click', getGroceryList)
  $(document).on('click', '.remove-item', deleteItem)
  $(document).on('click', '.move-to-grocery-list', updateQuantity)
}

module.exports = {
  trackrHandlers
}
