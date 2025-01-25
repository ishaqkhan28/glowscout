import React from 'react'

function Signup() {
  return (
    <div className="flex min-h-screen">

      <div className="flex-grow flex flex-col items-center justify-center bg-[#F8F8F8] py-10 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold mb-4 text-center">
          Are you a business?
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 text-center">
          People are seeking for the specialist. <br/> Join us now and serve your skills.
        </p>
        
        <button className="bg-[#F8F8F8] text-[#351120] px-6 sm:px-10 py-3 sm:py-4 gap-4 text-lg sm:text-2xl font-Raleway rounded-full border-2 border-[#816d75] flex items-center justify-center">
          Sign Up as Business
          <svg className="bg-[#351120] rounded-full ml-2" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0483 7.66667V18.7708C22.0483 18.9974 21.9583 19.2146 21.7981 19.3748C21.638 19.535 21.4207 19.625 21.1942 19.625C20.9676 19.625 20.7504 19.535 20.5902 19.3748C20.43 19.2146 20.34 18.9974 20.34 18.7708V9.72841L8.13182 21.9377C7.97154 22.0979 7.75416 22.188 7.52749 22.188C7.30083 22.188 7.08345 22.0979 6.92317 21.9377C6.76289 21.7774 6.67285 21.56 6.67285 21.3333C6.67285 21.1067 6.76289 20.8893 6.92317 20.729L19.1324 8.52083H10.09C9.86345 8.52083 9.64619 8.43084 9.48601 8.27065C9.32582 8.11047 9.23583 7.89321 9.23583 7.66667C9.23583 7.44013 9.32582 7.22287 9.48601 7.06268C9.64619 6.90249 9.86345 6.8125 10.09 6.8125L21.1942 6.8125C21.4207 6.8125 21.638 6.90249 21.7981 7.06268C21.9583 7.22287 22.0483 7.44013 22.0483 7.66667Z" fill="#EFE4D1" />
          </svg>
        </button>
      
      </div>
    </div>
  )
}

export default Signup
