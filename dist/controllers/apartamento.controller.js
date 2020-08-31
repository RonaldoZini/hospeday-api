"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAll = findAll;
exports.findById = findById;
exports.create = create;
exports.remove = remove;
exports.update = update;

var _apartamento = _interopRequireDefault(require("../models/apartamento"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function findAll(_x, _x2) {
  return _findAll.apply(this, arguments);
}

function _findAll() {
  _findAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var apartamentos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _apartamento["default"].findAll();

          case 3:
            apartamentos = _context.sent;
            res.json(apartamentos);
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: 'Error',
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _findAll.apply(this, arguments);
}

function findById(_x3, _x4) {
  return _findById.apply(this, arguments);
}

function _findById() {
  _findById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, apartamento;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _apartamento["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            apartamento = _context2.sent;
            res.json(apartamento);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              message: 'Error',
              data: {}
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _findById.apply(this, arguments);
}

function create(_x5, _x6) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var apartamento;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _apartamento["default"].create({
              descricao: req.body.descricao,
              numero_apartamento: req.body.numero_apartamento,
              telefone: req.body.telefone,
              cama_solteiro: req.body.cama_solteiro,
              cama_casal: req.body.cama_casal,
              qtd_cama_solteiro: req.body.qtd_cama_solteiro,
              qtd_cama_casal: req.body.qtd_cama_casal,
              diaria: req.body.diaria
            });

          case 3:
            apartamento = _context3.sent;

            if (!apartamento) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'OK',
              data: apartamento
            }));

          case 6:
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'Error',
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _create.apply(this, arguments);
}

function remove(_x7, _x8) {
  return _remove.apply(this, arguments);
}

function _remove() {
  _remove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, count;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _apartamento["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            count = _context4.sent;
            res.json({
              message: 'OK',
              count: count
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            res.status(500).json({
              message: 'Error',
              data: {}
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _remove.apply(this, arguments);
}

function update(_x9, _x10) {
  return _update.apply(this, arguments);
}

function _update() {
  _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, count;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return _apartamento["default"].update({
              descricao: req.body.descricao,
              numero_apartamento: req.body.numero_apartamento,
              telefone: req.body.telefone,
              cama_solteiro: req.body.cama_solteiro,
              cama_casal: req.body.cama_casal,
              qtd_cama_solteiro: req.body.qtd_cama_solteiro,
              qtd_cama_casal: req.body.qtd_cama_casal,
              diaria: req.body.diaria
            }, {
              where: {
                id: id
              }
            });

          case 4:
            count = _context5.sent;
            res.json({
              message: 'OK',
              count: count
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            res.status(500).json({
              message: 'Error',
              data: {}
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return _update.apply(this, arguments);
}