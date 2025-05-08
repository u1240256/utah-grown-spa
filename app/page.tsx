import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="relative font-interstate text-white">
        <div className="relative h-[560px]">
          <img
            src="/topheaderimage.png"
            alt="Top Header Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-8 pt-10 flex justify-center">
            <nav className="pl-18 flex justify-center space-x-24 text-base text-[#103c00] font-Proxima Nova font-Semibold uppercase tracking-wider">
              <a href="#">Appointments</a>
              <a href="#">Medical Card Info</a>
              <a href="#">FAQs</a>
              <a href="#">Pharmacies</a>
              <a href="#">About</a>
            </nav>
          </div>

          <div className="absolute bottom-[-28px] left-1/2 transform -translate-x-[40%] z-20 w-[720px]">
            <Image
              src="/UtahGrownLogoWhiteBorder@2x.png"
              alt="Utah Grown Logo"
              width={800}
              height={280}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="bg-[#103c00] h-[55px] w-full" />
      </header>

      <main className="bg-white text-[#103c00] font-interstate">
        <section className="text-center py-2 px-4">
          <h2 className="text-xl font-['Interstate Condensed'] font-light px-8 tracking-wider">
            Utah’s Cannabis Community
          </h2>
        </section>
        <section className="text-center py-10 px-4">
          <h1 className="text-4xl font-Semibold font-Proxima Nova">
            Upcoming Utah Medical Card Events
          </h1>
          <div className="mt-6 flex justify-center">
            <Image
              src="/MockBannerAd@2x.png"
              alt="Mock Banner Ad"
              width={600}
              height={200}
            />
          </div>
        </section>

        <section className="bg-white text-gray-800 py-12 px-6">
          <h2 className="text-3xl font-extrabold font-proxima text-center mb-6">
            How to Get Your Utah Medical Card
          </h2>
          <ol className="list-decimal list-inside max-w-2xl mx-auto space-y-4 text-left">
            <li>Book an appointment with a QMP</li>
            <li>Complete a medical evaluation</li>
            <li>Pay & register with the Utah Department of Health</li>
          </ol>
        </section>
      </main>
    </>
  );
}
