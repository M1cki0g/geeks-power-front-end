import { Navbar } from "../layout/navbar";
import { useBlog } from "../context/BlogContext";
import { Link } from "react-router-dom";

export const Blogs = () => {
    const { blogs, deleteBlog, user } = useBlog();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Blogs</h1>
                {/* <Link to="/ajouter-blog" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Ajouter Blog
                </Link> */}
            </div>
            {blogs.length === 0 ? (
                <p className="text-center text-gray-500">No blogs yet. Create your first blog!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map(blog => (
                        <div key={blog.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                            {blog.image && (
                                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover mb-4 rounded" />
                            )}
                            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                            <p className="text-sm text-gray-500 mb-2">Par {blog.author}</p>
                            <p className="text-gray-600 mb-4">{blog.content}</p>
                            <div className="flex justify-end space-x-2">
                                {(user?.id === blog.userId || !blog.userId) && (
                                    <button onClick={() => deleteBlog(blog.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                                        Delete
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
