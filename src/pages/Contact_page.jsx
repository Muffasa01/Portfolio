import React from "react";
import Nav_bar from "../components/Nav_bar";
import { Mail, MapPin, PhoneCall } from "lucide-react";
const Contact_page = () => {
  return (
    <div className="min-h-screen bg-[#13222A] w-full">
      <Nav_bar />
      <div className="w-full flex flex-col items-center md:mt-8 sm:mt-4 ">
        <span className="block text-3xl font-semibold bg-gradient-to-br from-[#42D392] to-blue-300 bg-clip-text text-transparent">
          let`s Work
        </span>
        <div className="max-w-[550px] pt-7 px-5">
          <span className="font-semibold text-gray-400">
            I'm a passionate Full-Stack Developer with expertise in both
            frontend and backend technologies, dedicated to building seamless,
            scalable, and user-centric web applications. With proficiency in
            frameworks like React, Node.js, and Django, along with databases
            such as PostgreSQL and MongoDB, I bridge the gap between elegant UI
            design and robust server-side logic. My problem-solving mindset,
          </span>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5  pt-5">
            <div className="flex flex-col gap-4 justify-center">
              <span className="flex gap-2 items-center text-sm text-gray-400">
                <MapPin size={20} color="#16ca5b" strokeWidth={1.25} />
                <span>South Africa, Limpopo</span>
              </span>
              <span className="flex gap-2 items-center text-sm text-gray-400">
                <Mail size={20} color="#16ca5b" strokeWidth={1.25} />
                <span>nelushirendani01@gmail.com</span>
              </span>
              <span className="flex gap-2 items-center text-sm text-gray-400">
                <PhoneCall size={20} color="#16ca5b" strokeWidth={1.25} />
                <span>069 788 2063</span>
              </span>
            </div>
            <div className="pb-5">
              <form action="">
                <div className="">
                  <label
                    htmlFor="email1"
                    className="block pb-1 text-gray-400  dark:text-gray-400"
                  >
                    Email
                  </label>
                  <div className="relative items-center">
                    <span className="absolute pt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-500"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="10" r="3" />
                        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                      </svg>
                    </span>
                    <input
                      type="Email"
                      id="email1"
                      placeholder="myself@example.com"
                      className="outline-none border-[1px] pl-11  border-gray-400 dark:border-gray-600 rounded-md p-1 text-gray-700 dark:text-gray-200 focus:ring-1 transition duration-300 ease-in-out focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <label
                    htmlFor="message"
                    className="block pb-1 text-gray-400  dark:text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    name=""
                    id="message"
                    className="outline-none border-[1px] w-[230px] h-[100px] border-gray-400 dark:border-gray-600 rounded-md p-1 text-gray-700 dark:text-gray-200 focus:ring-1 transition duration-300 ease-in-out focus:ring-blue-500"
                  ></textarea>
                </div>
                <div className="pt-2">
                  <button className="px-[1px] rounded-md shadow-md border-transparent hover:bg-gradient-to-r transition-all duration-300 delay-150 ease-in-out cursor-pointer bg-clip-border bg-gradient-to-bl from-blue-400 to-green-300 py-[1px]">
                    <div className="bg-[#13222A] text-gray-500 font-bold px-5 py-2 rounded-md">
                      Send
                    </div>
                  </button>
                </div>
              </form>
            </div>
            {/* endd foem  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_page;
