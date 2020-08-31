"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _hotel = require("../controllers/hotel.controller");

var router = (0, _express.Router)();
router.post('/', _hotel.create);
router.get('/', _hotel.findAll);
router.get('/:id', _hotel.findById);
router["delete"]('/:id', _hotel.remove);
router.put('/:id', _hotel.update);
var _default = router;
exports["default"] = _default;