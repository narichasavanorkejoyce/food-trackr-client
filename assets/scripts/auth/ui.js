'use strict'
const store = require('../store.js')

const successSignUp = (data) => {
  // console.log(data)
  $('#sign-up-response').text('Awesome! Now, please sign in.')
}

const failureSignUp = () => {
  // console.error(error)
  $('#sign-up-response').text('User already exists. Please sign in.')
}

const signInSuccess = (data) => {
  store.user = data.user
  // console.log(store)
  $('#sign-in-response').text('Success! User has signed in.')
  $('#sign-in-jumbotron').hide()
  $('#sign-up-jumbotron').hide()
  $('.food-add-shop').show()
  $('.navbar-nav').show()
  $('.navbar-toggle').show()
  $('#instr-jumbotron').fadeIn()
}

const signInFail = () => {
  // console.error(error)
  $('#sign-in-response').text('Wrong password. Please try again.')
}

const signOutSuccess = () => {
  store.user = null
  // console.log(store)
  $('#sign-out-response').text('User has signed out!')
  $('#sign-out-jumbotron').delay(800).fadeOut('fast')
  $('.food-add-shop').delay(800).hide()
  $('.navbar-nav').delay(800).hide()
  $('.navbar-toggle').delay(800).hide()
  $('#intro-jumbotron').delay(1600).fadeIn()
}

const changePasswordSuccess = () => {
  $('#change-pwd-inst').text('Password successfully changed!')
  // console.log('Password Successfully Changed.')
  $('#change-password-jumbotron').delay(800).fadeOut('fast')
  $('#instr-jumbotron').delay(1600).fadeIn()
}

const changePasswordFail = () => {
  // console.error(error)
  $('#change-pwd-inst').text('Wrong original password. Please try again.')
}

const failure = () => {
  // console.error(error)
}

module.exports = {
  failure,
  signInSuccess,
  signInFail,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFail,
  failureSignUp,
  successSignUp
}
