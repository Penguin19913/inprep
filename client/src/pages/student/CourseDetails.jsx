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

const CourseDetails = () => {
  const { id } = useParams();
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const [courseData, setCourseData] = useState(null);
  const [openSections, setopenSections] = useState({});
  const [isAlreadyEnrolled, setisAlreadyEnrolled] = useState(false);
  const [playerData, setplayerData] = useState(null);

  const {
    calculateRating,
    calculateNoOfLectures,
    calculateChapterTime,
    calculateCourseDuration,
    currency,
    backendUrl,
    userData, navigate
  } = useContext(AppContext);

  const fetchCourseData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/course/" + id);

      if (data.success) {
        setCourseData(data.courseData);
        setEnrolledStudents(data.courseData.enrolledStudents);
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
          toast.error("Buy this course for brighter future...")
      }
    } catch (error) {

    }
  };

  const enrollCourse = async () => {
    if (!isAlreadyEnrolled) {
      try {
        window.open("https://forms.gle/UHuB3mQEWzUJTi5cA", "_blank");
      } catch (error) {
        toast.error(error.message);
      }
    } else{
      navigate('/player/' + id)
    }
  };

  useEffect(() => {
    fetchCourseData(); // runs only once
  }, []);

  useEffect(() => {
    if (userData?._id && enrolledStudents.length > 0) {
      checkEnrollement(); // only runs when data is ready
    }
  }, [userData, enrolledStudents]);

  const toggleSection = (index) => {
    setopenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const getYouTubeVideoId = (url) => {
    if (!url) return "";
    const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([^&\n?#]+)/);
    return match ? match[1] : "";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [playerData]);

  return courseData && enrolledStudents ? (
    <>
      <div className="relative bg-[#f5eddf] min-h-screen">
        {/* Responsive background gradient */}
        <div className="absolute top-0 left-0 w-full h-64 md:h-80 z-0 bg-gradient-to-b from-[#f5eddf]/70 to-[#f5eddf]" />
        <div className="container mx-auto relative z-10 flex flex-col-reverse md:flex-row gap-10 xl:gap-20 items-start justify-center px-4 md:px-8 pt-8 md:pt-16">
          {/* Left column */}
          <div className="w-full md:max-w-xl text-gray-500">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
              {courseData.courseTitle}
            </h1>

            {/* Review and ratings */}
            <div className="flex flex-wrap items-center gap-2 pt-3 pb-1 text-sm">
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
            </div>

            <p className="text-sm">
              Course on{" "}
              <span className="text-blue-600">
                <Link to="/">Inprep</Link>
              </span>
            </p>

            {/* Structure of Course */}
            <div className="pt-8 text-gray-800">
              <h2 className="text-xl font-semibold">Course Structure</h2>
              <div className="pt-5">
                {courseData.courseContent.map((chapter, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 bg-white mb-2 rounded"
                  >
                    <div
                      className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <img
                          className={`transform transition-transform ${
                            openSections[index] ? "rotate-180" : ""
                          }`}
                          src={assets.down_arrow_icon}
                          alt="down_arrow_icon"
                        />
                        <p className="font-medium md:text-base text-sm flex-wrap">
                          {chapter.chapterTitle}
                        </p>
                        <p className="text-sm md:text-default flex-wrap">
                          {chapter.chapterContent.length} lectures -{" "}
                          {calculateChapterTime(chapter)}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden mr-1 transition-all duration-300 ${
                        openSections[index] ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <ul className="list-disc md:pl-10 pl-4 py-2 text-gray-600 border-t border-gray-300">
                        {chapter.chapterContent.map((lecture, i) => (
                          <li key={i} className="flex items-start gap-2 py-1">
                            <img
                              src={assets.play_icon}
                              alt="play_icon"
                              className="w-4 h-4 mt-1"
                            />
                            <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-gray-800 text-xs md:text-default">
                              <p>{lecture.lectureTitle}</p>
                              <div className="flex gap-2">
                                {lecture.isPreviewFree && (
                                  <p
                                    onClick={() =>
                                      setplayerData({
                                        ...lecture,
                                        chapter: index + 1,
                                        lecture: i + 1,
                                      })
                                    }
                                    className="text-blue-500 cursor-pointer ml-2"
                                  >
                                    Preview
                                  </p>
                                )}
                                <p className="whitespace-nowrap overflow-hidden text-ellipsis max-w-xs">
                                  {
                                    lecture.lectureDuration
                                    
                                  } min
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-5 text-sm md:text-base">
              <h3 className="text-xl font-semibold text-gray-800">
                Course Description
              </h3>
              <p
                className="pt-3 rich-text"
                dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}
              ></p>
            </div>
          </div>

          {/* Right column */}
          <div className="w-full max-w-md z-10 shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white min-w-0">
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
              </div>
            ) : (
              <img src={courseData ? courseData.courseThumbnail : null} alt="" className="w-full object-cover" />
            )}

            <div className="p-5">
              <div className="flex flex-wrap items-center text-sm md:text-base gap-4 pt-2 md:pt-4 text-gray-500">
                <div className="flex items-center gap-1">
                  <img
                    src={assets.star}
                    alt="star_icon"
                    className="w-3.5 h-3.5"
                  />
                  <p>{calculateRating(courseData)}</p>
                </div>

                <div className="h-4 w-px bg-gray-500/40"></div>

                <div className="flex items-center gap-1">
                  <img src={assets.time_clock_icon} alt="clock_icon" />
                  <p>{calculateCourseDuration(courseData)}</p>
                </div>

                <div className="h-4 w-px bg-gray-500/40"></div>

                <div className="flex items-center gap-1">
                  <img src={assets.lesson_icon} alt="clock_icon" />
                  <p>{calculateNoOfLectures(courseData)} lessons</p>
                </div>
              </div>

              <button
                onClick={enrollCourse}
                className="md:mt-6 mt-4 w-full py-3 min-h-[44px] rounded bg-blue-600 text-white font-medium transition hover:bg-blue-700"
              >
                {isAlreadyEnrolled ? "Click To Study" : "Enroll In Batch Now"}
              </button>
              <div className="pt-6">
                <p className="md:text-xl text-lg font-medium text-gray-800">
                  What's in the course?
                </p>
                <ul className="ml-4 pt-2 text-sm md:text-base list-disc text-gray-500">
                  <li>Lifetime access with free updates.</li>
                  <li>Step-by-step, hand-on project guidance.</li>
                  <li>Downloadable resources and source code.</li>
                  <li>Quizzes to test your knowledge.</li>
                  <li>Certificate of completion.</li>
                </ul>
              </div>
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

export default CourseDetails;