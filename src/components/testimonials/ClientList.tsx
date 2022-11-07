import data from "@/data/data.json";
import { Client } from "./Client";
import waveclient from "@/assets/waveclient.png";
import santaclient from "@/assets/santa-clients.png";
console.log("from clientlist", data);

const ClientList = () => {
  return (
    <main className="  bg-red-custom" id="Clients">
      <h1 className=" py-10 md:py-32 text-center pt-12 text-2xl md:text-5xl text-slate-900 font-bold">
        Our Clients...
      </h1>
      <section className="flex  overflow-x-hidden gap-5">
        {data.map((client) => (
          <section
            key={client.id}
            className="py-12 animate-marquee whitespace-nowrap"
          >
            <Client {...client} />
          </section>
        ))}
      </section>

      <article className="flex items-center justify-center pt-14">
        <img src={santaclient} className="z-40 -mb-12 text-center" alt="" />
      </article>
      <img src={waveclient} className="w-full " alt="" />
    </main>
  );
};

export default ClientList;
