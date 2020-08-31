import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Reserva from './reserva';

const Cliente = sequelize.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    rg: {
        type: Sequelize.STRING(10)
    },
    telefone: {
        type: Sequelize.STRING(15)
    },
    celular: {
        type: Sequelize.STRING(15)
    },
    email: {
        type: Sequelize.STRING(40)
    },
    empresa: {
        type: Sequelize.STRING(50)
    },
    cidade: {
        type: Sequelize.STRING(50)
    },
    uf: {
        type: Sequelize.STRING(2)
    }
},{
    freezeTableName: true,
    timestamps: false
});

Cliente.hasMany(Reserva, { foreignKey: 'cliente_id', sourceKey: 'id'});
Reserva.belongsTo(Cliente, { foreignKey: 'cliente_id', sourceKey: 'id'});

export default Cliente;