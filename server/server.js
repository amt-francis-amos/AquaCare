import express from 'express';
import cors from 'cors';
import 'dotenv/config'; 


const app = express();
const PORT = process.env.PORT || 5000;


connectDB();

// Middlewares
app.use(express.json());
app.use(cors());







app.listen(PORT, () =>{
    console.log(`server is running on PORT: ${PORT}`);
})
