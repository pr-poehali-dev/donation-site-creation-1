import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Donations from "@/components/Donations";
import Rules from "@/components/Rules";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Donations />
      <Rules />
      <Footer />
    </div>
  );
};

export default Index;
