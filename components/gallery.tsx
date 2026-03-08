import React from "react";

import bird1 from "./src/assets/images/Gallery/bird1.jpg";
import bird2 from "./src/assets/images/Gallery/bird2.jpg";
import bird3 from "./src/assets/images/Gallery/bird3.jpg";

const Gallery = () => {

  const images = [bird1, bird2, bird3];

  return (
    <div className="bg-slate-950 min-h-screen text-white pt-24 pb-20 px-8">

      <h1 className="text-2xl font-black text-center mb-10 tracking-widest">
        INSTALLATION GALLERY
      </h1>

      <div className="grid grid-cols-1 gap-6 max-w-[500px] mx-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Bird Net Installation Bangalore"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        ))}
      </div>

    </div>
  );
};

export default Gallery;