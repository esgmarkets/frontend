import Image from "next/image";
import Link from "next/link";

export default function Solutions() {
  return (
    <section className="pb120 pb60-sm">
      <div className="container">
        <div className="row align-items-center wow fadeInUp mb100 mb0-md">
          <div className="col-md-6 col-xl-6">
            <div className="text-center mb30-sm">
              <Image
                width={686}
                height={600}
                style={{ height: "fit-content" }}
                className="w-100 bdrs12"
                src="/images/about/about-14.jpg"
                alt=" image "
              />
            </div>
          </div>
          <div className="col-md-6 col-xl-4 offset-xl-1">
            <div className="main-title">
              <h2 className="title">
                ESG Access
              </h2>
              <p className="paragraph">
                On-Demand Access to a Comprehensive ESG Learning Library.
              </p>
            </div>
            <Link href="/" className="ud-btn btn-white2 bdrs60">
              Get Started <i className="fal fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
        <div className="row align-items-center wow fadeInUp mt20">
          <div className="col-md-6 col-xl-4">
            <div className="main-title">
              <h2 className="title">
                ESG Studio
              </h2>
              <p className="paragraph">
                Tailored Learning Based on Your Business Needs
              </p>
            </div>
            <Link href="/" className="ud-btn btn-white2 bdrs60">
              Get Started <i className="fal fa-arrow-right-long"></i>
            </Link>
          </div>
          <div className="col-md-6 col-xl-6 offset-xl-1">
            <div className="text-center mt30-sm">
              <Image
                width={686}
                height={600}
                style={{ height: "fit-content" }}
                className="w-100 bdrs12"
                src="/images/about/about-15.jpg"
                alt=" image "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
