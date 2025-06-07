import React, { useRef, useEffect, useState } from "react";

function Home() {
  const scrollRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Fetched posts:", data);
      setPosts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let rafId;
    let isHovered = false;
    const scrollStep = 0.5;

    const scroll = () => {
      if (!isHovered && container.scrollWidth > container.clientWidth) {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollStep;
        }
      }

      rafId = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = () => (isHovered = true);
    const handleMouseLeave = () => (isHovered = false);

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    rafId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [posts]);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Hero Section */}
        <div
          className="text-white h-screen flex items-center bg-cover bg-center relative animate-fadeSlideUp overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4453072/pexels-photo-4453072.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50 backdrop-blur-[2px]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-white typing-text text-5xl md:text-7xl font-extrabold font-sans mb-8 whitespace-nowrap overflow-hidden border-r-4 border-white pr-1 drop-shadow-lg">
                Stray Stories
              </h1>
              <p className="text-white text-xl md:text-3xl mb-12 leading-relaxed font-light max-w-3xl mx-auto">
                Helping you find your missing pet — tips, resources, and real stories to bring them home faster.
              </p>
              <a
                href="#featured"
                className="bg-white/90 backdrop-blur-sm text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
              >
                Explore Articles
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center py-20 px-4">
          <h2 className="text-5xl font-extrabold text-blue-900 mb-12 text-center animate-fadeInDown">
            About Us
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-6xl">
            <div className="w-full md:w-1/2 space-y-8 animate-fadeInUp delay-200">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Welcome to Stray Stories —  A platform where you can post about your lost pet, share your contact number, and tell the story of how your animal went missing. This helps others who may have seen your pet get in touch and assist in bringing them home.
                Our mission is to connect communities and make it easier to reunite families with their beloved animals.
                Every story shared brings hope — and every detail counts.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-900 px-12 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-500 transform hover:-translate-y-1 shadow-lg"
              >
                Get Started
              </a>
            </div>

            <div className="w-full md:w-1/2 flex justify-center animate-fadeInUp delay-300">
              <img
                src="https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg"
                alt="About"
                className="rounded-xl shadow-xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        <div id="featured" className="min-h-screen flex items-center py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-6xl font-extrabold mb-16 text-blue-900 text-center">
              Current Stories
            </h2>


            {loading ? (
              <p className="text-center text-gray-500">Loading posts...</p>
            ) : error ? (
              <p className="text-center text-red-500">Error: {error}</p>
            ) : (
              <div
                ref={scrollRef}
                className="flex overflow-x-auto space-x-6 scrollbar-hide px-2"
                style={{ scrollBehavior: "smooth" }}
              >
                {posts.map((post) => (
                  <div
                    key={post._id}
                    className="relative group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 w-[300px] h-[250px] shrink-0"
                  >
                    <img
                      src={post.image}
                      alt="Tech"
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-white p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">
                        {post?.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{post?.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="w-full min-h-screen bg-yellow-200  flex flex-col items-center justify-center py-20 px-4">
        <h2 className="text-5xl font-extrabold text-blue-900 mb-12 text-center animate-fadeInDown">
          Protecting Animals: A 7-Step Guide
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-6xl">
          <div className="w-full md:w-1/2 space-y-8 animate-fadeInUp delay-200">
            <ul className="font-bold">
              <li><strong>-Provide Safe Shelter</strong>Make sure pets have a secure, comfortable place to live, protecting them from harsh weather and predators.</li>
              <li><strong>-Feed Them Properly</strong>Give animals nutritious food and clean water daily to keep them healthy and strong.</li>
              <li><strong>-Spay & Neuter Pets</strong>Prevent overpopulation and reduce stray animals by having your pets spayed or neutered.</li>
              <li><strong>-Keep Animals Indoors or Supervised</strong>Limit outdoor roaming to protect pets from accidents, predators, and getting lost.</li>
              <li><strong>-Avoid Using Harmful Chemicals</strong>Use pet-safe cleaning and gardening products to prevent poisoning and environmental harm.</li>
              <li><strong>-Support Wildlife Habitats</strong>Preserve natural areas and plant native trees to provide shelter and food for wild animals.</li>
              <li><strong>-Report Animal Cruelty</strong>Speak up if you see neglect or abuse — contact local authorities or animal protection groups.</li>
            </ul>



          </div>

          <div className="w-full md:w-1/2 flex justify-center animate-fadeInUp delay-300">
            <img
              src="https://images.pexels.com/photos/3114143/pexels-photo-3114143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="About"
              className="rounded-xl shadow-xl w-full max-w-md object-cover"
            />
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
