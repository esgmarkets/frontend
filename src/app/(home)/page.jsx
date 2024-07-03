
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import BannerCertificate from "@/components/section/BannerCertificate";
import CtaBanner from "@/components/section/CtaBanner";
import ESGAccessBanner from "@/components/section/ESGAccessBanner";
import ESGMarketsTV from "@/components/section/ESGMarketsTV";
import ESGStudioBanner from "@/components/section/ESGStudioBanner";
import OurCta from "@/components/section/OurCta";
import OurPartner from "@/components/section/OurPartner";

export const metadata = {
  title: "Empowering Professionals with ESG and Sustainability Knowledge - ESG Markets",
};

export default function page() {
  return (
    <>
      <Header />
      <Hero />
      <CtaBanner />
      <ESGAccessBanner />
      <ESGStudioBanner />
      <ESGMarketsTV />
      <OurPartner />
      <BannerCertificate />
      {/* <ESGPricing /> */}
      <OurCta />
    </>
  );
}
