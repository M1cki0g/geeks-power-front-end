import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

export const AjouterBlog = () => {
    const navigate = useNavigate();
    const { addBlog } = useBlog();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            alert('Veuillez remplir tous les champs obligatoires');
            return;
        }

        try {
            addBlog({
                title: title.trim(),
                content: content.trim(),
                image: previewUrl || null
            });

            // Clear form and navigate
            setTitle('');
            setContent('');
            setImage(null);
            setPreviewUrl('');

            // Navigate after successful addition
            navigate('/blogs', { replace: true });
        } catch (error) {
            console.error('Error:', error);
            alert('Échec de l\'ajout du blog. Veuillez réessayer.');
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
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
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="content">Contenu</label>
                    <textarea
                        id="content"
                        rows="4"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        placeholder="Entrez le contenu du blog"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full"
                    />
                    {previewUrl && (
                        <img
                            src={previewUrl}
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
