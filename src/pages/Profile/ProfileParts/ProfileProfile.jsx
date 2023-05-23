import React from "react";

const ProfileProfile = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-5xl text-primary font-bold flex flex-row items-center justify-center">
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z" />
        </svg>
        <span>Profile</span>
      </div>
      <p className="italic text-base pt-2 px-4 md:px-0 md:text-xl text-center text-tertiary md:w-3/5 mx-auto my-4">
        "Ivan Sinohon is an aspiring Front-End Developer with the hopes of
        designing and creating meaningful apps as a living. Ivan specializes in
        using front-end tools such as Javascript, HTML and CSS, alongside its
        frameworks and related-technologies, such as React, Tailwind, jQuery and
        Ajax to lift up any development team he works in. Ivan has also a keen
        eye in design as he has worked freelance jobs for several small
        establishment in graphic design and social media management. Ivan is
        always willing to learn and enable himself to become the best version of
        himself. In her free time, Ivan likes to play video games, play
        basketball and make music."
      </p>
    </div>
  );
};

export default ProfileProfile;
