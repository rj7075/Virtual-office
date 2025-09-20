// PopupForm.jsx
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function PopupForm({ isOpen, onClose, initialCity = "" }) {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: initialCity,
    phone: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("You must agree to our policy before submitting.");
      return;
    }

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSer60HKgpOidicarJbM3By1V6l7gOHFiH_WyNUjWBVpDuQCdw/formResponse";

    const formDataToSend = new FormData();
    formDataToSend.append("entry.2005620554", formData.name);
    formDataToSend.append("entry.1166974658", formData.city);
    formDataToSend.append("entry.839337160", formData.phone);

    try {
      await fetch(formUrl, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors",
      });
      toast.success(
        `Thank you ${formData.name}! We will contact you for Virtual Office in ${formData.city}.`
      );

      // ✅ Push custom GTM event
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "popupFormSubmit",
        formCity: formData.city,
        formName: formData.name,
      });

      onClose();
      setFormData({ name: "", city: "" });
    } catch (err) {
      console.error(err);
      toast.error("❌ Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    setFormData((prev) => ({ ...prev, city: initialCity }));
  }, [initialCity]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      id="popupFormOverlay"
    >
      <div
        className="bg-white rounded-lg shadow-lg w-96 p-6 relative"
        id="popupFormContainer"
      >
        <button
          onClick={onClose}
          id="popupFormCloseBtn"
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h3 className="text-xl text-black font-semibold mb-4">
          Get Virtual Office in {formData.city || "Your City"}
        </h3>

        {/* ✅ Added ID to form */}
        <form id="popupForm" className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            id="popupName"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border text-black border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            id="popupCity"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full border text-black border-gray-300 rounded px-3 py-2"
          />
          <input
            type="tel"
            id="popupPhone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 text-black rounded px-3 py-2"
          />

          {/* ✅ Checkbox */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="popupPolicy"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-4 h-4"
              required
            />
            <label htmlFor="popupPolicy" className="text-sm text-gray-700">
              By submitting this form, you agree to our{" "}
              <a href="/terms&conditions" className="text-blue-600 underline">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="text-blue-600 underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          {/* ✅ Added ID to button */}
          <button
            type="submit"
            id="popupSubmitBtn"
            className="w-full bg-[#5CC6EC] text-white py-2 rounded-lg font-semibold hover:bg-[#161C25] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
