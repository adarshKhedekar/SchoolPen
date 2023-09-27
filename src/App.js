import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* creating routes to navigate */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:option' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
