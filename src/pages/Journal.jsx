import React from "react";
import IconBookOpen from "../assets/svg/IconBookOpen";

const Journal = () => {
  return (
    <div className="pt-24 bg-slate-100 flex flex-col items-center">
      <div className="text-6xl text-primary font-bold flex flex-row items-center justify-center gap-2">
        <IconBookOpen />
        <span>Journal</span>
      </div>
    </div>
  );
};

export default Journal;
