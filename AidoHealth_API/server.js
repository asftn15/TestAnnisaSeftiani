const express = require('express');
const insuranceRoutes = require('./src/insurance/routes');
const app = express();
const port = 5000;
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  });

app.use('', insuranceRoutes);

app.listen(port, () => {
    console.log(`server app is running on port ${port}.`);
});