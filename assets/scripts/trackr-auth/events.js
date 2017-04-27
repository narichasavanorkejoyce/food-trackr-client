'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onAddItem = function (data) {
  api.addItem(data)
  .done(ui.addFoodSuccess)
  .fail(ui.addFoodFail)
}

const onGetAllItems = function () {
  api.getAllItems()
  .done(ui.getAllItemsSuccess)
  .fail(ui.getAllItemsFail)
}

const onUpdateItem = function (data) {
  api.updateItem(data)
  .done(ui.updateItemSuccess)
  .fail(ui.updateItemFail)
}

const onRemoveItem = function (data) {
  api.removeItem(data)
  .done(ui.removeItemSuccess)
  .fail(ui.removeItemFail)
}

const trackrHandlers = () => {
  $('#add-item').on('submit', onAddItem)
  $('#done-adding-items').on('click', onGetAllItems)
  // $('#sign-out').on('submit', onSignOut)
  // $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  trackrHandlers
}
