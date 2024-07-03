import Image from "next/image";

const partners = [
  "/images/partners/aaoifi.png",
  "/images/partners/cisi.png",
];

export default function BannerCertificate() {
  return (
    <section className="home-cta-certificate at-home bgc-thm7 bdrs24 maxw1700 mx-auto">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 col-lg-8 wow fadeInRight">
            <div className="cta-style3">
              <h2 className="cta-title">CPD Accreditation & Endorsement</h2>
              <p className="cta-text">
                Our courses are CPD-accredited, ensuring you receive recognised
                and <br className="d-none d-lg-block" /> respected credentials
                in sustainability education.
              </p>
              <div className="row justify-content-sm-center justify-content-md-start">
                {partners.map((item, index) => (
                  <div key={index} className="col-4 col-md-4 col-xl-2">
                    <div className="partner_item mt-2 mb30-lg">
                      <Image
                        height={26}
                        width={84}
                        className="wa m-auto w-100 h-100 object-fit-contain"
                        src={item}
                        alt={`Partner ${index}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* <Link
                href="/freelancer-1"
                className="ud-btn btn-dark default-box-shadow1 bdrs16 mr20"
              >
                I want to Hire <i className="fal fa-arrow-right-long"></i>
              </Link>
              <Link href="/job-1" className="ud-btn btn-transparent bdrs16">
                I Want to Work <i className="fal fa-arrow-right-long"></i>
              </Link> */}
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn">
            <Image
              width={533}
              height={550}
              style={{ height: "fit-content" }}
              className="home-cta-certificate-img at-home d-none d-md-block bdrs24"
              src="/images/home/esg_certificate_new.png"
              alt=" image "
            />
            <Image
              width={270}
              height={431}
              style={{ height: "fit-content" }}
              className="home-cta-certificate-img2 at-home d-none d-md-block"
              src="/images/about/element-14.png"
              alt=" image "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
