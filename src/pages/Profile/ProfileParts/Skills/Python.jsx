import React from "react";

const Python = () => {
  return (
    <li className="grid grid-cols-2 justify-center gap-4">
      <div className="text-4xl flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="#f1af49" height="1em" width="1em">
          <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 110-1.57.784.784 0 110 1.57z" />
          <path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451zm-3.981 10.436a.784.784 0 110 1.57.784.784 0 110-1.57z" />
        </svg>
        <p className=" text-primary">Python</p>
      </div>
      <div className="rating rating-lg rating-half">
        <input type="radio" name="py-rating" className="rating-hidden" />
        <input
          type="radio"
          name="py-rating"
          className="bg-[#f1af49] mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="py-rating"
          className="bg-[#f1af49] mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="py-rating"
          className="bg-[#f1af49] mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="py-rating"
          className="bg-[#f1af49] mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="py-rating"
          className="bg-[#f1af49] mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="py-rating"
          className="bg-[#f1af49] mask mask-star-2 mask-half-2"
          defaultChecked
        />
        <input
          type="radio"
          name="py-rating"
          className="bg-[#f1af49] mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="py-rating"
          className="bg-[#f1af49] mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="py-rating"
          className="bg-[#f1af49] mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="py-rating"
          className="bg-[#f1af49] mask mask-star-2 mask-half-2"
        />
      </div>
    </li>
  );
};

export default Python;
