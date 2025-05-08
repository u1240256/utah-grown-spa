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
            <nav className="pl-18 flex justify-center space-x-24 text-[#103c00] font-Interstate Condensed font-regular uppercase tracking-wider">
              <a href="#">Appointments</a>
              <a href="#">Medical Card Info</a>
              <a href="#">FAQs</a>
              <a href="#">Pharmacies</a>
              <a href="#">About</a>
            </nav>
          </div>

          <div className="absolute bottom-[-38px] left-1/2 transform -translate-x-[40%] z-20 w-[840px] h-[300px]">
            <Image
              src="/UtahGrownLogoWhiteBorder@2x.png"
              alt="Utah Grown Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="bg-[#103c00] h-[50px] w-full" />
      </header>

      <main className="bg-white text-[#103c00] font-interstate">
        <section className="text-center py-2 px-4">
          <h2 className="text-2xl font-['Interstate Condensed'] font-light px--10 tracking-wider">
            Utah’s Cannabis Community
          </h2>
        </section>
        <section className="text-center py-10 px-4">
          <h1 className="text-5xl font-Semibold font-Proxima Nova pl-11">
            Upcoming Utah Medical Card Events
          </h1>
          <div className="mt-10 space-y-6 max-w-7xl mx-auto">
            {[
              {
                location: "Downtown\nSLC",
                date: "Tuesday, October 3rd 2023",
                time: "9:00 am - 2:00pm",
                note: "New Patients and Renewals",
              },
              {
                location: "Price UT",
                date: "Thursday, October 19th 2023",
                time: "9:00 am - 4:00pm",
                note: "Renewals Only",
              },
              {
                location: "<Other Location>",
                date: "Friday, November 10th 2023",
                time: "10:00 am - 2:00pm",
                note: "Special Event for Veterans",
              },
            ].map(({ location, date, time, note }, i) => (
              <div
                key={i}
                className="flex items-center bg-[#f2f2f2] border border-[#103c00] rounded-xl h-[150px] px-14"
              >
                <div className="w-[25%] flex justify-start items-center pl-6">
                  <p className="text-2xl text-[#35711f] font-proxima leading-tight whitespace-pre-line text-left">
                    {location}
                  </p>
                </div>
                <div className="w-[50%] flex flex-col justify-center items-start text-left pl-8">
                  <p className="text-3xl font-extrabold text-[#103c00] font-proxima whitespace-nowrap">
                    {date}
                  </p>
                  <p className="text-xl text-[#35711f] font-proxima mt-1">
                    {time}
                  </p>
                  <p className="text-xl text-[#35711f] font-proxima mt-1">
                    {note}
                  </p>
                </div>
                <div className="w-[25%] flex justify-end pr-8">
                  <button className="bg-[#e7cbaf] text-[#35711f] text-xl font-['Interstate Condensed'] font-normal px-16 py-5 rounded-full">
                    Book Time
                  </button>
                </div>
              </div>
            ))}
          </div>

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
