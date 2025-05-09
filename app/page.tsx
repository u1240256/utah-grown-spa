'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

const MAX_WIDTH = 1280;
const MIN_WIDTH = 375;

export default function Home() {
  const [scale, setScale] = useState(1);
  const [leftOffset, setLeftOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = Math.max(window.innerWidth, MIN_WIDTH);
      const scaleFactor = Math.min(width / MAX_WIDTH, 1);
      setScale(Number(scaleFactor.toFixed(3)));
      setLeftOffset(scaleFactor === 1 ? (window.innerWidth - MAX_WIDTH) / 2 : 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "scroll",
        background: "white",
      }}
    >
      <div
        style={{
          width: MAX_WIDTH,
          minHeight: "100vh",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          position: "relative",
          left: leftOffset > 0 ? leftOffset : 0,
        }}
      >
        {/* HEADER SECTION */}
        <div className="relative w-full h-[540px] overflow-hidden">
          <img
            src="/topheaderimage.png"
            alt="Top Header Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 max-w-[1280px] mx-auto px-10 pt-10">
            <nav className="flex justify-center text-sm text-[#103c00] font-semibold uppercase tracking-wider mt-4 space-x-20">
              <a href="#">Appointments</a>
              <a href="#">Medical Card Info</a>
              <a href="#">FAQs</a>
              <a href="#">Pharmacies</a>
              <a href="#">About</a>
            </nav>
          </div>
        </div>

        {/* Green bar */}
        <div className="relative w-full h-[50px] bg-[#103c00] z-20" />

        {/* Logo */}
        <div
          className="absolute z-20"
          style={{
            top: 280,
            left: "50%",
            transform: "translateX(-40%)",
            width: 890,
            height: 300,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/UtahGrownLogoWhiteBorder@2x.png"
            alt="Utah Grown Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* CONTENT */}
        <div className="max-w-[1280px] mx-auto px-4">
          <section className="text-center py-2 px-4">
            <h2 className="text-3xl font-['Interstate Condensed'] font-regular tracking-tight ml-2" style={{ color: "#103c00" }}>
              Utah’s Cannabis Community
            </h2>
          </section>

          <section className="text-center py-2 px-4">
            <h1 className="text-5xl font-bold font-Proxima Nova pl-11" style={{ color: "#103c00" }}>
              Upcoming Utah Medical Card Events
            </h1>
            <div className="mt-10 flex flex-col gap-10 items-end">
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
                  className="w-[1100px] mr-8"
                  style={{
                    maxWidth: "95%",
                  }}
                >
                  <div className="flex items-center bg-[#f2f2f2] border border-[#103c00] rounded-xl h-[150px] px-8">
                    <div className="w-[25%] flex justify-start items-center pl-4">
                      <p className="text-2xl text-[#35711f] font-proxima leading-tight whitespace-pre-line text-center">
                        {location}
                      </p>
                    </div>
                    <div className="w-[55%] flex flex-col justify-center items-start text-left pl-2 pr-1">
                      <p className="text-3xl font-extrabold" style={{ color: "#103c00" }}>
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
                      <button className="w-[180px] h-[65px] bg-[#e7cbaf] text-[#35711f] text-xl font-['Interstate Condensed'] font-normal rounded-full whitespace-nowrap">
                        Book Time
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* THINGS TO KNOW */}
          <section className="bg-white py-0 px-6 text-[#103c00] flex flex-col items-end">
            <div className="w-[1100px] max-w-full mx-auto bg-white rounded-xl py-2 px-8 shadow-none">
              <h2 className="text-4xl font-bold text-center mb-6 mt-10" style={{ color: "#103c00" }}>
                Things to know before your appointment
              </h2>
              {/* STEP 1 */}
              <div className="flex items-start mb-6 w-full">                <div className="flex flex-col items-center mr-8 mt-[-10px]">
                <Image src="/Number1@2x.png" alt="Step 1" width={60} height={60} />
              </div>
                <div className="flex-1">
                  <p className="font-['Interstate Condensed'] text-[#103c00] font-bold text-2xl mb-4 text-left -ml-2 tracking-tight">
                    You’re going to register with the state of Utah. You can start this before you arrive.
                  </p>
                  <div className="flex flex-col gap-6 mt-9">
                    <div className="flex items-center gap-x-6">
                      <button className="w-[240px] h-[55px] bg-[#e7cbaf] text-[#103c00] text-xl font-['Interstate Condensed'] font-normal rounded-full ml-4">
                        UtahID.org
                      </button>
                      <span className="text-[#103c00] font-bold text-xl ml-1">
                        Obtain access to your Utah Digital ID
                      </span>
                    </div>
                    <div className="flex items-center gap-x-6">
                      <button className="w-[240px] h-[55px] bg-[#e7cbaf] text-[#103c00] text-xl font-['Interstate Condensed'] font-normal rounded-full ml-4">
                        EVS.Utah.gov
                      </button>
                      <span className="text-[#103c00] font-bold text-xl ml-1">
                        Fill out all the fields until you get to “Awaiting Certification” status
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center mt-4">
                    <div style={{ width: 254 }} />
                    <Image
                      src="/AwaitingCert-Image@2x.png"
                      alt="Awaiting Certification"
                      width={260}
                      height={120}
                    />
                  </div>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="flex items-start mb-6 w-full">                <div className="flex flex-col items-center mr-8 mt-[-10px]">
                <Image src="/Number2@2x.png" alt="Step 2" width={60} height={60} />
              </div>
                <div className="flex-1 flex items-center">
                  <span className="font-['Interstate Condensed'] text-[#103c00] font-bold text-2xl text-left -ml-3 tracking-tight mr-9 mb-12">
                    Check in with your QMP
                  </span>
                  <ol className="list-decimal text-xl font-['Interstate Condensed'] font-bold ml-8">
                    <li>QMP Registration</li>
                    <li>Medical Evaluation/Consultation</li>
                    <li>Payment</li>
                  </ol>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="flex items-start w-full mb-0">                <div className="flex flex-col items-center -mr-3 mt-[-10px]">
                <Image src="/Number3@2x.png" alt="Step 3" width={70} height={70} />
              </div>
                <div className="flex-1">
                  <div className="flex items-baseline">
                    <span className="font-['Interstate Condensed'] text-[#103c00] font-bold text-2xl text-left ml-9 tracking-tight mr-7">
                      Renewal or New Patient?
                    </span>
                    <span className="text-xl font-['Interstate Condensed'] font-bold text-[#103c00] ml-1">
                      If this is a renewal, congratulations you are ready to shop…
                    </span>
                  </div>
                  <div className="flex items-baseline mt-0">
                    <span className="ml-[345px] text-xl font-['Interstate Condensed'] font-bold text-[#103c00]">
                      If you are a new patient, here are some helps to get you started…
                    </span>
                  </div>
                  <ol className="list-decimal text-xl font-['Interstate Condensed'] font-bold ml-[465px] mt-2 space-y-2">
                    <li>Meet with Pharmacist</li>
                    <li>Set up your Portal Account</li>
                    <li>Start Shopping</li>
                  </ol>
                  <div className="ml-[442px] mt-0 mb-0">
                    <span className="text-xl font-['Interstate Condensed'] font-bold text-[#103c00] whitespace-nowrap">
                      **Don’t forget to take advantage of new patient deals**
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            className="relative flex justify-center items-center w-[1280px] h-[320px] mx-auto -mt-40 mb-10"
            style={{ maxWidth: "100%" }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-white">
              <Image
                src="/MockBannerAd.png"
                alt="Mock Banner Ad"
                width={1280}
                height={320}
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                priority
              />
              <span
                className="absolute"
                style={{
                  right: 0,
                  bottom: 0,
                  marginRight: "18px",
                  marginBottom: "10px",
                  color: "#808080",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  letterSpacing: "0.05em",
                  zIndex: 10,
                  background: "rgba(255,255,255,0.85)",
                  borderRadius: "8px",
                  padding: "2px 16px 2px 16px",
                  lineHeight: 1.2,
                }}
              >
                Ad
              </span>
            </div>
          </div>
          {/* HOW TO GET CARD */}
          <section className="bg-white text-gray-800 py-12 px-6">
            <h2 className="text-3xl font-extrabold font-proxima text-center mb-6" style={{ color: "#103c00" }}>
              How to Get Your Utah Medical Card
            </h2>
            <ol className="list-decimal list-inside max-w-2xl mx-auto space-y-4 text-left">
              <li>Book an appointment with a QMP</li>
              <li>Complete a medical evaluation</li>
              <li>Pay & register with the Utah Department of Health</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}