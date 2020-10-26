import express = require('express');
import cors = require('cors');
import mongoose = require('mongoose');
import * as http from 'http';


const app = express();
app.use(cors());
app.use(express.json());

const db_url = "mongodb+srv://koen:banaan69@deck-base.8wc6n.mongodb.net/test"
console.log(db_url);
app.get('/', (req: express.Request, res: express.Response) => {
    res.send('<h1>Hello World!</h1>');
})

mongoose.connect(db_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.use("/api/books", require("./routes/book"));

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);
server.listen(PORT);
server.on("listening", () => {
    console.info(`Server is running on http://localhost:${PORT}`);
})