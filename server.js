import express from "express";
import path from "path";

const app = express();
const PORT = process.env.REACT_APP_PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Front listening on PORT: ${PORT}...`)
});