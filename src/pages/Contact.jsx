function Contact() {
  return (
    <div id="contact" className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center py-4">Contact Me</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-6/12 lg:w-4/12 px-4">
          <div className=" flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
            <div className="flex-auto p-5 lg:p-10">
              <h4 className="text-2xl font-semibold">
                Want to connect with me?
              </h4>
              <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                Complete this form and I will get back to you in 24 hours.
              </p>
              <div className=" w-full mb-3 mt-8">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="full-name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="name"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Full Name"
                  style={{ transition: "all 0.15s ease 0s" }}
                />
              </div>
              <div className=" w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Email"
                  style={{ transition: "all 0.15s ease 0s" }}
                />
              </div>
              <div className=" w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Type a message..."
                  style={{ transition: "all 0.15s ease 0s" }}
                  defaultValue={""}
                />
              </div>
              <div className="text-center mt-6">
                <button
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 "
                  type="button"
                  style={{ transition: "all 0.15s ease 0s" }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
