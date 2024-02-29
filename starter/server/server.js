const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4004;

app.use(express.json());
app.use(cors());

const messageCtrl = require('./messageController');

app.post('/api/messages', messageCtrl.createMessage);

app.listen(PORT, () => console.log(`The server is running on Port: ${PORT}`));