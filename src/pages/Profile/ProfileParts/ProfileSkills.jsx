import React from "react";
import HTML from "./Skills/HTML";
import Javascript from "./Skills/Javascript";
import CSS from "./Skills/CSS";
import ReactSkill from "./Skills/ReactSkill";
import PHP from "./Skills/PHP";
import Python from "./Skills/Python";
import MySQL from "./Skills/MySQL";

const ProfileSkills = () => {
  return (
    <div className="flex flex-col items-center gap-2 pb-16">
      <div className="text-5xl text-primary font-bold flex flex-row items-center justify-center pb-4">
        <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
          <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 001.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 00-1.828 1.829l-.645 1.936a.361.361 0 01-.686 0l-.645-1.937a2.89 2.89 0 00-1.828-1.828l-1.937-.645a.361.361 0 010-.686l1.937-.645a2.89 2.89 0 001.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 01.412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 010 .412l-1.162.387A1.734 1.734 0 004.593 5.69l-.387 1.162a.217.217 0 01-.412 0L3.407 5.69A1.734 1.734 0 002.31 4.593l-1.162-.387a.217.217 0 010-.412l1.162-.387A1.734 1.734 0 003.407 2.31l.387-1.162zM10.863.099a.145.145 0 01.274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 010 .274l-.774.258a1.156 1.156 0 00-.732.732l-.258.774a.145.145 0 01-.274 0l-.258-.774a1.156 1.156 0 00-.732-.732L9.1 2.137a.145.145 0 010-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
        </svg>
        <span>Skills</span>
      </div>
      <div>
        <ul className="flex flex-col md:my-6 px-4">
          <HTML />
          <CSS />
          <Javascript />
          <ReactSkill />
          <PHP />
          <Python />
          <MySQL />
        </ul>
      </div>
    </div>
  );
};

export default ProfileSkills;
