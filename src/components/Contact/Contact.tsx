import contactsanta from "@/assets/santa-contact.png";

const Contact = () => {
  return (
    <main className="  bg-dark-black">
      <section className="max-w-[1180px] mx-auto flex flex-col items-center md:flex-row justify-center gap-5">
        <section className="w-full py-20 px-4 ">
          <form action="#" className="space-y-8 p-8 bg-black-custom rounded-xl">
            <h1 className="  text-center pt-8 text-2xl md:text-4xl text-slate-100 font-bold">
              Contact Us
            </h1>
            <div>
              <input
                type="email"
                id="email"
                className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your name "
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="youremail@santa.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <textarea
                id="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave your comments and feedback..."
              ></textarea>
            </div>
            <button
              type="submit"
              className=" bg-green-custom py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </section>
        <section className="w-full flex justify-center h-full  ">
          <img src={contactsanta} className="w-48" alt="" />
        </section>
      </section>
    </main>
  );
};

export default Contact;
