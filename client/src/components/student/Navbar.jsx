import React, { useContext } from "react";
import { assets } from "../../assets/assests";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const brand = {
  blue: "#0A2540",
};

const navLinks = [
  { label: (
      <>
        Why{" "}
        <span className="text-[#FE7E1D]">In</span>
        <span className="text-[#008F3F]">Prep</span>
      </>
    ), href: "#why" },
  { label: "Courses", href: "#courses" },
  { label: "How it works", href: "#how" },
  // { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

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

const Navbar = () => {
  const { navigate, isEducator, backendUrl, setIsEducator, getToken } =
    useContext(AppContext);

  const isCourseListPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate("/educator");
        return;
      }
      const token = await getToken();
      const { data } = await axios.get(
        backendUrl + "/api/educator/update-role",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        setIsEducator(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  function Logo() {
    return (
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 overflow-hidden rounded-xl bg-white shadow ring-1 ring-black/10">
          <img
            onClick={() => navigate("/")}
            src={assets.inprep}
            alt="InPrep"
            className="h-full w-full object-cover crusor-pointer"
          />
          <img
            onClick={() => navigate("/")}
            src={assets.inprep_name}
            alt="InPrep"
            className="h-full w-full object-cover"
          />
        </div>
        {/* <div className="text-lg font-extrabold" style={{ color: brand.blue }}>
        In<span className="text-black">Prep</span>
      </div> */}
      </div>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Logo />
        <center>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-black/70 hover:text-black"
            >
              {l.label}
            </a>
          ))}
        </nav>
        </center>
        <div className="flex items-center gap-3">
          <div>
            {user && (
              <>
                <Button className="cursor-pointer" onClick={becomeEducator}>
                  {isEducator ? "Educator Dashboard" : ""}
                </Button>{" "}
                <Button
                  as={Link}
                  to="/my-enrollments"
                  className="bg-white text-black hover:bg-black/5"
                >
                  My Enrollments
                </Button>
              </>
            )}
          </div>
          {user ? (
            <UserButton />
          ) : (
            <Button
              className="bg-white text-black hover:bg-black/5"
              as="button"
              onClick={() => openSignIn()}
            >
              Login / Sign in
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
