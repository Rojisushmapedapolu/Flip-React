import './App.css';
import Searchbar from './components/Searchbar.js';
import  Banner from './components/Banner.js';
import './css/bootstrap.css';
import Products from './components/Products.js';
import Maxi from './components/Maxi.js';
import Forms from './components/Forms';
import  Menu from './components/Menu';



function App() {
  return (
   <>
   <div className='container-fluid sample'>
        <div className='row'>
                <Searchbar/>
                <Menu/>
                <Banner/>
                <Products/>
                <Maxi/>
                <Forms/>
                
        </div>
   </div>
   </>
  );
}

export default App;
