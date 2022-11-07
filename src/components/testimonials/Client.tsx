interface ClientProps {
  id?: number;
  name: string;
  opinion: string;
}

export const Client = ({ name, opinion }: ClientProps) => {
  return (
    <main className="border-2 border-slate-500 bg-black-custom p-4	 h-40 ">
      <h1>{name}</h1>
      <p>{opinion}</p>
    </main>
  );
};
