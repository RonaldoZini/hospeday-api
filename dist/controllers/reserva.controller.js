"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAll = findAll;
exports.findById = findById;
exports.create = create;
exports.remove = remove;
exports.update = update;

var _reserva = _interopRequireDefault(require("../models/reserva"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function findAll(_x, _x2) {
  return _findAll.apply(this, arguments);
}

function _findAll() {
  _findAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var reservas;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _reserva["default"].findAll();

          case 2:
            reservas = _context.sent;

            try {
              res.json(reservas);
            } catch (e) {
              res.status(500).json({
                message: 'Error',
                data: {}
              });
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _findAll.apply(this, arguments);
}

function findById(_x3, _x4) {
  return _findById.apply(this, arguments);
}

function _findById() {
  _findById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, reserva;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _reserva["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            reserva = _context2.sent;
            res.json(reserva);
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
    var reserva;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _reserva["default"].create({
              cliente_id: req.body.cliente_id,
              apartamento_id: req.body.apartamento_id,
              recebimento_id: req.body.recebimento_id,
              checkin: req.body.checkin,
              checkout: req.body.checkout,
              hora_checkin: req.body.hora_checkin,
              hora_checkout: req.body.hora_checkout
            });

          case 3:
            reserva = _context3.sent;

            if (!reserva) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'OK',
              data: reserva
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
            return _reserva["default"].destroy({
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
            return _reserva["default"].update({
              cliente_id: req.body.cliente_id,
              apartamento_id: req.body.apartamento_id,
              recebimento_id: req.body.recebimento_id,
              checkin: req.body.checkin,
              checkout: req.body.checkout,
              hora_checkin: req.body.hora_checkin,
              hora_checkout: req.body.hora_checkout
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