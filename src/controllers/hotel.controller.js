import Hotel from '../models/hotel';

export async function findAll(req, res) {
    const hoteis = await Hotel.findAll();
    try {
        res.json(hoteis);
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
        const hotel = await Hotel.findOne({
            where: {
                id: id
            }
        })
        res.json(hotel);
    } catch (e) {
        res.status(500).json({
            message: 'Error',
            data: {}
        });
    }
}

export async function create(req, res) {
    try {
        let hotel = await Hotel.create({
            razao_social : req.body.razao_social,
            cnpj : req.body.cnpj,
            endereco : req.body.endereco,
            numero_endereco : req.body.numero_endereco,
            bairro : req.body.bairro,
            cidade : req.body.cidade,
            uf : req.body.uf,
            telefone : req.body.telefone,
        });

        if (hotel) {
            return res.json({
                message: 'OK',
                data: hotel
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
        const count = await Hotel.destroy({
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
        const count = await Hotel.update({
            razao_social : req.body.razao_social,
            cnpj : req.body.cnpj,
            endereco : req.body.endereco,
            numero_endereco : req.body.numero_endereco,
            bairro : req.body.bairro,
            cidade : req.body.cidade,
            uf : req.body.uf,
            telefone : req.body.telefone,
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