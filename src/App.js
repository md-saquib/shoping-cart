import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/Store';
// import LoginPage from './component/loginPage/LoginPage';
import Header from './component/header/Header';
import { Routes,Route } from 'react-router-dom';
import {Home} from './component/header/nav-option/nav-componet/home/Home';
import About from './component/header/nav-option/nav-componet/about/About';
import Profile from './component/header/nav-option/nav-componet/profile/Profile';
import CartPage from './component/header/cart/cartpage/CartPage';

function App() {
  return (
    <Provider store={store}>
     
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/cartpage' element={<CartPage/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
