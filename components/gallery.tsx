import React from "react";

const Gallery = () => {

  const images = [
    "/gallery/bird1.jpeg",
    "/gallery/bird2.jpeg",
    "/gallery/bird3.jpeg",
    "/gallery/bird4.jpg",
    "/gallery/bird5.jpeg",
    "/gallery/bird6.jpeg",
    "/gallery/bird7.jpeg",
    "/gallery/bird8.jpeg",
    "/gallery/bird9.jpeg",
    "/gallery/bird10.jpeg"
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-white pt-24 pb-20 px-8">

      <h1 className="text-2xl font-black text-center mb-10 tracking-widest">
        INSTALLATION GALLERY
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">

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