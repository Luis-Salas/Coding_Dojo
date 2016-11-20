const mongoose = require('mongoose')

const DragonSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 40 },
  color: { type: String, required: true, minlength: 2, maxlength: 40 },
  element: { type: String, required: true, minlength: 2, maxlength: 40 },
  moves: { type: String, required: true, minlength: 2, maxlength: 40 },
  attributes: {

    strength:{type: Number, required: true, min: 0, max: 25, default:0 },
    speed:{type: Number, required: true, min: 0, max: 25, default:0 },
    stamina:{type: Number, required: true, min: 0, max: 25, default:0 },
    wisdom:{type: Number, required: true, min: 0, max: 25, default:0 },

  }
}, { timestamps: true })

mongoose.model('Dragon', DragonSchema)
