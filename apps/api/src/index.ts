// apps/api/src/index.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Mock data
const products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  { id: 3, name: 'Product 3', price: 39.99 },
];

// Routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/orders', (req, res) => {
  const { items } = req.body;
  // Here you would typically save the order to a database
  res.json({ message: 'Order received', orderId: Date.now() });
});

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});