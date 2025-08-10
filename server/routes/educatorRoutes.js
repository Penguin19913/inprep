import express from 'express'
import { addBatch, addCourse, educatorDashboardData, getCourseById, getEducatorCourses, getEnrolledStudentsData, updateCourseById, updateRoleToEducator } from '../controllers/educatorController.js'
import upload from '../configs/multer.js'
import { protectEducator } from '../middlewares/authMiddleware.js'

const educatorRouter = express.Router()

//Add Educator Role
educatorRouter.get('/update-role', updateRoleToEducator)
educatorRouter.post('/add-course', upload.single('image'), protectEducator, addCourse)
educatorRouter.post('/add-batch', upload.single('image'), protectEducator, addBatch)
educatorRouter.get('/courses', protectEducator, getEducatorCourses)
educatorRouter.get('/dashboard', protectEducator, educatorDashboardData)
educatorRouter.get('/enrolled-students', protectEducator, getEnrolledStudentsData)
educatorRouter.get('/course/:id', protectEducator, getCourseById)
educatorRouter.put('/update-course/:id', upload.single('image'), protectEducator, updateCourseById)

export default educatorRouter