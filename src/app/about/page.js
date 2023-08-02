import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const about = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <img
                className="rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1607004468138-e7e23ea26947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWJvdXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="About Us"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h1 className="text-3xl font-semibold mb-4">About Us</h1>
              <p className="mb-6">
                Thinking outside the box is a mindset that encourages
                individuals to break free from conventional, linear, and
                restrictive patterns of thinking. It is a cognitive approach
                that allows us to explore innovative and imaginative solutions
                to problems and challenges. Embracing this concept empowers us
                to see beyond the obvious and discover new perspectives,
                possibilities, and opportunities that may not be immediately
                apparent.
              </p>
              <p className="mb-6">
                When we think outside the box, we venture into uncharted
                territories, pushing the boundaries of our creativity and
                intellect. We liberate ourselves from the shackles of conformity
                and routine, embarking on a journey of exploration and
                discovery. It is a process that requires openness to change,
                adaptability, and a willingness to embrace ambiguity.
              </p>
              <p>
                One of the key benefits of thinking outside the box is its
                potential to revolutionize the status quo. By approaching
                problems from unconventional angles, we find novel solutions
                that disrupt traditional norms and practices. This can lead to
                groundbreaking innovations, revolutionizing industries and
                making a significant impact on society.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default about;
