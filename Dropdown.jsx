import React, { useState } from "react";

const Dropdown = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mt-2">
      <button className="cursor-pointer" onClick={toggleDropdown}>
        {title}{" "}
        {title === "Język" ? (
          <i class="fa-solid fa-globe text-normal"></i>
        ) : (
          <i
            className={`m-auto px-2 fa-solid text-normal ${
              isOpen ? "fa-chevron-left" : "fa-chevron-down"
            }`}
          ></i>
        )}
      </button>
      <div
        className={`bg-white w-full overflow-hidden transition-height duration-300 ease-in-out ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        {/* Dropdown content here */}
        <p className="py-2 px-4">Dropdown Content</p>
        <p className="py-2 px-4">Dropdown Content</p>
        <p className="py-2 px-4">Dropdown Content</p>
        <p className="py-2 px-4">Dropdown Content</p>
      </div>
    </div>
  );
};

export default Dropdown;
