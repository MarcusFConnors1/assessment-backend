const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const tictactoe = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
]

app.put('/api/tictoc/:id', (req, res) => {
    for(i = 0; i < tictactoe.length; i++){
        if(req.params.id === tictactoe){
            tictactoe.splice(i, 1)
        }
    }
    let randomIndex = Math.floor(Math.random() * tictactoe.length);
    let returningNum = tictactoe[randomIndex];
    tictactoe.splice(randomIndex, 1)
    res.status(200).send(returningNum)
})
app.listen(4004, () => console.log("Server running on 4004"));