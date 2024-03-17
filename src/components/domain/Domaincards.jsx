import React from "react";

function Domaincards({ imglogo, title, paragraph, index }) {
  return (
    <div className="card hover:scale-105 rounded-xl flex-1 max-w-sm bg-white ease-in-out duration-500">
      <div className="px-3 pt-3 h-1/3">
        <img src={imglogo} className="rounded-xl h-full w-full object-cover" />
      </div>
      <div className=" p-4 ">
        <span className="font-semibold textlg sm:text-xl text-center">
          PS{index + 1} {title}
        </span>
        <div className="mt-4">
          <p className="text-sm sm:text-base text-left">{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Domaincards;
