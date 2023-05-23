import React from "react";
import posmak from "../../assets/image/achievements/pos_mak.jpg";
import rescol from "../../assets/image/achievements/res_col.jpg";
import swexh from "../../assets/image/achievements/sw_exh.jpg";

const HomeAchievements = () => {
  return (
    <div className="w-full bg-slate-200 flex flex-col items-center justify-start pb-16 md:pb-56 gap-y-4">
      <div>
        <h1 className="text-primary text-5xl md:text-7xl font-bold flex gap-2">
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M464 80h-60.1a4 4 0 01-4-4V63.92a32 32 0 00-32-31.92l-223.79.26a32 32 0 00-31.94 31.93V76a4 4 0 01-4 4H48a16 16 0 00-16 16v16c0 54.53 30 112.45 76.52 125.35a7.82 7.82 0 015.55 5.9c5.77 26.89 23.52 52.5 51.41 73.61 20.91 15.83 45.85 27.5 68.27 32.48a8 8 0 016.25 7.8V444a4 4 0 01-4 4h-59.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 00176 480h159.55c8.61 0 16-6.62 16.43-15.23A16 16 0 00336 448h-60a4 4 0 01-4-4v-86.86a8 8 0 016.25-7.8c22.42-5 47.36-16.65 68.27-32.48 27.89-21.11 45.64-46.72 51.41-73.61a7.82 7.82 0 015.55-5.9C450 224.45 480 166.53 480 112V96a16 16 0 00-16-16zM112 198.22a4 4 0 01-6 3.45c-10.26-6.11-17.75-15.37-22.14-21.89-11.91-17.69-19-40.67-19.79-63.63a4 4 0 014-4.15h40a4 4 0 014 4c-.02 27.45-.07 58.87-.07 82.22zm316.13-18.44c-4.39 6.52-11.87 15.78-22.13 21.89a4 4 0 01-6-3.46c0-26.51 0-56.63-.05-82.21a4 4 0 014-4h40a4 4 0 014 4.15c-.79 22.96-7.9 45.94-19.81 63.63z" />
          </svg>
          Achievements
        </h1>
      </div>
      <div>
        <p className="text-xl text-primary">
          Here are a couple of my recent achievements! 🥳
        </p>
      </div>
      <section className="flex flex-col items-center justify-start md:pt-20 gap-8 md:gap-24">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-24">
          <img
            className="h-96 w-96 object-cover drop-shadow-lg p-2"
            src={posmak}
            alt="A picture of me presenting my research poster."
          />
          <p className="text-2xl w-96 text-primary p-2 text-center md:text-left">
            Back in March 31, 2023, I placed 1st during the Intercollegiate
            Research Banner Making for the IT and Engineering Division. 📰
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:gap-24">
          <p className="text-2xl w-96 text-primary p-2 text-center md:text-left">
            On that same day, I also contributed two medals for our college as I
            also placed 3rd for the best research within the IT and Engineering
            Division.🪙
          </p>
          <img
            className="h-96 w-96 object-cover drop-shadow-lg p-2"
            src={rescol}
            alt="A group picture of all my batchmates during the Research Colloquium."
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-24">
          <img
            className="h-96 w-96 object-cover drop-shadow-lg"
            src={swexh}
            alt="A picture of me presenting my research poster."
          />
          <p className="text-2xl w-96 text-primary p-2 text-center md:text-left">
            Also back in February 22, 2023, I placed 3rd for the best in overall
            evaluation for my Capstone Research. 👌
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeAchievements;
