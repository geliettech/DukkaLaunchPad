import { useState } from "react";
import { useNavigate } from "react-router";

const AttachCatalog = () => {
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleNext = () => {
    console.log("Catalog File:", file);
    navigate("../business-registration");
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Attach Catalog</h2>
      <p className="text-gray-500 mb-6">Upload your business catalog file</p>

      <input
        type="file"
        onChange={handleFileChange}
        className="border p-2 rounded-md"
      />

      <div className="mt-8 flex justify-between max-w-3xl">
        <button
          onClick={() => navigate("/contact-details")}
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

export default AttachCatalog;
