import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Spinner } from "react-activity";
import axios from "axios";
import { useStateContext } from "../../context/StateContext";
import { ToastContainer, toast } from "react-toastify";

const AcctNo = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const { getAllBanks, allBanks, baseUrl, isLoading } = useStateContext();

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        await getAllBanks();
      } catch (error) {
        console.error("Error fetching banks:", error);
      }
    };

    fetchBanks();
  }, []);

  const resolveBankAccount = async (accountNumber, bankCode) => {
    const url = `${baseUrl}/resolve-bank-account`;
    const data = {
      account_number: accountNumber,
      code: bankCode,
    };

    try {
      const response = await axios.post(url, data);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error resolving bank account:", error);
      throw error;
    }
  };

  const acctnoSchema = Yup.object().shape({
    bank: Yup.string().required("Please select a bank"),
    account_number: Yup.string().required("Please enter your Account Number"),
    // account_name: Yup.string().required("Please enter your Account Name"),
  });

  const formik = useFormik({
    initialValues: {
      bank: "",
      account_number: "",
      account_name: "",
    },
    validationSchema: acctnoSchema,
    onSubmit: async (values) => {
      try {
        // Fetch selected bank details
        const selectedBank = allBanks.find((bank) => bank.id === values.bank);

        // Check if the account number is 10 digits before resolving
        if (values.account_number.length === 10) {
          // Resolve bank account
          const resolutionData = await resolveBankAccount(
            values.account_number,
            selectedBank.code
          );
          console.log("Resolved Bank Account:", resolutionData);

          // Update the form data with the resolved account name
          formik.setFieldValue("account_name", resolutionData.account_name);

          // Use 'allBanks' from the context
          setSubmittedData({ ...values, bank: selectedBank?.bank_name });

          // Send data to the account-number endpoint
          const accountNumberEndpoint = `${baseUrl}/account-number`;
          const accountNumberData = {
            bank_id: selectedBank.id,
            account_number: values.account_number,
            account_name: resolutionData.account_name,
          };

          // Make a POST request to the account-number endpoint
          await axios.post(accountNumberEndpoint, accountNumberData);
        } else {
          console.error("Account number must be 10 digits.");
        }

        formik.resetForm();
      } catch (error) {
        console.error("Error processing form submission:", error);
      }
    },
  });

  // Use useEffect to trigger API call on change of account_number
  useEffect(() => {
    const fetchData = async () => {
      if (formik.values.account_number.length === 10) {
        const selectedBank = allBanks.find(
          (bank) => bank.id === formik.values.bank
        );
        try {
          const resolutionData = await resolveBankAccount(
            formik.values.account_number,
            selectedBank.code
          );
          console.log("Resolved Bank Account:", resolutionData);
          formik.setFieldValue("account_name", resolutionData.account_name);
        } catch (error) {
          console.error("Error resolving bank account:", error);
          toast.error("Error resolving bank account. Please try again.");
        }
      }
    };

    fetchData();
  }, [formik.values.account_number, formik.values.bank, allBanks]);

  return (
    <div className="mx-12">
      <form onSubmit={formik.handleSubmit} className="p-12">
        <div className="">
          <label
            htmlFor="bank"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Select Bank
          </label>
          <select
            id="bank"
            name="bank"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bank}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="" label="Select a bank" />{" "}
            {allBanks.length > 0 ? (
              allBanks.map((bank) => (
                <option
                  key={bank.id}
                  value={bank.id}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.account_number}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          {formik.touched.account_number && formik.errors.account_number && (
            <div className="text-red-500 text-sm">
              {formik.errors.account_number}
            </div>
          )}
        </div>

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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.account_name}
            readOnly={true}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          {formik.touched.account_name && formik.errors.account_name && (
            <div className="text-red-500 text-sm">
              {formik.errors.account_name}
            </div>
          )}
        </div>

        <button
  type="submit"
  className="w-full md:w-1/2 flex items-center justify-center bg-[#049805] text-white p-3 rounded focus:outline-none mx-auto mt-5"
  disabled={isLoading} // Disable button while loading
>
  {isLoading ? <Spinner /> : "Submit"}
</button>

      </form>

      <div className="m-8 grid gap-2">
        <div>
          <h1>Account Details</h1>
        </div>
        <h1>Bank</h1>
        <p className="border rounded-md border-[2px] w-32 text-center">
          {submittedData?.bank}
        </p>

        <h1>Account Number</h1>
        <p className="border rounded border-[2px] w-32 text-center">
          {submittedData?.account_number}
        </p>

        <h1>Account Name</h1>
        <p className="border rounded border-[2px] w-32 text-center">
          {submittedData?.account_name}
        </p>
      </div>
    </div>
  );
};

export default AcctNo;
