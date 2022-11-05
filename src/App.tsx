import "./App.css";
import { FramerExample } from "./FramerExample";

const App = () => {
  return (
    <main className=" bg-slate-800 min-h-screen p-4 border-2 border-slate-700 flex flex-col items-center ">
      <h1 className=" text-slate-500 text-4xl font-bold pb-10">hi</h1>
      <FramerExample />
    </main>
  );
};

export default App;
