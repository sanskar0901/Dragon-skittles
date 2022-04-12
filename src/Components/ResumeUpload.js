import React from "react";

const ResumeUpload = () => {
  return (
    <>
      <div className="flex flex-col w-full h-screen items-center justify-center bg-grey-lighter gap-10">
        <div>
          <p>Let's find some jobs for you</p>
        </div>
        <div></div>
        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-cyan-500 rounded-lg shadow-lg tracking-wide uppercase border border-cyan-700 cursor-pointer hover:bg-cyan-500 hover:text-white hover:border-0">
          <svg
            className="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base leading-normal">
            Upload Your Resume
          </span>
          <input type="file" className="hidden" />
        </label>
      </div>
    </>
  );
};

export default ResumeUpload;
