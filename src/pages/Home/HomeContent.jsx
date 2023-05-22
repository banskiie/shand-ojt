import React from "react";

const HomeContent = () => {
  return (
    <div className="bg-slate-100 w-full font-thin text-slate-900  flex flex-col items-center justify-center">
      <section className="md:w-4/5 mx-4 text-lg md:text-2xl my-32">
        <p>
          Allow me to introduce myself. My name is Ivan Sinohon, and I am a
          highly skilled and motivated software developer with a passion for
          creating efficient and user-friendly web applications, with an
          extensive skillset in:
        </p>
        <ul className="list-disc pl-8 py-4">
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>PHP</li>
          <li>Python</li>
        </ul>
        <p>
          I have a couple of years in experience working with the aforementioned
          technologies, and I have successfully completed various projects that
          have allowed me to hone my expertise in each of them.
        </p>
      </section>
    </div>
  );
};

export default HomeContent;
