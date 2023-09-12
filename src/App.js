import Home from './pages/Home';
import Category from './pages/Category';
import Header from './components/Header';
import Footer from './components/Footer';


import { Routes, Route } from 'react-router-dom';
import SingleBlog from './pages/SingleBlog';
import Contact from './pages/Contact';


function App() {

  return (
    <div className='app'>

      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/design' element={<Category />} />
        <Route path='/post/:id' element={<SingleBlog />} />
        <Route path='/tutorials' element={<SingleBlog />} />
        {/* <Route path='/post/:id' element={<Contact />} /> */}
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
     
    </div >
    
  );
}



export default App;
