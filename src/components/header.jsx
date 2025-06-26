import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";

export default function Header() {
  const [hover, setHover] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const ref = useRef();
  const buttonRef = useRef();

  const handleClickOutside = (event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setSideBar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleScroll = (targetDiv) => {
    const element = document.getElementById(targetDiv);
    if (element) {
      setSideBar(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const noScroll = () => {
    sideBar
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  };

  useEffect(noScroll, [sideBar]);

  return (
    <div className="relative">
      <header
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`z-50 fixed flex flex-row justify-end sm:justify-center items-center w-full h-16 px-10 ${hover || sideBar ? "bg-lessTransWhite" : "bg-transWhite"
          } backdrop-blur-sm shadow-md transition-all duration-300 ease-out`}
      >
        <FaBars className="opacity-0" />
        <nav className="hidden sm:flex flex-row justify-center items-center gap-16">
          <button
            className="headerNav"
            onClick={() => handleScroll("about")}
            end
          >
            ABOUT
          </button>

          <button
            className="headerNav"
            onClick={() => handleScroll("experience")}
          >
            EXPERIENCE
          </button>
          <button
            className="headerNav"
            onClick={() => handleScroll("projects")}
          >
            PROJECTS
          </button>
          <button
            className="headerNav"
            onClick={() => handleScroll("skills")}
            end
          >
            SKILLS
          </button>
        </nav>
        <div ref={buttonRef}>
          <FaBars
            className={`sm:hidden cursor-pointer sm:curs text-gray ${sideBar ? "rotate-90" : 0
              } transition-transform duration-300 ease-in-out`}
            onClick={() => setSideBar(!sideBar)}
          />
        </div>
      </header>

      <div
        ref={ref}
        className={`${sideBar ? "translate-x-0" : "translate-x-full"
          } fixed right-0 top-16 h-screen w-1/2 bg-lessTransWhite backdrop-blur-sm flex flex-col gap-10 items-start p-10 shadow-md z-50 transition-transform duration-300 ease-in-out`}
      >
        <button className="headerNav" onClick={() => handleScroll("about")} end>
          ABOUT
        </button>

        <button
          className="headerNav"
          onClick={() => handleScroll("experience")}
        >
          EXPERIENCE
        </button>
        <button className="headerNav" onClick={() => handleScroll("projects")}>
          PROJECTS
        </button>
        <button
          className="headerNav"
          onClick={() => handleScroll("skills")}
          end
        >
          SKILLS
        </button>
      </div>

      {sideBar ? (
        <div className="h-full w-full bg-transBlack fixed top-0 left-0 z-30" />
      ) : null}
    </div>
  );
}
