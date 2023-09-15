import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { adesa, close, menu } from "../assets";
import { navLinks, navbarDropdowns } from "../constants";
import { LanguageContext } from "../context/LanguageContext";
import Dropdown from "../hoc/Dropdown";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const { lang, handleLanguage, language } = useContext(LanguageContext);
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
      title: dropdown.title?.[lang],
      options: dropdown.options.map((opt) => ({
        ...opt,
        label: opt.label?.[lang],
        onClick: () => navigate(opt.navigate),
      })),
    }));
  }, [lang]);

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
                active === nav.title["en"] ? "text-white" : "text-secondary"
              } self-center hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={(e) => {
                e.preventDefault();
                setActive(nav.title["en"]);
                if (location.pathname !== "/") {
                  return navigate(`/${nav.id}`);
                }
              }}
            >
              <a href={`#${nav.id}`}>{nav.title[lang]}</a>
            </li>
          ))}
          {memoizedOpts.map((dropdown) => {
            return (
              <li
                className={"self-center h-fit group"}
                key={`li-${dropdown?.id}`}
              >
                <Dropdown
                  active={active}
                  options={dropdown.options}
                  title={dropdown.title}
                  key={dropdown?.id}
                />
              </li>
            );
          })}
          <button
            className="self-center text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            onClick={handleLanguage}
          >
            {language}
          </button>
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
                    active === nav.title["en"] ? "text-white" : "text-secondary"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname !== "/") {
                      return navigate(`/${nav.id}`);
                    }
                    setToggle((prev) => !prev);
                    setActive(nav.title["en"]);
                  }}
                >
                  <a href={`#${location.pathname === "/" ? nav.id : ""}`}>
                    {nav.title[lang]}
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
