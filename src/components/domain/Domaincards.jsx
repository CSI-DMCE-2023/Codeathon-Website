import React from "react";

function Domaincards({ imglogo, title, paragraph, index }) {
  return (
    <div className="card hover:scale-105 rounded-xl w-full max-w-sm bg-white ease-in-out duration-500">
      <div className="px-3 pt-3">
        <img src={imglogo} className="rounded-xl" />
      </div>
      <div className=" p-4">
        <span className="font-semibold textlg sm:text-xl text-center">
          #{index + 1} {title}
        </span>
        <div className="mt-4">
          <p className="text-sm sm:text-base text-left">{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Domaincards;
