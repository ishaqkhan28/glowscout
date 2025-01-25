import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen bg-[#351120] text-[#FEF5E3] flex flex-col items-center justify-center py-10 px-4">
      <div className="flex flex-col sm:flex-row sm:space-x-10 lg:space-x-40 items-center justify-center w-full">
        {/* Image 1 */}
        <Image
          src="/images/Rectangle 26.svg"
          alt="Person 1"
          className="object-cover rounded-lg mb-8 sm:mb-0"
          width={300}
          height={300}
        />
        
        {/* Text Block */}
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-[300] mb-8 text-center">
            About <br /> Glow Scout
          </h1>
          <p className="mb-4 text-sm sm:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus. Lorem ipsum dolor sit amet, consectetur elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor, consectetur adipiscing elit. Ut ut nibh faucibus adipiscing elit. Ut ut nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus. Lorem ipsum dolor sit amet, consectetur elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor, consectetur adipiscing elit. Ut ut nibh faucibus.
          </p>
        </div>

        {/* Image 2 */}
        <Image
          src="/images/Rectangle 27.svg"
          alt="Person 2"
          loading="eager"
          className="object-cover rounded-lg mb-8 sm:mb-0"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
