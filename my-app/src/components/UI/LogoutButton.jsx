import React, { useState } from 'react';

function LogoutButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Perform any additional logout operations here (e.g., clearing local storage, making API calls, etc.)
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <p>You are logged out</p>
      )}
    </div>
  );
}

export default LogoutButton;
