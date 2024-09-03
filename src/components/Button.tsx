import React from 'react';

const CustomButton = ({ onClick, text,className }: { onClick?: any; text: string ,className:string}) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-start py-2 pl-3 pr-8 overflow-hidden font-medium text-[#0E1C26] transition-all duration-150 ease-in-out rounded hover:pl-6 hover:pr-4 bg-gray-50 group text-sm"
    >
      <span className="absolute bottom-0 left-0 w-full h-0.5 transition-all duration-150 ease-in-out bg-[#0E1C26] group-hover:h-full"></span>
      <span className="absolute right-0 pr-3 duration-200 ease-out group-hover:translate-x-8">
        <svg
          className="w-4 h-4 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
      <span className="absolute left-0 pl-2 -translate-x-8 group-hover:translate-x-0 ease-out duration-200">
        <svg
          className="w-4 h-4 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
        {text}
      </span>
    </button>
  );
};

export default CustomButton;
