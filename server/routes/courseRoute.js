import express from 'express'
import { addCourseToBatch, getAllBatch, getAllCourse, getBatchId, getCourseId } from '../controllers/courseController.js'

const courseRouter = express.Router()

courseRouter.get('/all', getAllCourse)
courseRouter.get('/:id', getCourseId)

courseRouter.get('/batch/all', getAllBatch)
courseRouter.get('/batch/:id', getBatchId)
courseRouter.put('/batch/add-course/:batchId', addCourseToBatch);

export default courseRouter