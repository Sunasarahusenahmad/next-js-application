import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:max-w-xl">
            <div className="md:flex">
              <div className="w-full p-4 px-5 py-5">
                <div className="text-center">
                  <h2 className="text-3xl font-semibold">Contact Us</h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Feel free to reach out to us with any inquiries or feedback.
                  </p>
                </div>
                <div className="mt-5">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="text-sm font-semibold text-gray-600">
                        Name
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full border rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-600">
                        Email
                      </label>
                      <input
                        type="email"
                        className="mt-1 p-2 block w-full border rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-600">
                        Message
                      </label>
                      <textarea
                        rows="4"
                        className="mt-1 block w-full border rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="mt-4 w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contact;
