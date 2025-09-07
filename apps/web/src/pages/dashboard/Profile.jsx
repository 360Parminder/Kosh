import { useState } from 'react';

const Profile = () => {
  // Sample user data
  const [user, setUser] = useState({
    _id: { $oid: "68bdc20f2e5ec28acb7dd2a3" },
    avatar: "https://res.cloudinary.com/dvo4tvvgb/image/upload/v1737770516/Profile/image.jpg",
    firstName: "Parminder",
    lastName: "singh",
    email: "sadelal879@matmayer.com",
    verifyEmail: false,
    mobile: "1234567899",
    dateOfBirth: { $date: "2025-09-08T00:00:00.000Z" },
    role: "user",
    active: true,
    __v: 0
  });

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
      <div className="max-w-full min-h-full mx-auto overflow-hidden">
        {/* Profile Content */}
        <div className="p-6">
          {/* Avatar and Basic Info */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <div className="relative">
              <img
                src={user.avatar}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-neutral-800 dark:border-neutral-200 shadow-lg"
              />
              <div className="absolute bottom-0 right-0 bg-indigo-600 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold ">
                {user.firstName} {user.lastName}
              </h2>
              <p className="dark:text-neutral-200 text-gray-600 capitalize">{user.role}</p>
              <div className="flex items-center justify-center md:justify-start mt-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${user.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {user.active ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
          </div>
          
          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium  mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Personal Information
              </h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm dark:text-neutral-200">First Name</p>
                  <p className="font-medium capitalize">{user.firstName}</p>
                </div>
                
                <div>
                  <p className="text-sm dark:text-neutral-200">Last Name</p>
                  <p className="font-medium capitalize">{user.lastName}</p>
                </div>
                
                <div>
                  <p className="text-sm dark:text-neutral-200">Date of Birth</p>
                  <p className="font-medium">{formatDate(user.dateOfBirth.$date)}</p>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium  mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Information
              </h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm dark:text-neutral-200">Email Address</p>
                  <div className="flex items-center">
                    <p className="font-medium mr-2">{user.email}</p>
                    {user.verifyEmail ? (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Unverified</span>
                    )}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm dark:text-neutral-200">Mobile Number</p>
                  <p className="font-medium">{user.mobile}</p>
                </div>
                
                <div>
                  <p className="text-sm dark:text-neutral-200">User ID</p>
                  <p className="font-medium text-sm truncate">{user._id.$oid}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-end mt-8 space-x-4">
            <button className="px-4 py-2  rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Edit Profile
            </button>
            {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Save Changes
            </button> */}
          </div>
        </div>
      </div>
  );
};

export default Profile;