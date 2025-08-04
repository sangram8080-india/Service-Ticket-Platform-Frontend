// Profile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ userId }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
  });
  const [imageUrl, setImageUrl] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ ...user });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user details and image
  useEffect(() => {
    const fetchData = async () => {
      try {
        // GET user details: (API path implied as /api/users/{id})
        const { data: userData } = await axios.get(`/api/users/${userId}`);
        setUser({
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          department: userData.department,
        });
        setForm({
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          department: userData.department,
        });

        // GET user image
        const imageRes = await axios.get(`/api/users/users/${userId}/profile-image`, {
          responseType: 'blob',
        });
        setImageUrl(URL.createObjectURL(imageRes.data));
      } catch (err) {
        alert("Failed to load user profile.");
      }
      setLoading(false);
    };
    fetchData();
  }, [userId]);

  // Handle field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Save profile and image together
  const handleSave = async (e) => {
    e.preventDefault();

    try {
      // If image is uploaded, use update-with-image endpoint (multipart); otherwise, standard update
      if (imageFile) {
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('phone', form.phone);
        formData.append('department', form.department);
        formData.append('image', imageFile);

        await axios.put(`/api/users/users/${userId}/update-with-image`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await axios.put(`/api/users/${userId}/update`, form);
      }

      alert('Profile updated successfully.');
      setUser(form);
      setEditMode(false);

      // Optionally reload image
      if (imageFile) {
        setImageUrl(previewImage);
        setPreviewImage(null);
        setImageFile(null);
      }
    } catch (error) {
      alert('Failed to update profile.');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mt-4" style={{ maxWidth: 500 }}>
      <h2 className="mb-3">My Profile</h2>
      <div className="card">
        <div className="card-body">
          {/* Profile Image */}
          <div className="text-center mb-3">
            <img
              src={previewImage || imageUrl || 'https://via.placeholder.com/100'}
              alt="Profile"
              className="rounded-circle mb-2"
              style={{ width: 100, height: 100, objectFit: 'cover', border: '2px solid #eee' }}
            />
            {editMode && (
              <div>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control mt-2"
                  onChange={handleImageChange}
                />
              </div>
            )}
          </div>

          <form onSubmit={handleSave}>
            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              {editMode ? (
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              ) : (
                <div>{user.name}</div>
              )}
            </div>
            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              {editMode ? (
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              ) : (
                <div>{user.email}</div>
              )}
            </div>
            {/* Phone */}
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              {editMode ? (
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              ) : (
                <div>{user.phone}</div>
              )}
            </div>
            {/* Department */}
            <div className="mb-3">
              <label className="form-label">Department</label>
              {editMode ? (
                <input
                  type="text"
                  className="form-control"
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                />
              ) : (
                <div>{user.department}</div>
              )}
            </div>

            {/* Action buttons */}
            <div className="d-flex flex-row gap-2">
              {editMode ? (
                <>
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                  <button type="button" className="btn btn-secondary" onClick={() => {
                    setEditMode(false);
                    setForm({ ...user });
                    setPreviewImage(null);
                    setImageFile(null);
                  }}>Cancel</button>
                </>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => setEditMode(true)}
                >
                  Edit Profile
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
