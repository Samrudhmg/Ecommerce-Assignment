
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import ShopCategory from './components/ShopCategory';
import Products from './components/Products';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import Kid_banner from './components/Assets/banner_kids.png';



function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/'  element={<Shop/>}/>
          <Route path='/mens'  element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/womens'  element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/kids'  element={<ShopCategory banner={Kid_banner} category="kid"/>}/>
          <Route path='/product' element={<Products/>}/> 
          <Route path='/product/:productId' element={<Products/>}/>
          <Route path='/cart'  element={<Cart/>}/>

          
        </Routes>
        
        </Router>
    </div>
  );
}

export default App;
