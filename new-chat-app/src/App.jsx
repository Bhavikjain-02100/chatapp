import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../../new-chat-app/src/components/Register';
import Login from '../../new-chat-app/src/components/Login';
import ProfilePictureUpload from '../../new-chat-app/src/components/ProfilePictureUpload';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile-pic" element={<ProfilePictureUpload />} />
      </Routes>
    </Router>
  );
};

export default App;
