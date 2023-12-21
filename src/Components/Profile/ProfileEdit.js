import React, { useState, useEffect } from "react";
// import Button from "../Button/ButtonReusable";
import { FaHome, FaChevronRight } from "react-icons/fa";
// import { LuPencil } from "react-icons/lu";
// import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useStateContext } from "../../context/StateContext";
import { Spinner } from "react-activity";

const ProfileEdit = () => {
  const [isLoading, setIsLoading] = useState(false)
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

 const { imgUrl, profileDetails } = useStateContext();

   const [errors, setErrors] = useState({});

  const handleChange = (e) => {
  const { name, value, type, files } = e.target;
  setFormData({
    ...formData,
    [name]: type === "file" ? files[0] : value,
  });

  const newErrors = { ...errors };
  delete newErrors[name];
  setErrors(newErrors);
};

const handleBlur = (e) => {
  const { name, value } = e.target;
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: value.trim() ? null : `${name.split('_').join(' ')} is required`,
  }));
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name === "email") {
    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    } else if (!isValidEmail.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
    } else {
      // Clear email error if it's valid
      const newErrors = { ...errors };
      delete newErrors.email;
      setErrors(newErrors);
    }
  }
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
    // form validation
const requiredFields = [
  'full_name',
  'phone_number',
  'dob',
  'cv',
  'marital_status',
  'address',
  'email',
  'sex',
  'profile-picture',
  'guarantor_full_name',
  'guarantor_address',
  'guarantor_phone',
  'guarantor_photo',
];

const newErrors = {};
requiredFields.forEach((field) => {
  if (!FormData[field]) {
    newErrors[field] = `${field.split('_').join(' ')} is required`;
  }
});

if (Object.keys(newErrors).length > 0) {
  setErrors(newErrors);
  return;
}
    setIsLoading(true);
    console.log("Form submitted:", formData);  
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
              onBlur={handleBlur}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter your full name"
            />
            {errors.full_name && <p className="text-red-600 font-bold">{errors.full_name}</p>}
          </label>

          <label className="block mb-2 text-sm font-medium">
            <div className="flex justify-between">
              <p>Phone Number</p>
            </div>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter your Phone Number"
            />
            {errors.phone_number && <p className="text-red-600 font-bold">{errors.phone_number}</p>}
          </label>

          <label className="block mb-2 text-sm font-medium">
            <div className="flex justify-between">
              <p>Enter your Date of Birth</p>
            </div>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
            />
            {errors.dob && <p className="text-red-600 font-bold">{errors.dob}</p>}
          </label>

          <label className="block mb-2 text-sm font-medium">
            <div className="flex justify-between">
              <p>Marital Status</p>
            </div>
               <select className="w-full p-4 bg-gray-100 rounded-md" name="marital_status"
              value={formData.marital_status}
              onChange={handleChange}
              onBlur={handleBlur}
              required>
              <option value="" selected disabled>Enter your marital status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Others">Others</option>
            </select>
            {errors.marital_status && <p className="text-red-600 font-bold">{errors.marital_status}</p>}
          </label>
        </div>

        {/* Right Column */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            <div className="flex justify-between">
              <p>Address</p>
            </div>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter your address"
            />
            {errors.address && <p className="text-red-600 font-bold">{errors.address}</p>}
          </label>

          <label className="block mb-2 text-sm font-medium">
            <div className="flex justify-between">
              <p>Email</p>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Ènter your email"
            />
            {errors.email && <p className="text-red-600 font-bold">{errors.email}</p>}
          </label>

          <label className="block mb-2 text-sm font-medium">
            <div className="flex justify-between">
              <p>Sex</p>
            </div>
             <select
             value={formData.sex}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="w-full p-4 bg-gray-100 rounded-md" name="sex">
              <option value="" selected disabled>Enter your sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>              
              <option value="Others">Others</option>
            </select>
            {errors.sex && <p className="text-red-600 font-bold">{errors.sex}</p>}
          </label>

          <label className="block mb-2 text-sm font-medium">
            Kindly upload a picture of yourself
            <a className="text-green-600 italic ml-5" href={`${imgUrl}/${profileDetails.profile_picture}`} target="__blank">view</a>
            <input
              type="file"
              name="profile_picture"
              onChange={handleChange}
              onBlur={handleBlur}
              accept="image/*"
              required
              className="w-full p-4 bg-gray-100 rounded-md"
            />
            {errors.profile_picture && <p className="text-red-600 font-bold">{errors.profile_picture}</p>}
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
            onBlur={handleBlur}
            accept=".pdf, .doc, .docx"
            required
            className="w-full p-4 bg-gray-100 rounded-md"
          />
          {errors.cv && <p className="text-red-600 font-bold">{errors.cv}</p>}
        </label>
      </form>

      {/* GUARANTOR SECTION */}
      <h2 className="text-2xl font-bold mb-7 mt-5">Guarantor Section</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            <div className="flex justify-between">
              <p>Guarantor Full Name</p>
            </div>
            <input
              type="text"
              name="guarantor_full_name"
              value={formData.guarantor_full_name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter guarantor's full name"
            />
            {errors.guarantor_full_name && <p className="text-red-600 font-bold">{errors.guarantor_full_name}</p>}
          </label>

          <label className="block mb-2 text-sm font-medium">
            <div className="flex justify-between">
              <p>Guarantor Phone Number</p>
            </div>
            <input
              type="tel"
              name="guarantor_phone"
              value={formData.guarantor_phone}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter guarantor's phone number"
            />
            {errors.guarantor_phone && <p className="text-red-600 font-bold">{errors.guarantor_phone}</p>}
          </label>
        </div>

        {/* Right Column */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            <div className="flex justify-between">
              <p>Guarantor Address</p>
            </div>
            <input
              name="guarantor_address"
              value={formData.guarantor_address}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter guarantor's address"
            />
            {errors.guarantor_address && <p className="text-red-600 font-bold">{errors.guarantor_address}</p>}
          </label>

         <label className="block mb-2 text-sm font-medium">
            Guarantor Photo
            <a className="text-green-600 italic ml-5" href={`${imgUrl}/${profileDetails.guarantor_photo}`} target="__blank">view</a>
            <input
              type="file"
              name="guarantor_photo"
              onChange={handleChange}
              onBlur={handleBlur}
              accept="image/*"
              required
              className="w-full p-4 bg-gray-100 rounded-md"
            />
            {errors.guarantor_photo && <p className="text-red-600 font-bold">{errors.guarantor_photo}</p>}
          </label>
        </div>
        
      </form>
      <ToastContainer />
      {/* Save Button */}
        <div className="flex items-center justify-center mb-4 py-7">
          <button
          onClick={()=> handleSubmit()}
            type="submit"
            className="w-1/2 flex items-center justify-center bg-[#049805] text-white p-3 rounded mx-auto"
          >
            {isLoading ? <Spinner /> : "Save"}
          </button>
        </div>
    </div>
  );
};

export default ProfileEdit;
