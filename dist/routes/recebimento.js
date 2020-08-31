"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _recebimento = require("../controllers/recebimento.controller");

var router = (0, _express.Router)();
router.post('/', _recebimento.create);
router.get('/', _recebimento.findAll);
router.get('/:id', _recebimento.findById);
router["delete"]('/:id', _recebimento.remove);
router.put('/:id', _recebimento.update);
var _default = router;
exports["default"] = _default;