import React from "react";
import IconLightBulb from "../assets/svg/IconLightBulb";

const Reflection = () => {
  return (
    <div className="pt-24 bg-slate-100 flex flex-col items-center">
      <div className="text-6xl text-primary font-bold flex flex-row items-center justify-center gap-2">
        <IconLightBulb />
        <span>Reflection</span>
      </div>
      <ul className="list-decimal text-primary text-2xl py-8 w-4/5">
        <li>
          <div className="flex flex-col justify-center items-start">
            <h1>
              Describe the department or functional area and its methods of
              operation.
            </h1>
            <p className="text-slate-500 font-light italic py-2">
              The Research and Development Department handles the sole purpose
              of the development of company projects in a well-organized manner.
              It is mostly a top-bottom chain of command as most senior staff
              members has the final say on most decisions for each group.
            </p>
          </div>
        </li>
        <li>
          <div className="flex flex-col justify-center items-start">
            <h1>As an Intern, how did the department benefit from you?</h1>
            <p className="text-slate-500 font-light italic py-2">
              It helped me understand the life of a software engineer, both its
              ups and downs. It's a very tedious and complicated job but also
              very satisfying when tasks are completed. Most of my senior
              colleagues also helped me on how to be a better developer by
              sharing their best knowledge and practices.
            </p>
          </div>
        </li>
        <li>
          <div className="flex flex-col justify-center items-start">
            <h1>
              Summarize how you spent the hours during your practicum including
              specific accomplishments.
            </h1>
            <p className="text-slate-500 font-light italic py-2">
              Since I was designated on the Algorand-Pyteal Blockchain Team, I
              had a lot of time to study and learn not only about blockchain but
              also industry-level languages and technologies as well. It
              immensely helped me to become a better web developer as I gather a
              lot of courses and seminars during my 3-month stint here in Fligno
              Software Philippines, Inc. I got to further my studies about
              Javascript, HTML, CSS, React, Python, Laravel and other related
              technologies.
            </p>
          </div>
        </li>
        <li>
          <div className="flex flex-col justify-center items-start">
            <h1>What have you learned from the experience in the company?</h1>
            <p className="text-slate-500 font-light italic py-2">
              As I've previously answered, Fligno helped me to become a better
              professional developer as I've learned a lot of new knowledge from
              both online materials and meaningful talks with my senior
              colleagues. I wish to work with these people in the near future as
              well.
            </p>
          </div>
        </li>
        <li>
          <div className="flex flex-col justify-center items-start">
            <h1>How was your experience from the people in the company?</h1>
            <p className="text-slate-500 font-light italic py-2">
              Everyone was amazing to work with. There was always a sense of
              family within the Fligno community. I feel safe and secure during
              my stay because all of the people were kind, friendly,
              approachable and smart, as well. Colleagues were always willing to
              talk about their experiences and teach us meaningful lessons on
              the Software industry and this has immensely helped me as an
              individual as I plan to walk the same career path.
            </p>
          </div>
        </li>
        <li>
          <div className="flex flex-col justify-center items-start">
            <h1>The most memorable event during your practicum?</h1>
            <p className="text-slate-500 font-light italic py-2">
              I would probably nominate the times I had to join several
              Learn-at-Fligno workships because it was meaningful and
              industry-level knowledge I gained basically for free.
            </p>
          </div>
        </li>
        <li>
          <div className="flex flex-col justify-center items-start">
            <h1>
              Recommendation you have for the company in order to facilitate
              practicum experiences in the future.
            </h1>
            <p className="text-slate-500 font-light italic py-2">
              A recommendation I could give is that there should be more
              comfortable because it's a bit of a safety hazard to sit on broken
              office chairs.
            </p>
          </div>
        </li>
        <li>
          <div className="flex flex-col justify-center items-start">
            <h1>
              Your advice to those who will take their practicum in the near
              future.
            </h1>
            <p className="text-slate-500 font-light italic py-2">
              I would say that Fligno might be one of the best companies to go
              for an Internship because the knowledge that an OJT/Intern can
              gain is priceless compared to other companies here in CDO. The
              environment feels safe and the people are friendly and
              approachable. Don't take one's time for granted in Fligno because
              it's probably one of the best Tech companies here in CDO.
            </p>
            <div></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Reflection;
