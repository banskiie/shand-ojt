import React from "react";
import ProfileIntro from "./Profile/ProfileIntro";
import ProfileIcons from "./Profile/ProfileIcons";
import ProfileContent from "./Profile/ProfileContent";

const Profile = () => {
  return (
    <>
      <div className="w-full bg-slate-100 flex flex-col items-center justify-center gap-4 pt-24 pb-8">
        <ProfileIntro />
        <ProfileIcons />
      </div>
      <ProfileContent />
    </>
  );
};

export default Profile;
