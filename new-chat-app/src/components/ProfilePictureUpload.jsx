import React, { useState } from 'react';
import axios from 'axios';

const ProfilePictureUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    const token = localStorage.getItem('access_token');

    try {
      const response = await axios.post(' http://127.0.0.1:8000/api/profile-pic/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
      alert('Profile picture uploaded successfully!');
      console.log('File URL:', response.data.file_url);
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Upload Profile Picture</h2>
      <div className="mb-3">
        <input type="file" className="form-control" onChange={handleFileChange} />
      </div>
      <button onClick={handleUpload} className="btn btn-primary">Upload</button>
    </div>
  );
};

export default ProfilePictureUpload;
