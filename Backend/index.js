const express = require('express');
const mongoConnection = require('./DBconnection')
const app = express();
const cors  = require('cors');
const router = require("./routes/auth")
app.use(express.json());
mongoConnection()

app.use(cors())
app.use("/api", router);
app.use("/api/", require('./routes/login'));
app.use("/api/", require('./routes/Products'))
app.get("/", function(req, res) {
    res.send('Hello World!');
})


const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});