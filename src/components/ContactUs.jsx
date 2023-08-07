import { AiFillInstagram, AiFillYoutube, AiFillFacebook } from "react-icons/ai"

const ContactUs = () => {
  return (
    <div className="flex p-16">
      <div className="w-1/2">
        <img src={"./public/img/arko.png"} alt="logo" className="w-36 h-12 mb-4" />
        <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>
        <div className="flex gap-3 mt-4">
          <AiFillInstagram size={"24"} className="text-gray-400 cursor-pointer  hover:opacity-40" />
          <AiFillYoutube size={"24"} className="text-gray-400 cursor-pointer hover:opacity-40" />
          <AiFillFacebook size={"24"} className="text-gray-400   hover:opacity-40 cursor-pointer" />
        </div>
      </div>
      <div className="w-1/2 flex flex-row">
        <div className="w-1/2">

          <h6 className="text-end underline underline-offset-1 text-orange-300 ">NAVIGATION</h6>

          <ul className="text-end">
            <li className="mt-3"><a href="#about-us">About Us</a></li>
            <li className="mt-3"><a href="#portfolio">Portfolio</a></li>
            <li className="mt-3"><a href="#news">News</a></li>
            <li className="mt-3"><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>
        <div className="w-1/2">

          <h6 className="text-end underline underline-offset-1 text-orange-300">CONTACT US</h6>

          <ul className="text-end">
            <li className="mt-4">+123-456-7890</li>
            <li className="mt-4 w-1/2 ml-auto">99 Roving St.,
              Big City, PKU 23456</li>
            <li className="mt-4">hello.awesome@site.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
