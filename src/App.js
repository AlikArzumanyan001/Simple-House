import './assets/style/global.css';
import Header from './pages/header/index';
import Block from './pages/block/index';
import Footer from './pages/footer/index';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/index';
import Contact from './pages/contact/index';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Block/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
