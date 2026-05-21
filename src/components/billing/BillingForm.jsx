import { useEffect, useState } from "react";
import InputField from "./InputField";

export default function BillingForm() {

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    gst: "",
    pan: "",
    premise: "",
    street: "",
    country: "",
    pincode: "",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {

  localStorage.setItem(
    "billingData",
    JSON.stringify(formData)
  );

  setSaved(true);

  setFormData({
    companyName: "",
    email: "",
    gst: "",
    pan: "",
    premise: "",
    street: "",
    country: "",
    pincode: "",
  });

  setTimeout(() => {
    setSaved(false);
  }, 3000);
};

  useEffect(() => {

    const savedData = localStorage.getItem("billingData");

    if (savedData) {
      setFormData(JSON.parse(savedData));
    }

  }, []);

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">

      <h2 className="text-[24px] font-semibold text-gray-900 mb-8">
        Review your details
      </h2>

      <h3 className="text-sm font-medium text-gray-700 mb-5">
        Billing Information
      </h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >

        <InputField
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          required
        />

        <InputField
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <InputField
          name="gst"
          placeholder="GST Number (Optional)"
          value={formData.gst}
          onChange={handleChange}
        />

        <InputField
          name="pan"
          placeholder="PAN Number"
          value={formData.pan}
          onChange={handleChange}
          maxLength={10}
        />

        <InputField
          name="premise"
          placeholder="Premise/House no."
          value={formData.premise}
          onChange={handleChange}
          required
        />

        <InputField
          name="street"
          placeholder="Street"
          value={formData.street}
          onChange={handleChange}
          required
        />

        <InputField
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />

        <InputField
          name="pincode"
          placeholder="Pin code"
          value={formData.pincode}
          onChange={handleChange}
          maxLength={6}
          pattern="[0-9]{6}"
          required
        />

        <div className="md:col-span-2 flex justify-end items-center gap-4 mt-6">

          {saved && (

            <p className="text-sm text-green-600 font-medium mr-auto">
              ✓ Billing details saved successfully
            </p>

          )}

          <button
            type="button"
            className="border border-gray-300 text-sm px-6 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-[#2563EB] hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-md transition"
          >
            Save Details
          </button>

        </div>

      </form>

    </div>
  )
}