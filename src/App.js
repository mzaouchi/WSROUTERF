import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NavUser from './Components/NavUser';
import Profil from './Components/Profil';
import UsersList from './Components/UsersList';

function App() {
  const [users,setUsers] = useState([
    {name : "Mamino", age:20, id : Math.random()},
    {name : "Aziz1", age:19, id : Math.random()},
    {name : "Aziz2", age:21, id : Math.random()},
    {name : "Raslen", age:27, id : Math.random()}
  ])
  return (
    <div>
      {/* <UsersList users={users}/> */}
      <NavUser/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listUsers' element={<UsersList users={users}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/user/:oussema' element={<Profil users={users}/>}/>
      </Routes>
    </div>
  );
}

export default App;
