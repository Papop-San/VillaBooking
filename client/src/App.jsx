import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Home from './pages/Home';
import Proper from './pages/Proper';
import Detail from './pages/Detail';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proper" element={<Proper />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;