import React from "react";
import AwesomeLogo from "@/assets/logo.png";
const Navbar = () => {
  return (
    <main className="flex justify-center items-center px-10 bg-red-custom">
      <ul className="flex border-2 border-blue-300 gap-14 py-4 ">
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Clients</li>
      </ul>
    </main>
  );
};

export default Navbar;
