import React from "react";
import IconBookOpen from "../assets/svg/IconBookOpen";
import algo1 from "../assets/image/activities/algo1.jpg";
import algo2 from "../assets/image/activities/algo2.jpg";
import algo3 from "../assets/image/activities/algo3.jpg";
import laf from "../assets/image/activities/laf.png";
import laf2 from "../assets/image/activities/laf2.png";
import visit1 from "../assets/image/activities/visit1.jpg";
import visit2 from "../assets/image/activities/visit2.jpg";
import hl from "../assets/image/projects/hl.jpg";
import algomon from "../assets/image/projects/algomon.jpg";
import yanim from "../assets/image/projects/yanim.jpg";

const Journal = () => {
  return (
    <div className="pt-24 bg-slate-100 flex flex-col items-center">
      <div className="text-6xl text-primary font-bold flex flex-row items-center justify-center gap-2">
        <IconBookOpen />
        <span>Journal</span>
      </div>
      <p className="text-primary text-lg md:text-2xl py-2">
        Here is a compilation of what I did here in Fligno!📝
      </p>
      <ul className="flex flex-col items-center justify-center mb-16">
        <li>
          <h1 className="text-primary font-bold text-3xl text-center pt-8">
            Algorand Pyteal Training ⚒️
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4">
            <img src={algo1} alt="Algorand-Pyteal Training" className="md:h-96 px-4 md:px-0" />
            <img
              src={algo2}
              alt="Algorand-Pyteal Training"
              className="md:h-96 px-4 md:px-0"
            />
            <img
              src={algo3}
              alt="Algorand-Pyteal Training"
              className="md:h-96 px-4 md:px-0"
            />
          </div>
        </li>
        <li>
          <h1 className="text-primary font-bold text-3xl text-center pt-8">
            Learn at Fligno 👨‍💻
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4">
            <img
              src={laf}
              alt="Algorand-Pyteal Training"
              className="md:h-96 px-4 md:px-0"
            />
            <img
              src={laf2}
              alt="Algorand-Pyteal Training"
              className="md:h-96 px-4 md:px-0"
            />
          </div>
        </li>
        <li>
          <h1 className="text-primary font-bold text-3xl text-center pt-8">
            LDCU Company Visit 🏫
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4">
            <img
              src={visit1}
              alt="Algorand-Pyteal Training"
              className="md:h-96 px-4 md:px-0"
            />
            <img
              src={visit2}
              alt="Algorand-Pyteal Training"
              className="md:h-96 px-4 md:px-0"
            />
          </div>
        </li>
      </ul>
      <div className="text-6xl text-primary font-bold flex flex-row items-center justify-center gap-2">
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <defs>
            <style />
          </defs>
          <path d="M312.1 591.5c3.1 3.1 8.2 3.1 11.3 0l101.8-101.8 86.1 86.2c3.1 3.1 8.2 3.1 11.3 0l226.3-226.5c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8c-3.1-3.1-8.2-3.1-11.3 0L517 485.3l-86.1-86.2c-3.1-3.1-8.2-3.1-11.3 0L275.3 543.4c-3.1 3.1-3.1 8.2 0 11.3l36.8 36.8z" />
          <path d="M904 160H548V96c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H120c-17.7 0-32 14.3-32 32v520c0 17.7 14.3 32 32 32h356.4v32L311.6 884.1c-3.7 2.4-4.7 7.3-2.3 11l30.3 47.2v.1c2.4 3.7 7.4 4.7 11.1 2.3L512 838.9l161.3 105.8c3.7 2.4 8.7 1.4 11.1-2.3v-.1l30.3-47.2c2.4-3.7 1.3-8.6-2.3-11L548 776.3V744h356c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 512H160V232h704v440z" />
        </svg>
        <span>Projects</span>
      </div>
      <ul className="flex flex-col items-center justify-center mb-16">
        <li>
          <h1 className="text-primary font-bold text-3xl text-center pt-8">
            Algorand Higher-Lower Game🕹️
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4">
            <a href="https://algorand-hl-game.vercel.app/" target="_blank">
              <img
                src={hl}
                alt="Algorand-Pyteal Training"
                className="md:h-96 px-4 md:px-0"
              />
            </a>
          </div>
        </li>
        <li>
          <h1 className="text-primary font-bold text-3xl text-center pt-8">
            Algomon 🎯
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4">
            <a
              href="http://algomon.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={algomon}
                alt="Algorand-Pyteal Training"
                className="md:h-96 px-4 md:px-0"
              />
            </a>
          </div>
        </li>
        <li>
          <h1 className="text-primary font-bold text-3xl text-center pt-8">
            Yani M Wedding Booking System 💒{" "}
            <span className="text-tertiary">(WIP)</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4">
            <a
              href="http://yani-m-weddings.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={yanim}
                alt="Algorand-Pyteal Training"
                className="md:h-96 px-4 md:px-0"
              />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Journal;
