import React from "react";
import user from "../../assets/images/appoinmentDoctor.png";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("medLifeUser");
    window.location.reload(true);
    navigate("/login");
  };
  return (
    <section className="container mx-auto flex flex-col lg:flex-row gap-10 my-[100px]">
      <div className="w-full lg:w-2/5 p-5 lg:p-0">
        <img src={user} alt="" />
      </div>
      <div className="w-full lg:w-3/5 p-5 lg:p-0">
        <form className=" flex flex-col gap-6">
          <div>
            <label>First Name</label>
            <input
              type="text"
              className="border w-full rounded-md h-10 p-5"
              value="Your First Name"
              disabled
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              className="border w-full rounded-md h-10 p-5"
              value="Your Last Name"
              disabled
            />
          </div>
          <div>
            <label>Email Address</label>
            <input
              type="text"
              className="border w-full rounded-md h-10 p-5"
              value="youremail@gmail.com"
              disabled
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="text"
              className="border w-full rounded-md h-10 p-5"
              value="420420420420"
              disabled
            />
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              className="border w-full rounded-md h-10 p-5"
              value="shamoli"
              disabled
            />
          </div>
        </form>
        <div className="flex gap-5 justify-center mt-[20px]">
          <button className="btn ">Edit</button>
          <button className="btn bg-[#00b3ad] border-0" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
