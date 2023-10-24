const express = require('express');
const controller = require('../controllers/bootcamp');
const rounter = express.Router();



rounter.route('/')
.get(controller.getBootCamp)
.get(controller.createBootcamp)

rounter.route('/:id')
.get(controller.getBootCamp)
.get(controller.updateBootcamp)
.get(controller.deleteBootcamp)


module.exports = rounter