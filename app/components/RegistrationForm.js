'use client';

import { useEffect, useState } from 'react';

export default function RegistrationForm() {
  // Add state for username and usernameErrorText
  const [username, setUsername] = useState('');
  const [usernameErrorText, setusernameErrorText] = useState('');

  // Add state for password and passwordErrortext
  const [password, setPassword] = useState('');
  const [passwordErrortext, setpasswordErrortext] = useState('');

  // Add state for confirmPassword and confirmPasswordErrorText
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState('');

  // Extra - add state for email and emailErrorText
  const [email, setEmail] = useState('');
  const [emailErrorText, setemailErrorText] = useState('');

  // Add state for isFormValid
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const isUsernameValid = username.length >= 3;
    const isPasswordValid = password.length >= 8;
    const isConfirmPasswordValid =
      confirmPassword === password && confirmPassword.length >= 8;
    setIsFormValid(
      isUsernameValid && isPasswordValid && isConfirmPasswordValid
    );
  };

  useEffect(() => {
    validateForm();
  }, [username, password, confirmPassword]);

  // Add state to set formData
  const [formData, setFormData] = useState(null); // For storing and displaying results

  // Add function to validateForm

  // Add function to validate username

  // Add function to validate password

  // Add function to validate confirm password

  // Extra add function to validate email

  // Add function to handle username change

  // Add function to handle password change

  // Add function to handle confirm password change

  // Extra - Add function to handle email value change

  // Create a handleSubmitFunction
  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
  };

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-wrap lg:flex-nowrap gap-8 w-full justify-center">
        {/* Form Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-blue-500 mb-6 text-center">
            Registration Form
          </h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block font-semibold mb-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username} //added value
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                // onchange function

                onChange={(event) => {
                  console.log(event);
                  const value = event.target.value;
                  setUsername(value);
                  if (value.length === 0) {
                    setusernameErrorText('Name is required');
                  } else if (value.length > 0 && value.length < 3) {
                    setusernameErrorText(
                      'Name must be greater than or equal to 3 characters'
                    );
                  } else {
                    setusernameErrorText('');
                  }
                }}
                placeholder="Enter your name"
              />
              {usernameErrorText && (
                <p className="text-red-500 text-sm mt-2">{usernameErrorText}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block font-semibold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password} //added value
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                // onchange password function
                onChange={(event) => {
                  console.log(event);
                  const value = event.target.value;
                  setPassword(value);
                  if (value.length === 0) {
                    setpasswordErrortext('Password is required');
                  } else if (value.length > 0 && value.length < 8) {
                    setpasswordErrortext(
                      'Password must be greater than or equal to 8 characters'
                    );
                  } else {
                    setpasswordErrortext('');
                  }
                }}
                placeholder="Enter your password"
              />
              {passwordErrortext && (
                <p className="text-red-500 text-sm mt-2">{passwordErrortext}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block font-semibold mb-2"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword} //added confirm-password value
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                // onchange confirm-password function
                onChange={(event) => {
                  console.log(event);

                  const newValue = event.target.value;

                  setConfirmPassword(newValue);

                  if (newValue.length < 8) {
                    setConfirmPasswordErrorText(
                      'Confirm Password must be greater than or equal to 8 characters'
                    );
                  } else if (newValue !== password) {
                    setConfirmPasswordErrorText('Passwords must match ');
                  } else {
                    setConfirmPasswordErrorText('');
                  }
                }}
                placeholder="Confirm your password"
              />
              {confirmPasswordErrorText && (
                <p className="text-red-500 text-sm mt-2">
                  {confirmPasswordErrorText}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email (Optional):
              </label>
              <input
                type="email"
                id="email"
                value={email} //added value
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                // onchange email function
                onChange={(event) => {
                  const value = event.target.value;
                  setEmail(value);
                  if (value.length === 0) {
                    setemailErrorText('Email is required');
                  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    setemailErrorText('Please enter valid email');
                  } else {
                    setemailErrorText('');
                  }
                }}
                placeholder="Enter your email"
              />
              {emailErrorText && (
                <p className="text-red-500 text-sm mt-2">{emailErrorText}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-2 rounded ${
                isFormValid
                  ? 'bg-blue-500 text-white cursor-pointer'
                  : 'bg-gray-600 text-gray-300 cursor-not-allowed'
              }`}
            >
              Register
            </button>
          </form>
        </div>

        {/* Results Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-bold text-blue-500 mb-4">
            Registration Results
          </h2>
          {formData ? (
            <div>
              <p className="mb-2">
                <span className="font-semibold">Username:</span>
                {formData.username}
              </p>
              <p>
                <span className="font-semibold">Email:</span>
                {formData.email || 'N/A'}
              </p>
            </div>
          ) : (
            <p className="text-gray-400">No registration details to show.</p>
          )}
        </div>
      </div>
    </div>
  );
}
