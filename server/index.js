import express from 'express';
import cors from 'cors';

// Initialize the express app
const app = express();

// Middlewares
app.use(cors()); // Allows FE app to make requests to server from different URL
app.use(express.json()) // Automatically parse JSON sent to server

// Make data
import Chance from 'chance';
const chance = new Chance();

const animals = [...Array(250).keys()].map(id => {
    return {
        id,
        type: chance.animal(),
        age: chance.age(),
        name: chance.name(),
    }
})

// Endpoint to search for animals
app.get('', (req, res) => {
    console.log(req)
    const q = req.query.q?.toLowerCase() || '';
    const results = animals.filter(animal => animal.type.toLowerCase().includes(q));

    res.send(results);
});

app.listen(8080, () => console.log('Listening on port http://localhost:8080'));
