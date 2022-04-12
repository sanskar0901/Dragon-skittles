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
          {/* <div>
          <img src={logo} alt="logo" width={400} height={100} />
        </div> */}
          <p className="font-poppins flex flex-col gap-5 justify-center items-center text-[8vh] text-center mt-5 font-bold text-cyan-500">
            {" "}
            Job Buddy
          </p>
          <div className="font-poppins flex flex-col gap-6 justify-center items-center ">
            <div>
              <h2 className="text-[5vh] text-center text-black font-semibold">
                LOGIN
              </h2>
            </div>
            <div>
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
                  className="outline-none w-[24vw] px-4 py-2 text-[3vh] font-light rounded-xl border border-cyan-500 "

                  //   value={userData.email}
                  //   onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  id="pass"
                  placeholder="Password"
                  autoComplete="off"
                  className="outline-none w-[24vw] px-4 py-2 text-[3vh] font-light rounded-xl border border-cyan-500 "

                  //   value={userData.password}
                  //   onChange={handleChange}
                />
                <div className="w-[6vw] p-2 text-[3vh] text-white rounded-lg text-center bg-orange-500">
                  <button className="font-semibold  " type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Login;
