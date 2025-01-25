// // components/SpaPage.js
// import Image from "next/image"
// import Link from "next/link"
// export default function SpaPage() {
//     return (
//       <div className="min-h-screen bg-[#f8f8f8] px-20">
//         <div className="bg-[#F8F8F8] rounded-xl overflow-hidden">
//         <div className="flex max-w-7xl bg-[#f8f8f8] rounded-lg overflow-hidden w-full">
//             <div className="flex- p-5">
//                 <h1 className="text-6xl font-Raleway mb-2 text-[#351120]">Crystal Calm Spa</h1>
//                             <div className="flex gap-2">
//                     <div className="flex-4">
//                         <Image src={"/images/huum-K65M3GbRYq8-unsplash.svg"} alt="Main Image" loading = 'eager' className="w-full h-full rounded-lg" width={300} height={300}/>
//                     </div>
//                     <div className="flex-2 flex flex-col gap-2">
//                         <Image src={"/images/huum-DINpA68Jt2U-unsplash.svg"} alt="Thumbnail Image 1" loading = 'eager' className="w-full h-auto rounded-lg cursor-pointer" width={300} height={300}/>
//                         <Image src={"/images/elias-kipfer-YhCdQGtQfk4-unsplash.svg"} alt="Thumbnail Image 2" loading = 'eager' className="w-full h-auto rounded-lg cursor-pointer" width={300} height={300}/>
//                     </div>
//                 </div>
//             </div>
//             <div className=" bg-[#F8F8F8] p-5 flex flex-col px-11 border-2 border-[#351120] justify-between items-center">
//                 <h2 className="text-2xl font-Raleway mb-2">Crystal Calm Spa</h2>
//                 <button className="bg-transparent border-none text-[#351120] cursor-pointer mb-4 mr-24">Add to favourites</button>
//                 <div className="text-yellow-500 text-xl mb-5 mr-24">
//                     ⭐⭐⭐⭐⭐ <span>(5,212)</span>
//                 </div>
//                 <p className="mb-2 mr-24">Open until 12:00 p.m.</p>
//                 <p className="mb-2 mr-14">13th Street 47 W 13th St, New York</p>
//                 <Link href="#" className="block text-center mb-2 py-4 px-20  border-2 border-[#351120] rounded-xl bg-[#f8f8f8] text-[#351120]">Visit Website</Link>
//                 <Link href="/booknow" className="block text-center py-4 px-24 rounded-xl bg-[#351120] text-[#FEF5E3] ">Book Now</Link>
//             </div>
//         </div>

//       </div>
//       </div>
//     );
//   }
// components/SpaPage.js
import Image from "next/image"
import Link from "next/link"

export default function SpaPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] px-4 sm:px-8 lg:px-20">
      <div className="bg-[#F8F8F8] rounded-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row max-w-7xl bg-[#f8f8f8] rounded-lg overflow-hidden w-full">
          <div className="flex-1 p-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-Raleway mb-2 text-[#351120]">Crystal Calm Spa</h1>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex">
                <Image src={"/images/huum-K65M3GbRYq8-unsplash.svg"} alt="Main Image" className="w-[600px] h-auto rounded-lg" width={300} height={300} />
              </div>
              <div className="flex-1  gap-2">
                <Image src={"/images/huum-DINpA68Jt2U-unsplash.svg"} alt="Thumbnail Image 1" className="w-full h-auto rounded-lg cursor-pointer" width={300} height={300} />
                <Image src={"/images/elias-kipfer-YhCdQGtQfk4-unsplash.svg"} alt="Thumbnail Image 2" className="w-full h-auto rounded-lg cursor-pointer" width={300} height={300} />
              </div>
            </div>
          </div>
          <div className="bg-[#F8F8F8] p-5 flex flex-col items-center lg:items-start px-8 border-2 border-[#351120] justify-between">
            <h2 className="text-2xl sm:text-3xl lg:text-2xl font-Raleway mb-2">Crystal Calm Spa</h2>
            <button className="bg-transparent border-none text-[#351120] cursor-pointer mb-4 lg:mr-24">Add to favourites</button>
            <div className="text-yellow-500 text-xl mb-5 lg:mr-24">
              ⭐⭐⭐⭐⭐ <span>(5,212)</span>
            </div>
            <p className="mb-2 lg:mr-24">Open until 12:00 p.m.</p>
            <p className="mb-2 lg:mr-14">13th Street 47 W 13th St, New York</p>
            <Link href="#" className="block text-center mb-2 py-4 px-12 sm:px-16 lg:px-20 border-2 border-[#351120] rounded-xl bg-[#f8f8f8] text-[#351120]">Visit Website</Link>
            <Link href="/booknow" className="block text-center py-4 px-16 sm:px-24 lg:px-24 rounded-xl bg-[#351120] text-[#FEF5E3] ">Book Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
