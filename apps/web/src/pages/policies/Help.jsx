import { useState } from 'react';
import { Link } from 'react-router-dom';

const Help = () => {
  // State for FAQ toggles
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Toggle FAQ item
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="h-full px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white p-8 mb-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
            <p className="text-lg mb-6">Find answers to common questions or contact our support team for assistance.</p>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search help articles..." 
                className="w-full py-4 px-6 rounded-lg  text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Help Options */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12">Quick Help Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* FAQ Card */}
            <div className="bg-neutral-300 dark:bg-neutral-800 p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">FAQs</h3>
              <p className="dark:text-neutral-200 text-gray-600 mb-4">Find answers to frequently asked questions about your account and our services.</p>
              <a href="#faq" className="text-blue-600 font-medium">Browse FAQs →</a>
            </div>

            {/* Contact Card */}
            <div className="bg-neutral-300 dark:bg-neutral-800 p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Contact Support</h3>
              <p className="dark:text-neutral-200 text-gray-600 mb-4">Can't find what you need? Reach out to our support team for assistance.</p>
              <a href="#contact" className="text-blue-600 font-medium">Contact Us →</a>
            </div>

            {/* Guides Card */}
            <div className="bg-neutral-300 dark:bg-neutral-800 p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Guides & Tutorials</h3>
              <p className="dark:text-neutral-200 text-gray-600 mb-4">Learn how to make the most of your account with our step-by-step guides.</p>
              <a href="#" className="text-blue-600 font-medium">View Guides →</a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-7xl mx-auto">
            <div className="bg-neutral-300 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
              {/* FAQ Item 1 */}
              <div className="border-b">
                <button 
                  className="w-full py-5 px-6 text-left flex justify-between items-center hover:bg-neutral-200 dark:hover:bg-gray-700"
                  onClick={() => toggleFaq(0)}
                >
                  <span className="font-medium">How do I update my profile information?</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 text-blue-500 transition-transform ${activeFaq === 0 ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === 0 && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600">To update your profile information, go to your profile page and click the "Edit Profile" button. You can then modify your details and save your changes.</p>
                  </div>
                )}
              </div>

              {/* FAQ Item 2 */}
              <div className="border-b">
                <button 
                  className="w-full py-5 px-6 text-left flex justify-between items-center hover:bg-neutral-200 dark:hover:bg-gray-700"
                  onClick={() => toggleFaq(1)}
                >
                  <span className="font-medium">How can I change my password?</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 text-blue-500 transition-transform ${activeFaq === 1 ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === 1 && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600">To change your password, go to Settings > Security. Enter your current password, then your new password twice to confirm. Click "Save Changes" to update your password.</p>
                  </div>
                )}
              </div>

              {/* FAQ Item 3 */}
              <div className="border-b">
                <button 
                  className="w-full py-5 px-6 text-left flex justify-between items-center hover:bg-neutral-200 dark:hover:bg-gray-700"
                  onClick={() => toggleFaq(2)}
                >
                  <span className="font-medium">Why is my email not verified?</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 text-blue-500 transition-transform ${activeFaq === 2 ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === 2 && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600">If your email is not verified, check your spam folder for the verification email. You can also request a new verification email from your account settings. Make sure you've entered the correct email address.</p>
                  </div>
                )}
              </div>

              {/* FAQ Item 4 */}
              <div className="border-b">
                <button 
                  className="w-full py-5 px-6 text-left flex justify-between items-center hover:bg-neutral-200 dark:hover:bg-gray-700"
                  onClick={() => toggleFaq(3)}
                >
                  <span className="font-medium">How do I update my profile picture?</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 text-blue-500 transition-transform ${activeFaq === 3 ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === 3 && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600">To update your profile picture, go to your profile and hover over your current picture. Click the camera icon that appears to upload a new image from your device.</p>
                  </div>
                )}
              </div>

              {/* FAQ Item 5 */}
              <div className="">
                <button 
                  className="w-full py-5 px-6 text-left flex justify-between items-center hover:bg-neutral-200 dark:hover:bg-gray-700"
                  onClick={() => toggleFaq(4)}
                >
                  <span className="font-medium">How can I delete my account?</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 text-blue-500 transition-transform ${activeFaq === 4 ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === 4 && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600">To delete your account, go to Settings > Account. Scroll down to find the "Delete Account" option. Please note that this action is permanent and cannot be undone.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className=" bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6">Contact Support</h2>
                <p className="mb-6">Our support team is here to help you with any questions or issues you may have.</p>
                <div className="space-y-4 grid grid-cols-1 md:grid-cols-3">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p>support@profilesite.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Response Time</h3>
                      <p>Typically within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">What to Include</h3>
                      <p>Your user ID and a detailed description of your issue</p>
                    </div>
                  </div>
                
                </div>
                <Link to="/contact" className="mt-6 bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100">Contact Support</Link>

            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-300 dark:bg-neutral-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Documentation
              </h3>
              <p className="dark:text-neutral-200 text-gray-600 mb-4">Comprehensive guides and documentation for all features.</p>
              <a href="#" className="text-blue-600 font-medium">View Documentation →</a>
            </div>

            <div className="bg-neutral-300 dark:bg-neutral-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Video Tutorials
              </h3>
              <p className="dark:text-neutral-200 text-gray-600 mb-4">Watch step-by-step video tutorials to master our platform.</p>
              <a href="#" className="text-blue-600 font-medium">Watch Tutorials →</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Help;