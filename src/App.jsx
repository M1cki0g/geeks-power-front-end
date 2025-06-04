import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import { Navbar } from './layout/navbar';
import { Footer } from './layout/Footer';
import Home from './components/Home';
import { AjouterBlog } from './pages/Ajouter_blog';
import { Blogs } from './pages/Blogs';
import { Login } from './pages/login';
import { Register } from './pages/Register';


function App() {
  return (
    <BlogProvider>
      <BrowserRouter>
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
      </BrowserRouter>
    </BlogProvider>
  );

  )
}

export default App;
