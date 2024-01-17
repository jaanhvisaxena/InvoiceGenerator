import React from "react";
const CustomButton = ({ styles, label, onClick }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} text-white`}
    onClick={onClick}
  >
    {label}
  </button>
);
export default CustomButton;
