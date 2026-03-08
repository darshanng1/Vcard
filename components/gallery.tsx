import React from "react";

import bird1 from "../assets/images/blog/bird1.jpg";
import bird2 from "../assets/images/blog/bird2.jpg";
import bird3 from "../assets/images/blog/bird3.jpg";
import bird4 from "../assets/images/blog/bird4.jpg";

const Gallery = () => {

  const images = [bird1, bird2, bird3];

  return (
    <div className="bg-slate-950 min-h-screen text-white pt-24 pb-20 px-8">

      <h1 className="text-3xl font-bold text-center mb-10">
        Bird Net Installation Gallery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Bird Net Installation Bangalore"
            className="rounded-2xl shadow-xl w-full"
          />
        ))}

      </div>

    </div>
  );
};

export default Gallery;