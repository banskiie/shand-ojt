import React from "react";
import pfpimg from "../../assets/image/pfpimg.jpg"
import IconCode from "../../assets/svg/IconCode";
import IconPencil from "../../assets/svg/IconPencil";
import IconLightBulb from "../../assets/svg/IconLightBulb";

const HomeHeadline = () => {
  return (
    <div className="pt-32 pb-20 w-screen flex flex-col-reverse md:flex-row justify-between items-center px-12">
      <div className="flex flex-col items-start justify-center uppercase py-16 rounded-lg select-none md:scale-100">
        <p className="font-bold flex flex-row justify-center items-center md:gap-x-4">
          <span className="text-5xl md:text-[7.25rem]">Hello World!</span>
        </p>
        <p className="text-[1.7rem] md:text-[4rem] font-black">
          I'm Shand Ivan Sinohon!
        </p>
        <div className="text-base md:text-2xl flex flex-col md:items-start">
          <div className="flex items-center">
            <span>Innovate.</span>
            <IconLightBulb className="mx-2 md:h-5" />
            Design. <IconPencil className="mx-2" /> Code.{" "}
            <IconCode className="mx-2" />{" "}
          </div>
          From your friendly Front-end developer.
        </div>
      </div>
      <img
        src={pfpimg}
        className="h-72 w-72 md:h-96 md:w-96 object-cover rounded-lg border-dashed border-4 md:mr-4"
      />
    </div>
  );
};

export default HomeHeadline;
