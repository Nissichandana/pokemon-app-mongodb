const mongoose  = require('mongoose');

const pokeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: { type: URL, required: true},
    //readyToEat: Boolean
});

const Poke = mongoose.model('Poke', pokeSchema);

module.exports = Poke;