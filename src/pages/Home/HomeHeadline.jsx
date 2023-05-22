import React from "react";
import pfpimg from "../../assets/image/pfpimg.jpg";
import IconWorld from "../../assets/svg/IconWorld";
import IconCode from "../../assets/svg/IconCode";
import IconPencil from "../../assets/svg/IconPencil";
import IconLightBulb from "../../assets/svg/IconLightBulb";

const HomeHeadline = () => {
  return (
    <div className="pt-32 pb-20 w-screen flex flex-col-reverse md:flex-row justify-between items-center px-12">
      <div className="flex flex-col items-center md:items-start justify-center uppercase py-16 rounded-lg select-none md:scale-100">
        <p className="text-9xl font-bold flex flex-row justify-center items-center md:gap-x-4">
          <span className="text-6xl">Hello World!</span>
        </p>
        <p className="text-5xl md:text-[5rem] font-black">I'm Shand Ivan Sinohon!</p>
        <p className="text-base md:text-2xl flex flex-row items-center">
          Innovate. <IconLightBulb className="mx-2 h-5" /> Design.{" "}
          <IconPencil className="mx-2" /> Code. <IconCode className="mx-2" />{" "}
          From your friendly Front-end developer.
        </p>
      </div>
      <img
        src={pfpimg}
        className="h-96 w-96 object-cover rounded-lg border-dashed border-4 mr-4"
      />
    </div>
  );
};

export default HomeHeadline;
