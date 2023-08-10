
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SideBar from './components/sidebar';
import Profile from './components/Profile/Index';

function App() {
  return (
    <div className='app-container'>
      <Navbar/>
      <div className='navigation-container'>
      <SideBar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/sign-up' element={<Signup/>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>  
      </div>
    </div>
  );
}

export default App;
