'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      const scaleFactor = Math.min(window.innerWidth / 1280, 1);
      setScale(Number(scaleFactor.toFixed(3)));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="bg-white text-[#103c00] font-interstate">
  <div
    className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto"
    style={{ height: `${1280 * (1 / scale)}px` }}
  >
    <div
      style={{
        width: 1280,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
      }}
    >
      <header className="relative text-white">
        <div className="relative h-[540px]">
          <img
            src="/topheaderimage.png"
            alt="Top Header Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-10 pt-10 flex justify-center">
            <nav className="pl-18 flex justify-center text-sm text-[#103c00] font-Proxima Nova font-Semibold uppercase tracking-wider mt-4">
              <a href="#" className="ml-20 mr-10">Appointments</a>
              <a href="#" className="mx-10">Medical Card Info</a>
              <a href="#" className="mx-10">FAQs</a>
              <a href="#" className="mx-10">Pharmacies</a>
              <a href="#" className="ml-10 mr-20">About</a>
            </nav>
          </div>

          <div className="absolute bottom-[-38px] left-1/2 transform -translate-x-[40%] z-20 w-[871px] h-[300px]">
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

      {/* TITLE + EVENTS */}
      <section className="text-center py-2 px-4">
        <h2 className="text-3xl font-['Interstate Condensed'] font-light tracking-tight">
          Utah’s Cannabis Community
        </h2>
      </section>

      <section className="text-center py-10 px-4">
        <h1 className="text-5xl font-Semibold font-Proxima Nova pl-11">
          Upcoming Utah Medical Card Events
        </h1>
        <div className="mt-10 space-y-6">
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
            <div className="max-w-[1024px] mx-auto w-full px-4">
              <div className="flex items-center bg-[#f2f2f2] border border-[#103c00] rounded-xl h-[150px] px-6">
                <div className="w-[25%] flex justify-start items-center pl-4">
                  <p className="text-2xl text-[#35711f] font-proxima leading-tight whitespace-pre-line text-center">
                    {location}
                  </p>
                </div>
                <div className="w-[55%] flex flex-col justify-center items-start text-left pl-2 pr-1">
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
                <div className="w-[20%] flex justify-end pr-2">
                  <button className="w-[180px] h-[55px] bg-[#e7cbaf] text-[#35711f] text-xl font-['Interstate Condensed'] font-normal rounded-full whitespace-nowrap">
                    Book Time
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-white py-16 px-6 text-[#103c00]">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#103c00]">
          Things to know before your appointment
        </h2>

        {/* STEP 1 */}
        <div className="w-[82%] ml-auto mr-[5%] mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <Image src="/Number1@2x.png" alt="Step 1" width={50} height={50} />
            <p className="text-lg font-semibold">
              You’re going to register with the state of Utah. You can start this before you arrive.
            </p>
          </div>

          <div className="ml-[80px] space-y-6">
            {/* UtahID.org row */}
            <div className="flex items-center">
              <button className="w-[200px] h-[45px] bg-[#e7cbaf] text-[#103c00] text-sm font-semibold rounded-full">
                UtahID.org
              </button>
              <span className="ml-6 text-sm font-medium">
                Obtain access to your Utah Digital ID
              </span>
            </div>

            {/* EVS.Utah.gov row */}
            <div className="flex items-center">
              <button className="w-[200px] h-[45px] bg-[#e7cbaf] text-[#103c00] text-sm font-semibold rounded-full">
                EVS.Utah.gov
              </button>
              <span className="ml-6 text-sm font-medium">
                Fill out all the fields until you get to “Awaiting Certification” status
              </span>
            </div>

            {/* Awaiting image row */}
            <div className="pt-4 pl-[200px]">
              <Image
                src="/AwaitingCert-Image@2x.png"
                alt="Awaiting Certification"
                width={160}
                height={64}
              />
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="w-[82%] ml-auto mr-[5%] mb-16">
          <div className="flex items-center space-x-4 mb-4">
            <Image src="/Number2@2x.png" alt="Step 2" width={50} height={50} />
            <p className="text-lg font-semibold">Check in with your QMP</p>
          </div>
          <ul className="ml-[80px] list-disc text-sm space-y-1">
            <li>QMP Registration</li>
            <li>Medical Evaluation/Consultation</li>
            <li>Payment</li>
          </ul>
        </div>

        {/* STEP 3 */}
        <div className="w-[82%] ml-auto mr-[5%]">
          <div className="flex items-center space-x-4 mb-4">
            <Image src="/Number3@2x.png" alt="Step 3" width={50} height={50} />
            <p className="text-lg font-semibold">Renewal or New Patient?</p>
          </div>
          <div className="ml-[80px] text-sm space-y-4">
            <p>If this is a renewal, congratulations you are ready to shop…</p>
            <p>If you are a new patient, here are some helps to get you started…</p>
            <ul className="list-decimal list-inside space-y-1">
              <li>Meet with Pharmacist</li>
              <li>Set up your Portal Account</li>
              <li>Start Shopping</li>
            </ul>
            <p className="font-semibold text-[#103c00]">
              **Don’t forget to take advantage of new patient deals**
            </p>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <div className="mt-6 flex justify-center">
        <Image
          src="/MockBannerAd@2x.png"
          alt="Mock Banner Ad"
          width={600}
          height={200}
        />
      </div>

      {/* HOW TO GET CARD */}
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
    </div>
      </div >
    </main >
  );
}
