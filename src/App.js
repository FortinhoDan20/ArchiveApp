import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import MainLayout from './components/MainLayout';
import MailReceived from './pages/mail/MailReceived';
import Expedier from './pages/mail/MailShipped';
import ListMailShipped from './pages/mail/ListMailShipped';
import ListMailReceived from './pages/mail/ListMailReceived';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Login/>} />
        <Route path = "/admin" element={<MainLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="mail-shipped" element={<Expedier />} />
            <Route path="mail-received" element={<MailReceived />} />
            <Route path="list-mail-shipped" element={<ListMailShipped />} />
            <Route path="list-mail-received" element={<ListMailReceived />} />
            <Route path="mail-shipped" element={<Expedier />} />
            <Route path="mail-received" element={<Expedier />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
