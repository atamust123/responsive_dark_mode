import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { adesa, close, menu } from "../assets";
import { navLinks, navbarDropdowns } from "../constants";
import { styles } from "../styles";
import Dropdown from "../hoc/Dropdown";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const memoizedOpts = useMemo(() => {
    return navbarDropdowns.map((dropdown) => ({
      ...dropdown,
      options: dropdown.options.map((opt) => ({
        ...opt,
        onClick: () => navigate(opt.navigate),
      })),
    }));
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-neutral-600" : "bg-neutral-600/40"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={adesa} alt="logo" className="w-36 h-12" />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } self-center hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={(e) => {
                e.preventDefault();
                setActive(nav.title);
                if (location.pathname !== "/") {
                  return navigate(`/${nav.id}`);
                }
              }}
            >
              <a href={`${location.pathname === "/" ? "#" + nav.id : ""}`}>
                {nav.title}
              </a>
            </li>
          ))}
          {/* <li>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  hover:shadow-md hover:shadow-cyan-500/50"
            >
              Store
            </button>
          </li> */}
          {memoizedOpts.map((dropdown) => {
            return (
              <li
                className={"self-center h-fit group"}
                key={`li-${dropdown?.id}`}
              >
                <Dropdown active={active} {...dropdown} key={dropdown?.id} />
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname !== "/") {
                      return navigate(`/${nav.id}`);
                    }
                    setToggle((prev) => !prev);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${location.pathname === "/" ? nav.id : ""}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
