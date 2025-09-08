import { useState } from "react";
import { useNavigate } from "react-router";
import Input from "../../../components/form/input";
import FormButton from "../../../components/form/botton";

const ContactDetails = () => {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    website: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
  };

  const validateEmail = (email: string) => {
    // ✅  email regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleNext = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.phone) newErrors.phone = "Phone number is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Contact Details:", form);
    navigate("../attach-catalog");
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
      <p className="text-inactiveGray mb-6">Provide your contact information</p>

      <div className="grid grid-cols-2 gap-6 max-w-3xl">
         <Input
          type="tel"
          name="phone"
          label="Phone Number"
          placeholder=""
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
          inputClass="border border-inactiveGray rounded-md px-3 py-2 w-full bg-ghostWhite"
        />
        <Input
          type="text"
          name="Facebook handle"
          label="Facebook handle"
          placeholder=""
          value={form.website}
          onChange={handleChange}
          inputClass="border border-inactiveGray rounded-md px-3 py-2 w-full bg-ghostWhite"
        />
       
        <Input
          type="email"
          name="email"
          label="Email Address"
          placeholder=""
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          inputClass="border border-inactiveGray rounded-md px-3 py-2 w-full bg-ghostWhite"
        />
         <Input
          type="text"
          name="Instagram handle"
          label="Instagram handle"
          placeholder=""
          value={form.website}
          onChange={handleChange}
          inputClass="border border-inactiveGray rounded-md px-3 py-2 w-full bg-ghostWhite"
        />
      </div>

      <div className="mt-8 flex justify-between max-w-3xl">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 rounded-md border border-gray-400 text-gray-600 hover:bg-gray-100"
        >
          Back
        </button>

        <FormButton onClick={handleNext}>Next</FormButton>
      </div>
    </>
  );
};

export default ContactDetails;
