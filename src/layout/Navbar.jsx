import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-xl font-bold">Geeks Blog</a>
                <ul className="flex space-x-6">
                    <li><a href="#" className="hover:text-gray-400">Home</a></li>
                    <li><a href="#" className="hover:text-gray-400">About</a></li>
                    <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                    <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
                </ul>
            </div>
        </nav>
    );
}