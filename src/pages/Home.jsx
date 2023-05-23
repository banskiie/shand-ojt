import React from "react";
import HomeHeadline from "./Home/HomeHeadline";
import HomeContent from "./Home/HomeContent";
import HomeAchievements from "./Home/HomeAchievements";

const Home = () => {
  return (
    <div className="w-screen flex flex-col items-center bg-primary">
      <HomeHeadline />
      <HomeContent />
      <HomeAchievements />
    </div>
  );
};

export default Home;
