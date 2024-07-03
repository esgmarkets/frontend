"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

const advantages = [
  "LIVE Q&A feature",
  "Real-time Comment and Rating Tools",
  "HD Video Quality",
  "Accomodate Unlimited Participants",
  "Share Ideas through EM Messenger",
  "Automated Email Invitation and Reminders",
];


export default function ESGMarketsTV() {
  const path = usePathname();

  return (
    <>
      <section id="esg-tv" className="pt60 pb80-md">
        <div className="cta-banner mx-auto maxw1700 pt110 pb80 pb30-md bdrs12 position-relative bgc-theme3">
          <div className="container">
            <div className="row align-items-start align-items-xl-center">
              <div className="col-md-6 col-lg-7 col-xl-6">
                <div
                  className="position-relative mb35 mb0-sm wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <div className="freelancer-widget d-none d-lg-block">
                    <h5 className="title mb20">
                      <span className="text-thm">200+ </span>
                      Experts
                    </h5>
                    <div className="thumb d-flex align-items-center mb20">
                      <div className="flex-shrink-0">
                        <Image
                          height={55}
                          width={55}
                          className="wa"
                          src="/images/avatar/ea-1.webp"
                          alt="object"
                        />
                      </div>
                      <div className="flex-grow-1 ml20">
                        <h6 className="title mb-0">Taoufix Lachheb</h6>
                        <p className="fz14 mb-0">
                          Managing Director of Islamic Bank of Mauritania (BIM)
                        </p>
                      </div>
                    </div>
                    <div className="thumb d-flex align-items-center mb20">
                      <div className="flex-shrink-0">
                        <Image
                          height={55}
                          width={55}
                          className="wa"
                          src="/images/avatar/ea-2.png"
                          alt="object"
                        />
                      </div>
                      <div className="flex-grow-1 ml20">
                        <h6 className="title mb-0">Mujtaba Khalid</h6>
                        <p className="fz14 mb-0">
                          Head of Islamic Finance Center
                        </p>
                      </div>
                    </div>
                    <div className="thumb d-flex align-items-center mb20">
                      <div className="flex-shrink-0">
                        <Image
                          height={55}
                          width={55}
                          className="wa"
                          src="/images/avatar/ea-3.webp"
                          alt="object"
                        />
                      </div>
                      <div className="flex-grow-1 ml20">
                        <h6 className="title mb-0">Aamir Husain Khar</h6>
                        <p className="fz14 mb-0">
                          Director Financial Instituions Development (ICD)
                        </p>
                      </div>
                    </div>
                    <div className="thumb d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <Image
                          height={55}
                          width={55}
                          className="wa"
                          src="/images/avatar/ea-4.webp"
                          alt="object"
                        />
                      </div>
                      <div className="flex-grow-1 ml20">
                        <h6 className="title mb-0">Bakhodir Kadirov</h6>
                        <p className="fz14 mb-0">Director General</p>
                      </div>
                    </div>
                  </div>
                  <div className="freelancer-style1 about-page-style text-center d-none d-lg-block">
                    <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                      <Image
                        height={90}
                        width={90}
                        className="rounded-circle mx-auto"
                        src="/images/avatar/fl-2.webp"
                        alt="object"
                      />
                      <span className="online" />
                    </div>
                    <div className="details">
                      <h5 className="title mb-1">Ruslena Ramli</h5>
                      <p className="mb-0">
                        Director, Fintech and Islamic Digital Economy, MDEC
                      </p>
                      <div className="skill-tags d-flex align-items-center justify-content-center mb20">
                        <span className="tag">Finance</span>
                        <span className="tag mx10">Experts</span>
                        <span className="tag">Speaker</span>
                      </div>
                    </div>
                  </div>
                  <Image
                    height={561}
                    width={633}
                    className="d-block d-lg-none w-100 h-100 object-fit-contain"
                    src="/images/about/verified-freelancer.png"
                    alt="object"
                  />
                  <div className="imgbox-about-page position-relative d-none d-xl-block">
                    <Image
                      height={129}
                      width={129}
                      className="img-1 spin-right"
                      src="/images/about/element-1.png"
                      alt="object"
                    />
                    <Image
                      height={11}
                      width={41}
                      className="img-2 bounce-x"
                      src="/images/about/element-2.png"
                      alt="object"
                    />
                    <Image
                      height={34}
                      width={8}
                      className="img-3 bounce-y"
                      src="/images/about/element-3.png"
                      alt="object"
                    />
                    <Image
                      height={49}
                      width={57}
                      className="img-4 bounce-y"
                      src="/images/about/element-4.png"
                      alt="object"
                    />
                    <Image
                      height={71}
                      width={71}
                      className="img-5 spin-right"
                      src="/images/about/element-5.png"
                      alt="object"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-5 offset-xl-1">
                <div
                  className="about-box-1 pe-4 mt100 mt0-lg mb30-lg wow fadeInLeft"
                  data-wow-delay="300ms"
                >
                  <h2 className="title mb10">ESGMarkets TV</h2>
                  <p className="text mb25 mb30-md">
                    A broadcasting platform for ESG markets that supports your
                    learning journey and where professionals and institutions
                    can engage with leading experts and scholars from around the
                    world.
                  </p>
                  <div className="list-style3 mb40 mb30-md">
                    <ul>
                      {advantages.map((item, index) => (
                        <li key={index}>
                          <i className="far fa-check text-white bgc-thm" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="https://esgmarkets.co/tv"
                    className="ud-btn btn-thm2"
                  >
                    Learn More
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
