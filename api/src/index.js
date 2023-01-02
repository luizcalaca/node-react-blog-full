import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import upload from './utils/upload';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import postRoutes from './routes/posts';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(morgan('combined'));

app.use(cookieParser());
app.post('/api/upload', upload.single('file'), (req, res) => {
  const { file } = req;
  res.status(200).json(file.filename);
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(8800);
