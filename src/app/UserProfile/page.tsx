'use client';

import React, { useState } from 'react';
import NewsletterSubscription from '../Component/Newsletter';
import Image from 'next/image';

// Define the type for user data
type User = {
  name: string;
  email: string;
  profilePicture: string;
  recentActivity: string[];
};

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
    recentActivity: [
      'Beige Slim-Fit Jogger Pants.',
      'Reviewed the product "Casual Green Bomber Jacket".',
      'Added a Black Striped T-Shirt to the wishlist.',
    ],
  });

  const [editableUser, setEditableUser] = useState<User>({ ...user });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof User) => {
    setEditableUser({
      ...editableUser,
      [field]: e.target.value,
    });
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageURL = URL.createObjectURL(e.target.files[0]);
      setEditableUser({
        ...editableUser,
        profilePicture: imageURL,
      });
    }
  };

  const handleSaveChanges = () => {
    setUser(editableUser); // Save the changes back to the original user state
    alert('Profile updated successfully!');
  };

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">User Profile</h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src={editableUser.profilePicture}
              alt="Profile Picture"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover mx-auto sm:mx-0"
            />
            <input
              type="file"
              accept="image/*"
              className="mt-4 text-sm text-gray-500"
              onChange={handleProfilePictureChange}
            />
          </div>
          <div className="text-center sm:text-left mt-4 sm:mt-0">
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-gray-800" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={editableUser.name}
                onChange={(e) => handleInputChange(e, 'name')}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2 mt-4">
              <label className="block text-lg font-semibold text-gray-800" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={editableUser.email}
                onChange={(e) => handleInputChange(e, 'email')}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleSaveChanges}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all w-full sm:w-auto"
          >
            Save Changes
          </button>
        </div>

        <div className="space-y-4 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Recent Activity</h2>
          <ul className="list-disc pl-6 space-y-2">
            {editableUser.recentActivity.map((activity, index) => (
              <li key={index} className="text-gray-700">{activity}</li>
            ))}
          </ul>
        </div>
      </div>
      <NewsletterSubscription />
    </section>
  );
};

// Ensure that this component is exported as the default export
export default UserProfile;


