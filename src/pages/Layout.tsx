import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero/Hero";
import Services from "@/components/OurServices/OurServices";
import ClientList from "@/components/testimonials/ClientList";
import Timer from "@/components/Timer/Timer";
const Layout = () => {
  return (
    <main className=" font-alegreya ">
      <Hero />
      <Timer />
      <Services />
      <ClientList />
      <Contact />
      <Footer />
    </main>
  );
};

export default Layout;
