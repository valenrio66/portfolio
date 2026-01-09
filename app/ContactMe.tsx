import React from "react";

export default function ContactMe() {
  return (
    <div className="w-full bg-black py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-amber-500 font-bold tracking-wider uppercase mb-2">
              Contact Me
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Have a project in mind or just want to say hello? I'm always open
              to discussing new projects, creative ideas, or opportunities to be
              part of your vision.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-amber-500 text-xl">
                  📧
                </div>
                <div>
                  <h4 className="font-bold text-gray-200">Email</h4>
                  <p className="text-gray-400">vrionald@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-amber-500 text-xl">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-gray-200">Location</h4>
                  <p className="text-gray-400">Bekasi City, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-800">
            <form action="#" className="flex flex-col space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="firstname"
                    className="text-sm font-semibold text-gray-300"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="John"
                    className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-3 outline-none transition-all placeholder-gray-500"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="lastname"
                    className="text-sm font-semibold text-gray-300"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Doe"
                    className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-3 outline-none transition-all placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-3 outline-none transition-all placeholder-gray-500"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-gray-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Hi, I'd like to talk about..."
                  className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-3 outline-none transition-all placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 px-4 rounded-lg transition-colors shadow-lg hover:shadow-amber-500/20 mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
