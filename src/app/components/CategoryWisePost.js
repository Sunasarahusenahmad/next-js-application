"use client";

import { useState } from "react";
import { category } from "../../../public/Category.json";

const CategoryWisePost = () => {
  const { cwp } = category;

  return (
    <>
      <div className="col-span-12">
        <h2 className="text-3xl font-bold pl-6">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6">
          {cwp.map((post) => (
            <div
              key={post.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden p-4"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 ">
                <button className="btn btn-primary mt-2 ml-2">
                  {post.category}
                </button>
                <h3 className="text-white text-xl font-bold mt-3 pl-2">
                  {post.title}
                </h3>
                <p className="text-white pl-2">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryWisePost;
