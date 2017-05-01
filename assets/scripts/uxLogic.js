const uxLogicHandlers = () => {
  // Hide the quantity and purchased fields - we always want these to be entered as "true"
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
  })

  // Show/hide sign out jumbotron
  $('#sign-out-jumbotron').hide()
  $('#sign-out-option').on('click', function () {
    $('#sign-out-jumbotron').show()
    $('.navbar-collapse').collapse('hide')
  })

  // Show/hide food-add-shop footer
  $('.food-add-shop').hide()

  // Show/hide add item form
  $('#add-item-jumbotron').hide()

  // Show/hide nav bar options
  $('.navbar-nav').hide()
  $('.navbar-toggle').hide()
}

module.exports = {
  uxLogicHandlers
}
