export const Home = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-gray-50">
                {/* Hero Section - Using screen height utilities */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white h-screen flex items-center">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6">
                                Welcome to Geeks Blog
                            </h1>
                            <p className="text-xl md:text-3xl mb-12">
                                Your Source for Tech Knowledge
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

                <div id="featured" className="min-h-screen flex items-center py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-16 text-gray-800 text-center">Featured Posts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col">
                                <img
                                    src="https://source.unsplash.com/random/800x400?coding"
                                    alt="Coding"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                                        Getting Started with Web Development
                                    </h3>
                                    <p className="text-gray-600 mb-6 flex-grow">
                                        Learn the fundamentals of HTML, CSS, and JavaScript to kickstart your web development journey.
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-sm text-gray-500">By John Doe</span>
                                        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                                            Read More →
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col">
                                <img
                                    src="https://source.unsplash.com/random/800x400?laptop"
                                    alt="Tech"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                                        Modern CSS Techniques
                                    </h3>
                                    <p className="text-gray-600 mb-6 flex-grow">
                                        Explore advanced CSS features and learn how to create stunning layouts.
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-sm text-gray-500">By Jane Smith</span>
                                        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                                            Read More →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="min-h-screen bg-gray-100 flex items-center">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl font-bold mb-8 text-gray-800">
                                About us
                            </h2>
                            <p className="text-xl text-gray-600 mb-12">
                                Join our community and enhance your programming skills
                            </p>
                            <a
                                href="#"
                                className="bg-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>

                <footer className="bg-gray-800 text-gray-300 py-12">
                    <div className="container mx-auto px-4">
                        <div className="text-center">
                            <p className="text-lg">© 2025 Geeks Blog. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    );
};

export default Home;