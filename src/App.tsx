import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/home/home'
import About from './pages/about/about';
import Tools from './pages/tools/tools';
import Contact from './pages/contact/contact';

function App() {
  return (
    <Router basename="/ADSProcSuite">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ Router>
  )
}

export default App