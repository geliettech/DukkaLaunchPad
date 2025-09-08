import { useState } from "react";
import { useNavigate } from "react-router";
import Input from "../../../components/form/input";
import FormButton from "../../../components/form/botton";

const BusinessDetails = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    businessAddress: "",
    businessDescription: "",
    referralCode: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
  };

  const handleNext = () => {
    // ✅ simple validation example
    const newErrors: { [key: string]: string } = {};
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.businessName)
      newErrors.businessName = "Business name is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Business Details:", form);
    navigate("../contact-details"); // ✅ go up one level first
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Business Details</h2>
      <p className="text-inactiveGray mb-6">
        Please provide details about your business
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-3xl">
        <Input
          type="text"
          name="firstName"
          label="First Name"
          placeholder=""
          value={form.firstName}
          onChange={handleChange}
          error={errors.firstName}
          inputClass="border border-inactiveGray rounded-md px-3 py-2 w-full bg-ghostWhite"
        />

        <Input
          type="text"
          name="lastName"
          label="Last Name"
          placeholder=""
          value={form.lastName}
          onChange={handleChange}
          error={errors.lastName}
          inputClass="border border-inactiveGray rounded-md px-3 py-2 w-full bg-ghostWhite"
        />

        <Input
          type="text"
          name="businessName"
          label="Business Name"
          placeholder=""
          value={form.businessName}
          onChange={handleChange}
          error={errors.businessName}
          inputClass="border border-inactiveGray rounded-md px-3 py-2 w-full bg-ghostWhite"
        />

        <Input
          type="text"
          name="businessAddress"
          label="Business Address"
          placeholder=""
          value={form.businessAddress}
          onChange={handleChange}
          inputClass="border border-inactiveGray rounded-md px-3 py-2 w-full bg-ghostWhite"
        />

        <Input
          type="text"
          name="businessDescription"
          label="Business Description"
          placeholder=""
          value={form.businessDescription}
          onChange={handleChange}
          inputClass="border border-inactiveGray rounded-md px-3 py-2 w-full bg-ghostWhite"
        />

        <Input
          type="text"
          name="referralCode"
          label="Referral Code"
          placeholder=""
          value={form.referralCode}
          onChange={handleChange}
          inputClass="border border-inactiveGray rounded-md px-3 py-2 w-full bg-ghostWhite"
        />
      </div>

      <div className="mt-8 flex justify-end max-w-3xl">
        <FormButton onClick={handleNext}>Next</FormButton>
      </div>
    </>
  );
};

export default BusinessDetails;
