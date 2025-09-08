import { useState } from "react";
import { useNavigate } from "react-router";

const BusinessRegistration = () => {
  const [form, setForm] = useState({ regNumber: "", regDate: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Business Registration:", form);
    alert("Form submitted successfully ✅");
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Business Registration</h2>
      <p className="text-gray-500 mb-6">Enter your business registration details</p>

      <div className="grid grid-cols-2 gap-6 max-w-3xl">
        <input
          type="text"
          name="regNumber"
          placeholder="Registration Number"
          value={form.regNumber}
          onChange={handleChange}
          className="border rounded-md px-3 py-2"
        />
        <input
          type="date"
          name="regDate"
          value={form.regDate}
          onChange={handleChange}
          className="border rounded-md px-3 py-2"
        />
      </div>

      <div className="mt-8 flex justify-between max-w-3xl">
        <button
          onClick={() => navigate("/attach-catalog")}
          className="px-6 py-2 rounded-md border border-gray-400 text-gray-600 hover:bg-gray-100"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default BusinessRegistration;
