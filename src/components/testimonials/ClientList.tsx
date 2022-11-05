import data from "@/data/data.json";
import { Client } from "./Client";
console.log("from clientlist", data);

const ClientList = () => {
  return (
    <main className="flex whitespace-no-wrap overflow-x-hidden border-2 border-yellow-300">
      {data.map((client) => (
        <section
          key={client.id}
          className="py-12 animate-marquee whitespace-nowrap "
        >
          <Client {...client} />
        </section>
      ))}
    </main>
  );
};

export default ClientList;
