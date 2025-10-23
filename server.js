import 'dotenv/config.js';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import methodOverride from 'method-override';
import path from 'path';
import studentsRouter from './routes/students'

const app = express()

// Connect to the database
mongoose.connect(provess.env.MONGO_URI)
    .then(() => console.log('Database Connected'))
    .catch((err) => console.error('MongoDB Connection error: ', err))


// Set up view engine
app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'views')) // Current working directory
app.use(express.static(path.join(process.cwd(), 'public')))

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))

app.get('/', (req, res) =>{
    
})