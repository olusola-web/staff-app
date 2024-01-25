import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Spinner } from 'react-activity';
import { useStateContext } from '../../context/StateContext';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


const ProfileEdit = () => {
 const [isLoading, setIsLoading] = useState(false)
const { profileDetails, imgUrl, baseUrl, uploadConfig, handleGetProfile } = useStateContext();
   const [formData, setFormData] = useState({
    profile_picture: "",
    cv: "",
    guarantor_photo: ""
 })

const registrationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email address'),
});

  const handleChange = (e) => {
  const { name, value, files } = e.target;
  setFormData({
    ...formData,
    [name]: files[0] || value,
  });
};

 const formik = useFormik({
    initialValues: {
      full_name: '',
      phone_number: '',
      dob: '',
      marital_status: '',
      address: '',
      email: '',
      sex: '',
      guarantor_full_name: '',
      guarantor_phone: '',
      guarantor_address: '',
    },
    validationSchema: registrationSchema,
    onSubmit: async (values) => {
  setIsLoading(true);
  try {
    const url = `${baseUrl}/update-profile`;
      const formInput = new FormData();
      const payload =  {...values, ...formData};
    for (const key in payload) {
      formInput.append(key, payload[key]);
    }
    const res = await axios.post(url, formInput, uploadConfig());
    toast.success(res?.data?.message);
    handleGetProfile()
  } catch (error) {
    toast.error(error?.response?.data?.message);
  } finally {
    setIsLoading(false);
    formik.resetForm();
  }
  // console.log(values)
},
    
 });

  useEffect(() => {
  if (profileDetails) {
    formik.setValues(profileDetails);

    setFormData({
      ...formData,
      profile_picture: profileDetails.profile_picture,
      cv: profileDetails.cv,
      guarantor_photo: profileDetails.guarantor_photo
    })
  }
}, [profileDetails]);


    return(
  <React.Fragment>
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
    <form onSubmit={formik.handleSubmit}>
         
         <div className="md:flex md:justify-between">
          <label className="flex-1 block mb-2 md:mr-4 text-sm font-medium">
            Full Name
            <input
              type="text"
              name="full_name"
              value={formik.values.full_name}
              onChange={formik.handleChange}
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
              placeholder="Enter your full name"
            />
            {formik.errors.full_name && <div style={{color: "red"}}>{formik.errors.full_name}</div>}
          </label>
        
         <label className="flex-1 block mb-2 text-sm font-medium">
            Address
            <input
              name="address"
            value={formik.values.address}
              onChange={formik.handleChange}
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
              placeholder="Enter your address"
            />
             {formik.errors.address && <div style={{color: "red"}}>{formik.errors.address}</div>}
          </label>

        </div>

        <div className="md:flex md:justify-between">
         <label className="flex-1 block mb-2 md:mr-4 text-sm font-medium">
            Phone Number
            <input
              type="tel"
              name="phone_number"
              value={formik.values.phone_number}
              onChange={formik.handleChange}
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
              placeholder="Enter your Phone Number"
            />
             {formik.errors.phone_number && <div style={{color: "red"}}>{formik.errors.phone_number}</div>}
          </label>

            <label className="flex-1 block mb-2 text-sm font-medium">
            Email
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
              placeholder="Ènter your email"
            />
             {formik.errors.email && <div style={{color: "red"}}>{formik.errors.email}</div>}
          </label>
        </div>

        <div className="md:flex md:justify-between">
        <label className="flex-1 block mb-2 md:mr-4 text-sm font-medium">
            Enter your Date of Birth
            <input
              type="date"
              name="dob"
              value={formik.values.dob}
              onChange={formik.handleChange}
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
            />
             {formik.errors.dob && <div style={{color: "red"}}>{formik.errors.dob}</div>}
          </label>

          <label className="flex-1 block mb-2 text-sm font-medium">
            Sex
            <select className="w-full p-4 bg-gray-100 rounded-md focus:outline-none" name="sex"
            value={formik.values.sex}
              onChange={formik.handleChange}>
              <option value="" selected disabled>Enter your sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>              
              <option value="Others">Others</option>
            </select>
             {formik.errors.sex && <div style={{color: "red"}}>{formik.errors.sex}</div>}
          </label>
        </div>

        <div className="md:flex md:justify-between">
             <label className="flex-1 block mb-2 md:mr-4 text-sm font-medium">
            Marital Status
            <select className="w-full p-4 bg-gray-100 rounded-md focus:outline-none" name="marital_status"
              value={formik.values.marital_status}
              onChange={formik.handleChange}>
              <option value="" selected disabled>Enter your marital status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Others">Others</option>
            </select>
             {formik.errors.marital_status && <div style={{color: "red"}}>{formik.errors.marital_status}</div>}
          </label>

             <label className="flex-1 block mb-2 text-sm font-medium">
            Kindly upload a picture of yourself
            <a className="text-green-600 italic ml-5" href={`${imgUrl}/${profileDetails?.profile_picture}`} target="__blank">view</a>
            <input
              type="file"
              name="profile_picture"
              onChange={handleChange}
              accept="image/*"
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
            />
             {formik.errors.profile_picture && <div style={{color: "red"}}>{formik.errors.profile_picture}</div>}
          </label>

        </div>
       
   <label className="flex-1 block mb-2 text-sm font-medium ">
          Kindly upload your cv
          <a className="text-green-600 italic ml-5" href={`${imgUrl}/${profileDetails?.cv}`} target="__blank">view</a>
          <input
            type="file"
            name="cv"
            onChange={handleChange}
            accept=".pdf, .doc, .docx"
            className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
          />
           {formik.errors.cv && <div style={{color: "red"}}>{formik.errors.cv}</div>}
        </label>
        

      {/* GUARANTOR SECTION */}
      <h2 className="text-2xl font-bold mb-7 mt-5">Guarantor Section</h2>
        
        <div className="md:flex md:justify-between">
          <label className="flex-1 block mb-2 md:mr-4 text-sm font-medium">
            Guarantor Full Name
            <input
              type="text"
              name="guarantor_full_name"
               value={formik.values.guarantor_full_name}
              onChange={formik.handleChange}
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
              placeholder="Enter guarantor's full name"
            />
             {formik.errors.guarantor_full_name && <div style={{color: "red"}}>{formik.errors.guarantor_full_name}</div>}
          </label>

        <label className="flex-1 block mb-2 text-sm font-medium">
            Guarantor Address
            <input
              name="guarantor_address"
              value={formik.values.guarantor_address}
            onChange={formik.handleChange}
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
              placeholder="Enter guarantor's address"
            />
             {formik.errors.guarantor_address && <div style={{color: "red"}}>{formik.errors.guarantor_address}</div>}
          </label>
        
       </div>

       <div className="md:flex md:justify-between">
            <label className="flex-1 block mb-2 md:mr-4 text-sm font-medium">
            Guarantor Phone Number
            <input
              type="tel"
              name="guarantor_phone"
              value={formik.values.guarantor_phone}
            onChange={formik.handleChange}
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
              placeholder="Enter guarantor's phone number"
            />
             {formik.errors.guarantor_phone && <div style={{color: "red"}}>{formik.errors.guarantor_phone}</div>}
          </label>

          <label className="flex-1 block mb-2 text-sm font-medium">
            Guarantor Photo
            <a className="text-green-600 italic ml-5" href={`${imgUrl}/${profileDetails?.guarantor_photo}`} target="__blank">view</a>
            <input
              type="file"
              name="guarantor_photo"
              onChange={handleChange}
              accept="image/*"
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
            />
             {formik.errors.guarantor_photo && <div style={{color: "red"}}>{formik.errors.guarantor_photo}</div>}
          </label>  
         </div>
           
          <button
            type="submit"
            className="w-full md:w-1/2 flex items-center justify-center bg-[#049805] text-white p-3  rounded focus:outline-none mx-auto mt-5"
          >
            {isLoading ? <Spinner /> : "Save"}
          </button>
           
</form>
<ToastContainer/>
</div>
    </React.Fragment>
  )
}

export default ProfileEdit





  


