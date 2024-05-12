import React from 'react';
import '../Common.css';

const Home = () => {
  return (
    <div className=" home-style container text-center mt-5 d-flex flex-column justify-content-center">
      <h1>Welcome to MERN Stack Application</h1>
      <h3>About This Application</h3>
      <p>
        This is a MERN stack application featuring a Todo application with CRUD operations and a Weather application.
      </p>
    </div>
  );
}

export default Home;
