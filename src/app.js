const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, '../public/')));

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`Server is on in ${PORT}`);
})

app.get('/home', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.post('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});