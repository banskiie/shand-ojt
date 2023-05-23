import React from "react";
import ProfileProfile from "./ProfileParts/ProfileProfile";
import ProfileSkills from "./ProfileParts/ProfileSkills";
import ProfileEducation from "./ProfileParts/ProfileEducation";
import ProfileEmployment from "./ProfileParts/ProfileEmployment";

const ProfileContent = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-slate-100 gap-16 md:pb-16">
      <ProfileProfile />
      <div className="flex flex-col items-start justify-center md:grid md:grid-cols-3">
        <ProfileSkills />
        <ProfileEducation />
        <ProfileEmployment />
      </div>
    </div>
  );
};

export default ProfileContent;
