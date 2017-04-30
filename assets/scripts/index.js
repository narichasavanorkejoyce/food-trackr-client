'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const trackrEvents = require('./trackr-auth/events.js')
const uxLogic = require('./uxLogic')

// On document ready
$(() => {
  setAPIOrigin(location, config)
})

// Bring in login events
$(() => {
  authEvents.addHandlers()
})

// Bring in tracker events
$(() => {
  trackrEvents.trackrHandlers()
})

// Bring in ux logic functions
$(() => {
  uxLogic.uxLogicHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
