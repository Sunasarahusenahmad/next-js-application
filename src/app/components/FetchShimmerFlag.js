"use client";

import React, { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

const FetchShimmerFlag = () => {
  const [flagData, setFlagData] = useState([]);
  console.log(flagData);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setFlagData(data);
      });
  });

  return (
    <>
      <div className="col-span-8">
        <h2 className="text-3xl font-bold mb-6 pl-6 pt-6">All World Flags</h2>
        {flagData.length === 0 ? (
          <ShimmerUI />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flagData.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
                <img
                  src={post.flags.svg}
                  alt={post.name.common}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{post.name.common}</h3>
                <p className="text-gray-600">{post.region}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FetchShimmerFlag;
