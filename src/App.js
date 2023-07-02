import './App.css';
import AppHeader from './components/header/header';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Search from './pages/search/search';
import Profile from './pages/profile/profile';
import CurriculumHeader from './components/curriculumHeader/curriculumHeader';
import Curriculum from './pages/curriculum/curriculum';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
//
function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <AppHeader />
        <Routes>
          <Route exact index element={<Home />} />
          <Route exact path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/curriculum" element={<Curriculum />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
