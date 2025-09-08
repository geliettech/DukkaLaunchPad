import { useState } from "react";
import { useNavigate } from "react-router";

const BusinessDetails = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    businessAddress: "",
    businessDescription: "",
    referralCode: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    console.log("Business Details:", form);
    navigate("../contact-details"); // ✅ go up one level first
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Business Details</h2>
      <p className="text-gray-500 mb-6">Please provide details about your business</p>

      <div className="grid grid-cols-2 gap-6 max-w-3xl">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key.replace(/([A-Z])/g, " $1")}
            value={(form as any)[key]}
            onChange={handleChange}
            className="border rounded-md px-3 py-2"
          />
        ))}
      </div>

      <div className="mt-8 flex justify-end max-w-3xl">
        <button
          onClick={handleNext}
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default BusinessDetails;
