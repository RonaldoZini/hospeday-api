"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _apartamento = _interopRequireDefault(require("./routes/apartamento"));

var _cliente = _interopRequireDefault(require("./routes/cliente"));

var _hotel = _interopRequireDefault(require("./routes/hotel"));

var _recebimento = _interopRequireDefault(require("./routes/recebimento"));

var _reserva = _interopRequireDefault(require("./routes/reserva"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Importing routes
// Inicialization
var app = (0, _express["default"])();

var cors = require('cors'); // Middlewares


app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)()); //Permite Requisições Cross-Origin Request (CORs)

app.use(cors()); // Routes

app.use('/api/apartamento', _apartamento["default"]);
app.use('/api/cliente', _cliente["default"]);
app.use('/api/hotel', _hotel["default"]);
app.use('/api/recebimento', _recebimento["default"]);
app.use('/api/reserva', _reserva["default"]);
var _default = app;
exports["default"] = _default;