import { createContext, useContext, useState, useEffect } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [user, setUser] = useState({ id: '1', name: 'Anonymous' }); // Set default user

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        setBlogs(storedBlogs);
    }, []);

    const addBlog = (blog) => {
        try {
            const newBlog = {
                ...blog,
                id: Date.now().toString(),
                userId: user.id,
                author: user.name,
                createdAt: new Date().toISOString()
            };

            const updatedBlogs = [...blogs, newBlog];
            localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
            setBlogs(updatedBlogs);
            return true;
        } catch (error) {
            console.error('Error adding blog:', error);
            throw error;
        }
    };

    const deleteBlog = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
        localStorage.setItem('blogs', JSON.stringify(newBlogs));
    };

    const updateBlog = (id, updatedBlog) => {
        const newBlogs = blogs.map(blog =>
            blog.id === id ? { ...updatedBlog, id } : blog
        );
        setBlogs(newBlogs);
        localStorage.setItem('blogs', JSON.stringify(newBlogs));
    };

    return (
        <BlogContext.Provider value={{
            blogs,
            addBlog,
            deleteBlog,
            updateBlog,
            user,
            setUser
        }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => useContext(BlogContext);
