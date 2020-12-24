const mongoose = require('mongoose');
const DB_NAME= 'catSchema';
const DB_URI = `mongodb://localhost/${DB_NAME}`;
mongoose.connect(DB_URI, { useNewUrlParser: true, autoIndex: true })
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Failed to connect to database', err));

  const mongoose = require('mongoose');
const catSchema = new mongoose.Schema({ 
  name: String, 
  breed: String, 
});

module.exports = mongoose.model("Cat", catSchema);

const Cat = require("./models/Cat");

function saveCat(cat) {
  const c = new Cat(cat);
  return c.save();
}

saveCat({
  name: 'Fluffykins',
  breed: 'Persian'
})
  .then(doc => {
    console.log(doc);
  })
  .catch(error => {
    console.error(error);
  });

  const fluffy = await Cat.findOne({ name: "Fluffykins" });
//returns first Fluffykins object

const cats = await Cat.find({ name: "Fluffykins" });
//returns all Fluffykins objects in an array

const cats = await Cat.find();
//returns all cat objects in an array



const fluffy = await Cat.findOne({ name: 'Fluffkins' });
fluffy.toys = ['mousie', 'catnip ball', 'string'];
const doc = await fluffy.save();
console.log(doc)
const fluffy = await Cat.findOne({ name: 'Fluffykins' });
const goodbye = await fluffy.remove();