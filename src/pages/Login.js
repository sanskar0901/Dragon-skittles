import React from "react";

const Login = () => {
  return (
    <>
      <>
        <div className="flex flex-col gap-[5vh] h-[100vh] justify-center items-center -mt-12">
          {/* <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}

          <p className="font-poppins flex flex-col gap-5 justify-center items-center text-[8vh] text-center mt-5 font-bold text-cyan-500">
            {" "}
            Job Buddy
          </p>
          <div className="font-poppins flex flex-col gap-6 justify-center items-center ">
            <div>
              <h2 className="text-[4vh] text-center text-black">
                Let's get Started
              </h2>
            </div>
            <div className="w-[30vw] h-[42vh] bg-green-100 border border-black p-12 rounded-lg">
              <form
                action="/"
                // onSubmit={onSubmit}
                className="flex flex-col gap-10 justify-center items-center"
              >
                <input
                  type="email"
                  name="email"
                  id="mail"
                  placeholder="Email address"
                  autoComplete="off"
                  className="outline-none w-full px-4 py-2 text-[3vh] font-light rounded-xl border border-cyan-500 "

                  //   value={userData.email}
                  //   onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  id="pass"
                  placeholder="Password"
                  autoComplete="off"
                  className="outline-none w-full px-4 py-2 text-[3vh] font-light rounded-xl border border-cyan-500 "

                  //   value={userData.password}
                  //   onChange={handleChange}
                />
                <div className="w-full p-2 text-[3vh] text-white rounded-lg text-center bg-orange-500">
                  <button className="font-semibold  " type="submit">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
            <div className="w-[30vw] h-[10vh] bg-green-100 border border-black  rounded-lg  flex justify-center items-center">
              <p className="text-xl">
                New to Job-Buddy?{" "}
                <span className="text-xl text-cyan-500">
                  <a href="/">Create an account.</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Login;
