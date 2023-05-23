import React from "react";
import bio from "../../assets/image/bio.png";

const ProfileIntro = () => {
  return (
    <>
      <div>
        <div className="border-8 border-secondary rounded-full">
          <img
            src={bio}
            alt="A picture of me posing casually."
            className="h-72 w-72 md:h-96 md:w-96 object-cover rounded-full border-4 border-transparent"
          />
        </div>
      </div>
      <p className="text-5xl md:text-7xl font-bold text-secondary">
        Ivan Sinohon
      </p>
    </>
  );
};

export default ProfileIntro;
