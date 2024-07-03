"use client";
import priceStore from "@/store/priceStore";
import { usePathname } from "next/navigation";

export default function PriceTableCard1({ data }) {
  const price = priceStore((state) => state.plan);

  const path = usePathname();

  return (
    <>
      <div
        className={`pricing_packages text-center bdrs16 at-home2 ${
          data.isActive ? "active" : ""
        }`}
      >
        <div className="heading mb10">
          {price === "1m" && (
            <h1 className="text2">
              {data.monthlyPrice}{" "}
              {data.id == 2 ? (
                <>
                  <small>/ monthly</small>
                </>
              ) : (
                <></>
              )}
            </h1>
          )}

          {price === "1y" && (
            <h1 className="text1">
              {data.yearlyPrice}{" "}
              {data.id == 2 ? (
                <>
                  <small>/ yearly</small>
                </>
              ) : (
                <></>
              )}
            </h1>
          )}

          <h4 className="package_title mt-2">{data.plan}</h4>
        </div>
        <div className="details">
          <p className="text mb30">
            One time fee for one listing or task highlighted in search results.
          </p>
          <div className="pricing-list mb40">
            <ul className="px-0">
              <li>Education Articles</li>
              <li>Research and Publications​</li>
              <li>Full Access to Live and Past Webinars</li>
            </ul>
          </div>
          <div className="d-grid">
            <a className="ud-btn btn-light-thm">
              {data.btnText}
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
