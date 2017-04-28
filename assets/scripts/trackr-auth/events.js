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

// const onGetAllItems = function () {
//   api.getAllItems()
//   .done(ui.getAllItemsSuccess)
//   .fail(ui.getAllItemsFail)
// }
//
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
  // $('#done-adding-items').on('click', onGetAllItems)
  // $('#sign-out').on('submit', onSignOut)
  // $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  trackrHandlers
}