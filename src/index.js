// Estaba exportado para la mierda


import app from './app.js';
import { PORT } from './config.js'
app.listen(PORT);

const cors = require('cors');
app.use(cors({
    origin: '*'
}));