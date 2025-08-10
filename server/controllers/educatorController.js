import { clerkClient } from '@clerk/express'
import Course from '../models/Course.js'
import { v2 as cloudinary } from 'cloudinary'
import { json } from 'express'
import { Purchase } from '../models/Purchase.js'
import User from '../models/User.js'
import Batch from '../models/Batch.js'

//update role to educator
export const updateRoleToEducator = async (req, res)=>{
    try {
        const userId = req.auth.userId

        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata:{
                role: 'educator',
            }
        })

        res.json({success: true, message: 'You can publish a course now...'})
    } catch (error){
        res.json({success: false, message: error.message})
    }
}

// Add New Course
export const addCourse = async (req, res)=>{
    try {
        const { courseData } = req.body
        const imageFile = req.file
        const educatorId = req.auth.userId

        if(!courseData){
            return res.json({ success: false, message: 'Course Not Attached'})
        }
        if(!imageFile){
            return res.json({ success: false, message: 'Thumbnail Not Attached'})
        }
        
        const parsedCourseData = await JSON.parse(courseData)
        parsedCourseData.educator = educatorId
        const newCourse = await Course.create(parsedCourseData)
        const imageUpload = await cloudinary.uploader.upload(imageFile.path)
        newCourse.courseThumbnail = imageUpload.secure_url
        await newCourse.save()

        res.json({ success: true, message: 'Course Added'})

    } catch (error){
        res.json({ success: false, message: error.message})
    }
}

// Add New Batch
export const addBatch = async (req, res)=>{
    try {
        const { batchData } = req.body
        const imageFile = req.file
        const educatorId = req.auth.userId

        if(!batchData){
            return res.json({ success: false, message: 'Batch Not Attached'})
        }
        if(!imageFile){
            return res.json({ success: false, message: 'Thumbnail Not Attached'})
        }
        
        const parsedBatchData = await JSON.parse(batchData)
        parsedBatchData.educator = educatorId
        const newBatch = await Batch.create(parsedBatchData)
        const imageUpload = await cloudinary.uploader.upload(imageFile.path)
        newBatch.batchThumbnail = imageUpload.secure_url
        await newBatch.save()

        res.json({ success: true, message: 'Batch Added'})

    } catch (error){
        res.json({ success: false, message: error.message})
    }
}

// Get Educator Courses

export const getEducatorCourses = async (req, res) => {
    try {
        const educator = req.auth.userId

        const courses = await Course.find({educator})
        res.json({ success: true, courses})
        
    } catch (error) {
        res.json({ success: false, message: error.message})
        
    }
}

// Get Educator Dashboard Data ( Total Earning, Enrolled Students, No. of Courses)

export const educatorDashboardData = async (req, res)=>{
    try {
        const educator = req.auth.userId
        const courses = await Course.find({educator})
        const totalCourses = courses.length

        const courseIds = courses.map(courses => courses._id)

        //Calculate total earning from purchases
        const purchases = await Purchase.find({
            courseId: {$in: courseIds}
        })

        const totalEarnings = purchases.reduce((sum, purchase) => sum+purchase.amount, 0)

        //Collect unique enrolled student IDs with their course titles
        const enrolledStudentsData = []
        for (const course of courses){
            const students = await User.find({
                _id: {$in: course.enrolledStudents}
            }, 'name imageUrl')

            students.forEach(student =>{
                enrolledStudentsData.push({
                    courseTitle: course.courseTitle,
                    student
                })
            })
        }

        res.json({success: true, dashboardData:{
            totalEarnings, enrolledStudentsData, totalCourses
        }})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Get Enrolled Students Data with Purchase Data
export const getEnrolledStudentsData = async (req, res)=>{
    try {
        const educator = req.auth.userId
        const courses = await Course.find({educator})
        const courseIds = courses.map(courses => courses._id)

        const purchases = await Purchase.find({
            courseId: { $in: courseIds },
            status: 'completed'
        }).populate('userId', 'name imageUrl').populate('courseId', 'courseTitle')

        const enrolledStudents = purchases.map(purchase => ({
            student: purchase.userId,
            courseTitle: purchase.courseId.courseTitle,
            purchaseData: purchase.createdAt
        }))

        res.json({success: true, enrolledStudents})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

//Get Course By Id
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('educator')
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' })
    res.json({ success: true, course })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

//Update Course By Id
export const updateCourseById = async (req, res) => {
  try {
    const courseData = JSON.parse(req.body.courseData)
    let updateFields = {
      courseTitle: courseData.courseTitle,
      courseDescription: courseData.courseDescription,
      coursePrice: courseData.coursePrice,
      discount: courseData.discount,
      courseContent: courseData.courseContent,
    }
    if (req.file) {
      updateFields.thumbnailUrl = req.file.path // or your cloudinary url logic
    }
    const course = await Course.findByIdAndUpdate(req.params.id, updateFields, { new: true })
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' })
    res.json({ success: true, course })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}