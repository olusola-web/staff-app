import React, { useState, useEffect } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useStateContext } from "../../context/StateContext";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "react-activity";

const ProfileForm = () => {
  const [profileDetails, setProfileDetails] = useState({})
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    dob: "",
    marital_status: "",
    cv: null,
    address: "",
    email: "",
    sex: "",
    profile_picture: null,
    guarantor_full_name: "",
    guarantor_address: "",
    guarantor_phone: "",
    guarantor_photo: null,
  });

  const { baseUrl, isLoading, setIsLoading, config, uploadConfig, imgUrl } = useStateContext();

  const handleGetProfile = async () => {
    
    try {
      const url = `${baseUrl}/get-profile`;
      const res = await axios.get(url, config());
      setProfileDetails(res.data.data);
    } catch (error) {
      toast.error(error);
    }
  }
 useEffect(()=>{
    handleGetProfile()
  }, [])


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };


useEffect(()=>{
if (profileDetails) {
  setFormData({
    ...formData,
    full_name: profileDetails.full_name,
    phone_number: profileDetails.phone_number,
    dob: profileDetails.dob,
    marital_status: profileDetails.marital_status,
    address: profileDetails.address,
    email: profileDetails.email,
    sex: profileDetails.sex,
    guarantor_full_name: profileDetails.guarantor_full_name,
    guarantor_address: profileDetails.guarantor_address,
    guarantor_phone: profileDetails.guarantor_phone,
  });
}
}, [profileDetails])
  
  const handleSubmit = async () => {
    // e.preventDefault();
    setIsLoading(true);
    try {
      const url = `${baseUrl}/create-profile`;
      let formInput = new FormData();
      const payload =  formData;
    for (const key in payload) {
      formInput.append(key, payload[key]);
    }
      const res = await axios.post(url, payload, uploadConfig());
      toast.success(res?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
    // console.log("Form submitted:", formData);
    // Clear the form fields after submission
    setFormData({
    full_name: "",
    phone_number: "",
    dob: "",
    marital_status: "",
    cv: null,
    address: "",
    email: "",
    sex: "",
    profile_picture: null,
    guarantor_full_name: "",
    guarantor_address: "",
    guarantor_phone: "",
    guarantor_photo: null,
    });
  };

  return (
    <div className="mx-auto mt-0 p-4 bg-white">
      <div className="p-2 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-2 items-center md:mb-0 pt-7 mb-5 ">
          <FaHome className="m-0" />
          <p className="text-black">Home</p>
          <FaChevronRight className="m-1 text-[#049805]" />
          <p className="text-[#049805]"> Profile</p>
        </div>
        <Link to="/home/profile/edit" className="bg-[#049005] text-white rounded-md p-2">
          Edit Profile
        </Link>
      </div>
      <h2 className="text-2xl font-bold mb-7 mt-5">Personal Details Section</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Full Name
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter your full name"
            />
          </label>

          <label className="block mb-2 text-sm font-medium">
            Phone Number
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter your Phone Number"
            />
          </label>

          <label className="block mb-2 text-sm font-medium">
            Enter your Date of Birth
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
            />
          </label>

          <label className="block mb-2 text-sm font-medium">
            Marital Status
            <select className="w-full p-4 bg-gray-100 rounded-md" name="marital_status"
              value={formData.marital_status}
              onChange={handleChange}
              required>
              <option value="" selected disabled>Enter your marital status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Others">Others</option>
            </select>
          </label>
        </div>

        {/* Right Column */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Address
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter your address"
            />
          </label>

          <label className="block mb-2 text-sm font-medium">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Ènter your email"
            />
          </label>

          <label className="block mb-2 text-sm font-medium">
            Sex
            <select className="w-full p-4 bg-gray-100 rounded-md" name="sex">
              <option value="" selected disabled>Enter your sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>              
              <option value="Others">Others</option>
            </select>
          </label>

          <label className="block mb-2 text-sm font-medium">
            Kindly upload a picture of yourself
            <a className="text-green-600 italic ml-5" href={`${imgUrl}/${profileDetails.profile_picture}`} target="__blank">view</a>
            <input
              type="file"
              name="profile_picture"
              onChange={handleChange}
              accept="image/*"
              required
              className="w-full p-4 bg-gray-100 rounded-md"
            />
          </label>
        </div>
      </form>

      <form>
        <label className="block mb-2 text-sm font-medium ">
          Kindly upload your cv
          <a className="text-green-600 italic ml-5" href={`${imgUrl}/${profileDetails.cv}`} target="__blank">view</a>
          <input
            type="file"
            name="cv"
            onChange={handleChange}
            accept=".pdf, .doc, .docx"
            required
            className="w-full p-4 bg-gray-100 rounded-md"
          />
        </label>
      </form>

      {/* GUARANTOR SECTION */}
      <h2 className="text-2xl font-bold mb-7 mt-5">Guarantor Section</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Full Name
            <input
              type="text"
              name="guarantor_full_name"
              value={formData.guarantor_full_name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter guarantor's full name"
            />
          </label>

          <label className="block mb-2 text-sm font-medium">
            Phone Number
            <input
              type="tel"
              name="guarantor_phone"
              value={formData.guarantor_phone}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter guarantor's phone number"
            />
          </label>
        </div>

        {/* Right Column */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Address
            <input
              name="guarantor_address"
              value={formData.guarantor_address}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter guarantor's address"
            />
          </label>

          <label className="block mb-2 text-sm font-medium">
            Guarantor Photo
            <a className="text-green-600 italic ml-5" href={`${imgUrl}/${profileDetails.guarantor_photo}`} target="__blank">view</a>
            <input
              type="file"
              name="guarantor_photo"
              onChange={handleChange}
              accept="image/*"
              required
              className="w-full p-4 bg-gray-100 rounded-md"
            />
          </label>
        </div> 
      </form>
      <ToastContainer />
        <div className="mb-4 py-7">
          <button
          onClick={()=> handleSubmit()}
            type="submit"
            className="w-1/2 block bg-[#049805] text-white p-3  rounded focus:outline-none mx-auto"
          >
            {isLoading ? <Spinner /> : "Submit"}
          </button>
        </div>
    </div>
  );
};

export default ProfileForm;
