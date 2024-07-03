import Image from "next/image";

export default function OurCta12() {
  return (
    <section className="cta-home at-home pt90 pt60-md pb90 pb60-md">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-xl-5">
            <div className="cta-style5 wow fadeInRight">
              <h1 className="cta-title mb15">Get Started</h1>
              <h4 className="cta-text mb60">
                Discover how ESGMarkets caters to your organization's unique learning needs with our dual solution approach.
              </h4>
            </div>
          </div>
          <div className="col-lg-5 col-xl-6 offset-xl-1 position-relative wow zoomIn d-none d-lg-block">
            <div className="cta-img-home at-home">
              <Image
                width={486}
                height={452}
                className="w-100"
                src="/images/home/esg_ipad.png"
                alt=" image "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
