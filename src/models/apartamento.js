import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Reserva from './reserva';

const Apartamento = sequelize.define('apartamento', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: Sequelize.STRING(50),
    },
    numero_apartamento: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING(15)
    },
    cama_solteiro: {
        type: Sequelize.STRING(10)
    },
    cama_casal: {
        type: Sequelize.STRING(10)
    },
    qtd_cama_solteiro: {
        type: Sequelize.INTEGER
    },
    qtd_cama_casal: {
        type: Sequelize.INTEGER
    },
    diaria: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
});

Apartamento.hasMany(Reserva, { foreignKey: 'apartamento_id', sourceKey: 'id'});
Reserva.belongsTo(Apartamento, { foreignKey: 'apartamento_id', sourceKey: 'id'});

export default Apartamento;