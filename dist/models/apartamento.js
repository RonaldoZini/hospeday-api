"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _reserva = _interopRequireDefault(require("./reserva"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Apartamento = _database.sequelize.define('apartamento', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: _sequelize["default"].STRING(50)
  },
  numero_apartamento: {
    type: _sequelize["default"].INTEGER,
    allowNull: false
  },
  telefone: {
    type: _sequelize["default"].STRING(15)
  },
  cama_solteiro: {
    type: _sequelize["default"].STRING(10)
  },
  cama_casal: {
    type: _sequelize["default"].STRING(10)
  },
  qtd_cama_solteiro: {
    type: _sequelize["default"].INTEGER
  },
  qtd_cama_casal: {
    type: _sequelize["default"].INTEGER
  },
  diaria: {
    type: _sequelize["default"].FLOAT,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
});

Apartamento.hasMany(_reserva["default"], {
  foreignKey: 'apartamento_id',
  sourceKey: 'id'
});

_reserva["default"].belongsTo(Apartamento, {
  foreignKey: 'apartamento_id',
  sourceKey: 'id'
});

var _default = Apartamento;
exports["default"] = _default;