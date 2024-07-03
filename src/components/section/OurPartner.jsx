"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

const partners = [
  "/images/partners/maybank.png",
  "/images/partners/bibd.png",
  "/images/partners/ddcap.png",
  "/images/partners/hsbc.png",
];

export default function OurPartner() {
  const path = usePathname();

  return (
    <>
      <section className="our-partners pt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 wow fadeInUp">
              <div className="main-title text-center">
                <h3>Trusted by industry leaders</h3>
              </div>
            </div>
          </div>
          <div className="row align-item-center justify-content-center">
            {partners.map((item, index) => (
              <div key={index} className="col-6 col-md-4 col-xl-2">
                <div className="partner_item text-center mb30-lg">
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
        </div>
      </section>
    </>
  );
}
