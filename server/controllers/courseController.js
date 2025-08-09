// import { User } from "@clerk/express";
import { Batches } from "openai/resources.js";
import Course from "../models/Course.js";
import Batch from "../models/Batch.js";


//Get All Courses
export const getAllCourse = async (req, res) => {
    try {
        const courses = await Course.find({
            isPublished: true
        }).select(['-courseContent', '-enrolledStudents']).populate({path: 'educator'})

        res.json({success: true, courses})
    } catch (error) {
        res.json({success: false, message: error.message })
    }
}

// Get Course By Id
export const getCourseId = async (req, res)=>{
    const {id} = req.params 

    try {
        const courseData = await Course.findById(id).populate({path: 'educator'})

        //Remove lectureUrl if isPreviewFree is false
        courseData.courseContent.forEach(chapter => {
            chapter.chapterContent.forEach(lecture => {
                if(!lecture.isPreviewFree){
                    lecture.lectureUrl = ""
                }
            })
        })

        res.json({success: true, courseData})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

//Get All Batches
export const getAllBatch = async (req, res) => {
    try {
        const batches = await Batch.find({
            isPublished: true
        }).select(['-batchContent', '-enrolledStudents']).populate({path: 'educator'})

        res.json({success: true, batches})
    } catch (error) {
        res.json({success: false, message: error.message })
    }
}

// Get Course By Id
export const getBatchId = async (req, res)=>{
    const {id} = req.params 

    try {
        const batchData = await Batch.findById(id).populate({path: 'educator'})

        res.json({success: true, batchData})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}


// export const addUserRating = async (req, res)=>{
//     try {
        
//     } catch (error) {
        
//     }
// }
