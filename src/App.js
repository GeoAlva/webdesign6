import './App.css';
import AppHeader from './components/header/header';
import Home from './pages/home';
import Contacts from './pages/contacts'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <AppHeader />
        </header>
        <Routes>
          <Route exact index element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/contacts' element={<Contacts />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
