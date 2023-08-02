"use client";

import { popularpost } from "../../../public/PopularPost.json";
import { recentpost } from "../../../public/RecentPost.json";
import ShimmerUI from "./ShimmerUI";

const PopularPostandRecentPost = () => {
  const { pop } = popularpost;
  const { rcp } = recentpost;
  console.log(pop.length);

  return (
    <>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6">
          {/* Popular Posts Section (8-column grid) */}
          {pop.length === 0 ? (
            <ShimmerUI />
          ) : (
            <div className="col-span-8">
              <h2 className="text-3xl font-bold mb-6">Popular Posts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {pop.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg shadow-md p-4"
                  >
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600">{post.body}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Posts Section (4-column grid) */}
          <div className="col-span-4">
            <h2 className="text-3xl font-bold mb-6">Recent Posts</h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              {rcp.map((post) => (
                <div key={post.id} className="flex mb-6">
                  <div className="w-1/3">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-16 object-cover rounded-md mb-4"
                    />
                  </div>
                  <div className="w-2/3 pl-4">
                    <h6 className="font-bold mb-2">{post.title}</h6>
                    <div className="flex items-center text-gray-600">
                      <i className="far fa-calendar-alt mr-1"></i>
                      <p>{post.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularPostandRecentPost;
