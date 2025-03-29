"use client";

const Footer = ({isDarkMode, setIsDarkMode}) => {
  return (
    <footer className="w-full text-white py-6 px-6 md:px-16 mt-auto">
      <div className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} An-Khiem Le. All Rights Reserved.
        <p>
          Updated on 3/28/2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
