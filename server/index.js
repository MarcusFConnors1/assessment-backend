const express = require("express");
const cors = require("cors");
const path = require('path');

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

// app.use(express.static(path.join(__dirname, "../client/index.html")));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

const port = process.env.PORT || 4000;

const people = [
  "kyel",
  "stvev",
  "mchaiel",
  "nahtna",
  "svahanna",
  "illy",
  "anahhan"
]


app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortune", (req, res) => {
  const fortunes = ["The fortune you seek is in another cookie.",
		"A closed mouth gathers no feet.",
		"A conclusion is simply the place where you got tired of thinking.",
    "A cynic is only a frustrated optimist.",
    "A foolish man listens to his heart. A wise man listens to cookies.",
    "You will die alone and poorly dressed.",
    "A fanatic is one who can't change his mind, and won't change the subject.",
    "If you look back, you’ll soon be going that way.",
    "You will live long enough to open many fortune cookies.",
    "An alien of some sort will be appearing to you shortly.",
    "Do not mistake temptation for opportunity.",
    "Flattery will go far tonight.",
    "He who laughs at himself never runs out of things to laugh at.",
    "He who laughs last is laughing at you."
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get('/api/people/', (req, res) => {
  res.status(200).send(people)
})
app.post('/api/people', (req, res) => {
  people.push(req.body.person)
  res.status(200).send(people)
})
app.delete('/api/people/:id', (req, res) => {
  for(i = 0; i < people.length; i++){
    if(req.params.id === people[i]){
      people.splice(i, 1)
    }
  }
})
app.put('/api/people/:id', (req, res) => {
  console.log(req.body.newName)
  for(i = 0; i < people.length; i++){
    if(req.params.id === people[i]){
      people[i] = req.body.newName
    }
  }
})

app.listen(port, () => console.log(`Server running on ${port}`));
