import { useContext } from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { adesa } from "../assets";
import { contactInfo } from "../constants";
import { LanguageContext } from "../context/LanguageContext";

const ContactUs = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="flex p-16">
      <div className="w-1/2">
        <img src={adesa} alt="logo" className="w-36 h-12 mb-4" />
        <p className="text-gray-400">{contactInfo?.desc[lang]}</p>
        <div className="flex gap-3 mt-4">
          <AiFillInstagram
            size={"24"}
            className="text-gray-400 cursor-pointer  hover:opacity-40"
          />
          <AiFillYoutube
            size={"24"}
            className="text-gray-400 cursor-pointer hover:opacity-40"
          />
          <AiFillFacebook
            size={"24"}
            className="text-gray-400   hover:opacity-40 cursor-pointer"
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-row">
        <div className="w-1/2">
          <h6 className="text-end underline underline-offset-1 text-orange-300 ">
            {contactInfo.navigaton[lang]}
          </h6>

          <ul className="text-end">
            <li className="mt-3">
              <a href="#about-us">{contactInfo.aboutUs[lang]}</a>
            </li>
            <li className="mt-3">
              <a href="#portfolio">{contactInfo.portfolio[lang]}</a>
            </li>
            <li className="mt-3">
              <a href="#news">{contactInfo.news[lang]}</a>
            </li>
            <li className="mt-3">
              <a href="#testimonials">{contactInfo.testimonials[lang]}</a>
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <h6 className="text-end underline underline-offset-1 text-orange-300">
            {contactInfo.contactUs[lang]}
          </h6>

          <ul className="text-end">
            <li className="mt-4">
              <a href={`tel:${contactInfo.tel}`}>{contactInfo.tel}</a>
            </li>
            <li className="mt-4 w-full ml-auto">{contactInfo.address}</li>
            <li className="mt-4">
              <a href={`mailto:${contactInfo.mail}`}>{contactInfo.mail}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
