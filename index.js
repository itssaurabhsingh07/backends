import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello BhaiSahabh' });
});

app.get('/', (res, res) => {
  res.status(200).json({ message: 'Hello BhaiSahabh' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server is Responding');
});
