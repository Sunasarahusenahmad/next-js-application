import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Your Blog Name is a platform for sharing ideas, stories, and
              insights with the world. We believe in creating meaningful
              connections through the power of words.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">
              Email: contact@yourblogname.com
              <br />
              Phone: +1 (123) 456-7890
              <br />
              Address: 1234 Main St, City, Country
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="text-sm">
              <li>Technology</li>
              <li>Travel</li>
              <li>Food</li>
              <li>Fashion</li>
              {/* Add more categories as needed */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Your Blog Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
