import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyRenora from "@/components/home/WhyRenora";
import PackagePreview from "@/components/home/PackagePreview";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />
      <WhyRenora />
      <PackagePreview />
      <CTABanner />
    </>
  );
}
