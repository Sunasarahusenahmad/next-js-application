"use client";

import React from "react";

const ShimmerUI = () => {
  return (
    <>
      {/* Shimmer of Popular or Recent Post */}
      {/* <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6">
          <div className="col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="w-full h-40 bg-gray-300 animate-pulse rounded-md mb-4"></div>
                <h3 className="w-3/4 h-6 bg-gray-300 animate-pulse mb-2"></h3>
                <p className="w-1/2 h-4 bg-gray-300 animate-pulse"></p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="w-full h-40 bg-gray-300 animate-pulse rounded-md mb-4"></div>
                <h3 className="w-3/4 h-6 bg-gray-300 animate-pulse mb-2"></h3>
                <p className="w-1/2 h-4 bg-gray-300 animate-pulse"></p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="w-full h-40 bg-gray-300 animate-pulse rounded-md mb-4"></div>
                <h3 className="w-3/4 h-6 bg-gray-300 animate-pulse mb-2"></h3>
                <p className="w-1/2 h-4 bg-gray-300 animate-pulse"></p>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="w-1/3 h-16 bg-gray-300 animate-pulse rounded-md mb-4"></div>
              <div className="flex items-center mb-6">
                <div className="w-2/3">
                  <div className="w-3/4 h-6 bg-gray-300 animate-pulse mb-2"></div>
                  <div className="w-1/4 h-4 bg-gray-300 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Shimmer of FetchShimmerFlag Page */}
      <div className="col-span-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((el, i) => {
            return (
              <div className="bg-white rounded-lg shadow-md p-4" key={i}>
                <div className="w-full h-40 bg-gray-300 animate-pulse rounded-md mb-4"></div>
                <h3 className="w-3/4 h-6 bg-gray-300 animate-pulse mb-2"></h3>
                <p className="w-1/2 h-4 bg-gray-300 animate-pulse"></p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShimmerUI;
