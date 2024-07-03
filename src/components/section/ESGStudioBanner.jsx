import Image from "next/image";

export default function ESGStudioBanner() {
  return (
    <>
      <section
        id="esg-studio"
        className="mt-4 cta-banner-right mx-auto position-relative pt60-lg pb60-lg"
      >
        <div className="container">
          <div
            className="row align-items-center wow fadeInDown justify-content-end cta-banner-content-right"
            data-wow-delay="400ms"
          >
            <div className="col-lg-7 col-xl-5 px30-xs">
              <div className="mb30">
                <div className="banner-title">
                  <h2 className="title">ESG Studio</h2>
                  <h4 className="paragraph pb-3">
                    Tailored Learning Based on Your Business Needs
                  </h4>
                </div>
              </div>
              <div className="why-chose-list">
                <div className="list-one d-flex align-items-start mb30">
                  <span className="list-icon flex-shrink-0 flaticon-badge" />
                  <div className="list-content flex-grow-1 ml20">
                    <h4 className="mb-1">Tailored Content Creation</h4>
                    <p className="text mb-0 fz15">
                      Craft a bespoke library tailored to your organisation’s
                      specific <br className="d-none d-lg-block" />{" "}
                      sustainability goals and requirements.
                    </p>
                  </div>
                </div>
                <div className="list-one d-flex align-items-start mb30">
                  <span className="list-icon flex-shrink-0 flaticon-money" />
                  <div className="list-content flex-grow-1 ml20">
                    <h4 className="mb-1">Brand Integration</h4>
                    <p className="text mb-0 fz15">
                      Incorporate your organisation's branding for a cohesive
                      <br className="d-none d-lg-block" /> and personalised
                      training experience.
                    </p>
                  </div>
                </div>
                <div className="list-one d-flex align-items-start mb30">
                  <span className="list-icon flex-shrink-0 flaticon-security" />
                  <div className="list-content flex-grow-1 ml20">
                    <h4 className="mb-1">Advanced Insights & Analytics</h4>
                    <p className="text mb-0 fz15">
                      Utilise our comprehensive reporting tools for detailed
                      assessments and progress tracking of your team's learning
                      journey.
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
          className="cta-banner-image-right h-auto object-fit-contain bdrs24"
          src="/images/home/about-16.webp"
          alt="about"
        />
      </section>
    </>
  );
}
