"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const BASE_WIDTH = 1280;
const MIN_WIDTH = 375;
const HEADER_BG_WIDTH = 2210;
const HEADER_HEIGHT = 790;
const GREEN_BAR_HEIGHT = 65;

export default function Home() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = Math.max(window.innerWidth, MIN_WIDTH);
      const scaleFactor = Math.min(width / BASE_WIDTH, 1);
      setScale(Number(scaleFactor.toFixed(3)));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // The scaled width of the content
  const scaledWidth = HEADER_BG_WIDTH * scale;

  return (
    <div
      style={{
        width: scaledWidth,
        minWidth: "100vw",
        minHeight: "100vh",
        overflowX: "auto",
        overflowY: "auto",
        background: "white",
        position: "relative",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: HEADER_BG_WIDTH,
          minWidth: HEADER_BG_WIDTH,
          minHeight: "100vh",
          margin: "0 auto",
          position: "relative",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {/* HEADER IMAGE */}
        <div
          style={{
            width: HEADER_BG_WIDTH,
            height: HEADER_HEIGHT,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src="/topheaderimage.png"
            alt="Top Header Background"
            className="absolute left-0 top-0 w-full h-full object-cover"
            style={{
              width: HEADER_BG_WIDTH,
              height: "100%",
              zIndex: 1,
            }}
          />
        </div>

        {/* NAVIGATION BAR */}
        <div
          style={{
            width: BASE_WIDTH,
            position: "absolute",
            top: 55,
            left: 5,
            right: 0,
            margin: "0 auto",
            zIndex: 10,
            pointerEvents: "auto",
          }}
        >
          <div style={{ overflowX: "auto", width: "100%" }}>
            <nav className="flex justify-start text-xl text-[#103c00] font-Proxima Nova font-semibold uppercase tracking-wider mt-4 gap-x-36 pl-0 min-w-max">
              <a href="#">Appointments</a>
              <a href="#">Medical Card Info</a>
              <a href="#">FAQs</a>
              <a href="#">Pharmacies</a>
              <a href="#">About</a>
            </nav>
          </div>
        </div>

        {/* LOGO */}
        <div
          style={{
            width: 1550,
            height: 420,
            position: "absolute",
            top: 425,
            left: "19%",
            transform: "none",
            zIndex: 40,
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

        {/* GREEN BAR */}
        <div
          style={{
            width: HEADER_BG_WIDTH,
            height: GREEN_BAR_HEIGHT,
            background: "#103c00",
            position: "absolute",
            top: HEADER_HEIGHT,
            left: 0,
            zIndex: 30,
          }}
        />

        {/* Main Content */}
        <div
          style={{
            width: BASE_WIDTH,
            minHeight: "100vh",
            margin: "0 auto",
            zIndex: 40,
            position: "relative",
            paddingTop: 80,
          }}
        >
          {/* CONTENT */}
          <div className="max-w-[1280px] mx-auto px-4">
            <div
              style={{
                width: 1600,
                marginLeft: "-18%",
              }}
            >
              <h2
                className="text-4xl font-['Interstate Condensed'] font-regular tracking-tight text-center"
                style={{ color: "#103c00" }}
              >
                Utah’s Cannabis Community
              </h2>
            </div>
            <div
              className="w-full bg-white"
              style={{ paddingTop: 43, paddingBottom: 0 }}
            >
              {" "}
            </div>
            <section className="text-center py-2 px-4">
              <h1
                className="text-6xl font-bold font-Proxima Nova"
                style={{ color: "#103c00", marginLeft: "-60px" }}
              >
                Upcoming Utah Medical Card Events
              </h1>
              <div
                className="w-full bg-white"
                style={{ paddingTop: 50, paddingBottom: 0 }}
              >
                {" "}
              </div>
              <div className="flex flex-col gap-12 items-center w-full">
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
                    className="w-[1380px] flex justify-center"
                    style={{ marginLeft: "-50px" }}
                  >
                    <div className="flex items-center bg-[#f2f2f2] border border-[#103c00] rounded-3xl h-[180px] px-8 w-full">
                      <div
                        className="w-[25%] flex justify-start items-center pl-4"
                        style={
                          location === "Downtown\nSLC" ||
                          location === "Price UT"
                            ? { marginLeft: "39px" }
                            : {}
                        }
                      >
                        <p className="text-3xl text-[#35711f] font-proxima leading-tight whitespace-pre-line text-center">
                          {location}
                        </p>
                      </div>
                      <div className="w-[55%] flex flex-col justify-center items-start text-left pl-2 pr-1">
                        <p
                          className="text-4xl font-extrabold"
                          style={{ color: "#103c00" }}
                        >
                          {date}
                        </p>
                        <p className="text-3xl text-[#35711f] font-proxima mt-1">
                          {time}
                        </p>
                        <p className="text-3xl text-[#35711f] font-proxima mt-1">
                          {note}
                        </p>
                      </div>
                      <div className="w-[20%] flex justify-center pr-2">
                        <button
                          className="w-[220px] h-[70px] bg-[#e7cbaf] text-[#35711f] text-3xl font-['Interstate Condensed'] font-normal rounded-full whitespace-nowrap"
                          style={{ marginLeft: "20px" }}
                        >
                          Book Time
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* THINGS TO KNOW */}
            <div
              className="w-full bg-white"
              style={{ paddingTop: 50, paddingBottom: 0 }}
            >
              <section className="bg-white py-0 px-6 text-[#103c00] flex flex-col items-end">
                <div className="w-[1250px] max-w-full mx-auto bg-white rounded-xl py-2 px-8 shadow-none">
                  <h2
                    className="text-5xl font-bold text-center mb-6 mt-10"
                    style={{ color: "#103c00" }}
                  >
                    Things to know before your appointment
                  </h2>
                  <div
                    className="w-full"
                    style={{ paddingTop: 65, paddingBottom: 0 }}
                  ></div>
                  {/* STEP 1 */}
                  <div
                    className="flex flex-col w-[1100px] mb-6"
                    style={{ marginLeft: "-120px" }}
                  >
                    {/* Row 1: Icon + Sentence */}
                    <div className="flex items-center">
                      <div
                        className="flex items-center justify-center mr-8 flex-shrink-0"
                        style={{ width: 90 }}
                      >
                        <Image
                          src="/Number1@2x.png"
                          alt="Step 1"
                          width={90}
                          height={90}
                        />
                      </div>
                      <span
                        className="font-['Interstate Condensed'] text-[#103c00] font-bold text-3xl text-left tracking-tight whitespace-nowrap"
                        style={{ marginBottom: 0 }}
                      >
                        You’re going to register with the state of Utah. You can
                        start this before you arrive.
                      </span>
                    </div>

                    {/* Row 2: Buttons and Explanations, aligned with sentence */}
                    <div className="flex flex-col gap-6 mt-8">
                      <div className="grid grid-cols-[160px_290px_1fr] items-center">
                        <div />
                        <button className="h-[65px] bg-[#e7cbaf] text-[#103c00] text-2xl font-['Interstate Condensed'] font-normal rounded-full w-[290px]">
                          UtahID.org
                        </button>
                        <span className="text-[#103c00] font-bold text-2xl ml-6">
                          Obtain access to your Utah Digital ID
                        </span>
                      </div>
                      <div className="grid grid-cols-[160px_290px_1fr] items-center">
                        <div />
                        <button className="h-[65px] bg-[#e7cbaf] text-[#103c00] text-2xl font-['Interstate Condensed'] font-normal rounded-full w-[290px]">
                          EVS.Utah.gov
                        </button>
                        <span className="text-[#103c00] font-bold text-2xl ml-6 whitespace-nowrap">
                          Fill out all the fields until you get to “Awaiting
                          Certification” status
                        </span>
                      </div>
                    </div>

                    {/* Row 3: Image, aligned with buttons */}
                    <div className="flex items-center mt-4">
                      <div style={{ width: 440 }} />
                      <Image
                        src="/AwaitingCert-Image@2x.png"
                        alt="Awaiting Certification"
                        width={330}
                        height={170}
                      />
                    </div>
                  </div>
                  <div style={{ height: 80 }} />
                  {/* STEP 2 */}
                  <div
                    className="flex items-start mb-6 w-full"
                    style={{ marginLeft: "-120px" }}
                  >
                    <div className="flex flex-col items-center mr-8 mt-[-10px]">
                      <Image
                        src="/Number2@2x.png"
                        alt="Step 2"
                        width={90}
                        height={90}
                      />
                    </div>
                    <div
                      className="flex-1 flex items-center"
                      style={{ marginTop: "-38px" }}
                    >
                      <span className="font-['Interstate Condensed'] text-[#103c00] font-bold text-3xl text-left ml-4 tracking-tight mr-9 mb-6">
                        Check in with your QMP
                      </span>
                      <ol
                        className="list-decimal text-2xl font-['Interstate Condensed'] font-bold ml-10 space-y-2"
                        style={{ marginTop: "50px" }}
                      >
                        <li>QMP Registration</li>
                        <li>Medical Evaluation/Consultation</li>
                        <li>Payment</li>
                      </ol>
                    </div>
                  </div>
                  <div style={{ height: 80 }} />

                  {/* STEP 3 */}
                  <div
                    className="flex items-start w-full mb-0"
                    style={{ marginLeft: "-120px" }}
                  >
                    <div className="flex flex-col items-center mr-8 mt-[-10px]">
                      <Image
                        src="/Number3@2x.png"
                        alt="Step 3"
                        width={90}
                        height={90}
                        style={{ minWidth: 90, minHeight: 90 }}
                      />
                    </div>
                    <div
                      className="flex-1 flex items-start"
                      style={{ marginTop: "18px", marginLeft: "23px" }}
                    >
                      <span className="font-['Interstate Condensed'] text-[#103c00] font-bold text-3xl text-left tracking-tight whitespace-nowrap mr-9">
                        Renewal or New Patient?
                      </span>
                      <div>
                        <span
                          className="text-2xl font-['Interstate Condensed'] font-bold text-[#103c00] whitespace-nowrap"
                          style={{ marginLeft: "-6px" }}
                        >
                          If this is a renewal, congratulations you are ready to
                          shop…
                        </span>
                        <div>
                          <span
                            className="text-2xl font-['Interstate Condensed'] font-bold text-[#103c00] whitespace-nowrap block mt-2"
                            style={{ marginLeft: "-6px" }}
                          >
                            If you are a new patient, here are some helps to get
                            you started…
                          </span>
                          <ol
                            className="list-decimal text-2xl font-['Interstate Condensed'] font-bold ml-8 mt-2 space-y-4"
                            style={{ marginLeft: "150px" }}
                          >
                            <li>Meet with Pharmacist</li>
                            <li>Set up your Portal Account</li>
                            <li>Start Shopping</li>
                          </ol>
                          <span
                            className="text-2xl font-['Interstate Condensed'] font-bold text-[#103c00] whitespace-nowrap mt-2 block"
                            style={{ marginTop: "30px", marginLeft: "120px" }}
                          >
                            **Don’t forget to take advantage of new patient
                            deals**
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div style={{ height: 30 }} />
            {/* BANNER AD */}
            <div
              className="relative"
              style={{
                width: 1460,
                height: 350,
                marginLeft: "-10%",
              }}
            >
              <Image
                src="/MockBannerAd@2x.png"
                alt="Mock Banner Ad"
                fill
                className="object-cover rounded-xl"
                style={{
                  borderRadius: "0",
                }}
              />
              {/* "Ad" Text */}
              <div
                className="absolute"
                style={{
                  bottom: "-35px",
                  right: "20px",
                  color: "#808080",
                  fontSize: "25px",
                  fontFamily: "Proxima Nova, sans-serif",
                  fontWeight: 500,
                }}
              >
                Ad
              </div>
            </div>
            <div style={{ height: 80 }} />
            {/* CONSULTATION IMAGE + TEXT */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                width: 1450,
                marginLeft: "-10%",
                marginTop: 30,
                gap: 55,
              }}
            >
              <div
                style={{
                  width: 760,
                  height: 700,
                  flexShrink: 0,
                  background: "#f2f2f2",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/Consultation2x.png"
                  alt="Consultation"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0",
                    display: "block",
                  }}
                />
              </div>
              {/* Text content */}
              <div style={{ flex: 1, paddingLeft: 30 }}>
                <h2
                  style={{
                    color: "#103c00",
                    fontSize: "3.5rem",
                    fontFamily: "'Proxima Nova', sans-serif",
                    fontWeight: 800,
                    marginBottom: 0,
                    marginTop: 40,
                  }}
                >
                  Utah Medical Cards
                </h2>
                <p
                  style={{
                    fontSize: "1.48rem",
                    color: "#808080",
                    lineHeight: 2.0,
                    fontFamily: "'Interstate Condensed', sans-serif",
                    fontWeight: 300,
                    marginTop: 24,
                  }}
                >
                  A medical cannabis card, also known as a medical mari-
                  <br />
                  juana card, is a state-issued identification card that allows{" "}
                  <br />
                  qualified patients to legally purchase and use medical <br />
                  cannabis for the treatment of specific medical conditions.
                  <br />
                  In Utah, a card is required to access and purchase medi-
                  <br />
                  cal cannabis products from state-licensed dispensaries.
                  <br />
                  Having a medical card does not allow you to possess any <br />
                  cannabis product but only the products you purchased <br />
                  under your PAT (Medical Card ID number).
                </p>
              </div>
            </div>
            <div style={{ height: 120 }} />
            {/* Review Section */}
            <div
              style={{
                width: 1460,
                height: 223,
                marginLeft: "-10%",
                position: "relative",
                overflow: "hidden",
                borderRadius: "0",
                background: "#0b4e0b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/Review Banner@2x.png"
                alt="Review Banner"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "0",
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 80,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <h2
                  style={{
                    color: "white",
                    fontSize: "3.0rem",
                    fontFamily: "'Interstate Condensed', sans-serif",
                    fontWeight: 300,
                    marginBottom: 0,
                    marginTop: 0,
                    textAlign: "left",
                    lineHeight: 1.1,
                  }}
                >
                  We’d love to hear from you!
                </h2>
                <div style={{ height: 20 }} />
                <button
                  style={{
                    background: "#e7cbaf",
                    color: "#205c2a",
                    fontSize: "2.2rem",
                    fontFamily: "'Proxima Nova', sans-serif",
                    fontWeight: 500,
                    border: "none",
                    borderRadius: "40px",
                    width: "370px",
                    height: "75px",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    transition: "background 0.2s",
                    textAlign: "center",
                  }}
                >
                  Review us here!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
