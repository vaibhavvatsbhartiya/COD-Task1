import React from 'react';
import '../Common.css';

const Home = () => {
  return (
    <div className=" home-style container text-center mt-5 d-flex flex-column justify-content-center">
      <h1>Welcome to MERN Stack Application</h1>
      <h3>About This Application</h3>
      <p>
      This MERN stack application includes a Todo application with CRUD operations, allowing users to Create, Read, Update, and Delete tasks. It also features a Weather application that enables users to search for climate conditions or climate status worldwide.
      </p>
    </div>
  );
}

export default Home;
