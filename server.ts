import express = require('express')
import cors = require('cors');
import mongoose = require('mongoose');
import * as http from 'http';


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('<h1>Hello World!</h1>');
})

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);
server.listen(PORT);
server.on("listening", () => {
    console.info(`Server is running on http://localhost:${PORT}`);
})