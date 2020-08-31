import Reserva from '../models/reserva';

export async function findAll(req, res) {
    const reservas = await Reserva.findAll();
    try {
        res.json(reservas);
    } catch (e) {
        res.status(500).json({
            message: 'Error',
            data: {}
        });
    }
}

export async function findById(req, res) {
    const { id } = req.params;

    try {
        const reserva = await Reserva.findOne({
            where: {
                id: id
            }
        })
        res.json(reserva);
    } catch (e) {
        res.status(500).json({
            message: 'Error',
            data: {}
        });
    }
}

export async function create(req, res) {
    try {
        let reserva = await Reserva.create({
            cliente_id : req.body.cliente_id,
            apartamento_id : req.body.apartamento_id,
            recebimento_id : req.body.recebimento_id,
            checkin : req.body.checkin,
            checkout : req.body.checkout,
            hora_checkin : req.body.hora_checkin,
            hora_checkout : req.body.hora_checkout
        });

        if (reserva) {
            return res.json({
                message: 'OK',
                data: reserva
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Error',
            data: {}
        });
    }
}

export async function remove(req, res) {
    const { id } = req.params;

    try {
        const count = await Reserva.destroy({
            where: {
                id: id
            }
        });

        res.json({
            message: 'OK',
            count: count
        });
    } catch (e) {
        res.status(500).json({
            message: 'Error',
            data: {}
        });
    }
}

export async function update(req, res) {
    const { id } = req.params;

    try {
        const count = await Reserva.update({
            cliente_id : req.body.cliente_id,
            apartamento_id : req.body.apartamento_id,
            recebimento_id : req.body.recebimento_id,
            checkin : req.body.checkin,
            checkout : req.body.checkout,
            hora_checkin : req.body.hora_checkin,
            hora_checkout : req.body.hora_checkout
        }, {
            where: {
                id: id
            }
        });

        res.json({
            message: 'OK',
            count: count
        });
    } catch (e) {
        res.status(500).json({
            message: 'Error',
            data: {}
        });
    }
}