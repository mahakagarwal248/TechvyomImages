import './App.css';
import Navbar from '../src/components/Navbar/Navbar'
// import IntroPage from './components/Sevent/IntroPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Gevent from './components/Gevent/Gevent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path ="/" element={<div className="App">
      <Navbar/>
      {/* <IntroPage/> */}
      <Gevent/>
    </div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
