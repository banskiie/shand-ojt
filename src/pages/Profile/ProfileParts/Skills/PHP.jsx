import React from "react";

const PHP = () => {
  return (
    <li className="grid grid-cols-2 justify-center gap-4">
      <div className="text-4xl flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="#7377ad" height="1em" width="1em">
          <path d="M2.15 16.78h1.57a.14.14 0 00.14-.12l.35-1.82h1.22a4.88 4.88 0 001.51-.2A2.79 2.79 0 008 14a3.18 3.18 0 00.67-.85 3.43 3.43 0 00.36-1 2.43 2.43 0 00-.41-2.16 2.64 2.64 0 00-2.09-.78h-3a.16.16 0 00-.15.13L2 16.6a.19.19 0 000 .13.17.17 0 00.15.05zM5 10.62h1a1.45 1.45 0 011.08.29c.17.18.2.52.11 1a1.81 1.81 0 01-.57 1.12 2.17 2.17 0 01-1.33.33h-.8zm9.8-.95a2.7 2.7 0 00-1.88-.51h-1.19l.33-1.76a.15.15 0 000-.13.16.16 0 00-.11 0h-1.57a.14.14 0 00-.14.12l-1.38 7.27a.13.13 0 000 .12.13.13 0 00.11.06h1.54a.14.14 0 00.14-.13l.77-4.07h1.11c.45 0 .61.1.66.16a.81.81 0 010 .62l-.61 3.24a.13.13 0 000 .12.14.14 0 00.11.06h1.56a.16.16 0 00.15-.13l.64-3.4a1.7 1.7 0 00-.24-1.64zm4.52-.51h-3.13a.14.14 0 00-.15.13l-1.46 7.31a.16.16 0 000 .13.14.14 0 00.11.05h1.63a.14.14 0 00.15-.12l.37-1.82h1.27a5.28 5.28 0 001.56-.2 3 3 0 001.18-.64 3.31 3.31 0 00.7-.85 3.45 3.45 0 00.37-1 2.38 2.38 0 00-.42-2.16 2.81 2.81 0 00-2.18-.83zm.62 2.77a1.83 1.83 0 01-.6 1.12 2.28 2.28 0 01-1.37.33h-.8l.54-2.76h1a1.6 1.6 0 011.13.29c.16.18.16.52.1 1.02z" />
        </svg>
        <p className=" text-primary">PHP</p>
      </div>
      <div className="rating rating-lg rating-half">
        <input type="radio" name="php-rating" className="rating-hidden" />
        <input
          type="radio"
          name="php-rating"
          className="bg-[#7377ad] mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="php-rating"
          className="bg-[#7377ad] mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="php-rating"
          className="bg-[#7377ad] mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="php-rating"
          className="bg-[#7377ad] mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="php-rating"
          className="bg-[#7377ad] mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="php-rating"
          className="bg-[#7377ad] mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="php-rating"
          className="bg-[#7377ad] mask mask-star-2 mask-half-1"
          defaultChecked
        />
        <input
          type="radio"
          name="php-rating"
          className="bg-[#7377ad] mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="php-rating"
          className="bg-[#7377ad] mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="php-rating"
          className="bg-[#7377ad] mask mask-star-2 mask-half-2"
        />
      </div>
    </li>
  );
};

export default PHP;
