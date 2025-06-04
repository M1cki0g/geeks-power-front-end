import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">Geeks Blog</Link>
                <ul className="flex space-x-6">

                    <li><Link to="/" className={`hover:text-gray-300 ${location.pathname === '/' ? 'text-blue-400' : ''}`}>Home</Link></li>
                    <li><Link to="/blogs" className={`hover:text-gray-300 ${location.pathname === '/blogs' ? 'text-blue-400' : ''}`}>Blogs</Link></li>
                    <li><Link to="/ajouter-blog" className={`hover:text-gray-300 ${location.pathname === '/ajouter-blog' ? 'text-blue-400' : ''}`}>Ajouter Blog</Link></li>
                    <li><Link to="/login" className={`hover:text-gray-300 ${location.pathname === '/login' ? 'text-blue-400' : ''}`}>Login</Link></li>

                </ul>
            </div>
        </nav>
    );
}