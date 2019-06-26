import React from 'react';

const Logout = props => {
  localStorage.clear();
  setTimeout(() => {
    props.history.push("/");
  }, 1250)
  return (
    <main className="logout">
      <h2>You have been logged out!</h2>
    </main>
  )
}

export default Logout;
