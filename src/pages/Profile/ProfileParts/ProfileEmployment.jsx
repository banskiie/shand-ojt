import React from "react";

const ProfileEmployment = () => {
  return (
    <div>
      <div className="text-5xl text-primary font-bold flex flex-row items-center justify-center gap-2">
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v4h5v-2h2v2h6v-2h2v2h5V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 11h-2v-2H9v2H7v-2H2v6c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-6h-5v2z" />
        </svg>
        <span>Employment</span>
      </div>
      <ul className="list-none text-primary text-2xl pt-8 flex flex-col items-start justify-center gap-4 px-10 md:px-0 pb-12">
        <li>
          <div className="flex flex-col md:pl-12">
            <span className="font-bold">CDO Pets Association</span>
            <span>Social Media Manager (2019 - 2021)</span>
          </div>
        </li>
        <li>
          <div className="flex flex-col md:pl-12">
            <span className="font-bold">Morvis Gaming</span>
            <span>Graphic Designer (2021 - 2022)</span>
          </div>
        </li>
        <li>
          <div className="flex flex-col md:pl-12">
            <span className="font-bold">Fligno Software Philippines, Inc.</span>
            <span>Software Engineer Intern (Feb 2023 - May 2023)</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProfileEmployment;
