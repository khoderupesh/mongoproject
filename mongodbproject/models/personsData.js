const mongoose = require('mongoose');
const schema = mongoose.Schema;

const personsSchema = new schema({
    name: {
      type: String,
      required: [true, 'name required']
    },
    rank:{
      type: String,
    },
    available: {
      type: Boolean,
      default: false
    }
});

const person = mongoose.model('personObj', personsSchema);

module.exports = person;