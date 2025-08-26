import { Link, Navigate, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assests";
import humanizeDuration from "humanize-duration";
import Footer from "../../components/student/Footer";
import YouTube from "react-youtube";
import axios from "axios";
import { toast } from "react-toastify";
import CourseCard from "../../components/student/CourseCard";
const BatchDetails = () => {
  const { id } = useParams();
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const [batchData, setBatchData] = useState(null);
  const [isAlreadyEnrolled, setisAlreadyEnrolled] = useState(false);
  const [playerData, setplayerData] = useState(null);
  const [filteredCourse, setFilteredCourse] = useState([]);
  const [displayCourses, setDisplayCourses] = useState([]);

  const { currency, backendUrl, userData, navigate, allCourses } =
    useContext(AppContext);

  const fetchBatchData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/course/batch/" + id);

      if (data.success) {
        setBatchData(data.batchData);
        setEnrolledStudents(data.batchData.enrolledStudents);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const checkEnrollement = async () => {
    try {
      const id = userData._id;
      if (enrolledStudents.includes(id)) {
        setisAlreadyEnrolled(true);
      } else {
        toast.error("Buy this course for brighter future...");
      }
    } catch (error) {}
  };

  const enrollCourse = async () => {
    if (!isAlreadyEnrolled) {
      try {
        window.open("https://forms.gle/UHuB3mQEWzUJTi5cA", "_blank");
      } catch (error) {
        toast.error(error.message);
      }
    }

    // try {
    //   if(!userData){
    //     return toast.warn('Login to Enroll')
    //   }
    //   if(isAlreadyEnrolled){
    //     return toast.warn('Already Enrolled')
    //   }

    //   const token = await getToken()

    //   const { data } = await axios.post(backendUrl + '/api/user/purchase', {courseId: courseData._id}, {headers: {Authorization: `Bearer ${token}`}})
    //   if(data.success){
    //     const {session_url} = data
    //     window.location.replace(session_url)
    //   }else{
    //     toast.error(data.message)
    //   }
    // } catch (error) {
    //   toast.error(data.message)
    // }
  };

  useEffect(() => {
    fetchBatchData(); // runs only once
  }, []);

  useEffect(() => {
    if (userData?._id && enrolledStudents.length > 0) {
      checkEnrollement(); // only runs when data is ready
    }
  }, [userData, enrolledStudents]);

  useEffect(() => {
  if (
    allCourses &&
    allCourses.length > 0 &&
    batchData &&
    batchData.batchTitle
  ) {
    const filtered = allCourses.filter(
      (course) =>
        Array.isArray(course.enrolledBatches) &&
        course.enrolledBatches.includes(batchData.batchTitle)
    );
    setDisplayCourses(filtered);
  } else {
    setDisplayCourses([]);
  }
}, [allCourses, batchData]);

  useEffect(() => {
  if (
    allCourses &&
    allCourses.length > 0 &&
    batchData &&
    batchData.batchTitle
  ) {
    // Find courses where enrolledBatches includes the current batch name
    const matchedCourseIds = allCourses
      .filter(course =>
        course.enrolledBatches &&
        course.enrolledBatches.includes(batchData.batchTitle)
      )
      .map(course => course._id);

    setFilteredCourse(matchedCourseIds);
  }
}, [allCourses, batchData]);

  // const getYouTubeVideoId = (url) => {
  //   if (!url) return "";
  //   const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([^&\n?#]+)/);
  //   return match ? match[1] : "";
  // };

  return batchData && enrolledStudents ? (
    <>
      <div className="flex md:flex-row flex-col-reverse xl:gap-50 gap-10 relative items-start md:justify-center items-center md:gap-30 md:px-36 px-8 md:pt-30 w-screen pt-20 text-left">
        <div className="absolute top-0 left-0 w-full h-80 z-10 bg-gradient-to-b from-[#f5eddf]/70 to [#f5eddf]"></div>
        {/* <div className="absolute top-0 left-0 w-full h-80 z-1 bg-gradient-to-b from-cyan-100/70"></div> */}
        {/* left column */}
        <div className="max-w-xl z-10 text-gray-500">
          <h1 className="hidden md:block md:text-course-details-heading large text-4xl text-course-details-heading-small font-semibold text-gray-800">
            {batchData.batchTitle}
          </h1>
          <p className="hidden md:block text-sm">
            Course on{" "}
            <span className="text-blue-600">
              <Link to="/">Inprep</Link>
            </span>
          </p>
          <div className="py-5 text-sm md:text-default">
            <h3 className="text-xl font-semibold text-gray-800">
              Batch Description
            </h3>
            <p
              className="pt-3 rich-text"
              dangerouslySetInnerHTML={{ __html: batchData.batchDescription }}
            ></p>
          </div>
          {/* Display Subjects in The Batch */}
          <div className="relative px-4 md:px-10 lg:px-20 py-10 bg-gradient-to-br from-[#f5eddf] via-[#f7f3e9] to-[#e9e2d1] rounded-2xl shadow-xl border border-[#e5d7b8] min-h-[40vh]">
            <h4 className=" font-bold text-gray-800 mb-3 tracking-tight">
              Subjects in this Batch
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {displayCourses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </div>

          {/* Review and ratings */}
          {/* <div className="flex items-center space-x-2 pt-3 pb-1 text-sm">
            <p>{calculateRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  className="h-3.5 w-3.5"
                  alt="star_blank"
                />
              ))}
            </div>
            <p className="text-blue-600">
              ({courseData.courseRatings.length}{" "}
              {courseData.courseRatings.length > 1 ? "ratings" : "rating"})
            </p>
            <p>
              {courseData.enrolledStudents.length}{" "}
              {courseData.enrolledStudents.length > 1 ? "students" : "student"}
            </p>
          </div> */}

          {/* Structure of Course */}
        </div>

        {/* right column */}
        <div className="max-w-course-card z-10 shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] max-w-[400px] sm:min-w-[420px]">
          {playerData ? (
            <div>
              <YouTube
                videoId={getYouTubeVideoId(playerData.lectureUrl)}
                className="w-full aspect-video"
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 0,
                  },
                }}
              />
              {/* <YouTube videoId={playerData.lectureUrl.split('/').pop()} iframeClassName="w-full aspect-video"/> */}
            </div>
          ) : (
            <img src={batchData ? batchData.batchThumbnail : null} alt="" />
          )}

          <div className="p-5">
            <div className="flex items-center gap-2">
              <h1 className="md:hidden md:text-course-details-heading large text-4xl text-course-details-heading-small font-semibold text-gray-800">
                {batchData.batchTitle}
              </h1>
              <p className="md:hidden text-sm">
                Course on{" "}
                <span className="text-blue-600">
                  <Link to="/">Inprep</Link>
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-3.5"
                src={assets.time_left_clock_icon}
                alt="time_left_clock_icon"
              />
              <p className="text-red-500">
                <span className="font-medium">5 days</span> left at this price!
              </p>
            </div>
            <div className="flex gap-3 items-center pt-2">
              <p className="text-gray-800 md:text-4xl text-2xl font-semibold">
                {currency}{" "}
                {(
                  batchData.batchPrice -
                  (batchData.discount * batchData.batchPrice) / 100
                ).toFixed(2)}
              </p>
              <p className="md:text-lg text-gray-500 line-through">
                {currency}
                {batchData.batchPrice}
              </p>
              <p className="md:text-lg text-gray-500">
                {batchData.discount}% off
              </p>
            </div>

            <button
              onClick={enrollCourse}
              className="md:mt-6 mt-4 w-full py-3 rounded bg-blue-600 text-white font-medium"
            >
              {isAlreadyEnrolled ? "Select Subject To Study" : "Enroll Now"}
            </button>
            <div className="pt-6">
              <p className="md:text-xl text-lg font-medium text-gray-800">
                What's in the course?
              </p>
              <ul className="ml-4 pt-2 text-sm md:text-default list-disc text-gray-500">
                <li>Lifetime access with free updates.</li>
                <li>You get access to all subjects.</li>
                <li>24/7 support of teachers.</li>
                <li>Quizzes to test your knowledge.</li>
                <li>Certificate of completion.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default BatchDetails;
