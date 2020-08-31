"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Recebimento = _database.sequelize.define('recebimento', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  parcela: {
    type: _sequelize["default"].INTEGER,
    allowNull: false
  },
  valor_total: {
    type: _sequelize["default"].FLOAT,
    allowNull: false
  },
  tipo_recebimento: {
    type: _sequelize["default"].STRING(40),
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
});

var _default = Recebimento;
exports["default"] = _default;