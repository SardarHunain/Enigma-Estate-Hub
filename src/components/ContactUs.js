import React from "react";

export default function ContactUs() {
  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-gray-300">
          
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105627.89724099397!2d73.15336515556274!3d34.17519552542081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3111557ac517%3A0x6e59a635b12e952c!2sAbbottabad%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1692697881630!5m2!1sen!2s" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Enter your details here
            </p>
            <div class="relative mb-4">
            <label for="text" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="text"
                name="email"
                required
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              
              <label for="tel" class="leading-7 text-sm text-gray-600">
                PhoneNumber
              </label>
              <input
                required
                type="tel"
                id="tel"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
            <p class="text-xs text-gray-500 mt-3">
                <b>For more details call us at 03111111111</b>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
