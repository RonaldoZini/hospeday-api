"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _apartamento = _interopRequireDefault(require("./apartamento"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Hotel = _database.sequelize.define('hotel', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  razao_social: {
    type: _sequelize["default"].STRING(50),
    allowNull: false
  },
  cnpj: {
    type: _sequelize["default"].STRING(50),
    allowNull: false
  },
  endereco: {
    type: _sequelize["default"].STRING(50)
  },
  numero_endereco: {
    type: _sequelize["default"].STRING(6)
  },
  bairro: {
    type: _sequelize["default"].STRING(50)
  },
  cidade: {
    type: _sequelize["default"].STRING(50)
  },
  uf: {
    type: _sequelize["default"].STRING(2)
  },
  telefone: {
    type: _sequelize["default"].STRING(15)
  }
}, {
  freezeTableName: true,
  timestamps: false
});

Hotel.hasMany(_apartamento["default"], {
  foreignKey: 'hotel_id',
  sourceKey: 'id'
});

_apartamento["default"].belongsTo(Hotel, {
  foreignKey: 'hotel_id',
  sourceKey: 'id'
});

var _default = Hotel;
exports["default"] = _default;