import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Spinner } from "react-activity";
import axios from "axios";
import { useStateContext } from "../../context/StateContext";
import { ToastContainer, toast } from "react-toastify";

const AcctNo = () => {
  // State for submitted data
  const [submittedData, setSubmittedData] = useState(null);
  // State for loading resolve status
  const [isLoadingResolve, setIsLoadingResolve] = useState(false);
  // State for fetched account details
  const [fetchedAccountDetails, setFetchedAccountDetails] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Destructuring context values
  const { getAllBanks, allBanks, baseUrl, isLoading, config, token } =
    useStateContext();
  // State for bank details in the form
  const [bankDetails, setBankDetails] = useState({});

  // Function to handle bank change in the form
  const handleBankChange = (e) => {
    setBankDetails({ ...bankDetails, [e.target.name]: e.target.value });
  };

  // Fetch banks on component mount
  useEffect(() => {
    const fetchBanks = async () => {
      try {
        await getAllBanks();
      } catch (error) {
        console.error("Error fetching banks:", error);
      }
    };

    fetchBanks();
    fetchAccountDetails();
  }, []);

  // Resolve bank account function
  const resolveBankAccount = async () => {
    const url = `${baseUrl}/resolve-bank-account`;

    try {
      setIsLoadingResolve(true);
      const response = await axios.post(url, bankDetails, config(token));
      setBankDetails({
        ...bankDetails,
        account_name: response.data?.data?.data.account_name,
      });
      setIsLoadingResolve(false);
      toast.success("Account number resolved successfully!");
    } catch (error) {
      setIsLoadingResolve(false);
      console.error("Error resolving bank account:", error);
      toast.error("Error resolving bank account. Please try again.");
    }
  };

  // Fetch account details function
  const fetchAccountDetails = async () => {
    const url = `${baseUrl}/get-account-number`;
    try {
      const response = await axios.get(url, config(token));
      setFetchedAccountDetails(response.data?.data);
      setIsSubmitting(false); // Move here
      formik.resetForm(); // Move here
    } catch (error) {
      console.error("Error fetching account details:", error);
      toast.error("Error fetching account details. Please try again.");
      setIsSubmitting(false); // Move here in case of an error
    }
  };

  // Effect to resolve and fetch account details on account number change
  useEffect(() => {
    if (bankDetails?.account_number?.length >= 10) {
      const fetchData = async () => {
        try {
          await resolveBankAccount();
          await fetchAccountDetails();
          console.log("Resolved Bank Account:", bankDetails.account_name);
        } catch (error) {
          console.error("Error resolving bank account:", error);
          toast.error("Error resolving bank account. Please try again.");
        }
      };

      fetchData();
      fetchAccountDetails();
    }
  }, [bankDetails.account_number, isSubmitting]);

  // Form validation schema
  const acctnoSchema = Yup.object().shape({
    bank: Yup.string().required("Please select a bank"),
    account_number: Yup.string().required("Please enter your Account Number"),
  });

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      bank: "",
      account_number: "",
      account_name: "",
    },
    // validationSchema: acctnoSchema,

    // Form submission logic
    onSubmit: async (values) => {
      try {
        const selectedBank = allBanks.find((bank) => bank.id === values.bank);

        if (values.account_number.length === 10) {
          const resolutionData = await resolveBankAccount(
            values.account_number,
            selectedBank.code
          );
          console.log("Resolved Bank Account:", resolutionData);

          formik.setFieldValue("account_name", resolutionData.account_name);

          setSubmittedData({ ...values, bank: selectedBank?.bank_name });

          const accountNumberData = {
            bank_id: selectedBank.id,
            account_number: bankDetails?.account_number,
            account_name: bankDetails.account_name,
          };

          // Submit the account data
          await submitAccount(accountNumberData);
        } else {
          console.error("Account number must be 10 digits.");
        }

        // Do not set isSubmitting to false and reset form here
      } catch (error) {
        console.error("Error processing form submission:", error);
      }
    },
  });

  // Function to submit account data
  const submitAccount = async (e) => {
    e.preventDefault();
    const accountNumberEndpoint = `${baseUrl}/account-number`;
    const selectedBank = allBanks.find(
      (bank) => bank.code === bankDetails?.code
    );
    const payload = {
      bank_id: selectedBank?.id,
      account_number: bankDetails?.account_number,
      account_name: bankDetails?.account_name,
    };
    setIsSubmitting(true); //spinner
    try {
      const response = await axios.post(
        accountNumberEndpoint,
        payload,
        config(token)
      );

      if (response.data?.status) {
        // Handle successful submission
        toast.success(response.data.message);
        fetchAccountDetails(); // auto update
      } else {
        // Handle submission failure
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error submitting account:", error);
      toast.error("Error submitting account. Please try again.");
    }
  };

  return (
    <div className="mx-12">
      <ToastContainer autoClose={3000} />
      <form onSubmit={submitAccount} className="p-12">
        {/* Bank selection dropdown */}
        <div className="">
          <label
            htmlFor="bank"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Select Bank
          </label>
          <select
            id="bank"
            name="code"
            value={bankDetails?.code}
            required
            onChange={handleBankChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="" label="Select a bank" />{" "}
            {allBanks.length > 0 ? (
              allBanks.map((bank) => (
                <option
                  key={bank.id}
                  value={bank.code}
                  label={bank.bank_name}
                ></option>
              ))
            ) : (
              <option value="" disabled>
                Loading banks...
              </option>
            )}
          </select>
          {formik.touched.bank && formik.errors.bank && (
            <div className="text-red-500 text-sm">{formik.errors.bank}</div>
          )}
        </div>

        {/* Account number input */}
        <div className="mb-4">
          <label
            htmlFor="account_number"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Account Number
          </label>
          <input
            type="text"
            id="account_number"
            name="account_number"
            value={bankDetails?.account_number}
            required
            onChange={handleBankChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          {isLoadingResolve && (
            <div className="text-gray-500 text-sm mt-2 flex justify-center">
              <Spinner color="#049805" size={16} />
              {"  "}Resolving account number...
            </div>
          )}
          {formik.touched.account_number && formik.errors.account_number && (
            <div className="text-red-500 text-sm">
              {formik.errors.account_number}
            </div>
          )}
        </div>

        {/* Account name input */}
        <div className="mb-4">
          <label
            htmlFor="account_name"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Account Name
          </label>
          <input
            type="text"
            id="account_name"
            name="account_name"
            value={bankDetails?.account_name}
            required
            readOnly={true}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          {formik.touched.account_name && formik.errors.account_name && (
            <div className="text-red-500 text-sm">
              {formik.errors.account_name}
            </div>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full md:w-1/2 flex items-center justify-center bg-[#049805] text-white p-3 rounded focus:outline-none mx-auto mt-5"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Spinner /> : "Submit"}
        </button>
      </form>

      {/* Display fetched account details */}
      <div className="m-8 grid gap-2 justify-center">
        <div className="text-center font-bold">
          <h1>Account Details</h1>
        </div>
        {/* Display Bank */}
        <h1>Bank: {fetchedAccountDetails?.bank_name}</h1>

        {/* Display Account Number */}
        <h1>Account Number: {fetchedAccountDetails?.account_number}</h1>

        {/* Display Account Name */}
        <h1>Account Name: {fetchedAccountDetails?.account_name}</h1>
      </div>
    </div>
  );
};

export default AcctNo;
