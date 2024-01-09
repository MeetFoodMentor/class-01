const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserTest = require('./models/userTest');

app.get('/', [], async (req, res) => {
  const user = new UserTest({
    firstName: 'Max',
    userName: 'max003',
  });

  await user.save();

  res.send('<h2>Hello from Express.js server!!!</h2>');
});

mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.4srzpru.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'class1-test',
    },
  )
  .then(() => {
    console.log('Database Connection is ready...');
    app.listen(3000);
    console.log('server listening on port 3000');
  })

  .catch((err) => {
    console.log(err);
  });
