import mongoose, { mongo } from 'mongoose'

const batchSchema = new mongoose.Schema({
    batchTitle: { type: String, required: true},
    batchDescription: { type: String, required: true},
    batchThumbnail: { type: String, required: false},
    batchPrice: { type: Number, required: true},
    isPublished: { type: Boolean, default: true},
    discount: { type: Number, required: true, min: 0, max: 100},
    batchContent : [],
    educator: { type: String, ref: 'User', required: true},
    enrolledStudents: [
        { type: String, ref: 'User'}
    ],
}, {timestamps: true, minimize: false})

const Batch = mongoose.model('Batch', batchSchema)

export default Batch;