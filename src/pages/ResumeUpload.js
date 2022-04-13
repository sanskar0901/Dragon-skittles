import React, { useState } from "react";
import jobSearch from "../Assets/Images/hiringdashboard.gif";
import axios from 'axios';
const ResumeUpload = () => {

  const randomNumber = async (min, max) => {
    setscore(Math.round(Math.random() * (max - min) + min));

    console.log(Math.round(score))
    const s = {
      "score": Math.round(score)
    }

    await axios.get('https://fierce-temple-12053.herokuapp.com/company/', s)
      .then(res => {
        // console.log(s)
        // console.log(res.data)
        setcompany(res.data)
      });
    console.log(company)
  }

  const [score, setscore] = useState(0)
  const [company, setcompany] = useState([])

  return (
    <>
      <div className="flex flex-col w-full  items-center justify-center bg-grey-lighter gap-8 bg-cyan-100 font-poppins">
        <div>
          <p className="text-black font-bold text-4xl">
            Let's find some jobs for you!
          </p>
        </div>
        <div className="w-[25vw] flex justify-center ">
          <img src={jobSearch} alt="jobSearch" className="rounded-full" />
        </div>
        <label className="w-[22vw] h-[20vh] flex flex-col items-center px-4 py-6 bg-white text-cyan-500 rounded-lg shadow-lg tracking-wide uppercase border border-cyan-700 cursor-pointer hover:bg-cyan-500 hover:text-white hover:border-0 relative">
          <svg
            className="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className={`mt-2 text-base leading-normal `}>
            Upload Your Resume
          </span>
          <input
            type="file"
            className="absolute left-8 top-24"
          // onChange={upload}
          // ref="fileName"
          />
        </label>

        <div className="w-[25vw] flex justify-center"><button className="flex justify-center " onClick={e => {
          e.preventDefault();
          randomNumber(50, 98)
        }}> Check your Score:</button><b>{Math.round(score)}</b></div>
        <p className="w-[25vw] flex justify-center">Companies You are eligible for:</p>
        <div>{company.map(c => {
          return (
            <div>
              <p className="text-black font-bold text-4xl text-center">
                {c.name}
              </p>

            </div>
          )
        })
        }</div>
        {/* <button className="flex justify-center" onClick={Submit}> Suggested Companies</button> */}

      </div>
    </>
  );
};

export default ResumeUpload;
