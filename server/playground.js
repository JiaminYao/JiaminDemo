import fs from 'fs';
import express from 'express';
import cors from 'cors';

const filePathJiang = './numberJiang.txt';
const filePathYao = './numberYao.txt';
let numberYao = 0;
let numberJiang = 0;
const port = 3000;
const app = express();

app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS for all routes

app.get('/jiang', (req, res) => {
    fs.readFile(filePathJiang, 'utf8', (err, data) => {
        numberJiang = parseInt(data);
        res.send({ numberJiang });
    });
});

app.get('/yao', (req, res) => {
    fs.readFile(filePathYao, 'utf8', (err, data) => {
        numberYao = parseInt(data);
        res.send({ numberYao });
    });
});

app.get('/jiang-reset', (req, res) => {
    numberJiang = 0;
    fs.writeFile(filePathJiang, numberJiang.toString(), (err) => {    
        res.send({ numberJiang });
    });
});

app.get('/jiang-increment', (req, res) => {
    numberJiang += 1;
    fs.writeFile(filePathJiang, numberJiang.toString(), (err) => {
        res.send({ numberJiang });
    });
});

// Similarly for the '/yao-reset' and '/yao-increment' routes for numberYao
app.get('/yao-reset', (req, res) => {
    numberYao = 0;
    fs.writeFile(filePathYao, numberYao.toString(), (err) => {
        res.send({ numberYao });       
    });
});

app.get('/yao-increment', (req, res) => {
    numberYao += 1;
    fs.writeFile(filePathYao, numberYao.toString(), (err) => {
        res.send({ numberYao });
    });
});


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
