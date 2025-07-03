const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('YOUR_MONGODB_CONNECTION_STRING', { // Replace with your actual MongoDB connection string
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Phan Plus Backend is running!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});