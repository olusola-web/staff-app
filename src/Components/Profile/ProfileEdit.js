import React, { useState } from "react";
// import Button from "../Button/ButtonReusable";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { Link } from "react-router-dom";

const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    dateOfBirth: "",
    maritalStatus: "",
    cv: null,
    address: "",
    email: "",
    sex: "",
    picture: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the form data (e.g., send to a server, update state)
    console.log("Form submitted:", formData);
    // Clear the form fields after submission
    setFormData({
      fullName: "",
      phoneNumber: "",
      dateOfBirth: "",
      maritalStatus: "",
      cv: null,
      address: "",
      email: "",
      sex: "",
      picture: null,
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
        <Link
          to="/home/profile/edit"
          className="bg-[#049005] text-white rounded-md p-2"
        >
          Edit Profile
        </Link>
      </div>
      <h2 className="text-2xl font-bold mb-7 mt-5">Personal Details Section</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            <div className="flex justify-between">
              <p>Full Name</p>
              <div className="flex">
                <p>Edit</p>
                <LuPencil className="m-1" />
              </div>
            </div>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter your full name"
            />
          </label>

          <label className="block mb-2 text-sm font-medium">
            <div className="flex justify-between">
              <p>Phone Number</p>
              <div className="flex">
                <p>Edit</p>
                <LuPencil className="m-1" />
              </div>
            </div>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter your Phone Number"
            />
          </label>

          <label className="block mb-2 text-sm font-medium">
            <div className="flex justify-between">
              <p>Enter your Date of Birth</p>
              <div className="flex">
                <p>Edit</p>
                <LuPencil className="m-1" />
              </div>
            </div>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
            />
          </label>

          <label className="block mb-2 text-sm font-medium">
            <div className="flex justify-between">
              <p>Marital Status</p>
              <div className="flex">
                <p>Edit</p>
                <LuPencil className="m-1" />
              </div>
            </div>
            <input
              type="text"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter your marital status"
            />
          </label>
        </div>

        {/* Right Column */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            <div className="flex justify-between">
              <p>Address</p>
              <div className="flex">
                <p>Edit</p>
                <LuPencil className="m-1" />
              </div>
            </div>
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
            <div className="flex justify-between">
              <p>Email</p>
              <div className="flex">
                <p>Edit</p>
                <LuPencil className="m-1" />
              </div>
            </div>
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
            <div className="flex justify-between">
              <p>Enter your Sex</p>
              <div className="flex">
                <p>Edit</p>
                <LuPencil className="m-1" />
              </div>
            </div>
            <input
              type="text"
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter your sex"
            />
          </label>

          <label className="block mb-2 text-sm font-medium">
            Kindly upload a picture of yourself
            <input
              type="file"
              name="picture"
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
            <div className="flex justify-between">
              <p>Full Name</p>
              <div className="flex">
                <p>Edit</p>
                <LuPencil className="m-1" />
              </div>
            </div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter guarantor's full name"
            />
          </label>

          <label className="block mb-2 text-sm font-medium">
            <div className="flex justify-between">
              <p>Phone Number</p>
              <div className="flex">
                <p>Edit</p>
                <LuPencil className="m-1" />
              </div>
            </div>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
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
            <div className="flex justify-between">
              <p>Address</p>
              <div className="flex">
                <p>Edit</p>
                <LuPencil className="m-1" />
              </div>
            </div>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter guarantor's address"
            />
          </label>

          <label className="block mb-2 text-sm font-medium">
            <div className="flex justify-between">
              <p>Guarantor Education</p>
              <div className="flex">
                <p>Edit</p>
                <LuPencil className="m-1" />
              </div>
            </div>
            <input
              type="text"
              name="education"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 rounded-md"
              placeholder="Enter guarantor's highest level of education"
            />
          </label>
        </div>
        {/* Save Button */}
        <div className="flex items-center justify-center mb-4 py-7">
          <button
            type="submit"
            className="w-full bg-[#049805] text-white p-3 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
