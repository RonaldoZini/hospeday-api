"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _cliente = require("../controllers/cliente.controller");

var router = (0, _express.Router)();
router.post('/', _cliente.create);
router.get('/', _cliente.findAll);
router.get('/:id', _cliente.findById);
router["delete"]('/:id', _cliente.remove);
router.put('/:id', _cliente.update);
var _default = router;
exports["default"] = _default;