import React from "react";
import HomeHeadline from "./Home/HomeHeadline";
import HomeContent from "./Home/HomeContent";

const Home = () => {
  return (
    <div className="w-screen flex flex-col items-center bg-primary">
      <HomeHeadline />
      <HomeContent />
    </div>
  );
};

export default Home;
