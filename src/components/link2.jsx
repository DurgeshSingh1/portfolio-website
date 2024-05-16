import React from "react";

const SocialLink = ({ icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-800 transition duration-300"
    >
      <i className={icon}></i>
    </a>
  );
};

export default SocialLink;
