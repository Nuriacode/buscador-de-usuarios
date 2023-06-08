const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({limit:"10mb"}));

const port = 4000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
