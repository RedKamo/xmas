import { motion } from "framer-motion";
import ClientList from "./components/testimonials/ClientList";
import data from "./data/data.json";

console.log(data);

export const FramerExample = () => {
  return (
    <main className="w-full">
      <section className="flex border-2 border-red-400 w-full justify-around items-center py-20">
        <motion.div
          className="border-2 border-emerald-500 w-28 h-28 bg-emerald-700"
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className=" border-blue-500 w-28 h-28 bg-blue-900 "
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          whileHover={{
            transition: {
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: 1,
              repeatDelay: 1,
            },
          }}
        />
        <motion.button
          className="bg-red-500 p-2 rounded-md text-2xl font-bold"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Tap me!
        </motion.button>
      </section>
      {/*   <section className="flex whitespace-no-wrap overflow-x-hidden">
        {data.map((client) => (
          <article key={client.id} className="relative">
            <section className="py-12 animate-marquee whitespace-nowrap ">
              <li>{client.name}</li>
            </section>
          </article>
        ))}
      </section> */}
      <ClientList />
    </main>
  );
};
