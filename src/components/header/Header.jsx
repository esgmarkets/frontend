"use client";

import Navigation from "./Navigation";

import useStickyMenu from "@/hook/useStickyMenu";
import Image from "next/image";
import Link from "next/link";
import MobileNavigation6 from "./MobileNavigation6";

export default function Header() {
  const sticky = useStickyMenu(70);
  return (
    <>
      <section
        id="topalert"
        className="header-top-home pt10 stricky pb10 animated"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="text-center dark-color mb-0 fw500">
                Get unlimited access with PRO for only $1 for the first month
              </p>
              <div
                onClick={() =>
                  (document.getElementById("topalert").style.display = "none")
                }
                style={{ cursor: "pointer" }}
              >
                <span className="ht-close-icon fa-sharp fa-regular fa-xmark"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <header
        className={`header-nav nav-homepage-style at-home3 stricky main-menu border-0 ${
          sticky ? "slideInDown stricky-fixed" : "slideIn"
        }`}
      >
        <nav className="posr">
          <div className="container posr">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto px-0 px-xl-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos">
                    <Link className="header-logo logo1" href="/">
                      <Image
                        width={133}
                        height={40}
                        src="/images/header-logo-dark.svg"
                        alt="/Header Logo"
                        className="pt-1"
                      />
                    </Link>
                    <Link className="header-logo logo2" href="/">
                      <Image
                        width={133}
                        height={40}
                        src="/images/header-logo-dark.svg"
                        alt="Header Logo"
                        className="pt-1"
                      />
                    </Link>
                  </div>
                  <Navigation id="respMenu" />
                </div>
              </div>
              <div className="col-auto pe-0 pe-xl-3">
                <div className="d-flex align-items-center">
                  <Link
                    className="login-info mr15-xl mr10 ud-btn btn-dark add-joining bdrs50 dark-color bg-transparent"
                    href="https://account.esgmarkets.co/login?clientId=149a2f9ae29622519fe026475cc214769670c36879c97ebd&clientName=learning&scope=openid&responseType=code&redirectUri=https%3A%2F%2Fesgmarkets.co%2Flogin%2Fcallback&state=WmU2UDWB1fPAWNveczdeKkcWLeSYAluJVMQemy0u&nonce=b0a7094a1cdb6ae50dcf3a88120e0ea4d5ba9d8891f049de5f077215be13ef14"
                  >
                    Sign in
                  </Link>
                  <Link
                    className="ud-btn btn-dark add-joining bdrs50 text-white"
                    href="https://account.esgmarkets.co/register?clientId=149a2f9ae29622519fe026475cc214769670c36879c97ebd&clientName=learning&scope=openid&responseType=code&redirectUri=https%3A%2F%2Fesgmarkets.co%2Flogin%2Fcallback&state=WmU2UDWB1fPAWNveczdeKkcWLeSYAluJVMQemy0u&nonce=b0a7094a1cdb6ae50dcf3a88120e0ea4d5ba9d8891f049de5f077215be13ef14"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <MobileNavigation6 />
    </>
  );
}
