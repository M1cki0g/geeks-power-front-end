import React, { useRef, useEffect } from "react";

function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    let rafId;
    function step() {
      scrollAmount += scrollStep;
      if (scrollAmount >= maxScrollLeft) scrollAmount = 0;
      container.scrollLeft = scrollAmount;
      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
<div
  className="text-white h-screen flex items-center bg-cover bg-center relative animate-fadeSlideUp"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
  }}
>
  <div className="absolute inset-0 bg-opacity-60"></div> {/* dark overlay */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="  text-blue-900 typing-text text-5xl md:text-7xl font-extrabold font-sans mb-6 whitespace-nowrap overflow-hidden border-r-4 border-white pr-1">
        TechPulse: The Ultimate Guide
      </h1>
      <p className="text-blue-900 text-xl md:text-3xl mb-12">
        Discover the best phones, honest reviews, and expert tips — Everything
        you need to make smarter mobile choices.
      </p>
      <a
        href="#featured"
        className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition duration-300 inline-block"
      >
        Explore Articles
      </a>
    </div>
  </div>
</div>

        {/* About Section */}
        <div  className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center py-20 px-4">
          <h2 className="text-5xl font-extrabold text-blue-900 mb-12 text-center animate-fadeInDown">
            About Us
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-6xl">
            <div className="w-full md:w-1/2 space-y-8 animate-fadeInUp delay-200">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Welcome to your ultimate phone guide — a dedicated platform where
                tech enthusiasts and savvy buyers discover detailed information
                about the latest smartphones. We help you make smart purchasing
                decisions by providing accurate pricing, quality comparisons, and
                expert insights tailored to your needs. Whether you’re searching
                for the best value or top-tier performance, our website empowers
                you to explore phones confidently and stay ahead in the fast-paced
                mobile world.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-900  px-12 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-500 transform hover:-translate-y-1 shadow-lg"
              >
                Get Started
              </a>
            </div>

            <div className="w-full md:w-1/2 flex justify-center animate-fadeInUp delay-300">
              <img
                src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="About"
                className="rounded-xl shadow-xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        <div id="featured" className="min-h-screen flex items-center py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-blue-900 text-center">
              Featured Posts
            </h2>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto space-x-6 scrollbar-hide px-2"
              style={{ scrollBehavior: "auto" }}
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="relative group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 w-[300px] h-[250px] shrink-0"
                >
                  <img
                    src="https://th.bing.com/th/id/R.3622d8be63699b6dca6c6ea40db6d64c?rik=8Iv064FlzFWd3Q&pid=ImgRaw&r=0"
                    alt="Tech"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-white p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Modern CSS Techniques
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Explore advanced CSS features and learn how to create stunning
                      layouts.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">By Jane Smith</span>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 1s ease forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeSlideUp {
          animation: fadeSlideUp 1.2s ease-out forwards;
        }
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes blinkCaret {
          0%, 100% {
            border-color: transparent;
          }
          50% {
            border-color: white;
          }
        }
        .typing-text {
          width: 0;
          animation:
            typing 3s steps(25, end) forwards,
            blinkCaret 0.75s step-end infinite;
          white-space: nowrap;
          overflow: hidden;
          border-right: 4px solid white;
          box-sizing: content-box;
        }
      `}</style>
    </>
  );
}

export default Home;