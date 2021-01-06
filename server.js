const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.port || 1000;
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

if (process.env.NOVE_ENV == 'production') {
    app.use(express.static('client/build'))
};

app.use(routes);

mongoose.createConnection(
    process.env.MONGO_URI || "mongodb://localhost/bookcards", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.listen(PORT, () => {
    console.log(`Server works on ${PORT} port!`)
})