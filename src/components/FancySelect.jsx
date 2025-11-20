import React, { useEffect, useRef, useState } from "react";

export default function FancySelect({
  name,
  options,
  placeholder = "Sélectionner",
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (newValue) => {
    setValue(newValue);
    setOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        className="select-cta w-full flex items-center justify-between"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={selectedOption ? "" : "opacity-80"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
      </button>
      {open && (
        <div className="absolute z-30 mt-2 w-full rounded-2xl bg-white border border-[#e7dcbc] shadow-2xl overflow-hidden">
          <ul className="max-h-60 overflow-auto py-1" role="listbox">
            {options.map((opt) => (
              <li
                key={opt.value}
                role="option"
                aria-selected={value === opt.value}
                className={`px-3 py-2 text-sm cursor-pointer flex items-center justify-between ${
                  value === opt.value
                    ? "bg-[#faf7ef] text-[#bb2988] font-semibold"
                    : "text-gray-800 hover:bg-[#faf7ef]"
                }`}
                onClick={() => handleSelect(opt.value)}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
