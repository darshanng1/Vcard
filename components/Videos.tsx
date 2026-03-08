import React from "react";

const Videos = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white pt-24 pb-20 px-8">

      <h1 className="text-3xl font-bold text-center mb-10">
        Work Videos
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">

        <iframe
          className="w-full h-[300px] rounded-xl"
          src="https://www.youtube.com/embed/0XejFwwTwEI"
          allowFullScreen
        />

        <iframe
          className="w-full h-[300px] rounded-xl"
          src="https://www.youtube.com/embed/0S9JciPhRAE"
          allowFullScreen
        />

        <iframe
          className="w-full h-[300px] rounded-xl"
          src="https://www.youtube.com/embed/4ejcWW4HPuU"
          allowFullScreen
        />

      </div>

    </div>
  );
};

export default Videos;