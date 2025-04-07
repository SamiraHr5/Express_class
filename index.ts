import express from 'express';
import studentRoutes from './src/routes/studentRoutes';

const app = express();
const port = 3003;

app.use('/api', studentRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});