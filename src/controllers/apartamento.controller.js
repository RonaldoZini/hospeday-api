import Apartamento from '../models/apartamento';

export async function findAll(req, res) {
    try {
        const apartamentos = await Apartamento.findAll();

        res.json(apartamentos);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Error',
            data: {}
        });
    }
}

export async function findById(req, res) {
    const { id } = req.params;

    try {
        const apartamento = await Apartamento.findOne({
            where: {
                id: id
            }
        })
        res.json(apartamento);
    } catch (e) {
        res.status(500).json({
            message: 'Error',
            data: {}
        });
    }
}

export async function create(req, res) {
    try {
        let apartamento = await Apartamento.create({
            descricao: req.body.descricao,
            numero_apartamento: req.body.numero_apartamento,
            telefone: req.body.telefone,
            cama_solteiro: req.body.cama_solteiro,
            cama_casal: req.body.cama_casal,
            qtd_cama_solteiro: req.body.qtd_cama_solteiro,
            qtd_cama_casal: req.body.qtd_cama_casal,
            diaria: req.body.diaria,
        });

        if (apartamento) {
            return res.json({
                message: 'OK',
                data: apartamento
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
        const count = await Apartamento.destroy({
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
        const count = await Apartamento.update({
            descricao: req.body.descricao,
            numero_apartamento: req.body.numero_apartamento,
            telefone: req.body.telefone,
            cama_solteiro: req.body.cama_solteiro,
            cama_casal: req.body.cama_casal,
            qtd_cama_solteiro: req.body.qtd_cama_solteiro,
            qtd_cama_casal: req.body.qtd_cama_casal,
            diaria: req.body.diaria,
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