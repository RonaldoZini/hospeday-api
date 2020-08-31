import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Reserva = sequelize.define('reserva', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cliente_id: {
        type: Sequelize.INTEGER
    },
    apartamento_id: {
        type: Sequelize.INTEGER
    },
    recebimento_id: {
        type: Sequelize.INTEGER
    },
    checkin: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    checkout: {
        type: Sequelize.STRING(15),
    },
    hora_checkin: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    hora_checkout: {
        type: Sequelize.STRING(15),
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Reserva;