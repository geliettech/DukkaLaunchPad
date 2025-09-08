import { useState } from "react";
import { useNavigate } from "react-router";

const ContactDetails = () => {
  const [form, setForm] = useState({ email: "", phone: "", website: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    console.log("Contact Details:", form);
    navigate("../attach-catalog");
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
      <p className="text-gray-500 mb-6">Provide your contact information</p>

      <div className="grid grid-cols-2 gap-6 max-w-3xl">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border rounded-md px-3 py-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="border rounded-md px-3 py-2"
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={form.website}
          onChange={handleChange}
          className="border rounded-md px-3 py-2"
        />
      </div>

      <div className="mt-8 flex justify-between max-w-3xl">
        <button
          onClick={() => navigate("/business-details")}
          className="px-6 py-2 rounded-md border border-gray-400 text-gray-600 hover:bg-gray-100"
        >
          Back
        </button>
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

export default ContactDetails;
