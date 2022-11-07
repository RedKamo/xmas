import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/services";
import Timer from "@/components/Timer/Timer";
const Layout = () => {
  return (
    <main className=" font-alegreya">
      <Hero />
      <Timer />
      <Services />
    </main>
  );
};

export default Layout;
