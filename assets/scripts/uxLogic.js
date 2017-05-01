const uxLogicHandlers = () => {
  // Hide the quantity and purchased fields - we always want these to be entered as "true"
  $('#quantity').hide()
  $('#purchased').hide()

  // Show/hide user auth jumbotrons
  // $('#sign-up-jumbotron').hide()
  // $('#sign-in-jumbotron').hide()
  // $('#change-password-jumbotron').hide()
  // $('#sign-out-jumbotron').hide()
  //
  // $('#nav-to-sign-up-form').on('click', function () {
  //   $('#sign-up-jumbotron').show()
  //   $('#sign-in-jumbotron').show()
  //   $('#intro-jumbotron').hide()
  // })

  // Show/hide food
  // $('#footer-navbar').hide()

  // Show/hide add item form
  // $('#add-item-jumbotron').hide()
}

module.exports = {
  uxLogicHandlers
}
