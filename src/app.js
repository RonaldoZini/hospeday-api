import express, { json } from 'express';
import morgan from 'morgan';

// Importing routes
import apartamentoRoutes from './routes/apartamento';
import clienteRoutes from './routes/cliente';
import hotelRoutes from './routes/hotel';
import recebimentoRoutes from './routes/recebimento';
import reservaRoutes from './routes/reserva';

const cors = require('cors');

// Inicialization
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json());

// Enable Cross-Origin Request (Cors)
app.use(cors());

// Routes
app.use('/api/apartamento', apartamentoRoutes);
app.use('/api/cliente', clienteRoutes);
app.use('/api/hotel', hotelRoutes);
app.use('/api/recebimento', recebimentoRoutes);
app.use('/api/reserva', reservaRoutes);

export default app;
