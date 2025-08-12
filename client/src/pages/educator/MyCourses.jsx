import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const MyCourse = () => {
  const { currency, backendUrl, isEducator, getToken } = useContext(AppContext);

  const [courses, setCourses] = useState(null);

  const fetchEducatorCourses = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + "/api/educator/courses", {
        headers: { Authorization: `Bearer ${token}` },
      });

      data.success && setCourses(data.courses);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        const token = await getToken();
        const { data } = await axios.delete(
          backendUrl + `/api/educator/delete-course/${courseId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (data.success) {
          toast.success("Course deleted successfully");
          setCourses(courses.filter((c) => c._id !== courseId));
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    if (isEducator) {
      fetchEducatorCourses();
    }
  }, [isEducator]);
  
  return courses ? (
  <div className="min-h-screen flex flex-col items-start justify-between md:p-8 p-2 pt-8 pb-0">
    <div className="w-full">
      <h2 className="pb-4 text-lg font-medium">My Courses</h2>
      {/* Desktop Table */}
      <div className="hidden md:block">
        <div className="flex flex-col max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="table-auto w-full overflow-hidden">
            <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">All Courses</th>
                <th className="px-4 py-3 font-semibold truncate">Earnings</th>
                <th className="px-4 py-3 font-semibold truncate">Students</th>
                <th className="px-4 py-3 font-semibold truncate">Published On</th>
                <th className="px-4 py-3 font-semibold truncate">Edit</th>
                <th className="px-4 py-3 font-semibold truncate">Delete</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {courses.map((course) => (
                <tr key={course._id} className="border-b border-gray-500/20">
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <img src={course.courseThumbnail} alt="Course Image" className="w-16" />
                    <span className="truncate hidden md:block">{course.courseTitle}</span>
                  </td>
                  <td className="px-4 py-3">
                    {currency}{" "}
                    {Math.floor(
                      course.enrolledStudents.length *
                        (course.coursePrice - (course.discount * course.coursePrice) / 100)
                    )}
                  </td>
                  <td className="px-4 py-3">{course.enrolledStudents.length}</td>
                  <td className="px-4 py-3">{new Date(course.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3">
                    <Link
                      to={`/educator/edit-course/${course._id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDeleteCourse(course._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4 mt-2">
        {courses.map((course) => (
          <div key={course._id} className="bg-white rounded-lg shadow border border-gray-200 p-4 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src={course.courseThumbnail} alt="Course" className="w-16 h-16 object-cover rounded" />
              <div>
                <div className="font-semibold text-base text-gray-800">{course.courseTitle}</div>
                <div className="text-xs text-gray-500">Published: {new Date(course.createdAt).toLocaleDateString()}</div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div>
                <div className="text-xs text-gray-500">Earnings</div>
                <div className="font-medium text-sm">{currency} {Math.floor(course.enrolledStudents.length * (course.coursePrice - (course.discount * course.coursePrice) / 100))}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Students</div>
                <div className="font-medium text-sm">{course.enrolledStudents.length}</div>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <Link
                to={`/educator/edit-course/${course._id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs transition duration-200"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDeleteCourse(course._id)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs transition duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
) : (
  <Loading />
);
};

export default MyCourse;
