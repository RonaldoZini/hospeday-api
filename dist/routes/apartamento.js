"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _apartamento = require("../controllers/apartamento.controller");

var router = (0, _express.Router)();
router.post('/', _apartamento.create);
router.get('/', _apartamento.findAll);
router.get('/:id', _apartamento.findById);
router["delete"]('/:id', _apartamento.remove);
router.put('/:id', _apartamento.update);
var _default = router;
exports["default"] = _default;