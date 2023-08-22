import React from "react";
import CountUp from "react-countup";
export default function Hero() {
  return (
    <>
      <section class="text-gray-600 body-font bg-black  bg-gradient-to-r from-black to-gray-900">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              <b>DISCOVER<br/> MOST SUITABLE <br/>PROPERTY</b>
            </h1>
            <p class="mb-8 leading-relaxed text-gray-100">
                Find variety of properties that suit you very easily.<br/>
                Forget all difficulties in finding a residence for you.
            </p>
            <div class="flex w-full md:justify-start justify-center items-end">
              <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200  focus:border-indigo-800 text-base focus:text-white outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button class="inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg">
                <b>Search</b>
              </button>
            </div>

          <div className = 'pt-20 grid grid-cols-3 gap-4 text-xl'>
            <div className="text-white  ">
          <span>
            <CountUp start={8800} end={9000} duration={4}/>
            <span className="text-yellow-600">+</span>
            <span>
              <b>
                Premium Products
              </b>
            </span>
          </span>
        </div>
<br/>
        <div className="text-white">
          <span>
            <CountUp start={1950} end={2000} duration={4}/>
            <span className="text-yellow-600">+</span>
            <span>
              <b>
                Happy Customers
              </b>
            </span>
          </span>
        </div> 

        <div className="text-white">
          <span>
            <CountUp  end={37} />
            <span className="text-yellow-600">+</span>
            <span>
              <b>
                Award Winnings
              </b>
            </span>
          </span>
        </div>
        </div>
          </div>
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
            <img

              class="object-cover object-center rounded-3xl "
              alt="hero"
              src="./Img/hero-image.png"
            />
          </div>
        </div>

      </section>
    </>
  );
}
