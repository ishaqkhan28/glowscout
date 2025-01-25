import React from 'react';

const AppointmentForm = () => {
  return (
    <div className="py-8">
      <div className="bg-[#FFFFFF] p-6 rounded-lg w-11/12 sm:w-4/5 mx-auto border border-[#725e66]">
        <h1 className="text-center mb-6 font-Raleway text-4xl sm:text-6xl font-[300]">Book Appointment</h1>
        <form className="flex flex-col sm:flex-row gap-4">
          <div className="sm:w-1/3 w-full">
            <h2 className="text-2xl font-Raleway text-[#351120] mt-6">Personal Details</h2>
            <input type="text" placeholder="First name" className="w-full py-2 mt-2 mb-2 border-b border-[#351120]" />
            <input type="text" placeholder="Last name" className="w-full py-2 mb-2 border-b border-[#351120]" />
            <input type="text" placeholder="Enter address" className="w-full py-2 mb-2 border-b border-[#351120]" />
            <h2 className="text-2xl font-Raleway text-[#351120] mt-6">Contact Details</h2>
            <input type="text" placeholder="Mobile/Telephone" className="w-full py-2 mt-2 mb-2 border-b border-[#351120]" />
            <input type="email" placeholder="Email address" className="w-full py-2 mb-2 border-b border-[#351120]" />
            <input type="email" placeholder="Alternate Email address" className="w-full py-2 mb-2 border-b border-[#351120]" />
          </div>
          <div className="sm:w-1 border sm:block hidden"></div>
          <div className="sm:w-2/3 w-full flex flex-col">
            <h2 className="text-2xl font-Raleway text-[#351120] mt-6">Date & Timings</h2>
            <div className="flex flex-col sm:flex-row items-center mt-2">
              <input type="date" className="w-full sm:w-1/3 p-2 mb-2 border border-[#351120] rounded-lg" />
              <input type="time" className="w-full sm:w-1/6 p-2 sm:ml-6 mt-2 sm:mt-0 mb-2 border border-[#351120] rounded-lg" />
              <div className="flex items-center sm:ml-4 mt-2 sm:mt-0">
                <input type="radio" name="time-period" id="am" className="ml-2" />
                <label htmlFor="am" className="px-2 py-1 bg-[#351120] text-white text-medium rounded-lg">AM</label>
                <input type="radio" name="time-period" id="pm" className="ml-4" />
                <label htmlFor="pm" className="px-2 py-1 bg-[#351120] text-white text-medium rounded-lg">PM</label>
              </div>
            </div>
            <h2 className="text-2xl font-Raleway text-[#351120] mt-6">Comment</h2>
            <textarea placeholder="Write any instruction here." className="w-full p-4 mt-2 mb-2 border border-[#351120] rounded-lg h-24"></textarea>
          </div>
        </form>
        <div className="w-full flex justify-center mt-6">
          <button type="button" className="px-6 py-2 mx-4 rounded-full border-2 border-[#351120] text-[#351120]">Cancel</button>
          <button type="submit" className="px-6 py-2 mx-4 rounded-full bg-[#351120] text-white">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
