const express = require('express');
const insuranceRoutes = require('./src/insurance/routes');
const app = express();
const port = 3000;

app.use(express.json());

app.use('', insuranceRoutes);

app.listen(port, () => {
    console.log(`server app is running on port ${port}.`);
});