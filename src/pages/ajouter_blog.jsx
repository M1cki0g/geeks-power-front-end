import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

export const AjouterBlog = () => {
    const navigate = useNavigate();
    const { addBlog } = useBlog();
    const [title, setTitle] = useState('');
    const [text, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !text.trim()) {
            alert('Veuillez remplir tous les champs obligatoires');
            return;
        }

        try {
            const postData = {
                title: title.trim(),
                image: imageUrl.trim(),
                text: text.trim(),
            };

            const response = await fetch('http://localhost:5000/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Clear form and navigate
            setTitle('');
            setContent('');
            setImageUrl('');
            navigate('/blogs');

        } catch (error) {
            console.error('Error:', error);
            alert('Échec de l\'ajout du blog. Veuillez réessayer plus tard.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
            <h1 className="text-2xl font-bold mb-4">Ajouter un Blog</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="title">Titre</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        placeholder="Entrez le titre du blog"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="text">Contenu</label>
                    <textarea
                        id="text"
                        rows="4"
                        value={text}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        placeholder="Entrez le contenu du blog"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="imageUrl">URL de l'image</label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="https://exemple.com/image.jpg"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt="Preview"
                            className="mt-2 w-full h-48 object-cover rounded"
                        />
                    )}
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
                    Ajouter Blog
                </button>
            </form>
        </div>
    );
};
