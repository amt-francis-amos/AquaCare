import express from 'express';
import cors from 'cors';
import 'dotenv/config'; 
import connectDB from './config/mongoDb.js'; 
import userRoutes from './routes/userRoutes.js'; 



const app = express();
const PORT = process.env.PORT || 5000;


connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);









app.listen(PORT, () =>{
    console.log(`server is running on PORT: ${PORT}`);
})
