import Image from "next/image";

export default function ESGAccessBanner() {
  return (
    <>
      <section
        id="esg-access"
        className="mt-4 cta-banner-left mx-auto position-relative pt60-lg pb60-lg"
      >
        <div className="container">
          <div
            className="row align-items-center wow fadeInDown"
            data-wow-delay="400ms"
          >
            <div className="col-lg-7 col-xl-5 px30-xs cta-banner-content-left">
              <div className="mb30">
                <div className="banner-title">
                  <h2 className="title">ESG Access</h2>
                  <h4 className="paragraph pb-3">
                    On-Demand Access to a Comprehensive ESG Learning Library
                  </h4>
                </div>
              </div>
              <div className="why-chose-list">
                <div className="list-one d-flex align-items-start mb30">
                  <span className="list-icon flex-shrink-0 flaticon-badge" />
                  <div className="list-content flex-grow-1 ml20">
                    <h4 className="mb-1">Extensive Module Library</h4>
                    <p className="text mb-0 fz15">
                      Explore over 300+ expertly crafted modules spanning{" "}
                      <br className="d-none d-lg-block" /> diverse
                      sustainability topics.
                    </p>
                  </div>
                </div>
                <div className="list-one d-flex align-items-start mb30">
                  <span className="list-icon flex-shrink-0 flaticon-money" />
                  <div className="list-content flex-grow-1 ml20">
                    <h4 className="mb-1">Interactive Learning Experience</h4>
                    <p className="text mb-0 fz15">
                      Engage with innovative and user-friendly educational tools
                      <br className="d-none d-lg-block" /> for an immersive
                      learning journey.
                    </p>
                  </div>
                </div>
                <div className="list-one d-flex align-items-start mb30">
                  <span className="list-icon flex-shrink-0 flaticon-security" />
                  <div className="list-content flex-grow-1 ml20">
                    <h4 className="mb-1">Continuous Knowledge Expansion</h4>
                    <p className="text mb-0 fz15">
                      Regularly updated content ensures your team stays ahead in
                      the evolving sustainability landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-5 col-xl-4 offset-xl-1">
              <div className="listbox-style1 px30 py-5 bdrs16 bgc-thm2 position-relative">
                <div className="list-style1">
                  <ul className="mb-0">
                    <li className="text-white fw500">
                      <i className="far fa-check dark-color bgc-white" />
                      On-Demand Access
                    </li>
                    <li className="text-white fw500">
                      <i className="far fa-check dark-color bgc-white" />
                      Comprehensive Learning Library
                    </li>
                    <li className="text-white fw500">
                      <i className="far fa-check dark-color bgc-white" />
                      Regularly Updated Content
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <Image
          height={707}
          width={450}
          className="cta-banner-image-left h-auto object-fit-contain bdrs24"
          src="/images/home/about-12.webp"
          alt="about"
        />
      </section>
    </>
  );
}
