import { useEffect, useState } from "react";
import wavetimer from "@/assets/count-wave.png";
import santatimer from "@/assets/timer-img.png";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [itsChristmas, setItsChristmas] = useState(false);

  useEffect(() => {
    const target = new Date("12/25/2022 23:59:59");

    const interval = setInterval(() => {
      const realTimeDate = new Date();
      const christmasDate = target.getTime() - realTimeDate.getTime();

      // calculate d(days)
      const d = Math.floor(christmasDate / (1000 * 60 * 60 * 24));
      setDays(d);

      //calculate h(hours)
      const h = Math.floor(
        (christmasDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      // calculate m(minutes)
      const m = Math.floor((christmasDate % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      // calculate s(seconds)
      const s = Math.floor((christmasDate % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setItsChristmas(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black-custom flex flex-col items-center ">
      <h1 className="pt-12 text-2xl md:text-4xl text-slate-200 	">
        How long until christmas?
      </h1>
      <>
        {itsChristmas ? (
          <h1>!Merry Christmas</h1>
        ) : (
          <section className=" flex flex-col md:flex-row gap-4 py-20 text-slate-100">
            <article className="bg-red-custom p-4 w-24 text-center rounded-xl">
              <p className="text-slate-200 font-bold text-center text-3xl">
                {days}
              </p>
              <p>Days</p>
            </article>
            <article className="bg-red-custom p-4 w-24 text-center rounded-xl">
              <p className="text-slate-200 font-bold text-center text-3xl ">
                {hours}
              </p>
              <p>Hours</p>
            </article>
            <article className="bg-red-custom p-4 w-24 text-center rounded-xl">
              <p className="text-slate-200 font-bold text-center text-3xl">
                {minutes}
              </p>
              <p>Minutes</p>
            </article>
            <article className="bg-red-custom p-4 w-24 text-center rounded-xl">
              <p className="text-slate-200 font-bold text-center text-3xl">
                {seconds}
              </p>
              <p>Seconds</p>
            </article>
          </section>
        )}
      </>
      <img src={santatimer} alt="" className="pt-10 z-40 " />
      <img src={wavetimer} alt="" className="w-full -mt-12" />
    </main>
  );
};

export default Timer;
