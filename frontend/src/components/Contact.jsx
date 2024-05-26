import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Contact = () => {
  return (
    <div
      className="px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center"
      id="contact"
    >
      <ul className="my-auto pr-6">
        <li className="flex">
          <AiFillLinkedin className="w-[70px] h-auto text-gray-300" />
          <div className="m-5">
            <h3 className="text-lg font-bold text-gray-200">Contact</h3>
            <p className=" text-[16px] text-gray-200">Mobile: +923127786712</p>
            <p className="text-gray-400 text-[16px]">
              Email: muhammadhuzaifa7012@gmail.com
            </p>
          </div>
        </li>
        <li className="flex">
          <AiFillGithub className="w-[70px] h-auto text-gray-300" />
          <div className="m-5">
            <h3 className="text-lg font-bold text-gray-200">Working Hours</h3>
            <p className="text-[16px] text-gray-200">Mon-Fri: 10am-5pm</p>
          </div>
        </li>
      </ul>

      <form method="POST" action="" className="max-w-6xl p-5 md:p-12" id="form">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name ..."
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email ..."
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />{" "}
        <textarea
          id="textarea"
          name="textarea"
          cols={30}
          rows={4}
          placeholder="Your Message ..."
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 rounded-md text-gray-200 font-semibold text-xl bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
