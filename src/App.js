import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/LoginPage/Login';
import Dashboard from './components/Dashboard/Dashboard';
import ListPage from './components/ListPage/ListPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Login/>}/>
          <Route  path='/IT_dashboard' element={<Dashboard />}/>
          <Route  path='/IT_ticket' element={<ListPage />}/>
          <Route path='*' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
