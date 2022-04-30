import './App.css';
import Navbar from '../src/components/Navbar/Navbar'
import IntroPage from './components/IntroPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path ="/" element={<div className="App">
      <Navbar/>
      <IntroPage/>
    </div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
