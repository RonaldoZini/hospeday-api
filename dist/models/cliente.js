"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _reserva = _interopRequireDefault(require("./reserva"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cliente = _database.sequelize.define('cliente', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: _sequelize["default"].STRING(30),
    allowNull: false
  },
  cpf: {
    type: _sequelize["default"].STRING(20),
    allowNull: false
  },
  rg: {
    type: _sequelize["default"].STRING(10)
  },
  telefone: {
    type: _sequelize["default"].STRING(15)
  },
  celular: {
    type: _sequelize["default"].STRING(15)
  },
  email: {
    type: _sequelize["default"].STRING(40)
  },
  empresa: {
    type: _sequelize["default"].STRING(50)
  },
  cidade: {
    type: _sequelize["default"].STRING(50)
  },
  uf: {
    type: _sequelize["default"].STRING(2)
  }
}, {
  freezeTableName: true,
  timestamps: false
});

Cliente.hasMany(_reserva["default"], {
  foreignKey: 'cliente_id',
  sourceKey: 'id'
});

_reserva["default"].belongsTo(Cliente, {
  foreignKey: 'cliente_id',
  sourceKey: 'id'
});

var _default = Cliente;
exports["default"] = _default;