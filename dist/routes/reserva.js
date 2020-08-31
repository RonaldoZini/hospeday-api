"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _reserva = require("../controllers/reserva.controller");

var router = (0, _express.Router)();
router.post('/', _reserva.create);
router.get('/', _reserva.findAll);
router.get('/:id', _reserva.findById);
router["delete"]('/:id', _reserva.remove);
router.put('/:id', _reserva.update);
var _default = router;
exports["default"] = _default;