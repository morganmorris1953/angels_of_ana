import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, {
    // Component,
    useState
} from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// // components
import AppNav from './components/AppNav.js';
import HomePage from './pages/HomePage.js';
import Shop from './pages/Shop.js';
import Charities from './pages/Charities.js';
import Cart from './pages/Cart.js'
import News from './pages/News.js'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logout from './pages/Logout';
import CheckoutForm from './pages/CheckoutForm';
import Dashboard from './pages/Dashboard';
import Weather from './pages/Weather';


// const apiKey = process.env.OPENWEATHERMAP_API_KEY
// const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=816a5e33ed536fb2f0299d8e18ce0e0d'
function App() {
    const [searchQuery, setSearchQuery] = useState(null);
    return ( <
        div className = 'main'
        style = {
            {
                backgroundImage: "linear-gradient(to right, #000000, #DA291C, #00843D)",
                minHeight: "100vh",
                color: "white",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: 'calc(10px + 2vmin'
            }
        } >

        <
        BrowserRouter >
        < AppNav setSearchQuery = { setSearchQuery } /> 
    <Routes >
    <Route exact path = "/" navValue = 'home' element = { < HomePage / > } /> 
    <Route exact path = "/pages/shop" navValue = 'shop' element = { < Shop / > } /> 
    <Route exact path = '/pages/news' navValue = 'news' element = { < News / > } /> 
    <Route exact path = "/pages/charities" navValue = 'charities' element = { < Charities / > } /> 
    <Route exact path = "/pages/weather" navValue = 'weather' element = { < Weather / > } /> 
    <Route exact path = '/signup' element = { < Signup / > } />   
    <Route exact path = '/pages/login' element = { < Login / > } />
    <Route exact path = '/pages/logout' element = { < Logout / > } />
    <Route exact path = '/cart' element = { < Cart / > } />
    <Route exact path = 'pages/checkoutform' element = { < CheckoutForm / > } /> 
    <Route exact path = 'pages/dashboard' element = { < Dashboard / > } /> 
    </Routes> 
  </BrowserRouter> 
  </div >
    );
}

export default App;
