import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';


import Home from './pages/Home/Home';
import About from './pages/About/About';
import SmartPhone_Details from './pages/SmartPhone/SmartPhone_Details';
import Cart from './pages/Cart/Cart';


function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/smartphone/:id' element={< SmartPhone_Details />}></Route>
          <Route exact path='/Cart' element={< Cart />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
