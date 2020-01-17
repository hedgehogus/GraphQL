import mongoose from 'mongoose';
const uuidv1 = require('uuid/v1');

const Schema = mongoose.Schema;

const courseSchema = new Schema({ 
    id: {type: String, default: uuidv1()},
    title: String,
    author: String,
    description: String,
    topic: String,
    url: String,
    voteCount: {type: Number, default: 0}
})
 
courseSchema.index({'$**': 'text'});

const model = mongoose.model('course', courseSchema);

export default model;