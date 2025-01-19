import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaCheckCircle, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-40 bg-gray-800 text-gray-200 dark:bg-gray-900 dark:text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          {/* Section 1: Intro Text */}
          <div className="space-y-6 text-center">
            <div className="flex justify-center items-center space-x-6 animate__animated animate__fadeInUp animate__delay-0.5s">
              <span className="text-5xl text-indigo-500 animate__animated animate__bounceIn">
                <FaCheckCircle />
              </span>
              <div className="flex flex-col items-start">
                <h2 className="text-4xl font-semibold text-white leading-tight tracking-wide">
                  To Do List
                </h2>
               
              </div>
            </div>
            
        {/* Social Media Section */}
        <div className="mt-36 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6 mt-12">
            Follow Us
          </h3>
          <div className="flex justify-center space-x-6 text-gray-400 hover:text-white transform transition duration-200 hover:scale-110">
            <a href="#">
              <FaFacebook size={30} className="hover:text-blue-600 transition-all" />
            </a>
            <a href="#">
              <FaTwitter size={30} className="hover:text-blue-400 transition-all" />
            </a>
            <a href="#">
              <FaYoutube size={30} className="hover:text-red-600 transition-all" />
            </a>
            <a href="#">
              <FaInstagram size={30} className="hover:text-pink-600 transition-all" />
            </a>
            <a href="#">
              <FaLinkedin size={30} className="hover:text-blue-700 transition-all" />
            </a>
            <a href="#">
              <FaGithub size={30} className="hover:text-gray-500 transition-all" />
            </a>
          </div>
        </div>


          </div>

          {/* Section 2: Features */}
          <div className="ml-0 sm:ml-20">

            <h3 className="text-2xl font-semibold text-white hover:text-blue-400 transform transition duration-200 hover:scale-105">
              Features
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  For Teams
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  Templates
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Resources */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white hover:text-blue-400 transform transition duration-200 hover:scale-105">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  Download Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  Productivity Methods
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  Channel Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  Developer API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4: Company */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white hover:text-blue-400 transform transition duration-200 hover:scale-105">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  We’re Hiring!
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  Inspiration Hub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition ease-in-out duration-200 transform hover:scale-105">
                  Twist
                </a>
              </li>
            </ul>
          </div>
        </div>


        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} To-Do List. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
