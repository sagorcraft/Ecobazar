import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Container from "../components/layouts/Container";
import GreenCapsicam from "../assets/images/greencapsicum.webp";
import RedCapsicam from "../assets/images/redcapsicum.webp";
import { validateCheckoutForm } from "../utils/validateCheckoutFrom";

const initialForm = {
  firstName: "",
  lastName: "",
  companyName: "",
  streetAddress: "",
  country: "",
  state: "",
  zipCode: "",
  email: "",
  phone: "",
  orderNotes: "",
  shipDifferent: false,
  payment: "cod",
};

const CheckOut = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateCheckoutForm(form);
    setErrors(newErrors);

    const errorList = Object.values(newErrors);
    if (errorList.length > 0) {
      toast.error(errorList[0]);
      return;
    }

    toast.success("Order placed successfully!");
    setForm(initialForm);
  };

  const inputClass = (field) =>
    `w-full rounded-md border px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 ${
      errors[field]
        ? "border-red-400 focus:ring-red-400 focus:border-red-400"
        : "border-gray-200 focus:ring-primary focus:border-primary"
    }`;

  return (
    <section>
      <Toaster position="top-center" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 py-10 font-pop">
          {/* LEFT: Billing form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <h2 className="font-pop text-[24px] font-medium text-[#1A1A1A]">
              Billing Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-pop font-normal text-sm text-[#1A1A1A] mb-1.5">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Your first name"
                  className={inputClass("firstName")}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-pop font-normal text-sm text-[#1A1A1A] mb-1.5">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Your last name"
                  className={inputClass("lastName")}
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                )}
              </div>
              <div>
                <label className="block font-pop font-normal text-sm text-[#1A1A1A] mb-1.5">
                  Company Name{" "}
                  <span className="font-pop font-normal text-sm text-[#808080]">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Company name"
                  className={inputClass("companyName")}
                />
              </div>
            </div>

            <div>
              <label className="block font-pop font-normal text-sm text-[#1A1A1A] mb-1.5">
                Street Address
              </label>
              <input
                type="text"
                name="streetAddress"
                value={form.streetAddress}
                onChange={handleChange}
                placeholder="Street address"
                className={inputClass("streetAddress")}
              />
              {errors.streetAddress && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.streetAddress}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-pop font-normal text-sm text-[#1A1A1A] mb-1.5">
                  Country / Region
                </label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className={`${inputClass("country")} ${form.country ? "text-gray-900" : "text-gray-400"}`}
                >
                  <option value="">Select</option>
                  <option value="BD">Bangladesh</option>
                  <option value="US">United States</option>
                  <option value="IN">India</option>
                </select>
                {errors.country && (
                  <p className="text-xs text-red-500 mt-1">{errors.country}</p>
                )}
              </div>
              <div>
                <label className="block font-pop font-normal text-sm text-[#1A1A1A] mb-1.5">
                  States
                </label>
                <select
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className={`${inputClass("state")} ${form.state ? "text-gray-900" : "text-gray-400"}`}
                >
                  <option value="">Selects</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="chattogram">Chattogram</option>
                  <option value="dinajpur">Dinajpur</option>
                </select>
                {errors.state && (
                  <p className="text-xs text-red-500 mt-1">{errors.state}</p>
                )}
              </div>
              <div>
                <label className="block font-pop font-normal text-sm text-[#1A1A1A] mb-1.5">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={form.zipCode}
                  onChange={handleChange}
                  placeholder="Zip Code"
                  className={inputClass("zipCode")}
                />
                {errors.zipCode && (
                  <p className="text-sm text-red-500 mt-1">{errors.zipCode}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-pop font-normal text-sm text-[#1A1A1A] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={inputClass("email")}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block font-pop font-normal text-sm text-[#1A1A1A] mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className={inputClass("phone")}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <label className="flex items-center gap-2 font-pop font-normal text-sm text-[#1A1A1A]">
              <input
                type="checkbox"
                name="shipDifferent"
                checked={form.shipDifferent}
                onChange={handleChange}
                className="w-4 h-4 rounded border-gray-300 accent-primary"
              />
              Ship to a different address
            </label>

            <hr className="border-gray-200" />

            <div>
              <h2 className="font-pop font-medium text-[24px] text-[#1A1A1A] mb-4">
                Additional Info
              </h2>
              <label className="block font-pop font-normal text-sm text-[#1A1A1A] mb-1.5">
                Order Notes
                <span className="font-pop font-normal text-sm text-[#808080]">
                  (optional)
                </span>
              </label>
              <textarea
                name="orderNotes"
                value={form.orderNotes}
                onChange={handleChange}
                rows={4}
                placeholder="Notes about your order, e.g. special notes for delivery"
                className={`${inputClass("orderNotes")} resize-none`}
              />
            </div>
          </form>

          {/* RIGHT: Order summary */}
          <aside className="border border-gray-200 rounded-xl p-6 h-fit max-w-md bg-white shadow-sm">
            <h3 className="font-pop font-medium text-[20px] text-[#1A1A1A] mb-4">
              Order Summary
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-gray-50 flex items-center justify-center overflow-hidden">
                    <img
                      src={GreenCapsicam}
                      alt="Green Capsicum"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-pop font-normal text-sm text-[#1A1A1A]">
                    Green Capsicum <span className="text-gray-400">x5</span>
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  $70.00
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-gray-50 flex items-center justify-center overflow-hidden">
                    <img
                      src={RedCapsicam}
                      alt="Red Capsicum"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-pop font-normal text-sm text-[#1A1A1A]">
                    Red Capsicum <span className="text-gray-400">x1</span>
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  $14.00
                </span>
              </div>
            </div>

            <div className="space-y-2 text-sm my-6">
              <div className="flex justify-between font-pop font-normal text-sm text-[#4D4D4D]">
                <span>Subtotal:</span>
                <span className="text-gray-900 font-medium">$84.00</span>
              </div>

              <hr className="border-gray-200 my-2" />

              <div className="flex justify-between font-pop font-normal text-sm text-[#4D4D4D]">
                <span>Shipping:</span>
                <span className="text-gray-900 font-medium">Free</span>
              </div>
            </div>

            <hr className="border-gray-200 my-2" />

            <div className="flex justify-between font-pop font-normal text-[16px] text-[#4D4D4D] mb-6">
              <span>Total:</span>
              <span className="text-gray-900 font-bold text-lg">$84.00</span>
            </div>

            <h3 className="font-pop font-medium text-[20px] text-[#1A1A1A] mb-4">
              Payment Method
            </h3>

            {/* Custom Radio Group */}
            <div className="space-y-3 mb-6 text-sm text-[#4D4D4D]">
              {/* Cash on Delivery */}
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={form.payment === "cod"}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-[#00B207] peer-checked:bg-[#00B207] peer-checked:ring-2 peer-checked:ring-white peer-checked:outline peer-checked:outline-[#00B207] flex items-center justify-center transition-all">
                  <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100" />
                </div>
                <span>Cash on Delivery</span>
              </label>

              {/* Paypal */}
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={form.payment === "paypal"}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-[#00B207] peer-checked:bg-[#00B207] peer-checked:ring-2 peer-checked:ring-white peer-checked:outline peer-checked:outline-[#00B207] flex items-center justify-center transition-all">
                  <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100" />
                </div>
                <span>Paypal</span>
              </label>

              {/* Amazon Pay */}
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="radio"
                  name="payment"
                  value="amazon"
                  checked={form.payment === "amazon"}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-[#00B207] peer-checked:bg-[#00B207] peer-checked:ring-2 peer-checked:ring-white peer-checked:outline peer-checked:outline-[#00B207] flex items-center justify-center transition-all">
                  <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100" />
                </div>
                <span>Amazon Pay</span>
              </label>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-[#00B207] text-white rounded-full py-3.5 font-semibold hover:bg-[#009606] transition"
            >
              Place Order
            </button>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default CheckOut;
