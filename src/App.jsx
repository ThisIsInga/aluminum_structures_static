import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.jsx';
import Door from './components/Sections/Door/Door.jsx'
import Window from './components/Sections/Window/Window.jsx'
import StainedGlasses from './components/Sections/StainedGlasses/StainedGlasses.jsx';
import Sales from './components/Sections/Sales/Sales.jsx'
import Product from './components/Product/Product.jsx'
import Cost from './components/Sections/Cost/Cost.jsx'

function App() {
  return (
    <BrowserRouter>  {/* Это запускает маршрутизацию */}
      <Routes> {/* Это группирует маршруты */}
        <Route path="/" element={<HomePage />} />  {/* Это определяет маршрут */}
        <Route path="/door" element={<Door />} />
        <Route path="/window" element={<Window />} />
        <Route path="/stainedglasses" element={<StainedGlasses />} />
        <Route path="/cost" element={<Cost />} />
        <Route path="/sale" element={<Sales />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
