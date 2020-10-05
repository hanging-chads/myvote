const { Schema, model } = require('mongoose');

const ballotSchema = new Schema({
  // what info do we need to store.
  userId: {
    type: String,
    unique: true,
    required: true
  },
  president: String,
  house: String,
  senate: String,
  districtAttorney: String,
  schoolBoard: String,
  trafficCourt: String,
  juvenileCourt: String,
  criminalCourt: String,
  civilCourt: String
});

const Ballot = model('Ballot', ballotSchema);

module.exports = Ballot;