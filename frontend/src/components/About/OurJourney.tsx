import React from "react";
// import { AiOutlineLaptop } from "react-icons/ai";
// import { FcInspection } from "react-icons/fc";
// import { FiSettings } from "react-icons/fi";

const OurJourney = () => {
  return (
    <div>
      <div className="mt-8">
        <div>
          <h2 className="text-4xl text-own-secondary dark:text-own-white font-bold text-center py-6 underline">
            Our journey so far...
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 container_c mx-auto">
            <div className="flex bg-own-white-special px-3 py-5 rounded-md dark:bg-own-dark-bg-special flex-col text-own-secondary dark:text-own-white items-center justify-center">
              <span className="mb-6">
                {/* <FiSettings className="text-2xl text-own-primary mb-2" /> */}
              </span>
              <h3 className="text-2xl mb-3 font-bold">Founded in 2010</h3>
              <p className="text-center">
                Thurese rhuyengilla mauris sit amet nibh. Donec sodales sagittis
                magna. Sed consequat, leo eget bibendum sodales, augue velit
                cursus nunc
              </p>
            </div>
            <div className="flex bg-own-white-special px-3 py-5 rounded-md dark:bg-own-dark-bg-special flex-col text-own-secondary dark:text-own-white items-center justify-center">
              <span className="mb-6">
                {/* <AiOutlineLaptop className="text-2xl text-own-primary mb-2" /> */}
              </span>
              <h3 className="text-2xl mb-3 font-bold">Trusted by Millions</h3>
              <p className="text-center">
                Oreseu thiyrese sngilla mauris sit amet nibh. Donec sodales
                sagittis magna. Sed consequat, leo eget bibendum sodales, augue
                velit cursus nunc.
              </p>
            </div>
            <div className="flex bg-own-white-special px-3 py-5 rounded-md dark:bg-own-dark-bg-special flex-col text-own-secondary dark:text-own-white items-center justify-center">
              <span className="mb-6">
                {/* <FcInspection className="text-2xl text-own-primary mb-2" /> */}
              </span>
              <h3 className="text-2xl mb-3 font-bold">Quality that speaks</h3>
              <p className="text-center">
                Huirese ngilla mauris sit amet nibh. Donec sodales sagittis
                magna. Sed consequat, leo eget bibendum sodales, augue velit
                cursus nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
