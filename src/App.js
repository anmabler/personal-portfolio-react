import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import ExperiencePage from './views/ExperiencePage';
import ContactPage from './views/ContactPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/experience" element={<ExperiencePage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
