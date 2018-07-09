import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    title: {type: String, require: true},
    authors: {type: String, require: true},
    covers: {type: String, require: true},
    goodreadsId: {type: String, require: true},
    pages: {type: Number, require: true},
    userId: {type: mongoose.Schema.Types.ObjectId, require: true}
})

export default mongoose.model("Book", schema);