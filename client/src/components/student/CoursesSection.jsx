import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import BatchCard from "./BatchCard.jsx";
const CourseSection = () => {
  const { allBatches } = useContext(AppContext);
  const Button = ({ className = "", children, as = "button", ...props }) => {
  const As = as;
  return (
    <As
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:shadow-md active:scale-[.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </As>
  );
};
  return (
    <section id="courses" className="pt-16 pb-3">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-extrabold">Popular Courses</h2>
            <p className="mt-1 text-sm text-black/60">
              Browse by class and start learning today.
            </p>
          </div>
          {/* <CategoryPills active={active} onChange={setActive} /> */}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allBatches.slice(0, 4).map((batch, index) => (
            <BatchCard key={index} batch={batch} />
          ))}
        </div>

        <center>
          <Link
            to={"/course-list"}
            onClick={() => scrollTo(0, 0)}
            className={`inline-flex items-center justify-center mt-5 rounded-2xl px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:shadow-md active:scale-[.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white text-black hover:bg-black/5`}
          >
            Show all courses
          </Link>
        </center>
      </div>
    </section>
  );
};

export default CourseSection;
