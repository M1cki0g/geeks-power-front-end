export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-10">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* About Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Aminals Blog</h3>
                    <p className="text-sm text-gray-400">
                        Insights and stories from tech enthusiasts. Stay inspired, stay curious.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-md font-semibold mb-2">Quick Links</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-blue-400">Home</a></li>
                        <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                        <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                        <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="text-md font-semibold mb-2">Follow Us</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-blue-400">TikTok</a></li>
                        <li><a href="#" className="hover:text-blue-400">Facebook</a></li>
                        <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
                        <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-md font-semibold mb-2">Newsletter</h4>
                    <p className="text-sm text-gray-400 mb-2">Get the latest posts and updates in your inbox.</p>
                    <form className="flex flex-col space-y-2 ">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-3 py-2 text-black rounded-md focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom note */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Animals Blog. All rights reserved.
            </div>
        </footer>
    );
};
