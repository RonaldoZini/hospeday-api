import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Recebimento = sequelize.define('recebimento', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },        
    parcela: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valor_total: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    tipo_recebimento: {
        type: Sequelize.STRING(40),
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
});

export default Recebimento;