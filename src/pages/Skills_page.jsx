import React from 'react'
import Nav_bar from '../components/Nav_bar'
const Skills_page = () => {
  return (
    <div className="min-h-screen bg-[#13222A] w-full">
    <Nav_bar />
    <div className="w-full flex flex-col items-center md:mt-8 sm:mt-4 ">
      <span className="block text-3xl font-semibold bg-gradient-to-br from-[#42D392] to-blue-300 bg-clip-text text-transparent">
        Skills
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

      </div>
    </div>
  </div>

  )
}

export default Skills_page