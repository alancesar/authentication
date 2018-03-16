const uuid = require('uuid/v1');
const mongoose = require('mongoose');
const roles = require('../roles/roles');

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: roles.user },
  uuid: { type: String, default: uuid() },
  createdAd: { type: Date, default: Date.now },
});

module.exports = mongoose.model('user', UserSchema);
