// import { FaGithub, FaLinkedin, FaXTwitter, FaVoicemail } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter, FaVoicemail } from "react-icons/fa";
import logo from "../assest/foodHub.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      label: "Linkedin",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/shubham-kumar-75170724a",
    },
    {
      label: "Twitter",
      icon: FaTwitter,
      url: "https://www.linkedin.com/in/shubham-kumar-75170724a",
    },
    {
      label: "Github",
      icon: FaGithub,
      url: "https://github.com/Sshubham2601",
    },
    {
      label: "Voicemail",
      icon: FaVoicemail,
      url: "Krantimaurya9523@gmail.com",
    },
  ];

  const links = [
    [
      { label: "Company", key: "header-1" },
      { label: "Menu", key: "item-1-1", route: "menu/660db3dbda0303ac9b065d78" },
      { label: "About us", key: "item-1-2", route: "about" },
      { label: "Contact us", key: "item-1-3", route: "contact" },
      { label: "Cart", key: "item-1-4",route: "cart" },
      { label: "Testimonials", key: "item-1-5", route: "about" },
    ],
    [
      { label: "Support", key: "header-2" },
      { label: "Help center", key: "item-2-1", route: "contact" },
      { label: "Terms of service", key: "item-2-2" },
      { label: "Legal", key: "item-2-3" },
      { label: "Privacy policy", key: "item-2-4" },
      { label: "Status", key: "item-2-5" },
    ],
  ];

  return (
    <div className="app flex items-end justify-center font-poppins">
      <div className="py-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 bg-white text-white w-full p-4 relative">
        <div className="  ">
          <div className="footer-img flex items-center">
            <img src={logo} alt="" className="w-16 h-auto" />
            <span className="text-3xl font-bold pl-2 text-black">Food Hub</span>
          </div>
          <div className="infos text-black">
            <span>Copyright © 2024 Nexcent ltd.</span>
            <span>All rights reserved</span>
          </div>
          <div className="footer-icons flex items-center space-x-3">
            {socialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                  <Icon
                  onClick={() => window.open(socialLink.url, "_blank")}
                    key={`social-${index}`}
                    className="w-10 h-10 p-2 m-2 rounded-full bg-black hover:bg-white hover:text-green-700 cursor-pointer"
                  />
              );
            })}
          </div>
        </div>
        <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-2 ">
          {links.map((col, index) => {
            return (
              <ul className={`col col-${index + 1}`} key={`col-${index}`}>
                {col.map((link, index) => {
                  return (
                    <li
                      key={`link-${col}-${index}`}
                      className={`text-black group  ${link.key === "header-1" || link.key === "header-2" ? "hover:translate-x-0" : "hover:translate-x-3 hover:text-green-700 cursor-pointer" } w-[132px] p-1 ${
                        link.key === "header-1" || link.key === "header-2"
                          ? "text-2xl text-white"
                          : ""
                      }`}
                    >
                      {/* <span className="text-white group-hover:text-green-700">{"// "}</span> */}
                      <Link to={`${link.route}`}>
                      {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="footer-form flex flex-col  ">
          <label className="text-lg font-semibold text-black">
            Stay up to date
          </label>
          <input
            type="email"
            placeholder="Subscribe to our email"
            className="mt-2 w-full border-2 text-black rounded-lg py-3 px-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
