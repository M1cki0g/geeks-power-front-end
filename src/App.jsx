import { Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import { Navbar } from './layout/Navbar.jsx';  // Updated path
import { Footer } from './layout/Footer.jsx';  // Updated path
import Home from './components/Home.jsx';      // Updated path
import { AjouterBlog } from './pages/Ajouter_blog.jsx';  // Updated path
import { Blogs } from './pages/Blogs.jsx';     // Updated path
import { Login } from './pages/Login.jsx';     // Updated path
import { Register } from './pages/Register.jsx'; // Updated path


function App() {
  return (
    <BlogProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/ajouter-blog" element={<AjouterBlog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BlogProvider>
  );
}

export default App;
