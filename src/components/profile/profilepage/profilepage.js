import React, { useState, useEffect } from 'react';
import './profilepage.css';
import Navbar from '../Navbar/navbar';
import axios from 'axios';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    rollno: '',
    username: '',
    profilePic: '',
  });
  const [newProfilePic, setNewProfilePic] = useState(null);
  
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchUserData = async () => {
    try {
      const response = await axios.get('your-api-endpoint');
      setUserData(response.data);
      setIsLoading(false); // Set loading to false on successful data fetch
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  fetchUserData();
}, []);
  
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      if (newProfilePic) {
        const formData = new FormData();
        formData.append('profilePic', newProfilePic);
  
        const uploadResponse = await axios.post('upload-profile-pic-endpoint', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        setUserData((prevUserData) => ({
          ...prevUserData,
          profilePic: uploadResponse.data.profilePicUrl,
        }));
      }
  
      // Implement logic here to save other form data if needed
  
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setNewProfilePic(file);
  };

  return (
    <>
      <Navbar />
      <div className="container">
      <section className="profile-section">
        <div className="xyz">
          <div className="abc">
            <div id="profile-pic" style={{ backgroundImage: `url(${userData.profilePic})` }}>
              {isEditing && (
                <div>
                  <label htmlFor="newProfilePic">Change Profile Picture:</label>
                  <input
                    type="file"
                    id="newProfilePic"
                    name="newProfilePic"
                    accept="image/*"
                    onChange={handleProfilePicChange}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="matter">
            {isEditing ? (
              <form>
                <div className="text">
                  <div>
                    <span className="ar">
                      <pre style={{ display: 'inline-block' }}>NAME :</pre>
                    </span>
                    <input
                      type="text"
                      id="name"
                      className="br"
                      name="name"
                      value={userData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <span className="ar">
                      <pre style={{ display: 'inline-block' }}>IITK-Roll Number :</pre>
                    </span>
                    <input
                      type="text"
                      id="rollno-id"
                      className="br"
                      name="rollno"
                      value={userData.rollno}
                      readOnly
                    />
                  </div>
                  <div>
                    <span className="ar">
                      <pre style={{ display: 'inline-block' }}>USERNAME :</pre>
                    </span>
                    <input
                      type="text"
                      id="userName"
                      className="br"
                      name="username"
                      value={userData.username}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="btn">
                  <button type="button" onClick={handleSaveClick}>
                    Save
                  </button>
                  <button type="button" onClick={() => setNewProfilePic(null)}>
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="text">
                <div>
                  <span className="ar">
                    <pre style={{ display: 'inline-block' }}>NAME :</pre>
                  </span>
                  <span id="name" className="br">
                    {userData.name}
                  </span>
                </div>
                <div>
                  <span className="ar">
                    <pre style={{ display: 'inline-block' }}>IITK-Roll Number :</pre>
                  </span>
                  <span id="rollno-id" className="br">
                    {userData.rollno}
                  </span>
                </div>
                <div>
                  <span className="ar">
                    <pre style={{ display: 'inline-block' }}>USERNAME :</pre>
                  </span>
                  <span id="userName" className="br">
                    {userData.username}
                  </span>
                </div>
              </div>
            )}
            <div className="btn">
              {!isEditing && (
                <button type="button" onClick={handleEditClick}>
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
        </section>
      </div>
      
      
    </>
  );
}
