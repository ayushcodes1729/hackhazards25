import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-teal-800 text-white py-1">
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left md:flex-1">
            <h2 className="text-2xl font-bold mb-4">Ready to Experience It?</h2>

            <div className="mb-3">
              <button className="bg-teal-300 text-teal-900 font-medium py-3 px-8 rounded-md w-64 md:w-auto">
                Try Now
              </button>
            </div>

            <p className="mb-8 text-sm">It's free. No login required.</p>
          </div>

          <div className="flex flex-row justify-around md:justify-end md:flex-1 gap-8 md:gap-16">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-lg mb-1 hidden md:block">
                Company
              </h3>
              <h3 className="font-medium text-lg mb-1 md:hidden">About</h3>
              <a href="#" className="text-sm hover:underline">
                About us
              </a>
              <a href="#" className="text-sm hover:underline md:hidden">
                How to use
              </a>
              <a href="#" className="text-sm hover:underline">
                Contact us
              </a>
              <a href="#" className="text-sm hover:underline md:hidden">
                Help
              </a>
              <a href="#" className="text-sm hover:underline md:hidden">
                FAQs
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-lg mb-1">Support</h3>
              <a href="#" className="text-sm hover:underline md:block hidden">
                Help
              </a>
              <a href="#" className="text-sm hover:underline md:block hidden">
                FAQs
              </a>
              <a href="#" className="text-sm hover:underline md:block hidden">
                Contact us
              </a>
            </div>

            <div className="flex-col gap-2 hidden md:flex">
              <h3 className="font-medium text-lg mb-1">Connect</h3>
              <a href="#" className="text-sm hover:underline">
                Instagram
              </a>
              <a href="#" className="text-sm hover:underline">
                Facebook
              </a>
              <a href="#" className="text-sm hover:underline">
                Twitter
              </a>
            </div>

            <div className="flex flex-col gap-2 md:hidden">
              <a href="#" className="text-sm hover:underline">
                Instagram
              </a>
              <a href="#" className="text-sm hover:underline">
                Twitter
              </a>
              <a href="#" className="text-sm hover:underline">
                Facebook
              </a>
              <a href="#" className="text-sm hover:underline">
                E-mail
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:block text-right text-xs mt-8">
          © 2023 YouSee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
