import AwesomeLogo from "@/assets/logo.png";
const Navbar = () => {
  return (
    <main className="  bg-red-custom pb-10">
      <section className="max-w-[1180px] mx-auto flex justify-between items-center py-10">
        <img src={AwesomeLogo} className="w-14" alt="" />
        <ul className="flex border-2 border-blue-300 gap-14 py-4 ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <a href="#Clients">Clients</a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Navbar;
