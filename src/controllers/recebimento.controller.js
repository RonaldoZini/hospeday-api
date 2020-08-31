import Recebimento from '../models/recebimento';

export async function findAll(req, res) {
    const recebimentos = await Recebimento.findAll();
    try {
        res.json(recebimentos);
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
        const recebimento = await Recebimento.findOne({
            where: {
                id: id
            }
        })
        res.json(recebimento);
    } catch (e) {
        res.status(500).json({
            message: 'Error',
            data: {}
        });
    }
}

export async function create(req, res) {
    try {
        let recebimento = await Recebimento.create({
            parcela : req.body.parcela,
            valor_total : req.body.valor_total,
            tipo_recebimento : req.body.tipo_recebimento
        });

        if (recebimento) {
            return res.json({
                message: 'OK',
                data: recebimento
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
        const count = await Recebimento.destroy({
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
        const count = await Recebimento.update({
            parcela : req.body.parcela,
            valor_total : req.body.valor_total,
            tipo_recebimento : req.body.tipo_recebimento
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