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

const deleteItem = function () {
  console.log('deleteItem ran!')
  event.preventDefault()
  const data = $(this).attr('data-id')
  api.deleteItem(data)
    .done(ui.deleteItemSuccess(data))
    .fail(ui.deleteItemFail)
}

const updateQuantity = function (event) {
  event.preventDefault()
  console.log('updateQuantity button works')
  const id = $(this).attr('data-id')
  console.log(id)
  api.updateQuantity(id)
    .done(ui.updateQuantitySuccess)
    .fail(ui.updateQuantityFail)
  console.log('updateQuantity ran!')
}

const trackrHandlers = () => {
  $('#add-item').on('submit', addNewItem)
  $('#get-food-items').on('click', getFoodItems)
  $('#get-grocery-list').on('click', getGroceryList)
  $('.remove-item').on('click', deleteItem)
  $('.move-to-grocery-list').on('click', updateQuantity)
}

module.exports = {
  trackrHandlers
}
