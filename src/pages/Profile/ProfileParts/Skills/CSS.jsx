import React from "react";

const CSS = () => {
  return (
    <li className="grid grid-cols-2 justify-center gap-4">
      <div className="text-4xl flex items-center gap-2">
        <svg viewBox="0 0 384 512" fill="#3795cf" height="1em" width="1em">
          <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
        </svg>
        <p className=" text-primary">CSS</p>
      </div>
      <div className="rating rating-lg rating-half">
        <input type="radio" name="css-rating" className="rating-hidden" />
        <input
          type="radio"
          name="css-rating"
          className="bg-[#3795cf] mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="css-rating"
          className="bg-[#3795cf] mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="css-rating"
          className="bg-[#3795cf] mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="css-rating"
          className="bg-[#3795cf] mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="css-rating"
          className="bg-[#3795cf] mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="css-rating"
          className="bg-[#3795cf] mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="css-rating"
          className="bg-[#3795cf] mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="css-rating"
          className="bg-[#3795cf] mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="css-rating"
          className="bg-[#3795cf] mask mask-star-2 mask-half-1"
          defaultChecked
        />
        <input
          type="radio"
          name="css-rating"
          className="bg-[#3795cf] mask mask-star-2 mask-half-2"
        />
      </div>
    </li>
  );
};

export default CSS;
