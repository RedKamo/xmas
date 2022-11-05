import wavehero from "@/assets/hero-wave.png";
import santa from "@/assets/santa_hero.png";
export const Hero = () => {
  return (
    <main className=" bg-red-custom ">
      <section className="max-w-[1180px] mx-auto flex flex-col gap-4 items-center justify-between lg:flex-row">
        <section className=" flex flex-col text-center items-center w-full md:text-left">
          <h1 className="text-4xl	md:text-8xl md:text-left font-bold text-slate-900">
            Feel the magic of <span className="text-white">CHRISTMAS</span>
          </h1>
          <p className="text-xl w-[244px] md:text-3xl md:w-full pt-6">
            Hope this season finds you all wrapped Up in Happy!
          </p>
        </section>
        <img src={santa} alt="" className=" lg:h-full" />
      </section>
      <img src={wavehero} alt="" className="w-full" />
    </main>
  );
};
