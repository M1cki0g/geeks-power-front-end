export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    © 2025 Geeks Blog. All rights reserved.
                </p>
                <p className="text-xs mt-2">
                    Follow us on
                    <a href="#" className="text-blue-400 hover:underline ml-1">Twitter</a>,
                    <a href="#" className="text-blue-400 hover:underline ml-1">Facebook</a>,
                    <a href="#" className="text-blue-400 hover:underline ml-1">Instagram</a>
                </p>
            </div>
        </footer>
    );
}