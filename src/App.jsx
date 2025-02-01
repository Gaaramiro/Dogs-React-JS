import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Login from './Components/Login/Login';
import './App.css';
import { UserStorage } from './UserContext';
import ProtectedRouter from './Components/Helper/ProtectedRouter';
import User from './Components/User/User';
import Photo from './Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './NotFound';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/Dogs-React-JS" element={<Home />}></Route>
              <Route path="login/*" element={<Login />}></Route>
              <Route path="foto/:id" element={<Photo user={User} />}></Route>
              <Route
                path="conta/*"
                element={
                  <ProtectedRouter>
                    <User />
                  </ProtectedRouter>
                }
              ></Route>
              <Route path="perfil/:user" element={<UserProfile />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
