
const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port = 3001;

function generateRandomToken(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

app.post('/', (req, res) => {

    const token = generateRandomToken(30); 
    console.log(`Token: ${token}`);
    console.log(`Opa, mais uma pessoa hackeada!`);
    console.log('---------');
    return res.status(200).send();
})


app.listen(port, () => {
    console.log(`Api rodando - http://localhost:${port}`)
})

