import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-wrap bg-[#F8F8F8] h-[auto] md:px-36 w-full border-t-2 border-[#351120]">
      <footer className="bg-[#121212] text-[#FEF5E3] py-10 sm:py-20 w-full mt-10 sm:mt-20 rounded-xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between sm:justify-evenly mb-6">
            <div className="text-center sm:text-left mb-6 sm:mb-0">
              <h2 className="text-4xl sm:text-6xl font-Raleway font-[400]">Glow <br /> Scout</h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-6 sm:space-y-0 text-lg sm:text-2xl text-center sm:text-left">
              <div>
                <h3 className="font-Raleway mb-2">Quick Links</h3>
                <ul>
                  <li><Link href="/"><Link href="">Home</Link></Link></li>
                  <li><Link href="/treatments"><Link href="">Treatments</Link></Link></li>
                  <li><Link href="/spas"><Link href="">Spas</Link></Link></li>
                  <li><Link href="/blog"><Link href="">Blog</Link></Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-Raleway mb-2">Privacy Policy</h3>
                <ul>
                  <li><Link href="/terms"><Link href="">Terms & Conditions</Link></Link></li>
                  <li><Link href="/about"><Link href="">About Us</Link></Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-Raleway mb-2">Follow Us</h3>
                <ul>
                  <li><Link href=""><Link href="">Instagram</Link></Link></li>
                  <li><Link href=""><Link href="">Facebook</Link></Link></li>
                  <li><Link href=""><Link href="">YouTube</Link></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
