import { useState, useEffect } from "react";
import { useBlog } from "../context/BlogContext";
import { Link } from "react-router-dom";

export const Blogs = () => {
    const { user } = useBlog();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/posts", {
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log('Fetched posts:', data);
            setPosts(Array.isArray(data) ? data : []);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching posts:", error);
            setError(error.message);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to delete post');
            }

            // Refresh posts after deletion
            fetchPosts();
        } catch (error) {
            console.error('Error deleting post:', error);
            alert('Failed to delete post');
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    if (loading) return <div className="text-center p-4">Loading...</div>;
    if (error) return <div className="text-center text-red-500 p-4">{error}</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Blogs</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                    <div key={post._id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        {post.image && (
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4 rounded" />
                        )}
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-sm text-gray-500 mb-2">Par {post.author}</p>
                        <p className="text-gray-600 mb-4">{post.content}</p>
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => handleDelete(post._id)}
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
