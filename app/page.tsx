import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <header className="relative bg-[#103c00] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/topheaderimage.png"
            alt="Top Header Background"
            fill
            className="object-cover object-center opacity-90"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-6">
          <Image
            src="/UtahGrownLogoWhiteBorder@2x.png"
            alt="Utah Grown"
            width={160}
            height={60}
            className="object-contain mb-4 md:mb-0"
          />
          <nav className="flex flex-wrap justify-center space-x-4 text-sm font-medium uppercase">
            <a href="#" className="hover:underline">Appointments</a>
            <a href="#" className="hover:underline">Medical Card Info</a>
            <a href="#" className="hover:underline">FAQs</a>
            <a href="#" className="hover:underline">Pharmacies</a>
            <a href="#" className="hover:underline">About</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-[#e6efc5] text-[#103c00] font-sans">
        <section className="text-center py-12 px-4">
          <div className="mb-6 flex justify-center">
            <Image
              src="/UtahGrownLogoWhiteBorder@2x.png"
              alt="Utah Grown Logo"
              width={300}
              height={80}
              className="object-contain"
            />
          </div>
          <h1 className="text-5xl font-extrabold">Welcome to Utah Grown</h1>
          <p className="mt-4 text-xl">Now Keeping Utah Fresh 🌿</p>
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
          <h2 className="text-3xl font-semibold text-center mb-6">
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
