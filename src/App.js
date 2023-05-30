import './App.css';
import AppHeader from './components/header/header';
import Home from './pages/home/home';
import Contacts from './pages/contacts'
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Search from './pages/search/search';
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
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contacts' element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
