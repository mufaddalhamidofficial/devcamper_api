const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please add a name'], unique: true, trim: true, maxlength: [50, 'Cannot be more than 50 characters'] },
  slug: String,
  description: { type: String, required: [true, 'Please add a description'], maxlength: [500, 'Cannot be more than 500 characters'] },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'It must be a valid URL with HTTP or HTTPS',
    ],
  },
  phone: { type: String, maxlength: [20, 'Phone number cannot be longer than 20 characters'] },
  email: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please enter valid email',
    ],
  },
  address: { type: String, required: [true, 'Please enter an address'] },
  location: {
    type: { type: String, enum: ['Point'], required: false },
    coordinates: { type: [Number], required: false, index: '2dsphere' },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  careers: { type: [String], required: true, enum: ['Web Development', 'Mobile Development', 'UI/UX', 'Data Science', 'Business', 'Other'] },
  averageRating: { type: Number, min: [1, 'Rating must be at least 1'], max: [1, 'Rating cannot be more than 10'] },
  averageCost: Number,
  photo: { type: String, default: 'no-photo.jpg' },
  housing: { type: Boolean, default: false },
  jobAssistance: { type: Boolean, default: false },
  jobGuarentee: { type: Boolean, default: false },
  acceptGi: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
