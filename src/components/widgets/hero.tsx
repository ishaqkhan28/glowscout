import Image from "next/image"
import { useState } from 'react'
function Hero() {
  const [goal, setGoal] = useState('2');
  const [location, setLocation] = useState('3');
  return (
    <section className="bg-[#F8F8F8]">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center" >
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center" >
          <h1 className="text-7xl font-extralight mb-4">Reveal Your <br /> Beauty with <br /> <span className="font-bold">Glow Scout</span></h1>
          <p className="text-lg mb-6">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut ut nibh faucibus.
          </p>
          <div className="flex justify-center mb-3" >
            <button className="inline-flex text-[#351120] border-2 rounded-3xl border-[#351120] bg-[#F8F8F8] py-2 px-6 focus:outline-none text-lg">Sign Up
              <svg className="bg-[#351120] rounded-full ml-2" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0483 7.66667V18.7708C22.0483 18.9974 21.9583 19.2146 21.7981 19.3748C21.638 19.535 21.4207 19.625 21.1942 19.625C20.9676 19.625 20.7504 19.535 20.5902 19.3748C20.43 19.2146 20.34 18.9974 20.34 18.7708V9.72841L8.13182 21.9377C7.97154 22.0979 7.75416 22.188 7.52749 22.188C7.30083 22.188 7.08345 22.0979 6.92317 21.9377C6.76289 21.7774 6.67285 21.56 6.67285 21.3333C6.67285 21.1067 6.76289 20.8893 6.92317 20.729L19.1324 8.52083H10.09C9.86345 8.52083 9.64619 8.43084 9.48601 8.27065C9.32582 8.11047 9.23583 7.89321 9.23583 7.66667C9.23583 7.44013 9.32582 7.22287 9.48601 7.06268C9.64619 6.90249 9.86345 6.8125 10.09 6.8125L21.1942 6.8125C21.4207 6.8125 21.638 6.90249 21.7981 7.06268C21.9583 7.22287 22.0483 7.44013 22.0483 7.66667Z" fill="#EFE4D1" />
              </svg>

            </button>
          </div>
          <div className="flex flex-wrap md:space-x-4 absolute md:ml-56 mt-[350px] border-2 bg-[#F6E9CE99] p-3 md:rounded-full z-10 ">
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="bg-gray-100 border md:w-[350px] h-[40px] rounded-full p-2 opacity-30 font-bold border-[#351120]"
            >
              <option value="" className="bg-[#351120]">Select your Goals

              </option>


              {/* Add your goals here */}
            </select>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-gray-100 border md:w-[350px] h-[40px] rounded-full p-2 z-10 opacity-30 font-bold border-[#351120]"
            >
              <option value="">Select your Location</option>
              {/* Add your locations here */}
            </select>
            <button className="bg-[#351120] text-white py-2 px-4 rounded-full z-10">Book Now!</button>
          </div>
        </div>
        <div className="relative ">
          <Image className="" alt="hero" src="/images/beautiful-woman-white-dress-white-background-portrait-with-beautiful-long-hair-touching-face 1.svg" width={520} height={520} />
        </div>
      </div>
    </section>
  )
}

export default Hero