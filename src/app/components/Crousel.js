"use client";

import { useState } from "react";
import { items } from "../../../public/Items.json";
import { Carousel, CarouselItem } from "react-bootstrap";

const Crousel = () => {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} className="carousel" onSelect={handleSelect}>
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} interval={4000}>
          <div className="flex justify-center items-center h-450">
            <div
              className="bg-white rounded-lg shadow-md p-6 w-3/4 flex"
              style={{ width: "100%" }}
            >
              <div className="w-1/2">
                <img
                  className="img"
                  src={item.imageUrl}
                  alt="slides"
                  style={{
                    height: "400px",
                    width: "600px",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="w-1/2 p-4">
                <h3 className="text-black font-bold text-2xl mb-4">
                  {item.title}
                </h3>
                <p className="text-black mb-4">{item.body}</p>
                <a href={item.docs} target="_blank" className="inline-block">
                  <button className="px-4 py-2 bg-red-600 text-white rounded-md">
                    Visit Application
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Crousel;
