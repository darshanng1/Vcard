import React, { useState } from "react";

const Gallery = () => {
  // List of images for the gallery
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

  // To track the currently selected image index
  const [current, setCurrent] = useState<number | null>(null);

  // Close the fullscreen viewer
  const closeViewer = () => setCurrent(null);

  // Go to the next image in the gallery
  const nextImage = () => {
    if (current === null) return;
    const next = (current + 1) % images.length;
    setCurrent(next);
  };

  // Go to the previous image in the gallery
  const prevImage = () => {
    if (current === null) return;
    const prev = (current - 1 + images.length) % images.length;
    setCurrent(prev);
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white pt-24 pb-20 px-6">

      <h1 className="text-2xl font-black text-center mb-12 tracking-widest">
        INSTALLATION GALLERY
      </h1>

      {/* Gallery Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Bird Net Installation Bangalore"
            onClick={() => setCurrent(i)} // Open the clicked image in fullscreen
            className="rounded-2xl shadow-2xl w-full h-[260px] object-cover cursor-pointer hover:scale-105 transition"
          />
        ))}
      </div>

      {/* Fullscreen Viewer */}
      {current !== null && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-4xl"
          >
            ‹
          </button>

          {/* Fullscreen Image */}
          <img
            src={images[current]}
            className="max-h-[90%] max-w-[90%] rounded-xl"
          />

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-4xl"
          >
            ›
          </button>

          {/* Close Button */}
          <button
            onClick={closeViewer}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>

        </div>
      )}

    </div>
  );
};

export default Gallery;