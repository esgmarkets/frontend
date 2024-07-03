"use client";
import priceStore from "@/store/priceStore";
import { usePathname } from "next/navigation";
import ESGPricingTable from "../card/ESGPricingTable";

const pricing = [
  {
    id: 1,
    monthlyPrice: "Free",
    yearlyPrice: "Free",
    plan: "Basic Plan",
    description: "For individuals to start exploring the global ESG markets.",
    contactUs: false,
    isActive: false,
    btnText: "Get Started",
  },
  {
    id: 2,
    monthlyPrice: "$1",
    yearlyPrice: "$190",
    plan: "Pro Plan",
    description: "For professionals who are working in the global ESG markets.",
    contactUs: false,
    isActive: true,
    btnText: "Get PRO",
  },
  {
    id: 3,
    monthlyPrice: "",
    yearlyPrice: "",
    plan: "Enterprise Plan",
    description:
      "For organisations looking to navigate the global ESG markets.",
    contactUs: true,
    isActive: false,
    btnText: "Contact Us",
  },
];

export default function ESGPricing() {
  const togglePlan = priceStore((state) => state.togglePlan);

  const path = usePathname();

  // monthly & yearly price handler
  const checkboxHandler = (e) => {
    if (e.target.checked) {
      togglePlan("1y");
    } else {
      togglePlan("1m");
    }
  };

  return (
    <>
      <section className="our-pricing">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto wow fadeInUp">
              <div className="main-title text-center mb30">
                <h2 className="title">Pricing</h2>
                <p className="paragraph mt10">
                  We provide tools that help professionals and institutions
                  steer the global ESG markets, unlocking commercial
                  opportunities.
                </p>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="200ms">
            <div className="col-lg-12">
              <div className="pricing_packages_top d-flex align-items-center justify-content-center mb60">
                <div className="toggle-btn">
                  <span className="pricing_save1 dark-color ff-heading">
                    Billed Monthly
                  </span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      id="checbox"
                      onChange={checkboxHandler}
                    />
                    <span className="pricing_table_switch_slide round" />
                  </label>
                  <span className="pricing_save2 dark-color ff-heading">
                    Billed Yearly
                  </span>
                  {/* <span className="pricing_save3">Save 20%</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            {pricing.map((item, i) => (
              <div key={i} className="col-sm-12 col-lg-4">
                <ESGPricingTable data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
