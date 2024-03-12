import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Home from './pages/Home';
import ProductListing from './pages/Product-Listing';
import ProductDetails from './pages/Product-Details';

function App() {
  
  return (

    <BrowserRouter>
      <div className='app'>
        <h1>breadcrumbs</h1>

        {/* breadcrumbs  */}

        {/* routes  */}
        <Routes>
          <Route path='/' element={ <Home /> } />

          <Route path='/products' element={ <ProductListing /> } />

          <Route path='/product/:id' element={ <ProductDetails /> } />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
