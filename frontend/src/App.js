import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Post } from './components/Post/Post';
import  Contact  from './components/Contact/Contact';
import { SinglePost } from './components/SinglePost/SinglePost';
import { NavBar } from './components/Navbar/NavBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home />} path='/' exact />
        <Route element={<SinglePost />} path='/post/:slug' />
        <Route element={<Post />} path='/post' />
        <Route element={<Contact />} path='/contact' />

      </Routes>
      
    </BrowserRouter>
  )
}

export default App;
