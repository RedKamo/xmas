import data from "@/data/data.json";
import { Client } from "./Client";

console.log("from clientlist", data);

const ClientList = () => {
  return (
    <main className="  bg-red-custom min-h-screen">
      <section className="flex overflow-x-hidden gap-5">
        {data.map((client) => (
          <section
            key={client.id}
            className="py-12 animate-marquee whitespace-nowrap "
          >
            <Client {...client} />
          </section>
        ))}
      </section>
    </main>
  );
};

export default ClientList;
