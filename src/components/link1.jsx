import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const SocialLinks1 = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/durgesh1999/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/DurgeshSingh1",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@example.com",
    },
    {
      id: 4,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/DURGESH38195458",
    },
  ];
  return (
    <div className="">
      <ul className="flex flex-row w-full bg-gradient-to-b from-gray-800 to-black text-white">
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "  w-40 h-14 px-4  duration-300 bg-gradient-to-b from-gray-800 to-black text-white" +
              " " +
              link.style
            }
          >
            <a
              href={link.href ? link.href : "/"}
              className=" basis-1/4  text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks1;
