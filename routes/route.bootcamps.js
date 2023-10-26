const express = require('express');
const controller = require('../controllers/controller.bootcamp');
const rounter = express.Router();



rounter.route('/')
.get(controller.getAllBootCamp)
.post(controller.createBootcamp)

rounter.route('/:id')
.get(controller.getBootCamp)
.put(controller.updateBootcamp)
.delete(controller.deleteBootcamp)


module.exports = rounter

