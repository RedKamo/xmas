import fire from "@/assets/firework.png";
import serviceswave from "@/assets/services-wave.png";
import santaservices from "@/assets/santa-services.png";
import treeservices from "@/assets/tree-services.png";
import giftservices from "@/assets/gift-services.png";
import { motion } from "framer-motion";

const OurServices = () => {
  return (
    <main className="bg-red-custom">
      <img src={serviceswave} alt="" className="w-full" />
      <h1 className=" py-10 md:py-32 text-center pt-12 text-2xl md:text-4xl text-slate-900 font-bold">
        Our services
      </h1>
      <section className="font-bold text-slate-100 max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full h-full place-items-center">
        <motion.article
          className="flex items-center  gap-4 p-6 rounded-xl bg-green-custom h-40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.4 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <h2 className="text-4xl">Blast Lights</h2>
          <img src={fire} className="w-24 h-32" alt="" />
        </motion.article>
        <motion.article
          className="flex items-center  gap-4 p-6 rounded-xl bg-blue-custom  h-40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <h2 className="text-4xl">Tree Decor</h2>
          <img src={treeservices} className="w-24 h-32" alt="" />
        </motion.article>
        <motion.article
          className="flex items-center gap-4 p-6 rounded-xl bg-green-custom h-40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <h2 className="text-4xl">Blast Lights</h2>
          <img src={giftservices} className="w-24 " alt="" />
        </motion.article>
      </section>
      <article className="flex justify-center py-24">
        <img src={santaservices} className="w-36" alt="" />
      </article>
    </main>
  );
};

export default OurServices;
