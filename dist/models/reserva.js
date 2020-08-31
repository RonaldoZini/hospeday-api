"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Reserva = _database.sequelize.define('reserva', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cliente_id: {
    type: _sequelize["default"].INTEGER
  },
  apartamento_id: {
    type: _sequelize["default"].INTEGER
  },
  recebimento_id: {
    type: _sequelize["default"].INTEGER
  },
  checkin: {
    type: _sequelize["default"].STRING(15),
    allowNull: false
  },
  checkout: {
    type: _sequelize["default"].STRING(15)
  },
  hora_checkin: {
    type: _sequelize["default"].STRING(15),
    allowNull: false
  },
  hora_checkout: {
    type: _sequelize["default"].STRING(15)
  }
}, {
  freezeTableName: true,
  timestamps: false
});

var _default = Reserva;
exports["default"] = _default;