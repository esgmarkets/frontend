"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const role = [
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Programming & Tech",
];
export default function Hero() {
  const router = useRouter();

  // search handler
  const searchHandler = () => {
    router.push("/project-1");
  };
  return (
    <section className="hero-home p-0 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="home-hero-content">
              <h1 className="animate-up-1 mb25">
                Empowering Professionals with{" "}
                <br className="d-none d-xl-block" />
                ESG and Sustainability Knowledge.
              </h1>
              <p className="text animate-up-2">
                ESGMarkets is a leading ESG and sustainability education
                platform,
                <br className="d-none d-lg-block" /> advancing professionals and
                businesses with tailored learning.
              </p>
            </div>
          </div>
          <div className="col-xl-5 d-none d-xl-block">
            <div className="home-hero-img">
              <Image
                width={810}
                height={860}
                style={{ height: "fit-content" }}
                className="img-0 animate-up-1"
                src="/images/home/esg_laptop_800.png"
                alt=" image "
              />
              {/* <div className="position-relative">
                <Image
                  width={196}
                  height={129}
                  className="img-1 bounce-x"
                  src="/images/team/home12-img-1.png"
                  alt=" image "
                />
                <Image
                  width={114}
                  height={114}
                  className="img-2 bounce-y"
                  src="/images/team/home12-img-2.png"
                  alt=" image "
                />
                <Image
                  width={90}
                  height={90}
                  style={{ height: "fit-content" }}
                  className="img-3 bounce-y"
                  src="/images/team/home12-img-3.png"
                  alt=" image "
                />
              </div> */}
              <div className="iconbox-small1 text-start d-flex wow fadeInRight default-box-shadow4 bounce-x animate-up-1">
                <span className="icon flaticon-review"></span>
                <div className="align-self-center details pl20">
                  <p className="text fz13 mb-0">Diverse Learning Portfolio</p>
                </div>
              </div>
              <div className="iconbox-small2 text-start d-flex wow fadeInLeft default-box-shadow4 bounce-y animate-up-2">
                <span className="icon flaticon-rocket"></span>
                <div className="align-self-center details pl20">
                  <p className="text fz13 mb-0">On Demand Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
