import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import FooterSection from "@/components/FooterSection";

export default function Index() {
  return (
    <div
      className="min-h-screen font-golos"
      style={{ backgroundColor: "#0A0A0F", color: "#fff" }}
    >
      <Navbar />
      <HeroSection />
      <CatalogSection />
      <FooterSection />
    </div>
  );
}
