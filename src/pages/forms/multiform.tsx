// src/pages/MultiStepForm.tsx
import React, { useState } from "react";

type BusinessDetails = {
  firstName: string;
  lastName: string;
  businessName: string;
  businessAddress: string;
  businessDescription: string;
  referralCode: string;
};

type ContactDetails = {
  email: string;
  phone: string;
  website: string;
};

type Catalog = {
  file: File | null;
};

type Registration = {
  regNumber: string;
  regDate: string;
};

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const [businessData, setBusinessData] = useState<BusinessDetails>({
    firstName: "",
    lastName: "",
    businessName: "",
    businessAddress: "",
    businessDescription: "",
    referralCode: "",
  });

  const [contactData, setContactData] = useState<ContactDetails>({
    email: "",
    phone: "",
    website: "",
  });

  const [catalogData, setCatalogData] = useState<Catalog>({
    file: null,
  });

  const [registrationData, setRegistrationData] = useState<Registration>({
    regNumber: "",
    regDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: "business" | "contact" | "registration"
  ) => {
    const { name, value } = e.target;
    if (section === "business") {
      setBusinessData({ ...businessData, [name]: value });
    } else if (section === "contact") {
      setContactData({ ...contactData, [name]: value });
    } else {
      setRegistrationData({ ...registrationData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCatalogData({ file: e.target.files[0] });
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    const finalData = {
      ...businessData,
      ...contactData,
      ...catalogData,
      ...registrationData,
    };
    console.log("Submitted Data:", finalData);
    alert("Form submitted successfully ✅");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white border-r p-6">
        <ul className="space-y-6 text-sm font-medium">
          {["Business Details", "Contact Details", "Attach Catalog", "Business Registration"].map(
            (label, index) => {
              const stepIndex = index + 1;
              return (
                <li
                  key={index}
                  className={`flex items-center gap-2 ${
                    step === stepIndex ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${
                      step === stepIndex
                        ? "border-red-500"
                        : "border-gray-400"
                    }`}
                  >
                    {stepIndex}
                  </span>
                  {label.toUpperCase()}
                </li>
              );
            }
          )}
        </ul>
      </aside>

      {/* Form Content */}
      <main className="flex-1 p-10">
        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold mb-2">Business Details</h2>
            <p className="text-gray-500 mb-6">
              Please provide details about your business
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-3xl">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={businessData.firstName}
                onChange={(e) => handleChange(e, "business")}
                className="border rounded-md px-3 py-2"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={businessData.lastName}
                onChange={(e) => handleChange(e, "business")}
                className="border rounded-md px-3 py-2"
              />
              <input
                type="text"
                name="businessName"
                placeholder="Business Name"
                value={businessData.businessName}
                onChange={(e) => handleChange(e, "business")}
                className="border rounded-md px-3 py-2"
              />
              <input
                type="text"
                name="businessAddress"
                placeholder="Business Address"
                value={businessData.businessAddress}
                onChange={(e) => handleChange(e, "business")}
                className="border rounded-md px-3 py-2"
              />
              <input
                type="text"
                name="businessDescription"
                placeholder="Business Description"
                value={businessData.businessDescription}
                onChange={(e) => handleChange(e, "business")}
                className="border rounded-md px-3 py-2"
              />
              <input
                type="text"
                name="referralCode"
                placeholder="Referral Code"
                value={businessData.referralCode}
                onChange={(e) => handleChange(e, "business")}
                className="border rounded-md px-3 py-2"
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
            <p className="text-gray-500 mb-6">
              Provide your contact information
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-3xl">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={contactData.email}
                onChange={(e) => handleChange(e, "contact")}
                className="border rounded-md px-3 py-2"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={contactData.phone}
                onChange={(e) => handleChange(e, "contact")}
                className="border rounded-md px-3 py-2"
              />
              <input
                type="text"
                name="website"
                placeholder="Website"
                value={contactData.website}
                onChange={(e) => handleChange(e, "contact")}
                className="border rounded-md px-3 py-2"
              />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-semibold mb-2">Attach Catalog</h2>
            <p className="text-gray-500 mb-6">
              Upload your business catalog file
            </p>
            <input
              type="file"
              onChange={handleFileChange}
              className="border p-2 rounded-md"
            />
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="text-xl font-semibold mb-2">
              Business Registration
            </h2>
            <p className="text-gray-500 mb-6">
              Enter your business registration details
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-3xl">
              <input
                type="text"
                name="regNumber"
                placeholder="Registration Number"
                value={registrationData.regNumber}
                onChange={(e) => handleChange(e, "registration")}
                className="border rounded-md px-3 py-2"
              />
              <input
                type="date"
                name="regDate"
                value={registrationData.regDate}
                onChange={(e) => handleChange(e, "registration")}
                className="border rounded-md px-3 py-2"
              />
            </div>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between max-w-3xl">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="px-6 py-2 rounded-md border border-gray-400 text-gray-600 hover:bg-gray-100"
            >
              Back
            </button>
          )}
          {step < 4 ? (
            <button
              onClick={nextStep}
              className="ml-auto bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="ml-auto bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Submit
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default MultiStepForm;
