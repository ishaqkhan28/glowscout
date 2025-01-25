import React from 'react'
import Image from "next/image"
function Treatmentsss() {
  return (
    <section className="text-center py-20 bg-[#F8F8F8] border-b-2 border-[#351120]" id='treatments'>
      <h2 className="text-6xl font-light text-[#351120] mb-2 font-raleway">Trending Treatments</h2>
      <p className="text-2xl text-[#351120] mb-6 font-raleway font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.</p>
      <div className="flex justify-center gap-1 flex-wrap">
        <svg className="my-auto cursor-pointer" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 17C4.10457 17 5 16.1046 5 15C5 13.8954 4.10457 13 3 13L3 17ZM0.585786 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857866C15.3611 0.0768167 14.0948 0.0768166 13.3137 0.857865L0.585786 13.5858ZM3 13L2 13L2 17L3 17L3 13Z" fill="#351120" />
        </svg>
        <div className="rounded-lg w-64 p-5 text-left relative">
          <Image src="/images/Mask group.svg" alt="Botox" loading='eager' width={250} height={300} className="rounded-lg" />
          <div className="bg-[#F6E9CE] rounded-bl-lg py-1 px-1 text-[#351120] text-lg font-raleway absolute right-5 top-5">Lorem Ipsum</div>
          <h3 className="text-[#351120] my-2 text-xl">Botox</h3>
          <p className="text-[#351120] text-sm">Lorem ipsum</p>
        </div>
        <div className=" rounded-lg w-64 p-5 text-left relative">
          <Image src="/images/woman-having-facial-treatment 1.svg" loading='eager' alt="Thermage" width={250} height={300} className="rounded-lg" />
          <div className="bg-[#F6E9CE] rounded-bl-lg py-1 px-2 text-[#351120] text-lg font-raleway absolute right-5 top-5">Lorem Ipsum</div>
          <h3 className="text-[#351120] my-2 text-xl">Thermage</h3>
          <p className="text-[#351120] text-sm">Lorem ipsum</p>
        </div>
        <div className=" rounded-lg w-64 p-5 text-left relative">
          <Image src="/images/Mask group (1).svg" alt="Laser Resurfacing" loading='eager' width={250} height={300} className="rounded-lg" />
          <div className="bg-[#F6E9CE] rounded-bl-lg py-1 px-2 text-[#351120] text-lg font-raleway absolute right-5 top-5">Lorem Ipsum</div>
          <h3 className="text-[#351120] my-2 text-xl">Acne Bluelight
            Therapy</h3>
          <p className="text-[#351120] text-sm">Lorem ipsum </p>
        </div>
        <div className=" rounded-lg w-64 p-5 text-left relative">
          <Image src="/images/Mask group (2).svg" alt="Chemical Peels" loading='eager' width={250} height={300} className="rounded-lg" />
          <div className="bg-[#F6E9CE] rounded-bl-lg py-1 px-2 text-[#351120] text-lg font-raleway absolute right-5 top-5">Lorem Ipsum</div>
          <h3 className="text-[#351120] my-2 text-xl">Chemical Peels</h3>
          <p className="text-[#351120] text-sm">Lorem ipsum </p>
        </div>
        <div className=" rounded-lg w-64 p-5 text-left relative">
          <Image src="/images/Mask group (3).svg" alt="Laser Resurfacing" loading='eager' width={250} height={300} className="rounded-lg" />
          <div className="bg-[#F6E9CE] rounded-bl-lg py-1 px-2 text-[#351120] text-lg font-raleway absolute right-5 top-5">Lorem Ipsum</div>
          <h3 className="text-[#351120] my-2 text-xl">Laser Resurfacing</h3>
          <p className="text-[#351120] text-sm">Lorem ipsum</p>
        </div>
        <svg className="my-auto cursor-pointer" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 13C12.8954 13 12 13.8954 12 15C12 16.1046 12.8954 17 14 17L14 13ZM16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857863C2.90524 0.0768146 1.63891 0.0768145 0.857866 0.857863C0.0768168 1.63891 0.0768167 2.90524 0.857865 3.68629L12.1716 15L0.857863 26.3137C0.0768145 27.0948 0.0768144 28.3611 0.857863 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17L15 17L15 13L14 13L14 17Z" fill="#351120" />
        </svg>

      </div>
    </section>

  )
}

export default Treatmentsss