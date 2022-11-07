interface ClientProps {
  id?: number;
  name: string;
  opinion: string;
  img?: string;
}

export const Client = ({ name, opinion, img }: ClientProps) => {
  return (
    <main className="rounded-xl bg-black-custom p-4 relative h-full w-96	">
      <section className="flex items-center gap-5 ">
        <img src={img} className="w-16" />
        <h1 className="font-bold text-slate-100 text-xl	">{name}</h1>
      </section>
      <p className="whitespace-normal pt-5 text-justify text-slate-300">
        {opinion}
      </p>
    </main>
  );
};
