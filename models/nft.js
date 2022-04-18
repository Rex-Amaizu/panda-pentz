const Joi = require('joi');
const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
  gallery_name: {
    type: String,
    required: false
  },
  gallery_image: {
    type: String,
    required: false
  },
  nfts: {
    type: Object,
    required: false
  }
});

const Nft = mongoose.model('Nft', nftSchema);

exports.Nft = Nft;