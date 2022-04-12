import React from "react";

const Signup = () => {
  return (
    <>
      <div>
        {/* <Navbar />
        <ToastContainer
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
        <div className="flex flex-col gap-6 font-poppins px-8 my-10">
          <div>
            <p className="text-[3vh] font-poppins text-cyan-500 font-bold">
              Create an account.
            </p>
          </div>
          <form>
            <div className="grid grid-cols-2 gap-20 items-center justify-center px-40">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h4>Full Name</h4>
                  <input
                    type="text"
                    className="w-full p-4 outline-none  border-cyan-500 rounded-md border-2"
                    name="name"
                    placeholder="Enter your full name"
                    // value={formdata.name ? formdata.name : ""}
                    // onChange={(e) => {
                    //   setFormData({ ...formdata, name: e.target.value });
                    // }}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Date Of Birth</h4>
                  <input
                    type="date"
                    name="dob"
                    className="w-full p-4 outline-none  border-cyan-500 rounded-md border-2"
                    placeholder="Text here"
                    // value={formdata.contact ? formdata.contact : ""}
                    // onChange={(e) => {
                    //   setFormData({ ...formdata, contact: e.target.value });
                    // }}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Age</h4>
                  <input
                    type="text"
                    name="age"
                    className="w-full p-4 outline-none  border-cyan-500 rounded-md border-2"
                    placeholder="Enter your age"
                    // value={formdata.staffcount ? formdata.staffcount : ""}
                    // onChange={(e) => {
                    //   setFormData({ ...formdata, staffcount: e.target.value });
                    // }}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Gender</h4>
                  <input
                    type="text"
                    name="gender"
                    className="w-full p-4 outline-none  border-cyan-500 rounded-md border-2"
                    placeholder="Text here"
                    // value={formdata.capacity ? formdata.capacity : ""}
                    // onChange={(e) => {
                    //   setFormData({ ...formdata, capacity: e.target.value });
                    // }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h4>Country</h4>
                  <input
                    type="text"
                    name="state"
                    className="w-full p-4 outline-none  border-cyan-500 rounded-md border-2"
                    placeholder="Text here"
                    // value={formdata.state ? formdata.state : ""}
                    // onChange={(e) => {
                    //   setFormData({ ...formdata, state: e.target.value });
                    // }}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>State</h4>
                  <input
                    type="text"
                    name="city"
                    className="w-full p-4 outline-none  border-cyan-500 rounded-md border-2"
                    placeholder="Text here"
                    // value={formdata.city ? formdata.city : ""}
                    // onChange={(e) => {
                    //   setFormData({ ...formdata, city: e.target.value });
                    // }}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>City</h4>
                  <input
                    type="text"
                    name="pincode"
                    className="w-full p-4 outline-none  border-cyan-500 rounded-md border-2"
                    placeholder="Text here"
                    // value={formdata.pincode ? formdata.pincode : ""}
                    // onChange={(e) => {
                    //   setFormData({ ...formdata, pincode: e.target.value });
                    // }}
                  />
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                  <h4 className="invisible">Role</h4>
                  <button
                    type="submit"
                    className="w-full p-4 outline-none bg-green-500 rounded-md border-2 border-black text-white text-xl"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
