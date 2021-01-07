const express = require('express');
const routes = require('./routes/index');
const path = require('path');
require('./config/db')();

const PORT = process.env.port || 1000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/", routes);

app.use(express.static("client/build"));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"))
})

app.listen(PORT, () => {
    console.log(`Server works on ${PORT} port!`)
})