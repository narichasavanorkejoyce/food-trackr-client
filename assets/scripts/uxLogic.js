const uxLogicHandlers = () => {
  // Always hide the quantity and purchased fields - we want these to be entered as "true"
  $('#quantity').hide()
  $('#purchased').hide()

  // Show/hide user sign up jumbotrons
  $('#sign-up-jumbotron').hide()
  $('#sign-in-jumbotron').hide()
  $('#nav-to-sign-up-form').on('click', function () {
    $('#sign-up-jumbotron').show()
    $('#sign-in-jumbotron').show()
    $('#intro-jumbotron').hide()
  })

  // Show/hide change password jumbotron
  $('#change-password-jumbotron').hide()
  $('#change-pwd-option').on('click', function () {
    $('#change-password-jumbotron').show()
    $('.navbar-collapse').collapse('hide')
    $('#sign-out-jumbotron').hide()
    $('#add-item-jumbotron').hide()
    $('#instr-jumbotron').hide()
    $('#grocery-list-table').empty()
    $('#food-list-table').empty()
  })

  // Show/hide sign out jumbotron
  $('#sign-out-jumbotron').hide()
  $('#sign-out-option').on('click', function () {
    $('#sign-out-jumbotron').show()
    $('.navbar-collapse').collapse('hide')
    $('#change-password-jumbotron').hide()
    $('#add-item-jumbotron').hide()
    $('#instr-jumbotron').hide()
    $('#grocery-list-table').empty()
    $('#food-list-table').empty()
  })

  // Show/hide instruction jumbotron
  $('#instr-jumbotron').hide()

  // Show/hide food-add-shop footer
  $('.food-add-shop').hide()

  // Show/hide add item form
  $('#add-item-jumbotron').hide()
  $('#show-add-form').on('click', function () {
    $('#add-item-jumbotron').show()
    $('#instr-jumbotron').hide()
    $('#food-list-table').hide()
    $('#grocery-list-table').hide()
    $('#change-password-jumbotron').hide()
    $('#sign-out-jumbotron').hide()
  })

  // Show/hide food table
  $('#get-food-items').on('click', function () {
    // $('#add-item-jumbotron').hide()
    // $('#instr-jumbotron').hide()
    // $('#show-grocery-list').hide()
    // $('#change-password-jumbotron').hide()
    // $('#sign-out-jumbotron').hide()
  })

  // Show/hide grocery list table
  $('#get-grocery-list').on('click', function () {
    // $('#instr-jumbotron').hide()
    // $('#add-item-jumbotron').hide()
    // $('#show-food-list').hide()
    // $('#change-password-jumbotron').hide()
    // $('#sign-out-jumbotron').hide()
  })

  // Show/hide nav bar options
  $('.navbar-nav').hide()
  $('.navbar-toggle').hide()
}

module.exports = {
  uxLogicHandlers
}
