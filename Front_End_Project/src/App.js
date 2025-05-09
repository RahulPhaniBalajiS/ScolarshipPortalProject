import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [scholarships] = useState([
    { id: 1, name: 'Merit Scholarship', description: 'For students with high academic performance.', amount: '$5000', eligibility: 'GPA > 3.5', deadline: '2023-12-31' },
    { id: 2, name: 'Need-Based Grant', description: 'For students demonstrating financial need.', amount: '$3000', eligibility: 'Income < $50k', deadline: '2023-11-30' }
  ]);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home scholarships={scholarships} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;