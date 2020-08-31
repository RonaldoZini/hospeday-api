import Cliente from '../models/cliente';

export async function findAll(req, res) {
    const clientes = await Cliente.findAll();
    try {
        res.json(clientes);
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
        const cliente = await Cliente.findOne({
            where: {
                id: id
            }
        })
        res.json(cliente);
    } catch (e) {
        res.status(500).json({
            message: 'Error',
            data: {}
        });
    }
}

export async function create(req, res) {
    try {
        let cliente = await Cliente.create({
            codigo : req.body.codigo,
            nome : req.body.nome,
            celular : req.body.celular,
            cpf : req.body.cpf,
            rg : req.body.rg,
            empresa : req.body.empresa,
            email : req.body.email,
            endereco : req.body.endereco,
            cidade : req.body.cidade,
            uf : req.body.uf,
        });

        if (cliente) {
            return res.json({
                message: 'OK',
                data: cliente
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
        const count = await Cliente.destroy({
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
        const count = await Cliente.update({
            codigo : req.body.codigo,
            nome : req.body.nome,
            celular : req.body.celular,
            cpf : req.body.cpf,
            rg : req.body.rg,
            empresa : req.body.empresa,
            email : req.body.email,
            endereco : req.body.endereco,
            cidade : req.body.cidade,
            uf : req.body.uf,
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