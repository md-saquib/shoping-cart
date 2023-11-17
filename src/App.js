import './App.css';
// import SimplePage from './component/SimplePage';
import { Provider } from 'react-redux';
import { store } from './redux/store/Store';
// import LoginPage from './component/loginPage/LoginPage';
import Header from './component/header/Header';
import { Routes,Route } from 'react-router-dom';
import {Home} from './component/header/nav-option/nav-componet/home/Home';
import About from './component/header/nav-option/nav-componet/about/About';
import Profile from './component/header/nav-option/nav-componet/profile/Profile';
import Detail from './component/header/nav-option/nav-componet/detial/Detail';
import Contact from './component/header/nav-option/nav-componet/contact/Contact';
import CartPage from './component/header/cart/cartpage/CartPage';

function App() {
  return (
    <Provider store={store}>
     
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Detail' element={<Detail/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/cartpage' element={<CartPage/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
