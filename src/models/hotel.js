import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Apartamento from './apartamento';

const Hotel = sequelize.define('hotel', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    razao_social: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING(50)
    },
    numero_endereco: {
        type: Sequelize.STRING(6)
    },
    bairro: {
        type: Sequelize.STRING(50)
    },
    cidade: {
        type: Sequelize.STRING(50)
    },
    uf: {
        type: Sequelize.STRING(2)
    },
    telefone: {
        type: Sequelize.STRING(15)
    }
},{
    freezeTableName: true,
    timestamps: false
});

Hotel.hasMany(Apartamento, { foreignKey: 'hotel_id', sourceKey: 'id'});
Apartamento.belongsTo(Hotel, { foreignKey: 'hotel_id', sourceKey: 'id'});

export default Hotel;