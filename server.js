// require dotenv so that I can use the .env fil
require('dotenv').config();
const express = require('express');
// require mongoose so that I can connect to my db
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();
const port = process.env.port || 3000;

const Pokemon = require('./models/pokemon');
const jsxViewEngine = require('jsx-view-engine');


// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());


app.use((req, res, next) => {
    console.log('Middleware: I run for all routes');
    next();
});

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.use(methodOverride('_method'));



app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App!');
});


// I - INDEX - dsiplays a list of all Pokemon characters

app.get('/pokemon', async (req, res) => {
    //res.send(pokemon)
    //res.render('Index.jsx', {pokemon} )
    try{
        const foundPokemon = await Poke.find({});
        res.status(200).render('Index', {pokemon: foundPokemon})
    } catch (err){
        res.status(400).send(err);
    }
})

// N - NEW - allows a user to input a new fruit
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

// S - SHOW - show route displays details of an individual Pokemon
app.get('/pokemon/:id',  (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    res.send(req.params.id)
})

app.listen(port, () =>{
    console.log(`Now Listening on port ${port}. http://localhost:${port}`)
})