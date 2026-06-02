import React from "react";

const Blogs = () => {
  return (
    <section id="blogs" className="py-10 px-4 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-purple px-8 py-3 border-4 border-black shadow-neo rounded-full">
          <h2 className="text-3xl font-shrikhand text-white">BLOGS ✍️</h2>
        </div>
      </div>

      <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-neo text-center">
        <p className="text-lg font-bold">Blog posts coming soon.</p>
        <p className="text-sm mt-2 font-medium text-gray-700">
          I will add technical articles and interview experiences here.
        </p>
      </div>
    </section>
  );
};

export default Blogs;
