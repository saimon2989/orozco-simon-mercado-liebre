const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, '../public/')));

const PORT = 3001;
app.listen(PORT, ()=>{
    console.log(`Server is on in ${PORT}`);
})

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'views/home.html'))
})