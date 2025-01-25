import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-[#f8f8f8] border-y-2 border-t border-[#351120]" id="comparetreatment">
      <div className="container mx-auto p-4 max-w-4xl rounded-lg">
        <h1 className="mt-8 text-3xl sm:text-4xl text-center text-gray-800 font-light">Compare Treatments</h1>
        <p className="text-center text-gray-800 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.</p>
        
        {/* Treatment Comparison Section */}
        <div className="flex flex-col sm:flex-row mt-4 gap-4">
          {/* Treatment 1 */}
          <div className="treatment w-full sm:w-1/2 text-center p-2">
            <div className="image-container w-full h-60 bg-cover bg-center rounded-lg object-cover" 
              style={{ backgroundImage: "url('/images/woman-having-facial-treatment 1.svg')" }}></div>
            <h2 className="mt-2 text-gray-800 text-xl">Chemical Peels</h2>
            <div className="description w-full border-2 border-gray-800 rounded-lg p-3 mt-2">
              <p className="text-left font-bold">Description</p>
              <p className="text-left text-xs sm:text-sm leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Treatment 2 */}
          <div className="treatment w-full sm:w-1/2 text-center p-2">
            <div className="w-full h-60 cursor-pointer bg-gray-200 border-dashed border-2 border-gray-400 flex justify-center items-center rounded-lg">
              <p>Select Treatment to compare</p>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="text-center mt-4">
          <Link href="/spa">
            <button className="bg-[#351120] text-[#FEF5E3] px-8 py-2 rounded-full mt-4">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
